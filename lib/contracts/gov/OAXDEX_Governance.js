"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_Governance = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OAXDEX_Governance_json_1 = __importDefault(require("./OAXDEX_Governance.json"));
class OAXDEX_Governance extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_Governance_json_1.default.abi, OAXDEX_Governance_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.oaxToken, params.votingToken, eth_wallet_1.Utils.stringToBytes32(params.names), eth_wallet_1.Utils.toString(params.minExeDelay), eth_wallet_1.Utils.toString(params.minVoteDuration), eth_wallet_1.Utils.toString(params.maxVoteDuration), eth_wallet_1.Utils.toString(params.minOaxTokenToCreateVote), eth_wallet_1.Utils.toString(params.minQuorum), eth_wallet_1.Utils.toString(params.minStakePeriod));
    }
    parseAddVotingConfigEvent(receipt) {
        return this.parseEvents(receipt, "AddVotingConfig").map(e => this.decodeAddVotingConfigEvent(e));
    }
    decodeAddVotingConfigEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay),
            minVoteDuration: new eth_wallet_1.BigNumber(result.minVoteDuration),
            maxVoteDuration: new eth_wallet_1.BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new eth_wallet_1.BigNumber(result.minQuorum),
            _event: event
        };
    }
    parseExecutedEvent(receipt) {
        return this.parseEvents(receipt, "Executed").map(e => this.decodeExecutedEvent(e));
    }
    decodeExecutedEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseNewPollEvent(receipt) {
        return this.parseEvents(receipt, "NewPoll").map(e => this.decodeNewPollEvent(e));
    }
    decodeNewPollEvent(event) {
        let result = event.data;
        return {
            poll: result.poll,
            _event: event
        };
    }
    parseNewVoteEvent(receipt) {
        return this.parseEvents(receipt, "NewVote").map(e => this.decodeNewVoteEvent(e));
    }
    decodeNewVoteEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parsePollEvent(receipt) {
        return this.parseEvents(receipt, "Poll").map(e => this.decodePollEvent(e));
    }
    decodePollEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            poll: result.poll,
            option: new eth_wallet_1.BigNumber(result.option),
            _event: event
        };
    }
    parseSetVotingConfigEvent(receipt) {
        return this.parseEvents(receipt, "SetVotingConfig").map(e => this.decodeSetVotingConfigEvent(e));
    }
    decodeSetVotingConfigEvent(event) {
        let result = event.data;
        return {
            configName: result.configName,
            paramName: result.paramName,
            minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay),
            _event: event
        };
    }
    parseStakeEvent(receipt) {
        return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseUnstakeEvent(receipt) {
        return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseVetoEvent(receipt) {
        return this.parseEvents(receipt, "Veto").map(e => this.decodeVetoEvent(e));
    }
    decodeVetoEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseVoteEvent(receipt) {
        return this.parseEvents(receipt, "Vote").map(e => this.decodeVoteEvent(e));
    }
    decodeVoteEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            vote: result.vote,
            option: new eth_wallet_1.BigNumber(result.option),
            _event: event
        };
    }
    async addVotingConfig_send(params) {
        let result = await this.send('addVotingConfig', [eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.toString(params.minExeDelay), eth_wallet_1.Utils.toString(params.minVoteDuration), eth_wallet_1.Utils.toString(params.maxVoteDuration), eth_wallet_1.Utils.toString(params.minOaxTokenToCreateVote), eth_wallet_1.Utils.toString(params.minQuorum)]);
        return result;
    }
    async addVotingConfig_call(params) {
        let result = await this.call('addVotingConfig', [eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.toString(params.minExeDelay), eth_wallet_1.Utils.toString(params.minVoteDuration), eth_wallet_1.Utils.toString(params.maxVoteDuration), eth_wallet_1.Utils.toString(params.minOaxTokenToCreateVote), eth_wallet_1.Utils.toString(params.minQuorum)]);
        return;
    }
    async admin() {
        let result = await this.call('admin');
        return result;
    }
    async allVotings() {
        let result = await this.call('allVotings');
        return result;
    }
    async closeVote_send(vote) {
        let result = await this.send('closeVote', [vote]);
        return result;
    }
    async closeVote_call(vote) {
        let result = await this.call('closeVote', [vote]);
        return;
    }
    async executed_send() {
        let result = await this.send('executed');
        return result;
    }
    async executed_call() {
        let result = await this.call('executed');
        return;
    }
    async freezedStake(param1) {
        let result = await this.call('freezedStake', [param1]);
        return {
            amount: new eth_wallet_1.BigNumber(result.amount),
            timestamp: new eth_wallet_1.BigNumber(result.timestamp)
        };
    }
    async getNewVoteId_send() {
        let result = await this.send('getNewVoteId');
        return result;
    }
    async getNewVoteId_call() {
        let result = await this.call('getNewVoteId');
        return new eth_wallet_1.BigNumber(result);
    }
    async getVotingConfigProfiles(params) {
        let result = await this.call('getVotingConfigProfiles', [eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)]);
        return result;
    }
    async getVotingCount() {
        let result = await this.call('getVotingCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async getVotingParams(name) {
        let result = await this.call('getVotingParams', [eth_wallet_1.Utils.stringToBytes32(name)]);
        return {
            _minExeDelay: new eth_wallet_1.BigNumber(result._minExeDelay),
            _minVoteDuration: new eth_wallet_1.BigNumber(result._minVoteDuration),
            _maxVoteDuration: new eth_wallet_1.BigNumber(result._maxVoteDuration),
            _minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result._minOaxTokenToCreateVote),
            _minQuorum: new eth_wallet_1.BigNumber(result._minQuorum)
        };
    }
    async getVotings(params) {
        let result = await this.call('getVotings', [eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.count)]);
        return result;
    }
    async initAdmin_send(admin) {
        let result = await this.send('initAdmin', [admin]);
        return result;
    }
    async initAdmin_call(admin) {
        let result = await this.call('initAdmin', [admin]);
        return;
    }
    async initVotingExecutor_send(votingExecutor) {
        let result = await this.send('initVotingExecutor', [votingExecutor]);
        return result;
    }
    async initVotingExecutor_call(votingExecutor) {
        let result = await this.call('initVotingExecutor', [votingExecutor]);
        return;
    }
    async isVotingContract(votingContract) {
        let result = await this.call('isVotingContract', [votingContract]);
        return result;
    }
    async isVotingExecutor(param1) {
        let result = await this.call('isVotingExecutor', [param1]);
        return result;
    }
    async minStakePeriod() {
        let result = await this.call('minStakePeriod');
        return new eth_wallet_1.BigNumber(result);
    }
    async newVote_send(params) {
        let result = await this.send('newVote', [params.vote, params.isExecutiveVote]);
        return result;
    }
    async newVote_call(params) {
        let result = await this.call('newVote', [params.vote, params.isExecutiveVote]);
        return;
    }
    async oaxToken() {
        let result = await this.call('oaxToken');
        return result;
    }
    async owner() {
        let result = await this.call('owner');
        return result;
    }
    async renounceOwnership_send() {
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call() {
        let result = await this.call('renounceOwnership');
        return;
    }
    async setAdmin_send(admin) {
        let result = await this.send('setAdmin', [admin]);
        return result;
    }
    async setAdmin_call(admin) {
        let result = await this.call('setAdmin', [admin]);
        return;
    }
    async setMinStakePeriod_send(minStakePeriod) {
        let result = await this.send('setMinStakePeriod', [eth_wallet_1.Utils.toString(minStakePeriod)]);
        return result;
    }
    async setMinStakePeriod_call(minStakePeriod) {
        let result = await this.call('setMinStakePeriod', [eth_wallet_1.Utils.toString(minStakePeriod)]);
        return;
    }
    async setVotingConfig_send(params) {
        let result = await this.send('setVotingConfig', [eth_wallet_1.Utils.stringToBytes32(params.configName), eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.toString(params.paramValue)]);
        return result;
    }
    async setVotingConfig_call(params) {
        let result = await this.call('setVotingConfig', [eth_wallet_1.Utils.stringToBytes32(params.configName), eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.toString(params.paramValue)]);
        return;
    }
    async setVotingExecutor_send(params) {
        let result = await this.send('setVotingExecutor', [params.votingExecutor, params.bool]);
        return result;
    }
    async setVotingExecutor_call(params) {
        let result = await this.call('setVotingExecutor', [params.votingExecutor, params.bool]);
        return;
    }
    async setVotingRegister_send(votingRegister) {
        let result = await this.send('setVotingRegister', [votingRegister]);
        return result;
    }
    async setVotingRegister_call(votingRegister) {
        let result = await this.call('setVotingRegister', [votingRegister]);
        return;
    }
    async stake_send(value) {
        let result = await this.send('stake', [eth_wallet_1.Utils.toString(value)]);
        return result;
    }
    async stake_call(value) {
        let result = await this.call('stake', [eth_wallet_1.Utils.toString(value)]);
        return;
    }
    async stakeOf(param1) {
        let result = await this.call('stakeOf', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async totalStake() {
        let result = await this.call('totalStake');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferOwnership_send(newOwner) {
        let result = await this.send('transferOwnership', [newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner) {
        let result = await this.call('transferOwnership', [newOwner]);
        return;
    }
    async unlockStake_send() {
        let result = await this.send('unlockStake');
        return result;
    }
    async unlockStake_call() {
        let result = await this.call('unlockStake');
        return;
    }
    async unstake_send(value) {
        let result = await this.send('unstake', [eth_wallet_1.Utils.toString(value)]);
        return result;
    }
    async unstake_call(value) {
        let result = await this.call('unstake', [eth_wallet_1.Utils.toString(value)]);
        return;
    }
    async veto_send(voting) {
        let result = await this.send('veto', [voting]);
        return result;
    }
    async veto_call(voting) {
        let result = await this.call('veto', [voting]);
        return;
    }
    async voteCount() {
        let result = await this.call('voteCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async voted_send(params) {
        let result = await this.send('voted', [params.poll, params.account, eth_wallet_1.Utils.toString(params.option)]);
        return result;
    }
    async voted_call(params) {
        let result = await this.call('voted', [params.poll, params.account, eth_wallet_1.Utils.toString(params.option)]);
        return;
    }
    async votingConfigProfiles(param1) {
        let result = await this.call('votingConfigProfiles', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async votingConfigProfilesLength() {
        let result = await this.call('votingConfigProfilesLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async votingConfigs(param1) {
        let result = await this.call('votingConfigs', [eth_wallet_1.Utils.stringToBytes32(param1)]);
        return {
            minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay),
            minVoteDuration: new eth_wallet_1.BigNumber(result.minVoteDuration),
            maxVoteDuration: new eth_wallet_1.BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new eth_wallet_1.BigNumber(result.minQuorum)
        };
    }
    async votingExecutor(param1) {
        let result = await this.call('votingExecutor', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async votingExecutorInv(param1) {
        let result = await this.call('votingExecutorInv', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async votingExecutorLength() {
        let result = await this.call('votingExecutorLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async votingIdx(param1) {
        let result = await this.call('votingIdx', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async votingRegister() {
        let result = await this.call('votingRegister');
        return result;
    }
    async votingToken() {
        let result = await this.call('votingToken');
        return result;
    }
    async votings(param1) {
        let result = await this.call('votings', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    assign() {
        this.addVotingConfig = Object.assign(this.addVotingConfig_send, { call: this.addVotingConfig_call });
        this.closeVote = Object.assign(this.closeVote_send, { call: this.closeVote_call });
        this.executed = Object.assign(this.executed_send, { call: this.executed_call });
        this.getNewVoteId = Object.assign(this.getNewVoteId_send, { call: this.getNewVoteId_call });
        this.initAdmin = Object.assign(this.initAdmin_send, { call: this.initAdmin_call });
        this.initVotingExecutor = Object.assign(this.initVotingExecutor_send, { call: this.initVotingExecutor_call });
        this.newVote = Object.assign(this.newVote_send, { call: this.newVote_call });
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, { call: this.renounceOwnership_call });
        this.setAdmin = Object.assign(this.setAdmin_send, { call: this.setAdmin_call });
        this.setMinStakePeriod = Object.assign(this.setMinStakePeriod_send, { call: this.setMinStakePeriod_call });
        this.setVotingConfig = Object.assign(this.setVotingConfig_send, { call: this.setVotingConfig_call });
        this.setVotingExecutor = Object.assign(this.setVotingExecutor_send, { call: this.setVotingExecutor_call });
        this.setVotingRegister = Object.assign(this.setVotingRegister_send, { call: this.setVotingRegister_call });
        this.stake = Object.assign(this.stake_send, { call: this.stake_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
        this.unlockStake = Object.assign(this.unlockStake_send, { call: this.unlockStake_call });
        this.unstake = Object.assign(this.unstake_send, { call: this.unstake_call });
        this.veto = Object.assign(this.veto_send, { call: this.veto_call });
        this.voted = Object.assign(this.voted_send, { call: this.voted_call });
    }
}
exports.OAXDEX_Governance = OAXDEX_Governance;
