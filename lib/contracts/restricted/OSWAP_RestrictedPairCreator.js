"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPairCreator = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RestrictedPairCreator_json_1 = __importDefault(require("./OSWAP_RestrictedPairCreator.json"));
class OSWAP_RestrictedPairCreator extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedPairCreator_json_1.default.abi, OSWAP_RestrictedPairCreator_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this._deploy();
    }
    async createPair_send(salt) {
        let result = await this.send('createPair', [eth_wallet_1.Utils.stringToBytes32(salt)]);
        return result;
    }
    async createPair_call(salt) {
        let result = await this.call('createPair', [eth_wallet_1.Utils.stringToBytes32(salt)]);
        return result;
    }
    assign() {
        this.createPair = Object.assign(this.createPair_send, { call: this.createPair_call });
    }
}
exports.OSWAP_RestrictedPairCreator = OSWAP_RestrictedPairCreator;
