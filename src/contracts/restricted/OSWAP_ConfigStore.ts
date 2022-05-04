import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_ConfigStore.json";

export class OSWAP_ConfigStore extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    async customParam(param1:string): Promise<string>{
        let result = await this.call('customParam',[Utils.stringToBytes32(param1)]);
        return result;
    }
    async customParamNames(param1:number|BigNumber): Promise<string>{
        let result = await this.call('customParamNames',[Utils.toString(param1)]);
        return result;
    }
    async customParamNamesIdx(param1:string): Promise<BigNumber>{
        let result = await this.call('customParamNamesIdx',[Utils.stringToBytes32(param1)]);
        return new BigNumber(result);
    }
    async customParamNamesLength(): Promise<BigNumber>{
        let result = await this.call('customParamNamesLength');
        return new BigNumber(result);
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async setCustomParam_send(params:{paramName:string,paramValue:string}): Promise<TransactionReceipt>{
        let result = await this.send('setCustomParam',[Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue)]);
        return result;
    }
    async setCustomParam_call(params:{paramName:string,paramValue:string}): Promise<void>{
        let result = await this.call('setCustomParam',[Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue)]);
        return;
    }
    setCustomParam: {
        (params:{paramName:string,paramValue:string}): Promise<TransactionReceipt>;
        call: (params:{paramName:string,paramValue:string}) => Promise<void>;
    }
    async setMultiCustomParam_send(params:{paramName:string[],paramValue:string[]}): Promise<TransactionReceipt>{
        let result = await this.send('setMultiCustomParam',[Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue)]);
        return result;
    }
    async setMultiCustomParam_call(params:{paramName:string[],paramValue:string[]}): Promise<void>{
        let result = await this.call('setMultiCustomParam',[Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue)]);
        return;
    }
    setMultiCustomParam: {
        (params:{paramName:string[],paramValue:string[]}): Promise<TransactionReceipt>;
        call: (params:{paramName:string[],paramValue:string[]}) => Promise<void>;
    }
    private assign(){
        this.setCustomParam = Object.assign(this.setCustomParam_send, {call:this.setCustomParam_call});
        this.setMultiCustomParam = Object.assign(this.setMultiCustomParam_send, {call:this.setMultiCustomParam_call});
    }
}
export module OSWAP_ConfigStore{
    export interface ParamSetEvent {name:string,value:string,_event:Event}
}