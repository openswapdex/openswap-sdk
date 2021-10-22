"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/libraries/ERC20.json");
class ERC20 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.name, params.symbol);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval");
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer");
    }
    async allowance(params) {
        let result = await this.methods('allowance', params.owner, params.spender);
        return new eth_wallet_1.BigNumber(result);
    }
    async approve(params) {
        let result = await this.methods('approve', params.spender, eth_wallet_1.Utils.toString(params.amount));
        return result;
    }
    async balanceOf(account) {
        let result = await this.methods('balanceOf', account);
        return new eth_wallet_1.BigNumber(result);
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async decreaseAllowance(params) {
        let result = await this.methods('decreaseAllowance', params.spender, eth_wallet_1.Utils.toString(params.subtractedValue));
        return result;
    }
    async increaseAllowance(params) {
        let result = await this.methods('increaseAllowance', params.spender, eth_wallet_1.Utils.toString(params.addedValue));
        return result;
    }
    async name() {
        let result = await this.methods('name');
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
        let result = await this.methods('transfer', params.recipient, eth_wallet_1.Utils.toString(params.amount));
        return result;
    }
    async transferFrom(params) {
        let result = await this.methods('transferFrom', params.sender, params.recipient, eth_wallet_1.Utils.toString(params.amount));
        return result;
    }
}
exports.ERC20 = ERC20;
