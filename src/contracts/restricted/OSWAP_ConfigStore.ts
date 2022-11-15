import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ConfigStore.json";

export interface ISetCustomParamParams {paramName:string;paramValue:string}
export interface ISetMultiCustomParamParams {paramName:string[];paramValue:string[]}
export class OSWAP_ConfigStore extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
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
    customParam: {
        (param1:string): Promise<string>;
    }
    customParamNames: {
        (param1:number|BigNumber): Promise<string>;
    }
    customParamNamesIdx: {
        (param1:string): Promise<BigNumber>;
    }
    customParamNamesLength: {
        (): Promise<BigNumber>;
    }
    governance: {
        (): Promise<string>;
    }
    setCustomParam: {
        (params: ISetCustomParamParams): Promise<TransactionReceipt>;
        call: (params: ISetCustomParamParams) => Promise<void>;
    }
    setMultiCustomParam: {
        (params: ISetMultiCustomParamParams): Promise<TransactionReceipt>;
        call: (params: ISetMultiCustomParamParams) => Promise<void>;
    }
    private assign(){
        let customParam_call = async (param1:string): Promise<string> => {
            let result = await this.call('customParam',[this.wallet.utils.stringToBytes32(param1)]);
            return result;
        }
        this.customParam = customParam_call
        let customParamNames_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('customParamNames',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.customParamNames = customParamNames_call
        let customParamNamesIdx_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('customParamNamesIdx',[this.wallet.utils.stringToBytes32(param1)]);
            return new BigNumber(result);
        }
        this.customParamNamesIdx = customParamNamesIdx_call
        let customParamNamesLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('customParamNamesLength');
            return new BigNumber(result);
        }
        this.customParamNamesLength = customParamNamesLength_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let setCustomParamParams = (params: ISetCustomParamParams) => [this.wallet.utils.stringToBytes32(params.paramName),this.wallet.utils.stringToBytes32(params.paramValue)];
        let setCustomParam_send = async (params: ISetCustomParamParams): Promise<TransactionReceipt> => {
            let result = await this.send('setCustomParam',setCustomParamParams(params));
            return result;
        }
        let setCustomParam_call = async (params: ISetCustomParamParams): Promise<void> => {
            let result = await this.call('setCustomParam',setCustomParamParams(params));
            return;
        }
        this.setCustomParam = Object.assign(setCustomParam_send, {
            call:setCustomParam_call
        });
        let setMultiCustomParamParams = (params: ISetMultiCustomParamParams) => [this.wallet.utils.stringToBytes32(params.paramName),this.wallet.utils.stringToBytes32(params.paramValue)];
        let setMultiCustomParam_send = async (params: ISetMultiCustomParamParams): Promise<TransactionReceipt> => {
            let result = await this.send('setMultiCustomParam',setMultiCustomParamParams(params));
            return result;
        }
        let setMultiCustomParam_call = async (params: ISetMultiCustomParamParams): Promise<void> => {
            let result = await this.call('setMultiCustomParam',setMultiCustomParamParams(params));
            return;
        }
        this.setMultiCustomParam = Object.assign(setMultiCustomParam_send, {
            call:setMultiCustomParam_call
        });
    }
}
export module OSWAP_ConfigStore{
    export interface ParamSetEvent {name:string,value:string,_event:Event}
}