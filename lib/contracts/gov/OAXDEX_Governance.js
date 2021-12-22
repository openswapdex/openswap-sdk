"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_Governance = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/gov/OAXDEX_Governance.json");
class OAXDEX_Governance extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.oaxToken, eth_wallet_1.Utils.stringToBytes32(params.names), eth_wallet_1.Utils.toString(params.minExeDelay), eth_wallet_1.Utils.toString(params.minVoteDuration), eth_wallet_1.Utils.toString(params.maxVoteDuration), eth_wallet_1.Utils.toString(params.minOaxTokenToCreateVote), eth_wallet_1.Utils.toString(params.minQuorum), eth_wallet_1.Utils.toString(params.minStakePeriod));
    }
    parseAddVotingConfigEvent(receipt) {
        let events = this.parseEvents(receipt, "AddVotingConfig");
        return events.map(result => {
            return {
                name: result.name,
                minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay),
                minVoteDuration: new eth_wallet_1.BigNumber(result.minVoteDuration),
                maxVoteDuration: new eth_wallet_1.BigNumber(result.maxVoteDuration),
                minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result.minOaxTokenToCreateVote),
                minQuorum: new eth_wallet_1.BigNumber(result.minQuorum)
            };
        });
    }
    parseExecutedEvent(receipt) {
        let events = this.parseEvents(receipt, "Executed");
        return events.map(result => {
            return {
                vote: result.vote
            };
        });
    }
    parseNewPollEvent(receipt) {
        let events = this.parseEvents(receipt, "NewPoll");
        return events.map(result => {
            return {
                poll: result.poll
            };
        });
    }
    parseNewVoteEvent(receipt) {
        let events = this.parseEvents(receipt, "NewVote");
        return events.map(result => {
            return {
                vote: result.vote
            };
        });
    }
    parseOwnershipTransferredEvent(receipt) {
        let events = this.parseEvents(receipt, "OwnershipTransferred");
        return events.map(result => {
            return {
                previousOwner: result.previousOwner,
                newOwner: result.newOwner
            };
        });
    }
    parseParamSetEvent(receipt) {
        let events = this.parseEvents(receipt, "ParamSet");
        return events.map(result => {
            return {
                name: result.name,
                value: result.value
            };
        });
    }
    parseParamSet2Event(receipt) {
        let events = this.parseEvents(receipt, "ParamSet2");
        return events.map(result => {
            return {
                name: result.name,
                value1: result.value1,
                value2: result.value2
            };
        });
    }
    parsePollEvent(receipt) {
        let events = this.parseEvents(receipt, "Poll");
        return events.map(result => {
            return {
                account: result.account,
                poll: result.poll,
                option: new eth_wallet_1.BigNumber(result.option)
            };
        });
    }
    parseSetVotingConfigEvent(receipt) {
        let events = this.parseEvents(receipt, "SetVotingConfig");
        return events.map(result => {
            return {
                configName: result.configName,
                paramName: result.paramName,
                minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay)
            };
        });
    }
    parseStakeEvent(receipt) {
        let events = this.parseEvents(receipt, "Stake");
        return events.map(result => {
            return {
                who: result.who,
                value: new eth_wallet_1.BigNumber(result.value)
            };
        });
    }
    parseUnstakeEvent(receipt) {
        let events = this.parseEvents(receipt, "Unstake");
        return events.map(result => {
            return {
                who: result.who,
                value: new eth_wallet_1.BigNumber(result.value)
            };
        });
    }
    parseVetoEvent(receipt) {
        let events = this.parseEvents(receipt, "Veto");
        return events.map(result => {
            return {
                vote: result.vote
            };
        });
    }
    parseVoteEvent(receipt) {
        let events = this.parseEvents(receipt, "Vote");
        return events.map(result => {
            return {
                account: result.account,
                vote: result.vote,
                option: new eth_wallet_1.BigNumber(result.option)
            };
        });
    }
    async addVotingConfig(params) {
        let result = await this.methods('addVotingConfig', eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.toString(params.minExeDelay), eth_wallet_1.Utils.toString(params.minVoteDuration), eth_wallet_1.Utils.toString(params.maxVoteDuration), eth_wallet_1.Utils.toString(params.minOaxTokenToCreateVote), eth_wallet_1.Utils.toString(params.minQuorum));
        return result;
    }
    async admin() {
        let result = await this.methods('admin');
        return result;
    }
    async allVotings() {
        let result = await this.methods('allVotings');
        return result;
    }
    async closeVote(vote) {
        let result = await this.methods('closeVote', vote);
        return result;
    }
    async executed() {
        let result = await this.methods('executed');
        return result;
    }
    async freezedStake(param1) {
        let result = await this.methods('freezedStake', param1);
        return {
            amount: new eth_wallet_1.BigNumber(result.amount),
            timestamp: new eth_wallet_1.BigNumber(result.timestamp)
        };
    }
    async getNewVoteId() {
        let result = await this.methods('getNewVoteId');
        return result;
    }
    async getVotingConfigProfiles(params) {
        let result = await this.methods('getVotingConfigProfiles', eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length));
        return result;
    }
    async getVotingCount() {
        let result = await this.methods('getVotingCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async getVotingParams(name) {
        let result = await this.methods('getVotingParams', eth_wallet_1.Utils.stringToBytes32(name));
        return {
            _minExeDelay: new eth_wallet_1.BigNumber(result._minExeDelay),
            _minVoteDuration: new eth_wallet_1.BigNumber(result._minVoteDuration),
            _maxVoteDuration: new eth_wallet_1.BigNumber(result._maxVoteDuration),
            _minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result._minOaxTokenToCreateVote),
            _minQuorum: new eth_wallet_1.BigNumber(result._minQuorum)
        };
    }
    async getVotings(params) {
        let result = await this.methods('getVotings', eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.count));
        return result;
    }
    async initAdmin(admin) {
        let result = await this.methods('initAdmin', admin);
        return result;
    }
    async initVotingExecutor(votingExecutor) {
        let result = await this.methods('initVotingExecutor', votingExecutor);
        return result;
    }
    async isVotingContract(votingContract) {
        let result = await this.methods('isVotingContract', votingContract);
        return result;
    }
    async isVotingExecutor(param1) {
        let result = await this.methods('isVotingExecutor', param1);
        return result;
    }
    async minStakePeriod() {
        let result = await this.methods('minStakePeriod');
        return new eth_wallet_1.BigNumber(result);
    }
    async newVote(params) {
        let result = await this.methods('newVote', params.vote, params.isExecutiveVote);
        return result;
    }
    async oaxToken() {
        let result = await this.methods('oaxToken');
        return result;
    }
    async owner() {
        let result = await this.methods('owner');
        return result;
    }
    async renounceOwnership() {
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async setAdmin(admin) {
        let result = await this.methods('setAdmin', admin);
        return result;
    }
    async setMinStakePeriod(minStakePeriod) {
        let result = await this.methods('setMinStakePeriod', eth_wallet_1.Utils.toString(minStakePeriod));
        return result;
    }
    async setVotingConfig(params) {
        let result = await this.methods('setVotingConfig', eth_wallet_1.Utils.stringToBytes32(params.configName), eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.toString(params.paramValue));
        return result;
    }
    async setVotingExecutor(params) {
        let result = await this.methods('setVotingExecutor', params.votingExecutor, params.bool);
        return result;
    }
    async setVotingRegister(votingRegister) {
        let result = await this.methods('setVotingRegister', votingRegister);
        return result;
    }
    async stake(value) {
        let result = await this.methods('stake', eth_wallet_1.Utils.toString(value));
        return result;
    }
    async stakeOf(param1) {
        let result = await this.methods('stakeOf', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async totalStake() {
        let result = await this.methods('totalStake');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
    async unlockStake() {
        let result = await this.methods('unlockStake');
        return result;
    }
    async unstake(value) {
        let result = await this.methods('unstake', eth_wallet_1.Utils.toString(value));
        return result;
    }
    async veto(voting) {
        let result = await this.methods('veto', voting);
        return result;
    }
    async voteCount() {
        let result = await this.methods('voteCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async voted(params) {
        let result = await this.methods('voted', params.poll, params.account, eth_wallet_1.Utils.toString(params.option));
        return result;
    }
    async votingConfigProfiles(param1) {
        let result = await this.methods('votingConfigProfiles', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async votingConfigProfilesLength() {
        let result = await this.methods('votingConfigProfilesLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async votingConfigs(param1) {
        let result = await this.methods('votingConfigs', eth_wallet_1.Utils.stringToBytes32(param1));
        return {
            minExeDelay: new eth_wallet_1.BigNumber(result.minExeDelay),
            minVoteDuration: new eth_wallet_1.BigNumber(result.minVoteDuration),
            maxVoteDuration: new eth_wallet_1.BigNumber(result.maxVoteDuration),
            minOaxTokenToCreateVote: new eth_wallet_1.BigNumber(result.minOaxTokenToCreateVote),
            minQuorum: new eth_wallet_1.BigNumber(result.minQuorum)
        };
    }
    async votingExecutor(param1) {
        let result = await this.methods('votingExecutor', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async votingExecutorInv(param1) {
        let result = await this.methods('votingExecutorInv', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async votingExecutorLength() {
        let result = await this.methods('votingExecutorLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async votingIdx(param1) {
        let result = await this.methods('votingIdx', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async votingRegister() {
        let result = await this.methods('votingRegister');
        return result;
    }
    async votings(param1) {
        let result = await this.methods('votings', eth_wallet_1.Utils.toString(param1));
        return result;
    }
}
exports.OAXDEX_Governance = OAXDEX_Governance;
