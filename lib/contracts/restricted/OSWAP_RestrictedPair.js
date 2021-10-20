"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_RestrictedPair.json");
class OSWAP_RestrictedPair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async addLiquidity(params) {
        let result = await this.methods('addLiquidity', params.direction, eth_wallet_1.Utils.toString(params.index));
        return result;
    }
    async approvedTrader(params) {
        let result = await this.methods('approvedTrader', params.param1, eth_wallet_1.Utils.toString(params.param2), eth_wallet_1.Utils.toString(params.param3));
        return result;
    }
    async configStore() {
        let result = await this.methods('configStore');
        return result;
    }
    async counter(param1) {
        let result = await this.methods('counter', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async createOrder(params) {
        let result = await this.methods('createOrder', params.provider, params.direction, params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire));
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async feeBalance() {
        let result = await this.methods('feeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountIn(params) {
        let result = await this.methods('getAmountIn', params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3, params.param4);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.methods('getAmountOut', params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn), params.trader, params.param4);
        return new eth_wallet_1.BigNumber(result);
    }
    async getApprovedTrader(params) {
        let result = await this.methods('getApprovedTrader', params.direction, eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length));
        return {
            trader: result.trader,
            allocation: new eth_wallet_1.BigNumber(result.allocation)
        };
    }
    async getApprovedTraderLength(params) {
        let result = await this.methods('getApprovedTraderLength', params.direction, eth_wallet_1.Utils.toString(params.offerIndex));
        return new eth_wallet_1.BigNumber(result);
    }
    async getBalances() {
        let result = await this.methods('getBalances');
        return [
            new eth_wallet_1.BigNumber(result[0]),
            new eth_wallet_1.BigNumber(result[1]),
            new eth_wallet_1.BigNumber(result[2])
        ];
    }
    async getLastBalances() {
        let result = await this.methods('getLastBalances');
        return [
            new eth_wallet_1.BigNumber(result[0]),
            new eth_wallet_1.BigNumber(result[1])
        ];
    }
    async getOffers(params) {
        let result = await this.methods('getOffers', params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length));
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new eth_wallet_1.BigNumber(result.receiving),
            amountAndPrice: new eth_wallet_1.BigNumber(result.amountAndPrice),
            startDateAndExpire: new eth_wallet_1.BigNumber(result.startDateAndExpire)
        };
    }
    async getProviderOffer(params) {
        let result = await this.methods('getProviderOffer', params.provider, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length));
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new eth_wallet_1.BigNumber(result.receiving),
            amountAndPrice: new eth_wallet_1.BigNumber(result.amountAndPrice),
            startDateAndExpire: new eth_wallet_1.BigNumber(result.startDateAndExpire)
        };
    }
    async getProviderOfferIndexLength(params) {
        let result = await this.methods('getProviderOfferIndexLength', params.provider, params.direction);
        return new eth_wallet_1.BigNumber(result);
    }
    async getTraderOffer(params) {
        let result = await this.methods('getTraderOffer', params.trader, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length));
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new eth_wallet_1.BigNumber(result.receiving),
            amountAndPrice: new eth_wallet_1.BigNumber(result.amountAndPrice),
            startDateAndExpire: new eth_wallet_1.BigNumber(result.startDateAndExpire)
        };
    }
    async govToken() {
        let result = await this.methods('govToken');
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async initialize(params) {
        let result = await this.methods('initialize', params.token0, params.token1);
        return result;
    }
    async isApprovedTrader(params) {
        let result = await this.methods('isApprovedTrader', params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3);
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async lastGovBalance() {
        let result = await this.methods('lastGovBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async lastToken0Balance() {
        let result = await this.methods('lastToken0Balance');
        return new eth_wallet_1.BigNumber(result);
    }
    async lastToken1Balance() {
        let result = await this.methods('lastToken1Balance');
        return new eth_wallet_1.BigNumber(result);
    }
    async lockOffer(params) {
        let result = await this.methods('lockOffer', params.direction, eth_wallet_1.Utils.toString(params.index));
        return result;
    }
    async offers(params) {
        let result = await this.methods('offers', params.param1, eth_wallet_1.Utils.toString(params.param2));
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
        let result = await this.methods('protocolFeeBalance0');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance1() {
        let result = await this.methods('protocolFeeBalance1');
        return new eth_wallet_1.BigNumber(result);
    }
    async providerOfferIndex(params) {
        let result = await this.methods('providerOfferIndex', params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3));
        return new eth_wallet_1.BigNumber(result);
    }
    async redeemProtocolFee() {
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider) {
        let result = await this.methods('removeAllLiquidity', provider);
        return {
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1)
        };
    }
    async removeAllLiquidity1D(params) {
        let result = await this.methods('removeAllLiquidity1D', params.provider, params.direction);
        return {
            totalAmount: new eth_wallet_1.BigNumber(result.totalAmount),
            totalReceiving: new eth_wallet_1.BigNumber(result.totalReceiving)
        };
    }
    async removeLiquidity(params) {
        let result = await this.methods('removeLiquidity', params.provider, params.direction, eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut));
        return result;
    }
    async restrictedLiquidityProvider() {
        let result = await this.methods('restrictedLiquidityProvider');
        return result;
    }
    async scaleDirection() {
        let result = await this.methods('scaleDirection');
        return result;
    }
    async scaler() {
        let result = await this.methods('scaler');
        return new eth_wallet_1.BigNumber(result);
    }
    async setApprovedTrader(params) {
        let result = await this.methods('setApprovedTrader', params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation));
        return result;
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async setMultipleApprovedTraders(params) {
        let result = await this.methods('setMultipleApprovedTraders', params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation));
        return result;
    }
    async swap(params) {
        let result = await this.methods('swap', eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.trader, params.param5);
        return result;
    }
    async sync() {
        let result = await this.methods('sync');
        return result;
    }
    async token0() {
        let result = await this.methods('token0');
        return result;
    }
    async token1() {
        let result = await this.methods('token1');
        return result;
    }
    async traderAllocation(params) {
        let result = await this.methods('traderAllocation', params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3);
        return new eth_wallet_1.BigNumber(result);
    }
    async traderOffer(params) {
        let result = await this.methods('traderOffer', params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3));
        return new eth_wallet_1.BigNumber(result);
    }
    async whitelistFactory() {
        let result = await this.methods('whitelistFactory');
        return result;
    }
}
exports.OSWAP_RestrictedPair = OSWAP_RestrictedPair;
