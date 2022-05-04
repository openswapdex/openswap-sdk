"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeLiquidityProvider = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RangeLiquidityProvider_json_1 = __importDefault(require("./OSWAP_RangeLiquidityProvider.json"));
class OSWAP_RangeLiquidityProvider extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangeLiquidityProvider_json_1.default.abi, OSWAP_RangeLiquidityProvider_json_1.default.bytecode);
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
        let result = await this.send('addLiquidity', [params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async addLiquidityETH_send(params, _value) {
        let result = await this.send('addLiquidityETH', [params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountAIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async addLiquidityETH_call(params, _value) {
        let result = await this.call('addLiquidityETH', [params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.amountAIn), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async govToken() {
        let result = await this.call('govToken');
        return result;
    }
    async removeAllLiquidity_send(params) {
        let result = await this.send('removeAllLiquidity', [params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidity_call(params) {
        let result = await this.call('removeAllLiquidity', [params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountA: new eth_wallet_1.BigNumber(result.amountA),
            amountB: new eth_wallet_1.BigNumber(result.amountB)
        };
    }
    async removeAllLiquidityETH_send(params) {
        let result = await this.send('removeAllLiquidityETH', [params.tokenA, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidityETH_call(params) {
        let result = await this.call('removeAllLiquidityETH', [params.tokenA, params.to, eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountToken: new eth_wallet_1.BigNumber(result.amountToken),
            amountETH: new eth_wallet_1.BigNumber(result.amountETH)
        };
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    async removeLiquidityETH_send(params) {
        let result = await this.send('removeLiquidityETH', [params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params) {
        let result = await this.call('removeLiquidityETH', [params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    async updateProviderOffer_send(params) {
        let result = await this.send('updateProviderOffer', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish, eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async updateProviderOffer_call(params) {
        let result = await this.call('updateProviderOffer', [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish, eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, { call: this.addLiquidityETH_call });
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, { call: this.removeAllLiquidity_call });
        this.removeAllLiquidityETH = Object.assign(this.removeAllLiquidityETH_send, { call: this.removeAllLiquidityETH_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, { call: this.removeLiquidityETH_call });
        this.updateProviderOffer = Object.assign(this.updateProviderOffer_send, { call: this.updateProviderOffer_call });
    }
}
exports.OSWAP_RangeLiquidityProvider = OSWAP_RangeLiquidityProvider;
