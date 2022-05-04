"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Pair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_Pair_json_1 = __importDefault(require("./OSWAP_Pair.json"));
class OSWAP_Pair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_Pair_json_1.default.abi, OSWAP_Pair_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this._deploy();
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseProtocolFeeSetEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolFeeSet").map(e => this.decodeProtocolFeeSetEvent(e));
    }
    decodeProtocolFeeSetEvent(event) {
        let result = event.data;
        return {
            protocolFee: new eth_wallet_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new eth_wallet_1.BigNumber(result.amount0In),
            amount1In: new eth_wallet_1.BigNumber(result.amount1In),
            amount0Out: new eth_wallet_1.BigNumber(result.amount0Out),
            amount1Out: new eth_wallet_1.BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event) {
        let result = event.data;
        return {
            reserve0: new eth_wallet_1.BigNumber(result.reserve0),
            reserve1: new eth_wallet_1.BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTradeFeeSetEvent(receipt) {
        return this.parseEvents(receipt, "TradeFeeSet").map(e => this.decodeTradeFeeSetEvent(e));
    }
    decodeTradeFeeSetEvent(event) {
        let result = event.data;
        return {
            tradeFee: new eth_wallet_1.BigNumber(result.tradeFee),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    async EIP712_TYPEHASH() {
        let result = await this.call('EIP712_TYPEHASH');
        return result;
    }
    async MINIMUM_LIQUIDITY() {
        let result = await this.call('MINIMUM_LIQUIDITY');
        return new eth_wallet_1.BigNumber(result);
    }
    async NAME_HASH() {
        let result = await this.call('NAME_HASH');
        return result;
    }
    async PERMIT_TYPEHASH() {
        let result = await this.call('PERMIT_TYPEHASH');
        return result;
    }
    async VERSION_HASH() {
        let result = await this.call('VERSION_HASH');
        return result;
    }
    async allowance(params) {
        let result = await this.call('allowance', [params.param1, params.param2]);
        return new eth_wallet_1.BigNumber(result);
    }
    async approve_send(params) {
        let result = await this.send('approve', [params.spender, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async approve_call(params) {
        let result = await this.call('approve', [params.spender, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async balanceOf(param1) {
        let result = await this.call('balanceOf', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async burn_send(to) {
        let result = await this.send('burn', [to]);
        return result;
    }
    async burn_call(to) {
        let result = await this.call('burn', [to]);
        return {
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1)
        };
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.call('getAmountIn', [params.tokenOut, eth_wallet_1.Utils.toString(params.amountOut)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.call('getAmountOut', [params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getReserves() {
        let result = await this.call('getReserves');
        return {
            _reserve0: new eth_wallet_1.BigNumber(result._reserve0),
            _reserve1: new eth_wallet_1.BigNumber(result._reserve1),
            _blockTimestampLast: new eth_wallet_1.BigNumber(result._blockTimestampLast)
        };
    }
    async initialize_send(params) {
        let result = await this.send('initialize', [params.token0, params.token1]);
        return result;
    }
    async initialize_call(params) {
        let result = await this.call('initialize', [params.token0, params.token1]);
        return;
    }
    async isLive() {
        let result = await this.call('isLive');
        return result;
    }
    async kLast() {
        let result = await this.call('kLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async mint_send(to) {
        let result = await this.send('mint', [to]);
        return result;
    }
    async mint_call(to) {
        let result = await this.call('mint', [to]);
        return new eth_wallet_1.BigNumber(result);
    }
    async name() {
        let result = await this.call('name');
        return result;
    }
    async nonces(param1) {
        let result = await this.call('nonces', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async permit_send(params) {
        let result = await this.send('permit', [params.owner, params.spender, eth_wallet_1.Utils.toString(params.value), eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return result;
    }
    async permit_call(params) {
        let result = await this.call('permit', [params.owner, params.spender, eth_wallet_1.Utils.toString(params.value), eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)]);
        return;
    }
    async price0CumulativeLast() {
        let result = await this.call('price0CumulativeLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async price1CumulativeLast() {
        let result = await this.call('price1CumulativeLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFee() {
        let result = await this.call('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async setLive_send(isLive) {
        let result = await this.send('setLive', [isLive]);
        return result;
    }
    async setLive_call(isLive) {
        let result = await this.call('setLive', [isLive]);
        return;
    }
    async skim_send(to) {
        let result = await this.send('skim', [to]);
        return result;
    }
    async skim_call(to) {
        let result = await this.call('skim', [to]);
        return;
    }
    async swap_send(params) {
        let result = await this.send('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data]);
        return result;
    }
    async swap_call(params) {
        let result = await this.call('swap', [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data]);
        return;
    }
    async symbol() {
        let result = await this.call('symbol');
        return result;
    }
    async sync_send() {
        let result = await this.send('sync');
        return result;
    }
    async sync_call() {
        let result = await this.call('sync');
        return;
    }
    async token0() {
        let result = await this.call('token0');
        return result;
    }
    async token1() {
        let result = await this.call('token1');
        return result;
    }
    async totalSupply() {
        let result = await this.call('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async tradeFee() {
        let result = await this.call('tradeFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async transfer_send(params) {
        let result = await this.send('transfer', [params.to, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async transfer_call(params) {
        let result = await this.call('transfer', [params.to, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async transferFrom_send(params) {
        let result = await this.send('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async transferFrom_call(params) {
        let result = await this.call('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.value)]);
        return result;
    }
    async updateFee_send() {
        let result = await this.send('updateFee');
        return result;
    }
    async updateFee_call() {
        let result = await this.call('updateFee');
        return;
    }
    async updateProtocolFee_send() {
        let result = await this.send('updateProtocolFee');
        return result;
    }
    async updateProtocolFee_call() {
        let result = await this.call('updateProtocolFee');
        return;
    }
    assign() {
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.burn = Object.assign(this.burn_send, { call: this.burn_call });
        this.initialize = Object.assign(this.initialize_send, { call: this.initialize_call });
        this.mint = Object.assign(this.mint_send, { call: this.mint_call });
        this.permit = Object.assign(this.permit_send, { call: this.permit_call });
        this.setLive = Object.assign(this.setLive_send, { call: this.setLive_call });
        this.skim = Object.assign(this.skim_send, { call: this.skim_call });
        this.swap = Object.assign(this.swap_send, { call: this.swap_call });
        this.sync = Object.assign(this.sync_send, { call: this.sync_call });
        this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
        this.updateFee = Object.assign(this.updateFee_send, { call: this.updateFee_call });
        this.updateProtocolFee = Object.assign(this.updateProtocolFee_send, { call: this.updateProtocolFee_call });
    }
}
exports.OSWAP_Pair = OSWAP_Pair;
