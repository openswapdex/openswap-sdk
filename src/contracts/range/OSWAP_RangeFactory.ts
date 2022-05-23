import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RangeFactory.json";

export class OSWAP_RangeFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{governance:string,oracleFactory:string,pairCreator:string,tradeFee:number|BigNumber,stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[],protocolFeeTo:string}): Promise<string>{
        return this.__deploy([params.governance,params.oracleFactory,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare),params.protocolFeeTo]);
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.call('allPairs',[Utils.toString(param1)]);
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.call('allPairsLength');
        return new BigNumber(result);
    }
    async checkAndGetSwapParams(): Promise<BigNumber>{
        let result = await this.call('checkAndGetSwapParams');
        return new BigNumber(result);
    }
    async createPair_send(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.send('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    async createPair_call(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.call('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    createPair: {
        (params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string}) => Promise<string>;
    }
    async getAllLiquidityProviderShare(): Promise<{_stakeAmount:BigNumber[],_liquidityProviderShare:BigNumber[]}>{
        let result = await this.call('getAllLiquidityProviderShare');
        return {
            _stakeAmount: result._stakeAmount.map(e=>new BigNumber(e)),
            _liquidityProviderShare: result._liquidityProviderShare.map(e=>new BigNumber(e))
        };
    }
    async getCreateAddresses(): Promise<{_governance:string,_rangeLiquidityProvider:string,_oracleFactory:string}>{
        let result = await this.call('getCreateAddresses');
        return {
            _governance: result._governance,
            _rangeLiquidityProvider: result._rangeLiquidityProvider,
            _oracleFactory: result._oracleFactory
        };
    }
    async getLiquidityProviderShare(stake:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('getLiquidityProviderShare',[Utils.toString(stake)]);
        return new BigNumber(result);
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.call('getPair',[params.param1,params.param2]);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.call('isLive');
        return result;
    }
    async liquidityProviderShare(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('liquidityProviderShare',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async oracleFactory(): Promise<string>{
        let result = await this.call('oracleFactory');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async pairCreator(): Promise<string>{
        let result = await this.call('pairCreator');
        return result;
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.call('protocolFeeTo');
        return result;
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.call('rangeLiquidityProvider');
        return result;
    }
    async renounceOwnership_send(): Promise<TransactionReceipt>{
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call(): Promise<void>{
        let result = await this.call('renounceOwnership');
        return;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async setLiquidityProviderShare_send(params:{stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('setLiquidityProviderShare',[Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare)]);
        return result;
    }
    async setLiquidityProviderShare_call(params:{stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[]}): Promise<void>{
        let result = await this.call('setLiquidityProviderShare',[Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare)]);
        return;
    }
    setLiquidityProviderShare: {
        (params:{stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[]}) => Promise<void>;
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
    async setLiveForPair_send(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('setLiveForPair',[params.pair,params.live]);
        return result;
    }
    async setLiveForPair_call(params:{pair:string,live:boolean}): Promise<void>{
        let result = await this.call('setLiveForPair',[params.pair,params.live]);
        return;
    }
    setLiveForPair: {
        (params:{pair:string,live:boolean}): Promise<TransactionReceipt>;
        call: (params:{pair:string,live:boolean}) => Promise<void>;
    }
    async setProtocolFeeTo_send(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.send('setProtocolFeeTo',[protocolFeeTo]);
        return result;
    }
    async setProtocolFeeTo_call(protocolFeeTo:string): Promise<void>{
        let result = await this.call('setProtocolFeeTo',[protocolFeeTo]);
        return;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    async setRangeLiquidityProvider_send(rangeLiquidityProvider:string): Promise<TransactionReceipt>{
        let result = await this.send('setRangeLiquidityProvider',[rangeLiquidityProvider]);
        return result;
    }
    async setRangeLiquidityProvider_call(rangeLiquidityProvider:string): Promise<void>{
        let result = await this.call('setRangeLiquidityProvider',[rangeLiquidityProvider]);
        return;
    }
    setRangeLiquidityProvider: {
        (rangeLiquidityProvider:string): Promise<TransactionReceipt>;
        call: (rangeLiquidityProvider:string) => Promise<void>;
    }
    async setTradeFee_send(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setTradeFee',[Utils.toString(tradeFee)]);
        return result;
    }
    async setTradeFee_call(tradeFee:number|BigNumber): Promise<void>{
        let result = await this.call('setTradeFee',[Utils.toString(tradeFee)]);
        return;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    async stakeAmount(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('stakeAmount',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.call('tradeFee');
        return new BigNumber(result);
    }
    async transferOwnership_send(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.send('transferOwnership',[newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner:string): Promise<void>{
        let result = await this.call('transferOwnership',[newOwner]);
        return;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        this.createPair = Object.assign(this.createPair_send, {call:this.createPair_call});
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, {call:this.renounceOwnership_call});
        this.setLiquidityProviderShare = Object.assign(this.setLiquidityProviderShare_send, {call:this.setLiquidityProviderShare_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, {call:this.setLiveForPair_call});
        this.setProtocolFeeTo = Object.assign(this.setProtocolFeeTo_send, {call:this.setProtocolFeeTo_call});
        this.setRangeLiquidityProvider = Object.assign(this.setRangeLiquidityProvider_send, {call:this.setRangeLiquidityProvider_call});
        this.setTradeFee = Object.assign(this.setTradeFee_send, {call:this.setTradeFee_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
    }
}
export module OSWAP_RangeFactory{
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}