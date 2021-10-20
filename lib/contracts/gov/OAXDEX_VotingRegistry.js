"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/gov/OAXDEX_VotingRegistry.json");
class OAXDEX_VotingRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async newVote(params) {
        let result = await this.methods('newVote', params.executor, eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.options), eth_wallet_1.Utils.toString(params.quorum), eth_wallet_1.Utils.toString(params.threshold), eth_wallet_1.Utils.toString(params.voteEndTime), eth_wallet_1.Utils.toString(params.executeDelay), eth_wallet_1.Utils.stringToBytes32(params.executeParam));
        return result;
    }
}
exports.OAXDEX_VotingRegistry = OAXDEX_VotingRegistry;
