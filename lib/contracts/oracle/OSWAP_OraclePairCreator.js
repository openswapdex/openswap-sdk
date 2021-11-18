"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OraclePairCreator = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/oracle/OSWAP_OraclePairCreator.json");
class OSWAP_OraclePairCreator extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async createPair(salt) {
        let result = await this.methods('createPair', eth_wallet_1.Utils.stringToBytes32(salt));
        return result;
    }
}
exports.OSWAP_OraclePairCreator = OSWAP_OraclePairCreator;
