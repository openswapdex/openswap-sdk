"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausablePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/commons/OSWAP_PausablePair.json");
class OSWAP_PausablePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
}
exports.OSWAP_PausablePair = OSWAP_PausablePair;
