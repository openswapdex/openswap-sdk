import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    addingTokenA: boolean;
    staked: number | BigNumber;
    afterIndex: number | BigNumber;
    amountIn: number | BigNumber;
    expire: number | BigNumber;
    enable: boolean;
    deadline: number | BigNumber;
}
export interface IAddLiquidityETHParams {
    tokenA: string;
    addingTokenA: boolean;
    staked: number | BigNumber;
    afterIndex: number | BigNumber;
    amountAIn: number | BigNumber;
    expire: number | BigNumber;
    enable: boolean;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityParams {
    tokenA: string;
    tokenB: string;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityETHParams {
    tokenA: string;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityParams {
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
}
export interface IRemoveLiquidityETHParams {
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
}
export declare class OSWAP_OracleLiquidityProvider extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<BigNumber>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    govToken: {
        (): Promise<string>;
    };
    removeAllLiquidity: {
        (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeAllLiquidityETH: {
        (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityETHParams) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    };
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams) => Promise<void>;
    };
    private assign;
}
