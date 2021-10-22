"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedLiquidityProvider = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_RestrictedLiquidityProvider.json");
class OSWAP_RestrictedLiquidityProvider extends eth_wallet_1.Contract {
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
        let result = await this.methods('addLiquidity', params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async addLiquidityAndTrader(params) {
        let result = await this.methods('addLiquidityAndTrader', eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation));
        return result;
    }
    async addLiquidityETH(params, _value) {
        let result = await this.methods('addLiquidityETH', params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountAIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline), _value);
        return result;
    }
    async addLiquidityETHAndTrader(params, _value) {
        let result = await this.methods('addLiquidityETHAndTrader', eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation), _value);
        return result;
    }
    async configStore() {
        let result = await this.methods('configStore');
        return result;
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async govToken() {
        let result = await this.methods('govToken');
        return result;
    }
    async removeAllLiquidity(params) {
        let result = await this.methods('removeAllLiquidity', params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeAllLiquidityETH(params) {
        let result = await this.methods('removeAllLiquidityETH', params.tokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidity(params) {
        let result = await this.methods('removeLiquidity', params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params) {
        let result = await this.methods('removeLiquidityETH', params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
}
exports.OSWAP_RestrictedLiquidityProvider = OSWAP_RestrictedLiquidityProvider;
