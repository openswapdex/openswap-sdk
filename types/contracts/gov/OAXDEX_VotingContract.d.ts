import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_VotingContract extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        executor: string;
        id: number | BigNumber;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }): Promise<string>;
    _executeParam(param1: number | BigNumber): Promise<string>;
    _options(param1: number | BigNumber): Promise<string>;
    _optionsWeight(param1: number | BigNumber): Promise<BigNumber>;
    accountVoteOption(param1: string): Promise<BigNumber>;
    accountVoteWeight(param1: string): Promise<BigNumber>;
    execute_send(): Promise<TransactionReceipt>;
    execute_call(): Promise<void>;
    execute: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    executeDelay(): Promise<BigNumber>;
    executeParam(): Promise<string[]>;
    executed(): Promise<boolean>;
    executor(): Promise<string>;
    getParams(): Promise<{
        executor_: string;
        id_: BigNumber;
        name_: string;
        options_: string[];
        voteStartTime_: BigNumber;
        voteEndTime_: BigNumber;
        executeDelay_: BigNumber;
        status_: boolean[];
        optionsWeight_: BigNumber[];
        quorum_: BigNumber[];
        executeParam_: string[];
    }>;
    governance(): Promise<string>;
    id(): Promise<BigNumber>;
    name(): Promise<string>;
    options(): Promise<string[]>;
    optionsCount(): Promise<BigNumber>;
    optionsWeight(): Promise<BigNumber[]>;
    quorum(): Promise<BigNumber>;
    threshold(): Promise<BigNumber>;
    totalVoteWeight(): Promise<BigNumber>;
    totalWeight(): Promise<BigNumber>;
    updateWeight_send(account: string): Promise<TransactionReceipt>;
    updateWeight_call(account: string): Promise<void>;
    updateWeight: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    veto_send(): Promise<TransactionReceipt>;
    veto_call(): Promise<void>;
    veto: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    vetoed(): Promise<boolean>;
    vote_send(option: number | BigNumber): Promise<TransactionReceipt>;
    vote_call(option: number | BigNumber): Promise<void>;
    vote: {
        (option: number | BigNumber): Promise<TransactionReceipt>;
        call: (option: number | BigNumber) => Promise<void>;
    };
    voteEndTime(): Promise<BigNumber>;
    voteStartTime(): Promise<BigNumber>;
    private assign;
}
