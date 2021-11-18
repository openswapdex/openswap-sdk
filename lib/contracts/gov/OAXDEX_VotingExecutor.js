"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingExecutor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/gov/OAXDEX_VotingExecutor.json");
class OAXDEX_VotingExecutor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.admin);
    }
    async admin() {
        let result = await this.methods('admin');
        return result;
    }
    async execute(params) {
        let result = await this.methods('execute', eth_wallet_1.Utils.stringToBytes32(params));
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
}
exports.OAXDEX_VotingExecutor = OAXDEX_VotingExecutor;
