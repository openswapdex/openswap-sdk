import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_PausablePair.json";

export class OSWAP_PausablePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
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
}