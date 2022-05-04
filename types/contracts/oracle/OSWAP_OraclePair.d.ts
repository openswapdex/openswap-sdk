import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    addLiquidity_send(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<BigNumber>;
    addLiquidity: {
        (params: {
            provider: string;
            direction: boolean;
            staked: number | BigNumber;
            afterIndex: number | BigNumber;
            expire: number | BigNumber;
            enable: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            staked: number | BigNumber;
            afterIndex: number | BigNumber;
            expire: number | BigNumber;
            enable: boolean;
        }) => Promise<BigNumber>;
    };
    counter(): Promise<BigNumber>;
    delegator(param1: string): Promise<string>;
    factory(): Promise<string>;
    feeBalance(): Promise<BigNumber>;
    findPosition(params: {
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
    }): Promise<{
        afterIndex: BigNumber;
        nextIndex: BigNumber;
    }>;
    first(param1: boolean): Promise<BigNumber>;
    getAmountIn(params: {
        tokenOut: string;
        amountOut: number | BigNumber;
        data: string;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        tokenIn: string;
        amountIn: number | BigNumber;
        data: string;
    }): Promise<BigNumber>;
    getBalances(): Promise<{
        param1: BigNumber;
        param2: BigNumber;
        param3: BigNumber;
    }>;
    getLastBalances(): Promise<{
        param1: BigNumber;
        param2: BigNumber;
    }>;
    getLatestPrice(params: {
        direction: boolean;
        payload: string;
    }): Promise<BigNumber>;
    getProviderOffer(params: {
        provider: string;
        direction: boolean;
    }): Promise<{
        index: BigNumber;
        staked: BigNumber;
        amount: BigNumber;
        reserve: BigNumber;
        expire: BigNumber;
        privateReplenish: boolean;
    }>;
    getQueue(params: {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }): Promise<{
        index: BigNumber[];
        provider: string[];
        amount: BigNumber[];
        staked: BigNumber[];
        expire: BigNumber[];
    }>;
    getQueueFromIndex(params: {
        direction: boolean;
        from: number | BigNumber;
        count: number | BigNumber;
    }): Promise<{
        index: BigNumber[];
        provider: string[];
        amount: BigNumber[];
        staked: BigNumber[];
        expire: BigNumber[];
    }>;
    govToken(): Promise<string>;
    governance(): Promise<string>;
    initialize_send(params: {
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    initialize_call(params: {
        token0: string;
        token1: string;
    }): Promise<void>;
    initialize: {
        (params: {
            token0: string;
            token1: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token0: string;
            token1: string;
        }) => Promise<void>;
    };
    isLive(): Promise<boolean>;
    lastGovBalance(): Promise<BigNumber>;
    lastToken0Balance(): Promise<BigNumber>;
    lastToken1Balance(): Promise<BigNumber>;
    offers(params: {
        param1: boolean;
        param2: number | BigNumber;
    }): Promise<{
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
    oracleLiquidityProvider(): Promise<string>;
    pauseOffer_send(params: {
        provider: string;
        direction: boolean;
    }): Promise<TransactionReceipt>;
    pauseOffer_call(params: {
        provider: string;
        direction: boolean;
    }): Promise<void>;
    pauseOffer: {
        (params: {
            provider: string;
            direction: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
        }) => Promise<void>;
    };
    protocolFeeBalance0(): Promise<BigNumber>;
    protocolFeeBalance1(): Promise<BigNumber>;
    providerOfferIndex(param1: string): Promise<BigNumber>;
    purgeExpire_send(params: {
        direction: boolean;
        startingIndex: number | BigNumber;
        limit: number | BigNumber;
    }): Promise<TransactionReceipt>;
    purgeExpire_call(params: {
        direction: boolean;
        startingIndex: number | BigNumber;
        limit: number | BigNumber;
    }): Promise<BigNumber>;
    purgeExpire: {
        (params: {
            direction: boolean;
            startingIndex: number | BigNumber;
            limit: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            direction: boolean;
            startingIndex: number | BigNumber;
            limit: number | BigNumber;
        }) => Promise<BigNumber>;
    };
    queueSize(param1: boolean): Promise<BigNumber>;
    redeemProtocolFee_send(): Promise<TransactionReceipt>;
    redeemProtocolFee_call(): Promise<void>;
    redeemProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    removeAllLiquidity_send(provider: string): Promise<TransactionReceipt>;
    removeAllLiquidity_call(provider: string): Promise<{
        amount0: BigNumber;
        amount1: BigNumber;
        staked: BigNumber;
    }>;
    removeAllLiquidity: {
        (provider: string): Promise<TransactionReceipt>;
        call: (provider: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
            staked: BigNumber;
        }>;
    };
    removeLiquidity_send(params: {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<void>;
    removeLiquidity: {
        (params: {
            provider: string;
            direction: boolean;
            unstake: number | BigNumber;
            afterIndex: number | BigNumber;
            amountOut: number | BigNumber;
            reserveOut: number | BigNumber;
            expire: number | BigNumber;
            enable: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            unstake: number | BigNumber;
            afterIndex: number | BigNumber;
            amountOut: number | BigNumber;
            reserveOut: number | BigNumber;
            expire: number | BigNumber;
            enable: boolean;
        }) => Promise<void>;
    };
    replenish_send(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
    replenish_call(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<void>;
    replenish: {
        (params: {
            provider: string;
            direction: boolean;
            afterIndex: number | BigNumber;
            amountIn: number | BigNumber;
            expire: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            afterIndex: number | BigNumber;
            amountIn: number | BigNumber;
            expire: number | BigNumber;
        }) => Promise<void>;
    };
    resumeOffer_send(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
    }): Promise<TransactionReceipt>;
    resumeOffer_call(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
    }): Promise<void>;
    resumeOffer: {
        (params: {
            provider: string;
            direction: boolean;
            afterIndex: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            afterIndex: number | BigNumber;
        }) => Promise<void>;
    };
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setDelegator_send(params: {
        delegator: string;
        fee: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setDelegator_call(params: {
        delegator: string;
        fee: number | BigNumber;
    }): Promise<void>;
    setDelegator: {
        (params: {
            delegator: string;
            fee: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            delegator: string;
            fee: number | BigNumber;
        }) => Promise<void>;
    };
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setPrivateReplenish_send(replenish: boolean): Promise<TransactionReceipt>;
    setPrivateReplenish_call(replenish: boolean): Promise<void>;
    setPrivateReplenish: {
        (replenish: boolean): Promise<TransactionReceipt>;
        call: (replenish: boolean) => Promise<void>;
    };
    stakeBalance(): Promise<BigNumber>;
    swap_send(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<TransactionReceipt>;
    swap_call(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<void>;
    swap: {
        (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            data: string;
        }) => Promise<void>;
    };
    sync_send(): Promise<TransactionReceipt>;
    sync_call(): Promise<void>;
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0(): Promise<string>;
    token1(): Promise<string>;
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
