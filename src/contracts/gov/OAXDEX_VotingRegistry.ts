import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_VotingRegistry.json";

export interface INewVoteParams {executor:string;name:string;options:string[];quorum:number|BigNumber;threshold:number|BigNumber;voteEndTime:number|BigNumber;executeDelay:number|BigNumber;executeParam:string[]}
export class OAXDEX_VotingRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
    }
    governance: {
        (): Promise<string>;
    }
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    }
    private assign(){
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let newVoteParams = (params: INewVoteParams) => [params.executor,this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.options),this.wallet.utils.toString(params.quorum),this.wallet.utils.toString(params.threshold),this.wallet.utils.toString(params.voteEndTime),this.wallet.utils.toString(params.executeDelay),this.wallet.utils.stringToBytes32(params.executeParam)];
        let newVote_send = async (params: INewVoteParams): Promise<TransactionReceipt> => {
            let result = await this.send('newVote',newVoteParams(params));
            return result;
        }
        let newVote_call = async (params: INewVoteParams): Promise<void> => {
            let result = await this.call('newVote',newVoteParams(params));
            return;
        }
        this.newVote = Object.assign(newVote_send, {
            call:newVote_call
        });
    }
}