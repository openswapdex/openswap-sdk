"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RangePair_json_1 = __importDefault(require("./OSWAP_RangePair.json"));
class OSWAP_RangePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangePair_json_1.default.abi, OSWAP_RangePair_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "AddLiquidity").map(e => this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            staked: new eth_wallet_1.BigNumber(result.staked),
            amount: new eth_wallet_1.BigNumber(result.amount),
            newStakeBalance: new eth_wallet_1.BigNumber(result.newStakeBalance),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            lowerLimit: new eth_wallet_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_wallet_1.BigNumber(result.upperLimit),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseNewProviderEvent(receipt) {
        return this.parseEvents(receipt, "NewProvider").map(e => this.decodeNewProviderEvent(e));
    }
    decodeNewProviderEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            index: new eth_wallet_1.BigNumber(result.index),
            _event: event
        };
    }
    parseRemoveAllLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveAllLiquidity").map(e => this.decodeRemoveAllLiquidityEvent(e));
    }
    decodeRemoveAllLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            unstake: new eth_wallet_1.BigNumber(result.unstake),
            amount0Out: new eth_wallet_1.BigNumber(result.amount0Out),
            amount1Out: new eth_wallet_1.BigNumber(result.amount1Out),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidity").map(e => this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            unstake: new eth_wallet_1.BigNumber(result.unstake),
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            reserveOut: new eth_wallet_1.BigNumber(result.reserveOut),
            newStakeBalance: new eth_wallet_1.BigNumber(result.newStakeBalance),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_wallet_1.BigNumber(result.newReserveBalance),
            lowerLimit: new eth_wallet_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_wallet_1.BigNumber(result.upperLimit),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseReplenishEvent(receipt) {
        return this.parseEvents(receipt, "Replenish").map(e => this.decodeReplenishEvent(e));
    }
    decodeReplenishEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountIn: new eth_wallet_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_wallet_1.BigNumber(result.newReserveBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            price: new eth_wallet_1.BigNumber(result.price),
            amountIn: new eth_wallet_1.BigNumber(result.amountIn),
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            tradeFee: new eth_wallet_1.BigNumber(result.tradeFee),
            protocolFee: new eth_wallet_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneProviderEvent(receipt) {
        return this.parseEvents(receipt, "SwappedOneProvider").map(e => this.decodeSwappedOneProviderEvent(e));
    }
    decodeSwappedOneProviderEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            amountIn: new eth_wallet_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newCounterReserveBalance: new eth_wallet_1.BigNumber(result.newCounterReserveBalance),
            _event: event
        };
    }
    parseUpdateProviderOfferEvent(receipt) {
        return this.parseEvents(receipt, "UpdateProviderOffer").map(e => this.decodeUpdateProviderOfferEvent(e));
    }
    decodeUpdateProviderOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            replenish: new eth_wallet_1.BigNumber(result.replenish),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_wallet_1.BigNumber(result.newReserveBalance),
            lowerLimit: new eth_wallet_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_wallet_1.BigNumber(result.upperLimit),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            _event: event
        };
    }
    async addLiquidity_send(params) {
        let result = await this.send('addLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async counter() {
        let result = await this.call('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.call('getAmountIn', [params.tokenOut, eth_wallet_1.Utils.toString(params.amountOut), params.data]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.call('getAmountOut', [params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn), params.data]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getBalances() {
        let result = await this.call('getBalances');
        return {
            param1: new eth_wallet_1.BigNumber(result[0]),
            param2: new eth_wallet_1.BigNumber(result[1]),
            param3: new eth_wallet_1.BigNumber(result[2])
        };
    }
    async getLastBalances() {
        let result = await this.call('getLastBalances');
        return {
            param1: new eth_wallet_1.BigNumber(result[0]),
            param2: new eth_wallet_1.BigNumber(result[1])
        };
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.direction, params.payload]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getOffers(params) {
        let result = await this.call('getOffers', [params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.end)]);
        return {
            provider: result.provider,
            amountAndReserve: result.amountAndReserve.map(e => new eth_wallet_1.BigNumber(e)),
            lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map(e => new eth_wallet_1.BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e)),
            privateReplenish: result.privateReplenish
        };
    }
    async getProviderOffer(params) {
        let result = await this.call('getProviderOffer', [params.provider, params.direction]);
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            staked: new eth_wallet_1.BigNumber(result.staked),
            amount: new eth_wallet_1.BigNumber(result.amount),
            reserve: new eth_wallet_1.BigNumber(result.reserve),
            lowerLimit: new eth_wallet_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_wallet_1.BigNumber(result.upperLimit),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async govToken() {
        let result = await this.call('govToken');
        return result;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async initialize_send(params) {
        let result = await this.send('initialize', [params.token0, params.token1]);
        return result;
    }
    async initialize_call(params) {
        let result = await this.call('initialize', [params.token0, params.token1]);
        return;
    }
    async isLive() {
        let result = await this.call('isLive');
        return result;
    }
    async lastGovBalance() {
        let result = await this.call('lastGovBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async lastToken0Balance() {
        let result = await this.call('lastToken0Balance');
        return new eth_wallet_1.BigNumber(result);
    }
    async lastToken1Balance() {
        let result = await this.call('lastToken1Balance');
        return new eth_wallet_1.BigNumber(result);
    }
    async offers(params) {
        let result = await this.call('offers', [params.param1, eth_wallet_1.Utils.toString(params.param2)]);
        return {
            provider: result.provider,
            amount: new eth_wallet_1.BigNumber(result.amount),
            reserve: new eth_wallet_1.BigNumber(result.reserve),
            lowerLimit: new eth_wallet_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_wallet_1.BigNumber(result.upperLimit),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async oracleFactory() {
        let result = await this.call('oracleFactory');
        return result;
    }
    async protocolFeeBalance0() {
        let result = await this.call('protocolFeeBalance0');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance1() {
        let result = await this.call('protocolFeeBalance1');
        return new eth_wallet_1.BigNumber(result);
    }
    async providerOfferIndex(param1) {
        let result = await this.call('providerOfferIndex', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async providerStaking(param1) {
        let result = await this.call('providerStaking', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async rangeLiquidityProvider() {
        let result = await this.call('rangeLiquidityProvider');
        return result;
    }
    async redeemProtocolFee_send() {
        let result = await this.send('redeemProtocolFee');
        return result;
    }
    async redeemProtocolFee_call() {
        let result = await this.call('redeemProtocolFee');
        return;
    }
    async removeAllLiquidity_send(provider) {
        let result = await this.send('removeAllLiquidity', [provider]);
        return result;
    }
    async removeAllLiquidity_call(provider) {
        let result = await this.call('removeAllLiquidity', [provider]);
        return {
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            staked: new eth_wallet_1.BigNumber(result.staked)
        };
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return;
    }
    async replenish_send(params) {
        let result = await this.send('replenish', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.amountIn)]);
        return result;
    }
    async replenish_call(params) {
        let result = await this.call('replenish', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.amountIn)]);
        return;
    }
    async scaleDirection() {
        let result = await this.call('scaleDirection');
        return result;
    }
    async scaler() {
        let result = await this.call('scaler');
        return new eth_wallet_1.BigNumber(result);
    }
    async setLive_send(isLive) {
        let result = await this.send('setLive', [isLive]);
        return result;
    }
    async setLive_call(isLive) {
        let result = await this.call('setLive', [isLive]);
        return;
    }
    async stakeBalance() {
        let result = await this.call('stakeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async swap_send(params) {
        let result = await this.send('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data]);
        return result;
    }
    async swap_call(params) {
        let result = await this.call('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data]);
        return;
    }
    async sync_send() {
        let result = await this.send('sync');
        return result;
    }
    async sync_call() {
        let result = await this.call('sync');
        return;
    }
    async token0() {
        let result = await this.call('token0');
        return result;
    }
    async token1() {
        let result = await this.call('token1');
        return result;
    }
    async updateProviderOffer_send(params) {
        let result = await this.send('updateProviderOffer', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish]);
        return result;
    }
    async updateProviderOffer_call(params) {
        let result = await this.call('updateProviderOffer', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish]);
        return;
    }
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.initialize = Object.assign(this.initialize_send, { call: this.initialize_call });
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, { call: this.redeemProtocolFee_call });
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, { call: this.removeAllLiquidity_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.replenish = Object.assign(this.replenish_send, { call: this.replenish_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.swap = Object.assign(this.swap_send, { call: this.swap_call });
        this.sync = Object.assign(this.sync_send, { call: this.sync_call });
        this.updateProviderOffer = Object.assign(this.updateProviderOffer_send, { call: this.updateProviderOffer_call });
    }
}
exports.OSWAP_RangePair = OSWAP_RangePair;
