import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/restricted/OSWAP_ConfigStore.json");

export class OSWAP_ConfigStore extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{        	
        return this._deploy(governance);
    }
    parseParamSetEvent(receipt: TransactionReceipt): {name:string,value:string}[]{
        let events = this.parseEvents(receipt, "ParamSet");
        return events.map(result => {
            return {
                name: result.name,
                value: result.value
            };
        });
    }
    async customParam(param1:string): Promise<string>{
        let result = await this.methods('customParam',Utils.stringToBytes32(param1));
        return result;
    }
    async customParamNames(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('customParamNames',Utils.toString(param1));
        return result;
    }
    async customParamNamesIdx(param1:string): Promise<BigNumber>{
        let result = await this.methods('customParamNamesIdx',Utils.stringToBytes32(param1));
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
        let result = await this.methods('setCustomParam',Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue));
        return result;
    }
    async setMultiCustomParam(params:{paramName:string[],paramValue:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setMultiCustomParam',Utils.stringToBytes32(params.paramName),Utils.stringToBytes32(params.paramValue));
        return result;
    }
}