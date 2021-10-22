import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_Governance.json");

export class OAXDEX_Governance extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{oaxToken:string,names:string[],minExeDelay:number[]|BigNumber[],minVoteDuration:number[]|BigNumber[],maxVoteDuration:number[]|BigNumber[],minOaxTokenToCreateVote:number[]|BigNumber[],minQuorum:number[]|BigNumber[],minStakePeriod:number|BigNumber}): Promise<string>{        	
        return this._deploy(params.oaxToken,Utils.stringToBytes32(params.names),Utils.toString(params.minExeDelay),Utils.toString(params.minVoteDuration),Utils.toString(params.maxVoteDuration),Utils.toString(params.minOaxTokenToCreateVote),Utils.toString(params.minQuorum),Utils.toString(params.minStakePeriod));
    }
    parseAddVotingConfigEvent(receipt: TransactionReceipt): {name:string,minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}[]{
        return this.parseEvents(receipt, "AddVotingConfig");
    }
    parseExecutedEvent(receipt: TransactionReceipt): {vote:string}[]{
        return this.parseEvents(receipt, "Executed");
    }
    parseNewPollEvent(receipt: TransactionReceipt): {poll:string}[]{
        return this.parseEvents(receipt, "NewPoll");
    }
    parseNewVoteEvent(receipt: TransactionReceipt): {vote:string}[]{
        return this.parseEvents(receipt, "NewVote");
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {previousOwner:string,newOwner:string}[]{
        return this.parseEvents(receipt, "OwnershipTransferred");
    }
    parseParamSetEvent(receipt: TransactionReceipt): {name:string,value:string}[]{
        return this.parseEvents(receipt, "ParamSet");
    }
    parseParamSet2Event(receipt: TransactionReceipt): {name:string,value1:string,value2:string}[]{
        return this.parseEvents(receipt, "ParamSet2");
    }
    parsePollEvent(receipt: TransactionReceipt): {account:string,poll:string,option:BigNumber}[]{
        return this.parseEvents(receipt, "Poll");
    }
    parseSetVotingConfigEvent(receipt: TransactionReceipt): {configName:string,paramName:string,minExeDelay:BigNumber}[]{
        return this.parseEvents(receipt, "SetVotingConfig");
    }
    parseStakeEvent(receipt: TransactionReceipt): {who:string,value:BigNumber}[]{
        return this.parseEvents(receipt, "Stake");
    }
    parseUnstakeEvent(receipt: TransactionReceipt): {who:string,value:BigNumber}[]{
        return this.parseEvents(receipt, "Unstake");
    }
    parseVetoEvent(receipt: TransactionReceipt): {vote:string}[]{
        return this.parseEvents(receipt, "Veto");
    }
    parseVoteEvent(receipt: TransactionReceipt): {account:string,vote:string,option:BigNumber}[]{
        return this.parseEvents(receipt, "Vote");
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
        }
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
        let result = await this.methods('getVotingParams',name);
        return {
            _minExeDelay: new BigNumber(result._minExeDelay),
            _minVoteDuration: new BigNumber(result._minVoteDuration),
            _maxVoteDuration: new BigNumber(result._maxVoteDuration),
            _minOaxTokenToCreateVote: new BigNumber(result._minOaxTokenToCreateVote),
            _minQuorum: new BigNumber(result._minQuorum)
        }
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
        let result = await this.methods('setMinStakePeriod',minStakePeriod);
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
        let result = await this.methods('stake',value);
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
        let result = await this.methods('unstake',value);
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
        let result = await this.methods('votingConfigProfiles',param1);
        return result;
    }
    async votingConfigProfilesLength(): Promise<BigNumber>{
        let result = await this.methods('votingConfigProfilesLength');
        return new BigNumber(result);
    }
    async votingConfigs(param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minOaxTokenToCreateVote:BigNumber,minQuorum:BigNumber}>{
        let result = await this.methods('votingConfigs',param1);
        return {
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum)
        }
    }
    async votingExecutor(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('votingExecutor',param1);
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
    async votings(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('votings',param1);
        return result;
    }
}