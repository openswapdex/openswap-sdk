import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_HybridRouter2.json";

export interface IDeployParams {registry:string;WETH:string}
export interface IGetAmountsInEndsWithParams {amountOut:number|BigNumber;pair:string[];tokenOut:string;data:string}
export interface IGetAmountsInStartsWithParams {amountOut:number|BigNumber;pair:string[];tokenIn:string;data:string}
export interface IGetAmountsOutEndsWithParams {amountIn:number|BigNumber;pair:string[];tokenOut:string;data:string}
export interface IGetAmountsOutStartsWithParams {amountIn:number|BigNumber;pair:string[];tokenIn:string;data:string}
export interface IGetPathInParams {pair:string[];tokenIn:string}
export interface IGetPathOutParams {pair:string[];tokenOut:string}
export interface ISwapETHForExactTokensParams {amountOut:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactETHForTokensParams {amountOutMin:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactTokensForETHParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;pair:string[];tokenIn:string;to:string;deadline:number|BigNumber;data:string}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;pair:string[];tokenIn:string;to:string;deadline:number|BigNumber;data:string}
export interface ISwapTokensForExactETHParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;pair:string[];to:string;deadline:number|BigNumber;data:string}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;pair:string[];tokenOut:string;to:string;deadline:number|BigNumber;data:string}
export class OSWAP_HybridRouter2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.registry,params.WETH]);
    }
    WETH: {
        (): Promise<string>;
    }
    getAmountsInEndsWith: {
        (params: IGetAmountsInEndsWithParams): Promise<BigNumber[]>;
    }
    getAmountsInStartsWith: {
        (params: IGetAmountsInStartsWithParams): Promise<BigNumber[]>;
    }
    getAmountsOutEndsWith: {
        (params: IGetAmountsOutEndsWithParams): Promise<BigNumber[]>;
    }
    getAmountsOutStartsWith: {
        (params: IGetAmountsOutStartsWithParams): Promise<BigNumber[]>;
    }
    getPathIn: {
        (params: IGetPathInParams): Promise<string[]>;
    }
    getPathOut: {
        (params: IGetPathOutParams): Promise<string[]>;
    }
    registry: {
        (): Promise<string>;
    }
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams,_value:number|BigNumber) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams,_value:number|BigNumber) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber) => Promise<void>;
    }
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let getAmountsInEndsWithParams = (params: IGetAmountsInEndsWithParams) => [this.wallet.utils.toString(params.amountOut),params.pair,params.tokenOut,this.wallet.utils.stringToBytes(params.data)];
        let getAmountsInEndsWith_call = async (params: IGetAmountsInEndsWithParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsInEndsWith',getAmountsInEndsWithParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsInEndsWith = getAmountsInEndsWith_call
        let getAmountsInStartsWithParams = (params: IGetAmountsInStartsWithParams) => [this.wallet.utils.toString(params.amountOut),params.pair,params.tokenIn,this.wallet.utils.stringToBytes(params.data)];
        let getAmountsInStartsWith_call = async (params: IGetAmountsInStartsWithParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsInStartsWith',getAmountsInStartsWithParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsInStartsWith = getAmountsInStartsWith_call
        let getAmountsOutEndsWithParams = (params: IGetAmountsOutEndsWithParams) => [this.wallet.utils.toString(params.amountIn),params.pair,params.tokenOut,this.wallet.utils.stringToBytes(params.data)];
        let getAmountsOutEndsWith_call = async (params: IGetAmountsOutEndsWithParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOutEndsWith',getAmountsOutEndsWithParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOutEndsWith = getAmountsOutEndsWith_call
        let getAmountsOutStartsWithParams = (params: IGetAmountsOutStartsWithParams) => [this.wallet.utils.toString(params.amountIn),params.pair,params.tokenIn,this.wallet.utils.stringToBytes(params.data)];
        let getAmountsOutStartsWith_call = async (params: IGetAmountsOutStartsWithParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOutStartsWith',getAmountsOutStartsWithParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOutStartsWith = getAmountsOutStartsWith_call
        let getPathInParams = (params: IGetPathInParams) => [params.pair,params.tokenIn];
        let getPathIn_call = async (params: IGetPathInParams): Promise<string[]> => {
            let result = await this.call('getPathIn',getPathInParams(params));
            return result;
        }
        this.getPathIn = getPathIn_call
        let getPathOutParams = (params: IGetPathOutParams) => [params.pair,params.tokenOut];
        let getPathOut_call = async (params: IGetPathOutParams): Promise<string[]> => {
            let result = await this.call('getPathOut',getPathOutParams(params));
            return result;
        }
        this.getPathOut = getPathOut_call
        let registry_call = async (): Promise<string> => {
            let result = await this.call('registry');
            return result;
        }
        this.registry = registry_call
        let swapETHForExactTokensParams = (params: ISwapETHForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapETHForExactTokens_send = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapETHForExactTokens_call = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call:swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params: ISwapExactETHForTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactETHForTokens_send = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokens_call = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call:swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens',swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<void> => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens',swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return;
        }
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactETHForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForETHParams = (params: ISwapExactTokensForETHParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForETH_send = async (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return result;
        }
        let swapExactTokensForETH_call = async (params: ISwapExactTokensForETHParams): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call:swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens',swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens',swapExactTokensForETHSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForETHSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactETHParams = (params: ISwapTokensForExactETHParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.pair,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactETH_send = async (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return result;
        }
        let swapTokensForExactETH_call = async (params: ISwapTokensForExactETHParams): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call:swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.pair,params.tokenOut,params.to,this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<{path:string[],amounts:BigNumber[]}> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return {
                path: result.path,
                amounts: result.amounts.map(e=>new BigNumber(e))
            };
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}