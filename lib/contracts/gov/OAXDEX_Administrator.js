"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_Administrator = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OAXDEX_Administrator_json_1 = __importDefault(require("./OAXDEX_Administrator.json"));
class OAXDEX_Administrator extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_Administrator_json_1.default.abi, OAXDEX_Administrator_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    parseAddAdminEvent(receipt) {
        return this.parseEvents(receipt, "AddAdmin").map(e => this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt) {
        return this.parseEvents(receipt, "RemoveAdmin").map(e => this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseSetMaxAdminEvent(receipt) {
        return this.parseEvents(receipt, "SetMaxAdmin").map(e => this.decodeSetMaxAdminEvent(e));
    }
    decodeSetMaxAdminEvent(event) {
        let result = event.data;
        return {
            maxAdmin: new eth_wallet_1.BigNumber(result.maxAdmin),
            _event: event
        };
    }
    parseVotedFactoryRestartEvent(receipt) {
        return this.parseEvents(receipt, "VotedFactoryRestart").map(e => this.decodeVotedFactoryRestartEvent(e));
    }
    decodeVotedFactoryRestartEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedFactoryShutdownEvent(receipt) {
        return this.parseEvents(receipt, "VotedFactoryShutdown").map(e => this.decodeVotedFactoryShutdownEvent(e));
    }
    decodeVotedFactoryShutdownEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairRestartEvent(receipt) {
        return this.parseEvents(receipt, "VotedPairRestart").map(e => this.decodeVotedPairRestartEvent(e));
    }
    decodeVotedPairRestartEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairShutdownEvent(receipt) {
        return this.parseEvents(receipt, "VotedPairShutdown").map(e => this.decodeVotedPairShutdownEvent(e));
    }
    decodeVotedPairShutdownEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedVetoEvent(receipt) {
        return this.parseEvents(receipt, "VotedVeto").map(e => this.decodeVotedVetoEvent(e));
    }
    decodeVotedVetoEvent(event) {
        let result = event.data;
        return {
            admin: result.admin,
            votingContract: result.votingContract,
            YorN: result.YorN,
            _event: event
        };
    }
    async addAdmin_send(admin) {
        let result = await this.send('addAdmin', [admin]);
        return result;
    }
    async addAdmin_call(admin) {
        let result = await this.call('addAdmin', [admin]);
        return;
    }
    async admins(param1) {
        let result = await this.call('admins', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async adminsIdx(param1) {
        let result = await this.call('adminsIdx', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async allAdmins() {
        let result = await this.call('allAdmins');
        return result;
    }
    async executeFactoryRestart_send(factory) {
        let result = await this.send('executeFactoryRestart', [factory]);
        return result;
    }
    async executeFactoryRestart_call(factory) {
        let result = await this.call('executeFactoryRestart', [factory]);
        return;
    }
    async executeFactoryShutdown_send(factory) {
        let result = await this.send('executeFactoryShutdown', [factory]);
        return result;
    }
    async executeFactoryShutdown_call(factory) {
        let result = await this.call('executeFactoryShutdown', [factory]);
        return;
    }
    async executePairRestart_send(params) {
        let result = await this.send('executePairRestart', [params.factory, params.pair]);
        return result;
    }
    async executePairRestart_call(params) {
        let result = await this.call('executePairRestart', [params.factory, params.pair]);
        return;
    }
    async executePairShutdown_send(params) {
        let result = await this.send('executePairShutdown', [params.factory, params.pair]);
        return result;
    }
    async executePairShutdown_call(params) {
        let result = await this.call('executePairShutdown', [params.factory, params.pair]);
        return;
    }
    async executeVetoVoting_send(votingContract) {
        let result = await this.send('executeVetoVoting', [votingContract]);
        return result;
    }
    async executeVetoVoting_call(votingContract) {
        let result = await this.call('executeVetoVoting', [votingContract]);
        return;
    }
    async factoryRestart_send(params) {
        let result = await this.send('factoryRestart', [params.factory, params.YorN]);
        return result;
    }
    async factoryRestart_call(params) {
        let result = await this.call('factoryRestart', [params.factory, params.YorN]);
        return;
    }
    async factoryRestartVote(params) {
        let result = await this.call('factoryRestartVote', [params.param1, params.param2]);
        return result;
    }
    async factoryShutdown_send(params) {
        let result = await this.send('factoryShutdown', [params.factory, params.YorN]);
        return result;
    }
    async factoryShutdown_call(params) {
        let result = await this.call('factoryShutdown', [params.factory, params.YorN]);
        return;
    }
    async factoryShutdownVote(params) {
        let result = await this.call('factoryShutdownVote', [params.param1, params.param2]);
        return result;
    }
    async getFactoryRestartVote(factory) {
        let result = await this.call('getFactoryRestartVote', [factory]);
        return result;
    }
    async getFactoryShutdownVote(factory) {
        let result = await this.call('getFactoryShutdownVote', [factory]);
        return result;
    }
    async getPairRestartVote(pair) {
        let result = await this.call('getPairRestartVote', [pair]);
        return result;
    }
    async getPairShutdownVote(pair) {
        let result = await this.call('getPairShutdownVote', [pair]);
        return result;
    }
    async getVetoVotingVote(votingContract) {
        let result = await this.call('getVetoVotingVote', [votingContract]);
        return result;
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async maxAdmin() {
        let result = await this.call('maxAdmin');
        return new eth_wallet_1.BigNumber(result);
    }
    async pairRestart_send(params) {
        let result = await this.send('pairRestart', [params.pair, params.YorN]);
        return result;
    }
    async pairRestart_call(params) {
        let result = await this.call('pairRestart', [params.pair, params.YorN]);
        return;
    }
    async pairRestartVote(params) {
        let result = await this.call('pairRestartVote', [params.param1, params.param2]);
        return result;
    }
    async pairShutdown_send(params) {
        let result = await this.send('pairShutdown', [params.pair, params.YorN]);
        return result;
    }
    async pairShutdown_call(params) {
        let result = await this.call('pairShutdown', [params.pair, params.YorN]);
        return;
    }
    async pairShutdownVote(params) {
        let result = await this.call('pairShutdownVote', [params.param1, params.param2]);
        return result;
    }
    async removeAdmin_send(admin) {
        let result = await this.send('removeAdmin', [admin]);
        return result;
    }
    async removeAdmin_call(admin) {
        let result = await this.call('removeAdmin', [admin]);
        return;
    }
    async setMaxAdmin_send(maxAdmin) {
        let result = await this.send('setMaxAdmin', [eth_wallet_1.Utils.toString(maxAdmin)]);
        return result;
    }
    async setMaxAdmin_call(maxAdmin) {
        let result = await this.call('setMaxAdmin', [eth_wallet_1.Utils.toString(maxAdmin)]);
        return;
    }
    async vetoVoting_send(params) {
        let result = await this.send('vetoVoting', [params.votingContract, params.YorN]);
        return result;
    }
    async vetoVoting_call(params) {
        let result = await this.call('vetoVoting', [params.votingContract, params.YorN]);
        return;
    }
    async vetoVotingVote(params) {
        let result = await this.call('vetoVotingVote', [params.param1, params.param2]);
        return result;
    }
    assign() {
        this.addAdmin = Object.assign(this.addAdmin_send, { call: this.addAdmin_call });
        this.executeFactoryRestart = Object.assign(this.executeFactoryRestart_send, { call: this.executeFactoryRestart_call });
        this.executeFactoryShutdown = Object.assign(this.executeFactoryShutdown_send, { call: this.executeFactoryShutdown_call });
        this.executePairRestart = Object.assign(this.executePairRestart_send, { call: this.executePairRestart_call });
        this.executePairShutdown = Object.assign(this.executePairShutdown_send, { call: this.executePairShutdown_call });
        this.executeVetoVoting = Object.assign(this.executeVetoVoting_send, { call: this.executeVetoVoting_call });
        this.factoryRestart = Object.assign(this.factoryRestart_send, { call: this.factoryRestart_call });
        this.factoryShutdown = Object.assign(this.factoryShutdown_send, { call: this.factoryShutdown_call });
        this.pairRestart = Object.assign(this.pairRestart_send, { call: this.pairRestart_call });
        this.pairShutdown = Object.assign(this.pairShutdown_send, { call: this.pairShutdown_call });
        this.removeAdmin = Object.assign(this.removeAdmin_send, { call: this.removeAdmin_call });
        this.setMaxAdmin = Object.assign(this.setMaxAdmin_send, { call: this.setMaxAdmin_call });
        this.vetoVoting = Object.assign(this.vetoVoting_send, { call: this.vetoVoting_call });
    }
}
exports.OAXDEX_Administrator = OAXDEX_Administrator;
