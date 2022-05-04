import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    addAdmin_send(admin: string): Promise<TransactionReceipt>;
    addAdmin_call(admin: string): Promise<void>;
    addAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    admins(param1: number | BigNumber): Promise<string>;
    adminsIdx(param1: string): Promise<BigNumber>;
    allAdmins(): Promise<string[]>;
    executeFactoryRestart_send(factory: string): Promise<TransactionReceipt>;
    executeFactoryRestart_call(factory: string): Promise<void>;
    executeFactoryRestart: {
        (factory: string): Promise<TransactionReceipt>;
        call: (factory: string) => Promise<void>;
    };
    executeFactoryShutdown_send(factory: string): Promise<TransactionReceipt>;
    executeFactoryShutdown_call(factory: string): Promise<void>;
    executeFactoryShutdown: {
        (factory: string): Promise<TransactionReceipt>;
        call: (factory: string) => Promise<void>;
    };
    executePairRestart_send(params: {
        factory: string;
        pair: string;
    }): Promise<TransactionReceipt>;
    executePairRestart_call(params: {
        factory: string;
        pair: string;
    }): Promise<void>;
    executePairRestart: {
        (params: {
            factory: string;
            pair: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            pair: string;
        }) => Promise<void>;
    };
    executePairShutdown_send(params: {
        factory: string;
        pair: string;
    }): Promise<TransactionReceipt>;
    executePairShutdown_call(params: {
        factory: string;
        pair: string;
    }): Promise<void>;
    executePairShutdown: {
        (params: {
            factory: string;
            pair: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            pair: string;
        }) => Promise<void>;
    };
    executeVetoVoting_send(votingContract: string): Promise<TransactionReceipt>;
    executeVetoVoting_call(votingContract: string): Promise<void>;
    executeVetoVoting: {
        (votingContract: string): Promise<TransactionReceipt>;
        call: (votingContract: string) => Promise<void>;
    };
    factoryRestart_send(params: {
        factory: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    factoryRestart_call(params: {
        factory: string;
        YorN: boolean;
    }): Promise<void>;
    factoryRestart: {
        (params: {
            factory: string;
            YorN: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            YorN: boolean;
        }) => Promise<void>;
    };
    factoryRestartVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    factoryShutdown_send(params: {
        factory: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    factoryShutdown_call(params: {
        factory: string;
        YorN: boolean;
    }): Promise<void>;
    factoryShutdown: {
        (params: {
            factory: string;
            YorN: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            YorN: boolean;
        }) => Promise<void>;
    };
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
    pairRestart_send(params: {
        pair: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    pairRestart_call(params: {
        pair: string;
        YorN: boolean;
    }): Promise<void>;
    pairRestart: {
        (params: {
            pair: string;
            YorN: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            pair: string;
            YorN: boolean;
        }) => Promise<void>;
    };
    pairRestartVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    pairShutdown_send(params: {
        pair: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    pairShutdown_call(params: {
        pair: string;
        YorN: boolean;
    }): Promise<void>;
    pairShutdown: {
        (params: {
            pair: string;
            YorN: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            pair: string;
            YorN: boolean;
        }) => Promise<void>;
    };
    pairShutdownVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    removeAdmin_send(admin: string): Promise<TransactionReceipt>;
    removeAdmin_call(admin: string): Promise<void>;
    removeAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setMaxAdmin_send(maxAdmin: number | BigNumber): Promise<TransactionReceipt>;
    setMaxAdmin_call(maxAdmin: number | BigNumber): Promise<void>;
    setMaxAdmin: {
        (maxAdmin: number | BigNumber): Promise<TransactionReceipt>;
        call: (maxAdmin: number | BigNumber) => Promise<void>;
    };
    vetoVoting_send(params: {
        votingContract: string;
        YorN: boolean;
    }): Promise<TransactionReceipt>;
    vetoVoting_call(params: {
        votingContract: string;
        YorN: boolean;
    }): Promise<void>;
    vetoVoting: {
        (params: {
            votingContract: string;
            YorN: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            votingContract: string;
            YorN: boolean;
        }) => Promise<void>;
    };
    vetoVotingVote(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
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
