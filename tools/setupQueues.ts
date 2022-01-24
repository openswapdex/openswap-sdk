
import {Utils, Wallet} from "@ijstech/eth-wallet";
import {
    OSWAP_OracleFactory, 
    OSWAP_RangeFactory,
    OSWAP_RestrictedFactory,
    OSWAP_HybridRouterRegistry
} from '../src/contracts';
import * as Config from '../data/config';

const rpcUrl = Config.rpcUrl;
const deployerAddress = Config.deployer.address;
const privateKey = Config.deployer.privateKey;
const deploymentConfig = Config.deploymentConfig;

interface Token {
    token0: string;
    token1: string;
}

async function createOraclePair(oracleFactory: OSWAP_OracleFactory, tokenA: string, tokenB: string) {
    await oracleFactory.createPair({
        tokenA,
        tokenB
    });
    console.log('oracleFactory', oracleFactory.address);
}

async function createRangePair(rangeFactory: OSWAP_RangeFactory, tokenA: string, tokenB: string) {
    await rangeFactory.createPair({
        tokenA,
        tokenB
    });
    console.log('rangeFactory', rangeFactory.address);
}

async function createRestrictedPair(restrictedFactory: OSWAP_RestrictedFactory, tokenA: string, tokenB: string) {
    await restrictedFactory.createPair({
        tokenA,
        tokenB
    });
    console.log('restrictedFactory', restrictedFactory.address);
}

async function registerPairToHybridRouter(hybridRouterRegistry: OSWAP_HybridRouterRegistry, factoryAddress: string, pairAddress: string) {
    await hybridRouterRegistry.registerPairByAddress({
        factory: factoryAddress,
        pairAddress
    })
}

async function registerPairByTokensV3(hybridRouterRegistry: OSWAP_HybridRouterRegistry, factoryAddress: string, token0: string, token1: string) {
    await hybridRouterRegistry.registerPairByTokensV3({
        factory: factoryAddress,
        token0,
        token1,
        pairIndex: 0
    })
}

async function setupPriorityQueue(wallet: Wallet, oracleFactoryAddress: string, hybridRouterRegistryAddress: string, tokens: Token[]) {
    let oracleFactory = new OSWAP_OracleFactory(wallet, oracleFactoryAddress);
    for (let token of tokens) {
        await createOraclePair(oracleFactory, token.token0, token.token1);
        let pairAddress = await oracleFactory.getPair({
            param1: token.token0,
            param2: token.token1
        });
        let hybridRouterRegistry = new OSWAP_HybridRouterRegistry(wallet, hybridRouterRegistryAddress);
        await registerPairToHybridRouter(hybridRouterRegistry, oracleFactory.address, pairAddress);
    }
}

async function setupRangeQueue(wallet: Wallet, rangeFactoryAddress: string, hybridRouterRegistryAddress: string, tokens: Token[]) {
    let rangeFactory = new OSWAP_RangeFactory(wallet, rangeFactoryAddress);
    for (let token of tokens) {
        await createRangePair(rangeFactory, token.token0, token.token1);

        let pairAddress = await rangeFactory.getPair({
            param1: token.token0,
            param2: token.token1
        });

        let hybridRouterRegistry = new OSWAP_HybridRouterRegistry(wallet, hybridRouterRegistryAddress);
        await registerPairToHybridRouter(hybridRouterRegistry, rangeFactory.address, pairAddress);
    }
}

async function setupRestrictedQueue(wallet: Wallet, restrictedFactoryAddress: string, hybridRouterRegistryAddress: string, tokens: Token[]) {
    for (let token of tokens) {
        let restrictedFactory = new OSWAP_RestrictedFactory(wallet, restrictedFactoryAddress);
        await createRestrictedPair(restrictedFactory, token.token0, token.token1);
        
        let hybridRouterRegistry = new OSWAP_HybridRouterRegistry(wallet, hybridRouterRegistryAddress);
        await registerPairByTokensV3(hybridRouterRegistry, restrictedFactory.address, token.token0, token.token1);
    }
}

async function setup() {
    let wallet = new Wallet(rpcUrl, {
        address: deployerAddress, 
        privateKey
    })   
    let accounts = await wallet.accounts;
    wallet.defaultAccount = accounts[0];

    let hybridRouterRegistryAddress = deploymentConfig.hybridRouter;
    let oracleFactoryAddress = deploymentConfig.oracleFactory;
    let rangeFactoryAddress = deploymentConfig.rangeFactory;
    let restrictedFactoryAddress = deploymentConfig.restrictedFactory;
    let tokens: Token[] = deploymentConfig.queuePairTokens;

    await setupPriorityQueue(wallet, oracleFactoryAddress, hybridRouterRegistryAddress, tokens);
    await setupRangeQueue(wallet, rangeFactoryAddress, hybridRouterRegistryAddress, tokens);
    await setupRestrictedQueue(wallet, restrictedFactoryAddress, hybridRouterRegistryAddress, tokens);
}

setup();
