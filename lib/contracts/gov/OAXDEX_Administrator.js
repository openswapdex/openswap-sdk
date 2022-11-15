"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_Administrator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OAXDEX_Administrator_json_1 = __importDefault(require("./OAXDEX_Administrator.json"));
class OAXDEX_Administrator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_Administrator_json_1.default.abi, OAXDEX_Administrator_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this.__deploy([governance]);
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
            maxAdmin: new eth_contract_1.BigNumber(result.maxAdmin),
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
    assign() {
        let admins_call = async (param1) => {
            let result = await this.call('admins', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.admins = admins_call;
        let adminsIdx_call = async (param1) => {
            let result = await this.call('adminsIdx', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.adminsIdx = adminsIdx_call;
        let allAdmins_call = async () => {
            let result = await this.call('allAdmins');
            return result;
        };
        this.allAdmins = allAdmins_call;
        let factoryRestartVoteParams = (params) => [params.param1, params.param2];
        let factoryRestartVote_call = async (params) => {
            let result = await this.call('factoryRestartVote', factoryRestartVoteParams(params));
            return result;
        };
        this.factoryRestartVote = factoryRestartVote_call;
        let factoryShutdownVoteParams = (params) => [params.param1, params.param2];
        let factoryShutdownVote_call = async (params) => {
            let result = await this.call('factoryShutdownVote', factoryShutdownVoteParams(params));
            return result;
        };
        this.factoryShutdownVote = factoryShutdownVote_call;
        let getFactoryRestartVote_call = async (factory) => {
            let result = await this.call('getFactoryRestartVote', [factory]);
            return result;
        };
        this.getFactoryRestartVote = getFactoryRestartVote_call;
        let getFactoryShutdownVote_call = async (factory) => {
            let result = await this.call('getFactoryShutdownVote', [factory]);
            return result;
        };
        this.getFactoryShutdownVote = getFactoryShutdownVote_call;
        let getPairRestartVote_call = async (pair) => {
            let result = await this.call('getPairRestartVote', [pair]);
            return result;
        };
        this.getPairRestartVote = getPairRestartVote_call;
        let getPairShutdownVote_call = async (pair) => {
            let result = await this.call('getPairShutdownVote', [pair]);
            return result;
        };
        this.getPairShutdownVote = getPairShutdownVote_call;
        let getVetoVotingVote_call = async (votingContract) => {
            let result = await this.call('getVetoVotingVote', [votingContract]);
            return result;
        };
        this.getVetoVotingVote = getVetoVotingVote_call;
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let maxAdmin_call = async () => {
            let result = await this.call('maxAdmin');
            return new eth_contract_1.BigNumber(result);
        };
        this.maxAdmin = maxAdmin_call;
        let pairRestartVoteParams = (params) => [params.param1, params.param2];
        let pairRestartVote_call = async (params) => {
            let result = await this.call('pairRestartVote', pairRestartVoteParams(params));
            return result;
        };
        this.pairRestartVote = pairRestartVote_call;
        let pairShutdownVoteParams = (params) => [params.param1, params.param2];
        let pairShutdownVote_call = async (params) => {
            let result = await this.call('pairShutdownVote', pairShutdownVoteParams(params));
            return result;
        };
        this.pairShutdownVote = pairShutdownVote_call;
        let vetoVotingVoteParams = (params) => [params.param1, params.param2];
        let vetoVotingVote_call = async (params) => {
            let result = await this.call('vetoVotingVote', vetoVotingVoteParams(params));
            return result;
        };
        this.vetoVotingVote = vetoVotingVote_call;
        let addAdmin_send = async (admin) => {
            let result = await this.send('addAdmin', [admin]);
            return result;
        };
        let addAdmin_call = async (admin) => {
            let result = await this.call('addAdmin', [admin]);
            return;
        };
        this.addAdmin = Object.assign(addAdmin_send, {
            call: addAdmin_call
        });
        let executeFactoryRestart_send = async (factory) => {
            let result = await this.send('executeFactoryRestart', [factory]);
            return result;
        };
        let executeFactoryRestart_call = async (factory) => {
            let result = await this.call('executeFactoryRestart', [factory]);
            return;
        };
        this.executeFactoryRestart = Object.assign(executeFactoryRestart_send, {
            call: executeFactoryRestart_call
        });
        let executeFactoryShutdown_send = async (factory) => {
            let result = await this.send('executeFactoryShutdown', [factory]);
            return result;
        };
        let executeFactoryShutdown_call = async (factory) => {
            let result = await this.call('executeFactoryShutdown', [factory]);
            return;
        };
        this.executeFactoryShutdown = Object.assign(executeFactoryShutdown_send, {
            call: executeFactoryShutdown_call
        });
        let executePairRestartParams = (params) => [params.factory, params.pair];
        let executePairRestart_send = async (params) => {
            let result = await this.send('executePairRestart', executePairRestartParams(params));
            return result;
        };
        let executePairRestart_call = async (params) => {
            let result = await this.call('executePairRestart', executePairRestartParams(params));
            return;
        };
        this.executePairRestart = Object.assign(executePairRestart_send, {
            call: executePairRestart_call
        });
        let executePairShutdownParams = (params) => [params.factory, params.pair];
        let executePairShutdown_send = async (params) => {
            let result = await this.send('executePairShutdown', executePairShutdownParams(params));
            return result;
        };
        let executePairShutdown_call = async (params) => {
            let result = await this.call('executePairShutdown', executePairShutdownParams(params));
            return;
        };
        this.executePairShutdown = Object.assign(executePairShutdown_send, {
            call: executePairShutdown_call
        });
        let executeVetoVoting_send = async (votingContract) => {
            let result = await this.send('executeVetoVoting', [votingContract]);
            return result;
        };
        let executeVetoVoting_call = async (votingContract) => {
            let result = await this.call('executeVetoVoting', [votingContract]);
            return;
        };
        this.executeVetoVoting = Object.assign(executeVetoVoting_send, {
            call: executeVetoVoting_call
        });
        let factoryRestartParams = (params) => [params.factory, params.YorN];
        let factoryRestart_send = async (params) => {
            let result = await this.send('factoryRestart', factoryRestartParams(params));
            return result;
        };
        let factoryRestart_call = async (params) => {
            let result = await this.call('factoryRestart', factoryRestartParams(params));
            return;
        };
        this.factoryRestart = Object.assign(factoryRestart_send, {
            call: factoryRestart_call
        });
        let factoryShutdownParams = (params) => [params.factory, params.YorN];
        let factoryShutdown_send = async (params) => {
            let result = await this.send('factoryShutdown', factoryShutdownParams(params));
            return result;
        };
        let factoryShutdown_call = async (params) => {
            let result = await this.call('factoryShutdown', factoryShutdownParams(params));
            return;
        };
        this.factoryShutdown = Object.assign(factoryShutdown_send, {
            call: factoryShutdown_call
        });
        let pairRestartParams = (params) => [params.pair, params.YorN];
        let pairRestart_send = async (params) => {
            let result = await this.send('pairRestart', pairRestartParams(params));
            return result;
        };
        let pairRestart_call = async (params) => {
            let result = await this.call('pairRestart', pairRestartParams(params));
            return;
        };
        this.pairRestart = Object.assign(pairRestart_send, {
            call: pairRestart_call
        });
        let pairShutdownParams = (params) => [params.pair, params.YorN];
        let pairShutdown_send = async (params) => {
            let result = await this.send('pairShutdown', pairShutdownParams(params));
            return result;
        };
        let pairShutdown_call = async (params) => {
            let result = await this.call('pairShutdown', pairShutdownParams(params));
            return;
        };
        this.pairShutdown = Object.assign(pairShutdown_send, {
            call: pairShutdown_call
        });
        let removeAdmin_send = async (admin) => {
            let result = await this.send('removeAdmin', [admin]);
            return result;
        };
        let removeAdmin_call = async (admin) => {
            let result = await this.call('removeAdmin', [admin]);
            return;
        };
        this.removeAdmin = Object.assign(removeAdmin_send, {
            call: removeAdmin_call
        });
        let setMaxAdmin_send = async (maxAdmin) => {
            let result = await this.send('setMaxAdmin', [this.wallet.utils.toString(maxAdmin)]);
            return result;
        };
        let setMaxAdmin_call = async (maxAdmin) => {
            let result = await this.call('setMaxAdmin', [this.wallet.utils.toString(maxAdmin)]);
            return;
        };
        this.setMaxAdmin = Object.assign(setMaxAdmin_send, {
            call: setMaxAdmin_call
        });
        let vetoVotingParams = (params) => [params.votingContract, params.YorN];
        let vetoVoting_send = async (params) => {
            let result = await this.send('vetoVoting', vetoVotingParams(params));
            return result;
        };
        let vetoVoting_call = async (params) => {
            let result = await this.call('vetoVoting', vetoVotingParams(params));
            return;
        };
        this.vetoVoting = Object.assign(vetoVoting_send, {
            call: vetoVoting_call
        });
    }
}
exports.OAXDEX_Administrator = OAXDEX_Administrator;
