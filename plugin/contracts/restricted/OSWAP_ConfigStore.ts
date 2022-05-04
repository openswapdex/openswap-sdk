import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ConfigStore.json";

export class OSWAP_ConfigStore extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
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
        let result = await this.methods('customParam',this.utils.stringToBytes32(param1));
        return result;
    }
    async customParamNames(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('customParamNames',this.utils.toString(param1));
        return result;
    }
    async customParamNamesIdx(param1:string): Promise<BigNumber>{
        let result = await this.methods('customParamNamesIdx',this.utils.stringToBytes32(param1));
        return new BigNumber(result);
    }
    async customParamNamesLength(): Promise<BigNumber>{
        let result = await this.methods('customParamNamesLength');
        return new BigNumber(result);
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async setCustomParam(params:{paramName:string,paramValue:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setCustomParam',this.utils.stringToBytes32(params.paramName),this.utils.stringToBytes32(params.paramValue));
        return result;
    }
    async setMultiCustomParam(params:{paramName:string[],paramValue:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setMultiCustomParam',this.utils.stringToBytes32(params.paramName),this.utils.stringToBytes32(params.paramValue));
        return result;
    }
}
export module OSWAP_ConfigStore{
    export interface ParamSetEvent {name:string,value:string,_event:Event}
}