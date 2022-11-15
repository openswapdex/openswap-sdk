"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleFactory_json_1 = __importDefault(require("./OSWAP_OracleFactory.json"));
class OSWAP_OracleFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleFactory_json_1.default.abi, OSWAP_OracleFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.governance, params.pairCreator, this.wallet.utils.toString(params.tradeFee), this.wallet.utils.toString(params.protocolFee), this.wallet.utils.toString(params.feePerDelegator), params.protocolFeeTo]);
    }
    parseOracleAddedEvent(receipt) {
        return this.parseEvents(receipt, "OracleAdded").map(e => this.decodeOracleAddedEvent(e));
    }
    decodeOracleAddedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            oracle: result.oracle,
            _event: event
        };
    }
    parseOracleScoresEvent(receipt) {
        return this.parseEvents(receipt, "OracleScores").map(e => this.decodeOracleScoresEvent(e));
    }
    decodeOracleScoresEvent(event) {
        let result = event.data;
        return {
            oracle: result.oracle,
            score: new eth_contract_1.BigNumber(result.score),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new eth_contract_1.BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt) {
        return this.parseEvents(receipt, "PairRestarted").map(e => this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "PairShutdowned").map(e => this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt) {
        return this.parseEvents(receipt, "Restarted").map(e => this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "Shutdowned").map(e => this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseWhitelistedEvent(receipt) {
        return this.parseEvents(receipt, "Whitelisted").map(e => this.decodeWhitelistedEvent(e));
    }
    decodeWhitelistedEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            allow: result.allow,
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1) => {
            let result = await this.call('allPairs', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async () => {
            let result = await this.call('allPairsLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let allWhiteListed_call = async () => {
            let result = await this.call('allWhiteListed');
            return {
                list: result.list,
                allowed: result.allowed
            };
        };
        this.allWhiteListed = allWhiteListed_call;
        let checkAndGetOracleParams = (params) => [params.tokenA, params.tokenB];
        let checkAndGetOracle_call = async (params) => {
            let result = await this.call('checkAndGetOracle', checkAndGetOracleParams(params));
            return result;
        };
        this.checkAndGetOracle = checkAndGetOracle_call;
        let checkAndGetOracleSwapParamsParams = (params) => [params.tokenA, params.tokenB];
        let checkAndGetOracleSwapParams_call = async (params) => {
            let result = await this.call('checkAndGetOracleSwapParams', checkAndGetOracleSwapParamsParams(params));
            return {
                oracle_: result.oracle_,
                tradeFee_: new eth_contract_1.BigNumber(result.tradeFee_),
                protocolFee_: new eth_contract_1.BigNumber(result.protocolFee_)
            };
        };
        this.checkAndGetOracleSwapParams = checkAndGetOracleSwapParams_call;
        let feePerDelegator_call = async () => {
            let result = await this.call('feePerDelegator');
            return new eth_contract_1.BigNumber(result);
        };
        this.feePerDelegator = feePerDelegator_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params) => {
            let result = await this.call('getPair', getPairParams(params));
            return result;
        };
        this.getPair = getPair_call;
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let isLive_call = async () => {
            let result = await this.call('isLive');
            return result;
        };
        this.isLive = isLive_call;
        let isOracle_call = async (param1) => {
            let result = await this.call('isOracle', [param1]);
            return result;
        };
        this.isOracle = isOracle_call;
        let isWhitelisted_call = async (param1) => {
            let result = await this.call('isWhitelisted', [param1]);
            return result;
        };
        this.isWhitelisted = isWhitelisted_call;
        let minLotSize_call = async (param1) => {
            let result = await this.call('minLotSize', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.minLotSize = minLotSize_call;
        let minOracleScore_call = async () => {
            let result = await this.call('minOracleScore');
            return new eth_contract_1.BigNumber(result);
        };
        this.minOracleScore = minOracleScore_call;
        let oracleLiquidityProvider_call = async () => {
            let result = await this.call('oracleLiquidityProvider');
            return result;
        };
        this.oracleLiquidityProvider = oracleLiquidityProvider_call;
        let oracleScores_call = async (param1) => {
            let result = await this.call('oracleScores', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.oracleScores = oracleScores_call;
        let oraclesParams = (params) => [params.param1, params.param2];
        let oracles_call = async (params) => {
            let result = await this.call('oracles', oraclesParams(params));
            return result;
        };
        this.oracles = oracles_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let pairCreator_call = async () => {
            let result = await this.call('pairCreator');
            return result;
        };
        this.pairCreator = pairCreator_call;
        let protocolFee_call = async () => {
            let result = await this.call('protocolFee');
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let protocolFeeTo_call = async () => {
            let result = await this.call('protocolFeeTo');
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let securityScoreOracle_call = async () => {
            let result = await this.call('securityScoreOracle');
            return result;
        };
        this.securityScoreOracle = securityScoreOracle_call;
        let tradeFee_call = async () => {
            let result = await this.call('tradeFee');
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
        let whitelisted_call = async (param1) => {
            let result = await this.call('whitelisted', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.whitelisted = whitelisted_call;
        let whitelistedInv_call = async (param1) => {
            let result = await this.call('whitelistedInv', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.whitelistedInv = whitelistedInv_call;
        let whitelistedLength_call = async () => {
            let result = await this.call('whitelistedLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.whitelistedLength = whitelistedLength_call;
        let addOldOracleToNewPairParams = (params) => [params.tokenA, params.tokenB, params.oracle];
        let addOldOracleToNewPair_send = async (params) => {
            let result = await this.send('addOldOracleToNewPair', addOldOracleToNewPairParams(params));
            return result;
        };
        let addOldOracleToNewPair_call = async (params) => {
            let result = await this.call('addOldOracleToNewPair', addOldOracleToNewPairParams(params));
            return;
        };
        this.addOldOracleToNewPair = Object.assign(addOldOracleToNewPair_send, {
            call: addOldOracleToNewPair_call
        });
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params) => {
            let result = await this.send('createPair', createPairParams(params));
            return result;
        };
        let createPair_call = async (params) => {
            let result = await this.call('createPair', createPairParams(params));
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call
        });
        let renounceOwnership_send = async () => {
            let result = await this.send('renounceOwnership');
            return result;
        };
        let renounceOwnership_call = async () => {
            let result = await this.call('renounceOwnership');
            return;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call
        });
        let setFeePerDelegator_send = async (feePerDelegator) => {
            let result = await this.send('setFeePerDelegator', [this.wallet.utils.toString(feePerDelegator)]);
            return result;
        };
        let setFeePerDelegator_call = async (feePerDelegator) => {
            let result = await this.call('setFeePerDelegator', [this.wallet.utils.toString(feePerDelegator)]);
            return;
        };
        this.setFeePerDelegator = Object.assign(setFeePerDelegator_send, {
            call: setFeePerDelegator_call
        });
        let setLive_send = async (isLive) => {
            let result = await this.send('setLive', [isLive]);
            return result;
        };
        let setLive_call = async (isLive) => {
            let result = await this.call('setLive', [isLive]);
            return;
        };
        this.setLive = Object.assign(setLive_send, {
            call: setLive_call
        });
        let setLiveForPairParams = (params) => [params.pair, params.live];
        let setLiveForPair_send = async (params) => {
            let result = await this.send('setLiveForPair', setLiveForPairParams(params));
            return result;
        };
        let setLiveForPair_call = async (params) => {
            let result = await this.call('setLiveForPair', setLiveForPairParams(params));
            return;
        };
        this.setLiveForPair = Object.assign(setLiveForPair_send, {
            call: setLiveForPair_call
        });
        let setMinLotSizeParams = (params) => [params.token, this.wallet.utils.toString(params.minLotSize)];
        let setMinLotSize_send = async (params) => {
            let result = await this.send('setMinLotSize', setMinLotSizeParams(params));
            return result;
        };
        let setMinLotSize_call = async (params) => {
            let result = await this.call('setMinLotSize', setMinLotSizeParams(params));
            return;
        };
        this.setMinLotSize = Object.assign(setMinLotSize_send, {
            call: setMinLotSize_call
        });
        let setOracleParams = (params) => [params.tokenA, params.tokenB, params.oracle];
        let setOracle_send = async (params) => {
            let result = await this.send('setOracle', setOracleParams(params));
            return result;
        };
        let setOracle_call = async (params) => {
            let result = await this.call('setOracle', setOracleParams(params));
            return;
        };
        this.setOracle = Object.assign(setOracle_send, {
            call: setOracle_call
        });
        let setOracleLiquidityProviderParams = (params) => [params.oracleRouter, params.oracleLiquidityProvider];
        let setOracleLiquidityProvider_send = async (params) => {
            let result = await this.send('setOracleLiquidityProvider', setOracleLiquidityProviderParams(params));
            return result;
        };
        let setOracleLiquidityProvider_call = async (params) => {
            let result = await this.call('setOracleLiquidityProvider', setOracleLiquidityProviderParams(params));
            return;
        };
        this.setOracleLiquidityProvider = Object.assign(setOracleLiquidityProvider_send, {
            call: setOracleLiquidityProvider_call
        });
        let setProtocolFee_send = async (protocolFee) => {
            let result = await this.send('setProtocolFee', [this.wallet.utils.toString(protocolFee)]);
            return result;
        };
        let setProtocolFee_call = async (protocolFee) => {
            let result = await this.call('setProtocolFee', [this.wallet.utils.toString(protocolFee)]);
            return;
        };
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call: setProtocolFee_call
        });
        let setProtocolFeeTo_send = async (protocolFeeTo) => {
            let result = await this.send('setProtocolFeeTo', [protocolFeeTo]);
            return result;
        };
        let setProtocolFeeTo_call = async (protocolFeeTo) => {
            let result = await this.call('setProtocolFeeTo', [protocolFeeTo]);
            return;
        };
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call: setProtocolFeeTo_call
        });
        let setSecurityScoreOracleParams = (params) => [params.securityScoreOracle, this.wallet.utils.toString(params.minOracleScore)];
        let setSecurityScoreOracle_send = async (params) => {
            let result = await this.send('setSecurityScoreOracle', setSecurityScoreOracleParams(params));
            return result;
        };
        let setSecurityScoreOracle_call = async (params) => {
            let result = await this.call('setSecurityScoreOracle', setSecurityScoreOracleParams(params));
            return;
        };
        this.setSecurityScoreOracle = Object.assign(setSecurityScoreOracle_send, {
            call: setSecurityScoreOracle_call
        });
        let setTradeFee_send = async (tradeFee) => {
            let result = await this.send('setTradeFee', [this.wallet.utils.toString(tradeFee)]);
            return result;
        };
        let setTradeFee_call = async (tradeFee) => {
            let result = await this.call('setTradeFee', [this.wallet.utils.toString(tradeFee)]);
            return;
        };
        this.setTradeFee = Object.assign(setTradeFee_send, {
            call: setTradeFee_call
        });
        let setWhiteListParams = (params) => [params.who, params.allow];
        let setWhiteList_send = async (params) => {
            let result = await this.send('setWhiteList', setWhiteListParams(params));
            return result;
        };
        let setWhiteList_call = async (params) => {
            let result = await this.call('setWhiteList', setWhiteListParams(params));
            return;
        };
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call: setWhiteList_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let updateOracleScore_send = async (oracle) => {
            let result = await this.send('updateOracleScore', [oracle]);
            return result;
        };
        let updateOracleScore_call = async (oracle) => {
            let result = await this.call('updateOracleScore', [oracle]);
            return;
        };
        this.updateOracleScore = Object.assign(updateOracleScore_send, {
            call: updateOracleScore_call
        });
    }
}
exports.OSWAP_OracleFactory = OSWAP_OracleFactory;
