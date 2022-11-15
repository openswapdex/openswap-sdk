import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
export interface IDeployParams {
    registry: string;
    WETH: string;
}
export interface IGetAmountsInEndsWithParams {
    amountOut: number | BigNumber;
    pair: string[];
    tokenOut: string;
    data: string;
}
export interface IGetAmountsInStartsWithParams {
    amountOut: number | BigNumber;
    pair: string[];
    tokenIn: string;
    data: string;
}
export interface IGetAmountsOutEndsWithParams {
    amountIn: number | BigNumber;
    pair: string[];
    tokenOut: string;
    data: string;
}
export interface IGetAmountsOutStartsWithParams {
    amountIn: number | BigNumber;
    pair: string[];
    tokenIn: string;
    data: string;
}
export interface IGetPathInParams {
    pair: string[];
    tokenIn: string;
}
export interface IGetPathOutParams {
    pair: string[];
    tokenOut: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    tokenIn: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    tokenIn: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    pair: string[];
    tokenOut: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export declare class OSWAP_HybridRouter2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    getAmountsInEndsWith: {
        (params: IGetAmountsInEndsWithParams): Promise<BigNumber[]>;
    };
    getAmountsInStartsWith: {
        (params: IGetAmountsInStartsWithParams): Promise<BigNumber[]>;
    };
    getAmountsOutEndsWith: {
        (params: IGetAmountsOutEndsWithParams): Promise<BigNumber[]>;
    };
    getAmountsOutStartsWith: {
        (params: IGetAmountsOutStartsWithParams): Promise<BigNumber[]>;
    };
    getPathIn: {
        (params: IGetPathInParams): Promise<string[]>;
    };
    getPathOut: {
        (params: IGetPathOutParams): Promise<string[]>;
    };
    registry: {
        (): Promise<string>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    private assign;
}
