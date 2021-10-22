import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedLiquidityProvider extends Contract {
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
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<{
        pair: string;
        _offerIndex: BigNumber;
    }>;
    addLiquidityAndTrader(params: {
        param: number | BigNumber;
        trader: string[];
        allocation: number[] | BigNumber[];
    }): Promise<{
        pair: string;
        offerIndex: BigNumber;
    }>;
    addLiquidityETH(params: {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<{
        pair: string;
        _offerIndex: BigNumber;
    }>;
    addLiquidityETHAndTrader(params: {
        param: number | BigNumber;
        trader: string[];
        allocation: number[] | BigNumber[];
    }): Promise<{
        pair: string;
        offerIndex: BigNumber;
    }>;
    configStore(): Promise<string>;
    factory(): Promise<string>;
    govToken(): Promise<string>;
    removeAllLiquidity(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeAllLiquidityETH(params: {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
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
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH(params: {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
}