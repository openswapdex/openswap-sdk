import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
export interface IDeployParams {
    ammFactory: string;
    oracleFactory: string;
    WETH: string;
}
export interface IGetAmountInParams {
    amountOut: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
    data: string;
}
export interface IGetAmountOutParams {
    amountIn: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
    data: string;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
    useOracle: boolean[];
    data: string;
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
    useOracle: boolean[];
    data: string;
}
export interface IGetLatestPriceParams {
    tokenIn: string;
    tokenOut: string;
    data: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
    useOracle: boolean[];
    data: string;
}
export declare class OSWAP_OracleRouter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    ammFactory: {
        (): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    };
    oracleFactory: {
        (): Promise<string>;
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
