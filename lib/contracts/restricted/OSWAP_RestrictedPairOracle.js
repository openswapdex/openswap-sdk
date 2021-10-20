"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPairOracle = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_RestrictedPairOracle.json");
class OSWAP_RestrictedPairOracle extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async WEI() {
        let result = await this.methods('WEI');
        return new eth_wallet_1.BigNumber(result);
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.from, params.to, params.payload);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), params.param5, params.payload);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.param1, params.param2);
        return result;
    }
}
exports.OSWAP_RestrictedPairOracle = OSWAP_RestrictedPairOracle;
