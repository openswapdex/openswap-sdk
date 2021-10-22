"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_FactoryBase = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/commons/OSWAP_FactoryBase.json");
class OSWAP_FactoryBase extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.pairCreator);
    }
    async allPairs(param1) {
        let result = await this.methods('allPairs', param1);
        return result;
    }
    async allPairsLength() {
        let result = await this.methods('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async getPair(params) {
        let result = await this.methods('getPair', params.param1, params.param2);
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async pairCreator() {
        let result = await this.methods('pairCreator');
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
exports.OSWAP_FactoryBase = OSWAP_FactoryBase;