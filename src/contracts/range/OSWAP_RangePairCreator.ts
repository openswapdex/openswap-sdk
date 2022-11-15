import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangePairCreator.json";

export class OSWAP_RangePairCreator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    createPair: {
        (salt:string): Promise<TransactionReceipt>;
        call: (salt:string) => Promise<string>;
    }
    private assign(){
        let createPair_send = async (salt:string): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',[this.wallet.utils.stringToBytes32(salt)]);
            return result;
        }
        let createPair_call = async (salt:string): Promise<string> => {
            let result = await this.call('createPair',[this.wallet.utils.stringToBytes32(salt)]);
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
    }
}