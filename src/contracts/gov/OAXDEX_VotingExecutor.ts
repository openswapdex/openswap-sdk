import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingExecutor.json";

export interface IDeployParams {governance:string;admin:string}
export class OAXDEX_VotingExecutor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.admin]);
    }
    admin: {
        (): Promise<string>;
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    governance: {
        (): Promise<string>;
    }
    private assign(){
        let admin_call = async (): Promise<string> => {
            let result = await this.call('admin');
            return result;
        }
        this.admin = admin_call
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