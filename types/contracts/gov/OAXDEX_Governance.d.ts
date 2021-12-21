import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        oaxToken: string;
        names: string[];
        minExeDelay: number[] | BigNumber[];
        minVoteDuration: number[] | BigNumber[];
        maxVoteDuration: number[] | BigNumber[];
        minOaxTokenToCreateVote: number[] | BigNumber[];
        minQuorum: number[] | BigNumber[];
        minStakePeriod: number | BigNumber;
    }): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): {
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
    }[];
    parseExecutedEvent(receipt: TransactionReceipt): string[];
    parseNewPollEvent(receipt: TransactionReceipt): string[];
    parseNewVoteEvent(receipt: TransactionReceipt): string[];
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {
        previousOwner: string;
        newOwner: string;
    }[];
    parseParamSetEvent(receipt: TransactionReceipt): {
        name: string;
        value: string;
    }[];
    parseParamSet2Event(receipt: TransactionReceipt): {
        name: string;
        value1: string;
        value2: string;
    }[];
    parsePollEvent(receipt: TransactionReceipt): {
        account: string;
        poll: string;
        option: BigNumber;
    }[];
    parseSetVotingConfigEvent(receipt: TransactionReceipt): {
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
    }[];
    parseStakeEvent(receipt: TransactionReceipt): {
        who: string;
        value: BigNumber;
    }[];
    parseUnstakeEvent(receipt: TransactionReceipt): {
        who: string;
        value: BigNumber;
    }[];
    parseVetoEvent(receipt: TransactionReceipt): string[];
    parseVoteEvent(receipt: TransactionReceipt): {
        account: string;
        vote: string;
        option: BigNumber;
    }[];
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
    votings(param1: number | BigNumber): Promise<string>;
}
