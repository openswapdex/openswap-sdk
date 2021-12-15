import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleRouter extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        ammFactory: string;
        oracleFactory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    ammFactory(): Promise<string>;
    getAmountIn(params: {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }): Promise<BigNumber>;
    getAmountsIn(params: {
        amountOut: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOut(params: {
        amountIn: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }): Promise<BigNumber[]>;
    getLatestPrice(params: {
        tokenIn: string;
        tokenOut: string;
        data: string;
    }): Promise<BigNumber>;
    oracleFactory(): Promise<string>;
    swapETHForExactTokens(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactTokensForETH(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }): Promise<TransactionReceipt>;
}
