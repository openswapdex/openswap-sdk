import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_PausablePair.json";

export class OSWAP_PausablePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    factory: {
        (): Promise<string>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    private assign(){
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let isLive_call = async (): Promise<boolean> => {
            let result = await this.call('isLive');
            return result;
        }
        this.isLive = isLive_call
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
    }
}