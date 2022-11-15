"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPair2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_RestrictedPair2_json_1 = __importDefault(require("./OSWAP_RestrictedPair2.json"));
class OSWAP_RestrictedPair2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedPair2_json_1.default.abi, OSWAP_RestrictedPair2_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
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
    assign() {
        let approvedTraderParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2), eth_wallet_1.Utils.toString(params.param3)];
        let approvedTrader_call = async (params) => {
            let result = await this.call('approvedTrader', approvedTraderParams(params));
            return result;
        };
        this.approvedTrader = approvedTrader_call;
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let counter_call = async (param1) => {
            let result = await this.call('counter', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.counter = counter_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let feeBalance_call = async () => {
            let result = await this.call('feeBalance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.feeBalance = feeBalance_call;
        let getAmountInParams = (params) => [params.tokenOut, eth_wallet_1.Utils.toString(params.amountOut), params.trader, eth_wallet_1.Utils.stringToBytes(params.param4)];
        let getAmountIn_call = async (params) => {
            let result = await this.call('getAmountIn', getAmountInParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn), params.trader, eth_wallet_1.Utils.stringToBytes(params.param4)];
        let getAmountOut_call = async (params) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getApprovedTraderParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)];
        let getApprovedTrader_call = async (params) => {
            let result = await this.call('getApprovedTrader', getApprovedTraderParams(params));
            return {
                trader: result.trader,
                allocation: result.allocation.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.getApprovedTrader = getApprovedTrader_call;
        let getApprovedTraderLengthParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.offerIndex)];
        let getApprovedTraderLength_call = async (params) => {
            let result = await this.call('getApprovedTraderLength', getApprovedTraderLengthParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getApprovedTraderLength = getApprovedTraderLength_call;
        let getBalances_call = async () => {
            let result = await this.call('getBalances');
            return {
                param1: new eth_wallet_1.BigNumber(result[0]),
                param2: new eth_wallet_1.BigNumber(result[1]),
                param3: new eth_wallet_1.BigNumber(result[2])
            };
        };
        this.getBalances = getBalances_call;
        let getLastBalances_call = async () => {
            let result = await this.call('getLastBalances');
            return {
                param1: new eth_wallet_1.BigNumber(result[0]),
                param2: new eth_wallet_1.BigNumber(result[1])
            };
        };
        this.getLastBalances = getLastBalances_call;
        let getOffersParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)];
        let getOffers_call = async (params) => {
            let result = await this.call('getOffers', getOffersParams(params));
            return {
                index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.getOffers = getOffers_call;
        let getProviderOfferParams = (params) => [params.provider, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)];
        let getProviderOffer_call = async (params) => {
            let result = await this.call('getProviderOffer', getProviderOfferParams(params));
            return {
                index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.getProviderOffer = getProviderOffer_call;
        let getProviderOfferIndexLengthParams = (params) => [params.provider, params.direction];
        let getProviderOfferIndexLength_call = async (params) => {
            let result = await this.call('getProviderOfferIndexLength', getProviderOfferIndexLengthParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getProviderOfferIndexLength = getProviderOfferIndexLength_call;
        let getTraderOfferParams = (params) => [params.trader, params.direction, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)];
        let getTraderOffer_call = async (params) => {
            let result = await this.call('getTraderOffer', getTraderOfferParams(params));
            return {
                index: result.index.map(e => new eth_wallet_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_wallet_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_wallet_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.getTraderOffer = getTraderOffer_call;
        let govToken_call = async () => {
            let result = await this.call('govToken');
            return result;
        };
        this.govToken = govToken_call;
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let isApprovedTraderParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3];
        let isApprovedTrader_call = async (params) => {
            let result = await this.call('isApprovedTrader', isApprovedTraderParams(params));
            return result;
        };
        this.isApprovedTrader = isApprovedTrader_call;
        let isLive_call = async () => {
            let result = await this.call('isLive');
            return result;
        };
        this.isLive = isLive_call;
        let lastGovBalance_call = async () => {
            let result = await this.call('lastGovBalance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.lastGovBalance = lastGovBalance_call;
        let lastToken0Balance_call = async () => {
            let result = await this.call('lastToken0Balance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.lastToken0Balance = lastToken0Balance_call;
        let lastToken1Balance_call = async () => {
            let result = await this.call('lastToken1Balance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.lastToken1Balance = lastToken1Balance_call;
        let offersParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let offers_call = async (params) => {
            let result = await this.call('offers', offersParams(params));
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
        };
        this.offers = offers_call;
        let prepaidFeeBalanceParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let prepaidFeeBalance_call = async (params) => {
            let result = await this.call('prepaidFeeBalance', prepaidFeeBalanceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.prepaidFeeBalance = prepaidFeeBalance_call;
        let protocolFeeBalance0_call = async () => {
            let result = await this.call('protocolFeeBalance0');
            return new eth_wallet_1.BigNumber(result);
        };
        this.protocolFeeBalance0 = protocolFeeBalance0_call;
        let protocolFeeBalance1_call = async () => {
            let result = await this.call('protocolFeeBalance1');
            return new eth_wallet_1.BigNumber(result);
        };
        this.protocolFeeBalance1 = protocolFeeBalance1_call;
        let providerOfferIndexParams = (params) => [params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3)];
        let providerOfferIndex_call = async (params) => {
            let result = await this.call('providerOfferIndex', providerOfferIndexParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.providerOfferIndex = providerOfferIndex_call;
        let restrictedLiquidityProvider_call = async () => {
            let result = await this.call('restrictedLiquidityProvider');
            return result;
        };
        this.restrictedLiquidityProvider = restrictedLiquidityProvider_call;
        let scaleDirection_call = async () => {
            let result = await this.call('scaleDirection');
            return result;
        };
        this.scaleDirection = scaleDirection_call;
        let scaler_call = async () => {
            let result = await this.call('scaler');
            return new eth_wallet_1.BigNumber(result);
        };
        this.scaler = scaler_call;
        let token0_call = async () => {
            let result = await this.call('token0');
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async () => {
            let result = await this.call('token1');
            return result;
        };
        this.token1 = token1_call;
        let traderAllocationParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2), params.param3];
        let traderAllocation_call = async (params) => {
            let result = await this.call('traderAllocation', traderAllocationParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.traderAllocation = traderAllocation_call;
        let traderOfferParams = (params) => [params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3)];
        let traderOffer_call = async (params) => {
            let result = await this.call('traderOffer', traderOfferParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.traderOffer = traderOffer_call;
        let whitelistFactory_call = async () => {
            let result = await this.call('whitelistFactory');
            return result;
        };
        this.whitelistFactory = whitelistFactory_call;
        let addLiquidityParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.index)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addPrepaidFeeParams = (params) => [params.provider, params.direction, eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.feeIn)];
        let addPrepaidFee_send = async (params) => {
            let result = await this.send('addPrepaidFee', addPrepaidFeeParams(params));
            return result;
        };
        let addPrepaidFee_call = async (params) => {
            let result = await this.call('addPrepaidFee', addPrepaidFeeParams(params));
            return;
        };
        this.addPrepaidFee = Object.assign(addPrepaidFee_send, {
            call: addPrepaidFee_call
        });
        let createOrderParams = (params) => [params.provider, params.direction, params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire)];
        let createOrder_send = async (params) => {
            let result = await this.send('createOrder', createOrderParams(params));
            return result;
        };
        let createOrder_call = async (params) => {
            let result = await this.call('createOrder', createOrderParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.createOrder = Object.assign(createOrder_send, {
            call: createOrder_call
        });
        let createOrderWithPrepaidFeeParams = (params) => [params.provider, params.direction, params.allowAll, eth_wallet_1.Utils.toString(params.restrictedPrice), eth_wallet_1.Utils.toString(params.startDate), eth_wallet_1.Utils.toString(params.expire), eth_wallet_1.Utils.toString(params.feeIn)];
        let createOrderWithPrepaidFee_send = async (params) => {
            let result = await this.send('createOrderWithPrepaidFee', createOrderWithPrepaidFeeParams(params));
            return result;
        };
        let createOrderWithPrepaidFee_call = async (params) => {
            let result = await this.call('createOrderWithPrepaidFee', createOrderWithPrepaidFeeParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.createOrderWithPrepaidFee = Object.assign(createOrderWithPrepaidFee_send, {
            call: createOrderWithPrepaidFee_call
        });
        let initializeParams = (params) => [params.token0, params.token1];
        let initialize_send = async (params) => {
            let result = await this.send('initialize', initializeParams(params));
            return result;
        };
        let initialize_call = async (params) => {
            let result = await this.call('initialize', initializeParams(params));
            return;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call
        });
        let lockOfferParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.index)];
        let lockOffer_send = async (params) => {
            let result = await this.send('lockOffer', lockOfferParams(params));
            return result;
        };
        let lockOffer_call = async (params) => {
            let result = await this.call('lockOffer', lockOfferParams(params));
            return;
        };
        this.lockOffer = Object.assign(lockOffer_send, {
            call: lockOffer_call
        });
        let redeemProtocolFee_send = async () => {
            let result = await this.send('redeemProtocolFee');
            return result;
        };
        let redeemProtocolFee_call = async () => {
            let result = await this.call('redeemProtocolFee');
            return;
        };
        this.redeemProtocolFee = Object.assign(redeemProtocolFee_send, {
            call: redeemProtocolFee_call
        });
        let removeAllLiquidity_send = async (provider) => {
            let result = await this.send('removeAllLiquidity', [provider]);
            return result;
        };
        let removeAllLiquidity_call = async (provider) => {
            let result = await this.call('removeAllLiquidity', [provider]);
            return {
                amount0: new eth_wallet_1.BigNumber(result.amount0),
                amount1: new eth_wallet_1.BigNumber(result.amount1)
            };
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call
        });
        let removeAllLiquidity1DParams = (params) => [params.provider, params.direction];
        let removeAllLiquidity1D_send = async (params) => {
            let result = await this.send('removeAllLiquidity1D', removeAllLiquidity1DParams(params));
            return result;
        };
        let removeAllLiquidity1D_call = async (params) => {
            let result = await this.call('removeAllLiquidity1D', removeAllLiquidity1DParams(params));
            return {
                totalAmount: new eth_wallet_1.BigNumber(result.totalAmount),
                totalReceiving: new eth_wallet_1.BigNumber(result.totalReceiving)
            };
        };
        this.removeAllLiquidity1D = Object.assign(removeAllLiquidity1D_send, {
            call: removeAllLiquidity1D_call
        });
        let removeLiquidityParams = (params) => [params.provider, params.direction, eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.receivingOut)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let setApprovedTraderParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)];
        let setApprovedTrader_send = async (params) => {
            let result = await this.send('setApprovedTrader', setApprovedTraderParams(params));
            return result;
        };
        let setApprovedTrader_call = async (params) => {
            let result = await this.call('setApprovedTrader', setApprovedTraderParams(params));
            return;
        };
        this.setApprovedTrader = Object.assign(setApprovedTrader_send, {
            call: setApprovedTrader_call
        });
        let setApprovedTraderBySignatureParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation), eth_wallet_1.Utils.stringToBytes(params.signature)];
        let setApprovedTraderBySignature_send = async (params) => {
            let result = await this.send('setApprovedTraderBySignature', setApprovedTraderBySignatureParams(params));
            return result;
        };
        let setApprovedTraderBySignature_call = async (params) => {
            let result = await this.call('setApprovedTraderBySignature', setApprovedTraderBySignatureParams(params));
            return;
        };
        this.setApprovedTraderBySignature = Object.assign(setApprovedTraderBySignature_send, {
            call: setApprovedTraderBySignature_call
        });
        let setLive_send = async (isLive) => {
            let result = await this.send('setLive', [isLive]);
            return result;
        };
        let setLive_call = async (isLive) => {
            let result = await this.call('setLive', [isLive]);
            return;
        };
        this.setLive = Object.assign(setLive_send, {
            call: setLive_call
        });
        let setMultipleApprovedTradersParams = (params) => [params.direction, eth_wallet_1.Utils.toString(params.offerIndex), params.trader, eth_wallet_1.Utils.toString(params.allocation)];
        let setMultipleApprovedTraders_send = async (params) => {
            let result = await this.send('setMultipleApprovedTraders', setMultipleApprovedTradersParams(params));
            return result;
        };
        let setMultipleApprovedTraders_call = async (params) => {
            let result = await this.call('setMultipleApprovedTraders', setMultipleApprovedTradersParams(params));
            return;
        };
        this.setMultipleApprovedTraders = Object.assign(setMultipleApprovedTraders_send, {
            call: setMultipleApprovedTraders_call
        });
        let swapParams = (params) => [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.trader, eth_wallet_1.Utils.stringToBytes(params.param5)];
        let swap_send = async (params) => {
            let result = await this.send('swap', swapParams(params));
            return result;
        };
        let swap_call = async (params) => {
            let result = await this.call('swap', swapParams(params));
            return;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let sync_send = async () => {
            let result = await this.send('sync');
            return result;
        };
        let sync_call = async () => {
            let result = await this.call('sync');
            return;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call
        });
    }
}
exports.OSWAP_RestrictedPair2 = OSWAP_RestrictedPair2;
