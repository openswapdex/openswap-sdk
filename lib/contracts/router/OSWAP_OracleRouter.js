"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleRouter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/router/OSWAP_OracleRouter.json");
class OSWAP_OracleRouter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.ammFactory, params.oracleFactory, params.WETH);
    }
    async WETH() {
        let result = await this.methods('WETH');
        return result;
    }
    async ammFactory() {
        let result = await this.methods('ammFactory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.methods('getAmountIn', eth_wallet_1.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.methods('getAmountOut', eth_wallet_1.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountsIn(params) {
        let result = await this.methods('getAmountsIn', eth_wallet_1.Utils.toString(params.amountOut), params.path, params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountsOut(params) {
        let result = await this.methods('getAmountsOut', eth_wallet_1.Utils.toString(params.amountIn), params.path, params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.tokenIn, params.tokenOut, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleFactory() {
        let result = await this.methods('oracleFactory');
        return result;
    }
    async swapETHForExactTokens(params) {
        let result = await this.methods('swapETHForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async swapExactETHForTokens(params) {
        let result = await this.methods('swapExactETHForTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return result;
    }
    async swapExactTokensForETH(params) {
        let result = await this.methods('swapExactTokensForETH', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return result;
    }
    async swapExactTokensForTokens(params) {
        let result = await this.methods('swapExactTokensForTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return result;
    }
    async swapTokensForExactETH(params) {
        let result = await this.methods('swapTokensForExactETH', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async swapTokensForExactTokens(params) {
        let result = await this.methods('swapTokensForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data);
        return new eth_wallet_1.BigNumber(result);
    }
}
exports.OSWAP_OracleRouter = OSWAP_OracleRouter;
