"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouter2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/router/OSWAP_HybridRouter2.json");
class OSWAP_HybridRouter2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.registry, params.WETH);
    }
    async WETH() {
        let result = await this.methods('WETH');
        return result;
    }
    async getAmountsInEndsWith(params) {
        let result = await this.methods('getAmountsInEndsWith', eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenOut, params.data);
        return result;
    }
    async getAmountsInStartsWith(params) {
        let result = await this.methods('getAmountsInStartsWith', eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenIn, params.data);
        return result;
    }
    async getAmountsOutEndsWith(params) {
        let result = await this.methods('getAmountsOutEndsWith', eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenOut, params.data);
        return result;
    }
    async getAmountsOutStartsWith(params) {
        let result = await this.methods('getAmountsOutStartsWith', eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenIn, params.data);
        return result;
    }
    async getPathIn(params) {
        let result = await this.methods('getPathIn', params.pair, params.tokenIn);
        return result;
    }
    async getPathOut(params) {
        let result = await this.methods('getPathOut', params.pair, params.tokenOut);
        return result;
    }
    async registry() {
        let result = await this.methods('registry');
        return result;
    }
    async swapETHForExactTokens(params, _value) {
        let result = await this.methods('swapETHForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data, _value);
        return result;
    }
    async swapExactETHForTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data, _value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data, _value);
        return result;
    }
    async swapExactTokensForETH(params) {
        let result = await this.methods('swapExactTokensForETH', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
    async swapExactTokensForTokens(params) {
        let result = await this.methods('swapExactTokensForTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
    async swapTokensForExactETH(params) {
        let result = await this.methods('swapTokensForExactETH', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
    async swapTokensForExactTokens(params) {
        let result = await this.methods('swapTokensForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data);
        return result;
    }
}
exports.OSWAP_HybridRouter2 = OSWAP_HybridRouter2;
