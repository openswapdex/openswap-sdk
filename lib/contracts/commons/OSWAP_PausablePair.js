"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausablePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_PausablePair_json_1 = __importDefault(require("./OSWAP_PausablePair.json"));
class OSWAP_PausablePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_PausablePair_json_1.default.abi, OSWAP_PausablePair_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this._deploy();
    }
    async factory() {
        let result = await this.call('factory');
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
    assign() {
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
    }
}
exports.OSWAP_PausablePair = OSWAP_PausablePair;
