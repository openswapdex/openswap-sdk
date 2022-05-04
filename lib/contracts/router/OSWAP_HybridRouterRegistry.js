"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouterRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_HybridRouterRegistry_json_1 = __importDefault(require("./OSWAP_HybridRouterRegistry.json"));
class OSWAP_HybridRouterRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_HybridRouterRegistry_json_1.default.abi, OSWAP_HybridRouterRegistry_json_1.default.bytecode);
        this.assign();
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
        let result = await this.call('customPairs', [param1]);
        return {
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode)
        };
    }
    async execute_send(params) {
        let result = await this.send('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return result;
    }
    async execute_call(params) {
        let result = await this.call('execute', [eth_wallet_1.Utils.stringToBytes32(params)]);
        return;
    }
    async getFee(pairAddress) {
        let result = await this.call('getFee', [pairAddress]);
        return {
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase)
        };
    }
    async getPairTokens(pairAddress) {
        let result = await this.call('getPairTokens', [pairAddress]);
        return {
            token0: result.token0,
            token1: result.token1
        };
    }
    async getTypeCode(pairAddress) {
        let result = await this.call('getTypeCode', [pairAddress]);
        return new eth_wallet_1.BigNumber(result);
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async init_send(params) {
        let result = await this.send('init', [eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return result;
    }
    async init_call(params) {
        let result = await this.call('init', [eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return;
    }
    async owner() {
        let result = await this.call('owner');
        return result;
    }
    async pairs(param1) {
        let result = await this.call('pairs', [param1]);
        return {
            factory: result.factory,
            token0: result.token0,
            token1: result.token1
        };
    }
    async protocolList(param1) {
        let result = await this.call('protocolList', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async protocolListLength() {
        let result = await this.call('protocolListLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocols(param1) {
        let result = await this.call('protocols', [param1]);
        return {
            name: result.name,
            fee: new eth_wallet_1.BigNumber(result.fee),
            feeBase: new eth_wallet_1.BigNumber(result.feeBase),
            typeCode: new eth_wallet_1.BigNumber(result.typeCode)
        };
    }
    async registerPair_send(params) {
        let result = await this.send('registerPair', [params.token0, params.token1, params.pairAddress, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return result;
    }
    async registerPair_call(params) {
        let result = await this.call('registerPair', [params.token0, params.token1, params.pairAddress, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return;
    }
    async registerPairByAddress_send(params) {
        let result = await this.send('registerPairByAddress', [params.factory, params.pairAddress]);
        return result;
    }
    async registerPairByAddress_call(params) {
        let result = await this.call('registerPairByAddress', [params.factory, params.pairAddress]);
        return;
    }
    async registerPairByIndex_send(params) {
        let result = await this.send('registerPairByIndex', [params.factory, eth_wallet_1.Utils.toString(params.index)]);
        return result;
    }
    async registerPairByIndex_call(params) {
        let result = await this.call('registerPairByIndex', [params.factory, eth_wallet_1.Utils.toString(params.index)]);
        return;
    }
    async registerPairByTokens_send(params) {
        let result = await this.send('registerPairByTokens', [params.factory, params.token0, params.token1]);
        return result;
    }
    async registerPairByTokens_call(params) {
        let result = await this.call('registerPairByTokens', [params.factory, params.token0, params.token1]);
        return;
    }
    async registerPairByTokensV3_send(params) {
        let result = await this.send('registerPairByTokensV3', [params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex)]);
        return result;
    }
    async registerPairByTokensV3_call(params) {
        let result = await this.call('registerPairByTokensV3', [params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex)]);
        return;
    }
    async registerPairsByAddress_send(params) {
        let result = await this.send('registerPairsByAddress', [params.factory, params.pairAddress]);
        return result;
    }
    async registerPairsByAddress_call(params) {
        let result = await this.call('registerPairsByAddress', [params.factory, params.pairAddress]);
        return;
    }
    async registerPairsByAddress2_send(params) {
        let result = await this.send('registerPairsByAddress2', [params.factory, params.pairAddress]);
        return result;
    }
    async registerPairsByAddress2_call(params) {
        let result = await this.call('registerPairsByAddress2', [params.factory, params.pairAddress]);
        return;
    }
    async registerPairsByIndex_send(params) {
        let result = await this.send('registerPairsByIndex', [params.factory, eth_wallet_1.Utils.toString(params.index)]);
        return result;
    }
    async registerPairsByIndex_call(params) {
        let result = await this.call('registerPairsByIndex', [params.factory, eth_wallet_1.Utils.toString(params.index)]);
        return;
    }
    async registerPairsByTokens_send(params) {
        let result = await this.send('registerPairsByTokens', [params.factory, params.token0, params.token1]);
        return result;
    }
    async registerPairsByTokens_call(params) {
        let result = await this.call('registerPairsByTokens', [params.factory, params.token0, params.token1]);
        return;
    }
    async registerPairsByTokensV3_send(params) {
        let result = await this.send('registerPairsByTokensV3', [params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex)]);
        return result;
    }
    async registerPairsByTokensV3_call(params) {
        let result = await this.call('registerPairsByTokensV3', [params.factory, params.token0, params.token1, eth_wallet_1.Utils.toString(params.pairIndex)]);
        return;
    }
    async registerProtocol_send(params) {
        let result = await this.send('registerProtocol', [eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return result;
    }
    async registerProtocol_call(params) {
        let result = await this.call('registerProtocol', [eth_wallet_1.Utils.stringToBytes32(params.name), params.factory, eth_wallet_1.Utils.toString(params.fee), eth_wallet_1.Utils.toString(params.feeBase), eth_wallet_1.Utils.toString(params.typeCode)]);
        return;
    }
    async renounceOwnership_send() {
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call() {
        let result = await this.call('renounceOwnership');
        return;
    }
    async transferOwnership_send(newOwner) {
        let result = await this.send('transferOwnership', [newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner) {
        let result = await this.call('transferOwnership', [newOwner]);
        return;
    }
    assign() {
        this.execute = Object.assign(this.execute_send, { call: this.execute_call });
        this.init = Object.assign(this.init_send, { call: this.init_call });
        this.registerPair = Object.assign(this.registerPair_send, { call: this.registerPair_call });
        this.registerPairByAddress = Object.assign(this.registerPairByAddress_send, { call: this.registerPairByAddress_call });
        this.registerPairByIndex = Object.assign(this.registerPairByIndex_send, { call: this.registerPairByIndex_call });
        this.registerPairByTokens = Object.assign(this.registerPairByTokens_send, { call: this.registerPairByTokens_call });
        this.registerPairByTokensV3 = Object.assign(this.registerPairByTokensV3_send, { call: this.registerPairByTokensV3_call });
        this.registerPairsByAddress = Object.assign(this.registerPairsByAddress_send, { call: this.registerPairsByAddress_call });
        this.registerPairsByAddress2 = Object.assign(this.registerPairsByAddress2_send, { call: this.registerPairsByAddress2_call });
        this.registerPairsByIndex = Object.assign(this.registerPairsByIndex_send, { call: this.registerPairsByIndex_call });
        this.registerPairsByTokens = Object.assign(this.registerPairsByTokens_send, { call: this.registerPairsByTokens_call });
        this.registerPairsByTokensV3 = Object.assign(this.registerPairsByTokensV3_send, { call: this.registerPairsByTokensV3_call });
        this.registerProtocol = Object.assign(this.registerProtocol_send, { call: this.registerProtocol_call });
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, { call: this.renounceOwnership_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    }
}
exports.OSWAP_HybridRouterRegistry = OSWAP_HybridRouterRegistry;
