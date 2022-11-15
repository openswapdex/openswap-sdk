import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    oaxToken: string;
    votingToken: string;
    names: string[];
    minExeDelay: (number | BigNumber)[];
    minVoteDuration: (number | BigNumber)[];
    maxVoteDuration: (number | BigNumber)[];
    minOaxTokenToCreateVote: (number | BigNumber)[];
    minQuorum: (number | BigNumber)[];
    minStakePeriod: number | BigNumber;
}
export interface IAddVotingConfigParams {
    name: string;
    minExeDelay: number | BigNumber;
    minVoteDuration: number | BigNumber;
    maxVoteDuration: number | BigNumber;
    minOaxTokenToCreateVote: number | BigNumber;
    minQuorum: number | BigNumber;
}
export interface IGetVotingConfigProfilesParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetVotingsParams {
    start: number | BigNumber;
    count: number | BigNumber;
}
export interface INewVoteParams {
    vote: string;
    isExecutiveVote: boolean;
}
export interface ISetVotingConfigParams {
    configName: string;
    paramName: string;
    paramValue: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IVotedParams {
    poll: boolean;
    account: string;
    option: number | BigNumber;
}
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
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
    addVotingConfig: {
        (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams) => Promise<void>;
    };
    admin: {
        (): Promise<string>;
    };
    allVotings: {
        (): Promise<string[]>;
    };
    closeVote: {
        (vote: string): Promise<TransactionReceipt>;
        call: (vote: string) => Promise<void>;
    };
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    freezedStake: {
        (param1: string): Promise<{
            amount: BigNumber;
            timestamp: BigNumber;
        }>;
    };
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    };
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams): Promise<string[]>;
    };
    getVotingCount: {
        (): Promise<BigNumber>;
    };
    getVotingParams: {
        (name: string): Promise<{
            _minExeDelay: BigNumber;
            _minVoteDuration: BigNumber;
            _maxVoteDuration: BigNumber;
            _minOaxTokenToCreateVote: BigNumber;
            _minQuorum: BigNumber;
        }>;
    };
    getVotings: {
        (params: IGetVotingsParams): Promise<string[]>;
    };
    initAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    initVotingExecutor: {
        (votingExecutor: string[]): Promise<TransactionReceipt>;
        call: (votingExecutor: string[]) => Promise<void>;
    };
    isVotingContract: {
        (votingContract: string): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string): Promise<boolean>;
    };
    minStakePeriod: {
        (): Promise<BigNumber>;
    };
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    };
    oaxToken: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setMinStakePeriod: {
        (minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
        call: (minStakePeriod: number | BigNumber) => Promise<void>;
    };
    setVotingConfig: {
        (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams) => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    };
    setVotingRegister: {
        (votingRegister: string): Promise<TransactionReceipt>;
        call: (votingRegister: string) => Promise<void>;
    };
    stake: {
        (value: number | BigNumber): Promise<TransactionReceipt>;
        call: (value: number | BigNumber) => Promise<void>;
    };
    stakeOf: {
        (param1: string): Promise<BigNumber>;
    };
    totalStake: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    unlockStake: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    unstake: {
        (value: number | BigNumber): Promise<TransactionReceipt>;
        call: (value: number | BigNumber) => Promise<void>;
    };
    veto: {
        (voting: string): Promise<TransactionReceipt>;
        call: (voting: string) => Promise<void>;
    };
    voteCount: {
        (): Promise<BigNumber>;
    };
    voted: {
        (params: IVotedParams): Promise<TransactionReceipt>;
        call: (params: IVotedParams) => Promise<void>;
    };
    votingConfigProfiles: {
        (param1: number | BigNumber): Promise<string>;
    };
    votingConfigProfilesLength: {
        (): Promise<BigNumber>;
    };
    votingConfigs: {
        (param1: string): Promise<{
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minOaxTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
        }>;
    };
    votingExecutor: {
        (param1: number | BigNumber): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (): Promise<BigNumber>;
    };
    votingIdx: {
        (param1: string): Promise<BigNumber>;
    };
    votingRegister: {
        (): Promise<string>;
    };
    votingToken: {
        (): Promise<string>;
    };
    votings: {
        (param1: number | BigNumber): Promise<string>;
    };
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
