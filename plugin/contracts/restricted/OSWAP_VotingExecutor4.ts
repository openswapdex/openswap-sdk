import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_VotingExecutor4.json";

export class OSWAP_VotingExecutor4 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,factory:string,configStore:string}): Promise<string>{
        return this._deploy(params.governance,params.factory,params.configStore);
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',this.utils.stringToBytes32(params));
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
}