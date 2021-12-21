"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Pair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/amm/OSWAP_Pair.json");
class OSWAP_Pair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    parseApprovalEvent(receipt) {
        let events = this.parseEvents(receipt, "Approval");
        return events.map(result => {
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_wallet_1.BigNumber(result.value)
            };
        });
    }
    parseBurnEvent(receipt) {
        let events = this.parseEvents(receipt, "Burn");
        return events.map(result => {
            return {
                sender: result.sender,
                amount0: new eth_wallet_1.BigNumber(result.amount0),
                amount1: new eth_wallet_1.BigNumber(result.amount1),
                to: result.to
            };
        });
    }
    parseMintEvent(receipt) {
        let events = this.parseEvents(receipt, "Mint");
        return events.map(result => {
            return {
                sender: result.sender,
                amount0: new eth_wallet_1.BigNumber(result.amount0),
                amount1: new eth_wallet_1.BigNumber(result.amount1)
            };
        });
    }
    parseProtocolFeeSetEvent(receipt) {
        let events = this.parseEvents(receipt, "ProtocolFeeSet");
        return events.map(result => {
            return new eth_wallet_1.BigNumber(result[0]);
        });
    }
    parseSwapEvent(receipt) {
        let events = this.parseEvents(receipt, "Swap");
        return events.map(result => {
            return {
                sender: result.sender,
                amount0In: new eth_wallet_1.BigNumber(result.amount0In),
                amount1In: new eth_wallet_1.BigNumber(result.amount1In),
                amount0Out: new eth_wallet_1.BigNumber(result.amount0Out),
                amount1Out: new eth_wallet_1.BigNumber(result.amount1Out),
                to: result.to
            };
        });
    }
    parseSyncEvent(receipt) {
        let events = this.parseEvents(receipt, "Sync");
        return events.map(result => {
            return {
                reserve0: new eth_wallet_1.BigNumber(result.reserve0),
                reserve1: new eth_wallet_1.BigNumber(result.reserve1)
            };
        });
    }
    parseTradeFeeSetEvent(receipt) {
        let events = this.parseEvents(receipt, "TradeFeeSet");
        return events.map(result => {
            return new eth_wallet_1.BigNumber(result[0]);
        });
    }
    parseTransferEvent(receipt) {
        let events = this.parseEvents(receipt, "Transfer");
        return events.map(result => {
            return {
                from: result.from,
                to: result.to,
                value: new eth_wallet_1.BigNumber(result.value)
            };
        });
    }
    async EIP712_TYPEHASH() {
        let result = await this.methods('EIP712_TYPEHASH');
        return result;
    }
    async MINIMUM_LIQUIDITY() {
        let result = await this.methods('MINIMUM_LIQUIDITY');
        return new eth_wallet_1.BigNumber(result);
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
    async burn(to) {
        let result = await this.methods('burn', to);
        return result;
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params) {
        let result = await this.methods('getAmountIn', params.tokenOut, eth_wallet_1.Utils.toString(params.amountOut));
        return new eth_wallet_1.BigNumber(result);
    }
    async getAmountOut(params) {
        let result = await this.methods('getAmountOut', params.tokenIn, eth_wallet_1.Utils.toString(params.amountIn));
        return new eth_wallet_1.BigNumber(result);
    }
    async getReserves() {
        let result = await this.methods('getReserves');
        return {
            _reserve0: new eth_wallet_1.BigNumber(result._reserve0),
            _reserve1: new eth_wallet_1.BigNumber(result._reserve1),
            _blockTimestampLast: new eth_wallet_1.BigNumber(result._blockTimestampLast)
        };
    }
    async initialize(params) {
        let result = await this.methods('initialize', params.token0, params.token1);
        return result;
    }
    async isLive() {
        let result = await this.methods('isLive');
        return result;
    }
    async kLast() {
        let result = await this.methods('kLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async mint(to) {
        let result = await this.methods('mint', to);
        return result;
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
    async price0CumulativeLast() {
        let result = await this.methods('price0CumulativeLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async price1CumulativeLast() {
        let result = await this.methods('price1CumulativeLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFee() {
        let result = await this.methods('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async setLive(isLive) {
        let result = await this.methods('setLive', isLive);
        return result;
    }
    async skim(to) {
        let result = await this.methods('skim', to);
        return result;
    }
    async swap(params) {
        let result = await this.methods('swap', eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, params.data);
        return result;
    }
    async symbol() {
        let result = await this.methods('symbol');
        return result;
    }
    async sync() {
        let result = await this.methods('sync');
        return result;
    }
    async token0() {
        let result = await this.methods('token0');
        return result;
    }
    async token1() {
        let result = await this.methods('token1');
        return result;
    }
    async totalSupply() {
        let result = await this.methods('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async tradeFee() {
        let result = await this.methods('tradeFee');
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
    async updateFee() {
        let result = await this.methods('updateFee');
        return result;
    }
    async updateProtocolFee() {
        let result = await this.methods('updateProtocolFee');
        return result;
    }
}
exports.OSWAP_Pair = OSWAP_Pair;
