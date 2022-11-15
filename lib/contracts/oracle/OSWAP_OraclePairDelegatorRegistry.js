"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OraclePairDelegatorRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OraclePairDelegatorRegistry_json_1 = __importDefault(require("./OSWAP_OraclePairDelegatorRegistry.json"));
class OSWAP_OraclePairDelegatorRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OraclePairDelegatorRegistry_json_1.default.abi, OSWAP_OraclePairDelegatorRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseAddDelegatorEvent(receipt) {
        return this.parseEvents(receipt, "AddDelegator").map(e => this.decodeAddDelegatorEvent(e));
    }
    decodeAddDelegatorEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    parseRemoveDelegatorEvent(receipt) {
        return this.parseEvents(receipt, "RemoveDelegator").map(e => this.decodeRemoveDelegatorEvent(e));
    }
    decodeRemoveDelegatorEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    assign() {
        let delegatorsParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let delegators_call = async (params) => {
            let result = await this.call('delegators', delegatorsParams(params));
            return result;
        };
        this.delegators = delegators_call;
        let delegatorsIdxParams = (params) => [params.param1, params.param2];
        let delegatorsIdx_call = async (params) => {
            let result = await this.call('delegatorsIdx', delegatorsIdxParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.delegatorsIdx = delegatorsIdx_call;
        let getDelegatorsLength_call = async (provider) => {
            let result = await this.call('getDelegatorsLength', [provider]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.getDelegatorsLength = getDelegatorsLength_call;
        let getProviderDelegatorsParams = (params) => [params.provider, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.length)];
        let getProviderDelegators_call = async (params) => {
            let result = await this.call('getProviderDelegators', getProviderDelegatorsParams(params));
            return result;
        };
        this.getProviderDelegators = getProviderDelegators_call;
        let isDelegatorParams = (params) => [params.provider, params.delegator];
        let isDelegator_call = async (params) => {
            let result = await this.call('isDelegator', isDelegatorParams(params));
            return result;
        };
        this.isDelegator = isDelegator_call;
        let addDelegator_send = async (delegator) => {
            let result = await this.send('addDelegator', [delegator]);
            return result;
        };
        let addDelegator_call = async (delegator) => {
            let result = await this.call('addDelegator', [delegator]);
            return;
        };
        this.addDelegator = Object.assign(addDelegator_send, {
            call: addDelegator_call
        });
        let removeDelegator_send = async (delegator) => {
            let result = await this.send('removeDelegator', [delegator]);
            return result;
        };
        let removeDelegator_call = async (delegator) => {
            let result = await this.call('removeDelegator', [delegator]);
            return;
        };
        this.removeDelegator = Object.assign(removeDelegator_send, {
            call: removeDelegator_call
        });
    }
}
exports.OSWAP_OraclePairDelegatorRegistry = OSWAP_OraclePairDelegatorRegistry;
