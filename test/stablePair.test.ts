import 'mocha';
import Ganache from "ganache";
import assert from 'assert';
import { Contract } from "@ijstech/eth-contract";
import {Erc20, Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import * as OSWAP from '../src';
import { TestERC20, WETH9, StableFactory, StablePair } from './src/contracts';
import {print, assertEqual, getProvider} from './helper';
import {stakeToVote, newVote, voteToPass}  from './oswapHelper';

let oswap: OSWAP.IDeploymentContracts;
let weth: WETH9;

const ERC20 = TestERC20;

let accounts: string[];

let wallet = new Wallet(getProvider());

describe('Stable', function () {
    let weth: WETH9;
    let usdt: Erc20;
    let usdc: Erc20;
    let cake: Erc20;

    let fee = 99000;
    let deployer: string;
    let admin: string;
    let lp: string;
    let trader: string;
    let nobody: string;
    let factory: StableFactory;
    let pair: StablePair;
    before(async ()=>{
        let provider = Ganache.provider({
            logging: { quiet: true }
        });
        wallet = new Wallet(provider);
        accounts = await wallet.accounts;

        deployer = accounts[0];
        admin = accounts[1];
        lp = accounts[3];
        trader = accounts[4];
        nobody = accounts[5];
    });
    before('deploy tokens / OSWAP', async ()=>{
        wallet.defaultAccount = deployer;

        weth = new WETH9(wallet);
        await weth.deploy();

        usdt = new Erc20(wallet);
        await usdt.deploy({name: 'usdt', symbol: 'usdt', cap:1000000000,minter:admin})

        usdc = new Erc20(wallet);
        await usdc.deploy({name: 'usdc', symbol: 'usdc', cap:1000000000,minter:admin})

        cake = new Erc20(wallet);
        await cake.deploy({name: 'cake', symbol: 'cake', cap:1000000000,minter:admin})

        oswap = OSWAP.toDeploymentContracts(<any>wallet, await OSWAP.deploy(<any>wallet, {tokens: {weth: weth.address}, hybridRouter: {}}));
        console.log(`hybrid router: ${oswap.hybridRouter.address}`)
        await stakeToVote(deployer, admin, wallet, oswap);
    });
    before('deploy', async function() {
        factory = new StableFactory(wallet);
        await factory.deploy();
        await factory.createPair(new BigNumber(usdt.address.toLowerCase()).lt(usdc.address.toLowerCase()) ? 
                           {tokenA: usdt.address, tokenB: usdc.address, fee: fee, owner: deployer}:
                           {tokenA: usdc.address, tokenB: usdt.address, fee: fee, owner: deployer} );
        console.log((await factory.allPairsLength()).toFixed());
        pair = new StablePair(wallet, await factory.allPairs(0));
    });
    it('registerPair', async function() {
        await voteToPass(admin, wallet, oswap, oswap.hybridRouterRegistry, "registerProtocol", [Utils.stringToBytes32("Stable") as string, Utils.addressToBytes32Right(factory.address, true), Utils.numberToBytes32(fee, true),  Utils.numberToBytes32(100000, true), Utils.numberToBytes32(5, true)]);
        wallet.defaultAccount = nobody;
        await oswap.hybridRouterRegistry.registerPairByIndex({factory:factory.address, index:0});
    });
    it('add liquidity', async () => {
        wallet.defaultAccount = admin;
        await usdt.mint({address: lp, amount: 1000000});
        await usdc.mint({address: lp, amount: 1000000});

        wallet.defaultAccount = lp;
        // await usdt.approve({spender: oswap.hybridRouter.address, amount: 1000000});
        // await usdc.approve({spender: oswap.hybridRouter.address, amount: 1000000});

        await usdt.transfer({address: pair.address, amount: 1000000});
        await usdc.transfer({address: pair.address, amount: 1000000});

        await pair.sync();
    });
    it('swap', async () => {
        wallet.defaultAccount = admin;
        await usdt.mint({address: trader, amount: 1000});

        wallet.defaultAccount = trader;
        await usdt.approve({spender: oswap.hybridRouter.address, amount: 10000});

        let balance1 = await usdc.balanceOf(trader);
        let receipt = await oswap.hybridRouter.swapExactTokensForTokens({
            amountIn: Utils.toDecimals(100),
            amountOutMin: 0,
            pair: [pair.address],
            tokenIn: usdt.address,
            to: trader,
            data: "0x",
            deadline: (await wallet.getBlockTimestamp()) + 3600
        });
        // print(receipt);

        let balance2 = await usdc.balanceOf(trader);
        assertEqual(balance2.minus(balance1), new BigNumber((100 * 0.99).toString()));

        let direction = new BigNumber(usdt.address.toLowerCase()).lt(usdc.address.toLowerCase());
        let event = pair.parseSwapEvent(receipt);
        // print(event);
        assertEqual(event.length, 1);
        assertEqual(event[0], 
            direction ?
            {
                sender: oswap.hybridRouter.address,
                amount0In: Utils.toDecimals(100),
                amount1In: 0,
                amount0Out: 0,
                amount1Out: Utils.toDecimals(100 * 0.99),
                to: trader
            } :
            {
                sender: oswap.hybridRouter.address,
                amount0In: 0,
                amount1In: Utils.toDecimals(100),
                amount0Out: Utils.toDecimals(100 * 0.99),
                amount1Out: 0,
                to: trader
            }
        , true);
        let event2 = usdc.parseTransferEvent(receipt);
        print(event2);
        assertEqual(event2.length, 1);
        assertEqual(event2[0], {
            from: pair.address,
            to: trader,
            value: Utils.toDecimals(100 * 0.99)
        }, true);

    });


});