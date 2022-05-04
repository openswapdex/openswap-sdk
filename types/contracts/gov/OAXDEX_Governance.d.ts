import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        oaxToken: string;
        votingToken: string;
        names: string[];
        minExeDelay: (number | BigNumber)[];
        minVoteDuration: (number | BigNumber)[];
        maxVoteDuration: (number | BigNumber)[];
        minOaxTokenToCreateVote: (number | BigNumber)[];
        minQuorum: (number | BigNumber)[];
        minStakePeriod: number | BigNumber;
    }): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[];
    decodeAddVotingConfigEvent(event: Event): OAXDEX_Governance.AddVotingConfigEvent;
    parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[];
    decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent;
    parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[];
    decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent;
    parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[];
    decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event;
    parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[];
    decodePollEvent(event: Event): OAXDEX_Governance.PollEvent;
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[];
    decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent;
    parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[];
    decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent;
    parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[];
    decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent;
    parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[];
    decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent;
    addVotingConfig_send(params: {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addVotingConfig_call(params: {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }): Promise<void>;
    addVotingConfig: {
        (params: {
            name: string;
            minExeDelay: number | BigNumber;
            minVoteDuration: number | BigNumber;
            maxVoteDuration: number | BigNumber;
            minOaxTokenToCreateVote: number | BigNumber;
            minQuorum: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            name: string;
            minExeDelay: number | BigNumber;
            minVoteDuration: number | BigNumber;
            maxVoteDuration: number | BigNumber;
            minOaxTokenToCreateVote: number | BigNumber;
            minQuorum: number | BigNumber;
        }) => Promise<void>;
    };
    admin(): Promise<string>;
    allVotings(): Promise<string[]>;
    closeVote_send(vote: string): Promise<TransactionReceipt>;
    closeVote_call(vote: string): Promise<void>;
    closeVote: {
        (vote: string): Promise<TransactionReceipt>;
        call: (vote: string) => Promise<void>;
    };
    executed_send(): Promise<TransactionReceipt>;
    executed_call(): Promise<void>;
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    freezedStake(param1: string): Promise<{
        amount: BigNumber;
        timestamp: BigNumber;
    }>;
    getNewVoteId_send(): Promise<TransactionReceipt>;
    getNewVoteId_call(): Promise<BigNumber>;
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    };
    getVotingConfigProfiles(params: {
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<string[]>;
    getVotingCount(): Promise<BigNumber>;
    getVotingParams(name: string): Promise<{
        _minExeDelay: BigNumber;
        _minVoteDuration: BigNumber;
        _maxVoteDuration: BigNumber;
        _minOaxTokenToCreateVote: BigNumber;
        _minQuorum: BigNumber;
    }>;
    getVotings(params: {
        start: number | BigNumber;
        count: number | BigNumber;
    }): Promise<string[]>;
    initAdmin_send(admin: string): Promise<TransactionReceipt>;
    initAdmin_call(admin: string): Promise<void>;
    initAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    initVotingExecutor_send(votingExecutor: string[]): Promise<TransactionReceipt>;
    initVotingExecutor_call(votingExecutor: string[]): Promise<void>;
    initVotingExecutor: {
        (votingExecutor: string[]): Promise<TransactionReceipt>;
        call: (votingExecutor: string[]) => Promise<void>;
    };
    isVotingContract(votingContract: string): Promise<boolean>;
    isVotingExecutor(param1: string): Promise<boolean>;
    minStakePeriod(): Promise<BigNumber>;
    newVote_send(params: {
        vote: string;
        isExecutiveVote: boolean;
    }): Promise<TransactionReceipt>;
    newVote_call(params: {
        vote: string;
        isExecutiveVote: boolean;
    }): Promise<void>;
    newVote: {
        (params: {
            vote: string;
            isExecutiveVote: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            vote: string;
            isExecutiveVote: boolean;
        }) => Promise<void>;
    };
    oaxToken(): Promise<string>;
    owner(): Promise<string>;
    renounceOwnership_send(): Promise<TransactionReceipt>;
    renounceOwnership_call(): Promise<void>;
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setAdmin_send(admin: string): Promise<TransactionReceipt>;
    setAdmin_call(admin: string): Promise<void>;
    setAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setMinStakePeriod_send(minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
    setMinStakePeriod_call(minStakePeriod: number | BigNumber): Promise<void>;
    setMinStakePeriod: {
        (minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
        call: (minStakePeriod: number | BigNumber) => Promise<void>;
    };
    setVotingConfig_send(params: {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setVotingConfig_call(params: {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }): Promise<void>;
    setVotingConfig: {
        (params: {
            configName: string;
            paramName: string;
            paramValue: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            configName: string;
            paramName: string;
            paramValue: number | BigNumber;
        }) => Promise<void>;
    };
    setVotingExecutor_send(params: {
        votingExecutor: string;
        bool: boolean;
    }): Promise<TransactionReceipt>;
    setVotingExecutor_call(params: {
        votingExecutor: string;
        bool: boolean;
    }): Promise<void>;
    setVotingExecutor: {
        (params: {
            votingExecutor: string;
            bool: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            votingExecutor: string;
            bool: boolean;
        }) => Promise<void>;
    };
    setVotingRegister_send(votingRegister: string): Promise<TransactionReceipt>;
    setVotingRegister_call(votingRegister: string): Promise<void>;
    setVotingRegister: {
        (votingRegister: string): Promise<TransactionReceipt>;
        call: (votingRegister: string) => Promise<void>;
    };
    stake_send(value: number | BigNumber): Promise<TransactionReceipt>;
    stake_call(value: number | BigNumber): Promise<void>;
    stake: {
        (value: number | BigNumber): Promise<TransactionReceipt>;
        call: (value: number | BigNumber) => Promise<void>;
    };
    stakeOf(param1: string): Promise<BigNumber>;
    totalStake(): Promise<BigNumber>;
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    unlockStake_send(): Promise<TransactionReceipt>;
    unlockStake_call(): Promise<void>;
    unlockStake: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    unstake_send(value: number | BigNumber): Promise<TransactionReceipt>;
    unstake_call(value: number | BigNumber): Promise<void>;
    unstake: {
        (value: number | BigNumber): Promise<TransactionReceipt>;
        call: (value: number | BigNumber) => Promise<void>;
    };
    veto_send(voting: string): Promise<TransactionReceipt>;
    veto_call(voting: string): Promise<void>;
    veto: {
        (voting: string): Promise<TransactionReceipt>;
        call: (voting: string) => Promise<void>;
    };
    voteCount(): Promise<BigNumber>;
    voted_send(params: {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }): Promise<TransactionReceipt>;
    voted_call(params: {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }): Promise<void>;
    voted: {
        (params: {
            poll: boolean;
            account: string;
            option: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            poll: boolean;
            account: string;
            option: number | BigNumber;
        }) => Promise<void>;
    };
    votingConfigProfiles(param1: number | BigNumber): Promise<string>;
    votingConfigProfilesLength(): Promise<BigNumber>;
    votingConfigs(param1: string): Promise<{
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
    }>;
    votingExecutor(param1: number | BigNumber): Promise<string>;
    votingExecutorInv(param1: string): Promise<BigNumber>;
    votingExecutorLength(): Promise<BigNumber>;
    votingIdx(param1: string): Promise<BigNumber>;
    votingRegister(): Promise<string>;
    votingToken(): Promise<string>;
    votings(param1: number | BigNumber): Promise<string>;
    private assign;
}
export declare module OAXDEX_Governance {
    interface AddVotingConfigEvent {
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
        _event: Event;
    }
    interface ExecutedEvent {
        vote: string;
        _event: Event;
    }
    interface NewPollEvent {
        poll: string;
        _event: Event;
    }
    interface NewVoteEvent {
        vote: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface PollEvent {
        account: string;
        poll: string;
        option: BigNumber;
        _event: Event;
    }
    interface SetVotingConfigEvent {
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        who: string;
        value: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        who: string;
        value: BigNumber;
        _event: Event;
    }
    interface VetoEvent {
        vote: string;
        _event: Event;
    }
    interface VoteEvent {
        account: string;
        vote: string;
        option: BigNumber;
        _event: Event;
    }
}
