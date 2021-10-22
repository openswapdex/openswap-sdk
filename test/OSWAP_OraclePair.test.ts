
import { BN, constants, expectEvent, expectRevert } from "@openzeppelin/test-helpers";
import BigNumber from 'bignumber.js';
import { padLeft, padRight, numberToBytes32, addressToBytes32, stringToBytes32, addressToBytes32Right, setTime, print } from "./helper";
import Web3 from "web3";
const { expect } = require('chai');

import { Contract } from "@ijstech/eth-wallet";
import { TestERC20 } from './src/contracts/TestERC20';
import { OSWAP_OracleFactory } from '../src/contracts/oracle/OSWAP_OracleFactory';
import { OAXDEX_Governance } from '../src/contracts/gov/OAXDEX_Governance';
import { MockOracleAdaptor } from './src/contracts/MockOracleAdaptor';
import { OAXDEX_VotingRegistry } from '../src/contracts/gov/OAXDEX_VotingRegistry';
import { OAXDEX_VotingContract } from '../src/contracts/gov/OAXDEX_VotingContract';
import { OSWAP_OraclePair } from '../src/contracts/oracle/OSWAP_OraclePair';
import { OSWAP_OracleRouter } from '../src/contracts/router/OSWAP_OracleRouter';
import { OSWAP_OracleLiquidityProvider } from '../src/contracts/oracle/OSWAP_OracleLiquidityProvider';
import { MockSecurityOracle } from './src/contracts/MockSecurityOracle';
import { OAXDEX_VotingExecutor } from '../src/contracts/gov/OAXDEX_VotingExecutor';
import { OSWAP_VotingExecutor2 } from '../src/contracts/oracle/OSWAP_VotingExecutor2';
import { CallFormContract } from './src/contracts/CallFormContract';

import { OpenSwap } from '../src/contracts/OpenSwap';
import { WETH9 } from './src/contracts/WETH9';

import {deploy, IDeployment} from '../src/deploy';
import Wallet from "@ijstech/eth-wallet/lib/wallet";

let deployment: IDeployment;
let weth: WETH9;

const GOV_Token = OpenSwap;
const ERC20 = TestERC20;

let address:any = {};

async function contract(a, f) {
    //deploy
    console.log(a);
    await f();
}
let _price = {};

let now;
let web3:Web3;
let _pvoider;
let _wallet;


function toWei(value: string, decimals: number =18) {
    return new BigNumber(value).shiftedBy(decimals);
}
async function stakeToVote() {
    const govToken = deployment.openSwap;
    const governance = deployment.governance;

    await govToken.approve({spender:governance.address, amount:toWei("1000000")});
    await governance.stake(toWei("1000000"));

    now = (await web3.eth.getBlock('latest')).timestamp;
    now += 2;
    await setTime(this._provider, now);

    await governance.unlockStake();
}
async function newVote(type, quorum, param) {
    const executor = deployment.executor;

    now = (await web3.eth.getBlock('latest')).timestamp;
    let threshold = "50";
    let voteEndTime = now + 30;
    let exeDelay = 3;

    let receipt = await deployment.registry.newVote({
        executor: executor.address,
        name: stringToBytes32(type, true), 
        options: [stringToBytes32('Y', true), stringToBytes32('N', true)],
        quorum: new BigNumber(quorum).shiftedBy(18),
        threshold: new BigNumber(threshold).shiftedBy(18 - 2),
        voteEndTime: voteEndTime,
        executeDelay: exeDelay,
        executeParam: [stringToBytes32(type, true)].concat(param)
    }); 
    let event = await deployment.governance.parseNewVoteEvent(receipt)[0];
    let voteAddr = event.vote;
    console.log("voting address " + voteAddr);

    let voting = new OAXDEX_VotingContract(_wallet, voteAddr);
    await voting.vote(0);

    await setTime(this._provider, voteEndTime + exeDelay + 1);

    return voting;
}
async function createPair(accounts, tokenA, tokenB, priceA, priceB) {
    const factory = deployment.oracleFactory;
    
    now = (await web3.eth.getBlock('latest')).timestamp;

    let tokens = [];
    let prices = [];
    if (tokenA.address != weth.address) {
        tokens.push(tokenA.address);
        prices.push(toWei((priceA).toString()));
    }
    if (tokenB.address != weth.address) {
        tokens.push(tokenB.address);
        prices.push(toWei((priceB).toString()));
    }
    const oracle = new MockOracleAdaptor(_wallet);
    await oracle.deploy({weth:weth.address, decimals:18, tokens:tokens, prices:prices});
    console.log("oracle address " + oracle.address);

    let token0, token1;
    let direction;
    if (new BigNumber(tokenA.address.toLowerCase()).lt(tokenB.address.toLowerCase())) {
        token0 = tokenA.address;
        token1 = tokenB.address;
        direction = true;
    } else {
        token0 = tokenB.address;
        token1 = tokenA.address;
        direction = false;
    }

    let voting = await newVote("setOracle", "1000000", [addressToBytes32Right(token0, true), addressToBytes32Right(token1, true), addressToBytes32Right(oracle.address, true)]);
    await voting.execute();
    console.log("executed");

    
    let receipt = await factory.createPair({tokenA:token0, tokenB:token1});
    let event = factory.parsePairCreatedEvent(receipt)[0];
    
    console.log("pair address " + event.pair);
    let pair = new OSWAP_OraclePair(_wallet, event.pair);

    return [pair, direction];
}
async function createEthPair(accounts, token, price) {
    let tokenA = weth;
    let tokenB = await new ERC20(_wallet).deploy({symbol:token, name:token, initialSupply:0, cap:0, decimals:18});
    let [pair, direction] = await createPair(accounts, tokenA, tokenB, 1, price);

    return [tokenB, pair, direction];
}
async function addLiquidityETH(from, tokenA, toAddTokenA, staked, orderIndex, amountIn, expire, enable, deadline){
    const liquidityProvider = deployment.oracleLiquidityProvider;
    const govToken = deployment.openSwap;

    staked = toWei(staked);
    amountIn = toWei(amountIn);

    await govToken.transfer({recipient:from.address, amount:staked});
    _wallet.account = from;
    await govToken.approve({spender:liquidityProvider.address, amount:staked})
    _wallet.account = _wallet.accounts[0];
    if (toAddTokenA){
        await tokenA.mint(from.address, amountIn);
        _wallet.account = from;
        await tokenA.approve(liquidityProvider.address, amountIn);
        _wallet.account = _wallet.accounts[0];
    }
    _wallet.account = from;
    let receipt = await liquidityProvider.addLiquidityETH({tokenA:tokenA.address, addingTokenA:toAddTokenA, staked:staked, afterIndex:orderIndex, amountAIn:amountIn, expire:expire, enable:enable, deadline:deadline}, toAddTokenA?undefined:amountIn);
    _wallet.account = _wallet.accounts[0];
}
function comaprePool(pool, index, provider, amount, staked, expire) {
        expect(pool.index.map(e=>e.toString())).to.eql(index.map(e=>e.toString()));
        expect(pool.provider.map(e=>e.toString())).to.eql(provider);
        expect(pool.amount.map(e=>e.toString())).to.eql(amount.map(e=>toWei(e)));
        expect(pool.staked.map(e=>e.toString())).to.eql(staked.map(e=>toWei(e)));
        expect(pool.expire.map(e=>e.toString())).to.eql(expire.map(e=>e.toString()));
}

