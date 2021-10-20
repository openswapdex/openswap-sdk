"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/oracle/OSWAP_VotingExecutor2.json");
class OSWAP_VotingExecutor2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(factory) {
        return this._deploy(factory);
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
exports.OSWAP_VotingExecutor2 = OSWAP_VotingExecutor2;
