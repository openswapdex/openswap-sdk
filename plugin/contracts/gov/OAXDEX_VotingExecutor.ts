import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingExecutor.json";

export class OAXDEX_VotingExecutor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,admin:string}): Promise<string>{
        return this._deploy(params.governance,params.admin);
    }
    async admin(): Promise<string>{
        let result = await this.methods('admin');
        return result;
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',this.utils.stringToBytes32(params));
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
}