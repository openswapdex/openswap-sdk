"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ConfigStore = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../bin/restricted/OSWAP_ConfigStore.json");
class OSWAP_ConfigStore extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance) {
        return this._deploy(governance);
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet");
    }
    async customParam(param1) {
        let result = await this.methods('customParam', param1);
        return result;
    }
    async customParamNames(param1) {
        let result = await this.methods('customParamNames', param1);
        return result;
    }
    async customParamNamesIdx(param1) {
        let result = await this.methods('customParamNamesIdx', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async customParamNamesLength() {
        let result = await this.methods('customParamNamesLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async governance() {
        let result = await this.methods('governance');
        return result;
    }
    async setCustomParam(params) {
        let result = await this.methods('setCustomParam', eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue));
        return result;
    }
    async setMultiCustomParam(params) {
        let result = await this.methods('setMultiCustomParam', eth_wallet_1.Utils.stringToBytes32(params.paramName), eth_wallet_1.Utils.stringToBytes32(params.paramValue));
        return result;
    }
}
exports.OSWAP_ConfigStore = OSWAP_ConfigStore;
