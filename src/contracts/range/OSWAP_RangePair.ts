import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RangePair.json";

export class OSWAP_RangePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_RangePair.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            newStakeBalance: new BigNumber(result.newStakeBalance),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[]{
        return this.parseEvents(receipt, "NewProvider").map(e=>this.decodeNewProviderEvent(e));
    }
    decodeNewProviderEvent(event: Event): OSWAP_RangePair.NewProviderEvent{
        let result = event.data;
        return {
            provider: result.provider,
            index: new BigNumber(result.index),
            _event: event
        };
    }
    parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveAllLiquidity").map(e=>this.decodeRemoveAllLiquidityEvent(e));
    }
    decodeRemoveAllLiquidityEvent(event: Event): OSWAP_RangePair.RemoveAllLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            unstake: new BigNumber(result.unstake),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RangePair.RemoveLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            unstake: new BigNumber(result.unstake),
            amountOut: new BigNumber(result.amountOut),
            reserveOut: new BigNumber(result.reserveOut),
            newStakeBalance: new BigNumber(result.newStakeBalance),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[]{
        return this.parseEvents(receipt, "Replenish").map(e=>this.decodeReplenishEvent(e));
    }
    decodeReplenishEvent(event: Event): OSWAP_RangePair.ReplenishEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_RangePair.SwapEvent{
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            price: new BigNumber(result.price),
            amountIn: new BigNumber(result.amountIn),
            amountOut: new BigNumber(result.amountOut),
            tradeFee: new BigNumber(result.tradeFee),
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[]{
        return this.parseEvents(receipt, "SwappedOneProvider").map(e=>this.decodeSwappedOneProviderEvent(e));
    }
    decodeSwappedOneProviderEvent(event: Event): OSWAP_RangePair.SwappedOneProviderEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountOut: new BigNumber(result.amountOut),
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newCounterReserveBalance: new BigNumber(result.newCounterReserveBalance),
            _event: event
        };
    }
    parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[]{
        return this.parseEvents(receipt, "UpdateProviderOffer").map(e=>this.decodeUpdateProviderOfferEvent(e));
    }
    decodeUpdateProviderOfferEvent(event: Event): OSWAP_RangePair.UpdateProviderOfferEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            replenish: new BigNumber(result.replenish),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            _event: event
        };
    }
    async addLiquidity_send(params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return result;
    }
    async addLiquidity_call(params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('addLiquidity',[params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return new BigNumber(result);
    }
    addLiquidity: {
        (params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}) => Promise<BigNumber>;
    }
    async counter(): Promise<BigNumber>{
        let result = await this.call('counter');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.call('getAmountIn',[params.tokenOut,Utils.toString(params.amountOut),params.data]);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.call('getAmountOut',[params.tokenIn,Utils.toString(params.amountIn),params.data]);
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
    async getLatestPrice(params:{direction:boolean,payload:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.direction,params.payload]);
        return new BigNumber(result);
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,end:number|BigNumber}): Promise<{provider:string[],amountAndReserve:BigNumber[],lowerLimitAndUpperLimit:BigNumber[],startDateAndExpire:BigNumber[],privateReplenish:boolean[]}>{
        let result = await this.call('getOffers',[params.direction,Utils.toString(params.start),Utils.toString(params.end)]);
        return {
            provider: result.provider,
            amountAndReserve: result.amountAndReserve.map(e=>new BigNumber(e)),
            lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e)),
            privateReplenish: result.privateReplenish
        };
    }
    async getProviderOffer(params:{provider:string,direction:boolean}): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.call('getProviderOffer',[params.provider,params.direction]);
        return {
            index: new BigNumber(result.index),
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
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
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.call('offers',[params.param1,Utils.toString(params.param2)]);
        return {
            provider: result.provider,
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async oracleFactory(): Promise<string>{
        let result = await this.call('oracleFactory');
        return result;
    }
    async protocolFeeBalance0(): Promise<BigNumber>{
        let result = await this.call('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.call('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(param1:string): Promise<BigNumber>{
        let result = await this.call('providerOfferIndex',[param1]);
        return new BigNumber(result);
    }
    async providerStaking(param1:string): Promise<BigNumber>{
        let result = await this.call('providerStaking',[param1]);
        return new BigNumber(result);
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.call('rangeLiquidityProvider');
        return result;
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
    async removeAllLiquidity_call(provider:string): Promise<{amount0:BigNumber,amount1:BigNumber,staked:BigNumber}>{
        let result = await this.call('removeAllLiquidity',[provider]);
        return {
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            staked: new BigNumber(result.staked)
        };
    }
    removeAllLiquidity: {
        (provider:string): Promise<TransactionReceipt>;
        call: (provider:string) => Promise<{amount0:BigNumber,amount1:BigNumber,staked:BigNumber}>;
    }
    async removeLiquidity_send(params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return result;
    }
    async removeLiquidity_call(params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidity',[params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire)]);
        return;
    }
    removeLiquidity: {
        (params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}) => Promise<void>;
    }
    async replenish_send(params:{provider:string,direction:boolean,amountIn:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('replenish',[params.provider,params.direction,Utils.toString(params.amountIn)]);
        return result;
    }
    async replenish_call(params:{provider:string,direction:boolean,amountIn:number|BigNumber}): Promise<void>{
        let result = await this.call('replenish',[params.provider,params.direction,Utils.toString(params.amountIn)]);
        return;
    }
    replenish: {
        (params:{provider:string,direction:boolean,amountIn:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,amountIn:number|BigNumber}) => Promise<void>;
    }
    async scaleDirection(): Promise<boolean>{
        let result = await this.call('scaleDirection');
        return result;
    }
    async scaler(): Promise<BigNumber>{
        let result = await this.call('scaler');
        return new BigNumber(result);
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
    async stakeBalance(): Promise<BigNumber>{
        let result = await this.call('stakeBalance');
        return new BigNumber(result);
    }
    async swap_send(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data]);
        return result;
    }
    async swap_call(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<void>{
        let result = await this.call('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data]);
        return;
    }
    swap: {
        (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>;
        call: (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}) => Promise<void>;
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
    async updateProviderOffer_send(params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('updateProviderOffer',[params.provider,params.direction,Utils.toString(params.replenishAmount),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),params.privateReplenish]);
        return result;
    }
    async updateProviderOffer_call(params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}): Promise<void>{
        let result = await this.call('updateProviderOffer',[params.provider,params.direction,Utils.toString(params.replenishAmount),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),params.privateReplenish]);
        return;
    }
    updateProviderOffer: {
        (params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}) => Promise<void>;
    }
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.initialize = Object.assign(this.initialize_send, {call:this.initialize_call});
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, {call:this.redeemProtocolFee_call});
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, {call:this.removeAllLiquidity_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.replenish = Object.assign(this.replenish_send, {call:this.replenish_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.swap = Object.assign(this.swap_send, {call:this.swap_call});
        this.sync = Object.assign(this.sync_send, {call:this.sync_call});
        this.updateProviderOffer = Object.assign(this.updateProviderOffer_send, {call:this.updateProviderOffer_call});
    }
}
export module OSWAP_RangePair{
    export interface AddLiquidityEvent {provider:string,direction:boolean,staked:BigNumber,amount:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,_event:Event}
    export interface NewProviderEvent {provider:string,index:BigNumber,_event:Event}
    export interface RemoveAllLiquidityEvent {provider:string,unstake:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,direction:boolean,unstake:BigNumber,amountOut:BigNumber,reserveOut:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,_event:Event}
    export interface ReplenishEvent {provider:string,direction:boolean,amountIn:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,_event:Event}
    export interface SwapEvent {to:string,direction:boolean,price:BigNumber,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface SwappedOneProviderEvent {provider:string,direction:boolean,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newCounterReserveBalance:BigNumber,_event:Event}
    export interface UpdateProviderOfferEvent {provider:string,direction:boolean,replenish:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean,_event:Event}
}