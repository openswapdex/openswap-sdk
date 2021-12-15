import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_Router extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        factory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    addLiquidity(params: {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidityETH(params: {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    factory(): Promise<string>;
    getAmountIn(params: {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }): Promise<BigNumber>;
    getAmountsIn(params: {
        amountOut: number | BigNumber;
        path: string[];
    }): Promise<BigNumber[]>;
    getAmountsOut(params: {
        amountIn: number | BigNumber;
        path: string[];
    }): Promise<BigNumber[]>;
    getReserves(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<{
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    quote(params: {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity(params: {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETHSupportingFeeOnTransferTokens(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETHWithPermit(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    removeLiquidityWithPermit(params: {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    swapETHForExactTokens(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactTokensForETH(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
