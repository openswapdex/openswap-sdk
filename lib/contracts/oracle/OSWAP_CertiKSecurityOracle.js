"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_CertiKSecurityOracle = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/oracle/OSWAP_CertiKSecurityOracle.json");
class OSWAP_CertiKSecurityOracle extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(oracleAddress) {
        return this._deploy(oracleAddress);
    }
    async getSecurityScore(oracle) {
        let result = await this.methods('getSecurityScore', oracle);
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleAddress() {
        let result = await this.methods('oracleAddress');
        return result;
    }
}
exports.OSWAP_CertiKSecurityOracle = OSWAP_CertiKSecurityOracle;
