import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_Governance.json";

export interface IDeployParams {oaxToken:string;votingToken:string;names:string[];minExeDelay:(number|BigNumber)[];minVoteDuration:(number|BigNumber)[];maxVoteDuration:(number|BigNumber)[];minOaxTokenToCreateVote:(number|BigNumber)[];minQuorum:(number|BigNumber)[];minStakePeriod:number|BigNumber}
export interface IAddVotingConfigParams {name:string;minExeDelay:number|BigNumber;minVoteDuration:number|BigNumber;maxVoteDuration:number|BigNumber;minOaxTokenToCreateVote:number|BigNumber;minQuorum:number|BigNumber}
export interface IGetVotingConfigProfilesParams {start:number|BigNumber;length:number|BigNumber}
export interface IGetVotingsParams {start:number|BigNumber;count:number|BigNumber}
export interface INewVoteParams {vote:string;isExecutiveVote:boolean}
export interface ISetVotingConfigParams {configName:string;paramName:string;paramValue:number|BigNumber}
export interface ISetVotingExecutorParams {votingExecutor:string;bool:boolean}
export interface IVotedParams {poll:boolean;account:string;option:number|BigNumber}
export class OAXDEX_Governance extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.oaxToken,params.votingToken,this.wallet.utils.stringToBytes32(params.names),this.wallet.utils.toString(params.minExeDelay),this.wallet.utils.toString(params.minVoteDuration),this.wallet.utils.toString(params.maxVoteDuration),this.wallet.utils.toString(params.minOaxTokenToCreateVote),this.wallet.utils.toString(params.minQuorum),this.wallet.utils.toString(params.minStakePeriod)]);
    }
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[]{
        return this.parseEvents(receipt, "AddVotingConfig").map(e=>this.decodeAddVotingConfigEvent(e));
    }
    decodeAddVotingConfigEvent(event: Event): OAXDEX_Governance.AddVotingConfigEvent{
        let result = event.data;
        return {
            name: result.name,
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum),
            _event: event
        };
    }
    parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[]{
        return this.parseEvents(receipt, "Executed").map(e=>this.decodeExecutedEvent(e));
    }
    decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[]{
        return this.parseEvents(receipt, "NewPoll").map(e=>this.decodeNewPollEvent(e));
    }
    decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent{
        let result = event.data;
        return {
            poll: result.poll,
            _event: event
        };
    }
    parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[]{
        return this.parseEvents(receipt, "NewVote").map(e=>this.decodeNewVoteEvent(e));
    }
    decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[]{
        return this.parseEvents(receipt, "Poll").map(e=>this.decodePollEvent(e));
    }
    decodePollEvent(event: Event): OAXDEX_Governance.PollEvent{
        let result = event.data;
        return {
            account: result.account,
            poll: result.poll,
            option: new BigNumber(result.option),
            _event: event
        };
    }
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[]{
        return this.parseEvents(receipt, "SetVotingConfig").map(e=>this.decodeSetVotingConfigEvent(e));
    }
    decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent{
        let result = event.data;
        return {
            configName: result.configName,
            paramName: result.paramName,
            minExeDelay: new BigNumber(result.minExeDelay),
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent{
        let result = event.data;
        return {
            who: result.who,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent{
        let result = event.data;
        return {
            who: result.who,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[]{
        return this.parseEvents(receipt, "Veto").map(e=>this.decodeVetoEvent(e));
    }
    decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[]{
        return this.parseEvents(receipt, "Vote").map(e=>this.decodeVoteEvent(e));
    }
    decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent{
        let result = event.data;
        return {
            account: result.account,
            vote: result.vote,
            option: new BigNumber(result.option),
            _event: event
        };
    }
    addVotingConfig: {
        (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams) => Promise<void>;
    }
    admin: {
        (): Promise<string>;
    }
    allVotings: {
        (): Promise<string[]>;
    }
    closeVote: {
        (vote:string): Promise<TransactionReceipt>;
        call: (vote:string) => Promise<void>;
    }
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    freezedStake: {
        (param1:string): Promise<{amount:BigNumber,timestamp:BigNumber}>;
    }
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    }
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams): Promise<string[]>;
    }
    getVotingCount: {
        (): Promise<BigNumber>;
    }
    getVotingParams: {
        (name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minOaxTokenToCreateVote:BigNumber,_minQuorum:BigNumber}>;
    }
    getVotings: {
        (params: IGetVotingsParams): Promise<string[]>;
    }
    initAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    initVotingExecutor: {
        (votingExecutor:string[]): Promise<TransactionReceipt>;
        call: (votingExecutor:string[]) => Promise<void>;
    }
    isVotingContract: {
        (votingContract:string): Promise<boolean>;
    }
    isVotingExecutor: {
        (param1:string): Promise<boolean>;
    }
    minStakePeriod: {
        (): Promise<BigNumber>;
    }
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    }
    oaxToken: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    setAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    setMinStakePeriod: {
        (minStakePeriod:number|BigNumber): Promise<TransactionReceipt>;
        call: (minStakePeriod:number|BigNumber) => Promise<void>;
    }
    setVotingConfig: {
        (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams) => Promise<void>;
    }
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    }
    setVotingRegister: {
        (votingRegister:string): Promise<TransactionReceipt>;
        call: (votingRegister:string) => Promise<void>;
    }
    stake: {
        (value:number|BigNumber): Promise<TransactionReceipt>;
        call: (value:number|BigNumber) => Promise<void>;
    }
    stakeOf: {
        (param1:string): Promise<BigNumber>;
    }
    totalStake: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    unlockStake: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    unstake: {
        (value:number|BigNumber): Promise<TransactionReceipt>;
        call: (value:number|BigNumber) => Promise<void>;
    }
    veto: {
        (voting:string): Promise<TransactionReceipt>;
        call: (voting:string) => Promise<void>;
    }
    voteCount: {
        (): Promise<BigNumber>;
    }
    voted: {
        (params: IVotedParams): Promise<TransactionReceipt>;
        call: (params: IVotedParams) => Promise<void>;
    }
    votingConfigProfiles: {
        (param1:number|BigNumber): Promise<string>;
    }
    votingConfigProfilesLength: {
        (): Promise<BigNumber>;
    }
    votingConfigs: {
        (param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}>;
    }
    votingExecutor: {
        (param1:number|BigNumber): Promise<string>;
    }
    votingExecutorInv: {
        (param1:string): Promise<BigNumber>;
    }
    votingExecutorLength: {
        (): Promise<BigNumber>;
    }
    votingIdx: {
        (param1:string): Promise<BigNumber>;
    }
    votingRegister: {
        (): Promise<string>;
    }
    votingToken: {
        (): Promise<string>;
    }
    votings: {
        (param1:number|BigNumber): Promise<string>;
    }
    private assign(){
        let admin_call = async (): Promise<string> => {
            let result = await this.call('admin');
            return result;
        }
        this.admin = admin_call
        let allVotings_call = async (): Promise<string[]> => {
            let result = await this.call('allVotings');
            return result;
        }
        this.allVotings = allVotings_call
        let freezedStake_call = async (param1:string): Promise<{amount:BigNumber,timestamp:BigNumber}> => {
            let result = await this.call('freezedStake',[param1]);
            return {
                amount: new BigNumber(result.amount),
                timestamp: new BigNumber(result.timestamp)
            };
        }
        this.freezedStake = freezedStake_call
        let getVotingConfigProfilesParams = (params: IGetVotingConfigProfilesParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getVotingConfigProfiles_call = async (params: IGetVotingConfigProfilesParams): Promise<string[]> => {
            let result = await this.call('getVotingConfigProfiles',getVotingConfigProfilesParams(params));
            return result;
        }
        this.getVotingConfigProfiles = getVotingConfigProfiles_call
        let getVotingCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('getVotingCount');
            return new BigNumber(result);
        }
        this.getVotingCount = getVotingCount_call
        let getVotingParams_call = async (name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minOaxTokenToCreateVote:BigNumber,_minQuorum:BigNumber}> => {
            let result = await this.call('getVotingParams',[this.wallet.utils.stringToBytes32(name)]);
            return {
                _minExeDelay: new BigNumber(result._minExeDelay),
                _minVoteDuration: new BigNumber(result._minVoteDuration),
                _maxVoteDuration: new BigNumber(result._maxVoteDuration),
                _minOaxTokenToCreateVote: new BigNumber(result._minOaxTokenToCreateVote),
                _minQuorum: new BigNumber(result._minQuorum)
            };
        }
        this.getVotingParams = getVotingParams_call
        let getVotingsParams = (params: IGetVotingsParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.count)];
        let getVotings_call = async (params: IGetVotingsParams): Promise<string[]> => {
            let result = await this.call('getVotings',getVotingsParams(params));
            return result;
        }
        this.getVotings = getVotings_call
        let isVotingContract_call = async (votingContract:string): Promise<boolean> => {
            let result = await this.call('isVotingContract',[votingContract]);
            return result;
        }
        this.isVotingContract = isVotingContract_call
        let isVotingExecutor_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isVotingExecutor',[param1]);
            return result;
        }
        this.isVotingExecutor = isVotingExecutor_call
        let minStakePeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('minStakePeriod');
            return new BigNumber(result);
        }
        this.minStakePeriod = minStakePeriod_call
        let oaxToken_call = async (): Promise<string> => {
            let result = await this.call('oaxToken');
            return result;
        }
        this.oaxToken = oaxToken_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let stakeOf_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('stakeOf',[param1]);
            return new BigNumber(result);
        }
        this.stakeOf = stakeOf_call
        let totalStake_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalStake');
            return new BigNumber(result);
        }
        this.totalStake = totalStake_call
        let voteCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteCount');
            return new BigNumber(result);
        }
        this.voteCount = voteCount_call
        let votingConfigProfiles_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votingConfigProfiles',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votingConfigProfiles = votingConfigProfiles_call
        let votingConfigProfilesLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('votingConfigProfilesLength');
            return new BigNumber(result);
        }
        this.votingConfigProfilesLength = votingConfigProfilesLength_call
        let votingConfigs_call = async (param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}> => {
            let result = await this.call('votingConfigs',[this.wallet.utils.stringToBytes32(param1)]);
            return {
                minExeDelay: new BigNumber(result.minExeDelay),
                minVoteDuration: new BigNumber(result.minVoteDuration),
                maxVoteDuration: new BigNumber(result.maxVoteDuration),
                minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
                minQuorum: new BigNumber(result.minQuorum)
            };
        }
        this.votingConfigs = votingConfigs_call
        let votingExecutor_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votingExecutor',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votingExecutor = votingExecutor_call
        let votingExecutorInv_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('votingExecutorInv',[param1]);
            return new BigNumber(result);
        }
        this.votingExecutorInv = votingExecutorInv_call
        let votingExecutorLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('votingExecutorLength');
            return new BigNumber(result);
        }
        this.votingExecutorLength = votingExecutorLength_call
        let votingIdx_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('votingIdx',[param1]);
            return new BigNumber(result);
        }
        this.votingIdx = votingIdx_call
        let votingRegister_call = async (): Promise<string> => {
            let result = await this.call('votingRegister');
            return result;
        }
        this.votingRegister = votingRegister_call
        let votingToken_call = async (): Promise<string> => {
            let result = await this.call('votingToken');
            return result;
        }
        this.votingToken = votingToken_call
        let votings_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votings',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votings = votings_call
        let addVotingConfigParams = (params: IAddVotingConfigParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.toString(params.minExeDelay),this.wallet.utils.toString(params.minVoteDuration),this.wallet.utils.toString(params.maxVoteDuration),this.wallet.utils.toString(params.minOaxTokenToCreateVote),this.wallet.utils.toString(params.minQuorum)];
        let addVotingConfig_send = async (params: IAddVotingConfigParams): Promise<TransactionReceipt> => {
            let result = await this.send('addVotingConfig',addVotingConfigParams(params));
            return result;
        }
        let addVotingConfig_call = async (params: IAddVotingConfigParams): Promise<void> => {
            let result = await this.call('addVotingConfig',addVotingConfigParams(params));
            return;
        }
        this.addVotingConfig = Object.assign(addVotingConfig_send, {
            call:addVotingConfig_call
        });
        let closeVote_send = async (vote:string): Promise<TransactionReceipt> => {
            let result = await this.send('closeVote',[vote]);
            return result;
        }
        let closeVote_call = async (vote:string): Promise<void> => {
            let result = await this.call('closeVote',[vote]);
            return;
        }
        this.closeVote = Object.assign(closeVote_send, {
            call:closeVote_call
        });
        let executed_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('executed');
            return result;
        }
        let executed_call = async (): Promise<void> => {
            let result = await this.call('executed');
            return;
        }
        this.executed = Object.assign(executed_send, {
            call:executed_call
        });
        let getNewVoteId_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('getNewVoteId');
            return result;
        }
        let getNewVoteId_call = async (): Promise<BigNumber> => {
            let result = await this.call('getNewVoteId');
            return new BigNumber(result);
        }
        this.getNewVoteId = Object.assign(getNewVoteId_send, {
            call:getNewVoteId_call
        });
        let initAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAdmin',[admin]);
            return result;
        }
        let initAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('initAdmin',[admin]);
            return;
        }
        this.initAdmin = Object.assign(initAdmin_send, {
            call:initAdmin_call
        });
        let initVotingExecutor_send = async (votingExecutor:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('initVotingExecutor',[votingExecutor]);
            return result;
        }
        let initVotingExecutor_call = async (votingExecutor:string[]): Promise<void> => {
            let result = await this.call('initVotingExecutor',[votingExecutor]);
            return;
        }
        this.initVotingExecutor = Object.assign(initVotingExecutor_send, {
            call:initVotingExecutor_call
        });
        let newVoteParams = (params: INewVoteParams) => [params.vote,params.isExecutiveVote];
        let newVote_send = async (params: INewVoteParams): Promise<TransactionReceipt> => {
            let result = await this.send('newVote',newVoteParams(params));
            return result;
        }
        let newVote_call = async (params: INewVoteParams): Promise<void> => {
            let result = await this.call('newVote',newVoteParams(params));
            return;
        }
        this.newVote = Object.assign(newVote_send, {
            call:newVote_call
        });
        let renounceOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership');
            return result;
        }
        let renounceOwnership_call = async (): Promise<void> => {
            let result = await this.call('renounceOwnership');
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let setAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('setAdmin',[admin]);
            return result;
        }
        let setAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('setAdmin',[admin]);
            return;
        }
        this.setAdmin = Object.assign(setAdmin_send, {
            call:setAdmin_call
        });
        let setMinStakePeriod_send = async (minStakePeriod:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setMinStakePeriod',[this.wallet.utils.toString(minStakePeriod)]);
            return result;
        }
        let setMinStakePeriod_call = async (minStakePeriod:number|BigNumber): Promise<void> => {
            let result = await this.call('setMinStakePeriod',[this.wallet.utils.toString(minStakePeriod)]);
            return;
        }
        this.setMinStakePeriod = Object.assign(setMinStakePeriod_send, {
            call:setMinStakePeriod_call
        });
        let setVotingConfigParams = (params: ISetVotingConfigParams) => [this.wallet.utils.stringToBytes32(params.configName),this.wallet.utils.stringToBytes32(params.paramName),this.wallet.utils.toString(params.paramValue)];
        let setVotingConfig_send = async (params: ISetVotingConfigParams): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingConfig',setVotingConfigParams(params));
            return result;
        }
        let setVotingConfig_call = async (params: ISetVotingConfigParams): Promise<void> => {
            let result = await this.call('setVotingConfig',setVotingConfigParams(params));
            return;
        }
        this.setVotingConfig = Object.assign(setVotingConfig_send, {
            call:setVotingConfig_call
        });
        let setVotingExecutorParams = (params: ISetVotingExecutorParams) => [params.votingExecutor,params.bool];
        let setVotingExecutor_send = async (params: ISetVotingExecutorParams): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingExecutor',setVotingExecutorParams(params));
            return result;
        }
        let setVotingExecutor_call = async (params: ISetVotingExecutorParams): Promise<void> => {
            let result = await this.call('setVotingExecutor',setVotingExecutorParams(params));
            return;
        }
        this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
            call:setVotingExecutor_call
        });
        let setVotingRegister_send = async (votingRegister:string): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingRegister',[votingRegister]);
            return result;
        }
        let setVotingRegister_call = async (votingRegister:string): Promise<void> => {
            let result = await this.call('setVotingRegister',[votingRegister]);
            return;
        }
        this.setVotingRegister = Object.assign(setVotingRegister_send, {
            call:setVotingRegister_call
        });
        let stake_send = async (value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('stake',[this.wallet.utils.toString(value)]);
            return result;
        }
        let stake_call = async (value:number|BigNumber): Promise<void> => {
            let result = await this.call('stake',[this.wallet.utils.toString(value)]);
            return;
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unlockStake_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('unlockStake');
            return result;
        }
        let unlockStake_call = async (): Promise<void> => {
            let result = await this.call('unlockStake');
            return;
        }
        this.unlockStake = Object.assign(unlockStake_send, {
            call:unlockStake_call
        });
        let unstake_send = async (value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',[this.wallet.utils.toString(value)]);
            return result;
        }
        let unstake_call = async (value:number|BigNumber): Promise<void> => {
            let result = await this.call('unstake',[this.wallet.utils.toString(value)]);
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let veto_send = async (voting:string): Promise<TransactionReceipt> => {
            let result = await this.send('veto',[voting]);
            return result;
        }
        let veto_call = async (voting:string): Promise<void> => {
            let result = await this.call('veto',[voting]);
            return;
        }
        this.veto = Object.assign(veto_send, {
            call:veto_call
        });
        let votedParams = (params: IVotedParams) => [params.poll,params.account,this.wallet.utils.toString(params.option)];
        let voted_send = async (params: IVotedParams): Promise<TransactionReceipt> => {
            let result = await this.send('voted',votedParams(params));
            return result;
        }
        let voted_call = async (params: IVotedParams): Promise<void> => {
            let result = await this.call('voted',votedParams(params));
            return;
        }
        this.voted = Object.assign(voted_send, {
            call:voted_call
        });
    }
}
export module OAXDEX_Governance{
    export interface AddVotingConfigEvent {name:string,minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber,_event:Event}
    export interface ExecutedEvent {vote:string,_event:Event}
    export interface NewPollEvent {poll:string,_event:Event}
    export interface NewVoteEvent {vote:string,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface PollEvent {account:string,poll:string,option:BigNumber,_event:Event}
    export interface SetVotingConfigEvent {configName:string,paramName:string,minExeDelay:BigNumber,_event:Event}
    export interface StakeEvent {who:string,value:BigNumber,_event:Event}
    export interface UnstakeEvent {who:string,value:BigNumber,_event:Event}
    export interface VetoEvent {vote:string,_event:Event}
    export interface VoteEvent {account:string,vote:string,option:BigNumber,_event:Event}
}