contract('OSWAP_OraclePair 1', function (accounts) {
    let _tokenCounter = 0;
    let _token;
    let _pair;
    let _direction;
    let _expire1, _expire2;
    let _weth, _govToken;
    let _securityOracle;
    let _router;

    before(async function() {
        await stakeToVote();
    });
    beforeEach(async function() {
        now = (await web3.eth.getBlock('latest')).timestamp;
    });

    describe('add/remove liquidity', ()=> {
        before(async ()=> {
            let price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);
        });
        it('should able to add liquidity', async function () {
            let staked = "100";
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 60;
            let deadline = now + 3600;

            let receipt = await addLiquidityETH(accounts[2], _token, true, staked, 0, amountIn, _expire1, true, deadline);

            // events = OSWAP_OraclePair.decodeLogs(receipt.rawLogs);
            // console.log(events);
            // events = ERC20.decodeLogs(receipt.rawLogs);
            // console.log(events);
/*
            await expectEvent.inTransaction(tx, _pair, 'NewProvider', {
                provider: accounts[2],
                index: new BN(1)
            });
            await expectEvent.inTransaction(tx, _pair, 'AddLiquidity', {
                provider: accounts[2],
                direction: _direction,
                staked: toWei(staked),
                amount:  toWei(amountIn),
                newStakeBalance: toWei(staked),
                newAmountBalance:  toWei(amountIn),
                expire: new BN(_expire1),
                enable: true
            });
            await expectEvent.inTransaction(tx, _govToken, 'Transfer', {
                from: accounts[2],
                to: _pair.address,
                value: toWei(staked)
            });
            await expectEvent.inTransaction(tx, _token, 'Transfer', {
                from: accounts[2],
                to: _pair.address,
                value: toWei(amountIn)
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [1], [accounts[2]], ["10000"], ["100"], [_expire1]);

            await expectRevert(
                _pair.addLiquidity(accounts[2], _direction, "0", "0", now+10, {from: accounts[3]})
            , "Not from router or owner");
*/
            //TODO: 1. check if ETH and Token balance of pair balance increased
            //      2. and that of provider decreased
        });
        it ('should able to stake more and add more liquidity', async function () {
            let staked = "50";
            let afterIndex = 0;
            let amountIn = "20000";
            _expire1 = now + 60;
            let deadline = now + 3600;

            let receipt = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline);
/*
            expectEvent.notEmitted.inTransaction(tx, _pair, 'NewProvider');
            await expectEvent.inTransaction(tx, _pair, 'AddLiquidity', {
                provider: accounts[2],
                direction: _direction,
                staked: toWei(staked),
                amount: toWei(amountIn),
                newStakeBalance: toWei("150"),
                newAmountBalance: toWei("30000"),
                expire: new BN(_expire1),
                enable: true
            });
            await expectEvent.inTransaction(tx, _govToken, 'Transfer', {
                from: accounts[2],
                to: _pair.address,
                value: toWei(staked)
            });
            await expectEvent.inTransaction(tx, _token, 'Transfer', {
                from: accounts[2],
                to: _pair.address,
                value: toWei(amountIn)
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [1], [accounts[2]], ["30000"], ["150"], [_expire1]);
*/
        });
        
        it ('2nd provider should able to add liquidity with more staked', async function () {
            let staked = "200";
            let afterIndex = 0;
            let amountIn = "25000";
            _expire2 = now + 60;
            let deadline = now + 3600;

            let receipt = await addLiquidityETH(accounts[3], _token, true, staked, afterIndex, amountIn, _expire2, true, deadline);
/*
            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'NewProvider', {
                provider: accounts[3],
                index: new BN(2)
            });
            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'AddLiquidity', {
                provider: accounts[3],
                direction: _direction,
                staked: toWei(staked),
                amount: toWei(amountIn),
                newStakeBalance: toWei(staked),
                newAmountBalance: toWei(amountIn),
                expire: new BN(_expire2),
                enable: true
            });

            let size = await _pair.queueSize(_direction);
            expect(size).to.be.bignumber.equal(new BN("2"));
            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2, 1], [accounts[3], accounts[2]], ["25000", "30000"], ["200", "150"], [_expire2, _expire1]);
*/
        });
        it ('1st provider should able to unstake', async function () {
            let unstake = toWei("100");
            let afterIndex = 2;
            let amountOut = toWei("10000");
            let reserveOut = 0;
            _expire1 = now + 60;
            let deadline = now + 3600;

            const liquidityProvider = deployment.oracleLiquidityProvider;
            _wallet.account = _wallet.accounts[2];
            let receipt = await liquidityProvider.removeLiquidityETH({tokenA:_token.address, removingTokenA:true, to:accounts[2], unstake:unstake, afterIndex:afterIndex, amountOut:amountOut, reserveOut:reserveOut, expire:_expire1, enable:true, deadline:deadline});
/*
            await expectEvent.inTransaction(tx, _pair, 'RemoveLiquidity', {
                provider: accounts[2],
                direction: _direction,
                unstake: unstake,
                amountOut: amountOut,
                reserveOut: "0",
                newStakeBalance: toWei("50"),
                newAmountBalance: toWei("20000"),
                newReserveBalance: "0",
                enable: true
            });
            await expectEvent.inTransaction(tx, _govToken, 'Transfer', {
                from: liquidityProvider.address,
                to: accounts[2],
                value: unstake
            });
            await expectEvent.inTransaction(tx, _token, 'Transfer', {
                from: liquidityProvider.address,
                to: accounts[2],
                value: amountOut
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2, 1], [accounts[3], accounts[2]], ["25000", "20000"], ["200", "50"], [_expire2, _expire1]);
*/
        });
/*
        it ('should not able to add liquidity when deadline is passed', async function () {
            let staked = "100";
            let amountIn = "10000";
            _expire1 = now + 3660;
            let deadline = now - 1;

            await expectRevert(
                addLiquidityETH(accounts[2], _token, true, staked, 0, amountIn, _expire1, true, deadline)
            , "EXPIRED");
        });
*/
        it ('able to set min lot size', async function(){
            let lotSize = toWei("25");
            let voting = await await newVote("setMinLotSize", "1000000", [addressToBytes32Right(_token.address, true), numberToBytes32(lotSize, true)]);
            let receipt = await voting.execute();
/*
            await expectEvent.inTransaction(tx, OSWAP_OracleFactory, 'ParamSet2', {
                name: stringToBytes32("minLotSize", true),
                value1: addressToBytes32Right(_token.address.toLowerCase(), true),
                value2: numberToBytes32("25"+"000000000000000000", true)
            });
*/
            let factory = deployment.oracleFactory;
            let lotsize = await factory.minLotSize(_token.address);
            expect(lotsize).to.be.a.bignumber.equal(new BN("25"+"000000000000000000"));
        });
/*
        it ('should revert when add liquidity less than min lot size', async function(){
            let staked = "100";
            let amountIn = "10";
            _expire1 = now + 3660;
            let deadline = now + 1000;

            await expectRevert(
                addLiquidityETH(accounts[4], _token, true, staked, 0, "10", _expire1, true, deadline)
            , "Minium lot size not met");
        });
        it ('should able to add liquidity more than min lot size', async function(){
            let staked = "100";
            let amountIn = "10";
            _expire1 = now + 3660;
            let deadline = now + 1000;
            
            await addLiquidityETH(accounts[4], _token, true, staked, 0, "25", _expire1, true, deadline);
        });
        it ('should revert when remove liquidity that result in amount less than min lot size', async function(){
            const liquidityProvider = getInstance(OSWAP_OracleLiquidityProvider);
            _expire1 = now + 3660;
            let deadline = now + 1000;
            let amountOut = "1";
            await expectRevert(
                liquidityProvider.removeLiquidityETH(_token.address, true, accounts[4], 0, 0, toWei("1"), 0, _expire1, true, deadline, {from: accounts[4]})
            , "Minium lot size not met");
        });
*/
        it ('should able to empty liquidity', async function(){
            const liquidityProvider = deployment.oracleLiquidityProvider;
            let staked = "100";
            let amountIn = "10";
            _expire1 = now + 3660;
            let deadline = now + 1000;
            
            _wallet.account = _wallet.accounts[4];
            await liquidityProvider.removeLiquidityETH({tokenA:_token.address, removingTokenA:true, to:accounts[4], unstake:0, afterIndex:0, amountOut:toWei("25"), reserveOut:0, expire:_expire1, enable:true, deadline:deadline})
        });
    });
