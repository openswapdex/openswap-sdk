import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedPair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair.AddLiquidityEvent;
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.ApprovedTraderEvent[];
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair.ApprovedTraderEvent;
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.LockEvent[];
    decodeLockEvent(event: Event): OSWAP_RestrictedPair.LockEvent;
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.NewProviderOfferEvent[];
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair.NewProviderOfferEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair.RemoveLiquidityEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair.SwapEvent;
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwappedOneOfferEvent[];
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair.SwappedOneOfferEvent;
    addLiquidity_send(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<void>;
    addLiquidity: {
        (params: {
            direction: boolean;
            index: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            direction: boolean;
            index: number | BigNumber;
        }) => Promise<void>;
    };
    approvedTrader(params: {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }): Promise<string>;
    configStore(): Promise<string>;
    counter(param1: boolean): Promise<BigNumber>;
    createOrder_send(params: {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
    createOrder_call(params: {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<BigNumber>;
    createOrder: {
        (params: {
            provider: string;
            direction: boolean;
            allowAll: boolean;
            restrictedPrice: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            allowAll: boolean;
            restrictedPrice: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
        }) => Promise<BigNumber>;
    };
    factory(): Promise<string>;
    feeBalance(): Promise<BigNumber>;
    getAmountIn(params: {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }): Promise<BigNumber>;
    getApprovedTrader(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        trader: string[];
        allocation: BigNumber[];
    }>;
    getApprovedTraderLength(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
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
    getOffers(params: {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        index: BigNumber[];
        provider: string[];
        lockedAndAllowAll: boolean[];
        receiving: BigNumber[];
        amountAndPrice: BigNumber[];
        startDateAndExpire: BigNumber[];
    }>;
    getProviderOffer(params: {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        index: BigNumber[];
        provider: string[];
        lockedAndAllowAll: boolean[];
        receiving: BigNumber[];
        amountAndPrice: BigNumber[];
        startDateAndExpire: BigNumber[];
    }>;
    getProviderOfferIndexLength(params: {
        provider: string;
        direction: boolean;
    }): Promise<BigNumber>;
    getTraderOffer(params: {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        index: BigNumber[];
        provider: string[];
        lockedAndAllowAll: boolean[];
        receiving: BigNumber[];
        amountAndPrice: BigNumber[];
        startDateAndExpire: BigNumber[];
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
    isApprovedTrader(params: {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }): Promise<boolean>;
    isLive(): Promise<boolean>;
    lastGovBalance(): Promise<BigNumber>;
    lastToken0Balance(): Promise<BigNumber>;
    lastToken1Balance(): Promise<BigNumber>;
    lockOffer_send(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
    lockOffer_call(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<void>;
    lockOffer: {
        (params: {
            direction: boolean;
            index: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            direction: boolean;
            index: number | BigNumber;
        }) => Promise<void>;
    };
    offers(params: {
        param1: boolean;
        param2: number | BigNumber;
    }): Promise<{
        provider: string;
        locked: boolean;
        allowAll: boolean;
        amount: BigNumber;
        receiving: BigNumber;
        restrictedPrice: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
    }>;
    protocolFeeBalance0(): Promise<BigNumber>;
    protocolFeeBalance1(): Promise<BigNumber>;
    providerOfferIndex(params: {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }): Promise<BigNumber>;
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
    }>;
    removeAllLiquidity: {
        (provider: string): Promise<TransactionReceipt>;
        call: (provider: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    removeAllLiquidity1D_send(params: {
        provider: string;
        direction: boolean;
    }): Promise<TransactionReceipt>;
    removeAllLiquidity1D_call(params: {
        provider: string;
        direction: boolean;
    }): Promise<{
        totalAmount: BigNumber;
        totalReceiving: BigNumber;
    }>;
    removeAllLiquidity1D: {
        (params: {
            provider: string;
            direction: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
        }) => Promise<{
            totalAmount: BigNumber;
            totalReceiving: BigNumber;
        }>;
    };
    removeLiquidity_send(params: {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }): Promise<void>;
    removeLiquidity: {
        (params: {
            provider: string;
            direction: boolean;
            index: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            provider: string;
            direction: boolean;
            index: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
        }) => Promise<void>;
    };
    restrictedLiquidityProvider(): Promise<string>;
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setApprovedTrader_send(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setApprovedTrader_call(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }): Promise<void>;
    setApprovedTrader: {
        (params: {
            direction: boolean;
            offerIndex: number | BigNumber;
            trader: string;
            allocation: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            direction: boolean;
            offerIndex: number | BigNumber;
            trader: string;
            allocation: number | BigNumber;
        }) => Promise<void>;
    };
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setMultipleApprovedTraders_send(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    setMultipleApprovedTraders_call(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: (number | BigNumber)[];
    }): Promise<void>;
    setMultipleApprovedTraders: {
        (params: {
            direction: boolean;
            offerIndex: number | BigNumber;
            trader: string[];
            allocation: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            direction: boolean;
            offerIndex: number | BigNumber;
            trader: string[];
            allocation: (number | BigNumber)[];
        }) => Promise<void>;
    };
    swap_send(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }): Promise<TransactionReceipt>;
    swap_call(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }): Promise<void>;
    swap: {
        (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            trader: string;
            param5: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            trader: string;
            param5: string;
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
    traderAllocation(params: {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }): Promise<BigNumber>;
    traderOffer(params: {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }): Promise<BigNumber>;
    whitelistFactory(): Promise<string>;
    private assign;
}
export declare module OSWAP_RestrictedPair {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        amount: BigNumber;
        newAmountBalance: BigNumber;
        _event: Event;
    }
    interface ApprovedTraderEvent {
        direction: boolean;
        offerIndex: BigNumber;
        trader: string;
        allocation: BigNumber;
        _event: Event;
    }
    interface LockEvent {
        direction: boolean;
        index: BigNumber;
        _event: Event;
    }
    interface NewProviderOfferEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        allowAll: boolean;
        restrictedPrice: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        amountOut: BigNumber;
        receivingOut: BigNumber;
        newAmountBalance: BigNumber;
        newReceivingBalance: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        to: string;
        direction: boolean;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwappedOneOfferEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        price: BigNumber;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReceivingBalance: BigNumber;
        _event: Event;
    }
}
