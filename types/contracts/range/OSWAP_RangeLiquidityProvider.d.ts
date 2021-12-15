import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RangeLiquidityProvider extends Contract {
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
        amountIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidityETH(params: {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountAIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    factory(): Promise<string>;
    govToken(): Promise<string>;
    removeAllLiquidity(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeAllLiquidityETH(params: {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity(params: {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH(params: {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    updateProviderOffer(params: {
        tokenA: string;
        tokenB: string;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
