"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouter3 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_HybridRouter3_json_1 = __importDefault(require("./OSWAP_HybridRouter3.json"));
class OSWAP_HybridRouter3 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_HybridRouter3_json_1.default.abi, OSWAP_HybridRouter3_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.registry, params.WETH]);
    }
    assign() {
        let WETH_call = async () => {
            let result = await this.call('WETH');
            return result;
        };
        this.WETH = WETH_call;
        let getAmountsInEndsWithParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenOut, eth_wallet_1.Utils.stringToBytes(params.data)];
        let getAmountsInEndsWith_call = async (params) => {
            let result = await this.call('getAmountsInEndsWith', getAmountsInEndsWithParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsInEndsWith = getAmountsInEndsWith_call;
        let getAmountsInStartsWithParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.tokenIn, eth_wallet_1.Utils.stringToBytes(params.data)];
        let getAmountsInStartsWith_call = async (params) => {
            let result = await this.call('getAmountsInStartsWith', getAmountsInStartsWithParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsInStartsWith = getAmountsInStartsWith_call;
        let getAmountsOutEndsWithParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenOut, eth_wallet_1.Utils.stringToBytes(params.data)];
        let getAmountsOutEndsWith_call = async (params) => {
            let result = await this.call('getAmountsOutEndsWith', getAmountsOutEndsWithParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsOutEndsWith = getAmountsOutEndsWith_call;
        let getAmountsOutStartsWithParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.pair, params.tokenIn, eth_wallet_1.Utils.stringToBytes(params.data)];
        let getAmountsOutStartsWith_call = async (params) => {
            let result = await this.call('getAmountsOutStartsWith', getAmountsOutStartsWithParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsOutStartsWith = getAmountsOutStartsWith_call;
        let getPathInParams = (params) => [params.pair, params.tokenIn];
        let getPathIn_call = async (params) => {
            let result = await this.call('getPathIn', getPathInParams(params));
            return result;
        };
        this.getPathIn = getPathIn_call;
        let getPathOutParams = (params) => [params.pair, params.tokenOut];
        let getPathOut_call = async (params) => {
            let result = await this.call('getPathOut', getPathOutParams(params));
            return result;
        };
        this.getPathOut = getPathOut_call;
        let registry_call = async () => {
            let result = await this.call('registry');
            return result;
        };
        this.registry = registry_call;
        let swapETHForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapETHForExactTokens_send = async (params, _value) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return result;
        };
        let swapETHForExactTokens_call = async (params, _value) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call
        });
        let swapExactETHForETHParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactETHForETH_send = async (params, _value) => {
            let result = await this.send('swapExactETHForETH', swapExactETHForETHParams(params), { value: _value });
            return result;
        };
        let swapExactETHForETH_call = async (params, _value) => {
            let result = await this.call('swapExactETHForETH', swapExactETHForETHParams(params), { value: _value });
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactETHForETH = Object.assign(swapExactETHForETH_send, {
            call: swapExactETHForETH_call
        });
        let swapExactETHForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactETHForTokens_send = async (params, _value) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return result;
        };
        let swapExactETHForTokens_call = async (params, _value) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params, _value) => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return result;
        };
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params, _value) => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactETHForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForETHParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactTokensForETH_send = async (params) => {
            let result = await this.send('swapExactTokensForETH', swapExactTokensForETHParams(params));
            return result;
        };
        let swapExactTokensForETH_call = async (params) => {
            let result = await this.call('swapExactTokensForETH', swapExactTokensForETHParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call: swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForETHSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactTokensForTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result;
        };
        let swapExactTokensForTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactETHParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapTokensForExactETH_send = async (params) => {
            let result = await this.send('swapTokensForExactETH', swapTokensForExactETHParams(params));
            return result;
        };
        let swapTokensForExactETH_call = async (params) => {
            let result = await this.call('swapTokensForExactETH', swapTokensForExactETHParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call: swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.stringToBytes(params.data)];
        let swapTokensForExactTokens_send = async (params) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result;
        };
        let swapTokensForExactTokens_call = async (params) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.OSWAP_HybridRouter3 = OSWAP_HybridRouter3;
