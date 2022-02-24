import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OAXDEX_Administrator extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[];
    decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent;
    parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[];
    decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent;
    parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[];
    decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent;
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[];
    decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent;
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[];
    decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent;
    parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[];
    decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent;
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[];
    decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent;
    parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[];
    decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent;
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
export declare module OAXDEX_Administrator {
    interface AddAdminEvent {
        _event: Event;
        admin: string;
    }
    interface RemoveAdminEvent {
        _event: Event;
        admin: string;
    }
    interface SetMaxAdminEvent {
        _event: Event;
        maxAdmin: BigNumber;
    }
    interface VotedFactoryRestartEvent {
        _event: Event;
        admin: string;
        factory: string;
        YorN: boolean;
    }
    interface VotedFactoryShutdownEvent {
        _event: Event;
        admin: string;
        factory: string;
        YorN: boolean;
    }
    interface VotedPairRestartEvent {
        _event: Event;
        admin: string;
        pair: string;
        YorN: boolean;
    }
    interface VotedPairShutdownEvent {
        _event: Event;
        admin: string;
        pair: string;
        YorN: boolean;
    }
    interface VotedVetoEvent {
        _event: Event;
        admin: string;
        votingContract: string;
        YorN: boolean;
    }
}
