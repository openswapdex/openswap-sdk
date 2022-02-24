import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_Governance.json");

export class OAXDEX_Governance extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
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
            _event:event,
            name: result.name,
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum)
        };
    }
    parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[]{
        return this.parseEvents(receipt, "Executed").map(e=>this.decodeExecutedEvent(e));
    }
    decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent{
        let result = event.data;
        return {
            _event:event,
            vote: result.vote
        };
    }
    parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[]{
        return this.parseEvents(receipt, "NewPoll").map(e=>this.decodeNewPollEvent(e));
    }
    decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent{
        let result = event.data;
        return {
            _event:event,
            poll: result.poll
        };
    }
    parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[]{
        return this.parseEvents(receipt, "NewVote").map(e=>this.decodeNewVoteEvent(e));
    }
    decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent{
        let result = event.data;
        return {
            _event:event,
            vote: result.vote
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent{
        let result = event.data;
        return {
            _event:event,
            previousOwner: result.previousOwner,
            newOwner: result.newOwner
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent{
        let result = event.data;
        return {
            _event:event,
            name: result.name,
            value: result.value
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event{
        let result = event.data;
        return {
            _event:event,
            name: result.name,
            value1: result.value1,
            value2: result.value2
        };
    }
    parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[]{
        return this.parseEvents(receipt, "Poll").map(e=>this.decodePollEvent(e));
    }
    decodePollEvent(event: Event): OAXDEX_Governance.PollEvent{
        let result = event.data;
        return {
            _event:event,
            account: result.account,
            poll: result.poll,
            option: new BigNumber(result.option)
        };
    }
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[]{
        return this.parseEvents(receipt, "SetVotingConfig").map(e=>this.decodeSetVotingConfigEvent(e));
    }
    decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent{
        let result = event.data;
        return {
            _event:event,
            configName: result.configName,
            paramName: result.paramName,
            minExeDelay: new BigNumber(result.minExeDelay)
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent{
        let result = event.data;
        return {
            _event:event,
            who: result.who,
            value: new BigNumber(result.value)
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent{
        let result = event.data;
        return {
            _event:event,
            who: result.who,
            value: new BigNumber(result.value)
        };
    }
    parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[]{
        return this.parseEvents(receipt, "Veto").map(e=>this.decodeVetoEvent(e));
    }
    decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent{
        let result = event.data;
        return {
            _event:event,
            vote: result.vote
        };
    }
    parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[]{
        return this.parseEvents(receipt, "Vote").map(e=>this.decodeVoteEvent(e));
    }
    decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent{
        let result = event.data;
        return {
            _event:event,
            account: result.account,
            vote: result.vote,
            option: new BigNumber(result.option)
        };
    }
    async addVotingConfig(params:{name:string,minExeDelay:number|BigNumber,minVoteDuration:number|BigNumber,maxVoteDuration:number|BigNumber,minOaxTokenToCreateVote:number|BigNumber,minQuorum:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addVotingConfig',Utils.stringToBytes32(params.name),Utils.toString(params.minExeDelay),Utils.toString(params.minVoteDuration),Utils.toString(params.maxVoteDuration),Utils.toString(params.minOaxTokenToCreateVote),Utils.toString(params.minQuorum));
        return result;
    }
    async admin(): Promise<string>{
        let result = await this.methods('admin');
        return result;
    }
    async allVotings(): Promise<string[]>{
        let result = await this.methods('allVotings');
        return result;
    }
    async closeVote(vote:string): Promise<TransactionReceipt>{
        let result = await this.methods('closeVote',vote);
        return result;
    }
    async executed(): Promise<TransactionReceipt>{
        let result = await this.methods('executed');
        return result;
    }
    async freezedStake(param1:string): Promise<{amount:BigNumber,timestamp:BigNumber}>{
        let result = await this.methods('freezedStake',param1);
        return {
            amount: new BigNumber(result.amount),
            timestamp: new BigNumber(result.timestamp)
        };
    }
    async getNewVoteId(): Promise<TransactionReceipt>{
        let result = await this.methods('getNewVoteId');
        return result;
    }
    async getVotingConfigProfiles(params:{start:number|BigNumber,length:number|BigNumber}): Promise<string[]>{
        let result = await this.methods('getVotingConfigProfiles',Utils.toString(params.start),Utils.toString(params.length));
        return result;
    }
    async getVotingCount(): Promise<BigNumber>{
        let result = await this.methods('getVotingCount');
        return new BigNumber(result);
    }
    async getVotingParams(name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minOaxTokenToCreateVote:BigNumber,_minQuorum:BigNumber}>{
        let result = await this.methods('getVotingParams',Utils.stringToBytes32(name));
        return {
            _minExeDelay: new BigNumber(result._minExeDelay),
            _minVoteDuration: new BigNumber(result._minVoteDuration),
            _maxVoteDuration: new BigNumber(result._maxVoteDuration),
            _minOaxTokenToCreateVote: new BigNumber(result._minOaxTokenToCreateVote),
            _minQuorum: new BigNumber(result._minQuorum)
        };
    }
    async getVotings(params:{start:number|BigNumber,count:number|BigNumber}): Promise<string[]>{
        let result = await this.methods('getVotings',Utils.toString(params.start),Utils.toString(params.count));
        return result;
    }
    async initAdmin(admin:string): Promise<TransactionReceipt>{
        let result = await this.methods('initAdmin',admin);
        return result;
    }
    async initVotingExecutor(votingExecutor:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('initVotingExecutor',votingExecutor);
        return result;
    }
    async isVotingContract(votingContract:string): Promise<boolean>{
        let result = await this.methods('isVotingContract',votingContract);
        return result;
    }
    async isVotingExecutor(param1:string): Promise<boolean>{
        let result = await this.methods('isVotingExecutor',param1);
        return result;
    }
    async minStakePeriod(): Promise<BigNumber>{
        let result = await this.methods('minStakePeriod');
        return new BigNumber(result);
    }
    async newVote(params:{vote:string,isExecutiveVote:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('newVote',params.vote,params.isExecutiveVote);
        return result;
    }
    async oaxToken(): Promise<string>{
        let result = await this.methods('oaxToken');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async setAdmin(admin:string): Promise<TransactionReceipt>{
        let result = await this.methods('setAdmin',admin);
        return result;
    }
    async setMinStakePeriod(minStakePeriod:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setMinStakePeriod',Utils.toString(minStakePeriod));
        return result;
    }
    async setVotingConfig(params:{configName:string,paramName:string,paramValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setVotingConfig',Utils.stringToBytes32(params.configName),Utils.stringToBytes32(params.paramName),Utils.toString(params.paramValue));
        return result;
    }
    async setVotingExecutor(params:{votingExecutor:string,bool:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setVotingExecutor',params.votingExecutor,params.bool);
        return result;
    }
    async setVotingRegister(votingRegister:string): Promise<TransactionReceipt>{
        let result = await this.methods('setVotingRegister',votingRegister);
        return result;
    }
    async stake(value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('stake',Utils.toString(value));
        return result;
    }
    async stakeOf(param1:string): Promise<BigNumber>{
        let result = await this.methods('stakeOf',param1);
        return new BigNumber(result);
    }
    async totalStake(): Promise<BigNumber>{
        let result = await this.methods('totalStake');
        return new BigNumber(result);
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
    async unlockStake(): Promise<TransactionReceipt>{
        let result = await this.methods('unlockStake');
        return result;
    }
    async unstake(value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('unstake',Utils.toString(value));
        return result;
    }
    async veto(voting:string): Promise<TransactionReceipt>{
        let result = await this.methods('veto',voting);
        return result;
    }
    async voteCount(): Promise<BigNumber>{
        let result = await this.methods('voteCount');
        return new BigNumber(result);
    }
    async voted(params:{poll:boolean,account:string,option:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('voted',params.poll,params.account,Utils.toString(params.option));
        return result;
    }
    async votingConfigProfiles(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('votingConfigProfiles',Utils.toString(param1));
        return result;
    }
    async votingConfigProfilesLength(): Promise<BigNumber>{
        let result = await this.methods('votingConfigProfilesLength');
        return new BigNumber(result);
    }
    async votingConfigs(param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}>{
        let result = await this.methods('votingConfigs',Utils.stringToBytes32(param1));
        return {
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum)
        };
    }
    async votingExecutor(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('votingExecutor',Utils.toString(param1));
        return result;
    }
    async votingExecutorInv(param1:string): Promise<BigNumber>{
        let result = await this.methods('votingExecutorInv',param1);
        return new BigNumber(result);
    }
    async votingExecutorLength(): Promise<BigNumber>{
        let result = await this.methods('votingExecutorLength');
        return new BigNumber(result);
    }
    async votingIdx(param1:string): Promise<BigNumber>{
        let result = await this.methods('votingIdx',param1);
        return new BigNumber(result);
    }
    async votingRegister(): Promise<string>{
        let result = await this.methods('votingRegister');
        return result;
    }
    async votingToken(): Promise<string>{
        let result = await this.methods('votingToken');
        return result;
    }
    async votings(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('votings',Utils.toString(param1));
        return result;
    }
}
export module OAXDEX_Governance{
    export interface AddVotingConfigEvent {_event:Event,name:string,minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}
    export interface ExecutedEvent {_event:Event,vote:string}
    export interface NewPollEvent {_event:Event,poll:string}
    export interface NewVoteEvent {_event:Event,vote:string}
    export interface OwnershipTransferredEvent {_event:Event,previousOwner:string,newOwner:string}
    export interface ParamSetEvent {_event:Event,name:string,value:string}
    export interface ParamSet2Event {_event:Event,name:string,value1:string,value2:string}
    export interface PollEvent {_event:Event,account:string,poll:string,option:BigNumber}
    export interface SetVotingConfigEvent {_event:Event,configName:string,paramName:string,minExeDelay:BigNumber}
    export interface StakeEvent {_event:Event,who:string,value:BigNumber}
    export interface UnstakeEvent {_event:Event,who:string,value:BigNumber}
    export interface VetoEvent {_event:Event,vote:string}
    export interface VoteEvent {_event:Event,account:string,vote:string,option:BigNumber}
}