"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Factory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/amm/OSWAP_Factory.json");
class OSWAP_Factory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.pairCreator, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo);
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated");
    }
    parsePairRestartedEvent(receipt) {
        return this.parseEvents(receipt, "PairRestarted");
    }
    parsePairShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "PairShutdowned");
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet");
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2");
    }
    parseRestartedEvent(receipt) {
        return this.parseEvents(receipt, "Restarted");
    }
    parseShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "Shutdowned");
    }
    async allPairs(param1) {
        let result = await this.methods('allPairs', param1);
        return result;
    }
    async allPairsLength() {
        let result = await this.methods('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async getPair(params) {
        let result = await this.methods('getPair', params.param1, params.param2);
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async pairCreator() {
        let result = await this.methods('pairCreator');
        return result;
    }
    async protocolFee() {
        let result = await this.methods('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeParams() {
        let result = await this.methods('protocolFeeParams');
        return {
            _protocolFee: new eth_wallet_1.BigNumber(result._protocolFee),
            _protocolFeeTo: result._protocolFeeTo
        };
    }
    async protocolFeeTo() {
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async setLiveForPair(params) {
        let result = await this.methods('setLiveForPair', params.pair, params.live);
        return result;
    }
    async setProtocolFee(protocolFee) {
        let result = await this.methods('setProtocolFee', protocolFee);
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo) {
        let result = await this.methods('setProtocolFeeTo', protocolFeeTo);
        return result;
    }
    async setTradeFee(tradeFee) {
        let result = await this.methods('setTradeFee', tradeFee);
        return result;
    }
    async tradeFee() {
        let result = await this.methods('tradeFee');
        return new eth_wallet_1.BigNumber(result);
    }
}
exports.OSWAP_Factory = OSWAP_Factory;
