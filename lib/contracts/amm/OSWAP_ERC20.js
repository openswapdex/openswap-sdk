"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ERC20 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_ERC20_json_1 = __importDefault(require("./OSWAP_ERC20.json"));
class OSWAP_ERC20 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ERC20_json_1.default.abi, OSWAP_ERC20_json_1.default.bytecode);
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
    async decimals() {
        let result = await this.call('decimals');
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
    async symbol() {
        let result = await this.call('symbol');
        return result;
    }
    async totalSupply() {
        let result = await this.call('totalSupply');
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
    assign() {
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.permit = Object.assign(this.permit_send, { call: this.permit_call });
        this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    }
}
exports.OSWAP_ERC20 = OSWAP_ERC20;
