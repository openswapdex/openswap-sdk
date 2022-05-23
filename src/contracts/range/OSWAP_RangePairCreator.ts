import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RangePairCreator.json";

export class OSWAP_RangePairCreator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    async createPair_send(salt:string): Promise<TransactionReceipt>{
        let result = await this.send('createPair',[Utils.stringToBytes32(salt)]);
        return result;
    }
    async createPair_call(salt:string): Promise<string>{
        let result = await this.call('createPair',[Utils.stringToBytes32(salt)]);
        return result;
    }
    createPair: {
        (salt:string): Promise<TransactionReceipt>;
        call: (salt:string) => Promise<string>;
    }
    private assign(){
        this.createPair = Object.assign(this.createPair_send, {call:this.createPair_call});
    }
}