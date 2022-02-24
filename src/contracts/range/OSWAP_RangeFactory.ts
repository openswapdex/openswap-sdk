import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/range/OSWAP_RangeFactory.json");

export class OSWAP_RangeFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,oracleFactory:string,pairCreator:string,tradeFee:number|BigNumber,stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[],protocolFeeTo:string}): Promise<string>{
        return this._deploy(params.governance,params.oracleFactory,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare),params.protocolFeeTo);
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent{
        let result = event.data;
        return {
            _event:event,
            previousOwner: result.previousOwner,
            newOwner: result.newOwner
        };
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent{
        let result = event.data;
        return {
            _event:event,
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize)
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent{
        let result = event.data;
        return {
            _event:event,
            pair: result.pair
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            _event:event,
            pair: result.pair
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent{
        let result = event.data;
        return {
            _event:event,
            name: result.name,
            value: result.value
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event{
        let result = event.data;
        return {
            _event:event,
            name: result.name,
            value1: result.value1,
            value2: result.value2
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent{
        let result = event.data;
        return {
            _event:event,
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event:event,
        };
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',Utils.toString(param1));
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.methods('allPairsLength');
        return new BigNumber(result);
    }
    async checkAndGetSwapParams(): Promise<BigNumber>{
        let result = await this.methods('checkAndGetSwapParams');
        return new BigNumber(result);
    }
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async getAllLiquidityProviderShare(): Promise<{_stakeAmount:BigNumber[],_liquidityProviderShare:BigNumber[]}>{
        let result = await this.methods('getAllLiquidityProviderShare');
        return {
            _stakeAmount: result._stakeAmount.map(e=>new BigNumber(e)),
            _liquidityProviderShare: result._liquidityProviderShare.map(e=>new BigNumber(e))
        };
    }
    async getCreateAddresses(): Promise<{_governance:string,_rangeLiquidityProvider:string,_oracleFactory:string}>{
        let result = await this.methods('getCreateAddresses');
        return {
            _governance: result._governance,
            _rangeLiquidityProvider: result._rangeLiquidityProvider,
            _oracleFactory: result._oracleFactory
        };
    }
    async getLiquidityProviderShare(stake:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('getLiquidityProviderShare',Utils.toString(stake));
        return new BigNumber(result);
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async liquidityProviderShare(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('liquidityProviderShare',Utils.toString(param1));
        return new BigNumber(result);
    }
    async oracleFactory(): Promise<string>{
        let result = await this.methods('oracleFactory');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async pairCreator(): Promise<string>{
        let result = await this.methods('pairCreator');
        return result;
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async setLiquidityProviderShare(params:{stakeAmount:(number|BigNumber)[],liquidityProviderShare:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiquidityProviderShare',Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare));
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setLiveForPair(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiveForPair',params.pair,params.live);
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFeeTo',protocolFeeTo);
        return result;
    }
    async setRangeLiquidityProvider(rangeLiquidityProvider:string): Promise<TransactionReceipt>{
        let result = await this.methods('setRangeLiquidityProvider',rangeLiquidityProvider);
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',Utils.toString(tradeFee));
        return result;
    }
    async stakeAmount(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('stakeAmount',Utils.toString(param1));
        return new BigNumber(result);
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.methods('tradeFee');
        return new BigNumber(result);
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
}
export module OSWAP_RangeFactory{
    export interface OwnershipTransferredEvent {_event:Event,previousOwner:string,newOwner:string}
    export interface PairCreatedEvent {_event:Event,token0:string,token1:string,pair:string,newSize:BigNumber}
    export interface PairRestartedEvent {_event:Event,pair:string}
    export interface PairShutdownedEvent {_event:Event,pair:string}
    export interface ParamSetEvent {_event:Event,name:string,value:string}
    export interface ParamSet2Event {_event:Event,name:string,value1:string,value2:string}
    export interface RestartedEvent {}
    export interface ShutdownedEvent {}
}