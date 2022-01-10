"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_Administrator = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/gov/OAXDEX_Administrator.json");
class OAXDEX_Administrator extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    parseAddAdminEvent(receipt) {
        let events = this.parseEvents(receipt, "AddAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin
            };
        });
    }
    parseRemoveAdminEvent(receipt) {
        let events = this.parseEvents(receipt, "RemoveAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin
            };
        });
    }
    parseSetMaxAdminEvent(receipt) {
        let events = this.parseEvents(receipt, "SetMaxAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                maxAdmin: new eth_wallet_1.BigNumber(result.maxAdmin)
            };
        });
    }
    parseVotedFactoryRestartEvent(receipt) {
        let events = this.parseEvents(receipt, "VotedFactoryRestart");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                factory: result.factory,
                YorN: result.YorN
            };
        });
    }
    parseVotedFactoryShutdownEvent(receipt) {
        let events = this.parseEvents(receipt, "VotedFactoryShutdown");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                factory: result.factory,
                YorN: result.YorN
            };
        });
    }
    parseVotedPairRestartEvent(receipt) {
        let events = this.parseEvents(receipt, "VotedPairRestart");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                pair: result.pair,
                YorN: result.YorN
            };
        });
    }
    parseVotedPairShutdownEvent(receipt) {
        let events = this.parseEvents(receipt, "VotedPairShutdown");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                pair: result.pair,
                YorN: result.YorN
            };
        });
    }
    parseVotedVetoEvent(receipt) {
        let events = this.parseEvents(receipt, "VotedVeto");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                votingContract: result.votingContract,
                YorN: result.YorN
            };
        });
    }
    async addAdmin(admin) {
        let result = await this.methods('addAdmin', admin);
        return result;
    }
    async admins(param1) {
        let result = await this.methods('admins', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async adminsIdx(param1) {
        let result = await this.methods('adminsIdx', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async allAdmins() {
        let result = await this.methods('allAdmins');
        return result;
    }
    async executeFactoryRestart(factory) {
        let result = await this.methods('executeFactoryRestart', factory);
        return result;
    }
    async executeFactoryShutdown(factory) {
        let result = await this.methods('executeFactoryShutdown', factory);
        return result;
    }
    async executePairRestart(params) {
        let result = await this.methods('executePairRestart', params.factory, params.pair);
        return result;
    }
    async executePairShutdown(params) {
        let result = await this.methods('executePairShutdown', params.factory, params.pair);
        return result;
    }
    async executeVetoVoting(votingContract) {
        let result = await this.methods('executeVetoVoting', votingContract);
        return result;
    }
    async factoryRestart(params) {
        let result = await this.methods('factoryRestart', params.factory, params.YorN);
        return result;
    }
    async factoryRestartVote(params) {
        let result = await this.methods('factoryRestartVote', params.param1, params.param2);
        return result;
    }
    async factoryShutdown(params) {
        let result = await this.methods('factoryShutdown', params.factory, params.YorN);
        return result;
    }
    async factoryShutdownVote(params) {
        let result = await this.methods('factoryShutdownVote', params.param1, params.param2);
        return result;
    }
    async getFactoryRestartVote(factory) {
        let result = await this.methods('getFactoryRestartVote', factory);
        return result;
    }
    async getFactoryShutdownVote(factory) {
        let result = await this.methods('getFactoryShutdownVote', factory);
        return result;
    }
    async getPairRestartVote(pair) {
        let result = await this.methods('getPairRestartVote', pair);
        return result;
    }
    async getPairShutdownVote(pair) {
        let result = await this.methods('getPairShutdownVote', pair);
        return result;
    }
    async getVetoVotingVote(votingContract) {
        let result = await this.methods('getVetoVotingVote', votingContract);
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async maxAdmin() {
        let result = await this.methods('maxAdmin');
        return new eth_wallet_1.BigNumber(result);
    }
    async pairRestart(params) {
        let result = await this.methods('pairRestart', params.pair, params.YorN);
        return result;
    }
    async pairRestartVote(params) {
        let result = await this.methods('pairRestartVote', params.param1, params.param2);
        return result;
    }
    async pairShutdown(params) {
        let result = await this.methods('pairShutdown', params.pair, params.YorN);
        return result;
    }
    async pairShutdownVote(params) {
        let result = await this.methods('pairShutdownVote', params.param1, params.param2);
        return result;
    }
    async removeAdmin(admin) {
        let result = await this.methods('removeAdmin', admin);
        return result;
    }
    async setMaxAdmin(maxAdmin) {
        let result = await this.methods('setMaxAdmin', eth_wallet_1.Utils.toString(maxAdmin));
        return result;
    }
    async vetoVoting(params) {
        let result = await this.methods('vetoVoting', params.votingContract, params.YorN);
        return result;
    }
    async vetoVotingVote(params) {
        let result = await this.methods('vetoVotingVote', params.param1, params.param2);
        return result;
    }
}
exports.OAXDEX_Administrator = OAXDEX_Administrator;
