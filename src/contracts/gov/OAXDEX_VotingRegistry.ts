import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_VotingRegistry.json");

export class OAXDEX_VotingRegistry extends Contract{
    constructor(wallet: Wallet, address?: string){
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
        let result = await this.methods('newVote',params.executor,Utils.stringToBytes32(params.name),Utils.stringToBytes32(params.options),Utils.toString(params.quorum),Utils.toString(params.threshold),Utils.toString(params.voteEndTime),Utils.toString(params.executeDelay),Utils.stringToBytes32(params.executeParam));
        return result;
    }
}