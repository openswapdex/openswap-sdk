"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingExecutor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OAXDEX_VotingExecutor_json_1 = __importDefault(require("./OAXDEX_VotingExecutor.json"));
class OAXDEX_VotingExecutor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingExecutor_json_1.default.abi, OAXDEX_VotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.governance, params.admin]);
    }
    assign() {
        let admin_call = async () => {
            let result = await this.call('admin');
            return result;
        };
        this.admin = admin_call;
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
exports.OAXDEX_VotingExecutor = OAXDEX_VotingExecutor;
