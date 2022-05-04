"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_CertiKSecurityOracle = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_CertiKSecurityOracle_json_1 = __importDefault(require("./OSWAP_CertiKSecurityOracle.json"));
class OSWAP_CertiKSecurityOracle extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_CertiKSecurityOracle_json_1.default.abi, OSWAP_CertiKSecurityOracle_json_1.default.bytecode);
        this.assign();
    }
    deploy(oracleAddress) {
        return this._deploy(oracleAddress);
    }
    async getSecurityScore(oracle) {
        let result = await this.call('getSecurityScore', [oracle]);
        return new eth_wallet_1.BigNumber(result);
    }
    async oracleAddress() {
        let result = await this.call('oracleAddress');
        return result;
    }
    assign() {
    }
}
exports.OSWAP_CertiKSecurityOracle = OSWAP_CertiKSecurityOracle;
