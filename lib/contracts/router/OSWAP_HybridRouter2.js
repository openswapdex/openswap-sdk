"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouter2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_HybridRouter2_json_1 = __importDefault(require("./OSWAP_HybridRouter2.json"));
class OSWAP_HybridRouter2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_HybridRouter2_json_1.default.abi, OSWAP_HybridRouter2_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.registry, params.WETH);
    }
    async WETH() {
        let result = await this.call('WETH');
        return result;
    }
    async getAmountsInEndsWith(params) {
        let result = await this.call('getAmountsInEndsWith', [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenOut, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getAmountsInStartsWith(params) {
        let result = await this.call('getAmountsInStartsWith', [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenIn, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getAmountsOutEndsWith(params) {
        let result = await this.call('getAmountsOutEndsWith', [eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenOut, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getAmountsOutStartsWith(params) {
        let result = await this.call('getAmountsOutStartsWith', [eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenIn, params.data]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getPathIn(params) {
        let result = await this.call('getPathIn', [params.pair, params.tokenIn]);
        return result;
    }
    async getPathOut(params) {
        let result = await this.call('getPathOut', [params.pair, params.tokenOut]);
        return result;
    }
    async registry() {
        let result = await this.call('registry');
        return result;
    }
    async swapETHForExactTokens_send(params, _value) {
        let result = await this.send('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return result;
    }
    async swapETHForExactTokens_call(params, _value) {
        let result = await this.call('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async swapExactETHForTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return result;
    }
    async swapExactETHForTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data], { value: _value });
        return;
    }
    async swapExactTokensForETH_send(params) {
        let result = await this.send('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapExactTokensForETH_call(params) {
        let result = await this.call('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return;
    }
    async swapExactTokensForTokens_send(params) {
        let result = await this.send('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapExactTokensForTokens_call(params) {
        let result = await this.call('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return;
    }
    async swapTokensForExactETH_send(params) {
        let result = await this.send('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapTokensForExactETH_call(params) {
        let result = await this.call('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async swapTokensForExactTokens_send(params) {
        let result = await this.send('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return result;
    }
    async swapTokensForExactTokens_call(params) {
        let result = await this.call('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, eth_wallet_1.Utils.toString(params.deadline), params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
        };
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
exports.OSWAP_HybridRouter2 = OSWAP_HybridRouter2;
