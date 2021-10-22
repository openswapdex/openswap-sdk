"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = exports.DefaultGovTokenOptions = exports.DefaultGovOptions = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_Factory_1 = require("./contracts/amm/OSWAP_Factory");
const OSWAP_PairCreator_1 = require("./contracts/amm/OSWAP_PairCreator");
const OSWAP_Router_1 = require("./contracts/amm/OSWAP_Router");
const OSWAP_VotingExecutor1_1 = require("./contracts/amm/OSWAP_VotingExecutor1");
const OAXDEX_Governance_1 = require("./contracts/gov/OAXDEX_Governance");
const OAXDEX_VotingExecutor_1 = require("./contracts/gov/OAXDEX_VotingExecutor");
const OAXDEX_Administrator_1 = require("./contracts/gov/OAXDEX_Administrator");
const OAXDEX_VotingRegistry_1 = require("./contracts/gov/OAXDEX_VotingRegistry");
const OSWAP_OraclePairCreator_1 = require("./contracts/oracle/OSWAP_OraclePairCreator");
const OSWAP_VotingExecutor2_1 = require("./contracts/oracle/OSWAP_VotingExecutor2");
const OSWAP_OracleFactory_1 = require("./contracts/oracle/OSWAP_OracleFactory");
const OSWAP_OracleLiquidityProvider_1 = require("./contracts/oracle/OSWAP_OracleLiquidityProvider");
const OSWAP_OracleRouter_1 = require("./contracts/router/OSWAP_OracleRouter");
const OSWAP_HybridRouterRegistry_1 = require("./contracts/router/OSWAP_HybridRouterRegistry");
const OSWAP_HybridRouter2_1 = require("./contracts/router/OSWAP_HybridRouter2");
const OpenSwap_1 = require("./contracts/OpenSwap");
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
                let oswap = new OpenSwap_1.OpenSwap(wallet);
                result.oswap = await oswap.deploy(options.govTokenOptions);
            }
            else
                result.oswap = options.tokens.oswap;
            if (options.tokens.weth)
                result.weth = options.tokens.weth;
            let governance = new OAXDEX_Governance_1.OAXDEX_Governance(wallet);
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
            let administrator = new OAXDEX_Administrator_1.OAXDEX_Administrator(wallet);
            result.administrator = await administrator.deploy(governance.address);
            let votingRegistry = new OAXDEX_VotingRegistry_1.OAXDEX_VotingRegistry(wallet);
            result.votingRegistry = await votingRegistry.deploy(result.governance);
            await governance.setVotingRegister(result.votingRegistry);
            let pairCreator = new OSWAP_PairCreator_1.OSWAP_PairCreator(wallet);
            result.pairCreator = await pairCreator.deploy();
            let factory = new OSWAP_Factory_1.OSWAP_Factory(wallet);
            result.factory = await factory.deploy({
                governance: options.amm.governance || result.governance,
                pairCreator: result.pairCreator,
                protocolFee: 0,
                protocolFeeTo: options.amm.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
                tradeFee: 0
            });
            let oraclePairCreator = new OSWAP_OraclePairCreator_1.OSWAP_OraclePairCreator(wallet);
            result.oraclePairCreator = await oraclePairCreator.deploy();
            let router = new OSWAP_Router_1.OSWAP_Router(wallet);
            result.router = await router.deploy({
                WETH: result.weth,
                factory: result.factory
            });
            let oracleFactory = new OSWAP_OracleFactory_1.OSWAP_OracleFactory(wallet);
            result.oracleFactory = await oracleFactory.deploy({
                feePerDelegator: options.oracle.feePerDelegator || 0,
                governance: options.oracle.governance || result.governance,
                pairCreator: options.oracle.pairCreator || result.pairCreator,
                protocolFee: options.oracle.protocolFee || 0,
                protocolFeeTo: options.oracle.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
                tradeFee: options.oracle.tradeFee || 0
            });
            let oracleRouter = new OSWAP_OracleRouter_1.OSWAP_OracleRouter(wallet);
            result.oracleRouter = await oracleRouter.deploy({
                WETH: result.weth,
                ammFactory: result.factory,
                oracleFactory: result.oracleFactory
            });
            let oracleLiquidityProvider = new OSWAP_OracleLiquidityProvider_1.OSWAP_OracleLiquidityProvider(wallet);
            result.oracleLiquidityProvider = await oracleLiquidityProvider.deploy({
                WETH: result.weth,
                factory: result.oracleFactory
            });
            await oracleFactory.setOracleLiquidityProvider({
                oracleLiquidityProvider: result.oracleLiquidityProvider,
                oracleRouter: result.oracleRouter
            });
            let hybridRouterRegistry = new OSWAP_HybridRouterRegistry_1.OSWAP_HybridRouterRegistry(wallet);
            result.hybridRouterRegistry = await hybridRouterRegistry.deploy(result.governance);
            let hybridRouter = new OSWAP_HybridRouter2_1.OSWAP_HybridRouter2(wallet);
            result.hybridRouter = await hybridRouter.deploy({
                WETH: result.weth,
                registry: result.hybridRouterRegistry
            });
            let votingExecutor = new OAXDEX_VotingExecutor_1.OAXDEX_VotingExecutor(wallet);
            result.votingExecutor = await votingExecutor.deploy({
                admin: result.administrator,
                governance: result.governance
            });
            let votingExecutor1 = new OSWAP_VotingExecutor1_1.OSWAP_VotingExecutor1(wallet);
            result.votingExecutor1 = await votingExecutor1.deploy(factory.address);
            let votingExecutor2 = new OSWAP_VotingExecutor2_1.OSWAP_VotingExecutor2(wallet);
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