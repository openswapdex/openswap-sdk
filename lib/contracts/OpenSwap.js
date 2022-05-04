"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenSwap = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OpenSwap_json_1 = __importDefault(require("./OpenSwap.json"));
class OpenSwap extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OpenSwap_json_1.default.abi, OpenSwap_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.minter, params.initSupplyTo, eth_wallet_1.Utils.toString(params.initSupply), eth_wallet_1.Utils.toString(params.totalSupply));
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
    async allowance(params) {
        let result = await this.call('allowance', [params.owner, params.spender]);
        return new eth_wallet_1.BigNumber(result);
    }
    async approve_send(params) {
        let result = await this.send('approve', [params.spender, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async approve_call(params) {
        let result = await this.call('approve', [params.spender, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async balanceOf(account) {
        let result = await this.call('balanceOf', [account]);
        return new eth_wallet_1.BigNumber(result);
    }
    async cap() {
        let result = await this.call('cap');
        return new eth_wallet_1.BigNumber(result);
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async decreaseAllowance_send(params) {
        let result = await this.send('decreaseAllowance', [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)]);
        return result;
    }
    async decreaseAllowance_call(params) {
        let result = await this.call('decreaseAllowance', [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)]);
        return result;
    }
    async increaseAllowance_send(params) {
        let result = await this.send('increaseAllowance', [params.spender, eth_wallet_1.Utils.toString(params.addedValue)]);
        return result;
    }
    async increaseAllowance_call(params) {
        let result = await this.call('increaseAllowance', [params.spender, eth_wallet_1.Utils.toString(params.addedValue)]);
        return result;
    }
    async mint_send(params) {
        let result = await this.send('mint', [params.account, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async mint_call(params) {
        let result = await this.call('mint', [params.account, eth_wallet_1.Utils.toString(params.amount)]);
        return;
    }
    async minter() {
        let result = await this.call('minter');
        return result;
    }
    async name() {
        let result = await this.call('name');
        return result;
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
        let result = await this.send('transfer', [params.recipient, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async transfer_call(params) {
        let result = await this.call('transfer', [params.recipient, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async transferFrom_send(params) {
        let result = await this.send('transferFrom', [params.sender, params.recipient, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async transferFrom_call(params) {
        let result = await this.call('transferFrom', [params.sender, params.recipient, eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    assign() {
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.decreaseAllowance = Object.assign(this.decreaseAllowance_send, { call: this.decreaseAllowance_call });
        this.increaseAllowance = Object.assign(this.increaseAllowance_send, { call: this.increaseAllowance_call });
        this.mint = Object.assign(this.mint_send, { call: this.mint_call });
        this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    }
}
exports.OpenSwap = OpenSwap;
