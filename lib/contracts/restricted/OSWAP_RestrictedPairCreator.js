"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPairCreator = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_RestrictedPairCreator.json");
class OSWAP_RestrictedPairCreator extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async createPair(salt) {
        let result = await this.methods('createPair', salt);
        return result;
    }
}
exports.OSWAP_RestrictedPairCreator = OSWAP_RestrictedPairCreator;
