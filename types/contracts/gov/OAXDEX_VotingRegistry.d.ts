import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
export interface INewVoteParams {
    executor: string;
    name: string;
    options: string[];
    quorum: number | BigNumber;
    threshold: number | BigNumber;
    voteEndTime: number | BigNumber;
    executeDelay: number | BigNumber;
    executeParam: string[];
}
export declare class OAXDEX_VotingRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    governance: {
        (): Promise<string>;
    };
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    };
    private assign;
}
