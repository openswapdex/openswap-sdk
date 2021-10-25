"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockOracleAdaptor = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/MockOracleAdaptor.json");
class MockOracleAdaptor extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.weth, eth_wallet_1.Utils.toString(params.decimals), params.tokens, eth_wallet_1.Utils.toString(params.prices));
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.from, params.to, params.param3);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), params.param5);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.from, params.to);
        return result;
    }
    async setPrice(params) {
        let result = await this.methods('setPrice', params.token0, params.token1, eth_wallet_1.Utils.toString(params.price0), eth_wallet_1.Utils.toString(params.price1));
        return result;
    }
    async weth() {
        let result = await this.methods('weth');
        return result;
    }
}
exports.MockOracleAdaptor = MockOracleAdaptor;
