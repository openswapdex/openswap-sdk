"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausableFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/commons/OSWAP_PausableFactory.json");
class OSWAP_PausableFactory extends eth_wallet_1.Contract {
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
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async setLiveForPair(params) {
        let result = await this.methods('setLiveForPair', params.pair, params.live);
        return result;
    }
}
exports.OSWAP_PausableFactory = OSWAP_PausableFactory;
