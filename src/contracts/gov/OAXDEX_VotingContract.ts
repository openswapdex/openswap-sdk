import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingContract.json";

export interface IDeployParams {governance:string;executor:string;id:number|BigNumber;name:string;options:string[];quorum:number|BigNumber;threshold:number|BigNumber;voteEndTime:number|BigNumber;executeDelay:number|BigNumber;executeParam:string[]}
export class OAXDEX_VotingContract extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.executor,this.wallet.utils.toString(params.id),this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.options),this.wallet.utils.toString(params.quorum),this.wallet.utils.toString(params.threshold),this.wallet.utils.toString(params.voteEndTime),this.wallet.utils.toString(params.executeDelay),this.wallet.utils.stringToBytes32(params.executeParam)]);
    }
    _executeParam: {
        (param1:number|BigNumber): Promise<string>;
    }
    _options: {
        (param1:number|BigNumber): Promise<string>;
    }
    _optionsWeight: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    accountVoteOption: {
        (param1:string): Promise<BigNumber>;
    }
    accountVoteWeight: {
        (param1:string): Promise<BigNumber>;
    }
    execute: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    executeDelay: {
        (): Promise<BigNumber>;
    }
    executeParam: {
        (): Promise<string[]>;
    }
    executed: {
        (): Promise<boolean>;
    }
    executor: {
        (): Promise<string>;
    }
    getParams: {
        (): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}>;
    }
    governance: {
        (): Promise<string>;
    }
    id: {
        (): Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    options: {
        (): Promise<string[]>;
    }
    optionsCount: {
        (): Promise<BigNumber>;
    }
    optionsWeight: {
        (): Promise<BigNumber[]>;
    }
    quorum: {
        (): Promise<BigNumber>;
    }
    threshold: {
        (): Promise<BigNumber>;
    }
    totalVoteWeight: {
        (): Promise<BigNumber>;
    }
    totalWeight: {
        (): Promise<BigNumber>;
    }
    updateWeight: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    veto: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    vetoed: {
        (): Promise<boolean>;
    }
    vote: {
        (option:number|BigNumber): Promise<TransactionReceipt>;
        call: (option:number|BigNumber) => Promise<void>;
    }
    voteEndTime: {
        (): Promise<BigNumber>;
    }
    voteStartTime: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let _executeParam_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('_executeParam',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this._executeParam = _executeParam_call
        let _options_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('_options',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this._options = _options_call
        let _optionsWeight_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('_optionsWeight',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this._optionsWeight = _optionsWeight_call
        let accountVoteOption_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('accountVoteOption',[param1]);
            return new BigNumber(result);
        }
        this.accountVoteOption = accountVoteOption_call
        let accountVoteWeight_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('accountVoteWeight',[param1]);
            return new BigNumber(result);
        }
        this.accountVoteWeight = accountVoteWeight_call
        let executeDelay_call = async (): Promise<BigNumber> => {
            let result = await this.call('executeDelay');
            return new BigNumber(result);
        }
        this.executeDelay = executeDelay_call
        let executeParam_call = async (): Promise<string[]> => {
            let result = await this.call('executeParam');
            return result;
        }
        this.executeParam = executeParam_call
        let executed_call = async (): Promise<boolean> => {
            let result = await this.call('executed');
            return result;
        }
        this.executed = executed_call
        let executor_call = async (): Promise<string> => {
            let result = await this.call('executor');
            return result;
        }
        this.executor = executor_call
        let getParams_call = async (): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}> => {
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
        this.getParams = getParams_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let id_call = async (): Promise<BigNumber> => {
            let result = await this.call('id');
            return new BigNumber(result);
        }
        this.id = id_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let options_call = async (): Promise<string[]> => {
            let result = await this.call('options');
            return result;
        }
        this.options = options_call
        let optionsCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('optionsCount');
            return new BigNumber(result);
        }
        this.optionsCount = optionsCount_call
        let optionsWeight_call = async (): Promise<BigNumber[]> => {
            let result = await this.call('optionsWeight');
            return result.map(e=>new BigNumber(e));
        }
        this.optionsWeight = optionsWeight_call
        let quorum_call = async (): Promise<BigNumber> => {
            let result = await this.call('quorum');
            return new BigNumber(result);
        }
        this.quorum = quorum_call
        let threshold_call = async (): Promise<BigNumber> => {
            let result = await this.call('threshold');
            return new BigNumber(result);
        }
        this.threshold = threshold_call
        let totalVoteWeight_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalVoteWeight');
            return new BigNumber(result);
        }
        this.totalVoteWeight = totalVoteWeight_call
        let totalWeight_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalWeight');
            return new BigNumber(result);
        }
        this.totalWeight = totalWeight_call
        let vetoed_call = async (): Promise<boolean> => {
            let result = await this.call('vetoed');
            return result;
        }
        this.vetoed = vetoed_call
        let voteEndTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteEndTime');
            return new BigNumber(result);
        }
        this.voteEndTime = voteEndTime_call
        let voteStartTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteStartTime');
            return new BigNumber(result);
        }
        this.voteStartTime = voteStartTime_call
        let execute_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('execute');
            return result;
        }
        let execute_call = async (): Promise<void> => {
            let result = await this.call('execute');
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
        let updateWeight_send = async (account:string): Promise<TransactionReceipt> => {
            let result = await this.send('updateWeight',[account]);
            return result;
        }
        let updateWeight_call = async (account:string): Promise<void> => {
            let result = await this.call('updateWeight',[account]);
            return;
        }
        this.updateWeight = Object.assign(updateWeight_send, {
            call:updateWeight_call
        });
        let veto_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('veto');
            return result;
        }
        let veto_call = async (): Promise<void> => {
            let result = await this.call('veto');
            return;
        }
        this.veto = Object.assign(veto_send, {
            call:veto_call
        });
        let vote_send = async (option:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('vote',[this.wallet.utils.toString(option)]);
            return result;
        }
        let vote_call = async (option:number|BigNumber): Promise<void> => {
            let result = await this.call('vote',[this.wallet.utils.toString(option)]);
            return;
        }
        this.vote = Object.assign(vote_send, {
            call:vote_call
        });
    }
}