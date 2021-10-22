"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ERC20 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/amm/OSWAP_ERC20.json");
class OSWAP_ERC20 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval");
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer");
    }
    async EIP712_TYPEHASH() {
        let result = await this.methods('EIP712_TYPEHASH');
        return result;
    }
    async NAME_HASH() {
        let result = await this.methods('NAME_HASH');
        return result;
    }
    async PERMIT_TYPEHASH() {
        let result = await this.methods('PERMIT_TYPEHASH');
        return result;
    }
    async VERSION_HASH() {
        let result = await this.methods('VERSION_HASH');
        return result;
    }
    async allowance(params) {
        let result = await this.methods('allowance', params.param1, params.param2);
        return new eth_wallet_1.BigNumber(result);
    }
    async approve(params) {
        let result = await this.methods('approve', params.spender, eth_wallet_1.Utils.toString(params.value));
        return result;
    }
    async balanceOf(param1) {
        let result = await this.methods('balanceOf', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async name() {
        let result = await this.methods('name');
        return result;
    }
    async nonces(param1) {
        let result = await this.methods('nonces', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async permit(params) {
        let result = await this.methods('permit', params.owner, params.spender, eth_wallet_1.Utils.toString(params.value), eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s));
        return result;
    }
    async symbol() {
        let result = await this.methods('symbol');
        return result;
    }
    async totalSupply() {
        let result = await this.methods('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async transfer(params) {
        let result = await this.methods('transfer', params.to, eth_wallet_1.Utils.toString(params.value));
        return result;
    }
    async transferFrom(params) {
        let result = await this.methods('transferFrom', params.from, params.to, eth_wallet_1.Utils.toString(params.value));
        return result;
    }
}
exports.OSWAP_ERC20 = OSWAP_ERC20;
