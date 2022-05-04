import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_PausableFactory.json";

export class OSWAP_PausableFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
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
export module OSWAP_PausableFactory{
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface RestartedEvent {}
    export interface ShutdownedEvent {}
}