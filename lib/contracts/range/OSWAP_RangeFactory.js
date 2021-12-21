"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/range/OSWAP_RangeFactory.json");
class OSWAP_RangeFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.governance, params.oracleFactory, params.pairCreator, eth_wallet_1.Utils.toString(params.tradeFee), eth_wallet_1.Utils.toString(params.stakeAmount), eth_wallet_1.Utils.toString(params.liquidityProviderShare), params.protocolFeeTo);
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
    parsePairCreatedEvent(receipt) {
        let events = this.parseEvents(receipt, "PairCreated");
        return events.map(result => {
            return {
                token0: result.token0,
                token1: result.token1,
                pair: result.pair,
                newSize: new eth_wallet_1.BigNumber(result.newSize)
            };
        });
    }
    parsePairRestartedEvent(receipt) {
        let events = this.parseEvents(receipt, "PairRestarted");
        return events.map(result => {
            return result[0];
        });
    }
    parsePairShutdownedEvent(receipt) {
        let events = this.parseEvents(receipt, "PairShutdowned");
        return events.map(result => {
            return result[0];
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
    parseRestartedEvent(receipt) {
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return;
            ;
        });
    }
    parseShutdownedEvent(receipt) {
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return;
            ;
        });
    }
    async allPairs(param1) {
        let result = await this.methods('allPairs', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async allPairsLength() {
        let result = await this.methods('allPairsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async checkAndGetSwapParams() {
        let result = await this.methods('checkAndGetSwapParams');
        return new eth_wallet_1.BigNumber(result);
    }
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async getAllLiquidityProviderShare() {
        let result = await this.methods('getAllLiquidityProviderShare');
        return {
            _stakeAmount: result._stakeAmount,
            _liquidityProviderShare: result._liquidityProviderShare
        };
    }
    async getCreateAddresses() {
        let result = await this.methods('getCreateAddresses');
        return {
            _governance: result._governance,
            _rangeLiquidityProvider: result._rangeLiquidityProvider,
            _oracleFactory: result._oracleFactory
        };
    }
    async getLiquidityProviderShare(stake) {
        let result = await this.methods('getLiquidityProviderShare', eth_wallet_1.Utils.toString(stake));
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
    async liquidityProviderShare(param1) {
        let result = await this.methods('liquidityProviderShare', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleFactory() {
        let result = await this.methods('oracleFactory');
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
    async protocolFeeTo() {
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async rangeLiquidityProvider() {
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async renounceOwnership() {
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async setLiquidityProviderShare(params) {
        let result = await this.methods('setLiquidityProviderShare', eth_wallet_1.Utils.toString(params.stakeAmount), eth_wallet_1.Utils.toString(params.liquidityProviderShare));
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
    async setProtocolFeeTo(protocolFeeTo) {
        let result = await this.methods('setProtocolFeeTo', protocolFeeTo);
        return result;
    }
    async setRangeLiquidityProvider(rangeLiquidityProvider) {
        let result = await this.methods('setRangeLiquidityProvider', rangeLiquidityProvider);
        return result;
    }
    async setTradeFee(tradeFee) {
        let result = await this.methods('setTradeFee', eth_wallet_1.Utils.toString(tradeFee));
        return result;
    }
    async stakeAmount(param1) {
        let result = await this.methods('stakeAmount', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async tradeFee() {
        let result = await this.methods('tradeFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
}
exports.OSWAP_RangeFactory = OSWAP_RangeFactory;
