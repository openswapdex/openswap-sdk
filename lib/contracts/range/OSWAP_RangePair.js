"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/range/OSWAP_RangePair.json");
class OSWAP_RangePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "AddLiquidity");
    }
    parseNewProviderEvent(receipt) {
        return this.parseEvents(receipt, "NewProvider");
    }
    parseRemoveAllLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveAllLiquidity");
    }
    parseRemoveLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidity");
    }
    parseReplenishEvent(receipt) {
        return this.parseEvents(receipt, "Replenish");
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap");
    }
    parseSwappedOneProviderEvent(receipt) {
        return this.parseEvents(receipt, "SwappedOneProvider");
    }
    parseUpdateProviderOfferEvent(receipt) {
        return this.parseEvents(receipt, "UpdateProviderOffer");
    }
    async addLiquidity(params) {
        let result = await this.methods('addLiquidity', params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire));
        return result;
    }
    async counter() {
        let result = await this.methods('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.methods('getAmountIn', params.tokenOut, eth_wallet_1.Utils.toString(params.amountOut), params.data);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.methods('getAmountOut', params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn), params.data);
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
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.direction, params.payload);
        return new eth_wallet_1.BigNumber(result);
    }
    async getOffers(params) {
        let result = await this.methods('getOffers', params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.end));
        return {
            provider: result.provider,
            amountAndReserve: result.amountAndReserve,
            lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit,
            startDateAndExpire: result.startDateAndExpire,
            privateReplenish: result.privateReplenish
        };
    }
    async getProviderOffer(params) {
        let result = await this.methods('getProviderOffer', params.provider, params.direction);
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
    async offers(params) {
        let result = await this.methods('offers', params.param1, eth_wallet_1.Utils.toString(params.param2));
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
        let result = await this.methods('oracleFactory');
        return result;
    }
    async protocolFeeBalance0() {
        let result = await this.methods('protocolFeeBalance0');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance1() {
        let result = await this.methods('protocolFeeBalance1');
        return new eth_wallet_1.BigNumber(result);
    }
    async providerOfferIndex(param1) {
        let result = await this.methods('providerOfferIndex', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async providerStaking(param1) {
        let result = await this.methods('providerStaking', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async rangeLiquidityProvider() {
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async redeemProtocolFee() {
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider) {
        let result = await this.methods('removeAllLiquidity', provider);
        return result;
    }
    async removeLiquidity(params) {
        let result = await this.methods('removeLiquidity', params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire));
        return result;
    }
    async replenish(params) {
        let result = await this.methods('replenish', params.provider, params.direction, eth_wallet_1.Utils.toString(params.amountIn));
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
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async stakeBalance() {
        let result = await this.methods('stakeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async swap(params) {
        let result = await this.methods('swap', eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data);
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
    async updateProviderOffer(params) {
        let result = await this.methods('updateProviderOffer', params.provider, params.direction, eth_wallet_1.Utils.toString(params.replenishAmount), eth_wallet_1.Utils.toString(params.lowerLimit), eth_wallet_1.Utils.toString(params.upperLimit), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), params.privateReplenish);
        return result;
    }
}
exports.OSWAP_RangePair = OSWAP_RangePair;
