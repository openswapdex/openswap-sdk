import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: Wallet, address?: string);
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
    addVotingConfig(params: {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }): Promise<TransactionReceipt>;
    admin(): Promise<string>;
    allVotings(): Promise<string[]>;
    closeVote(vote: string): Promise<TransactionReceipt>;
    executed(): Promise<TransactionReceipt>;
    freezedStake(param1: string): Promise<{
        amount: BigNumber;
        timestamp: BigNumber;
    }>;
    getNewVoteId(): Promise<TransactionReceipt>;
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
    initAdmin(admin: string): Promise<TransactionReceipt>;
    initVotingExecutor(votingExecutor: string[]): Promise<TransactionReceipt>;
    isVotingContract(votingContract: string): Promise<boolean>;
    isVotingExecutor(param1: string): Promise<boolean>;
    minStakePeriod(): Promise<BigNumber>;
    newVote(params: {
        vote: string;
        isExecutiveVote: boolean;
    }): Promise<TransactionReceipt>;
    oaxToken(): Promise<string>;
    owner(): Promise<string>;
    renounceOwnership(): Promise<TransactionReceipt>;
    setAdmin(admin: string): Promise<TransactionReceipt>;
    setMinStakePeriod(minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
    setVotingConfig(params: {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setVotingExecutor(params: {
        votingExecutor: string;
        bool: boolean;
    }): Promise<TransactionReceipt>;
    setVotingRegister(votingRegister: string): Promise<TransactionReceipt>;
    stake(value: number | BigNumber): Promise<TransactionReceipt>;
    stakeOf(param1: string): Promise<BigNumber>;
    totalStake(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
    unlockStake(): Promise<TransactionReceipt>;
    unstake(value: number | BigNumber): Promise<TransactionReceipt>;
    veto(voting: string): Promise<TransactionReceipt>;
    voteCount(): Promise<BigNumber>;
    voted(params: {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }): Promise<TransactionReceipt>;
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
}
export declare module OAXDEX_Governance {
    interface AddVotingConfigEvent {
        _event: Event;
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
    }
    interface ExecutedEvent {
        _event: Event;
        vote: string;
    }
    interface NewPollEvent {
        _event: Event;
        poll: string;
    }
    interface NewVoteEvent {
        _event: Event;
        vote: string;
    }
    interface OwnershipTransferredEvent {
        _event: Event;
        previousOwner: string;
        newOwner: string;
    }
    interface ParamSetEvent {
        _event: Event;
        name: string;
        value: string;
    }
    interface ParamSet2Event {
        _event: Event;
        name: string;
        value1: string;
        value2: string;
    }
    interface PollEvent {
        _event: Event;
        account: string;
        poll: string;
        option: BigNumber;
    }
    interface SetVotingConfigEvent {
        _event: Event;
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
    }
    interface StakeEvent {
        _event: Event;
        who: string;
        value: BigNumber;
    }
    interface UnstakeEvent {
        _event: Event;
        who: string;
        value: BigNumber;
    }
    interface VetoEvent {
        _event: Event;
        vote: string;
    }
    interface VoteEvent {
        _event: Event;
        account: string;
        vote: string;
        option: BigNumber;
    }
}
