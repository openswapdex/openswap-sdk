import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_PausableFactory.json";

export class OSWAP_PausableFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
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
        let result = await this.call('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.call('isLive');
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
    private assign(){
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, {call:this.setLiveForPair_call});
    }
}
export module OSWAP_PausableFactory{
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}