import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_FactoryBase.json";

export interface IDeployParams {governance:string;pairCreator:string}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetLiveForPairParams {pair:string;live:boolean}
export class OSWAP_FactoryBase extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.pairCreator]);
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
    allPairs: {
        (param1:number|BigNumber): Promise<string>;
    }
    allPairsLength: {
        (): Promise<BigNumber>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    getPair: {
        (params: IGetPairParams): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    pairCreator: {
        (): Promise<string>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('allPairs',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('allPairsLength');
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params));
            return result;
        }
        this.getPair = getPair_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let isLive_call = async (): Promise<boolean> => {
            let result = await this.call('isLive');
            return result;
        }
        this.isLive = isLive_call
        let pairCreator_call = async (): Promise<string> => {
            let result = await this.call('pairCreator');
            return result;
        }
        this.pairCreator = pairCreator_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params));
            return result;
        }
        let createPair_call = async (params: ICreatePairParams): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params));
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let setLive_send = async (isLive:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('setLive',[isLive]);
            return result;
        }
        let setLive_call = async (isLive:boolean): Promise<void> => {
            let result = await this.call('setLive',[isLive]);
            return;
        }
        this.setLive = Object.assign(setLive_send, {
            call:setLive_call
        });
        let setLiveForPairParams = (params: ISetLiveForPairParams) => [params.pair,params.live];
        let setLiveForPair_send = async (params: ISetLiveForPairParams): Promise<TransactionReceipt> => {
            let result = await this.send('setLiveForPair',setLiveForPairParams(params));
            return result;
        }
        let setLiveForPair_call = async (params: ISetLiveForPairParams): Promise<void> => {
            let result = await this.call('setLiveForPair',setLiveForPairParams(params));
            return;
        }
        this.setLiveForPair = Object.assign(setLiveForPair_send, {
            call:setLiveForPair_call
        });
    }
}
export module OSWAP_FactoryBase{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}