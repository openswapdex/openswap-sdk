"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RestrictedPair_json_1 = __importDefault(require("./OSWAP_RestrictedPair.json"));
class OSWAP_RestrictedPair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedPair_json_1.default.abi, OSWAP_RestrictedPair_json_1.default.bytecode);
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
            index: new eth_wallet_1.BigNumber(result.index),
            amount: new eth_wallet_1.BigNumber(result.amount),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            _event: event
        };
    }
    parseApprovedTraderEvent(receipt) {
        return this.parseEvents(receipt, "ApprovedTrader").map(e => this.decodeApprovedTraderEvent(e));
    }
    decodeApprovedTraderEvent(event) {
        let result = event.data;
        return {
            direction: result.direction,
            offerIndex: new eth_wallet_1.BigNumber(result.offerIndex),
            trader: result.trader,
            allocation: new eth_wallet_1.BigNumber(result.allocation),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            direction: result.direction,
            index: new eth_wallet_1.BigNumber(result.index),
            _event: event
        };
    }
    parseNewProviderOfferEvent(receipt) {
        return this.parseEvents(receipt, "NewProviderOffer").map(e => this.decodeNewProviderOfferEvent(e));
    }
    decodeNewProviderOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_wallet_1.BigNumber(result.index),
            allowAll: result.allowAll,
            restrictedPrice: new eth_wallet_1.BigNumber(result.restrictedPrice),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire),
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
            index: new eth_wallet_1.BigNumber(result.index),
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            receivingOut: new eth_wallet_1.BigNumber(result.receivingOut),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newReceivingBalance: new eth_wallet_1.BigNumber(result.newReceivingBalance),
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
            amountIn: new eth_wallet_1.BigNumber(result.amountIn),
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            tradeFee: new eth_wallet_1.BigNumber(result.tradeFee),
            protocolFee: new eth_wallet_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneOfferEvent(receipt) {
        return this.parseEvents(receipt, "SwappedOneOffer").map(e => this.decodeSwappedOneOfferEvent(e));
    }
    decodeSwappedOneOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_wallet_1.BigNumber(result.index),
            price: new eth_wallet_1.BigNumber(result.price),
            amountOut: new eth_wallet_1.BigNumber(result.amountOut),
            amountIn: new eth_wallet_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_wallet_1.BigNumber(result.newAmountBalance),
            newReceivingBalance: new eth_wallet_1.BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    async addLiquidity_send(params) {
        let result = await this.send('addLiquidity', [params.direction, eth_wallet_1.Utils.toString(params.index)]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.direction, eth_wallet_1.Utils.toString(params.index)]);
        return;
    }
    async approvedTrader(params) {
        let result = await this.call('approvedTrader', [params.param1, eth_wallet_1.Utils.toString(params.param2), eth_wallet_1.Utils.toString(params.param3)]);
        return result;
    }
    async configStore() {
        let result = await this.call('configStore');
        return result;
    }
    async counter(param1) {
        let result = await this.call('counter', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async createOrder_send(params) {
        let result = await this.send('createOrder', [params.provider, params.direction, params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return result;
    }
    async createOrder_call(params) {
        let result = await this.call('createOrder', [params.provider, params.direction, params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async feeBalance() {
        let result = await this.call('feeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountIn(params) {
        let result = await this.call('getAmountIn', [params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3, params.param4]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.call('getAmountOut', [params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn), params.trader, params.param4]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getApprovedTrader(params) {
        let result = await this.call('getApprovedTrader', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)]);
        return {
            trader: result.trader,
            allocation: result.allocation.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getApprovedTraderLength(params) {
        let result = await this.call('getApprovedTraderLength', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex)]);
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
    async getOffers(params) {
        let result = await this.call('getOffers', [params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)]);
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getProviderOffer(params) {
        let result = await this.call('getProviderOffer', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)]);
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getProviderOfferIndexLength(params) {
        let result = await this.call('getProviderOfferIndexLength', [params.provider, params.direction]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getTraderOffer(params) {
        let result = await this.call('getTraderOffer', [params.trader, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)]);
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
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
    async isApprovedTrader(params) {
        let result = await this.call('isApprovedTrader', [params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3]);
        return result;
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
    async lockOffer_send(params) {
        let result = await this.send('lockOffer', [params.direction, eth_wallet_1.Utils.toString(params.index)]);
        return result;
    }
    async lockOffer_call(params) {
        let result = await this.call('lockOffer', [params.direction, eth_wallet_1.Utils.toString(params.index)]);
        return;
    }
    async offers(params) {
        let result = await this.call('offers', [params.param1, eth_wallet_1.Utils.toString(params.param2)]);
        return {
            provider: result.provider,
            locked: result.locked,
            allowAll: result.allowAll,
            amount: new eth_wallet_1.BigNumber(result.amount),
            receiving: new eth_wallet_1.BigNumber(result.receiving),
            restrictedPrice: new eth_wallet_1.BigNumber(result.restrictedPrice),
            startDate: new eth_wallet_1.BigNumber(result.startDate),
            expire: new eth_wallet_1.BigNumber(result.expire)
        };
    }
    async protocolFeeBalance0() {
        let result = await this.call('protocolFeeBalance0');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance1() {
        let result = await this.call('protocolFeeBalance1');
        return new eth_wallet_1.BigNumber(result);
    }
    async providerOfferIndex(params) {
        let result = await this.call('providerOfferIndex', [params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3)]);
        return new eth_wallet_1.BigNumber(result);
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
            amount1: new eth_wallet_1.BigNumber(result.amount1)
        };
    }
    async removeAllLiquidity1D_send(params) {
        let result = await this.send('removeAllLiquidity1D', [params.provider, params.direction]);
        return result;
    }
    async removeAllLiquidity1D_call(params) {
        let result = await this.call('removeAllLiquidity1D', [params.provider, params.direction]);
        return {
            totalAmount: new eth_wallet_1.BigNumber(result.totalAmount),
            totalReceiving: new eth_wallet_1.BigNumber(result.totalReceiving)
        };
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut)]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut)]);
        return;
    }
    async restrictedLiquidityProvider() {
        let result = await this.call('restrictedLiquidityProvider');
        return result;
    }
    async scaleDirection() {
        let result = await this.call('scaleDirection');
        return result;
    }
    async scaler() {
        let result = await this.call('scaler');
        return new eth_wallet_1.BigNumber(result);
    }
    async setApprovedTrader_send(params) {
        let result = await this.send('setApprovedTrader', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return result;
    }
    async setApprovedTrader_call(params) {
        let result = await this.call('setApprovedTrader', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return;
    }
    async setLive_send(isLive) {
        let result = await this.send('setLive', [isLive]);
        return result;
    }
    async setLive_call(isLive) {
        let result = await this.call('setLive', [isLive]);
        return;
    }
    async setMultipleApprovedTraders_send(params) {
        let result = await this.send('setMultipleApprovedTraders', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return result;
    }
    async setMultipleApprovedTraders_call(params) {
        let result = await this.call('setMultipleApprovedTraders', [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)]);
        return;
    }
    async swap_send(params) {
        let result = await this.send('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.trader, params.param5]);
        return result;
    }
    async swap_call(params) {
        let result = await this.call('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.trader, params.param5]);
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
    async traderAllocation(params) {
        let result = await this.call('traderAllocation', [params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3]);
        return new eth_wallet_1.BigNumber(result);
    }
    async traderOffer(params) {
        let result = await this.call('traderOffer', [params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async whitelistFactory() {
        let result = await this.call('whitelistFactory');
        return result;
    }
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.createOrder = Object.assign(this.createOrder_send, { call: this.createOrder_call });
        this.initialize = Object.assign(this.initialize_send, { call: this.initialize_call });
        this.lockOffer = Object.assign(this.lockOffer_send, { call: this.lockOffer_call });
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, { call: this.redeemProtocolFee_call });
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, { call: this.removeAllLiquidity_call });
        this.removeAllLiquidity1D = Object.assign(this.removeAllLiquidity1D_send, { call: this.removeAllLiquidity1D_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.setApprovedTrader = Object.assign(this.setApprovedTrader_send, { call: this.setApprovedTrader_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setMultipleApprovedTraders = Object.assign(this.setMultipleApprovedTraders_send, { call: this.setMultipleApprovedTraders_call });
        this.swap = Object.assign(this.swap_send, { call: this.swap_call });
        this.sync = Object.assign(this.sync_send, { call: this.sync_call });
    }
}
exports.OSWAP_RestrictedPair = OSWAP_RestrictedPair;
