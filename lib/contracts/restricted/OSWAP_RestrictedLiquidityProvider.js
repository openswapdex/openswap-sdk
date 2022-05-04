"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedLiquidityProvider = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RestrictedLiquidityProvider_json_1 = __importDefault(require("./OSWAP_RestrictedLiquidityProvider.json"));
class OSWAP_RestrictedLiquidityProvider extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedLiquidityProvider_json_1.default.abi, OSWAP_RestrictedLiquidityProvider_json_1.default.bytecode);
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
        let result = await this.send('addLiquidity', [params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.tokenA, params.tokenB, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            pair: result.pair,
            _offerIndex: new eth_wallet_1.BigNumber(result._offerIndex)
        };
    }
    async addLiquidityAndTrader_send(params) {
        let result = await this.send('addLiquidityAndTrader', [eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return result;
    }
    async addLiquidityAndTrader_call(params) {
        let result = await this.call('addLiquidityAndTrader', [eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return {
            pair: result.pair,
            offerIndex: new eth_wallet_1.BigNumber(result.offerIndex)
        };
    }
    async addLiquidityETH_send(params, _value) {
        let result = await this.send('addLiquidityETH', [params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountAIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return result;
    }
    async addLiquidityETH_call(params, _value) {
        let result = await this.call('addLiquidityETH', [params.tokenA, params.addingTokenA, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountAIn), params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.deadline)], { value: _value });
        return {
            pair: result.pair,
            _offerIndex: new eth_wallet_1.BigNumber(result._offerIndex)
        };
    }
    async addLiquidityETHAndTrader_send(params, _value) {
        let result = await this.send('addLiquidityETHAndTrader', [eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation)], { value: _value });
        return result;
    }
    async addLiquidityETHAndTrader_call(params, _value) {
        let result = await this.call('addLiquidityETHAndTrader', [eth_wallet_1.Utils.toString(params.param), params.trader, eth_wallet_1.Utils.toString(params.allocation)], { value: _value });
        return {
            pair: result.pair,
            offerIndex: new eth_wallet_1.BigNumber(result.offerIndex)
        };
    }
    async configStore() {
        let result = await this.call('configStore');
        return result;
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
        let result = await this.send('removeAllLiquidity', [params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidity_call(params) {
        let result = await this.call('removeAllLiquidity', [params.tokenA, params.tokenB, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountA: new eth_wallet_1.BigNumber(result.amountA),
            amountB: new eth_wallet_1.BigNumber(result.amountB)
        };
    }
    async removeAllLiquidityETH_send(params) {
        let result = await this.send('removeAllLiquidityETH', [params.tokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidityETH_call(params) {
        let result = await this.call('removeAllLiquidityETH', [params.tokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.deadline)]);
        return {
            amountToken: new eth_wallet_1.BigNumber(result.amountToken),
            amountETH: new eth_wallet_1.BigNumber(result.amountETH)
        };
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.tokenA, params.tokenB, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    async removeLiquidityETH_send(params) {
        let result = await this.send('removeLiquidityETH', [params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params) {
        let result = await this.call('removeLiquidityETH', [params.tokenA, params.removingTokenA, params.to, eth_wallet_1.Utils.toString(params.pairIndex), eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut), eth_wallet_1.Utils.toString(params.deadline)]);
        return;
    }
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.addLiquidityAndTrader = Object.assign(this.addLiquidityAndTrader_send, { call: this.addLiquidityAndTrader_call });
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, { call: this.addLiquidityETH_call });
        this.addLiquidityETHAndTrader = Object.assign(this.addLiquidityETHAndTrader_send, { call: this.addLiquidityETHAndTrader_call });
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, { call: this.removeAllLiquidity_call });
        this.removeAllLiquidityETH = Object.assign(this.removeAllLiquidityETH_send, { call: this.removeAllLiquidityETH_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, { call: this.removeLiquidityETH_call });
    }
}
exports.OSWAP_RestrictedLiquidityProvider = OSWAP_RestrictedLiquidityProvider;
