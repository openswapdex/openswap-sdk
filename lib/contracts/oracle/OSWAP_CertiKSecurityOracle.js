"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_CertiKSecurityOracle = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_CertiKSecurityOracle_json_1 = __importDefault(require("./OSWAP_CertiKSecurityOracle.json"));
class OSWAP_CertiKSecurityOracle extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_CertiKSecurityOracle_json_1.default.abi, OSWAP_CertiKSecurityOracle_json_1.default.bytecode);
        this.assign();
    }
    deploy(oracleAddress) {
        return this.__deploy([oracleAddress]);
    }
    assign() {
        let getSecurityScore_call = async (oracle) => {
            let result = await this.call('getSecurityScore', [oracle]);
            return new eth_contract_1.BigNumber(result);
        };
        this.getSecurityScore = getSecurityScore_call;
        let oracleAddress_call = async () => {
            let result = await this.call('oracleAddress');
            return result;
        };
        this.oracleAddress = oracleAddress_call;
    }
}
exports.OSWAP_CertiKSecurityOracle = OSWAP_CertiKSecurityOracle;
