import fs from 'fs';
import { Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
import { Contracts, deploy, initHybridRouterRegistry, IDeploymentResult, toDeploymentContracts, IDeploymentContracts } from '../src';
import { MockOracleAdaptor, TestERC20, WETH9 } from './src/contracts';
import {print, assertEqual, getProvider} from './helper';
import {stakeToVote, newVote, voteToPass}  from './oswapHelper';
import {deployAllToLocalTestnet} from "../tools/deploy";

let Accounts = [
    {
        "address": "",
        "privateKey": ""
    },
    {
        "address": "",
        "privateKey": ""
    },
];


let LOCAL_TESTNET = true;
let Token:any = {};//"usd":"", "gold":""};
let Address;// = JSON.parse(fs.readFileSync("", "utf8"));
let wallet = new Wallet(getProvider());//""), Accounts);

let deployment:IDeploymentContracts;

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

    let voting = await voteToPass(admin, wallet, deployment, deployment.executor2, "setOracle", [Utils.addressToBytes32Right(token0, true), Utils.addressToBytes32Right(token1, true), Utils.addressToBytes32Right(oracle.address, true)], !LOCAL_TESTNET);
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
            staked: Utils.toDecimals(staked),
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
async function registerHybridRouter(admin:string, factory: string, pair: string) {
    let receipt = await deployment.hybridRouterRegistry.registerPairByAddress({
        factory: factory,
        pairAddress: pair
    });
    return receipt;
}
async function whitelistHybridRouter(admin: string, router: string) {
    let voting = await voteToPass(admin, wallet, deployment, deployment.executor2, "setWhiteList", [Utils.addressToBytes32Right(router, true), Utils.numberToBytes32(1, true)], !LOCAL_TESTNET);
    return voting;
}
async function swapHybridRouter(admin:string, trader:string, amountIn: BigNumber, pair: string, path: Erc20[], data="0x") {
    wallet.defaultAccount = admin;
    await path[0].mint({address: trader, amount:amountIn});

    wallet.defaultAccount = trader;
    await path[0].approve({spender: deployment.hybridRouter.address, amount:amountIn});

    let now = await wallet.getBlockTimestamp();
    let deadline = now + 600;
    let receipt = await deployment.hybridRouter.swapExactTokensForTokens({
        amountIn: Utils.toDecimals(amountIn).dp(0),
        amountOutMin: 0,
        pair: [pair],
        tokenIn: path[0].address,
        to: trader, 
        deadline: deadline,
        data: data
    });
    return receipt;
}
async function addLiquidityRange(admin:string, lp:string, tokenA: Erc20, tokenB: Erc20, addingTokenA:boolean, amount: BigNumber, price: BigNumber, staked: BigNumber) {
    let now = await wallet.getBlockTimestamp();
    const deadline = now + 30 * 60;
    const expire = now + 30 * 24 * 60 * 60;

    wallet.defaultAccount = admin;
    await (addingTokenA?tokenA:tokenB).mint({address: lp, amount:amount});
    await deployment.openSwap.mint({address: lp, amount: staked});

    wallet.defaultAccount = lp;
    await (addingTokenA?tokenA:tokenB).approve({spender: deployment.rangeLiquidityProvider.address, amount:amount});
    await deployment.openSwap.approve({spender: deployment.rangeLiquidityProvider.address, amount: staked});

    let receipt = await deployment.rangeLiquidityProvider.addLiquidity({
        tokenA: tokenA.address,
        tokenB: tokenB.address,
        addingTokenA: addingTokenA,
        staked: Utils.toDecimals(staked),
        amountIn: Utils.toDecimals(amount).dp(0),
        lowerLimit: Utils.toDecimals(price.times("0.9")).dp(0),
        upperLimit: Utils.toDecimals(price.times("1.1")).dp(0),
        startDate: now,
        expire: expire,
        deadline: deadline
    });
    return receipt;
}
async function addRestrictedOracle(admin:string, tokenA: Erc20, tokenB: Erc20) {
    let now = (await wallet.getBlock('latest')).timestamp;

    // let tokens = [];
    // let prices = [];
    // tokens.push(tokenA.address);
    // prices.push(Utils.toDecimals(priceA));
    // tokens.push(tokenB.address);
    // prices.push(Utils.toDecimals(priceB));

    wallet.defaultAccount = admin;
    const oracle = new Contracts.OSWAP_RestrictedPairOracle(wallet);
    await oracle.deploy();
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

    let voting = await voteToPass(admin, wallet, deployment, deployment.executor4, "setOracle", [Utils.addressToBytes32Right(token0, true), Utils.addressToBytes32Right(token1, true), Utils.addressToBytes32Right(oracle.address, true)], !LOCAL_TESTNET);
    return voting;
}
async function setRestrictedConfig(admin: string){
    let voting = await voteToPass(admin, wallet, deployment, deployment.executor4, "multiCustomParam", [
        Utils.stringToBytes32("RestrictedPair.maxDur") as string, Utils.stringToBytes32("RestrictedPair.feePerOrder") as string, Utils.stringToBytes32("RestrictedPair.feePerTrader") as string, 
        Utils.numberToBytes32(15552000, true),                Utils.numberToBytes32(Utils.toDecimals("100"), true),      Utils.numberToBytes32(Utils.toDecimals("100"), true)
    ], !LOCAL_TESTNET);
    return voting;
}
async function registerHybridRouterRestricted(admin:string, pair: Contracts.OSWAP_RestrictedPair1|Contracts.OSWAP_RestrictedPair3|Contracts.OSWAP_RestrictedPair4) {
    let receipt = await deployment.hybridRouterRegistry.registerPairByTokensV3({
        factory: deployment.restrictedFactory.address,
        token0: await pair.token0(),
        token1: await pair.token1(),
        pairIndex: 0
    });
    return receipt;
}
function hash(trader:string, amount:BigNumber){
    return Utils.soliditySha3(
        { t: "address", v: trader },
        { t: "uint256", v: amount }
    );
}
function buildMerkleTree(leaves:string[]){
    // let keys = Object.keys(entries);
    // keys = keys.sort();
    // let leaves = keys.map(e=>hash(e, entries[e]));
    // leaves = leaves.map(e=>Utils.soliditySha3(e));
    let tree:any = [];
    tree.push(leaves);
    while(tree[tree.length-1].length > 1){
        let children = tree[tree.length-1];
        let parent=[];
        for (let i = 0 ; i < children.length - 1 ; i+=2) {
            if (new BigNumber(children[i]).lt(children[i+1]) ){
                parent.push(Utils.soliditySha3("0x"+children[i].replace("0x","")+children[i+1].replace("0x","")));
            } else {
                parent.push(Utils.soliditySha3("0x"+children[i+1].replace("0x","")+children[i].replace("0x","")));
            }
        }
        if (children.length % 2 == 1){
            // parent.push(Utils.soliditySha3("0x"+children[children.length-1].replace("0x","")+children[children.length-1].replace("0x","")));
            parent.push(children[children.length-1]);
        }
        tree.push(parent);
    }
    tree.getHexRoot = () => {
        return tree[tree.length-1][0];
    }
    tree.getHexProof = (leaf) => {
        let proof = [];
        // let _hash = hash(trader, entries[trader]);
        if (tree.length > 1) {
            let index = tree[0].indexOf(leaf);//(_hash);
            proof.push(tree[0][index % 2 == 0 ? (index+1) : (index-1)]);
            for (let i = 1 ; i < tree.length-1 ; i++) {
                index = Math.floor(index/2);
                proof.push(tree[i][index % 2 == 0 ? (index+1) : (index-1)]);
            }
        }
        return proof;
    }
    return tree;
}        
function getMerkleTree(entries:{[trader:string]:any}){
    let leaves = Object.keys(entries).map(trader=>hash(trader, entries[trader]));
    // return new MerkleTree(leaves, keccak256, { sortPairs: true });
    return buildMerkleTree(leaves);
}
function getMerkleProof(entries:{[trader:string]:any}, trader:string){
    return getMerkleTree(entries).getHexProof(hash(trader, entries[trader]));
}
function getMerkleRoot(entries:{[trader:string]:any}){
    return getMerkleTree(entries).getHexRoot();
}
async function addLiquidityRestricted1(admin:string, lp:string, allocations:{[trader:string]:BigNumber}, tokenA: Erc20, tokenB: Erc20, addingTokenA:boolean, amount: BigNumber, price: BigNumber, fee: BigNumber) {
    let now = await wallet.getBlockTimestamp();
    const deadline = now + 30 * 60;
    const expire = now + 7 * 24 * 60 * 60;

    wallet.defaultAccount = admin;
    await (addingTokenA?tokenA:tokenB).mint({address: lp, amount:amount});
    await deployment.openSwap.mint({address: lp, amount: fee});

    wallet.defaultAccount = lp;
    await (addingTokenA?tokenA:tokenB).approve({spender: deployment.restrictedLiquidityProvider1.address, amount:amount});
    await deployment.openSwap.approve({spender: deployment.restrictedLiquidityProvider1.address, amount: fee});

    let receipt = await deployment.restrictedLiquidityProvider1.addLiquidityAndTrader({
        param: [
            new BigNumber(tokenA.address.toLowerCase()),
            new BigNumber(tokenB.address.toLowerCase()),
            addingTokenA?1:0,
            0,
            0,
            Utils.toDecimals(amount),
            0,
            Utils.toDecimals(price),
            now,
            expire,
            deadline
        ],
        trader: Object.keys(allocations),
        allocation: Object.values(allocations)
    });
    return receipt;
}
async function addLiquidityRestricted4(admin:string, lp:string, allocations:{[trader:string]:BigNumber}, tokenA: Erc20, tokenB: Erc20, addingTokenA:boolean, amount: BigNumber, price: BigNumber, fee: BigNumber) {
    let now = await wallet.getBlockTimestamp();
    const deadline = now + 30 * 60;
    const expire = now + 7 * 24 * 60 * 60;

    wallet.defaultAccount = admin;
    await (addingTokenA?tokenA:tokenB).mint({address: lp, amount:amount});
    await deployment.openSwap.mint({address: lp, amount: fee});

    wallet.defaultAccount = lp;
    await (addingTokenA?tokenA:tokenB).approve({spender: deployment.restrictedLiquidityProvider4.address, amount:amount});
    await deployment.openSwap.approve({spender: deployment.restrictedLiquidityProvider4.address, amount: fee});

    let merkleRoot = getMerkleRoot(allocations);
    let receipt = await deployment.restrictedLiquidityProvider4.addLiquidity({
        tokenA: tokenA.address,
        tokenB: tokenB.address,
        addingTokenA: addingTokenA,
        params:[
            0,
            0,
            Utils.toDecimals(amount),
            0,
            Utils.toDecimals(price),
            now,
            expire,
            Utils.toDecimals(fee),
            deadline
        ],
        merkleRoot: merkleRoot,
        allowlistIpfsCid: "0x"
    });
    return receipt;
}
async function setApprovedTrader4(trader:string, pair: Contracts.OSWAP_RestrictedPair4, tokenIn:Erc20, allocations) {
    wallet.defaultAccount = trader;
    let direction = (await pair.token0()).toLowerCase() == tokenIn.address.toLowerCase();
    let proof = getMerkleProof(allocations, trader);
    let receipt = await pair.setApprovedTraderByMerkleProof({
        direction: direction,
        offerIndex: 1,
        trader: trader,
        allocation: allocations[trader],
        proof
    });
    return receipt;
}
async function main() {
    let accounts = await wallet.accounts;

    if (!Address) {
        wallet.defaultAccount = accounts[0];
        let weth = new WETH9(wallet);
        await weth.deploy();        
        Address = await deployAllToLocalTestnet(wallet, weth.address);
    }
    deployment = toDeploymentContracts(wallet, Address);

    let usd = new Erc20(wallet, 
        Token.usd ||
        await new TestERC20(wallet).deploy({
            symbol: "USD",
            name: "USD",
            initialSupply: 0,
            cap: 0,
            decimals: 18
        })
    );
    
    let gold = new Erc20(wallet, 
        Token.gold || 
        await new TestERC20(wallet).deploy({
            symbol: "GOLD",
            name: "GOLD",
            initialSupply: 0,
            cap: 0,
            decimals: 18
        })
    );
console.log(usd.address, gold.address);

    await stakeToVote(accounts[0], accounts[0], wallet, deployment, !LOCAL_TESTNET);

    let receipt1 = await addLiquidityAmm(accounts[0], accounts[1], usd, gold, new BigNumber(2000000), new BigNumber(1000));
    let event1a = deployment.factory.parsePairCreatedEvent(receipt1)[0];
    console.log(!!event1a);
    let pair1 = new Contracts.OSWAP_Pair(wallet, event1a.pair);
    // let pair1 = new Contracts.OSWAP_Pair(wallet, await deployment.factory.getPair({param1:usd.address, param2:gold.address}));
    let event1b = pair1.parseMintEvent(receipt1)[0];
    console.log(!!event1b);

    
    console.log();
    let receipt2 = await addMockOracle(accounts[0], Address.weth, usd, gold, new BigNumber((1/400).toString()), new BigNumber((5).toString()));
    let event2 = deployment.oracleFactory.parseOracleAddedEvent(receipt2)[0];
    console.log(event2);

    let receipt3 = await addLiquidityOracle(accounts[0], accounts[1], usd, gold, true, new BigNumber(2000000), new BigNumber(1000));
    let event3a = deployment.oracleFactory.parsePairCreatedEvent(receipt3)[0];
    console.log(!!event3a);
    let pair2 = new Contracts.OSWAP_OraclePair(wallet, event3a.pair);
    // let pair2 = new Contracts.OSWAP_OraclePair(wallet, await deployment.oracleFactory.getPair({param1:usd.address, param2:gold.address}));
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


    console.log();
    let receipt7 = await whitelistHybridRouter(accounts[0], deployment.hybridRouter.address);
    let event7 = deployment.oracleFactory.parseWhitelistedEvent(receipt7)[0];
    console.log(!!event7);

    let receipt8 = await registerHybridRouter(accounts[0], deployment.factory.address, pair1.address);
    let event8 = deployment.hybridRouterRegistry.parsePairRegisterEvent(receipt8)[0];
    console.log(!!event8);
    let receipt9 = await registerHybridRouter(accounts[0], deployment.oracleFactory.address, pair2.address);
    let event9 = deployment.hybridRouterRegistry.parsePairRegisterEvent(receipt9)[0];
    console.log(!!event9);
    let receipt10 = await swapHybridRouter(accounts[0], accounts[1], new BigNumber(4000), pair1.address, [usd, gold]);
    let event10 = pair1.parseSwapEvent(receipt10)[0];
    console.log(!!event10);
    let receipt11 = await swapHybridRouter(accounts[0], accounts[1], new BigNumber(4000), pair2.address, [usd, gold]);
    let event11 = pair2.parseSwapEvent(receipt11)[0];
    console.log(!!event11);


    console.log();
    let receipt12 = await addLiquidityRange(accounts[0], accounts[1], usd, gold, false, new BigNumber(1000), new BigNumber((1/2000).toString()), new BigNumber(1000));
    let event12a = deployment.rangeFactory.parsePairCreatedEvent(receipt12)[0];
    console.log(!!event12a);
    let pair3 = new Contracts.OSWAP_RangePair(wallet, event12a.pair);
    let event12b = pair3.parseAddLiquidityEvent(receipt12)[0];
    console.log(!!event12b);
    let receipt12b = await addLiquidityRange(accounts[0], accounts[1], usd, gold, true, new BigNumber(2000000), new BigNumber((2000).toString()), new BigNumber(1000));
    let event12c = pair3.parseAddLiquidityEvent(receipt12b)[0];
    console.log(!!event12c);

    let receipt13 = await registerHybridRouter(accounts[0], deployment.rangeFactory.address, pair3.address);
    let event13 = deployment.hybridRouterRegistry.parsePairRegisterEvent(receipt13)[0];
    console.log(!!event13);

    function getRangeData(index, noPrefix?) {
        let data = (noPrefix?"":"0x") + Utils.numberToBytes32((index.length+1)*32) + Utils.numberToBytes32(index.length) + index.map(e=>Utils.numberToBytes32(e)).join('');
        return data;
    }    
    console.log((await pair3.getAmountOut({tokenIn:usd.address,amountIn:Utils.toDecimals("1"),data:"0x"})).toFixed()); // 0.0004995
    console.log((await pair3.getAmountOut({tokenIn:gold.address,amountIn:Utils.toDecimals("0.1"),data:"0x"})).toFixed()); // 199.8
    let receipt14 = await swapHybridRouter(accounts[0], accounts[1], new BigNumber("1000"), pair3.address, [usd, gold], getRangeData([1]));
    let event14 = pair3.parseSwapEvent(receipt14)[0];
    console.log(!!event14);
    console.log(gold.parseTransferEvent(receipt14)[0].value.toFixed()); // 0.4995


    console.log();
    let receipt15 = await addRestrictedOracle(accounts[0], usd, gold);
    let event15 = deployment.restrictedFactory.parseOracleAddedEvent(receipt15)[0];
    console.log(!!event15);
    let receipt16 = await setRestrictedConfig(accounts[0]);
    let event16 = deployment.configStore.parseParamSetEvent(receipt16);
    console.log(!!event16[0]);
    console.log(!!event16[1]);
    console.log(!!event16[2]);

    const allocations = {
        [accounts[1]]:Utils.toDecimals("1000000"),
    }
    function getRestrictedData(index, ratio) {
        let data = "0x" + Utils.numberToBytes32((index.length*2+1)*32) + Utils.numberToBytes32(index.length) + index.map(e=>Utils.numberToBytes32(e)).join('') + ratio.map(e=>Utils.numberToBytes32(e)).join('');
        return data;
    } 
    console.log();

    let pair4: Contracts.OSWAP_RestrictedPair1|Contracts.OSWAP_RestrictedPair3|Contracts.OSWAP_RestrictedPair4;

    if (deployment.restrictedLiquidityProvider1) { // type 1
    let receipt17 = await addLiquidityRestricted1(accounts[0], accounts[1], allocations, usd, gold, true, new BigNumber(2000000), new BigNumber((2000).toString()), new BigNumber(1000));
    let event17a = deployment.restrictedFactory.parsePairCreatedEvent(receipt17)[0];
    console.log(!!event17a);
    pair4 = new Contracts.OSWAP_RestrictedPair1(wallet, event17a.pair);
    let event17b = pair4.parseAddLiquidityEvent(receipt17)[0];
    console.log(!!event17b);
    let event17c = pair4.parseApprovedTraderEvent(receipt17);
    console.log(!!event17c[0]);
    console.log(!!event17c[1]);
    let receipt17b = await addLiquidityRestricted1(accounts[0], accounts[1], allocations, usd, gold, false,  new BigNumber(1000), new BigNumber((1/2000).toString()), new BigNumber(1000));
    let event17ba = pair4.parseAddLiquidityEvent(receipt17)[0];
    console.log(!!event17ba);
    let event17bb = pair4.parseApprovedTraderEvent(receipt17b);
    console.log(!!event17bb[0]);
    console.log(!!event17bb[1]);
    }

    if (deployment.restrictedLiquidityProvider4) { // type 4
    let receipt17 = await addLiquidityRestricted4(accounts[0], accounts[1], allocations, usd, gold, true, new BigNumber(2000000), new BigNumber((2000).toString()), new BigNumber(1000));
    let event17a = deployment.restrictedFactory.parsePairCreatedEvent(receipt17)[0];
    console.log(!!event17a);
    pair4 = new Contracts.OSWAP_RestrictedPair4(wallet, event17a.pair);
    // pair4 = new Contracts.OSWAP_RestrictedPair4(wallet, await deployment.restrictedFactory.getPair({param1:usd.address, param2:gold.address, param3:0}));
    let event17b = pair4.parseAddLiquidityEvent(receipt17)[0];
    console.log(!!event17b);
    let receipt17b = await addLiquidityRestricted4(accounts[0], accounts[1], allocations, usd, gold, false,  new BigNumber(1000), new BigNumber((1/2000).toString()), new BigNumber(1000));
    let event17bb = pair4.parseAddLiquidityEvent(receipt17)[0];
    console.log(!!event17bb);
    let receipt18 = await setApprovedTrader4(accounts[1], pair4 as Contracts.OSWAP_RestrictedPair4, usd, allocations);
    let event18 = pair4.parseApprovedTraderEvent(receipt18)[0];
    console.log(!!event18);
    }

    console.log();
    let receipt19 = await registerHybridRouterRestricted(accounts[0], pair4);
    let event19 = deployment.hybridRouterRegistry.parsePairRegisterEvent(receipt19)[0];
    console.log(!!event19);

    let data = getRestrictedData(["1"],[Utils.toDecimals("1")]);
    console.log((await pair4.getAmountOut({tokenIn:usd.address,amountIn:Utils.toDecimals("1"),trader:accounts[1], param4:"0x"+data.substring(66)})).toFixed()); //.0004995
    console.log((await pair4.getAmountOut({tokenIn:gold.address,amountIn:Utils.toDecimals("0.1"),trader:accounts[1], param4:"0x"+data.substring(66)})).toFixed()); //199.8
    let receipt20 = await swapHybridRouter(accounts[0], accounts[1], new BigNumber("1000"), pair4.address, [usd, gold], data);
    let event20 = pair4.parseSwapEvent(receipt20)[0];
    console.log(!!event20);
    console.log(Utils.fromDecimals(gold.parseTransferEvent(receipt20)[0].value).toFixed()) // 0.4995

    console.log('done');
}
main();

// node_modules/.bin/ts-node test/testNewChain.ts 

// async function fix(){
//     let accounts = await wallet.accounts;
//     deployment = toDeploymentContracts(wallet, Address);
//     // let voting = await voteToPass(accounts[0], wallet, deployment, deployment.executor, "setVotingExecutor", [Utils.addressToBytes32Right(deployment.executor4.address, true), Utils.numberToBytes32(1, true)], true);
//     // let voting = await voteToPass(accounts[0], wallet, deployment, deployment.executor3, "registerProtocol", [Utils.stringToBytes32("Restricted") as string, Utils.addressToBytes32Right(deployment.restrictedFactory.address, true), Utils.numberToBytes32(999000, true), Utils.numberToBytes32(1000000, true), Utils.numberToBytes32(3, true)], true);
//     // console.log(voting)
//     // console.log(await (new Contracts.OAXDEX_VotingContract(wallet, "0xFAAd92ed5897c08C0Fe6Fd102A2345b956E102c4")).execute());
// }
// fix();
