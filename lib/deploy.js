"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = exports.toDeploymentContracts = exports.DefaultGovTokenOptions = exports.DefaultGovOptions = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const contracts_1 = require("./contracts");
exports.DefaultGovOptions = {
    minStakePeriod: 1,
    tradeFee: 0.28,
    protocolFee: 0,
    protocolFeeTo: '',
    profiles: {
        name: ['poll', 'vote', 'addOldOracleToNewPair'],
        minExeDelay: [1, 1, 1],
        minVoteDuration: [0, 0, 0],
        maxVoteDuration: [1209600, 1209600, 1209600],
        minGovTokenToCreateVote: [eth_wallet_1.Utils.toDecimals(100000), eth_wallet_1.Utils.toDecimals(100000), eth_wallet_1.Utils.toDecimals(100000)],
        minQuorum: [eth_wallet_1.Utils.toDecimals(0), eth_wallet_1.Utils.toDecimals(10000000), eth_wallet_1.Utils.toDecimals(100)]
    }
};
exports.DefaultGovTokenOptions = {
    initSupply: 0,
    initSupplyTo: '',
    minter: '',
    totalSupply: eth_wallet_1.Utils.toDecimals(1000000000, 18)
};
function toDeploymentContracts(wallet, result) {
    return {
        openSwap: new contracts_1.OpenSwap(wallet, result.oswap),
        governance: new contracts_1.OAXDEX_Governance(wallet, result.governance),
        administrator: new contracts_1.OAXDEX_Administrator(wallet, result.administrator),
        registry: new contracts_1.OAXDEX_VotingRegistry(wallet, result.votingRegistry),
        pairCreator: new contracts_1.OSWAP_PairCreator(wallet, result.pairCreator),
        factory: new contracts_1.OSWAP_Factory(wallet, result.factory),
        oraclePairCreator: new contracts_1.OSWAP_OraclePairCreator(wallet, result.oraclePairCreator),
        router: new contracts_1.OSWAP_Router(wallet, result.router),
        oracleFactory: new contracts_1.OSWAP_OracleFactory(wallet, result.oracleFactory),
        oracleRouter: new contracts_1.OSWAP_OracleRouter(wallet, result.oracleRouter),
        oracleLiquidityProvider: new contracts_1.OSWAP_OracleLiquidityProvider(wallet, result.oracleLiquidityProvider),
        hybridRouterRegistry: new contracts_1.OSWAP_HybridRouterRegistry(wallet, result.hybridRouterRegistry),
        hybridRouter: new contracts_1.OSWAP_HybridRouter2(wallet, result.hybridRouter),
        executor: new contracts_1.OAXDEX_VotingExecutor(wallet, result.votingExecutor),
        executor1: new contracts_1.OSWAP_VotingExecutor1(wallet, result.votingExecutor1),
        executor2: new contracts_1.OSWAP_VotingExecutor2(wallet, result.votingExecutor2)
    };
}
exports.toDeploymentContracts = toDeploymentContracts;
function deploy(wallet, options) {
    options = options || {};
    if (!options.govOptions)
        options.govOptions = exports.DefaultGovOptions;
    if (!options.govTokenOptions)
        options.govTokenOptions = exports.DefaultGovTokenOptions;
    if (!options.tokens)
        options.tokens = {};
    if (!options.amm)
        options.amm = {};
    if (!options.oracle)
        options.oracle = {};
    return new Promise(async function (resolve, reject) {
        try {
            let result = {};
            if (!options.tokens.oswap) {
                let oswap = new contracts_1.OpenSwap(wallet);
                result.oswap = await oswap.deploy(options.govTokenOptions);
            }
            else
                result.oswap = options.tokens.oswap;
            if (options.tokens.weth)
                result.weth = options.tokens.weth;
            let governance = new contracts_1.OAXDEX_Governance(wallet);
            result.governance = await governance.deploy({
                names: options.govOptions.profiles.name,
                maxVoteDuration: options.govOptions.profiles.maxVoteDuration,
                minExeDelay: options.govOptions.profiles.minExeDelay,
                minOaxTokenToCreateVote: options.govOptions.profiles.minGovTokenToCreateVote,
                minQuorum: options.govOptions.profiles.minQuorum,
                minStakePeriod: options.govOptions.minStakePeriod,
                minVoteDuration: options.govOptions.profiles.minVoteDuration,
                oaxToken: result.oswap
            });
            let administrator = new contracts_1.OAXDEX_Administrator(wallet);
            result.administrator = await administrator.deploy(governance.address);
            await governance.initAdmin(result.administrator);
            let votingRegistry = new contracts_1.OAXDEX_VotingRegistry(wallet);
            result.votingRegistry = await votingRegistry.deploy(result.governance);
            await governance.setVotingRegister(result.votingRegistry);
            let pairCreator = new contracts_1.OSWAP_PairCreator(wallet);
            result.pairCreator = await pairCreator.deploy();
            let factory = new contracts_1.OSWAP_Factory(wallet);
            result.factory = await factory.deploy({
                governance: options.amm.governance || result.governance,
                pairCreator: result.pairCreator,
                protocolFee: 0,
                protocolFeeTo: options.amm.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
                tradeFee: 0
            });
            let oraclePairCreator = new contracts_1.OSWAP_OraclePairCreator(wallet);
            result.oraclePairCreator = await oraclePairCreator.deploy();
            let router = new contracts_1.OSWAP_Router(wallet);
            result.router = await router.deploy({
                WETH: result.weth,
                factory: result.factory
            });
            let oracleFactory = new contracts_1.OSWAP_OracleFactory(wallet);
            result.oracleFactory = await oracleFactory.deploy({
                feePerDelegator: options.oracle.feePerDelegator || 0,
                governance: options.oracle.governance || result.governance,
                pairCreator: options.oracle.pairCreator || result.oraclePairCreator,
                protocolFee: options.oracle.protocolFee || 0,
                protocolFeeTo: options.oracle.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
                tradeFee: options.oracle.tradeFee || 0
            });
            let oracleRouter = new contracts_1.OSWAP_OracleRouter(wallet);
            result.oracleRouter = await oracleRouter.deploy({
                WETH: result.weth,
                ammFactory: result.factory,
                oracleFactory: result.oracleFactory
            });
            let oracleLiquidityProvider = new contracts_1.OSWAP_OracleLiquidityProvider(wallet);
            result.oracleLiquidityProvider = await oracleLiquidityProvider.deploy({
                WETH: result.weth,
                factory: result.oracleFactory
            });
            await oracleFactory.setOracleLiquidityProvider({
                oracleLiquidityProvider: result.oracleLiquidityProvider,
                oracleRouter: result.oracleRouter
            });
            let hybridRouterRegistry = new contracts_1.OSWAP_HybridRouterRegistry(wallet);
            result.hybridRouterRegistry = await hybridRouterRegistry.deploy(result.governance);
            let hybridRouter = new contracts_1.OSWAP_HybridRouter2(wallet);
            result.hybridRouter = await hybridRouter.deploy({
                WETH: result.weth,
                registry: result.hybridRouterRegistry
            });
            let votingExecutor = new contracts_1.OAXDEX_VotingExecutor(wallet);
            result.votingExecutor = await votingExecutor.deploy({
                admin: result.administrator,
                governance: result.governance
            });
            await governance.initVotingExecutor([result.votingExecutor]);
            let votingExecutor1 = new contracts_1.OSWAP_VotingExecutor1(wallet);
            result.votingExecutor1 = await votingExecutor1.deploy(factory.address);
            let votingExecutor2 = new contracts_1.OSWAP_VotingExecutor2(wallet);
            result.votingExecutor2 = await votingExecutor2.deploy(oracleFactory.address);
            console.dir(result);
            resolve(result);
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.deploy = deploy;
