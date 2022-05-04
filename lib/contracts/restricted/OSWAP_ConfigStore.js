"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ConfigStore = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_ConfigStore_json_1 = __importDefault(require("./OSWAP_ConfigStore.json"));
class OSWAP_ConfigStore extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ConfigStore_json_1.default.abi, OSWAP_ConfigStore_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    async customParam(param1) {
        let result = await this.call('customParam', [eth_wallet_1.Utils.stringToBytes32(param1)]);
        return result;
    }
    async customParamNames(param1) {
        let result = await this.call('customParamNames', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async customParamNamesIdx(param1) {
        let result = await this.call('customParamNamesIdx', [eth_wallet_1.Utils.stringToBytes32(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async customParamNamesLength() {
        let result = await this.call('customParamNamesLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async governance() {
        let result = await this.call('governance');
        return result;
    }
    async setCustomParam_send(params) {
        let result = await this.send('setCustomParam', [eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue)]);
        return result;
    }
    async setCustomParam_call(params) {
        let result = await this.call('setCustomParam', [eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue)]);
        return;
    }
    async setMultiCustomParam_send(params) {
        let result = await this.send('setMultiCustomParam', [eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue)]);
        return result;
    }
    async setMultiCustomParam_call(params) {
        let result = await this.call('setMultiCustomParam', [eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue)]);
        return;
    }
    assign() {
        this.setCustomParam = Object.assign(this.setCustomParam_send, { call: this.setCustomParam_call });
        this.setMultiCustomParam = Object.assign(this.setMultiCustomParam_send, { call: this.setMultiCustomParam_call });
    }
}
exports.OSWAP_ConfigStore = OSWAP_ConfigStore;
