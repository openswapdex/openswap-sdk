import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OraclePair.json";

export class OSWAP_OraclePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_OraclePair.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            newStakeBalance: new BigNumber(result.newStakeBalance),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            expire: new BigNumber(result.expire),
            enable: result.enable,
            _event: event
        };
    }
    parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorPauseOfferEvent[]{
        return this.parseEvents(receipt, "DelegatorPauseOffer").map(e=>this.decodeDelegatorPauseOfferEvent(e));
    }
    decodeDelegatorPauseOfferEvent(event: Event): OSWAP_OraclePair.DelegatorPauseOfferEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
            _event: event
        };
    }
    parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorResumeOfferEvent[]{
        return this.parseEvents(receipt, "DelegatorResumeOffer").map(e=>this.decodeDelegatorResumeOfferEvent(e));
    }
    decodeDelegatorResumeOfferEvent(event: Event): OSWAP_OraclePair.DelegatorResumeOfferEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
            _event: event
        };
    }
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.NewProviderEvent[]{
        return this.parseEvents(receipt, "NewProvider").map(e=>this.decodeNewProviderEvent(e));
    }
    decodeNewProviderEvent(event: Event): OSWAP_OraclePair.NewProviderEvent{
        let result = event.data;
        return {
            provider: result.provider,
            index: new BigNumber(result.index),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_OraclePair.RemoveLiquidityEvent{
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
            expire: new BigNumber(result.expire),
            enable: result.enable,
            _event: event
        };
    }
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_OraclePair.ReplenishEvent[]{
        return this.parseEvents(receipt, "Replenish").map(e=>this.decodeReplenishEvent(e));
    }
    decodeReplenishEvent(event: Event): OSWAP_OraclePair.ReplenishEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseSetDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SetDelegatorEvent[]{
        return this.parseEvents(receipt, "SetDelegator").map(e=>this.decodeSetDelegatorEvent(e));
    }
    decodeSetDelegatorEvent(event: Event): OSWAP_OraclePair.SetDelegatorEvent{
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_OraclePair.SwapEvent{
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
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwappedOneProviderEvent[]{
        return this.parseEvents(receipt, "SwappedOneProvider").map(e=>this.decodeSwappedOneProviderEvent(e));
    }
    decodeSwappedOneProviderEvent(event: Event): OSWAP_OraclePair.SwappedOneProviderEvent{
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
    async addLiquidity_send(params:{provider:string,direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.afterIndex),Utils.toString(params.expire),params.enable]);
        return result;
    }
    async addLiquidity_call(params:{provider:string,direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<BigNumber>{
        let result = await this.call('addLiquidity',[params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.afterIndex),Utils.toString(params.expire),params.enable]);
        return new BigNumber(result);
    }
    addLiquidity: {
        (params:{provider:string,direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,expire:number|BigNumber,enable:boolean}) => Promise<BigNumber>;
    }
    async counter(): Promise<BigNumber>{
        let result = await this.call('counter');
        return new BigNumber(result);
    }
    async delegator(param1:string): Promise<string>{
        let result = await this.call('delegator',[param1]);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async feeBalance(): Promise<BigNumber>{
        let result = await this.call('feeBalance');
        return new BigNumber(result);
    }
    async findPosition(params:{direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber}): Promise<{afterIndex:BigNumber,nextIndex:BigNumber}>{
        let result = await this.call('findPosition',[params.direction,Utils.toString(params.staked),Utils.toString(params.afterIndex)]);
        return {
            afterIndex: new BigNumber(result.afterIndex),
            nextIndex: new BigNumber(result.nextIndex)
        };
    }
    async first(param1:boolean): Promise<BigNumber>{
        let result = await this.call('first',[param1]);
        return new BigNumber(result);
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
    async getProviderOffer(params:{provider:string,direction:boolean}): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.call('getProviderOffer',[params.provider,params.direction]);
        return {
            index: new BigNumber(result.index),
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async getQueue(params:{direction:boolean,start:number|BigNumber,end:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>{
        let result = await this.call('getQueue',[params.direction,Utils.toString(params.start),Utils.toString(params.end)]);
        return {
            index: result.index.map(e=>new BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e=>new BigNumber(e)),
            staked: result.staked.map(e=>new BigNumber(e)),
            expire: result.expire.map(e=>new BigNumber(e))
        };
    }
    async getQueueFromIndex(params:{direction:boolean,from:number|BigNumber,count:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>{
        let result = await this.call('getQueueFromIndex',[params.direction,Utils.toString(params.from),Utils.toString(params.count)]);
        return {
            index: result.index.map(e=>new BigNumber(e)),
            provider: result.provider,
            amount: result.amount.map(e=>new BigNumber(e)),
            staked: result.staked.map(e=>new BigNumber(e)),
            expire: result.expire.map(e=>new BigNumber(e))
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
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean,isActive:boolean,enabled:boolean,prev:BigNumber,next:BigNumber}>{
        let result = await this.call('offers',[params.param1,Utils.toString(params.param2)]);
        return {
            provider: result.provider,
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            isActive: result.isActive,
            enabled: result.enabled,
            prev: new BigNumber(result.prev),
            next: new BigNumber(result.next)
        };
    }
    async oracleLiquidityProvider(): Promise<string>{
        let result = await this.call('oracleLiquidityProvider');
        return result;
    }
    async pauseOffer_send(params:{provider:string,direction:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('pauseOffer',[params.provider,params.direction]);
        return result;
    }
    async pauseOffer_call(params:{provider:string,direction:boolean}): Promise<void>{
        let result = await this.call('pauseOffer',[params.provider,params.direction]);
        return;
    }
    pauseOffer: {
        (params:{provider:string,direction:boolean}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean}) => Promise<void>;
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
    async purgeExpire_send(params:{direction:boolean,startingIndex:number|BigNumber,limit:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('purgeExpire',[params.direction,Utils.toString(params.startingIndex),Utils.toString(params.limit)]);
        return result;
    }
    async purgeExpire_call(params:{direction:boolean,startingIndex:number|BigNumber,limit:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('purgeExpire',[params.direction,Utils.toString(params.startingIndex),Utils.toString(params.limit)]);
        return new BigNumber(result);
    }
    purgeExpire: {
        (params:{direction:boolean,startingIndex:number|BigNumber,limit:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{direction:boolean,startingIndex:number|BigNumber,limit:number|BigNumber}) => Promise<BigNumber>;
    }
    async queueSize(param1:boolean): Promise<BigNumber>{
        let result = await this.call('queueSize',[param1]);
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
    async removeLiquidity_send(params:{provider:string,direction:boolean,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.afterIndex),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.expire),params.enable]);
        return result;
    }
    async removeLiquidity_call(params:{provider:string,direction:boolean,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<void>{
        let result = await this.call('removeLiquidity',[params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.afterIndex),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.expire),params.enable]);
        return;
    }
    removeLiquidity: {
        (params:{provider:string,direction:boolean,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean}) => Promise<void>;
    }
    async replenish_send(params:{provider:string,direction:boolean,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('replenish',[params.provider,params.direction,Utils.toString(params.afterIndex),Utils.toString(params.amountIn),Utils.toString(params.expire)]);
        return result;
    }
    async replenish_call(params:{provider:string,direction:boolean,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber}): Promise<void>{
        let result = await this.call('replenish',[params.provider,params.direction,Utils.toString(params.afterIndex),Utils.toString(params.amountIn),Utils.toString(params.expire)]);
        return;
    }
    replenish: {
        (params:{provider:string,direction:boolean,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber}) => Promise<void>;
    }
    async resumeOffer_send(params:{provider:string,direction:boolean,afterIndex:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('resumeOffer',[params.provider,params.direction,Utils.toString(params.afterIndex)]);
        return result;
    }
    async resumeOffer_call(params:{provider:string,direction:boolean,afterIndex:number|BigNumber}): Promise<void>{
        let result = await this.call('resumeOffer',[params.provider,params.direction,Utils.toString(params.afterIndex)]);
        return;
    }
    resumeOffer: {
        (params:{provider:string,direction:boolean,afterIndex:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{provider:string,direction:boolean,afterIndex:number|BigNumber}) => Promise<void>;
    }
    async scaleDirection(): Promise<boolean>{
        let result = await this.call('scaleDirection');
        return result;
    }
    async scaler(): Promise<BigNumber>{
        let result = await this.call('scaler');
        return new BigNumber(result);
    }
    async setDelegator_send(params:{delegator:string,fee:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setDelegator',[params.delegator,Utils.toString(params.fee)]);
        return result;
    }
    async setDelegator_call(params:{delegator:string,fee:number|BigNumber}): Promise<void>{
        let result = await this.call('setDelegator',[params.delegator,Utils.toString(params.fee)]);
        return;
    }
    setDelegator: {
        (params:{delegator:string,fee:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{delegator:string,fee:number|BigNumber}) => Promise<void>;
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
    async setPrivateReplenish_send(replenish:boolean): Promise<TransactionReceipt>{
        let result = await this.send('setPrivateReplenish',[replenish]);
        return result;
    }
    async setPrivateReplenish_call(replenish:boolean): Promise<void>{
        let result = await this.call('setPrivateReplenish',[replenish]);
        return;
    }
    setPrivateReplenish: {
        (replenish:boolean): Promise<TransactionReceipt>;
        call: (replenish:boolean) => Promise<void>;
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
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.initialize = Object.assign(this.initialize_send, {call:this.initialize_call});
        this.pauseOffer = Object.assign(this.pauseOffer_send, {call:this.pauseOffer_call});
        this.purgeExpire = Object.assign(this.purgeExpire_send, {call:this.purgeExpire_call});
        this.redeemProtocolFee = Object.assign(this.redeemProtocolFee_send, {call:this.redeemProtocolFee_call});
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, {call:this.removeAllLiquidity_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.replenish = Object.assign(this.replenish_send, {call:this.replenish_call});
        this.resumeOffer = Object.assign(this.resumeOffer_send, {call:this.resumeOffer_call});
        this.setDelegator = Object.assign(this.setDelegator_send, {call:this.setDelegator_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setPrivateReplenish = Object.assign(this.setPrivateReplenish_send, {call:this.setPrivateReplenish_call});
        this.swap = Object.assign(this.swap_send, {call:this.swap_call});
        this.sync = Object.assign(this.sync_send, {call:this.sync_call});
    }
}
export module OSWAP_OraclePair{
    export interface AddLiquidityEvent {provider:string,direction:boolean,staked:BigNumber,amount:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,expire:BigNumber,enable:boolean,_event:Event}
    export interface DelegatorPauseOfferEvent {delegator:string,provider:string,direction:boolean,_event:Event}
    export interface DelegatorResumeOfferEvent {delegator:string,provider:string,direction:boolean,_event:Event}
    export interface NewProviderEvent {provider:string,index:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,direction:boolean,unstake:BigNumber,amountOut:BigNumber,reserveOut:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber,enable:boolean,_event:Event}
    export interface ReplenishEvent {provider:string,direction:boolean,amountIn:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber,_event:Event}
    export interface SetDelegatorEvent {provider:string,delegator:string,_event:Event}
    export interface SwapEvent {to:string,direction:boolean,price:BigNumber,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface SwappedOneProviderEvent {provider:string,direction:boolean,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newCounterReserveBalance:BigNumber,_event:Event}
}