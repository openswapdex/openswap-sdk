"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Router = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_Router_json_1 = __importDefault(require("./OSWAP_Router.json"));
class OSWAP_Router extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_Router_json_1.default.abi, OSWAP_Router_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.factory, params.WETH);
    }
    async WETH() {
        let result = await this.call('WETH');
        return result;
    }
    async addLiquidity_send(params) {
        let result = await this.send('addLiquidity', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountA: new eth_wallet_1.BigNumber(result.amountA),
            amountB: new eth_wallet_1.BigNumber(result.amountB),
            liquidity: new eth_wallet_1.BigNumber(result.liquidity)
        };
    }
    async addLiquidityETH_send(params, _value) {
        let result = await this.send('addLiquidityETH', [params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async addLiquidityETH_call(params, _value) {
        let result = await this.call('addLiquidityETH', [params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return {
            amountToken: new eth_wallet_1.BigNumber(result.amountToken),
            amountETH: new eth_wallet_1.BigNumber(result.amountETH),
            liquidity: new eth_wallet_1.BigNumber(result.liquidity)
        };
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.call('getAmountIn', [eth_wallet_1.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.call('getAmountOut', [eth_wallet_1.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountsIn(params) {
        let result = await this.call('getAmountsIn', [eth_wallet_1.Utils.toString(params.amountOut), params.path]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getAmountsOut(params) {
        let result = await this.call('getAmountsOut', [eth_wallet_1.Utils.toString(params.amountIn), params.path]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async getReserves(params) {
        let result = await this.call('getReserves', [params.tokenA, params.tokenB]);
        return {
            reserveA: new eth_wallet_1.BigNumber(result.reserveA),
            reserveB: new eth_wallet_1.BigNumber(result.reserveB)
        };
    }
    async quote(params) {
        let result = await this.call('quote', [eth_wallet_1.Utils.toString(params.amountA), eth_wallet_1.Utils.toString(params.reserveA), eth_wallet_1.Utils.toString(params.reserveB)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountA: new eth_wallet_1.BigNumber(result.amountA),
            amountB: new eth_wallet_1.BigNumber(result.amountB)
        };
    }
    async removeLiquidityETH_send(params) {
        let result = await this.send('removeLiquidityETH', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params) {
        let result = await this.call('removeLiquidityETH', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountToken: new eth_wallet_1.BigNumber(result.amountToken),
            amountETH: new eth_wallet_1.BigNumber(result.amountETH)
        };
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async removeLiquidityETHWithPermit_send(params) {
        let result = await this.send('removeLiquidityETHWithPermit', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityETHWithPermit_call(params) {
        let result = await this.call('removeLiquidityETHWithPermit', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return {
            amountToken: new eth_wallet_1.BigNumber(result.amountToken),
            amountETH: new eth_wallet_1.BigNumber(result.amountETH)
        };
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async removeLiquidityWithPermit_send(params) {
        let result = await this.send('removeLiquidityWithPermit', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityWithPermit_call(params) {
        let result = await this.call('removeLiquidityWithPermit', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return {
            amountA: new eth_wallet_1.BigNumber(result.amountA),
            amountB: new eth_wallet_1.BigNumber(result.amountB)
        };
    }
    async swapETHForExactTokens_send(params, _value) {
        let result = await this.send('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async swapETHForExactTokens_call(params, _value) {
        let result = await this.call('swapETHForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactETHForTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async swapExactETHForTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params, _value) {
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params, _value) {
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return;
    }
    async swapExactTokensForETH_send(params) {
        let result = await this.send('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForETH_call(params) {
        let result = await this.call('swapExactTokensForETH', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    async swapExactTokensForTokens_send(params) {
        let result = await this.send('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForTokens_call(params) {
        let result = await this.call('swapExactTokensForTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params) {
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params) {
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    async swapTokensForExactETH_send(params) {
        let result = await this.send('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapTokensForExactETH_call(params) {
        let result = await this.call('swapTokensForExactETH', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async swapTokensForExactTokens_send(params) {
        let result = await this.send('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async swapTokensForExactTokens_call(params) {
        let result = await this.call('swapTokensForExactTokens', [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, { call: this.addLiquidityETH_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, { call: this.removeLiquidityETH_call });
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(this.removeLiquidityETHSupportingFeeOnTransferTokens_send, { call: this.removeLiquidityETHSupportingFeeOnTransferTokens_call });
        this.removeLiquidityETHWithPermit = Object.assign(this.removeLiquidityETHWithPermit_send, { call: this.removeLiquidityETHWithPermit_call });
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, { call: this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call });
        this.removeLiquidityWithPermit = Object.assign(this.removeLiquidityWithPermit_send, { call: this.removeLiquidityWithPermit_call });
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
exports.OSWAP_Router = OSWAP_Router;
