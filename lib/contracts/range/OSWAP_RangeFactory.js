"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RangeFactory_json_1 = __importDefault(require("./OSWAP_RangeFactory.json"));
class OSWAP_RangeFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangeFactory_json_1.default.abi, OSWAP_RangeFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.oracleFactory, params.pairCreator, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.stakeAmount), eth_wallet_1.Utils.toString(params.liquidityProviderShare), params.protocolFeeTo);
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
            newSize: new eth_wallet_1.BigNumber(result.newSize),
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
    async allPairs(param1) {
        let result = await this.call('allPairs', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async allPairsLength() {
        let result = await this.call('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async checkAndGetSwapParams() {
        let result = await this.call('checkAndGetSwapParams');
        return new eth_wallet_1.BigNumber(result);
    }
    async createPair_send(params) {
        let result = await this.send('createPair', [params.tokenA, params.tokenB]);
        return result;
    }
    async createPair_call(params) {
        let result = await this.call('createPair', [params.tokenA, params.tokenB]);
        return result;
    }
    async getAllLiquidityProviderShare() {
        let result = await this.call('getAllLiquidityProviderShare');
        return {
            _stakeAmount: result._stakeAmount.map(e => new eth_wallet_1.BigNumber(e)),
            _liquidityProviderShare: result._liquidityProviderShare.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getCreateAddresses() {
        let result = await this.call('getCreateAddresses');
        return {
            _governance: result._governance,
            _rangeLiquidityProvider: result._rangeLiquidityProvider,
            _oracleFactory: result._oracleFactory
        };
    }
    async getLiquidityProviderShare(stake) {
        let result = await this.call('getLiquidityProviderShare', [eth_wallet_1.Utils.toString(stake)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getPair(params) {
        let result = await this.call('getPair', [params.param1, params.param2]);
        return result;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async isLive() {
        let result = await this.call('isLive');
        return result;
    }
    async liquidityProviderShare(param1) {
        let result = await this.call('liquidityProviderShare', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleFactory() {
        let result = await this.call('oracleFactory');
        return result;
    }
    async owner() {
        let result = await this.call('owner');
        return result;
    }
    async pairCreator() {
        let result = await this.call('pairCreator');
        return result;
    }
    async protocolFeeTo() {
        let result = await this.call('protocolFeeTo');
        return result;
    }
    async rangeLiquidityProvider() {
        let result = await this.call('rangeLiquidityProvider');
        return result;
    }
    async renounceOwnership_send() {
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call() {
        let result = await this.call('renounceOwnership');
        return;
    }
    async setLiquidityProviderShare_send(params) {
        let result = await this.send('setLiquidityProviderShare', [eth_wallet_1.Utils.toString(params.stakeAmount), eth_wallet_1.Utils.toString(params.liquidityProviderShare)]);
        return result;
    }
    async setLiquidityProviderShare_call(params) {
        let result = await this.call('setLiquidityProviderShare', [eth_wallet_1.Utils.toString(params.stakeAmount), eth_wallet_1.Utils.toString(params.liquidityProviderShare)]);
        return;
    }
    async setLive_send(isLive) {
        let result = await this.send('setLive', [isLive]);
        return result;
    }
    async setLive_call(isLive) {
        let result = await this.call('setLive', [isLive]);
        return;
    }
    async setLiveForPair_send(params) {
        let result = await this.send('setLiveForPair', [params.pair, params.live]);
        return result;
    }
    async setLiveForPair_call(params) {
        let result = await this.call('setLiveForPair', [params.pair, params.live]);
        return;
    }
    async setProtocolFeeTo_send(protocolFeeTo) {
        let result = await this.send('setProtocolFeeTo', [protocolFeeTo]);
        return result;
    }
    async setProtocolFeeTo_call(protocolFeeTo) {
        let result = await this.call('setProtocolFeeTo', [protocolFeeTo]);
        return;
    }
    async setRangeLiquidityProvider_send(rangeLiquidityProvider) {
        let result = await this.send('setRangeLiquidityProvider', [rangeLiquidityProvider]);
        return result;
    }
    async setRangeLiquidityProvider_call(rangeLiquidityProvider) {
        let result = await this.call('setRangeLiquidityProvider', [rangeLiquidityProvider]);
        return;
    }
    async setTradeFee_send(tradeFee) {
        let result = await this.send('setTradeFee', [eth_wallet_1.Utils.toString(tradeFee)]);
        return result;
    }
    async setTradeFee_call(tradeFee) {
        let result = await this.call('setTradeFee', [eth_wallet_1.Utils.toString(tradeFee)]);
        return;
    }
    async stakeAmount(param1) {
        let result = await this.call('stakeAmount', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async tradeFee() {
        let result = await this.call('tradeFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferOwnership_send(newOwner) {
        let result = await this.send('transferOwnership', [newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner) {
        let result = await this.call('transferOwnership', [newOwner]);
        return;
    }
    assign() {
        this.createPair = Object.assign(this.createPair_send, { call: this.createPair_call });
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, { call: this.renounceOwnership_call });
        this.setLiquidityProviderShare = Object.assign(this.setLiquidityProviderShare_send, { call: this.setLiquidityProviderShare_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, { call: this.setLiveForPair_call });
        this.setProtocolFeeTo = Object.assign(this.setProtocolFeeTo_send, { call: this.setProtocolFeeTo_call });
        this.setRangeLiquidityProvider = Object.assign(this.setRangeLiquidityProvider_send, { call: this.setRangeLiquidityProvider_call });
        this.setTradeFee = Object.assign(this.setTradeFee_send, { call: this.setTradeFee_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    }
}
exports.OSWAP_RangeFactory = OSWAP_RangeFactory;
