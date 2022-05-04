"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingExecutor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OAXDEX_VotingExecutor_json_1 = __importDefault(require("./OAXDEX_VotingExecutor.json"));
class OAXDEX_VotingExecutor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingExecutor_json_1.default.abi, OAXDEX_VotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.admin);
    }
    async admin() {
        let result = await this.call('admin');
        return result;
    }
    async execute_send(params) {
        let result = await this.send('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return result;
    }
    async execute_call(params) {
        let result = await this.call('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    assign() {
        this.execute = Object.assign(this.execute_send, { call: this.execute_call });
    }
}
exports.OAXDEX_VotingExecutor = OAXDEX_VotingExecutor;
