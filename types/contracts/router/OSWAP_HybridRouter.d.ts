import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    oracleFactory: string;
    WETH: string;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface IPairForParams {
    tokenA: string;
    tokenB: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    pair: string[];
    fee: (number | BigNumber)[];
    data: string;
}
export declare class OSWAP_HybridRouter extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    oracleFactory: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairFor: {
        (params: IPairForParams, options?: TransactionOptions): Promise<string>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    private assign;
}