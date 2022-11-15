"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RangeFactory_json_1 = __importDefault(require("./OSWAP_RangeFactory.json"));
class OSWAP_RangeFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangeFactory_json_1.default.abi, OSWAP_RangeFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.governance, params.oracleFactory, params.pairCreator, this.wallet.utils.toString(params.tradeFee), this.wallet.utils.toString(params.stakeAmount), this.wallet.utils.toString(params.liquidityProviderShare), params.protocolFeeTo]);
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
        let checkAndGetSwapParams_call = async () => {
            let result = await this.call('checkAndGetSwapParams');
            return new eth_contract_1.BigNumber(result);
        };
        this.checkAndGetSwapParams = checkAndGetSwapParams_call;
        let getAllLiquidityProviderShare_call = async () => {
            let result = await this.call('getAllLiquidityProviderShare');
            return {
                _stakeAmount: result._stakeAmount.map(e => new eth_contract_1.BigNumber(e)),
                _liquidityProviderShare: result._liquidityProviderShare.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getAllLiquidityProviderShare = getAllLiquidityProviderShare_call;
        let getCreateAddresses_call = async () => {
            let result = await this.call('getCreateAddresses');
            return {
                _governance: result._governance,
                _rangeLiquidityProvider: result._rangeLiquidityProvider,
                _oracleFactory: result._oracleFactory
            };
        };
        this.getCreateAddresses = getCreateAddresses_call;
        let getLiquidityProviderShare_call = async (stake) => {
            let result = await this.call('getLiquidityProviderShare', [this.wallet.utils.toString(stake)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.getLiquidityProviderShare = getLiquidityProviderShare_call;
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
        let liquidityProviderShare_call = async (param1) => {
            let result = await this.call('liquidityProviderShare', [this.wallet.utils.toString(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.liquidityProviderShare = liquidityProviderShare_call;
        let oracleFactory_call = async () => {
            let result = await this.call('oracleFactory');
            return result;
        };
        this.oracleFactory = oracleFactory_call;
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
        let protocolFeeTo_call = async () => {
            let result = await this.call('protocolFeeTo');
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let rangeLiquidityProvider_call = async () => {
            let result = await this.call('rangeLiquidityProvider');
            return result;
        };
        this.rangeLiquidityProvider = rangeLiquidityProvider_call;
        let stakeAmount_call = async (param1) => {
            let result = await this.call('stakeAmount', [this.wallet.utils.toString(param1)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeAmount = stakeAmount_call;
        let tradeFee_call = async () => {
            let result = await this.call('tradeFee');
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
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
        let setLiquidityProviderShareParams = (params) => [this.wallet.utils.toString(params.stakeAmount), this.wallet.utils.toString(params.liquidityProviderShare)];
        let setLiquidityProviderShare_send = async (params) => {
            let result = await this.send('setLiquidityProviderShare', setLiquidityProviderShareParams(params));
            return result;
        };
        let setLiquidityProviderShare_call = async (params) => {
            let result = await this.call('setLiquidityProviderShare', setLiquidityProviderShareParams(params));
            return;
        };
        this.setLiquidityProviderShare = Object.assign(setLiquidityProviderShare_send, {
            call: setLiquidityProviderShare_call
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
        let setRangeLiquidityProvider_send = async (rangeLiquidityProvider) => {
            let result = await this.send('setRangeLiquidityProvider', [rangeLiquidityProvider]);
            return result;
        };
        let setRangeLiquidityProvider_call = async (rangeLiquidityProvider) => {
            let result = await this.call('setRangeLiquidityProvider', [rangeLiquidityProvider]);
            return;
        };
        this.setRangeLiquidityProvider = Object.assign(setRangeLiquidityProvider_send, {
            call: setRangeLiquidityProvider_call
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
exports.OSWAP_RangeFactory = OSWAP_RangeFactory;
