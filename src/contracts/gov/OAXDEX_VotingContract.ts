import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OAXDEX_VotingContract.json";

export class OAXDEX_VotingContract extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{governance:string,executor:string,id:number|BigNumber,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}): Promise<string>{
        return this._deploy(params.governance,params.executor,Utils.toString(params.id),Utils.stringToBytes32(params.name),Utils.stringToBytes32(params.options),Utils.toString(params.quorum),Utils.toString(params.threshold),Utils.toString(params.voteEndTime),Utils.toString(params.executeDelay),Utils.stringToBytes32(params.executeParam));
    }
    async _executeParam(param1:number|BigNumber): Promise<string>{
        let result = await this.call('_executeParam',[Utils.toString(param1)]);
        return result;
    }
    async _options(param1:number|BigNumber): Promise<string>{
        let result = await this.call('_options',[Utils.toString(param1)]);
        return result;
    }
    async _optionsWeight(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('_optionsWeight',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async accountVoteOption(param1:string): Promise<BigNumber>{
        let result = await this.call('accountVoteOption',[param1]);
        return new BigNumber(result);
    }
    async accountVoteWeight(param1:string): Promise<BigNumber>{
        let result = await this.call('accountVoteWeight',[param1]);
        return new BigNumber(result);
    }
    async execute_send(): Promise<TransactionReceipt>{
        let result = await this.send('execute');
        return result;
    }
    async execute_call(): Promise<void>{
        let result = await this.call('execute');
        return;
    }
    execute: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async executeDelay(): Promise<BigNumber>{
        let result = await this.call('executeDelay');
        return new BigNumber(result);
    }
    async executeParam(): Promise<string[]>{
        let result = await this.call('executeParam');
        return result;
    }
    async executed(): Promise<boolean>{
        let result = await this.call('executed');
        return result;
    }
    async executor(): Promise<string>{
        let result = await this.call('executor');
        return result;
    }
    async getParams(): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}>{
        let result = await this.call('getParams');
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
        let result = await this.call('governance');
        return result;
    }
    async id(): Promise<BigNumber>{
        let result = await this.call('id');
        return new BigNumber(result);
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async options(): Promise<string[]>{
        let result = await this.call('options');
        return result;
    }
    async optionsCount(): Promise<BigNumber>{
        let result = await this.call('optionsCount');
        return new BigNumber(result);
    }
    async optionsWeight(): Promise<BigNumber[]>{
        let result = await this.call('optionsWeight');
        return result.map(e=>new BigNumber(e));
    }
    async quorum(): Promise<BigNumber>{
        let result = await this.call('quorum');
        return new BigNumber(result);
    }
    async threshold(): Promise<BigNumber>{
        let result = await this.call('threshold');
        return new BigNumber(result);
    }
    async totalVoteWeight(): Promise<BigNumber>{
        let result = await this.call('totalVoteWeight');
        return new BigNumber(result);
    }
    async totalWeight(): Promise<BigNumber>{
        let result = await this.call('totalWeight');
        return new BigNumber(result);
    }
    async updateWeight_send(account:string): Promise<TransactionReceipt>{
        let result = await this.send('updateWeight',[account]);
        return result;
    }
    async updateWeight_call(account:string): Promise<void>{
        let result = await this.call('updateWeight',[account]);
        return;
    }
    updateWeight: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    async veto_send(): Promise<TransactionReceipt>{
        let result = await this.send('veto');
        return result;
    }
    async veto_call(): Promise<void>{
        let result = await this.call('veto');
        return;
    }
    veto: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async vetoed(): Promise<boolean>{
        let result = await this.call('vetoed');
        return result;
    }
    async vote_send(option:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('vote',[Utils.toString(option)]);
        return result;
    }
    async vote_call(option:number|BigNumber): Promise<void>{
        let result = await this.call('vote',[Utils.toString(option)]);
        return;
    }
    vote: {
        (option:number|BigNumber): Promise<TransactionReceipt>;
        call: (option:number|BigNumber) => Promise<void>;
    }
    async voteEndTime(): Promise<BigNumber>{
        let result = await this.call('voteEndTime');
        return new BigNumber(result);
    }
    async voteStartTime(): Promise<BigNumber>{
        let result = await this.call('voteStartTime');
        return new BigNumber(result);
    }
    private assign(){
        this.execute = Object.assign(this.execute_send, {call:this.execute_call});
        this.updateWeight = Object.assign(this.updateWeight_send, {call:this.updateWeight_call});
        this.veto = Object.assign(this.veto_send, {call:this.veto_call});
        this.vote = Object.assign(this.vote_send, {call:this.vote_call});
    }
}