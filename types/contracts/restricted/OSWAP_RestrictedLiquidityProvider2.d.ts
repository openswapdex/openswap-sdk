import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityETHWithFeeParams {
    param: (number | BigNumber)[];
    feeIn: number | BigNumber;
}
export interface IAddLiquidityWithFeeParams {
    param: (number | BigNumber)[];
    feeIn: number | BigNumber;
}
export interface IRemoveAllLiquidityParams {
    tokenA: string;
    tokenB: string;
    to: string;
    pairIndex: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityETHParams {
    tokenA: string;
    to: string;
    pairIndex: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    removingTokenA: boolean;
    to: string;
    pairIndex: number | BigNumber;
    offerIndex: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHParams {
    tokenA: string;
    removingTokenA: boolean;
    to: string;
    pairIndex: number | BigNumber;
    offerIndex: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    deadline: number | BigNumber;
}
export declare class OSWAP_RestrictedLiquidityProvider2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    addLiquidityETHWithFee: {
        (params: IAddLiquidityETHWithFeeParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHWithFeeParams, _value: number | BigNumber) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityWithFee: {
        (params: IAddLiquidityWithFeeParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityWithFeeParams) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    configStore: {
        (): Promise<string>;
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
