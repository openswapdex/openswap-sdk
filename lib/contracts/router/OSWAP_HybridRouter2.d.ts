import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouter2 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        registry: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    getAmountsInEndsWith(params: {
        amountOut: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsInStartsWith(params: {
        amountOut: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOutEndsWith(params: {
        amountIn: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOutStartsWith(params: {
        amountIn: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }): Promise<BigNumber[]>;
    getPathIn(params: {
        pair: string[];
        tokenIn: string;
    }): Promise<string[]>;
    getPathOut(params: {
        pair: string[];
        tokenOut: string;
    }): Promise<string[]>;
    registry(): Promise<string>;
    swapETHForExactTokens(params: {
        amountOut: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactTokensForETH(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        tokenOut: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
}
