import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingContract.json";

export class OAXDEX_VotingContract extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,executor:string,id:number|BigNumber,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<string>{
        return this._deploy(params.governance,params.executor,this.utils.toString(params.id),this.utils.stringToBytes32(params.name),this.utils.stringToBytes32(params.options),this.utils.toString(params.quorum),this.utils.toString(params.threshold),this.utils.toString(params.voteEndTime),this.utils.toString(params.executeDelay),this.utils.stringToBytes32(params.executeParam));
    }
    async _executeParam(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('_executeParam',this.utils.toString(param1));
        return result;
    }
    async _options(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('_options',this.utils.toString(param1));
        return result;
    }
    async _optionsWeight(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('_optionsWeight',this.utils.toString(param1));
        return new BigNumber(result);
    }
    async accountVoteOption(param1:string): Promise<BigNumber>{
        let result = await this.methods('accountVoteOption',param1);
        return new BigNumber(result);
    }
    async accountVoteWeight(param1:string): Promise<BigNumber>{
        let result = await this.methods('accountVoteWeight',param1);
        return new BigNumber(result);
    }
    async execute(): Promise<TransactionReceipt>{
        let result = await this.methods('execute');
        return result;
    }
    async executeDelay(): Promise<BigNumber>{
        let result = await this.methods('executeDelay');
        return new BigNumber(result);
    }
    async executeParam(): Promise<string[]>{
        let result = await this.methods('executeParam');
        return result;
    }
    async executed(): Promise<boolean>{
        let result = await this.methods('executed');
        return result;
    }
    async executor(): Promise<string>{
        let result = await this.methods('executor');
        return result;
    }
    async getParams(): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}>{
        let result = await this.methods('getParams');
        return {
            executor_: result.executor_,
            id_: new BigNumber(result.id_),
            name_: result.name_,
            options_: result.options_,
            voteStartTime_: new BigNumber(result.voteStartTime_),
            voteEndTime_: new BigNumber(result.voteEndTime_),
            executeDelay_: new BigNumber(result.executeDelay_),
            status_: result.status_,
            optionsWeight_: result.optionsWeight_.map(e=>new BigNumber(e)),
            quorum_: result.quorum_.map(e=>new BigNumber(e)),
            executeParam_: result.executeParam_
        };
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async id(): Promise<BigNumber>{
        let result = await this.methods('id');
        return new BigNumber(result);
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async options(): Promise<string[]>{
        let result = await this.methods('options');
        return result;
    }
    async optionsCount(): Promise<BigNumber>{
        let result = await this.methods('optionsCount');
        return new BigNumber(result);
    }
    async optionsWeight(): Promise<BigNumber[]>{
        let result = await this.methods('optionsWeight');
        return result;
    }
    async quorum(): Promise<BigNumber>{
        let result = await this.methods('quorum');
        return new BigNumber(result);
    }
    async threshold(): Promise<BigNumber>{
        let result = await this.methods('threshold');
        return new BigNumber(result);
    }
    async totalVoteWeight(): Promise<BigNumber>{
        let result = await this.methods('totalVoteWeight');
        return new BigNumber(result);
    }
    async totalWeight(): Promise<BigNumber>{
        let result = await this.methods('totalWeight');
        return new BigNumber(result);
    }
    async updateWeight(account:string): Promise<TransactionReceipt>{
        let result = await this.methods('updateWeight',account);
        return result;
    }
    async veto(): Promise<TransactionReceipt>{
        let result = await this.methods('veto');
        return result;
    }
    async vetoed(): Promise<boolean>{
        let result = await this.methods('vetoed');
        return result;
    }
    async vote(option:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('vote',this.utils.toString(option));
        return result;
    }
    async voteEndTime(): Promise<BigNumber>{
        let result = await this.methods('voteEndTime');
        return new BigNumber(result);
    }
    async voteStartTime(): Promise<BigNumber>{
        let result = await this.methods('voteStartTime');
        return new BigNumber(result);
    }
}