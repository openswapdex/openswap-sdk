"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeLiquidityProvider = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/range/OSWAP_RangeLiquidityProvider.json");
class OSWAP_RangeLiquidityProvider extends eth_wallet_1.Contract {
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
        let result = await this.methods('addLiquidity', params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params, _value) {
        let result = await this.methods('addLiquidityETH', params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountAIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline), _value);
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
        let result = await this.methods('removeAllLiquidity', params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeAllLiquidityETH(params) {
        let result = await this.methods('removeAllLiquidityETH', params.tokenA, params.to, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidity(params) {
        let result = await this.methods('removeLiquidity', params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params) {
        let result = await this.methods('removeLiquidityETH', params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
    async updateProviderOffer(params) {
        let result = await this.methods('updateProviderOffer', params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish, eth_wallet_1.Utils.toString(params.deadline));
        return result;
    }
}
exports.OSWAP_RangeLiquidityProvider = OSWAP_RangeLiquidityProvider;
