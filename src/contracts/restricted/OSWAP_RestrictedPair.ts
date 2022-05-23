import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RestrictedPair.json";

export class OSWAP_RestrictedPair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            amount: new BigNumber(result.amount),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            _event: event
        };
    }
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.ApprovedTraderEvent[]{
        return this.parseEvents(receipt, "ApprovedTrader").map(e=>this.decodeApprovedTraderEvent(e));
    }
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair.ApprovedTraderEvent{
        let result = event.data;
        return {
            direction: result.direction,
            offerIndex: new BigNumber(result.offerIndex),
            trader: result.trader,
            allocation: new BigNumber(result.allocation),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): OSWAP_RestrictedPair.LockEvent{
        let result = event.data;
        return {
            direction: result.direction,
            index: new BigNumber(result.index),
            _event: event
        };
    }
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.NewProviderOfferEvent[]{
        return this.parseEvents(receipt, "NewProviderOffer").map(e=>this.decodeNewProviderOfferEvent(e));
    }
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair.NewProviderOfferEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            allowAll: result.allowAll,
            restrictedPrice: new BigNumber(result.restrictedPrice),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair.RemoveLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            amountOut: new BigNumber(result.amountOut),
            receivingOut: new BigNumber(result.receivingOut),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReceivingBalance: new BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair.SwapEvent{
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            amountIn: new BigNumber(result.amountIn),
            amountOut: new BigNumber(result.amountOut),
            tradeFee: new BigNumber(result.tradeFee),
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwappedOneOfferEvent[]{
        return this.parseEvents(receipt, "SwappedOneOffer").map(e=>this.decodeSwappedOneOfferEvent(e));
    }
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair.SwappedOneOfferEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            price: new BigNumber(result.price),
            amountOut: new BigNumber(result.amountOut),
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReceivingBalance: new BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    async addLiquidity_send(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.direction,Utils.toString(params.index)]);
        return result;
    }
    async addLiquidity_call(params:{direction:boolean,index:number|BigNumber}): Promise<void>{
        let result = await this.call('addLiquidity',[params.direction,Utils.toString(params.index)]);
        return;
    }
    addLiquidity: {
        (params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{direction:boolean,index:number|BigNumber}) => Promise<void>;
    }
    async approvedTrader(params:{param1:boolean,param2:number|BigNumber,param3:number|BigNumber}): Promise<string>{
        let result = await this.call('approvedTrader',[params.param1,Utils.toString(params.param2),Utils.toString(params.param3)]);
        return result;
    }
    async configStore(): Promise<string>{
        let result = await this.call('configStore');
        return result;
    }
    async counter(param1:boolean): Promise<BigNumber>{
        let result = await this.call('counter',[param1]);
        return new BigNumber(result);
    }
    async createOrder_send(params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('createOrder',[params.provider,params.direction,params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return result;
    }
    async createOrder_call(params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('createOrder',[params.provider,params.direction,params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return new BigNumber(result);
    }
    createOrder: {
        (params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}) => Promise<BigNumber>;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async feeBalance(): Promise<BigNumber>{
        let result = await this.call('feeBalance');
        return new BigNumber(result);
    }
    async getAmountIn(params:{param1:string,param2:number|BigNumber,param3:string,param4:string}): Promise<BigNumber>{
        let result = await this.call('getAmountIn',[params.param1,Utils.toString(params.param2),params.param3,Utils.stringToBytes(params.param4)]);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,trader:string,param4:string}): Promise<BigNumber>{
        let result = await this.call('getAmountOut',[params.tokenIn,Utils.toString(params.amountIn),params.trader,Utils.stringToBytes(params.param4)]);
        return new BigNumber(result);
    }
    async getApprovedTrader(params:{direction:boolean,offerIndex:number|BigNumber,start:number|BigNumber,length:number|BigNumber}): Promise<{trader:string[],allocation:BigNumber[]}>{
        let result = await this.call('getApprovedTrader',[params.direction,Utils.toString(params.offerIndex),Utils.toString(params.start),Utils.toString(params.length)]);
        return {
            trader: result.trader,
            allocation: result.allocation.map(e=>new BigNumber(e))
        };
    }
    async getApprovedTraderLength(params:{direction:boolean,offerIndex:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('getApprovedTraderLength',[params.direction,Utils.toString(params.offerIndex)]);
        return new BigNumber(result);
    }
    async getBalances(): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>{
        let result = await this.call('getBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1]),
            param3: new BigNumber(result[2])
        };
    }
    async getLastBalances(): Promise<{param1:BigNumber,param2:BigNumber}>{
        let result = await this.call('getLastBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1])
        };
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>{
        let result = await this.call('getOffers',[params.direction,Utils.toString(params.start),Utils.toString(params.length)]);
        return {
            index: result.index.map(e=>new BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e=>new BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
        };
    }
    async getProviderOffer(params:{provider:string,direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>{
        let result = await this.call('getProviderOffer',[params.provider,params.direction,Utils.toString(params.start),Utils.toString(params.length)]);
        return {
            index: result.index.map(e=>new BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e=>new BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
        };
    }
    async getProviderOfferIndexLength(params:{provider:string,direction:boolean}): Promise<BigNumber>{
        let result = await this.call('getProviderOfferIndexLength',[params.provider,params.direction]);
        return new BigNumber(result);
    }
    async getTraderOffer(params:{trader:string,direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>{
        let result = await this.call('getTraderOffer',[params.trader,params.direction,Utils.toString(params.start),Utils.toString(params.length)]);
        return {
            index: result.index.map(e=>new BigNumber(e)),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: result.receiving.map(e=>new BigNumber(e)),
            amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
        };
    }
    async govToken(): Promise<string>{
        let result = await this.call('govToken');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async initialize_send(params:{token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.send('initialize',[params.token0,params.token1]);
        return result;
    }
    async initialize_call(params:{token0:string,token1:string}): Promise<void>{
        let result = await this.call('initialize',[params.token0,params.token1]);
        return;
    }
    initialize: {
        (params:{token0:string,token1:string}): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string}) => Promise<void>;
    }
    async isApprovedTrader(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<boolean>{
        let result = await this.call('isApprovedTrader',[params.param1,Utils.toString(params.param2),params.param3]);
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.call('isLive');
        return result;
    }
    async lastGovBalance(): Promise<BigNumber>{
        let result = await this.call('lastGovBalance');
        return new BigNumber(result);
    }
    async lastToken0Balance(): Promise<BigNumber>{
        let result = await this.call('lastToken0Balance');
        return new BigNumber(result);
    }
    async lastToken1Balance(): Promise<BigNumber>{
        let result = await this.call('lastToken1Balance');
        return new BigNumber(result);
    }
    async lockOffer_send(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('lockOffer',[params.direction,Utils.toString(params.index)]);
        return result;
    }
    async lockOffer_call(params:{direction:boolean,index:number|BigNumber}): Promise<void>{
        let result = await this.call('lockOffer',[params.direction,Utils.toString(params.index)]);
        return;
    }
    lockOffer: {
        (params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{direction:boolean,index:number|BigNumber}) => Promise<void>;
    }
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,locked:boolean,allowAll:boolean,amount:BigNumber,receiving:BigNumber,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber}>{
        let result = await this.call('offers',[params.param1,Utils.toString(params.param2)]);
        return {
            provider: result.provider,
            locked: result.locked,
            allowAll: result.allowAll,
            amount: new BigNumber(result.amount),
            receiving: new BigNumber(result.receiving),
            restrictedPrice: new BigNumber(result.restrictedPrice),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire)
        };
    }
    async protocolFeeBalance0(): Promise<BigNumber>{
        let result = await this.call('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.call('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('providerOfferIndex',[params.param1,params.param2,Utils.toString(params.param3)]);
        return new BigNumber(result);
    }
    async redeemProtocolFee_send(): Promise<TransactionReceipt>{
        let result = await this.send('redeemProtocolFee');
        return result;
    }
    async redeemProtocolFee_call(): Promise<void>{
        let result = await this.call('redeemProtocolFee');
        return;
    }
    redeemProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async removeAllLiquidity_send(provider:string): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidity',[provider]);
        return result;
    }
    async removeAllLiquidity_call(provider:string): Promise<{amount0:BigNumber,amount1:BigNumber}>{
        let result = await this.call('removeAllLiquidity',[provider]);
        return {
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1)
        };
    }
    removeAllLiquidity: {
        (provider:string): Promise<TransactionReceipt>;
        call: (provider:string) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    async removeAllLiquidity1D_send(params:{provider:string,direction:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidity1D',[params.provider,params.direction]);
        return result;
    }
    async removeAllLiquidity1D_call(params:{provider:string,direction:boolean}): Promise<{totalAmount:BigNumber,totalReceiving:BigNumber}>{
        let result = await this.call('removeAllLiquidity1D',[params.provider,params.direction]);
        return {
            totalAmount: new BigNumber(result.totalAmount),
            totalReceiving: new BigNumber(result.totalReceiving)
        };
    }
    removeAllLiquidity1D: {
        (params:{provider:string,direction:boolean}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean}) => Promise<{totalAmount:BigNumber,totalReceiving:BigNumber}>;
    }
    async removeLiquidity_send(params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.provider,params.direction,Utils.toString(params.index),Utils.toString(params.amountOut),Utils.toString(params.receivingOut)]);
        return result;
    }
    async removeLiquidity_call(params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidity',[params.provider,params.direction,Utils.toString(params.index),Utils.toString(params.amountOut),Utils.toString(params.receivingOut)]);
        return;
    }
    removeLiquidity: {
        (params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}) => Promise<void>;
    }
    async restrictedLiquidityProvider(): Promise<string>{
        let result = await this.call('restrictedLiquidityProvider');
        return result;
    }
    async scaleDirection(): Promise<boolean>{
        let result = await this.call('scaleDirection');
        return result;
    }
    async scaler(): Promise<BigNumber>{
        let result = await this.call('scaler');
        return new BigNumber(result);
    }
    async setApprovedTrader_send(params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setApprovedTrader',[params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation)]);
        return result;
    }
    async setApprovedTrader_call(params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}): Promise<void>{
        let result = await this.call('setApprovedTrader',[params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation)]);
        return;
    }
    setApprovedTrader: {
        (params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}) => Promise<void>;
    }
    async setLive_send(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.send('setLive',[isLive]);
        return result;
    }
    async setLive_call(isLive:boolean): Promise<void>{
        let result = await this.call('setLive',[isLive]);
        return;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    async setMultipleApprovedTraders_send(params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('setMultipleApprovedTraders',[params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation)]);
        return result;
    }
    async setMultipleApprovedTraders_call(params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:(number|BigNumber)[]}): Promise<void>{
        let result = await this.call('setMultipleApprovedTraders',[params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation)]);
        return;
    }
    setMultipleApprovedTraders: {
        (params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:(number|BigNumber)[]}) => Promise<void>;
    }
    async swap_send(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}): Promise<TransactionReceipt>{
        let result = await this.send('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.trader,Utils.stringToBytes(params.param5)]);
        return result;
    }
    async swap_call(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}): Promise<void>{
        let result = await this.call('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.trader,Utils.stringToBytes(params.param5)]);
        return;
    }
    swap: {
        (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}): Promise<TransactionReceipt>;
        call: (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}) => Promise<void>;
    }
    async sync_send(): Promise<TransactionReceipt>{
        let result = await this.send('sync');
        return result;
    }
    async sync_call(): Promise<void>{
        let result = await this.call('sync');
        return;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async token0(): Promise<string>{
        let result = await this.call('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.call('token1');
        return result;
    }
    async traderAllocation(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<BigNumber>{
        let result = await this.call('traderAllocation',[params.param1,Utils.toString(params.param2),params.param3]);
        return new BigNumber(result);
    }
    async traderOffer(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('traderOffer',[params.param1,params.param2,Utils.toString(params.param3)]);
        return new BigNumber(result);
    }
    async whitelistFactory(): Promise<string>{
        let result = await this.call('whitelistFactory');
        return result;
    }
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.createOrder = Object.assign(this.createOrder_send, {call:this.createOrder_call});
        this.initialize = Object.assign(this.initialize_send, {call:this.initialize_call});
        this.lockOffer = Object.assign(this.lockOffer_send, {call:this.lockOffer_call});
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, {call:this.redeemProtocolFee_call});
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, {call:this.removeAllLiquidity_call});
        this.removeAllLiquidity1D = Object.assign(this.removeAllLiquidity1D_send, {call:this.removeAllLiquidity1D_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.setApprovedTrader = Object.assign(this.setApprovedTrader_send, {call:this.setApprovedTrader_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setMultipleApprovedTraders = Object.assign(this.setMultipleApprovedTraders_send, {call:this.setMultipleApprovedTraders_call});
        this.swap = Object.assign(this.swap_send, {call:this.swap_call});
        this.sync = Object.assign(this.sync_send, {call:this.sync_call});
    }
}
export module OSWAP_RestrictedPair{
    export interface AddLiquidityEvent {provider:string,direction:boolean,index:BigNumber,amount:BigNumber,newAmountBalance:BigNumber,_event:Event}
    export interface ApprovedTraderEvent {direction:boolean,offerIndex:BigNumber,trader:string,allocation:BigNumber,_event:Event}
    export interface LockEvent {direction:boolean,index:BigNumber,_event:Event}
    export interface NewProviderOfferEvent {provider:string,direction:boolean,index:BigNumber,allowAll:boolean,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,direction:boolean,index:BigNumber,amountOut:BigNumber,receivingOut:BigNumber,newAmountBalance:BigNumber,newReceivingBalance:BigNumber,_event:Event}
    export interface SwapEvent {to:string,direction:boolean,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface SwappedOneOfferEvent {provider:string,direction:boolean,index:BigNumber,price:BigNumber,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newReceivingBalance:BigNumber,_event:Event}
}