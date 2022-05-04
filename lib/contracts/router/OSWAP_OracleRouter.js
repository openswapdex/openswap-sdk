"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleRouter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleRouter_json_1 = __importDefault(require("./OSWAP_OracleRouter.json"));
class OSWAP_OracleRouter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleRouter_json_1.default.abi, OSWAP_OracleRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.ammFactory, params.oracleFactory, params.WETH);
    }
    async WETH() {
        let result = await this.call('WETH');
        return result;
    }
    async ammFactory() {
        let result = await this.call('ammFactory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.call('getAmountIn', [eth_wallet_1.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut, params.data]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.call('getAmountOut', [eth_wallet_1.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut, params.data]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountsIn(params) {
        let result = await this.call('getAmountsIn', [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getAmountsOut(params) {
        let result = await this.call('getAmountsOut', [eth_wallet_1.Utils.toString(params.amountIn), params.path, params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.tokenIn, params.tokenOut, params.data]);
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleFactory() {
        let result = await this.call('oracleFactory');
        return result;
    }
    async swapETHForExactTokens_send(params, _value) {
        let result = await this.send('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return result;
    }
    async swapETHForExactTokens_call(params, _value) {
        let result = await this.call('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactETHForTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return result;
    }
    async swapExactETHForTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data], { value: _value });
        return;
    }
    async swapExactTokensForETH_send(params) {
        let result = await this.send('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapExactTokensForETH_call(params) {
        let result = await this.call('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return;
    }
    async swapExactTokensForTokens_send(params) {
        let result = await this.send('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapExactTokensForTokens_call(params) {
        let result = await this.call('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return;
    }
    async swapTokensForExactETH_send(params) {
        let result = await this.send('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapTokensForExactETH_call(params) {
        let result = await this.call('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapTokensForExactTokens_send(params) {
        let result = await this.send('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result;
    }
    async swapTokensForExactTokens_call(params) {
        let result = await this.call('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), params.useOracle, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    assign() {
        this.swapETHForExactTokens = Object.assign(this.swapETHForExactTokens_send, { call: this.swapETHForExactTokens_call });
        this.swapExactETHForTokens = Object.assign(this.swapExactETHForTokens_send, { call: this.swapExactETHForTokens_call });
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(this.swapExactETHForTokensSupportingFeeOnTransferTokens_send, { call: this.swapExactETHForTokensSupportingFeeOnTransferTokens_call });
        this.swapExactTokensForETH = Object.assign(this.swapExactTokensForETH_send, { call: this.swapExactTokensForETH_call });
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(this.swapExactTokensForETHSupportingFeeOnTransferTokens_send, { call: this.swapExactTokensForETHSupportingFeeOnTransferTokens_call });
        this.swapExactTokensForTokens = Object.assign(this.swapExactTokensForTokens_send, { call: this.swapExactTokensForTokens_call });
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(this.swapExactTokensForTokensSupportingFeeOnTransferTokens_send, { call: this.swapExactTokensForTokensSupportingFeeOnTransferTokens_call });
        this.swapTokensForExactETH = Object.assign(this.swapTokensForExactETH_send, { call: this.swapTokensForExactETH_call });
        this.swapTokensForExactTokens = Object.assign(this.swapTokensForExactTokens_send, { call: this.swapTokensForExactTokens_call });
    }
}
exports.OSWAP_OracleRouter = OSWAP_OracleRouter;
