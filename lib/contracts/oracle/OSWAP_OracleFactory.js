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
    async addOldOracleToNewPair(params) {
        let result = await this.methods('addOldOracleToNewPair', params.tokenA, params.tokenB, params.oracle);
        return result;
    }
    async allPairs(param1) {
        let result = await this.methods('allPairs', param1);
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
        let result = await this.methods('setFeePerDelegator', feePerDelegator);
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
        let result = await this.methods('setProtocolFee', protocolFee);
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
        let result = await this.methods('setTradeFee', tradeFee);
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
        let result = await this.methods('whitelisted', param1);
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