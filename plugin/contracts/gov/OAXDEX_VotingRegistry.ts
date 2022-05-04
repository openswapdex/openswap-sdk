import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingRegistry.json";

export class OAXDEX_VotingRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async newVote(params:{executor:string,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('newVote',params.executor,this.utils.stringToBytes32(params.name),this.utils.stringToBytes32(params.options),this.utils.toString(params.quorum),this.utils.toString(params.threshold),this.utils.toString(params.voteEndTime),this.utils.toString(params.executeDelay),this.utils.stringToBytes32(params.executeParam));
        return result;
    }
}