"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouterRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/router/OSWAP_HybridRouterRegistry.json");
class OSWAP_HybridRouterRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    parseCustomPairRegisterEvent(receipt) {
        return this.parseEvents(receipt, "CustomPairRegister").map(e => this.decodeCustomPairRegisterEvent(e));
    }
    decodeCustomPairRegisterEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode),
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
    parsePairRegisterEvent(receipt) {
        return this.parseEvents(receipt, "PairRegister").map(e => this.decodePairRegisterEvent(e));
    }
    decodePairRegisterEvent(event) {
        let result = event.data;
        return {
            factory: result.factory,
            pair: result.pair,
            token0: result.token0,
            token1: result.token1,
            _event: event
        };
    }
    parseProtocolRegisterEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolRegister").map(e => this.decodeProtocolRegisterEvent(e));
    }
    decodeProtocolRegisterEvent(event) {
        let result = event.data;
        return {
            factory: result.factory,
            name: result.name,
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode),
            _event: event
        };
    }
    async customPairs(param1) {
        let result = await this.methods('customPairs', param1);
        return {
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode)
        };
    }
    async execute(params) {
        let result = await this.methods('execute', eth_wallet_1.Utils.stringToBytes32(params));
        return result;
    }
    async getFee(pairAddress) {
        let result = await this.methods('getFee', pairAddress);
        return {
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase)
        };
    }
    async getPairTokens(pairAddress) {
        let result = await this.methods('getPairTokens', pairAddress);
        return {
            token0: result.token0,
            token1: result.token1
        };
    }
    async getTypeCode(pairAddress) {
        let result = await this.methods('getTypeCode', pairAddress);
        return new eth_wallet_1.BigNumber(result);
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async init(params) {
        let result = await this.methods('init', eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode));
        return result;
    }
    async owner() {
        let result = await this.methods('owner');
        return result;
    }
    async pairs(param1) {
        let result = await this.methods('pairs', param1);
        return {
            factory: result.factory,
            token0: result.token0,
            token1: result.token1
        };
    }
    async protocolList(param1) {
        let result = await this.methods('protocolList', eth_wallet_1.Utils.toString(param1));
        return result;
    }
    async protocolListLength() {
        let result = await this.methods('protocolListLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocols(param1) {
        let result = await this.methods('protocols', param1);
        return {
            name: result.name,
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode)
        };
    }
    async registerPair(params) {
        let result = await this.methods('registerPair', params.token0, params.token1, params.pairAddress, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode));
        return result;
    }
    async registerPairByAddress(params) {
        let result = await this.methods('registerPairByAddress', params.factory, params.pairAddress);
        return result;
    }
    async registerPairByIndex(params) {
        let result = await this.methods('registerPairByIndex', params.factory, eth_wallet_1.Utils.toString(params.index));
        return result;
    }
    async registerPairByTokens(params) {
        let result = await this.methods('registerPairByTokens', params.factory, params.token0, params.token1);
        return result;
    }
    async registerPairByTokensV3(params) {
        let result = await this.methods('registerPairByTokensV3', params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex));
        return result;
    }
    async registerPairsByAddress(params) {
        let result = await this.methods('registerPairsByAddress', params.factory, params.pairAddress);
        return result;
    }
    async registerPairsByAddress2(params) {
        let result = await this.methods('registerPairsByAddress2', params.factory, params.pairAddress);
        return result;
    }
    async registerPairsByIndex(params) {
        let result = await this.methods('registerPairsByIndex', params.factory, eth_wallet_1.Utils.toString(params.index));
        return result;
    }
    async registerPairsByTokens(params) {
        let result = await this.methods('registerPairsByTokens', params.factory, params.token0, params.token1);
        return result;
    }
    async registerPairsByTokensV3(params) {
        let result = await this.methods('registerPairsByTokensV3', params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex));
        return result;
    }
    async registerProtocol(params) {
        let result = await this.methods('registerProtocol', eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode));
        return result;
    }
    async renounceOwnership() {
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
}
exports.OSWAP_HybridRouterRegistry = OSWAP_HybridRouterRegistry;
