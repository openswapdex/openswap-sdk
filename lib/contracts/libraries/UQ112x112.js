"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UQ112x112 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/libraries/UQ112x112.json");
class UQ112x112 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
}
exports.UQ112x112 = UQ112x112;
