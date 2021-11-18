"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor3 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/range/OSWAP_VotingExecutor3.json");
class OSWAP_VotingExecutor3 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.factory, params.hybridRegistry);
    }
    async execute(params) {
        let result = await this.methods('execute', eth_wallet_1.Utils.stringToBytes32(params));
        return result;
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async hybridRegistry() {
        let result = await this.methods('hybridRegistry');
        return result;
    }
}
exports.OSWAP_VotingExecutor3 = OSWAP_VotingExecutor3;
