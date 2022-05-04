"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OAXDEX_VotingRegistry_json_1 = __importDefault(require("./OAXDEX_VotingRegistry.json"));
class OAXDEX_VotingRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingRegistry_json_1.default.abi, OAXDEX_VotingRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async newVote_send(params) {
        let result = await this.send('newVote', [params.executor, eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.options), eth_wallet_1.Utils.toString(params.quorum), eth_wallet_1.Utils.toString(params.threshold), eth_wallet_1.Utils.toString(params.voteEndTime), eth_wallet_1.Utils.toString(params.executeDelay), eth_wallet_1.Utils.stringToBytes32(params.executeParam)]);
        return result;
    }
    async newVote_call(params) {
        let result = await this.call('newVote', [params.executor, eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.options), eth_wallet_1.Utils.toString(params.quorum), eth_wallet_1.Utils.toString(params.threshold), eth_wallet_1.Utils.toString(params.voteEndTime), eth_wallet_1.Utils.toString(params.executeDelay), eth_wallet_1.Utils.stringToBytes32(params.executeParam)]);
        return;
    }
    assign() {
        this.newVote = Object.assign(this.newVote_send, { call: this.newVote_call });
    }
}
exports.OAXDEX_VotingRegistry = OAXDEX_VotingRegistry;
