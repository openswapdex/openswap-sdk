import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangePair.json";

export class OSWAP_RangePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
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
    async addLiquidity(params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.provider,params.direction,this.utils.toString(params.staked),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire));
        return result;
    }
    async counter(): Promise<BigNumber>{
        let result = await this.methods('counter');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.tokenOut,this.utils.toString(params.amountOut),params.data);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,this.utils.toString(params.amountIn),params.data);
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
    async getLatestPrice(params:{direction:boolean,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.direction,params.payload);
        return new BigNumber(result);
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,end:number|BigNumber}): Promise<{provider:string[],amountAndReserve:BigNumber[],lowerLimitAndUpperLimit:BigNumber[],startDateAndExpire:BigNumber[],privateReplenish:boolean[]}>{
        let result = await this.methods('getOffers',params.direction,this.utils.toString(params.start),this.utils.toString(params.end));
        return {
            provider: result.provider,
            amountAndReserve: result.amountAndReserve.map(e=>new BigNumber(e)),
            lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e)),
            privateReplenish: result.privateReplenish
        };
    }
    async getProviderOffer(params:{provider:string,direction:boolean}): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.methods('getProviderOffer',params.provider,params.direction);
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
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.methods('offers',params.param1,this.utils.toString(params.param2));
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
        let result = await this.methods('oracleFactory');
        return result;
    }
    async protocolFeeBalance0(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(param1:string): Promise<BigNumber>{
        let result = await this.methods('providerOfferIndex',param1);
        return new BigNumber(result);
    }
    async providerStaking(param1:string): Promise<BigNumber>{
        let result = await this.methods('providerStaking',param1);
        return new BigNumber(result);
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async redeemProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider:string): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',provider);
        return result;
    }
    async removeLiquidity(params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.provider,params.direction,this.utils.toString(params.unstake),this.utils.toString(params.amountOut),this.utils.toString(params.reserveOut),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire));
        return result;
    }
    async replenish(params:{provider:string,direction:boolean,amountIn:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('replenish',params.provider,params.direction,this.utils.toString(params.amountIn));
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
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async stakeBalance(): Promise<BigNumber>{
        let result = await this.methods('stakeBalance');
        return new BigNumber(result);
    }
    async swap(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swap',this.utils.toString(params.amount0Out),this.utils.toString(params.amount1Out),params.to,params.data);
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
    async updateProviderOffer(params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('updateProviderOffer',params.provider,params.direction,this.utils.toString(params.replenishAmount),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),params.privateReplenish);
        return result;
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