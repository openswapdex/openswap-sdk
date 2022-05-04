"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingContract = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OAXDEX_VotingContract_json_1 = __importDefault(require("./OAXDEX_VotingContract.json"));
class OAXDEX_VotingContract extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingContract_json_1.default.abi, OAXDEX_VotingContract_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.governance, params.executor, eth_wallet_1.Utils.toString(params.id), eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.options), eth_wallet_1.Utils.toString(params.quorum), eth_wallet_1.Utils.toString(params.threshold), eth_wallet_1.Utils.toString(params.voteEndTime), eth_wallet_1.Utils.toString(params.executeDelay), eth_wallet_1.Utils.stringToBytes32(params.executeParam));
    }
    async _executeParam(param1) {
        let result = await this.call('_executeParam', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async _options(param1) {
        let result = await this.call('_options', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async _optionsWeight(param1) {
        let result = await this.call('_optionsWeight', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async accountVoteOption(param1) {
        let result = await this.call('accountVoteOption', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async accountVoteWeight(param1) {
        let result = await this.call('accountVoteWeight', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async execute_send() {
        let result = await this.send('execute');
        return result;
    }
    async execute_call() {
        let result = await this.call('execute');
        return;
    }
    async executeDelay() {
        let result = await this.call('executeDelay');
        return new eth_wallet_1.BigNumber(result);
    }
    async executeParam() {
        let result = await this.call('executeParam');
        return result;
    }
    async executed() {
        let result = await this.call('executed');
        return result;
    }
    async executor() {
        let result = await this.call('executor');
        return result;
    }
    async getParams() {
        let result = await this.call('getParams');
        return {
            executor_: result.executor_,
            id_: new eth_wallet_1.BigNumber(result.id_),
            name_: result.name_,
            options_: result.options_,
            voteStartTime_: new eth_wallet_1.BigNumber(result.voteStartTime_),
            voteEndTime_: new eth_wallet_1.BigNumber(result.voteEndTime_),
            executeDelay_: new eth_wallet_1.BigNumber(result.executeDelay_),
            status_: result.status_,
            optionsWeight_: result.optionsWeight_.map(e => new eth_wallet_1.BigNumber(e)),
            quorum_: result.quorum_.map(e => new eth_wallet_1.BigNumber(e)),
            executeParam_: result.executeParam_
        };
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async id() {
        let result = await this.call('id');
        return new eth_wallet_1.BigNumber(result);
    }
    async name() {
        let result = await this.call('name');
        return result;
    }
    async options() {
        let result = await this.call('options');
        return result;
    }
    async optionsCount() {
        let result = await this.call('optionsCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async optionsWeight() {
        let result = await this.call('optionsWeight');
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async quorum() {
        let result = await this.call('quorum');
        return new eth_wallet_1.BigNumber(result);
    }
    async threshold() {
        let result = await this.call('threshold');
        return new eth_wallet_1.BigNumber(result);
    }
    async totalVoteWeight() {
        let result = await this.call('totalVoteWeight');
        return new eth_wallet_1.BigNumber(result);
    }
    async totalWeight() {
        let result = await this.call('totalWeight');
        return new eth_wallet_1.BigNumber(result);
    }
    async updateWeight_send(account) {
        let result = await this.send('updateWeight', [account]);
        return result;
    }
    async updateWeight_call(account) {
        let result = await this.call('updateWeight', [account]);
        return;
    }
    async veto_send() {
        let result = await this.send('veto');
        return result;
    }
    async veto_call() {
        let result = await this.call('veto');
        return;
    }
    async vetoed() {
        let result = await this.call('vetoed');
        return result;
    }
    async vote_send(option) {
        let result = await this.send('vote', [eth_wallet_1.Utils.toString(option)]);
        return result;
    }
    async vote_call(option) {
        let result = await this.call('vote', [eth_wallet_1.Utils.toString(option)]);
        return;
    }
    async voteEndTime() {
        let result = await this.call('voteEndTime');
        return new eth_wallet_1.BigNumber(result);
    }
    async voteStartTime() {
        let result = await this.call('voteStartTime');
        return new eth_wallet_1.BigNumber(result);
    }
    assign() {
        this.execute = Object.assign(this.execute_send, { call: this.execute_call });
        this.updateWeight = Object.assign(this.updateWeight_send, { call: this.updateWeight_call });
        this.veto = Object.assign(this.veto_send, { call: this.veto_call });
        this.vote = Object.assign(this.vote_send, { call: this.vote_call });
    }
}
exports.OAXDEX_VotingContract = OAXDEX_VotingContract;
