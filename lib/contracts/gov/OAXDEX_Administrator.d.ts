import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_Administrator extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseAddAdminEvent(receipt: TransactionReceipt): {
        admin: string;
    }[];
    parseRemoveAdminEvent(receipt: TransactionReceipt): {
        admin: string;
    }[];
    parseSetMaxAdminEvent(receipt: TransactionReceipt): {
        maxAdmin: BigNumber;
    }[];
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): {
        admin: string;
        factory: string;
        YorN: boolean;
    }[];
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): {
        admin: string;
        factory: string;
        YorN: boolean;
    }[];
    parseVotedPairRestartEvent(receipt: TransactionReceipt): {
        admin: string;
        pair: string;
        YorN: boolean;
    }[];
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): {
        admin: string;
        pair: string;
        YorN: boolean;
    }[];
    parseVotedVetoEvent(receipt: TransactionReceipt): {
        admin: string;
        votingContract: string;
        YorN: boolean;
    }[];
    addAdmin(admin: string): Promise<TransactionReceipt>;
    admins(param1: number | BigNumber): Promise<string>;
    adminsIdx(param1: string): Promise<BigNumber>;
    allAdmins(): Promise<string[]>;
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
    getFactoryRestartVote(factory: string): Promise<boolean[]>;
    getFactoryShutdownVote(factory: string): Promise<boolean[]>;
    getPairRestartVote(pair: string): Promise<boolean[]>;
    getPairShutdownVote(pair: string): Promise<boolean[]>;
    getVetoVotingVote(votingContract: string): Promise<boolean[]>;
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
