import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IExecutePairRestartParams {
    factory: string;
    pair: string;
}
export interface IExecutePairShutdownParams {
    factory: string;
    pair: string;
}
export interface IFactoryRestartParams {
    factory: string;
    YorN: boolean;
}
export interface IFactoryRestartVoteParams {
    param1: string;
    param2: string;
}
export interface IFactoryShutdownParams {
    factory: string;
    YorN: boolean;
}
export interface IFactoryShutdownVoteParams {
    param1: string;
    param2: string;
}
export interface IPairRestartParams {
    pair: string;
    YorN: boolean;
}
export interface IPairRestartVoteParams {
    param1: string;
    param2: string;
}
export interface IPairShutdownParams {
    pair: string;
    YorN: boolean;
}
export interface IPairShutdownVoteParams {
    param1: string;
    param2: string;
}
export interface IVetoVotingParams {
    votingContract: string;
    YorN: boolean;
}
export interface IVetoVotingVoteParams {
    param1: string;
    param2: string;
}
export declare class OAXDEX_Administrator extends Contract {
    constructor(wallet: IWallet, address?: string);
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
    addAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    admins: {
        (param1: number | BigNumber): Promise<string>;
    };
    adminsIdx: {
        (param1: string): Promise<BigNumber>;
    };
    allAdmins: {
        (): Promise<string[]>;
    };
    executeFactoryRestart: {
        (factory: string): Promise<TransactionReceipt>;
        call: (factory: string) => Promise<void>;
    };
    executeFactoryShutdown: {
        (factory: string): Promise<TransactionReceipt>;
        call: (factory: string) => Promise<void>;
    };
    executePairRestart: {
        (params: IExecutePairRestartParams): Promise<TransactionReceipt>;
        call: (params: IExecutePairRestartParams) => Promise<void>;
    };
    executePairShutdown: {
        (params: IExecutePairShutdownParams): Promise<TransactionReceipt>;
        call: (params: IExecutePairShutdownParams) => Promise<void>;
    };
    executeVetoVoting: {
        (votingContract: string): Promise<TransactionReceipt>;
        call: (votingContract: string) => Promise<void>;
    };
    factoryRestart: {
        (params: IFactoryRestartParams): Promise<TransactionReceipt>;
        call: (params: IFactoryRestartParams) => Promise<void>;
    };
    factoryRestartVote: {
        (params: IFactoryRestartVoteParams): Promise<boolean>;
    };
    factoryShutdown: {
        (params: IFactoryShutdownParams): Promise<TransactionReceipt>;
        call: (params: IFactoryShutdownParams) => Promise<void>;
    };
    factoryShutdownVote: {
        (params: IFactoryShutdownVoteParams): Promise<boolean>;
    };
    getFactoryRestartVote: {
        (factory: string): Promise<boolean[]>;
    };
    getFactoryShutdownVote: {
        (factory: string): Promise<boolean[]>;
    };
    getPairRestartVote: {
        (pair: string): Promise<boolean[]>;
    };
    getPairShutdownVote: {
        (pair: string): Promise<boolean[]>;
    };
    getVetoVotingVote: {
        (votingContract: string): Promise<boolean[]>;
    };
    governance: {
        (): Promise<string>;
    };
    maxAdmin: {
        (): Promise<BigNumber>;
    };
    pairRestart: {
        (params: IPairRestartParams): Promise<TransactionReceipt>;
        call: (params: IPairRestartParams) => Promise<void>;
    };
    pairRestartVote: {
        (params: IPairRestartVoteParams): Promise<boolean>;
    };
    pairShutdown: {
        (params: IPairShutdownParams): Promise<TransactionReceipt>;
        call: (params: IPairShutdownParams) => Promise<void>;
    };
    pairShutdownVote: {
        (params: IPairShutdownVoteParams): Promise<boolean>;
    };
    removeAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setMaxAdmin: {
        (maxAdmin: number | BigNumber): Promise<TransactionReceipt>;
        call: (maxAdmin: number | BigNumber) => Promise<void>;
    };
    vetoVoting: {
        (params: IVetoVotingParams): Promise<TransactionReceipt>;
        call: (params: IVetoVotingParams) => Promise<void>;
    };
    vetoVotingVote: {
        (params: IVetoVotingVoteParams): Promise<boolean>;
    };
    private assign;
}
export declare module OAXDEX_Administrator {
    interface AddAdminEvent {
        admin: string;
        _event: Event;
    }
    interface RemoveAdminEvent {
        admin: string;
        _event: Event;
    }
    interface SetMaxAdminEvent {
        maxAdmin: BigNumber;
        _event: Event;
    }
    interface VotedFactoryRestartEvent {
        admin: string;
        factory: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedFactoryShutdownEvent {
        admin: string;
        factory: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedPairRestartEvent {
        admin: string;
        pair: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedPairShutdownEvent {
        admin: string;
        pair: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedVetoEvent {
        admin: string;
        votingContract: string;
        YorN: boolean;
        _event: Event;
    }
}
