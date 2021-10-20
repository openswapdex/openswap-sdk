"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/libraries/Math.json");
class Math extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
}
exports.Math = Math;
