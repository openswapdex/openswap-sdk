import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IAddLiquidityParams {
    provider: string;
    direction: boolean;
    staked: number | BigNumber;
    afterIndex: number | BigNumber;
    expire: number | BigNumber;
    enable: boolean;
}
export interface IFindPositionParams {
    direction: boolean;
    staked: number | BigNumber;
    afterIndex: number | BigNumber;
}
export interface IGetAmountInParams {
    tokenOut: string;
    amountOut: number | BigNumber;
    data: string;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
    data: string;
}
export interface IGetLatestPriceParams {
    direction: boolean;
    payload: string;
}
export interface IGetProviderOfferParams {
    provider: string;
    direction: boolean;
}
export interface IGetQueueParams {
    direction: boolean;
    start: number | BigNumber;
    end: number | BigNumber;
}
export interface IGetQueueFromIndexParams {
    direction: boolean;
    from: number | BigNumber;
    count: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IOffersParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IPauseOfferParams {
    provider: string;
    direction: boolean;
}
export interface IPurgeExpireParams {
    direction: boolean;
    startingIndex: number | BigNumber;
    limit: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    provider: string;
    direction: boolean;
    unstake: number | BigNumber;
    afterIndex: number | BigNumber;
    amountOut: number | BigNumber;
    reserveOut: number | BigNumber;
    expire: number | BigNumber;
    enable: boolean;
}
export interface IReplenishParams {
    provider: string;
    direction: boolean;
    afterIndex: number | BigNumber;
    amountIn: number | BigNumber;
    expire: number | BigNumber;
}
export interface IResumeOfferParams {
    provider: string;
    direction: boolean;
    afterIndex: number | BigNumber;
}
export interface ISetDelegatorParams {
    delegator: string;
    fee: number | BigNumber;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export declare class OSWAP_OraclePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_OraclePair.AddLiquidityEvent;
    parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorPauseOfferEvent[];
    decodeDelegatorPauseOfferEvent(event: Event): OSWAP_OraclePair.DelegatorPauseOfferEvent;
    parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorResumeOfferEvent[];
    decodeDelegatorResumeOfferEvent(event: Event): OSWAP_OraclePair.DelegatorResumeOfferEvent;
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.NewProviderEvent[];
    decodeNewProviderEvent(event: Event): OSWAP_OraclePair.NewProviderEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_OraclePair.RemoveLiquidityEvent;
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_OraclePair.ReplenishEvent[];
    decodeReplenishEvent(event: Event): OSWAP_OraclePair.ReplenishEvent;
    parseSetDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SetDelegatorEvent[];
    decodeSetDelegatorEvent(event: Event): OSWAP_OraclePair.SetDelegatorEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_OraclePair.SwapEvent;
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwappedOneProviderEvent[];
    decodeSwappedOneProviderEvent(event: Event): OSWAP_OraclePair.SwappedOneProviderEvent;
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<BigNumber>;
    };
    counter: {
        (): Promise<BigNumber>;
    };
    delegator: {
        (param1: string): Promise<string>;
    };
    factory: {
        (): Promise<string>;
    };
    feeBalance: {
        (): Promise<BigNumber>;
    };
    findPosition: {
        (params: IFindPositionParams): Promise<{
            afterIndex: BigNumber;
            nextIndex: BigNumber;
        }>;
    };
    first: {
        (param1: boolean): Promise<BigNumber>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getBalances: {
        (): Promise<{
            param1: BigNumber;
            param2: BigNumber;
            param3: BigNumber;
        }>;
    };
    getLastBalances: {
        (): Promise<{
            param1: BigNumber;
            param2: BigNumber;
        }>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    };
    getProviderOffer: {
        (params: IGetProviderOfferParams): Promise<{
            index: BigNumber;
            staked: BigNumber;
            amount: BigNumber;
            reserve: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
        }>;
    };
    getQueue: {
        (params: IGetQueueParams): Promise<{
            index: BigNumber[];
            provider: string[];
            amount: BigNumber[];
            staked: BigNumber[];
            expire: BigNumber[];
        }>;
    };
    getQueueFromIndex: {
        (params: IGetQueueFromIndexParams): Promise<{
            index: BigNumber[];
            provider: string[];
            amount: BigNumber[];
            staked: BigNumber[];
            expire: BigNumber[];
        }>;
    };
    govToken: {
        (): Promise<string>;
    };
    governance: {
        (): Promise<string>;
    };
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    };
    isLive: {
        (): Promise<boolean>;
    };
    lastGovBalance: {
        (): Promise<BigNumber>;
    };
    lastToken0Balance: {
        (): Promise<BigNumber>;
    };
    lastToken1Balance: {
        (): Promise<BigNumber>;
    };
    offers: {
        (params: IOffersParams): Promise<{
            provider: string;
            staked: BigNumber;
            amount: BigNumber;
            reserve: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
            isActive: boolean;
            enabled: boolean;
            prev: BigNumber;
            next: BigNumber;
        }>;
    };
    oracleLiquidityProvider: {
        (): Promise<string>;
    };
    pauseOffer: {
        (params: IPauseOfferParams): Promise<TransactionReceipt>;
        call: (params: IPauseOfferParams) => Promise<void>;
    };
    protocolFeeBalance0: {
        (): Promise<BigNumber>;
    };
    protocolFeeBalance1: {
        (): Promise<BigNumber>;
    };
    providerOfferIndex: {
        (param1: string): Promise<BigNumber>;
    };
    purgeExpire: {
        (params: IPurgeExpireParams): Promise<TransactionReceipt>;
        call: (params: IPurgeExpireParams) => Promise<BigNumber>;
    };
    queueSize: {
        (param1: boolean): Promise<BigNumber>;
    };
    redeemProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    removeAllLiquidity: {
        (provider: string): Promise<TransactionReceipt>;
        call: (provider: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
            staked: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    };
    replenish: {
        (params: IReplenishParams): Promise<TransactionReceipt>;
        call: (params: IReplenishParams) => Promise<void>;
    };
    resumeOffer: {
        (params: IResumeOfferParams): Promise<TransactionReceipt>;
        call: (params: IResumeOfferParams) => Promise<void>;
    };
    scaleDirection: {
        (): Promise<boolean>;
    };
    scaler: {
        (): Promise<BigNumber>;
    };
    setDelegator: {
        (params: ISetDelegatorParams): Promise<TransactionReceipt>;
        call: (params: ISetDelegatorParams) => Promise<void>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setPrivateReplenish: {
        (replenish: boolean): Promise<TransactionReceipt>;
        call: (replenish: boolean) => Promise<void>;
    };
    stakeBalance: {
        (): Promise<BigNumber>;
    };
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    };
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0: {
        (): Promise<string>;
    };
    token1: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_OraclePair {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        staked: BigNumber;
        amount: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        expire: BigNumber;
        enable: boolean;
        _event: Event;
    }
    interface DelegatorPauseOfferEvent {
        delegator: string;
        provider: string;
        direction: boolean;
        _event: Event;
    }
    interface DelegatorResumeOfferEvent {
        delegator: string;
        provider: string;
        direction: boolean;
        _event: Event;
    }
    interface NewProviderEvent {
        provider: string;
        index: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityEvent {
        provider: string;
        direction: boolean;
        unstake: BigNumber;
        amountOut: BigNumber;
        reserveOut: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        expire: BigNumber;
        enable: boolean;
        _event: Event;
    }
    interface ReplenishEvent {
        provider: string;
        direction: boolean;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface SetDelegatorEvent {
        provider: string;
        delegator: string;
        _event: Event;
    }
    interface SwapEvent {
        to: string;
        direction: boolean;
        price: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwappedOneProviderEvent {
        provider: string;
        direction: boolean;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newCounterReserveBalance: BigNumber;
        _event: Event;
    }
}
