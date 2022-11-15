import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_VotingExecutor1.json";

export class OSWAP_VotingExecutor1 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(factory:string): Promise<string>{
        return this.__deploy([factory]);
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    factory: {
        (): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    private assign(){
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let execute_send = async (params:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('execute',[this.wallet.utils.stringToBytes32(params)]);
            return result;
        }
        let execute_call = async (params:string[]): Promise<void> => {
            let result = await this.call('execute',[this.wallet.utils.stringToBytes32(params)]);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
    }
}