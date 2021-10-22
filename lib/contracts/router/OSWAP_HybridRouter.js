"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/router/OSWAP_HybridRouter.json");
class OSWAP_HybridRouter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.oracleFactory, params.WETH);
    }
    async WETH() {
        let result = await this.methods('WETH');
        return result;
    }
    async getAmountsIn(params) {
        let result = await this.methods('getAmountsIn', eth_wallet_1.Utils.toString(params.amountOut), params.path, params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
    async getAmountsOut(params) {
        let result = await this.methods('getAmountsOut', eth_wallet_1.Utils.toString(params.amountIn), params.path, params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
    async oracleFactory() {
        let result = await this.methods('oracleFactory');
        return result;
    }
    async pairFor(params) {
        let result = await this.methods('pairFor', params.tokenA, params.tokenB);
        return result;
    }
    async swapETHForExactTokens(params, _value) {
        let result = await this.methods('swapETHForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data, _value);
        return result;
    }
    async swapExactETHForTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data, _value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), _value);
        return result;
    }
    async swapExactTokensForETH(params) {
        let result = await this.methods('swapExactTokensForETH', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee));
        return result;
    }
    async swapExactTokensForTokens(params) {
        let result = await this.methods('swapExactTokensForTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee));
        return result;
    }
    async swapTokensForExactETH(params) {
        let result = await this.methods('swapTokensForExactETH', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
    async swapTokensForExactTokens(params) {
        let result = await this.methods('swapTokensForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.pair, eth_wallet_1.Utils.toString(params.fee), params.data);
        return result;
    }
}
exports.OSWAP_HybridRouter = OSWAP_HybridRouter;
