import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_PausablePair.json";

export class OSWAP_PausablePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
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
    private assign(){
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
    }
}