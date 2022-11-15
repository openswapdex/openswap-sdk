import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_Factory.json";

export interface IDeployParams {governance:string;pairCreator:string;tradeFee:number|BigNumber;protocolFee:number|BigNumber;protocolFeeTo:string}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetLiveForPairParams {pair:string;live:boolean}
export class OSWAP_Factory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.pairCreator,this.wallet.utils.toString(params.tradeFee),this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo]);
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
    protocolFee: {
        (): Promise<BigNumber>;
    }
    protocolFeeParams: {
        (): Promise<{_protocolFee:BigNumber,_protocolFeeTo:string}>;
    }
    protocolFeeTo: {
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
    setProtocolFee: {
        (protocolFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee:number|BigNumber) => Promise<void>;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    tradeFee: {
        (): Promise<BigNumber>;
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
        let protocolFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFee');
            return new BigNumber(result);
        }
        this.protocolFee = protocolFee_call
        let protocolFeeParams_call = async (): Promise<{_protocolFee:BigNumber,_protocolFeeTo:string}> => {
            let result = await this.call('protocolFeeParams');
            return {
                _protocolFee: new BigNumber(result._protocolFee),
                _protocolFeeTo: result._protocolFeeTo
            };
        }
        this.protocolFeeParams = protocolFeeParams_call
        let protocolFeeTo_call = async (): Promise<string> => {
            let result = await this.call('protocolFeeTo');
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let tradeFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('tradeFee');
            return new BigNumber(result);
        }
        this.tradeFee = tradeFee_call
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
        let setProtocolFee_send = async (protocolFee:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFee',[this.wallet.utils.toString(protocolFee)]);
            return result;
        }
        let setProtocolFee_call = async (protocolFee:number|BigNumber): Promise<void> => {
            let result = await this.call('setProtocolFee',[this.wallet.utils.toString(protocolFee)]);
            return;
        }
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call:setProtocolFee_call
        });
        let setProtocolFeeTo_send = async (protocolFeeTo:string): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFeeTo',[protocolFeeTo]);
            return result;
        }
        let setProtocolFeeTo_call = async (protocolFeeTo:string): Promise<void> => {
            let result = await this.call('setProtocolFeeTo',[protocolFeeTo]);
            return;
        }
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call:setProtocolFeeTo_call
        });
        let setTradeFee_send = async (tradeFee:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setTradeFee',[this.wallet.utils.toString(tradeFee)]);
            return result;
        }
        let setTradeFee_call = async (tradeFee:number|BigNumber): Promise<void> => {
            let result = await this.call('setTradeFee',[this.wallet.utils.toString(tradeFee)]);
            return;
        }
        this.setTradeFee = Object.assign(setTradeFee_send, {
            call:setTradeFee_call
        });
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