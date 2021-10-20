import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleLiquidityProvider extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        factory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    addLiquidity(params: {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }): Promise<BigNumber>;
    addLiquidityETH(params: {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }): Promise<BigNumber>;
    factory(): Promise<string>;
    govToken(): Promise<string>;
    removeAllLiquidity(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeAllLiquidityETH(params: {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
    }>;
    removeLiquidity(params: {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH(params: {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
