"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedLiquidityProvider1 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RestrictedLiquidityProvider1_json_1 = __importDefault(require("./OSWAP_RestrictedLiquidityProvider1.json"));
class OSWAP_RestrictedLiquidityProvider1 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedLiquidityProvider1_json_1.default.abi, OSWAP_RestrictedLiquidityProvider1_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.factory, params.WETH]);
    }
    assign() {
        let WETH_call = async () => {
            let result = await this.call('WETH');
            return result;
        };
        this.WETH = WETH_call;
        let configStore_call = async () => {
            let result = await this.call('configStore');
            return result;
        };
        this.configStore = configStore_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let govToken_call = async () => {
            let result = await this.call('govToken');
            return result;
        };
        this.govToken = govToken_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, params.addingTokenA, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountIn), params.allowAll, this.wallet.utils.toString(params.restrictedPrice), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return {
                pair: result.pair,
                _offerIndex: new eth_contract_1.BigNumber(result._offerIndex)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityAndTraderParams = (params) => [this.wallet.utils.toString(params.param), params.trader, this.wallet.utils.toString(params.allocation)];
        let addLiquidityAndTrader_send = async (params) => {
            let result = await this.send('addLiquidityAndTrader', addLiquidityAndTraderParams(params));
            return result;
        };
        let addLiquidityAndTrader_call = async (params) => {
            let result = await this.call('addLiquidityAndTrader', addLiquidityAndTraderParams(params));
            return {
                pair: result.pair,
                offerIndex: new eth_contract_1.BigNumber(result.offerIndex)
            };
        };
        this.addLiquidityAndTrader = Object.assign(addLiquidityAndTrader_send, {
            call: addLiquidityAndTrader_call
        });
        let addLiquidityETHParams = (params) => [params.tokenA, params.addingTokenA, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountAIn), params.allowAll, this.wallet.utils.toString(params.restrictedPrice), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, _value) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), { value: _value });
            return result;
        };
        let addLiquidityETH_call = async (params, _value) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), { value: _value });
            return {
                pair: result.pair,
                _offerIndex: new eth_contract_1.BigNumber(result._offerIndex)
            };
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call
        });
        let addLiquidityETHAndTraderParams = (params) => [this.wallet.utils.toString(params.param), params.trader, this.wallet.utils.toString(params.allocation)];
        let addLiquidityETHAndTrader_send = async (params, _value) => {
            let result = await this.send('addLiquidityETHAndTrader', addLiquidityETHAndTraderParams(params), { value: _value });
            return result;
        };
        let addLiquidityETHAndTrader_call = async (params, _value) => {
            let result = await this.call('addLiquidityETHAndTrader', addLiquidityETHAndTraderParams(params), { value: _value });
            return {
                pair: result.pair,
                offerIndex: new eth_contract_1.BigNumber(result.offerIndex)
            };
        };
        this.addLiquidityETHAndTrader = Object.assign(addLiquidityETHAndTrader_send, {
            call: addLiquidityETHAndTrader_call
        });
        let removeAllLiquidityParams = (params) => [params.tokenA, params.tokenB, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidity_send = async (params) => {
            let result = await this.send('removeAllLiquidity', removeAllLiquidityParams(params));
            return result;
        };
        let removeAllLiquidity_call = async (params) => {
            let result = await this.call('removeAllLiquidity', removeAllLiquidityParams(params));
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call
        });
        let removeAllLiquidityETHParams = (params) => [params.tokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidityETH_send = async (params) => {
            let result = await this.send('removeAllLiquidityETH', removeAllLiquidityETHParams(params));
            return result;
        };
        let removeAllLiquidityETH_call = async (params) => {
            let result = await this.call('removeAllLiquidityETH', removeAllLiquidityETHParams(params));
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH)
            };
        };
        this.removeAllLiquidityETH = Object.assign(removeAllLiquidityETH_send, {
            call: removeAllLiquidityETH_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.removingTokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.receivingOut), this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityETHParams = (params) => [params.tokenA, params.removingTokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.receivingOut), this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params) => {
            let result = await this.send('removeLiquidityETH', removeLiquidityETHParams(params));
            return result;
        };
        let removeLiquidityETH_call = async (params) => {
            let result = await this.call('removeLiquidityETH', removeLiquidityETHParams(params));
            return;
        };
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call: removeLiquidityETH_call
        });
    }
}
exports.OSWAP_RestrictedLiquidityProvider1 = OSWAP_RestrictedLiquidityProvider1;