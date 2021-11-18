"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingContract = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/gov/OAXDEX_VotingContract.json");
class OAXDEX_VotingContract extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.executor, eth_wallet_1.Utils.toString(params.id), eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.stringToBytes32(params.options), eth_wallet_1.Utils.toString(params.quorum), eth_wallet_1.Utils.toString(params.threshold), eth_wallet_1.Utils.toString(params.voteEndTime), eth_wallet_1.Utils.toString(params.executeDelay), eth_wallet_1.Utils.stringToBytes32(params.executeParam));
    }
    async _executeParam(param1) {
        let result = await this.methods('_executeParam', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async _options(param1) {
        let result = await this.methods('_options', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async _optionsWeight(param1) {
        let result = await this.methods('_optionsWeight', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async accountVoteOption(param1) {
        let result = await this.methods('accountVoteOption', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async accountVoteWeight(param1) {
        let result = await this.methods('accountVoteWeight', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async execute() {
        let result = await this.methods('execute');
        return result;
    }
    async executeDelay() {
        let result = await this.methods('executeDelay');
        return new eth_wallet_1.BigNumber(result);
    }
    async executeParam() {
        let result = await this.methods('executeParam');
        return result;
    }
    async executed() {
        let result = await this.methods('executed');
        return result;
    }
    async executor() {
        let result = await this.methods('executor');
        return result;
    }
    async getParams() {
        let result = await this.methods('getParams');
        return {
            executor_: result.executor_,
            id_: new eth_wallet_1.BigNumber(result.id_),
            name_: result.name_,
            options_: result.options_,
            voteStartTime_: new eth_wallet_1.BigNumber(result.voteStartTime_),
            voteEndTime_: new eth_wallet_1.BigNumber(result.voteEndTime_),
            executeDelay_: new eth_wallet_1.BigNumber(result.executeDelay_),
            status_: result.status_,
            optionsWeight_: result.optionsWeight_,
            quorum_: result.quorum_,
            executeParam_: result.executeParam_
        };
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async id() {
        let result = await this.methods('id');
        return new eth_wallet_1.BigNumber(result);
    }
    async name() {
        let result = await this.methods('name');
        return result;
    }
    async options() {
        let result = await this.methods('options');
        return result;
    }
    async optionsCount() {
        let result = await this.methods('optionsCount');
        return new eth_wallet_1.BigNumber(result);
    }
    async optionsWeight() {
        let result = await this.methods('optionsWeight');
        return result;
    }
    async quorum() {
        let result = await this.methods('quorum');
        return new eth_wallet_1.BigNumber(result);
    }
    async threshold() {
        let result = await this.methods('threshold');
        return new eth_wallet_1.BigNumber(result);
    }
    async totalVoteWeight() {
        let result = await this.methods('totalVoteWeight');
        return new eth_wallet_1.BigNumber(result);
    }
    async totalWeight() {
        let result = await this.methods('totalWeight');
        return new eth_wallet_1.BigNumber(result);
    }
    async updateWeight(account) {
        let result = await this.methods('updateWeight', account);
        return result;
    }
    async veto() {
        let result = await this.methods('veto');
        return result;
    }
    async vetoed() {
        let result = await this.methods('vetoed');
        return result;
    }
    async vote(option) {
        let result = await this.methods('vote', eth_wallet_1.Utils.toString(option));
        return result;
    }
    async voteEndTime() {
        let result = await this.methods('voteEndTime');
        return new eth_wallet_1.BigNumber(result);
    }
    async voteStartTime() {
        let result = await this.methods('voteStartTime');
        return new eth_wallet_1.BigNumber(result);
    }
}
exports.OAXDEX_VotingContract = OAXDEX_VotingContract;
