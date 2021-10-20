import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_Administrator extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    addAdmin(admin: string): Promise<TransactionReceipt>;
    admins(param1: number | BigNumber): Promise<string>;
    adminsIdx(param1: string): Promise<BigNumber>;
    allAdmins(): Promise<any>;
    executeFactoryRestart(factory: string): Promise<TransactionReceipt>;
    executeFactoryShutdown(factory: string): Promise<TransactionReceipt>;
    executePairRestart(params: {
        factory: string;
        pair: string;
    }): Promise<TransactionReceipt>;
    executePairShutdown(params: {
        factory: string;
        pair: string;
    }): Promise<TransactionReceipt>;
    executeVetoVoting(votingContract: string): Promise<TransactionReceipt>;
    factoryRestart(params: {
        factory: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    factoryRestartVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    factoryShutdown(params: {
        factory: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    factoryShutdownVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    getFactoryRestartVote(factory: string): Promise<any>;
    getFactoryShutdownVote(factory: string): Promise<any>;
    getPairRestartVote(pair: string): Promise<any>;
    getPairShutdownVote(pair: string): Promise<any>;
    getVetoVotingVote(votingContract: string): Promise<any>;
    governance(): Promise<string>;
    maxAdmin(): Promise<BigNumber>;
    pairRestart(params: {
        pair: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    pairRestartVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    pairShutdown(params: {
        pair: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    pairShutdownVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    removeAdmin(admin: string): Promise<TransactionReceipt>;
    setMaxAdmin(maxAdmin: number | BigNumber): Promise<TransactionReceipt>;
    vetoVoting(params: {
        votingContract: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    vetoVotingVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
}
