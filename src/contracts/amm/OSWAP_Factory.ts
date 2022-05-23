import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_Factory.json";

export class OSWAP_Factory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{governance:string,pairCreator:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this.__deploy([params.governance,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),params.protocolFeeTo]);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_Factory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_Factory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_Factory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_Factory.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_Factory.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_Factory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_Factory.ShutdownedEvent{
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
    async pairCreator(): Promise<string>{
        let result = await this.call('pairCreator');
        return result;
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.call('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeParams(): Promise<{_protocolFee:BigNumber,_protocolFeeTo:string}>{
        let result = await this.call('protocolFeeParams');
        return {
            _protocolFee: new BigNumber(result._protocolFee),
            _protocolFeeTo: result._protocolFeeTo
        };
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.call('protocolFeeTo');
        return result;
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
    async setProtocolFee_send(protocolFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setProtocolFee',[Utils.toString(protocolFee)]);
        return result;
    }
    async setProtocolFee_call(protocolFee:number|BigNumber): Promise<void>{
        let result = await this.call('setProtocolFee',[Utils.toString(protocolFee)]);
        return;
    }
    setProtocolFee: {
        (protocolFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee:number|BigNumber) => Promise<void>;
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
    async tradeFee(): Promise<BigNumber>{
        let result = await this.call('tradeFee');
        return new BigNumber(result);
    }
    private assign(){
        this.createPair = Object.assign(this.createPair_send, {call:this.createPair_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, {call:this.setLiveForPair_call});
        this.setProtocolFee = Object.assign(this.setProtocolFee_send, {call:this.setProtocolFee_call});
        this.setProtocolFeeTo = Object.assign(this.setProtocolFeeTo_send, {call:this.setProtocolFeeTo_call});
        this.setTradeFee = Object.assign(this.setTradeFee_send, {call:this.setTradeFee_call});
    }
}
export module OSWAP_Factory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}