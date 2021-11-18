"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_RestrictedFactory.json");
class OSWAP_RestrictedFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.whitelistFactory, params.pairCreator, params.configStore, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt) {
        return this.parseEvents(receipt, "OracleAdded");
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred");
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
    async addOldOracleToNewPair(params) {
        let result = await this.methods('addOldOracleToNewPair', params.tokenA, params.tokenB, params.oracle);
        return result;
    }
    async allPairs(param1) {
        let result = await this.methods('allPairs', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async allPairsLength() {
        let result = await this.methods('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async checkAndGetOracle(params) {
        let result = await this.methods('checkAndGetOracle', params.tokenA, params.tokenB);
        return result;
    }
    async checkAndGetOracleSwapParams(params) {
        let result = await this.methods('checkAndGetOracleSwapParams', params.tokenA, params.tokenB);
        return {
            oracle_: result.oracle_,
            tradeFee_: new eth_wallet_1.BigNumber(result.tradeFee_),
            protocolFee_: new eth_wallet_1.BigNumber(result.protocolFee_)
        };
    }
    async configStore() {
        let result = await this.methods('configStore');
        return result;
    }
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async getCreateAddresses() {
        let result = await this.methods('getCreateAddresses');
        return {
            _governance: result._governance,
            _whitelistFactory: result._whitelistFactory,
            _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
            _configStore: result._configStore
        };
    }
    async getPair(params) {
        let result = await this.methods('getPair', params.param1, params.param2, eth_wallet_1.Utils.toString(params.param3));
        return result;
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async init(restrictedLiquidityProvider) {
        let result = await this.methods('init', restrictedLiquidityProvider);
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async isOracle(param1) {
        let result = await this.methods('isOracle', param1);
        return result;
    }
    async isPair(pair) {
        let result = await this.methods('isPair', pair);
        return result;
    }
    async oracles(params) {
        let result = await this.methods('oracles', params.param1, params.param2);
        return result;
    }
    async owner() {
        let result = await this.methods('owner');
        return result;
    }
    async pairCreator() {
        let result = await this.methods('pairCreator');
        return result;
    }
    async pairIdx(param1) {
        let result = await this.methods('pairIdx', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async pairLength(params) {
        let result = await this.methods('pairLength', params.tokenA, params.tokenB);
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFee() {
        let result = await this.methods('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeTo() {
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async renounceOwnership() {
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async restrictedLiquidityProvider() {
        let result = await this.methods('restrictedLiquidityProvider');
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
    async setOracle(params) {
        let result = await this.methods('setOracle', params.tokenA, params.tokenB, params.oracle);
        return result;
    }
    async setProtocolFee(protocolFee) {
        let result = await this.methods('setProtocolFee', eth_wallet_1.Utils.toString(protocolFee));
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo) {
        let result = await this.methods('setProtocolFeeTo', protocolFeeTo);
        return result;
    }
    async setTradeFee(tradeFee) {
        let result = await this.methods('setTradeFee', eth_wallet_1.Utils.toString(tradeFee));
        return result;
    }
    async tradeFee() {
        let result = await this.methods('tradeFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
    async whitelistFactory() {
        let result = await this.methods('whitelistFactory');
        return result;
    }
}
exports.OSWAP_RestrictedFactory = OSWAP_RestrictedFactory;
