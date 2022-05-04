"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_FactoryBase = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_FactoryBase_json_1 = __importDefault(require("./OSWAP_FactoryBase.json"));
class OSWAP_FactoryBase extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_FactoryBase_json_1.default.abi, OSWAP_FactoryBase_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.pairCreator);
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
    async createPair_send(params) {
        let result = await this.send('createPair', [params.tokenA, params.tokenB]);
        return result;
    }
    async createPair_call(params) {
        let result = await this.call('createPair', [params.tokenA, params.tokenB]);
        return result;
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
    async pairCreator() {
        let result = await this.call('pairCreator');
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
    assign() {
        this.createPair = Object.assign(this.createPair_send, { call: this.createPair_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, { call: this.setLiveForPair_call });
    }
}
exports.OSWAP_FactoryBase = OSWAP_FactoryBase;
