"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OraclePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OraclePair_json_1 = __importDefault(require("./OSWAP_OraclePair.json"));
class OSWAP_OraclePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OraclePair_json_1.default.abi, OSWAP_OraclePair_json_1.default.bytecode);
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
    async addLiquidity_send(params) {
        let result = await this.send('addLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.expire), params.enable]);
        return result;
    }
    async addLiquidity_call(params) {
        let result = await this.call('addLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.expire), params.enable]);
        return new eth_wallet_1.BigNumber(result);
    }
    async counter() {
        let result = await this.call('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async delegator(param1) {
        let result = await this.call('delegator', [param1]);
        return result;
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async feeBalance() {
        let result = await this.call('feeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async findPosition(params) {
        let result = await this.call('findPosition', [params.direction, eth_wallet_1.Utils.toString(params.staked), eth_wallet_1.Utils.toString(params.afterIndex)]);
        return {
            afterIndex: new eth_wallet_1.BigNumber(result.afterIndex),
            nextIndex: new eth_wallet_1.BigNumber(result.nextIndex)
        };
    }
    async first(param1) {
        let result = await this.call('first', [param1]);
        return new eth_wallet_1.BigNumber(result);
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
    async getProviderOffer(params) {
        let result = await this.call('getProviderOffer', [params.provider, params.direction]);
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
        let result = await this.call('getQueue', [params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.end)]);
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e => new eth_wallet_1.BigNumber(e)),
            staked: result.staked.map(e => new eth_wallet_1.BigNumber(e)),
            expire: result.expire.map(e => new eth_wallet_1.BigNumber(e))
        };
    }
    async getQueueFromIndex(params) {
        let result = await this.call('getQueueFromIndex', [params.direction, eth_wallet_1.Utils.toString(params.from), eth_wallet_1.Utils.toString(params.count)]);
        return {
            index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e => new eth_wallet_1.BigNumber(e)),
            staked: result.staked.map(e => new eth_wallet_1.BigNumber(e)),
            expire: result.expire.map(e => new eth_wallet_1.BigNumber(e))
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
        let result = await this.call('oracleLiquidityProvider');
        return result;
    }
    async pauseOffer_send(params) {
        let result = await this.send('pauseOffer', [params.provider, params.direction]);
        return result;
    }
    async pauseOffer_call(params) {
        let result = await this.call('pauseOffer', [params.provider, params.direction]);
        return;
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
    async purgeExpire_send(params) {
        let result = await this.send('purgeExpire', [params.direction, eth_wallet_1.Utils.toString(params.startingIndex), eth_wallet_1.Utils.toString(params.limit)]);
        return result;
    }
    async purgeExpire_call(params) {
        let result = await this.call('purgeExpire', [params.direction, eth_wallet_1.Utils.toString(params.startingIndex), eth_wallet_1.Utils.toString(params.limit)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async queueSize(param1) {
        let result = await this.call('queueSize', [param1]);
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
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            staked: new eth_wallet_1.BigNumber(result.staked)
        };
    }
    async removeLiquidity_send(params) {
        let result = await this.send('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.expire), params.enable]);
        return result;
    }
    async removeLiquidity_call(params) {
        let result = await this.call('removeLiquidity', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.unstake), eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveOut), eth_wallet_1.Utils.toString(params.expire), params.enable]);
        return;
    }
    async replenish_send(params) {
        let result = await this.send('replenish', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.expire)]);
        return result;
    }
    async replenish_call(params) {
        let result = await this.call('replenish', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex), eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.expire)]);
        return;
    }
    async resumeOffer_send(params) {
        let result = await this.send('resumeOffer', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex)]);
        return result;
    }
    async resumeOffer_call(params) {
        let result = await this.call('resumeOffer', [params.provider, params.direction, eth_wallet_1.Utils.toString(params.afterIndex)]);
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
    async setDelegator_send(params) {
        let result = await this.send('setDelegator', [params.delegator, eth_wallet_1.Utils.toString(params.fee)]);
        return result;
    }
    async setDelegator_call(params) {
        let result = await this.call('setDelegator', [params.delegator, eth_wallet_1.Utils.toString(params.fee)]);
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
    async setPrivateReplenish_send(replenish) {
        let result = await this.send('setPrivateReplenish', [replenish]);
        return result;
    }
    async setPrivateReplenish_call(replenish) {
        let result = await this.call('setPrivateReplenish', [replenish]);
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
    assign() {
        this.addLiquidity = Object.assign(this.addLiquidity_send, { call: this.addLiquidity_call });
        this.initialize = Object.assign(this.initialize_send, { call: this.initialize_call });
        this.pauseOffer = Object.assign(this.pauseOffer_send, { call: this.pauseOffer_call });
        this.purgeExpire = Object.assign(this.purgeExpire_send, { call: this.purgeExpire_call });
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, { call: this.redeemProtocolFee_call });
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, { call: this.removeAllLiquidity_call });
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, { call: this.removeLiquidity_call });
        this.replenish = Object.assign(this.replenish_send, { call: this.replenish_call });
        this.resumeOffer = Object.assign(this.resumeOffer_send, { call: this.resumeOffer_call });
        this.setDelegator = Object.assign(this.setDelegator_send, { call: this.setDelegator_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.setPrivateReplenish = Object.assign(this.setPrivateReplenish_send, { call: this.setPrivateReplenish_call });
        this.swap = Object.assign(this.swap_send, { call: this.swap_call });
        this.sync = Object.assign(this.sync_send, { call: this.sync_call });
    }
}
exports.OSWAP_OraclePair = OSWAP_OraclePair;
