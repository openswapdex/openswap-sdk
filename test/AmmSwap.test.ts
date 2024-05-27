import 'mocha';
import assert from 'assert';
import { Contract } from "@ijstech/eth-contract";
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import { Contracts, deploy, toDeploymentContracts, IDeploymentContracts} from '../src';
import { TestERC20, MockOracleAdaptor, WETH9, MockAmmFactory, MockAmmPair } from './src/contracts';
import {print, assertEqual, getProvider} from './helper';
import {stakeToVote, newVote, voteToPass}  from './oswapHelper';

let deployment: IDeploymentContracts;
let weth: WETH9;

const ERC20 = TestERC20;

let accounts: string[];

let now;
let _wallet = new Wallet(getProvider());


async function addExecutor(newExecutor:Contract) {
    let voting = await voteToPass(_wallet.defaultAccount, _wallet, deployment, deployment.executor, "setVotingExecutor", [Utils.addressToBytes32Right(newExecutor.address, true), Utils.numberToBytes32(1, true)]);
}
async function createPair(accounts, tokenA, tokenB, priceA, priceB) {
    now = (await _wallet.getBlock('latest')).timestamp;

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


    let receipt = await deployment.factory.createPair({tokenA:token0, tokenB:token1});
    let event = deployment.factory.parsePairCreatedEvent(receipt)[0];
    
    console.log("pair address " + event.pair);
    let pair = new Contracts.OSWAP_Pair(_wallet, event.pair);

    return [pair, direction];
}
async function createEthPair(accounts, token, price) {
    let tokenA = weth;
    let tokenB = new ERC20(_wallet);
    await tokenB.deploy({symbol:token, name:token, initialSupply:0, cap:0, decimals:18});
    let [pair, direction] = await createPair(accounts, tokenA, tokenB, 1, price);

    return [tokenB, pair, direction];
}
async function addLiquidityETH(from, tokenA, amountIn, ethIn, deadline){
    const liquidityProvider = deployment.router;
    const govToken = deployment.openSwap;

    amountIn = Utils.toDecimals(amountIn);
    ethIn = Utils.toDecimals(ethIn);

    _wallet.defaultAccount = accounts[0];
    await tokenA.mint({account:from, value:amountIn});
    _wallet.defaultAccount = from;
    await tokenA.approve({spender:liquidityProvider.address, value:amountIn});

    _wallet.defaultAccount = from;
    let receipt = await liquidityProvider.addLiquidityETH({token:tokenA.address, amountTokenDesired:amountIn, amountTokenMin:0, amountETHMin:0, to:from, deadline:deadline}, ethIn);
    _wallet.defaultAccount = accounts[0];
}

describe('OSWAP_OraclePair 1', function () {
    let _tokenCounter = 0;
    let _token: TestERC20;
    let _pair: Contracts.OSWAP_OraclePair;
    let _direction: boolean;
    let _expire: number;

    before('deploy', async function() {
        accounts = await _wallet.accounts;
        console.log(accounts);

        _wallet.defaultAccount = accounts[0];

        weth = new WETH9(_wallet);
        let wethAddr = await weth.deploy();
        let result = await deploy(_wallet, {
            tokens: {
                weth: wethAddr
            }
        });

        deployment = toDeploymentContracts(_wallet, result);

        await stakeToVote(accounts[0], accounts[0], _wallet, deployment);
    });
    beforeEach(async function() {
        now = (await _wallet.getBlock('latest')).timestamp;
        console.log("now " + now);
    });

    describe('add liquidity/swap', ()=> {
        let price = 1/400;
        before(async ()=> {
            [_token, _pair, _direction] = await createEthPair(accounts, "token"+(++_tokenCounter), price);
        });
        it('should able to add liquidity - token', async function () {
            let amountIn = 10000;
            now = (await _wallet.getBlock('latest')).timestamp;
            _expire = now + 60;
            let deadline = now + 36000;

            let receipt = await addLiquidityETH(accounts[2], _token, amountIn, amountIn*price, deadline);
        });
        it ('should able to swap ETH to token', async function () {
            let amountIn = Utils.toDecimals("1");
            let amountOutMin = Utils.toDecimals("300");
            let path = [weth.address, _token.address];
            let to = accounts[3];
            let deadline = now + 60;

            _wallet.defaultAccount = _wallet.accounts[3];
            let receipt = await deployment.router.swapExactETHForTokens({
                amountOutMin: amountOutMin, 
                path: path, 
                to: to, 
                deadline: deadline
            },
            amountIn/*{value: amountIn, from: accounts[3]}*/);
        });
        it ('should able to swap token to ETH', async function () {
            let amountIn = Utils.toDecimals("500");
            let amountOutMin = Utils.toDecimals("1");
            let path = [_token.address, weth.address];
            let to = accounts[3];
            let deadline = now + 60;

            let from = accounts[5];

            _wallet.defaultAccount = accounts[0];
            await _token.mint({account:from, value:amountIn});
            _wallet.defaultAccount = from;
            await _token.approve({spender:deployment.router.address, value:amountIn});
            let receipt = await deployment.router.swapExactTokensForETH({
                amountIn: amountIn,
                amountOutMin: amountOutMin, 
                path: path, 
                to: to, 
                deadline: deadline
            });
        });
    });
});

