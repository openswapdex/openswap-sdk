"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausableFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_PausableFactory_json_1 = __importDefault(require("./OSWAP_PausableFactory.json"));
class OSWAP_PausableFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_PausableFactory_json_1.default.abi, OSWAP_PausableFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this._deploy(governance);
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
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async isLive() {
        let result = await this.call('isLive');
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
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, { call: this.setLiveForPair_call });
    }
}
exports.OSWAP_PausableFactory = OSWAP_PausableFactory;
