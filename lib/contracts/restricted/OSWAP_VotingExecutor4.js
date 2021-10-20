"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor4 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_VotingExecutor4.json");
class OSWAP_VotingExecutor4 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.factory, params.configStore);
    }
    async configStore() {
        let result = await this.methods('configStore');
        return result;
    }
    async execute(params) {
        let result = await this.methods('execute', params);
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
}
exports.OSWAP_VotingExecutor4 = OSWAP_VotingExecutor4;
