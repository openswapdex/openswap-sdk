import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OAXDEX_Governance.json";

export class OAXDEX_Governance extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{oaxToken:string,votingToken:string,names:string[],minExeDelay:(number|BigNumber)[],minVoteDuration:(number|BigNumber)[],maxVoteDuration:(number|BigNumber)[],minOaxTokenToCreateVote:(number|BigNumber)[],minQuorum:(number|BigNumber)[],minStakePeriod:number|BigNumber}): Promise<string>{
        return this._deploy(params.oaxToken,params.votingToken,Utils.stringToBytes32(params.names),Utils.toString(params.minExeDelay),Utils.toString(params.minVoteDuration),Utils.toString(params.maxVoteDuration),Utils.toString(params.minOaxTokenToCreateVote),Utils.toString(params.minQuorum),Utils.toString(params.minStakePeriod));
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
    async addVotingConfig_send(params:{name:string,minExeDelay:number|BigNumber,minVoteDuration:number|BigNumber,maxVoteDuration:number|BigNumber,minOaxTokenToCreateVote:number|BigNumber,minQuorum:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addVotingConfig',[Utils.stringToBytes32(params.name),Utils.toString(params.minExeDelay),Utils.toString(params.minVoteDuration),Utils.toString(params.maxVoteDuration),Utils.toString(params.minOaxTokenToCreateVote),Utils.toString(params.minQuorum)]);
        return result;
    }
    async addVotingConfig_call(params:{name:string,minExeDelay:number|BigNumber,minVoteDuration:number|BigNumber,maxVoteDuration:number|BigNumber,minOaxTokenToCreateVote:number|BigNumber,minQuorum:number|BigNumber}): Promise<void>{
        let result = await this.call('addVotingConfig',[Utils.stringToBytes32(params.name),Utils.toString(params.minExeDelay),Utils.toString(params.minVoteDuration),Utils.toString(params.maxVoteDuration),Utils.toString(params.minOaxTokenToCreateVote),Utils.toString(params.minQuorum)]);
        return;
    }
    addVotingConfig: {
        (params:{name:string,minExeDelay:number|BigNumber,minVoteDuration:number|BigNumber,maxVoteDuration:number|BigNumber,minOaxTokenToCreateVote:number|BigNumber,minQuorum:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{name:string,minExeDelay:number|BigNumber,minVoteDuration:number|BigNumber,maxVoteDuration:number|BigNumber,minOaxTokenToCreateVote:number|BigNumber,minQuorum:number|BigNumber}) => Promise<void>;
    }
    async admin(): Promise<string>{
        let result = await this.call('admin');
        return result;
    }
    async allVotings(): Promise<string[]>{
        let result = await this.call('allVotings');
        return result;
    }
    async closeVote_send(vote:string): Promise<TransactionReceipt>{
        let result = await this.send('closeVote',[vote]);
        return result;
    }
    async closeVote_call(vote:string): Promise<void>{
        let result = await this.call('closeVote',[vote]);
        return;
    }
    closeVote: {
        (vote:string): Promise<TransactionReceipt>;
        call: (vote:string) => Promise<void>;
    }
    async executed_send(): Promise<TransactionReceipt>{
        let result = await this.send('executed');
        return result;
    }
    async executed_call(): Promise<void>{
        let result = await this.call('executed');
        return;
    }
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async freezedStake(param1:string): Promise<{amount:BigNumber,timestamp:BigNumber}>{
        let result = await this.call('freezedStake',[param1]);
        return {
            amount: new BigNumber(result.amount),
            timestamp: new BigNumber(result.timestamp)
        };
    }
    async getNewVoteId_send(): Promise<TransactionReceipt>{
        let result = await this.send('getNewVoteId');
        return result;
    }
    async getNewVoteId_call(): Promise<BigNumber>{
        let result = await this.call('getNewVoteId');
        return new BigNumber(result);
    }
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    }
    async getVotingConfigProfiles(params:{start:number|BigNumber,length:number|BigNumber}): Promise<string[]>{
        let result = await this.call('getVotingConfigProfiles',[Utils.toString(params.start),Utils.toString(params.length)]);
        return result;
    }
    async getVotingCount(): Promise<BigNumber>{
        let result = await this.call('getVotingCount');
        return new BigNumber(result);
    }
    async getVotingParams(name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minOaxTokenToCreateVote:BigNumber,_minQuorum:BigNumber}>{
        let result = await this.call('getVotingParams',[Utils.stringToBytes32(name)]);
        return {
            _minExeDelay: new BigNumber(result._minExeDelay),
            _minVoteDuration: new BigNumber(result._minVoteDuration),
            _maxVoteDuration: new BigNumber(result._maxVoteDuration),
            _minOaxTokenToCreateVote: new BigNumber(result._minOaxTokenToCreateVote),
            _minQuorum: new BigNumber(result._minQuorum)
        };
    }
    async getVotings(params:{start:number|BigNumber,count:number|BigNumber}): Promise<string[]>{
        let result = await this.call('getVotings',[Utils.toString(params.start),Utils.toString(params.count)]);
        return result;
    }
    async initAdmin_send(admin:string): Promise<TransactionReceipt>{
        let result = await this.send('initAdmin',[admin]);
        return result;
    }
    async initAdmin_call(admin:string): Promise<void>{
        let result = await this.call('initAdmin',[admin]);
        return;
    }
    initAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    async initVotingExecutor_send(votingExecutor:string[]): Promise<TransactionReceipt>{
        let result = await this.send('initVotingExecutor',[votingExecutor]);
        return result;
    }
    async initVotingExecutor_call(votingExecutor:string[]): Promise<void>{
        let result = await this.call('initVotingExecutor',[votingExecutor]);
        return;
    }
    initVotingExecutor: {
        (votingExecutor:string[]): Promise<TransactionReceipt>;
        call: (votingExecutor:string[]) => Promise<void>;
    }
    async isVotingContract(votingContract:string): Promise<boolean>{
        let result = await this.call('isVotingContract',[votingContract]);
        return result;
    }
    async isVotingExecutor(param1:string): Promise<boolean>{
        let result = await this.call('isVotingExecutor',[param1]);
        return result;
    }
    async minStakePeriod(): Promise<BigNumber>{
        let result = await this.call('minStakePeriod');
        return new BigNumber(result);
    }
    async newVote_send(params:{vote:string,isExecutiveVote:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('newVote',[params.vote,params.isExecutiveVote]);
        return result;
    }
    async newVote_call(params:{vote:string,isExecutiveVote:boolean}): Promise<void>{
        let result = await this.call('newVote',[params.vote,params.isExecutiveVote]);
        return;
    }
    newVote: {
        (params:{vote:string,isExecutiveVote:boolean}): Promise<TransactionReceipt>;
        call: (params:{vote:string,isExecutiveVote:boolean}) => Promise<void>;
    }
    async oaxToken(): Promise<string>{
        let result = await this.call('oaxToken');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async renounceOwnership_send(): Promise<TransactionReceipt>{
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call(): Promise<void>{
        let result = await this.call('renounceOwnership');
        return;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async setAdmin_send(admin:string): Promise<TransactionReceipt>{
        let result = await this.send('setAdmin',[admin]);
        return result;
    }
    async setAdmin_call(admin:string): Promise<void>{
        let result = await this.call('setAdmin',[admin]);
        return;
    }
    setAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    async setMinStakePeriod_send(minStakePeriod:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setMinStakePeriod',[Utils.toString(minStakePeriod)]);
        return result;
    }
    async setMinStakePeriod_call(minStakePeriod:number|BigNumber): Promise<void>{
        let result = await this.call('setMinStakePeriod',[Utils.toString(minStakePeriod)]);
        return;
    }
    setMinStakePeriod: {
        (minStakePeriod:number|BigNumber): Promise<TransactionReceipt>;
        call: (minStakePeriod:number|BigNumber) => Promise<void>;
    }
    async setVotingConfig_send(params:{configName:string,paramName:string,paramValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setVotingConfig',[Utils.stringToBytes32(params.configName),Utils.stringToBytes32(params.paramName),Utils.toString(params.paramValue)]);
        return result;
    }
    async setVotingConfig_call(params:{configName:string,paramName:string,paramValue:number|BigNumber}): Promise<void>{
        let result = await this.call('setVotingConfig',[Utils.stringToBytes32(params.configName),Utils.stringToBytes32(params.paramName),Utils.toString(params.paramValue)]);
        return;
    }
    setVotingConfig: {
        (params:{configName:string,paramName:string,paramValue:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{configName:string,paramName:string,paramValue:number|BigNumber}) => Promise<void>;
    }
    async setVotingExecutor_send(params:{votingExecutor:string,bool:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('setVotingExecutor',[params.votingExecutor,params.bool]);
        return result;
    }
    async setVotingExecutor_call(params:{votingExecutor:string,bool:boolean}): Promise<void>{
        let result = await this.call('setVotingExecutor',[params.votingExecutor,params.bool]);
        return;
    }
    setVotingExecutor: {
        (params:{votingExecutor:string,bool:boolean}): Promise<TransactionReceipt>;
        call: (params:{votingExecutor:string,bool:boolean}) => Promise<void>;
    }
    async setVotingRegister_send(votingRegister:string): Promise<TransactionReceipt>{
        let result = await this.send('setVotingRegister',[votingRegister]);
        return result;
    }
    async setVotingRegister_call(votingRegister:string): Promise<void>{
        let result = await this.call('setVotingRegister',[votingRegister]);
        return;
    }
    setVotingRegister: {
        (votingRegister:string): Promise<TransactionReceipt>;
        call: (votingRegister:string) => Promise<void>;
    }
    async stake_send(value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('stake',[Utils.toString(value)]);
        return result;
    }
    async stake_call(value:number|BigNumber): Promise<void>{
        let result = await this.call('stake',[Utils.toString(value)]);
        return;
    }
    stake: {
        (value:number|BigNumber): Promise<TransactionReceipt>;
        call: (value:number|BigNumber) => Promise<void>;
    }
    async stakeOf(param1:string): Promise<BigNumber>{
        let result = await this.call('stakeOf',[param1]);
        return new BigNumber(result);
    }
    async totalStake(): Promise<BigNumber>{
        let result = await this.call('totalStake');
        return new BigNumber(result);
    }
    async transferOwnership_send(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.send('transferOwnership',[newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner:string): Promise<void>{
        let result = await this.call('transferOwnership',[newOwner]);
        return;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    async unlockStake_send(): Promise<TransactionReceipt>{
        let result = await this.send('unlockStake');
        return result;
    }
    async unlockStake_call(): Promise<void>{
        let result = await this.call('unlockStake');
        return;
    }
    unlockStake: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async unstake_send(value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('unstake',[Utils.toString(value)]);
        return result;
    }
    async unstake_call(value:number|BigNumber): Promise<void>{
        let result = await this.call('unstake',[Utils.toString(value)]);
        return;
    }
    unstake: {
        (value:number|BigNumber): Promise<TransactionReceipt>;
        call: (value:number|BigNumber) => Promise<void>;
    }
    async veto_send(voting:string): Promise<TransactionReceipt>{
        let result = await this.send('veto',[voting]);
        return result;
    }
    async veto_call(voting:string): Promise<void>{
        let result = await this.call('veto',[voting]);
        return;
    }
    veto: {
        (voting:string): Promise<TransactionReceipt>;
        call: (voting:string) => Promise<void>;
    }
    async voteCount(): Promise<BigNumber>{
        let result = await this.call('voteCount');
        return new BigNumber(result);
    }
    async voted_send(params:{poll:boolean,account:string,option:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('voted',[params.poll,params.account,Utils.toString(params.option)]);
        return result;
    }
    async voted_call(params:{poll:boolean,account:string,option:number|BigNumber}): Promise<void>{
        let result = await this.call('voted',[params.poll,params.account,Utils.toString(params.option)]);
        return;
    }
    voted: {
        (params:{poll:boolean,account:string,option:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{poll:boolean,account:string,option:number|BigNumber}) => Promise<void>;
    }
    async votingConfigProfiles(param1:number|BigNumber): Promise<string>{
        let result = await this.call('votingConfigProfiles',[Utils.toString(param1)]);
        return result;
    }
    async votingConfigProfilesLength(): Promise<BigNumber>{
        let result = await this.call('votingConfigProfilesLength');
        return new BigNumber(result);
    }
    async votingConfigs(param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}>{
        let result = await this.call('votingConfigs',[Utils.stringToBytes32(param1)]);
        return {
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum)
        };
    }
    async votingExecutor(param1:number|BigNumber): Promise<string>{
        let result = await this.call('votingExecutor',[Utils.toString(param1)]);
        return result;
    }
    async votingExecutorInv(param1:string): Promise<BigNumber>{
        let result = await this.call('votingExecutorInv',[param1]);
        return new BigNumber(result);
    }
    async votingExecutorLength(): Promise<BigNumber>{
        let result = await this.call('votingExecutorLength');
        return new BigNumber(result);
    }
    async votingIdx(param1:string): Promise<BigNumber>{
        let result = await this.call('votingIdx',[param1]);
        return new BigNumber(result);
    }
    async votingRegister(): Promise<string>{
        let result = await this.call('votingRegister');
        return result;
    }
    async votingToken(): Promise<string>{
        let result = await this.call('votingToken');
        return result;
    }
    async votings(param1:number|BigNumber): Promise<string>{
        let result = await this.call('votings',[Utils.toString(param1)]);
        return result;
    }
    private assign(){
        this.addVotingConfig = Object.assign(this.addVotingConfig_send, {call:this.addVotingConfig_call});
        this.closeVote = Object.assign(this.closeVote_send, {call:this.closeVote_call});
        this.executed = Object.assign(this.executed_send, {call:this.executed_call});
        this.getNewVoteId = Object.assign(this.getNewVoteId_send, {call:this.getNewVoteId_call});
        this.initAdmin = Object.assign(this.initAdmin_send, {call:this.initAdmin_call});
        this.initVotingExecutor = Object.assign(this.initVotingExecutor_send, {call:this.initVotingExecutor_call});
        this.newVote = Object.assign(this.newVote_send, {call:this.newVote_call});
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, {call:this.renounceOwnership_call});
        this.setAdmin = Object.assign(this.setAdmin_send, {call:this.setAdmin_call});
        this.setMinStakePeriod = Object.assign(this.setMinStakePeriod_send, {call:this.setMinStakePeriod_call});
        this.setVotingConfig = Object.assign(this.setVotingConfig_send, {call:this.setVotingConfig_call});
        this.setVotingExecutor = Object.assign(this.setVotingExecutor_send, {call:this.setVotingExecutor_call});
        this.setVotingRegister = Object.assign(this.setVotingRegister_send, {call:this.setVotingRegister_call});
        this.stake = Object.assign(this.stake_send, {call:this.stake_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
        this.unlockStake = Object.assign(this.unlockStake_send, {call:this.unlockStake_call});
        this.unstake = Object.assign(this.unstake_send, {call:this.unstake_call});
        this.veto = Object.assign(this.veto_send, {call:this.veto_call});
        this.voted = Object.assign(this.voted_send, {call:this.voted_call});
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