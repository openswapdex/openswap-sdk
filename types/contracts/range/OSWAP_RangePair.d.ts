import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_RangePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_RangePair.AddLiquidityEvent;
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[];
    decodeNewProviderEvent(event: Event): OSWAP_RangePair.NewProviderEvent;
    parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[];
    decodeRemoveAllLiquidityEvent(event: Event): OSWAP_RangePair.RemoveAllLiquidityEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RangePair.RemoveLiquidityEvent;
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[];
    decodeReplenishEvent(event: Event): OSWAP_RangePair.ReplenishEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RangePair.SwapEvent;
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[];
    decodeSwappedOneProviderEvent(event: Event): OSWAP_RangePair.SwappedOneProviderEvent;
    parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[];
    decodeUpdateProviderOfferEvent(event: Event): OSWAP_RangePair.UpdateProviderOfferEvent;
    addLiquidity_send(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<BigNumber>;
    addLiquidity: {
        (params: {
            provider: string;
            direction: boolean;
            staked: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            staked: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }) => Promise<BigNumber>;
    };
    counter(): Promise<BigNumber>;
    factory(): Promise<string>;
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
    getOffers(params: {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }): Promise<{
        provider: string[];
        amountAndReserve: BigNumber[];
        lowerLimitAndUpperLimit: BigNumber[];
        startDateAndExpire: BigNumber[];
        privateReplenish: boolean[];
    }>;
    getProviderOffer(params: {
        provider: string;
        direction: boolean;
    }): Promise<{
        index: BigNumber;
        staked: BigNumber;
        amount: BigNumber;
        reserve: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        privateReplenish: boolean;
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
        amount: BigNumber;
        reserve: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        privateReplenish: boolean;
    }>;
    oracleFactory(): Promise<string>;
    protocolFeeBalance0(): Promise<BigNumber>;
    protocolFeeBalance1(): Promise<BigNumber>;
    providerOfferIndex(param1: string): Promise<BigNumber>;
    providerStaking(param1: string): Promise<BigNumber>;
    rangeLiquidityProvider(): Promise<string>;
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
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<void>;
    removeLiquidity: {
        (params: {
            provider: string;
            direction: boolean;
            unstake: number | BigNumber;
            amountOut: number | BigNumber;
            reserveOut: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            unstake: number | BigNumber;
            amountOut: number | BigNumber;
            reserveOut: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }) => Promise<void>;
    };
    replenish_send(params: {
        provider: string;
        direction: boolean;
        amountIn: number | BigNumber;
    }): Promise<TransactionReceipt>;
    replenish_call(params: {
        provider: string;
        direction: boolean;
        amountIn: number | BigNumber;
    }): Promise<void>;
    replenish: {
        (params: {
            provider: string;
            direction: boolean;
            amountIn: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            amountIn: number | BigNumber;
        }) => Promise<void>;
    };
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
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
    updateProviderOffer_send(params: {
        provider: string;
        direction: boolean;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
    }): Promise<TransactionReceipt>;
    updateProviderOffer_call(params: {
        provider: string;
        direction: boolean;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
    }): Promise<void>;
    updateProviderOffer: {
        (params: {
            provider: string;
            direction: boolean;
            replenishAmount: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            privateReplenish: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            replenishAmount: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            privateReplenish: boolean;
        }) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_RangePair {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        staked: BigNumber;
        amount: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface NewProviderEvent {
        provider: string;
        index: BigNumber;
        _event: Event;
    }
    interface RemoveAllLiquidityEvent {
        provider: string;
        unstake: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
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
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface ReplenishEvent {
        provider: string;
        direction: boolean;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
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
    interface UpdateProviderOfferEvent {
        provider: string;
        direction: boolean;
        replenish: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        privateReplenish: boolean;
        _event: Event;
    }
}
