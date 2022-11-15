"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor2 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_VotingExecutor2_json_1 = __importDefault(require("./OSWAP_VotingExecutor2.json"));
class OSWAP_VotingExecutor2 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingExecutor2_json_1.default.abi, OSWAP_VotingExecutor2_json_1.default.bytecode);
        this.assign();
    }
    deploy(factory) {
        return this.__deploy([factory]);
    }
    assign() {
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let governance_call = async () => {
            let result = await this.call('governance');
            return result;
        };
        this.governance = governance_call;
        let execute_send = async (params) => {
            let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)]);
            return result;
        };
        let execute_call = async (params) => {
            let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)]);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
    }
}
exports.OSWAP_VotingExecutor2 = OSWAP_VotingExecutor2;
