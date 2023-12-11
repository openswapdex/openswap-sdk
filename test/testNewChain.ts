import { Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
import { Contracts, deploy, initHybridRouterRegistry, IDeploymentResult, toDeploymentContracts, IDeploymentContracts } from '../src';
import { MockOracleAdaptor, TestERC20, WETH9 } from './src/contracts';
import {print, assertEqual, getProvider} from './helper';
import {stakeToVote, newVote, voteToPass}  from './oswapHelper';

import fs from 'fs';

let Address = JSON.parse(fs.readFileSync("", "utf8"));

let Accounts = [
    {
        "address": "",
        "privateKey": ""
    },
    {
        "address": "",
        "privateKey": ""
    }
]
let wallet = new Wallet(getProvider(""), Accounts);

let deployment:IDeploymentContracts;//= toDeploymentContracts(wallet, Address);

async function addLiquidityAmm(admin:string, lp:string, tokenA: Erc20, tokenB: Erc20, amountADesired: BigNumber, amountBDesired: BigNumber) {
    let receipt;
    try {
        let now = await wallet.getBlockTimestamp();
        const deadline = now + 30 * 60;

        wallet.defaultAccount = admin;
        await tokenA.mint({address: lp, amount:amountADesired});
        await tokenB.mint({address: lp, amount:amountBDesired});

        wallet.defaultAccount = lp;
        await tokenA.approve({spender: deployment.router.address, amount:amountADesired});
        await tokenB.approve({spender: deployment.router.address, amount:amountBDesired});

        receipt = await deployment.router.addLiquidity({
            tokenA: tokenA.address,
            tokenB: tokenB.address,
            amountADesired: Utils.toDecimals(amountADesired).dp(0),
            amountBDesired: Utils.toDecimals(amountBDesired).dp(0),
            amountAMin: Utils.toDecimals(0).dp(0),
            amountBMin: Utils.toDecimals(0).dp(0),
            to: wallet.defaultAccount,
            deadline
        });
    }
    
    catch (err) {
      console.log('err', err)
    }
    return receipt;
}
async function addMockOracle(admin:string, weth: Erc20, tokenA: Erc20, tokenB: Erc20, priceA: BigNumber, priceB: BigNumber) {
    let now = (await wallet.getBlock('latest')).timestamp;

    let tokens = [];
    let prices = [];
    tokens.push(tokenA.address);
    prices.push(Utils.toDecimals(priceA));
    tokens.push(tokenB.address);
    prices.push(Utils.toDecimals(priceB));

    wallet.defaultAccount = admin;
    const oracle = new MockOracleAdaptor(wallet);
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

    let voting = await voteToPass(admin, wallet, deployment, deployment.executor2, "setOracle", [Utils.addressToBytes32Right(token0, true), Utils.addressToBytes32Right(token1, true), Utils.addressToBytes32Right(oracle.address, true)], true);
    console.log("executed");

    return voting;
}
async function addLiquidityOracle(admin:string, lp:string, tokenA: Erc20, tokenB: Erc20, addingTokenA:boolean, amount: BigNumber, staked: BigNumber) {
    let receipt;
    try {
        let now = await wallet.getBlockTimestamp();
        const deadline = now + 30 * 60;
        const expire = now + 30 * 24 * 60 * 60;

        wallet.defaultAccount = admin;
        await (addingTokenA?tokenA:tokenB).mint({address: lp, amount:amount});
        await deployment.openSwap.mint({address: lp, amount: staked});

        wallet.defaultAccount = lp;
        await (addingTokenA?tokenA:tokenB).approve({spender: deployment.oracleLiquidityProvider.address, amount:amount});
        await deployment.openSwap.approve({spender: deployment.oracleLiquidityProvider.address, amount: staked});

        receipt = await deployment.oracleLiquidityProvider.addLiquidity({
            tokenA: tokenA.address,
            tokenB: tokenB.address,
            addingTokenA: addingTokenA,
            afterIndex: 0,
            amountIn: Utils.toDecimals(amount).dp(0),
            enable: true,
            staked: staked,
            expire: expire,
            deadline: deadline
        });
    }
    catch (err) {
      console.log('err', err)
    }
    return receipt;
}
async function swapAmm(admin:string, trader:string, amountIn: BigNumber, path: Erc20[]) {
    wallet.defaultAccount = admin;
    await path[0].mint({address: trader, amount:amountIn});

    wallet.defaultAccount = trader;
    await path[0].approve({spender: deployment.router.address, amount:amountIn});

    let now = await wallet.getBlockTimestamp();
    let deadline = now + 600;
    let receipt = await deployment.router.swapExactTokensForTokens({
        amountIn: Utils.toDecimals(amountIn),
        amountOutMin: 0,
        path: path.map(e=>e.address),
        to: trader,
        deadline: deadline
    });
    return receipt;
}
async function swapOracle(admin:string, trader:string, amountIn: BigNumber, path: Erc20[]) {
    wallet.defaultAccount = admin;
    await path[0].mint({address: trader, amount:amountIn});

    wallet.defaultAccount = trader;
    await path[0].approve({spender: deployment.oracleRouter.address, amount:amountIn});

    let now = await wallet.getBlockTimestamp();
    let deadline = now + 600;
    let receipt = await deployment.oracleRouter.swapExactTokensForTokens({
        amountIn: Utils.toDecimals(amountIn),
        amountOutMin: 0,
        path: path.map(e=>e.address),
        to: trader,
        deadline: deadline,
        useOracle: [true],
        data: "0x"
    });
    return receipt;
}

async function main() {
    if (!Address) {
        Address = await deployAll(wallet);
    }
    deployment = toDeploymentContracts(wallet, Address);


    let accounts = await wallet.accounts;

    let usd = new Erc20(wallet, 
        await new TestERC20(wallet).deploy({
            symbol: "USD",
            name: "USD",
            initialSupply: 0,
            cap: 0,
            decimals: 18
        })
    );
    
    let gold = new Erc20(wallet, 
        await new TestERC20(wallet).deploy({
            symbol: "GOLD",
            name: "GOLD",
            initialSupply: 0,
            cap: 0,
            decimals: 18
        })
    );
console.log(usd.address, gold.address);
    await stakeToVote(accounts[0], accounts[0], wallet, deployment, true);

    let receipt1 = await addLiquidityAmm(accounts[0], accounts[1], usd, gold, new BigNumber(2000000), new BigNumber(1000));
    let event1a = deployment.factory.parsePairCreatedEvent(receipt1)[0];
    console.log(!!event1a);
    let pair1 = new Contracts.OSWAP_Pair(wallet, event1a.pair);
    let event1b = pair1.parseMintEvent(receipt1)[0];
    console.log(!!event1b);

    let receipt2 = await addMockOracle(accounts[0], Address.weth, usd, gold, new BigNumber((1/400).toString()), new BigNumber((5).toString()));
    let event2 = deployment.oracleFactory.parseOracleAddedEvent(receipt2);
    console.log(event2);

    let receipt3 = await addLiquidityOracle(accounts[0], accounts[1], usd, gold, true, new BigNumber(2000000), new BigNumber(1000));
    let event3a = deployment.oracleFactory.parsePairCreatedEvent(receipt3)[0];
    console.log(!!event3a);
    let pair2 = new Contracts.OSWAP_OraclePair(wallet, event3a.pair);
    let event3b = pair2.parseAddLiquidityEvent(receipt3)[0]
    console.log(!!event3b);

    let receipt4 = await addLiquidityOracle(accounts[0], accounts[1], usd, gold, false, new BigNumber(1000), new BigNumber(1000));
    let event4 = pair2.parseAddLiquidityEvent(receipt4)[0]
    console.log(!!event4);

    let receipt5 = await swapAmm(accounts[0], accounts[1], new BigNumber(4000), [usd, gold]);
    let event5 = pair1.parseSwapEvent(receipt5)[0];
    console.log(!!event5);

    let receipt6 = await swapOracle(accounts[0], accounts[1], new BigNumber(4000), [usd, gold]);
    let event6 = pair2.parseSwapEvent(receipt6)[0];
    console.log(!!event6);

}
main();
