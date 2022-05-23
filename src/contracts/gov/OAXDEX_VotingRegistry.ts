import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OAXDEX_VotingRegistry.json";

export class OAXDEX_VotingRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async newVote_send(params:{executor:string,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<TransactionReceipt>{
        let result = await this.send('newVote',[params.executor,Utils.stringToBytes32(params.name),Utils.stringToBytes32(params.options),Utils.toString(params.quorum),Utils.toString(params.threshold),Utils.toString(params.voteEndTime),Utils.toString(params.executeDelay),Utils.stringToBytes32(params.executeParam)]);
        return result;
    }
    async newVote_call(params:{executor:string,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<void>{
        let result = await this.call('newVote',[params.executor,Utils.stringToBytes32(params.name),Utils.stringToBytes32(params.options),Utils.toString(params.quorum),Utils.toString(params.threshold),Utils.toString(params.voteEndTime),Utils.toString(params.executeDelay),Utils.stringToBytes32(params.executeParam)]);
        return;
    }
    newVote: {
        (params:{executor:string,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<TransactionReceipt>;
        call: (params:{executor:string,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}) => Promise<void>;
    }
    private assign(){
        this.newVote = Object.assign(this.newVote_send, {call:this.newVote_call});
    }
}