"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OraclePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/oracle/OSWAP_OraclePair.json");
class OSWAP_OraclePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
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
            expire: new eth_wallet_1.BigNumber(result.expire),
            enable: result.enable,
            _event: event
        };
    }
    parseDelegatorPauseOfferEvent(receipt) {
        return this.parseEvents(receipt, "DelegatorPauseOffer").map(e => this.decodeDelegatorPauseOfferEvent(e));
    }
    decodeDelegatorPauseOfferEvent(event) {
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
            _event: event
        };
    }
    parseDelegatorResumeOfferEvent(receipt) {
        return this.parseEvents(receipt, "DelegatorResumeOffer").map(e => this.decodeDelegatorResumeOfferEvent(e));
    }
    decodeDelegatorResumeOfferEvent(event) {
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
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
            expire: new eth_wallet_1.BigNumber(result.expire),
            enable: result.enable,
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
            expire: new eth_wallet_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseSetDelegatorEvent(receipt) {
        return this.parseEvents(receipt, "SetDelegator").map(e => this.decodeSetDelegatorEvent(e));
    }
    decodeSetDelegatorEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
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
    async addLiquidity(params) {
        let result = await this.methods('addLiquidity', params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.expire), params.enable);
        return result;
    }
    async counter() {
        let result = await this.methods('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async delegator(param1) {
        let result = await this.methods('delegator', param1);
        return result;
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async feeBalance() {
        let result = await this.methods('feeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async findPosition(params) {
        let result = await this.methods('findPosition', params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.afterIndex));
        return {
            afterIndex: new eth_wallet_1.BigNumber(result.afterIndex),
            nextIndex: new eth_wallet_1.BigNumber(result.nextIndex)
        };
    }
    async first(param1) {
        let result = await this.methods('first', param1);
        return new eth_wallet_1.BigNumber(result);
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
        return {
            param1: new eth_wallet_1.BigNumber(result[0]),
            param2: new eth_wallet_1.BigNumber(result[1]),
            param3: new eth_wallet_1.BigNumber(result[2])
        };
    }
    async getLastBalances() {
        let result = await this.methods('getLastBalances');
        return {
            param1: new eth_wallet_1.BigNumber(result[0]),
            param2: new eth_wallet_1.BigNumber(result[1])
        };
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.direction, params.payload);
        return new eth_wallet_1.BigNumber(result);
    }
    async getProviderOffer(params) {
        let result = await this.methods('getProviderOffer', params.provider, params.direction);
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            staked: new eth_wallet_1.BigNumber(result.staked),
            amount: new eth_wallet_1.BigNumber(result.amount),
            reserve: new eth_wallet_1.BigNumber(result.reserve),
            expire: new eth_wallet_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async getQueue(params) {
        let result = await this.methods('getQueue', params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.end));
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e => new eth_wallet_1.BigNumber(e)),
            staked: result.staked.map(e => new eth_wallet_1.BigNumber(e)),
            expire: result.expire.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getQueueFromIndex(params) {
        let result = await this.methods('getQueueFromIndex', params.direction, eth_wallet_1.Utils.toString(params.from), eth_wallet_1.Utils.toString(params.count));
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e => new eth_wallet_1.BigNumber(e)),
            staked: result.staked.map(e => new eth_wallet_1.BigNumber(e)),
            expire: result.expire.map(e => new eth_wallet_1.BigNumber(e))
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
            staked: new eth_wallet_1.BigNumber(result.staked),
            amount: new eth_wallet_1.BigNumber(result.amount),
            reserve: new eth_wallet_1.BigNumber(result.reserve),
            expire: new eth_wallet_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            isActive: result.isActive,
            enabled: result.enabled,
            prev: new eth_wallet_1.BigNumber(result.prev),
            next: new eth_wallet_1.BigNumber(result.next)
        };
    }
    async oracleLiquidityProvider() {
        let result = await this.methods('oracleLiquidityProvider');
        return result;
    }
    async pauseOffer(params) {
        let result = await this.methods('pauseOffer', params.provider, params.direction);
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
    async purgeExpire(params) {
        let result = await this.methods('purgeExpire', params.direction, eth_wallet_1.Utils.toString(params.startingIndex), eth_wallet_1.Utils.toString(params.limit));
        return result;
    }
    async queueSize(param1) {
        let result = await this.methods('queueSize', param1);
        return new eth_wallet_1.BigNumber(result);
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
        let result = await this.methods('removeLiquidity', params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.expire), params.enable);
        return result;
    }
    async replenish(params) {
        let result = await this.methods('replenish', params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.expire));
        return result;
    }
    async resumeOffer(params) {
        let result = await this.methods('resumeOffer', params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex));
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
    async setDelegator(params) {
        let result = await this.methods('setDelegator', params.delegator, eth_wallet_1.Utils.toString(params.fee));
        return result;
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async setPrivateReplenish(replenish) {
        let result = await this.methods('setPrivateReplenish', replenish);
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
}
exports.OSWAP_OraclePair = OSWAP_OraclePair;
