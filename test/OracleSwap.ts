import BigNumber from 'bignumber.js';
import { padLeft, padRight, numberToBytes32, addressToBytes32, stringToBytes32, addressToBytes32Right, setTime, print } from "./helper";
import Web3 from "web3";
const { expect } = require('chai');
import * as Ganache from "ganache-cli";

import { Contract } from "@ijstech/eth-wallet";
import { OAXDEX_VotingContract } from '../src/contracts/gov/OAXDEX_VotingContract';
import { OSWAP_OraclePair } from '../src/contracts/oracle/OSWAP_OraclePair';
import { TestERC20 } from './src/contracts/TestERC20';
import { MockOracleAdaptor } from './src/contracts/MockOracleAdaptor';
import { WETH9 } from './src/contracts/WETH9';

import {deploy, toDeployment, IDeployment} from '../src/deploy';

import {Utils, Wallet} from "@ijstech/eth-wallet";

let deployment: IDeployment;
let weth: WETH9;

const ERC20 = TestERC20;

let accounts;

let now;
let web3:Web3;
let _provider = Ganache.provider();
let _wallet = new Wallet(_provider);


function toWei(value: string, decimals: number =18) {
    return new BigNumber(value).shiftedBy(decimals);
}
async function stakeToVote() {
    const govToken = deployment.openSwap;
    const governance = deployment.governance;

    await govToken.mint({account:accounts[0], amount: toWei("100000000")});
    await govToken.approve({spender:governance.address, amount:toWei("100000000")});
    await governance.stake(toWei("100000000"));

    now = (await web3.eth.getBlock('latest')).timestamp;
    now += 2;
    await setTime(_provider, now);

    await governance.unlockStake();
}
async function newVote(executor, type, quorum, param) {
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
    receipt = await voting.vote(0);

    await setTime(_provider, voteEndTime + exeDelay + 1);

    return voting;
}
async function addExecutor(newExecutor:Contract) {
    let voting = await newVote(deployment.executor, "setVotingExecutor", "10000000", [addressToBytes32Right(newExecutor.address, true), numberToBytes32(1, true)]);
    let receipt = await voting.execute();
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

    let voting = await newVote(deployment.executor2, "setOracle", "10000000", [addressToBytes32Right(token0, true), addressToBytes32Right(token1, true), addressToBytes32Right(oracle.address, true)]);
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
    let tokenB = new ERC20(_wallet);
    await tokenB.deploy({symbol:token, name:token, initialSupply:0, cap:0, decimals:18});
    let [pair, direction] = await createPair(accounts, tokenA, tokenB, 1, price);

    return [tokenB, pair, direction];
}
async function addLiquidityETH(from, tokenA, toAddTokenA, staked, orderIndex, amountIn, expire, enable, deadline){
    const liquidityProvider = deployment.oracleLiquidityProvider;
    const govToken = deployment.openSwap;

    staked = toWei(staked);
    amountIn = toWei(amountIn);

    _wallet.defaultAccount = accounts[0];
    // await govToken.transfer({recipient:from, amount:staked});
    await govToken.mint({account:from, amount:staked});
    _wallet.defaultAccount = from;
    await govToken.approve({spender:liquidityProvider.address, amount:staked})
    if (toAddTokenA){
        _wallet.defaultAccount = accounts[0];
        await tokenA.mint({account:from, value:amountIn});
        _wallet.defaultAccount = from;
        await tokenA.approve({spender:liquidityProvider.address, value:amountIn});
    }
    _wallet.defaultAccount = from;
    let receipt = await liquidityProvider.addLiquidityETH({tokenA:tokenA.address, addingTokenA:toAddTokenA, staked:staked, afterIndex:orderIndex, amountAIn:amountIn, expire:expire, enable:enable, deadline:deadline}, toAddTokenA?undefined:amountIn);
    _wallet.defaultAccount = accounts[0];
}

describe('OSWAP_OraclePair 1', function () {
    let _tokenCounter = 0;
    let _token;
    let _pair;
    let _direction;
    let _expire;

    before(async function() {
        web3 = new Web3(_provider/*new Web3.providers.HttpProvider()*/);
        accounts = await _wallet.accounts;
        console.log(accounts);

        _wallet.defaultAccount = accounts[0];

        weth = new WETH9(_wallet);
        let wethAddr = await weth.deploy();
        let result = await deploy(_wallet, {
            govTokenOptions:{
                initSupply: Utils.toDecimals(2000000, 18),
                initSupplyTo: accounts[0],
                minter: accounts[0],
                totalSupply: Utils.toDecimals(1000000000, 18)
            },
            tokens: {
                weth: wethAddr
            }
        });

        deployment = toDeployment(_wallet, result);

        await stakeToVote();
        await addExecutor(deployment.executor1);
        await addExecutor(deployment.executor2);
    });
    beforeEach(async function() {
        now = (await web3.eth.getBlock('latest')).timestamp;
        console.log("now " + now);
    });

    describe('add liquidity/swap', ()=> {
        before(async ()=> {
            let price = 1/400;
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);
        });
        it('should able to add liquidity - token', async function () {
            let staked = "100";
            let amountIn = "10000";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire = now + 60;
            let deadline = now + 36000;

            let receipt = await addLiquidityETH(accounts[2], _token, true, staked, 0, amountIn, _expire, true, deadline);
        });

        it ('should able to swap eth to token', async function () {
            let amountIn = toWei("1");
            let amountOutMin = toWei("300");
            let path = [weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;

            _wallet.defaultAccount = _wallet.accounts[3];
            let receipt = await deployment.oracleRouter.swapExactETHForTokens({
                amountOutMin: amountOutMin, 
                path: path, 
                to: to, 
                deadline: deadline, 
                useOracle: [true], 
                data: "0x", 
            },
            amountIn/*{value: amountIn, from: accounts[3]}*/);
        });
        it('should able to add liquidity - eth', async function () {
            let staked = "100";
            let amountIn = "50";
            now = (await web3.eth.getBlock('latest')).timestamp;
            _expire = now + 60;
            let deadline = now + 36000;

            let receipt = await addLiquidityETH(accounts[4], _token, false, staked, 0, amountIn, _expire, true, deadline);
        });
        it ('should able to swap token to eth', async function () {
            let amountIn = toWei("500");
            let amountOutMin = toWei("1");
            let path = [_token.address, weth.address];
            let to = accounts[3];
            let deadline = now + 60;

            let from = accounts[5];

            _wallet.defaultAccount = accounts[0];
            await _token.mint({account:from, value:amountIn});
            _wallet.defaultAccount = from;
            await _token.approve({spender:deployment.oracleRouter.address, value:amountIn});
            let receipt = await deployment.oracleRouter.swapExactTokensForETH({
                amountIn: amountIn,
                amountOutMin: amountOutMin, 
                path: path, 
                to: to, 
                deadline: deadline, 
                useOracle: [true], 
                data: "0x", 
            });
        });
    });
});
