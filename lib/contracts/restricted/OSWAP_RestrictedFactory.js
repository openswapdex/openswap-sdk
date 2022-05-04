"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RestrictedFactory_json_1 = __importDefault(require("./OSWAP_RestrictedFactory.json"));
class OSWAP_RestrictedFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedFactory_json_1.default.abi, OSWAP_RestrictedFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.whitelistFactory, params.pairCreator, params.configStore, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo);
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
            newPairSize: new eth_wallet_1.BigNumber(result.newPairSize),
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
    async addOldOracleToNewPair_send(params) {
        let result = await this.send('addOldOracleToNewPair', [params.tokenA, params.tokenB, params.oracle]);
        return result;
    }
    async addOldOracleToNewPair_call(params) {
        let result = await this.call('addOldOracleToNewPair', [params.tokenA, params.tokenB, params.oracle]);
        return;
    }
    async allPairs(param1) {
        let result = await this.call('allPairs', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async allPairsLength() {
        let result = await this.call('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async checkAndGetOracle(params) {
        let result = await this.call('checkAndGetOracle', [params.tokenA, params.tokenB]);
        return result;
    }
    async checkAndGetOracleSwapParams(params) {
        let result = await this.call('checkAndGetOracleSwapParams', [params.tokenA, params.tokenB]);
        return {
            oracle_: result.oracle_,
            tradeFee_: new eth_wallet_1.BigNumber(result.tradeFee_),
            protocolFee_: new eth_wallet_1.BigNumber(result.protocolFee_)
        };
    }
    async configStore() {
        let result = await this.call('configStore');
        return result;
    }
    async createPair_send(params) {
        let result = await this.send('createPair', [params.tokenA, params.tokenB]);
        return result;
    }
    async createPair_call(params) {
        let result = await this.call('createPair', [params.tokenA, params.tokenB]);
        return result;
    }
    async getCreateAddresses() {
        let result = await this.call('getCreateAddresses');
        return {
            _governance: result._governance,
            _whitelistFactory: result._whitelistFactory,
            _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
            _configStore: result._configStore
        };
    }
    async getPair(params) {
        let result = await this.call('getPair', [params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3)]);
        return result;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async init_send(restrictedLiquidityProvider) {
        let result = await this.send('init', [restrictedLiquidityProvider]);
        return result;
    }
    async init_call(restrictedLiquidityProvider) {
        let result = await this.call('init', [restrictedLiquidityProvider]);
        return;
    }
    async isLive() {
        let result = await this.call('isLive');
        return result;
    }
    async isOracle(param1) {
        let result = await this.call('isOracle', [param1]);
        return result;
    }
    async isPair(pair) {
        let result = await this.call('isPair', [pair]);
        return result;
    }
    async oracles(params) {
        let result = await this.call('oracles', [params.param1, params.param2]);
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
    async pairIdx(param1) {
        let result = await this.call('pairIdx', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async pairLength(params) {
        let result = await this.call('pairLength', [params.tokenA, params.tokenB]);
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFee() {
        let result = await this.call('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeTo() {
        let result = await this.call('protocolFeeTo');
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
    async restrictedLiquidityProvider() {
        let result = await this.call('restrictedLiquidityProvider');
        return result;
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
    async setOracle_send(params) {
        let result = await this.send('setOracle', [params.tokenA, params.tokenB, params.oracle]);
        return result;
    }
    async setOracle_call(params) {
        let result = await this.call('setOracle', [params.tokenA, params.tokenB, params.oracle]);
        return;
    }
    async setProtocolFee_send(protocolFee) {
        let result = await this.send('setProtocolFee', [eth_wallet_1.Utils.toString(protocolFee)]);
        return result;
    }
    async setProtocolFee_call(protocolFee) {
        let result = await this.call('setProtocolFee', [eth_wallet_1.Utils.toString(protocolFee)]);
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
    async setTradeFee_send(tradeFee) {
        let result = await this.send('setTradeFee', [eth_wallet_1.Utils.toString(tradeFee)]);
        return result;
    }
    async setTradeFee_call(tradeFee) {
        let result = await this.call('setTradeFee', [eth_wallet_1.Utils.toString(tradeFee)]);
        return;
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
    async whitelistFactory() {
        let result = await this.call('whitelistFactory');
        return result;
    }
    assign() {
        this.addOldOracleToNewPair = Object.assign(this.addOldOracleToNewPair_send, { call: this.addOldOracleToNewPair_call });
        this.createPair = Object.assign(this.createPair_send, { call: this.createPair_call });
        this.init = Object.assign(this.init_send, { call: this.init_call });
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, { call: this.renounceOwnership_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, { call: this.setLiveForPair_call });
        this.setOracle = Object.assign(this.setOracle_send, { call: this.setOracle_call });
        this.setProtocolFee = Object.assign(this.setProtocolFee_send, { call: this.setProtocolFee_call });
        this.setProtocolFeeTo = Object.assign(this.setProtocolFeeTo_send, { call: this.setProtocolFeeTo_call });
        this.setTradeFee = Object.assign(this.setTradeFee_send, { call: this.setTradeFee_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    }
}
exports.OSWAP_RestrictedFactory = OSWAP_RestrictedFactory;
