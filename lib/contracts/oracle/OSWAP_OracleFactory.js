"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/oracle/OSWAP_OracleFactory.json");
class OSWAP_OracleFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.pairCreator, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.protocolFee), eth_wallet_1.Utils.toString(params.feePerDelegator), params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt) {
        return this.parseEvents(receipt, "OracleAdded").map(e => this.decodeOracleAddedEvent(e));
    }
    decodeOracleAddedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            oracle: result.oracle,
            _event: event
        };
    }
    parseOracleScoresEvent(receipt) {
        return this.parseEvents(receipt, "OracleScores").map(e => this.decodeOracleScoresEvent(e));
    }
    decodeOracleScoresEvent(event) {
        let result = event.data;
        return {
            oracle: result.oracle,
            score: new eth_wallet_1.BigNumber(result.score),
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
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new eth_wallet_1.BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt) {
        return this.parseEvents(receipt, "PairRestarted").map(e => this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "PairShutdowned").map(e => this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
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
    parseRestartedEvent(receipt) {
        return this.parseEvents(receipt, "Restarted").map(e => this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "Shutdowned").map(e => this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseWhitelistedEvent(receipt) {
        return this.parseEvents(receipt, "Whitelisted").map(e => this.decodeWhitelistedEvent(e));
    }
    decodeWhitelistedEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            allow: result.allow,
            _event: event
        };
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
    async allWhiteListed() {
        let result = await this.methods('allWhiteListed');
        return {
            list: result.list,
            allowed: result.allowed
        };
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
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async feePerDelegator() {
        let result = await this.methods('feePerDelegator');
        return new eth_wallet_1.BigNumber(result);
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
    async isOracle(param1) {
        let result = await this.methods('isOracle', param1);
        return result;
    }
    async isWhitelisted(param1) {
        let result = await this.methods('isWhitelisted', param1);
        return result;
    }
    async minLotSize(param1) {
        let result = await this.methods('minLotSize', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async minOracleScore() {
        let result = await this.methods('minOracleScore');
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleLiquidityProvider() {
        let result = await this.methods('oracleLiquidityProvider');
        return result;
    }
    async oracleScores(param1) {
        let result = await this.methods('oracleScores', param1);
        return new eth_wallet_1.BigNumber(result);
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
    async securityScoreOracle() {
        let result = await this.methods('securityScoreOracle');
        return result;
    }
    async setFeePerDelegator(feePerDelegator) {
        let result = await this.methods('setFeePerDelegator', eth_wallet_1.Utils.toString(feePerDelegator));
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
    async setMinLotSize(params) {
        let result = await this.methods('setMinLotSize', params.token, eth_wallet_1.Utils.toString(params.minLotSize));
        return result;
    }
    async setOracle(params) {
        let result = await this.methods('setOracle', params.tokenA, params.tokenB, params.oracle);
        return result;
    }
    async setOracleLiquidityProvider(params) {
        let result = await this.methods('setOracleLiquidityProvider', params.oracleRouter, params.oracleLiquidityProvider);
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
    async setSecurityScoreOracle(params) {
        let result = await this.methods('setSecurityScoreOracle', params.securityScoreOracle, eth_wallet_1.Utils.toString(params.minOracleScore));
        return result;
    }
    async setTradeFee(tradeFee) {
        let result = await this.methods('setTradeFee', eth_wallet_1.Utils.toString(tradeFee));
        return result;
    }
    async setWhiteList(params) {
        let result = await this.methods('setWhiteList', params.who, params.allow);
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
    async updateOracleScore(oracle) {
        let result = await this.methods('updateOracleScore', oracle);
        return result;
    }
    async whitelisted(param1) {
        let result = await this.methods('whitelisted', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async whitelistedInv(param1) {
        let result = await this.methods('whitelistedInv', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async whitelistedLength() {
        let result = await this.methods('whitelistedLength');
        return new eth_wallet_1.BigNumber(result);
    }
}
exports.OSWAP_OracleFactory = OSWAP_OracleFactory;