/*
    describe('test A-adds_B-adds_A-removesAll_B-adds_A-adds', ()=> {
        before(async ()=> {
            price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);

            let staked = "100";
            let afterIndex = 0;
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));
        });

        it ('2nd provider should able to add liquidity with less staked', async function () {
            let staked = "50";
            let afterIndex = 1;
            let amountIn = "25000";
            _expire2 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[3], _token, true, staked, afterIndex, amountIn, _expire2, true, deadline));

            let size = await _pair.queueSize(_direction);
            expect(size).to.be.bignumber.equal(new BN("2"));
            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [1, 2], [accounts[2], accounts[3]], ["10000", "25000"], ["100", "50"], [_expire1, _expire2]);
        });
        it ('1st provider should able to remove all liquidity', async function () {
            let deadline = now + 3600;
            const liquidityProvider = getInstance(OSWAP_OracleLiquidityProvider);
            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await liquidityProvider.removeAllLiquidityETH(_token.address, accounts[2], deadline, {from: accounts[2]}));
            await expectEvent.inTransaction(tx, _pair, 'RemoveLiquidity', {
                provider: accounts[2],
                direction: _direction,
                unstake: toWei("100"),
                amountOut: toWei("10000"),
                reserveOut: "0",
                newStakeBalance: "0",
                newAmountBalance: "0",
                newReserveBalance: "0",
                enable: true
            });
            await expectEvent.inTransaction(tx, _pair, 'RemoveLiquidity', {
                provider: accounts[2],
                direction: !_direction,
                unstake: "0",
                amountOut: "0",
                reserveOut: "0",
                newStakeBalance: "0",
                newAmountBalance: "0",
                newReserveBalance: "0",
                enable: true
            });
            await expectEvent.inTransaction(tx, _govToken, 'Transfer', {
                from: liquidityProvider.address,
                to: accounts[2],
                value: toWei("100")
            });
            await expectEvent.inTransaction(tx, _token, 'Transfer', {
                from: liquidityProvider.address,
                to: accounts[2],
                value: toWei("10000")
            });
            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2], [accounts[3]], ["25000"], ["50"], [_expire2]);
        });
        it ('2nd provider should able to add more liquidity', async function () {
            let staked = "50";
            let afterIndex = 1;
            let amountIn = "25000";
            _expire2 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[3], _token, true, staked, afterIndex, amountIn, _expire2, true, deadline));

            let size = await _pair.queueSize(_direction);
            expect(size).to.be.bignumber.equal(new BN("1"));
            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2], [accounts[3]], ["50000"], ["100"], [_expire2]);
        });
        it ('1st provider should able to add liquidity again', async function () {
            let staked = "20";
            let afterIndex = 0;
            let amountIn = "10000";
            _expire1 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));
            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2, 1], [accounts[3], accounts[2]], ["50000", "10000"], ["100", "20"], [_expire2, _expire1]);
        });
    });
    //TO DO
    // it ('2nd provider should able to add liquidity with less staked and not specifing afterIndex', async function () {
    // it ('1st provider should able to unstake and not specifing afterIndex', async function () {

    describe('test swapping', ()=> {
        let protocolFeeETH = new BN("0"), protocolFeeToken = new BN("0");
        before(async ()=> {
            let price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);

            _router = getInstance(OSWAP_OracleRouter);

            let staked = "100";
            let afterIndex = 0;
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));

            let amount = toWei("1000000");
            await _token.mint(accounts[3], amount);
            await _token.approve(_router.address, amount, {from: accounts[3]});
        });
        it ('should not able to swap when deadline is expired', async function () {
            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now - 1;

            await expectRevert(
                _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[3]})
            , "EXPIRED");
        });
        it ('should able to swap', async function () {
            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;

            let {tx, receipt, logs} = await _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[3]});

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'Swap', {
                to: accounts[3],
                direction: _direction,
                price: toWei((1/_price).toString()),
                amountIn: amountIn,
                amountOut: toWei("399.6"), // 1*(1-(0.1/100))*400
                tradeFee: toWei("0.001"), // 1*(0.1/100)
                protocolFee: toWei("0.001") // 1*(0.1/100)*(1.0)
            });

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[2],
                direction: _direction,
                amountOut: toWei("399.6"),
                amountIn: toWei("0.999") // 1*(1-((0.1/100)*(1)))
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [1], [accounts[2]], ["9600.4"], ["100"], [_expire1]); // 10000-399.6
            protocolFeeETH = protocolFeeETH.add(new BN(amountIn).muln(100).divn(100000));
        });
        it ('should not able to swap when the amount requested is more than the fund availale', async function () {
            let amountIn = toWei("400");
            let amountOutMin = toWei("150000");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;
            await expectRevert(
                _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn})
            , "Amount exceeds available fund");
        });
        it ('should not able to swap when the swapped amount is less than the amountOutMin', async function () {
            let amountIn = toWei("1");
            let amountOutMin = toWei("500");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;
            await expectRevert(
                _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn})
            , "INSUFFICIENT_OUTPUT_AMOUNT");
        });
        it ('should not able to replenish from non-owner', async function () {
            let index = await _pair.providerOfferIndex(accounts[2]);
            let counteroffer = await _pair.offers(_direction, index);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);
            await expectRevert(
                _pair.replenish(accounts[2], !_direction, position.afterIndex, toWei("0.1"), 0, {from: accounts[3]})
            , "Not from provider");
        });
        it ('should able to replenish from owner', async function () {
            let index = await _pair.providerOfferIndex(accounts[2]);
            let counteroffer = await _pair.offers(_direction, index);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);
            // now = (await web3.eth.getBlock('latest')).timestamp;
            _expire = now + 3600;
            let {tx, receipt, logs} = await _pair.replenish(accounts[2], !_direction, position.afterIndex, toWei("0.1"), _expire, {from: accounts[2]});

            await expectEvent.inTransaction(tx, _pair, 'Replenish', {
                provider: accounts[2],
                direction: !_direction,
                amountIn: toWei("0.1"),
                newAmountBalance: toWei("0.1"),
                newReserveBalance:  toWei("0.899"), // 0.999-0.1
                expire: new BN(_expire)
            });

            let pool = await _pair.getQueue(!_direction, 0, 100);
            // owner should able to change expire
            comaprePool(pool, [1], [accounts[2]], ["0.1"], ["0"], [_expire]);
        });
        it ('should not able to replenish with a expired deadline', async function () {
            let index = await _pair.providerOfferIndex(accounts[2]);
            let counteroffer = await _pair.offers(_direction, index);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);
            // now = (await web3.eth.getBlock('latest')).timestamp;
            let expire = now - 1;
            await expectRevert(
                _pair.replenish(accounts[2], !_direction, position.afterIndex, toWei("0.1"), expire, {from: accounts[2]})
            , "Already expired");
        });
        it ('should able to change replenish to private', async function () {
            ({tx, receipt, logs} = await _pair.setPrivateReplenish(false, {from: accounts[2]}));
            let index = await _pair.providerOfferIndex(accounts[2]);
            let offer = await _pair.offers(_direction, index);
            expect(offer.privateReplenish).to.equal(false);
        });
        it ('should able to replenish from non-owner after private replenish is set to false', async function () {
            let index = await _pair.providerOfferIndex(accounts[2]);
            let counteroffer = await _pair.offers(_direction, index);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);
            let {tx, receipt, logs} = await _pair.replenish(accounts[2], !_direction, position.afterIndex, toWei("0.1"), 0, {from: accounts[3]});

            await expectEvent.inTransaction(tx, _pair, 'Replenish', {
                provider: accounts[2],
                direction: !_direction,
                amountIn: toWei("0.1"),
                newAmountBalance: toWei("0.2"), // 0.1+0.1
                newReserveBalance:  toWei("0.799"), // 0.899-0.1
                expire: new BN(_expire)
            });

            let pool = await _pair.getQueue(!_direction, 0, 100);
            // non-owner should not able to change expire
            comaprePool(pool, [1], [accounts[2]], ["0.2"], ["0"], [offer.expire]);
        });
        it ('should not able to replenish when amount < min lot size', async function(){
            let lotSize = toWei("0.8");
            let voting = await newVote("setMinLotSize", "1000000", [addressToBytes32Right(_weth.address, true), numberToBytes32(lotSize, true)]);
            let {tx, receipt, logs} = await voting.execute();

            let index = await _pair.providerOfferIndex(accounts[2]);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);

            await expectRevert(
                _pair.replenish(accounts[2], !_direction, position.afterIndex, toWei("0.1"), 0, {from: accounts[3]})
            , "Minium lot size not met" );
        });
        it ('should able to replenish from owner', async function () {
            let index = await _pair.providerOfferIndex(accounts[2]);
            let counteroffer = await _pair.offers(_direction, index);
            let offer = await _pair.offers(!_direction, index);
            let position = await _pair.findPosition(!_direction, offer.staked, 0);
            now = (await web3.eth.getBlock('latest')).timestamp;
            let expire = now + 3600;
            let {tx, receipt, logs} = await _pair.replenish(accounts[2], !_direction, position.afterIndex, offer.reserve, expire, {from: accounts[2]});

            await expectEvent.inTransaction(tx, _pair, 'Replenish', {
                provider: accounts[2],
                direction: !_direction,
                amountIn: toWei("0.799"),
                newAmountBalance: toWei("0.999"),
                newReserveBalance:  "0",
                expire: new BN(expire)
            });

            let pool = await _pair.getQueue(!_direction, 0, 100);
            // owner should able to change expire
            _expire2 = expire;
            comaprePool(pool, [1], [accounts[2]], ["0.999"], ["0"], [expire]); // 1*(1-(0.1/100))
        });
        it ('should not able to swap when the required amount is larger than the amountInMax', async function () {
            let amountOut = toWei("0.8");
            let amountInMax = toWei("100");
            let path = [_token.address, _weth.address];
            let to = accounts[3];
            let deadline = now + 60;
            await expectRevert(
                _router.swapTokensForExactETH(amountOut, amountInMax, path, to, deadline, [true], "0x")
            , "EXCESSIVE_INPUT_AMOUNT");
        });
        it ('should able to swap opposite direction', async function () {
            let amountOut = toWei("0.8");
            let amountInMax = toWei("400");
            let path = [_token.address, _weth.address];
            let to = accounts[3];
            let deadline = now + 60;

            ({tx, receipt, logs} = await _router.swapTokensForExactETH(amountOut, amountInMax, path, to, deadline, [true], "0x", {from: accounts[3]}));

            let events = OSWAP_OraclePair.decodeLogs(receipt.rawLogs);

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'Swap', {
                to: _router.address, // accounts[3],
                direction: !_direction,
                price: toWei((_price).toString()),
                amountIn: toWei("320.320320320320320322"), // (0.8*400)/(1-(0.1/100))
                amountOut: toWei("0.8"),
                tradeFee: toWei("0.320320320320320320"), // 320.320320320320320322*(0.1/100)
                protocolFee: toWei(".320320320320320320") // 320.320320320320320322*(0.1/100)*(1.0)
            });

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[2],
                direction: !_direction,
                amountOut: toWei("0.8"),
                amountIn: toWei("320.000000000000000002") // 320.320320320320320322*(1-((0.1/100)*(1.0)))
            });

            let pool = await _pair.getQueue(!_direction, 0, 100);
            comaprePool(pool, [1], [accounts[2]], ["0.199"], ["0"], [_expire2]); // 0.999 - 0.8
            protocolFeeToken = protocolFeeToken.add(new BN(toWei("320.320320320320320322")).muln(100).divn(100000));
        });
        //note that we can only clear the more "expansive" side
        it ('should able to swap all available liquidity', async function () {
            let pool = await _pair.getQueue(!_direction, 0, 100);
            let amountOut = new BN(0);
            for (let i = 0 ; i < pool.amount.length ; i++) {
                amountOut = amountOut.add(pool.amount[i]);
            }
            let path = [_token.address, _weth.address];
            let to = accounts[3];
            let deadline = now + 60;
            // let amountInMax = new BigNumber(amountOut).div(_price.toString()).times("1.1");
            let amountInMax = await _router.getAmountIn(amountOut, _token.address, _weth.address, "0x");
            ({tx, receipt, logs} = await _router.swapTokensForExactETH(amountOut, amountInMax, path, to, deadline, [true], "0x", {from: accounts[3]}));

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'Swap', {
                to: _router.address, // accounts[3],
                direction: !_direction,
                price: toWei((_price).toString()),
                amountIn: toWei("79.679679679679679681"), // 0.199*400/(1-(0.1/100))
                amountOut: toWei("0.199"), 
                tradeFee: toWei("0.079679679679679679"), // 79.679679679679679681*(0.1/100)
                protocolFee: toWei("0.079679679679679679") // 79.679679679679679681*(0.1/100)*(1.0)
            });

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[2],
                direction: !_direction,
                amountOut: toWei("0.199"),
                amountIn: toWei("79.600000000000000002") // 79.679679679679679681*(1-((0.1/100)*(1.0)))
            });

            pool = await _pair.getQueue(!_direction, 0, 100);
            comaprePool(pool, [], [], [], [], []);
            protocolFeeToken = protocolFeeToken.add(new BN(toWei("79.679679679679679681")).muln(100).divn(100000));
        });
        it('protocol fee', async function(){
            let pFee0 = await _pair.protocolFeeBalance0();
            let pFee1 = await _pair.protocolFeeBalance1();
            let pFeeA = protocolFeeETH;
            let pFeeB = protocolFeeToken;
            if (_direction){
                pFeeA = protocolFeeETH;
                pFeeB = protocolFeeToken;
            } else {
                pFeeB = protocolFeeETH;
                pFeeA = protocolFeeToken;
            }

            expect(pFee0).to.be.a.bignumber.equal(pFeeA);
            expect(pFee1).to.be.a.bignumber.equal(pFeeB);
        });

        it('protocol fee', async function () {
            let tokenA = _weth;
            let tokenB = _token;
            let pFee0 = await _pair.protocolFeeBalance0();
            let pFee1 = await _pair.protocolFeeBalance1();
            let pFeeA, pFeeB;
            if (new BigNumber(tokenA.address.toLowerCase()).lt(tokenB.address.toLowerCase())){
                pFeeA = pFee0;
                pFeeB = pFee1;
            } else {
                pFeeB = pFee0;
                pFeeA = pFee1;
            }
            let oldOwnerBalEth = await web3.eth.getBalance(accounts[0]);
            let oldPairBalEth = await web3.eth.getBalance(_pair.address);
            let oldOwnerBalA = await tokenA.balanceOf(accounts[0]);
            let oldPairBalA = await tokenA.balanceOf(_pair.address);
            let oldOwnerBalB = await tokenB.balanceOf(accounts[0]);
            let oldPairBalB = await tokenB.balanceOf(_pair.address);

            let gasUsed = new BigNumber(0);
            ({tx, receipt, logs} = await _pair.redeemProtocolFee({from: accounts[0]}));
            gasUsed = gasUsed.plus(new BigNumber(receipt.effectiveGasPrice,16).times(receipt.gasUsed));
            ({tx, receipt, logs} = await tokenA.withdraw(pFeeA, {from: accounts[0]}));
            gasUsed = gasUsed.plus(new BigNumber(receipt.effectiveGasPrice,16).times(receipt.gasUsed));

            let newOwnerBalEth = await web3.eth.getBalance(accounts[0]);
            let newPairBalEth = await web3.eth.getBalance(_pair.address);
            let newOwnerBalA = await tokenA.balanceOf(accounts[0]);
            let newPairBalA = await tokenA.balanceOf(_pair.address);
            let newOwnerBalB =  await tokenB.balanceOf(accounts[0]);
            let newPairBalB = await tokenB.balanceOf(_pair.address);

            expect(new BigNumber(newOwnerBalEth).minus(oldOwnerBalEth).plus(gasUsed).toFixed()).to.equal(pFeeA.toString());
            expect(newOwnerBalB.sub(oldOwnerBalB)).to.be.a.bignumber.equal(pFeeB);
            expect(oldPairBalA.sub(newPairBalA)).to.be.a.bignumber.equal(pFeeA);
            expect(oldPairBalB.sub(newPairBalB)).to.be.a.bignumber.equal(pFeeB);
        });
    });

    describe('test swapping 2 providers', ()=> {
        beforeEach(async ()=> {
            let price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);

            _router = getInstance(OSWAP_OracleRouter);

            let staked = "100";
            let afterIndex = 0;
            let amountIn = "1000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 20;
            let deadline = now + 60;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));
            ({tx, receipt, logs} = await addLiquidityETH(accounts[3], _token, true, staked, afterIndex, amountIn, _expire1+20, true, deadline));

            let amount = toWei("1000000");
            await _token.mint(accounts[4], amount);
            await _token.approve(_router.address, amount, {from: accounts[4]});
        });
        it("should able to swap using two offers", async function() {
            let amountIn = toWei("4");
            let amountOutMin = toWei("1500");
            let path = [_weth.address, _token.address];
            let to = accounts[4];
            let deadline = now + 60;

            let {tx, receipt, logs} = await _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[4]});

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'Swap', {
                to: accounts[4],
                direction: _direction,
                price: toWei((1/_price).toString()),
                amountIn: amountIn,
                amountOut: toWei("1598.4"), // 4*(1-(0.1/100))*400
                tradeFee: toWei("0.004"), // 4*(0.1/100)
                protocolFee: toWei("0.004") // 4*(0.1/100)*(1.0)
            });

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[2],
                direction: _direction,
                amountOut: toWei("1000"),
                amountIn: toWei("2.5") // 4*(1000/(1000+598.4))*(1-((0.1/100)*(1.0)))
            });
            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[3],
                direction: _direction,
                amountOut: toWei("598.4"),
                amountIn: toWei("1.496") // 4*(598.4/(1000+598.4))*(1-((0.1/100)*(1.0)))
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2], [accounts[3]], ["401.6"], ["100"], [_expire1+20]); // 2000-1598.4
        });
        it("swap should remove expired offers", async function() {
            await setTime(this._provider, _expire1 + 1);
            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[4];
            let deadline = now + 60;

            let {tx, receipt, logs} = await _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[4]});

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'Swap', {
                to: accounts[4],
                direction: _direction,
                price: toWei((1/_price).toString()),
                amountIn: amountIn,
                amountOut: toWei("399.6"), // 1*(1-(0.1/100))*400
                tradeFee: toWei("0.001"), // 1*(0.1/100)
                protocolFee: toWei("0.001") // 1*(0.1/100)*(1.0)
            });

            await expectEvent.inTransaction(tx, OSWAP_OraclePair, 'SwappedOneProvider', {
                provider: accounts[3],
                direction: _direction,
                amountOut: toWei("399.6"),
                amountIn: toWei("0.999") // 1*(1-((0.1/100)*(1.0)))
            });

            let pool = await _pair.getQueue(_direction, 0, 100);
            comaprePool(pool, [2], [accounts[3]], ["600.4"], ["100"], [_expire1+20]); // 1000-399.6
        });
        it("should not able to swap when offer expired", async function() {
            await setTime(this._provider, _expire1 + 21);
            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[4];
            let deadline = now + 60;

            await expectRevert(
                _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[4]})
            , "Amount exceeds available fund");
        });        
    });

    describe('test security oracle', ()=> {
        let priceOracle, securityOracle;
        let _factory;
        async function addSecurityOracle(minScore){
            const registry = getInstance(OAXDEX_VotingRegistry);
            const executor = getInstance(OAXDEX_VotingExecutor);

            securityOracle = await MockSecurityOracle.deploy();
            _securityOracle = securityOracle;

            let quorum = "1000000";
            let threshold = "50";
            now = (await web3.eth.getBlock('latest')).timestamp;
            let voteEndTime = now + 30;
            let exeDelay = 3;
            ({tx, receipt, logs} = await registry.newVote(
                executor.address,
                stringToBytes32("SecOrc" + securityOracle.address.substring(2,20), true), 
                [stringToBytes32('Y', true), stringToBytes32('N', true)],
                new BigNumber(quorum).shiftedBy(18),
                new BigNumber(threshold).shiftedBy(18 - 2),
                voteEndTime,
                exeDelay,
                [stringToBytes32("setSecurityScoreOracle", true), addressToBytes32Right(securityOracle.address, true), numberToBytes32(minScore, true)]
            ));
            let events = OAXDEX_Governance.decodeLogs(receipt.rawLogs);
            let voteAddr = events[0].args.vote;
            console.log("voting address " + voteAddr);

            let voting = await OAXDEX_VotingContract.at(voteAddr);
            await voting.vote(0);

            console.log("waiting for execution");
            await setTime(this._provider, voteEndTime + exeDelay + 1);
            await voting.execute();

            return securityOracle;
        }
        before(async ()=> {
            let price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);
            securityOracle = await addSecurityOracle(50);

            let weth = (getInstance(WETH9));
            _factory = getInstance(OSWAP_OracleFactory);
            priceOracle = await _factory.oracles(_token.address, weth.address);
            _router = getInstance(OSWAP_OracleRouter);

            let staked = "100";
            let afterIndex = 0;
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));

            let amount = toWei("1000000");
            await _token.mint(accounts[3], amount);
            await _token.approve(_router.address, amount, {from: accounts[3]});
        });
        it ('should able to swap if score is higher than the minimum score required', async function () {
            await securityOracle.setSecurityScore(priceOracle, 70);
            await _factory.updateOracleScore(priceOracle);

            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;

            ({tx, receipt, logs} = await _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[3]}));
        });
        it ('should revert if score fall below the minimum score', async function () {
            await securityOracle.setSecurityScore(priceOracle, 30);
            await _factory.updateOracleScore(priceOracle);

            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [_weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;

            await expectRevert(
                _router.swapExactETHForTokens(amountOutMin, path, to, deadline, [true], "0x", {value: amountIn, from: accounts[3]})
            ,'Oracle score too low');
        });
    });

    describe('setOracle / addOldOracleToNewPair', ()=>{
        let tokenA, tokenB, tokenC, oracle;
        let tokens;
        before(async()=>{
            tokenA = await new ERC20(_wallet).deploy({symbol:'TokenA', name:'TokenA', initialSupply:0, cap:0, decimals:18});
            tokenB = await new ERC20(_wallet).deploy({symbol:'TokenB', name:'TokenB', initialSupply:0, cap:0, decimals:18});
            tokenC = await new ERC20(_wallet).deploy({symbol:'TokenC', name:'TokenC', initialSupply:0, cap:0, decimals:18});
            tokens = [tokenA, tokenB, tokenC].sort((a,b)=>new BigNumber(a.address.toLowerCase()).lt(b.address.toLowerCase()) ? -1 : 1 );
            oracle = await MockOracleAdaptor.new((getInstance(WETH9)).address, 18, tokens.map(e=>e.address), tokens.map(e=>1));
        });
        it('should revert when calling addOldOracleToNewPair for a new oracle', async ()=>{
            let voting = await newVote("addOldOracleToNewPair", "100", [addressToBytes32Right(tokens[0].address, true), addressToBytes32Right(tokens[1].address, true), addressToBytes32Right(oracle.address, true)]);
            await expectRevert(
                voting.execute()
            , "oracle not seen");
            console.log("executed");
        })
        it('should able to call setOracle', async ()=>{
            let voting = await newVote("setOracle", "1000000", [addressToBytes32Right(tokens[0].address, true), addressToBytes32Right(tokens[1].address, true), addressToBytes32Right(oracle.address, true)]);
            await voting.execute();
            console.log("executed");
        })
        it('should able to call addOldOracleToNewPair', async ()=>{
            let voting = await newVote("addOldOracleToNewPair", "100", [addressToBytes32Right(tokens[0].address, true), addressToBytes32Right(tokens[2].address, true), addressToBytes32Right(oracle.address, true)]);
            await voting.execute();
            console.log("executed");
        })
        it('should revert when calling addOldOracleToNewPair to update a oracle for an existing pair', async ()=>{
            let voting = await newVote("addOldOracleToNewPair", "100", [addressToBytes32Right(tokens[0].address, true), addressToBytes32Right(tokens[1].address, true), addressToBytes32Right(oracle.address, true)]);
            await expectRevert(
                voting.execute()
            , "oracle already set");
        });
    });

    describe('calls pair swap from contract', ()=>{
        let caller;
        let _factory;
        let _router;
        before(async ()=>{
            _factory = getInstance(OSWAP_OracleFactory);
            _router = getInstance(OSWAP_OracleRouter);
            caller = await CallFormContract.new(_weth.address, _factory.address, _router.address);
        })
        before(async ()=> {
            let price = _price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);

            let oracle = await _factory.oracles(_token.address, _weth.address);

            await _securityOracle.setSecurityScore(oracle, 70);
            await _factory.updateOracleScore(oracle);

            let staked = "100";
            let afterIndex = 0;
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire1 = now + 60;
            let deadline = now + 3600;

            let tx, receipt, logs, events;
            ({tx, receipt, logs} = await addLiquidityETH(accounts[2], _token, true, staked, afterIndex, amountIn, _expire1, true, deadline));

            // let amount = toWei("1000000");
            // await _token.mint(accounts[3], amount);
            // await _token.approve(caller.address, amount, {from: accounts[3]});
        });
        async function callContractExactIn(tokenIn, tokenOut, amountIn) {
            let data = "0x";

            let amounts = await _router.getAmountsOut(amountIn, [tokenIn.address, tokenOut.address], [true], data);
            let amountOut = amounts[1];

            let isWeth = tokenIn.address == _weth.address;

            if (new BigNumber(tokenIn.address.toLowerCase()).lt(tokenOut.address.toLowerCase())) {
                return caller.callPairToSwap(tokenIn.address, tokenOut.address, amountIn, 0, 0, amountOut, data, {from: accounts[3], value: isWeth ? amountIn : 0})
            } else {
                return caller.callPairToSwap(tokenOut.address, tokenIn.address, 0, amountIn, amountOut, 0, data, {from: accounts[3], value: isWeth ? amountIn : 0})
            }
        }
        it('should revert when call swap from contract',  async ()=>{
            await expectRevert(
                callContractExactIn(_weth, _token, toWei("1"))
            , "Not from user or whitelisted");
        });
        it('able to setWhiteList',  async ()=>{
            let voting = await await newVote("setWhiteList", "1000000", [addressToBytes32Right(caller.address, true), numberToBytes32(1, true)]);
            let {tx, receipt, logs} = await voting.execute();
            await expectEvent.inTransaction(tx, OSWAP_OracleFactory, 'Whitelisted', {
                who: caller.address,
                allow: true
            });
        });
        it('ahould able to call swap from contract',  async ()=>{
            await callContractExactIn(_weth, _token, toWei("1"));
        });
    });
*/    
});

