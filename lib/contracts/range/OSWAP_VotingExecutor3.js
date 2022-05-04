"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor3 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_VotingExecutor3_json_1 = __importDefault(require("./OSWAP_VotingExecutor3.json"));
class OSWAP_VotingExecutor3 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingExecutor3_json_1.default.abi, OSWAP_VotingExecutor3_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.factory, params.hybridRegistry);
    }
    async execute_send(params) {
        let result = await this.send('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return result;
    }
    async execute_call(params) {
        let result = await this.call('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return;
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async hybridRegistry() {
        let result = await this.call('hybridRegistry');
        return result;
    }
    assign() {
        this.execute = Object.assign(this.execute_send, { call: this.execute_call });
    }
}
exports.OSWAP_VotingExecutor3 = OSWAP_VotingExecutor3;
