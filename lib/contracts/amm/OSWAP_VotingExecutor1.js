"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor1 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/amm/OSWAP_VotingExecutor1.json");
class OSWAP_VotingExecutor1 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(factory) {
        return this._deploy(factory);
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
}
exports.OSWAP_VotingExecutor1 = OSWAP_VotingExecutor1;
