"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAmmPair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/MockAmmPair.json");
class MockAmmPair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.token0, params.token1);
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync");
    }
    async __blockTimestampLast() {
        let result = await this.methods('__blockTimestampLast');
        return new eth_wallet_1.BigNumber(result);
    }
    async __reserve0() {
        let result = await this.methods('__reserve0');
        return new eth_wallet_1.BigNumber(result);
    }
    async __reserve1() {
        let result = await this.methods('__reserve1');
        return new eth_wallet_1.BigNumber(result);
    }
    async getReserves() {
        let result = await this.methods('getReserves');
        return {
            reserve0: new eth_wallet_1.BigNumber(result.reserve0),
            reserve1: new eth_wallet_1.BigNumber(result.reserve1),
            blockTimestampLast: new eth_wallet_1.BigNumber(result.blockTimestampLast)
        };
    }
    async setReserves(params) {
        let result = await this.methods('setReserves', eth_wallet_1.Utils.toString(params.reserve0), eth_wallet_1.Utils.toString(params.reserve1));
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
}
exports.MockAmmPair = MockAmmPair;
