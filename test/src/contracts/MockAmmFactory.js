"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAmmFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/MockAmmFactory.json");
class MockAmmFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated");
    }
    async createPair(params) {
        let result = await this.methods('createPair', params.tokenA, params.tokenB);
        return result;
    }
    async getPair(params) {
        let result = await this.methods('getPair', params.param1, params.param2);
        return result;
    }
    async setPair(params) {
        let result = await this.methods('setPair', params.token0, params.token1, params.pair);
        return result;
    }
}
exports.MockAmmFactory = MockAmmFactory;
