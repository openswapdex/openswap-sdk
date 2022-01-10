"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Router = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/amm/OSWAP_Router.json");
class OSWAP_Router extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.factory, params.WETH);
    }
    async WETH() {
        let result = await this.methods('WETH');
        return result;
    }
    async addLiquidity(params) {
        let result = await this.methods('addLiquidity', params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params, _value) {
        let result = await this.methods('addLiquidityETH', params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), _value);
        return result;
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.methods('getAmountIn', eth_wallet_1.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.methods('getAmountOut', eth_wallet_1.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountsIn(params) {
        let result = await this.methods('getAmountsIn', eth_wallet_1.Utils.toString(params.amountOut), params.path);
        return result;
    }
    async getAmountsOut(params) {
        let result = await this.methods('getAmountsOut', eth_wallet_1.Utils.toString(params.amountIn), params.path);
        return result;
    }
    async getReserves(params) {
        let result = await this.methods('getReserves', params.tokenA, params.tokenB);
        return {
            reserveA: new eth_wallet_1.BigNumber(result.reserveA),
            reserveB: new eth_wallet_1.BigNumber(result.reserveB)
        };
    }
    async quote(params) {
        let result = await this.methods('quote', eth_wallet_1.Utils.toString(params.amountA), eth_wallet_1.Utils.toString(params.reserveA), eth_wallet_1.Utils.toString(params.reserveB));
        return new eth_wallet_1.BigNumber(result);
    }
    async removeLiquidity(params) {
        let result = await this.methods('removeLiquidity', params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params) {
        let result = await this.methods('removeLiquidityETH', params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('removeLiquidityETHSupportingFeeOnTransferTokens', params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHWithPermit(params) {
        let result = await this.methods('removeLiquidityETHWithPermit', params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountETHMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityWithPermit(params) {
        let result = await this.methods('removeLiquidityWithPermit', params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s));
        return result;
    }
    async swapETHForExactTokens(params, _value) {
        let result = await this.methods('swapETHForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), _value);
        return result;
    }
    async swapExactETHForTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), _value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline), _value);
        return result;
    }
    async swapExactTokensForETH(params) {
        let result = await this.methods('swapExactTokensForETH', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokens(params) {
        let result = await this.methods('swapExactTokensForTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens', eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactETH(params) {
        let result = await this.methods('swapTokensForExactETH', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactTokens(params) {
        let result = await this.methods('swapTokensForExactTokens', eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
}
exports.OSWAP_Router = OSWAP_Router;
