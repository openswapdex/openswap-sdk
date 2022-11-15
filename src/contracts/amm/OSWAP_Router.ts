import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_Router.json";

export interface IDeployParams {factory:string;WETH:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityETHParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountOutParams {amountIn:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IGetReservesParams {tokenA:string;tokenB:string}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityETHWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountETHMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISwapETHForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactETHForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForETHParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactETHParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class OSWAP_Router extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.factory,params.WETH]);
    }
    WETH: {
        (): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    addLiquidityETH: {
        (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams,_value:number|BigNumber) => Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}>;
    }
    factory: {
        (): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    }
    getReserves: {
        (params: IGetReservesParams): Promise<{reserveA:BigNumber,reserveB:BigNumber}>;
    }
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityETHWithPermit: {
        (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber) => Promise<void>;
    }
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [this.wallet.utils.toString(params.amountOut),params.tokenIn,params.tokenOut];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [this.wallet.utils.toString(params.amountIn),params.tokenIn,params.tokenOut];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [this.wallet.utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [this.wallet.utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let getReservesParams = (params: IGetReservesParams) => [params.tokenA,params.tokenB];
        let getReserves_call = async (params: IGetReservesParams): Promise<{reserveA:BigNumber,reserveB:BigNumber}> => {
            let result = await this.call('getReserves',getReservesParams(params));
            return {
                reserveA: new BigNumber(result.reserveA),
                reserveB: new BigNumber(result.reserveB)
            };
        }
        this.getReserves = getReserves_call
        let quoteParams = (params: IQuoteParams) => [this.wallet.utils.toString(params.amountA),this.wallet.utils.toString(params.reserveA),this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params));
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.amountADesired),this.wallet.utils.toString(params.amountBDesired),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityETHParams = (params: IAddLiquidityETHParams) => [params.token,this.wallet.utils.toString(params.amountTokenDesired),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountETHMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return result;
        }
        let addLiquidityETH_call = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call:addLiquidityETH_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityETHParams = (params: IRemoveLiquidityETHParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountETHMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETH',removeLiquidityETHParams(params));
            return result;
        }
        let removeLiquidityETH_call = async (params: IRemoveLiquidityETHParams): Promise<{amountToken:BigNumber,amountETH:BigNumber}> => {
            let result = await this.call('removeLiquidityETH',removeLiquidityETHParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH)
            };
        }
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call:removeLiquidityETH_call
        });
        let removeLiquidityETHSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountETHMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETHSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens',removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityETHSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens',removeLiquidityETHSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityETHSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityETHWithPermitParams = (params: IRemoveLiquidityETHWithPermitParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountETHMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermit_send = async (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHWithPermit',removeLiquidityETHWithPermitParams(params));
            return result;
        }
        let removeLiquidityETHWithPermit_call = async (params: IRemoveLiquidityETHWithPermitParams): Promise<{amountToken:BigNumber,amountETH:BigNumber}> => {
            let result = await this.call('removeLiquidityETHWithPermit',removeLiquidityETHWithPermitParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH)
            };
        }
        this.removeLiquidityETHWithPermit = Object.assign(removeLiquidityETHWithPermit_send, {
            call:removeLiquidityETHWithPermit_call
        });
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountETHMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
        });
        let swapETHForExactTokensParams = (params: ISwapETHForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapETHForExactTokens_send = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapETHForExactTokens_call = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call:swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params: ISwapExactETHForTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactETHForTokens_send = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokens_call = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call:swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
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
        let swapExactTokensForETHParams = (params: ISwapExactTokensForETHParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForETH_send = async (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return result;
        }
        let swapExactTokensForETH_call = async (params: ISwapExactTokensForETHParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForETH',swapExactTokensForETHParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call:swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
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
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
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
        let swapTokensForExactETHParams = (params: ISwapTokensForExactETHParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactETH_send = async (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return result;
        }
        let swapTokensForExactETH_call = async (params: ISwapTokensForExactETHParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactETH',swapTokensForExactETHParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call:swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}