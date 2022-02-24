import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/commons/OSWAP_FactoryBase.json");

export class OSWAP_FactoryBase extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,pairCreator:string}): Promise<string>{
        return this._deploy(params.governance,params.pairCreator);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_FactoryBase.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_FactoryBase.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_FactoryBase.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_FactoryBase.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_FactoryBase.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
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
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
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
    async pairCreator(): Promise<string>{
        let result = await this.methods('pairCreator');
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
}
export module OSWAP_FactoryBase{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface RestartedEvent {}
    export interface ShutdownedEvent {}
}