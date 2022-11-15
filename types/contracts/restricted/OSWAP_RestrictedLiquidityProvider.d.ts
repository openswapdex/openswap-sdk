import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityParams {
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
}
export interface IAddLiquidityAndTraderParams {
    param: (number | BigNumber)[];
    trader: string[];
    allocation: (number | BigNumber)[];
}
export interface IAddLiquidityETHParams {
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
}
export interface IAddLiquidityETHAndTraderParams {
    param: (number | BigNumber)[];
    trader: string[];
    allocation: (number | BigNumber)[];
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
export declare class OSWAP_RestrictedLiquidityProvider extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WETH: {
        (): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityAndTrader: {
        (params: IAddLiquidityAndTraderParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityAndTraderParams) => Promise<{
            pair: string;
            offerIndex: BigNumber;
        }>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityETHAndTrader: {
        (params: IAddLiquidityETHAndTraderParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHAndTraderParams, _value: number | BigNumber) => Promise<{
            pair: string;
            offerIndex: BigNumber;
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
