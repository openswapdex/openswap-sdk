import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
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
export declare class OSWAP_HybridRouter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    };
    oracleFactory: {
        (): Promise<string>;
    };
    pairFor: {
        (params: IPairForParams): Promise<string>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    };
    private assign;
}
