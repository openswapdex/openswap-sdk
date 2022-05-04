import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_VotingRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    governance(): Promise<string>;
    newVote_send(params: {
        executor: string;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }): Promise<TransactionReceipt>;
    newVote_call(params: {
        executor: string;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }): Promise<void>;
    newVote: {
        (params: {
            executor: string;
            name: string;
            options: string[];
            quorum: number | BigNumber;
            threshold: number | BigNumber;
            voteEndTime: number | BigNumber;
            executeDelay: number | BigNumber;
            executeParam: string[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            executor: string;
            name: string;
            options: string[];
            quorum: number | BigNumber;
            threshold: number | BigNumber;
            voteEndTime: number | BigNumber;
            executeDelay: number | BigNumber;
            executeParam: string[];
        }) => Promise<void>;
    };
    private assign;
}
