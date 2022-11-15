"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RestrictedFactory_json_1 = __importDefault(require("./OSWAP_RestrictedFactory.json"));
class OSWAP_RestrictedFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedFactory_json_1.default.abi, OSWAP_RestrictedFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.governance, params.whitelistFactory, params.pairCreator, params.configStore, this.wallet.utils.toString(params.tradeFee), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo]);
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
            newPairSize: new eth_contract_1.BigNumber(result.newPairSize),
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
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let getCreateAddresses_call = async () => {
            let result = await this.call('getCreateAddresses');
            return {
                _governance: result._governance,
                _whitelistFactory: result._whitelistFactory,
                _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
                _configStore: result._configStore
            };
        };
        this.getCreateAddresses = getCreateAddresses_call;
        let getPairParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3)];
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
        let isPair_call = async (pair) => {
            let result = await this.call('isPair', [pair]);
            return result;
        };
        this.isPair = isPair_call;
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
        let pairIdx_call = async (param1) => {
            let result = await this.call('pairIdx', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.pairIdx = pairIdx_call;
        let pairLengthParams = (params) => [params.tokenA, params.tokenB];
        let pairLength_call = async (params) => {
            let result = await this.call('pairLength', pairLengthParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.pairLength = pairLength_call;
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
        let restrictedLiquidityProvider_call = async () => {
            let result = await this.call('restrictedLiquidityProvider');
            return result;
        };
        this.restrictedLiquidityProvider = restrictedLiquidityProvider_call;
        let tradeFee_call = async () => {
            let result = await this.call('tradeFee');
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
        let whitelistFactory_call = async () => {
            let result = await this.call('whitelistFactory');
            return result;
        };
        this.whitelistFactory = whitelistFactory_call;
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
        let init_send = async (restrictedLiquidityProvider) => {
            let result = await this.send('init', [restrictedLiquidityProvider]);
            return result;
        };
        let init_call = async (restrictedLiquidityProvider) => {
            let result = await this.call('init', [restrictedLiquidityProvider]);
            return;
        };
        this.init = Object.assign(init_send, {
            call: init_call
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
    }
}
exports.OSWAP_RestrictedFactory = OSWAP_RestrictedFactory;
