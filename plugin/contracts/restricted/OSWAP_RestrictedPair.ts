import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedPair.json";

export class OSWAP_RestrictedPair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
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
    async addLiquidity(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.direction,this.utils.toString(params.index));
        return result;
    }
    async approvedTrader(params:{param1:boolean,param2:number|BigNumber,param3:number|BigNumber}): Promise<string>{
        let result = await this.methods('approvedTrader',params.param1,this.utils.toString(params.param2),this.utils.toString(params.param3));
        return result;
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async counter(param1:boolean): Promise<BigNumber>{
        let result = await this.methods('counter',param1);
        return new BigNumber(result);
    }
    async createOrder(params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('createOrder',params.provider,params.direction,params.allowAll,this.utils.toString(params.restrictedPrice),this.utils.toString(params.startDate),this.utils.toString(params.expire));
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async feeBalance(): Promise<BigNumber>{
        let result = await this.methods('feeBalance');
        return new BigNumber(result);
    }
    async getAmountIn(params:{param1:string,param2:number|BigNumber,param3:string,param4:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.param1,this.utils.toString(params.param2),params.param3,params.param4);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,trader:string,param4:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,this.utils.toString(params.amountIn),params.trader,params.param4);
        return new BigNumber(result);
    }
    async getApprovedTrader(params:{direction:boolean,offerIndex:number|BigNumber,start:number|BigNumber,length:number|BigNumber}): Promise<{trader:string[],allocation:BigNumber[]}>{
        let result = await this.methods('getApprovedTrader',params.direction,this.utils.toString(params.offerIndex),this.utils.toString(params.start),this.utils.toString(params.length));
        return {
            trader: result.trader,
            allocation: result.allocation.map(e=>new BigNumber(e))
        };
    }
    async getApprovedTraderLength(params:{direction:boolean,offerIndex:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getApprovedTraderLength',params.direction,this.utils.toString(params.offerIndex));
        return new BigNumber(result);
    }
    async getBalances(): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>{
        let result = await this.methods('getBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1]),
            param3: new BigNumber(result[2])
        };
    }
    async getLastBalances(): Promise<{param1:BigNumber,param2:BigNumber}>{
        let result = await this.methods('getLastBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1])
        };
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>{
        let result = await this.methods('getOffers',params.direction,this.utils.toString(params.start),this.utils.toString(params.length));
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
        let result = await this.methods('getProviderOffer',params.provider,params.direction,this.utils.toString(params.start),this.utils.toString(params.length));
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
        let result = await this.methods('getProviderOfferIndexLength',params.provider,params.direction);
        return new BigNumber(result);
    }
    async getTraderOffer(params:{trader:string,direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>{
        let result = await this.methods('getTraderOffer',params.trader,params.direction,this.utils.toString(params.start),this.utils.toString(params.length));
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
        let result = await this.methods('govToken');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async initialize(params:{token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.methods('initialize',params.token0,params.token1);
        return result;
    }
    async isApprovedTrader(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<boolean>{
        let result = await this.methods('isApprovedTrader',params.param1,this.utils.toString(params.param2),params.param3);
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async lastGovBalance(): Promise<BigNumber>{
        let result = await this.methods('lastGovBalance');
        return new BigNumber(result);
    }
    async lastToken0Balance(): Promise<BigNumber>{
        let result = await this.methods('lastToken0Balance');
        return new BigNumber(result);
    }
    async lastToken1Balance(): Promise<BigNumber>{
        let result = await this.methods('lastToken1Balance');
        return new BigNumber(result);
    }
    async lockOffer(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('lockOffer',params.direction,this.utils.toString(params.index));
        return result;
    }
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,locked:boolean,allowAll:boolean,amount:BigNumber,receiving:BigNumber,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber}>{
        let result = await this.methods('offers',params.param1,this.utils.toString(params.param2));
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
        let result = await this.methods('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('providerOfferIndex',params.param1,params.param2,this.utils.toString(params.param3));
        return new BigNumber(result);
    }
    async redeemProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider:string): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',provider);
        return result;
    }
    async removeAllLiquidity1D(params:{provider:string,direction:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity1D',params.provider,params.direction);
        return result;
    }
    async removeLiquidity(params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.provider,params.direction,this.utils.toString(params.index),this.utils.toString(params.amountOut),this.utils.toString(params.receivingOut));
        return result;
    }
    async restrictedLiquidityProvider(): Promise<string>{
        let result = await this.methods('restrictedLiquidityProvider');
        return result;
    }
    async scaleDirection(): Promise<boolean>{
        let result = await this.methods('scaleDirection');
        return result;
    }
    async scaler(): Promise<BigNumber>{
        let result = await this.methods('scaler');
        return new BigNumber(result);
    }
    async setApprovedTrader(params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setApprovedTrader',params.direction,this.utils.toString(params.offerIndex),params.trader,this.utils.toString(params.allocation));
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setMultipleApprovedTraders(params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setMultipleApprovedTraders',params.direction,this.utils.toString(params.offerIndex),params.trader,this.utils.toString(params.allocation));
        return result;
    }
    async swap(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swap',this.utils.toString(params.amount0Out),this.utils.toString(params.amount1Out),params.to,params.trader,params.param5);
        return result;
    }
    async sync(): Promise<TransactionReceipt>{
        let result = await this.methods('sync');
        return result;
    }
    async token0(): Promise<string>{
        let result = await this.methods('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.methods('token1');
        return result;
    }
    async traderAllocation(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<BigNumber>{
        let result = await this.methods('traderAllocation',params.param1,this.utils.toString(params.param2),params.param3);
        return new BigNumber(result);
    }
    async traderOffer(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('traderOffer',params.param1,params.param2,this.utils.toString(params.param3));
        return new BigNumber(result);
    }
    async whitelistFactory(): Promise<string>{
        let result = await this.methods('whitelistFactory');
        return result;
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