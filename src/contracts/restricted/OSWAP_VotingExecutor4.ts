import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_VotingExecutor4.json";

export class OSWAP_VotingExecutor4 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{governance:string,factory:string,configStore:string}): Promise<string>{
        return this._deploy(params.governance,params.factory,params.configStore);
    }
    async configStore(): Promise<string>{
        let result = await this.call('configStore');
        return result;
    }
    async execute_send(params:string[]): Promise<TransactionReceipt>{
        let result = await this.send('execute',[Utils.stringToBytes32(params)]);
        return result;
    }
    async execute_call(params:string[]): Promise<void>{
        let result = await this.call('execute',[Utils.stringToBytes32(params)]);
        return;
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    private assign(){
        this.execute = Object.assign(this.execute_send, {call:this.execute_call});
    }
}