import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IAddLiquidityParams {
    direction: boolean;
    index: number | BigNumber;
    feeIn: number | BigNumber;
}
export interface IApprovedTraderParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: number | BigNumber;
}
export interface ICreateOrderParams {
    provider: string;
    direction: boolean;
    allowAll: boolean;
    restrictedPrice: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
}
export interface IGetAmountInParams {
    param1: string;
    param2: number | BigNumber;
    param3: string;
    param4: string;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
    trader: string;
    param4: string;
}
export interface IGetApprovedTraderParams {
    direction: boolean;
    offerIndex: number | BigNumber;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetApprovedTraderLengthParams {
    direction: boolean;
    offerIndex: number | BigNumber;
}
export interface IGetOffersParams {
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetProviderOfferParams {
    provider: string;
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetProviderOfferIndexLengthParams {
    provider: string;
    direction: boolean;
}
export interface IGetTraderOfferParams {
    trader: string;
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IIsApprovedTraderParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
export interface ILastTraderAllocationParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
export interface ILockOfferParams {
    direction: boolean;
    index: number | BigNumber;
}
export interface IOfferAllowlistIpfsCidParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IOfferMerkleRootParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IOffersParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IPrepaidFeeBalanceParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IProviderOfferIndexParams {
    param1: boolean;
    param2: string;
    param3: number | BigNumber;
}
export interface IRemoveAllLiquidity1DParams {
    provider: string;
    direction: boolean;
}
export interface IRemoveLiquidityParams {
    provider: string;
    direction: boolean;
    index: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    feeOut: number | BigNumber;
}
export interface ISetApprovedTraderByMerkleProofParams {
    direction: boolean;
    offerIndex: number | BigNumber;
    trader: string;
    allocation: number | BigNumber;
    proof: string[];
}
export interface ISetMerkleRootParams {
    direction: boolean;
    index: number | BigNumber;
    merkleRoot: string;
    ipfsCid: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    trader: string;
    param5: string;
}
export interface ITraderAllocationParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
export interface ITraderOfferParams {
    param1: boolean;
    param2: string;
    param3: number | BigNumber;
}
export declare class OSWAP_RestrictedPair4 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair4.AddLiquidityEvent;
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.ApprovedTraderEvent[];
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair4.ApprovedTraderEvent;
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.LockEvent[];
    decodeLockEvent(event: Event): OSWAP_RestrictedPair4.LockEvent;
    parseMerkleRootEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.MerkleRootEvent[];
    decodeMerkleRootEvent(event: Event): OSWAP_RestrictedPair4.MerkleRootEvent;
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.NewProviderOfferEvent[];
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair4.NewProviderOfferEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair4.RemoveLiquidityEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair4.SwapEvent;
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwappedOneOfferEvent[];
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair4.SwappedOneOfferEvent;
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<void>;
    };
    approvedTrader: {
        (params: IApprovedTraderParams): Promise<string>;
    };
    configStore: {
        (): Promise<string>;
    };
    counter: {
        (param1: boolean): Promise<BigNumber>;
    };
    createOrder: {
        (params: ICreateOrderParams): Promise<TransactionReceipt>;
        call: (params: ICreateOrderParams) => Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    feeBalance: {
        (): Promise<BigNumber>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getApprovedTrader: {
        (params: IGetApprovedTraderParams): Promise<{
            trader: string[];
            allocation: BigNumber[];
        }>;
    };
    getApprovedTraderLength: {
        (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
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
    getOffers: {
        (params: IGetOffersParams): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
        }>;
    };
    getProviderOffer: {
        (params: IGetProviderOfferParams): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
        }>;
    };
    getProviderOfferIndexLength: {
        (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
    };
    getTraderOffer: {
        (params: IGetTraderOfferParams): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
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
    isApprovedTrader: {
        (params: IIsApprovedTraderParams): Promise<boolean>;
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
    lastTraderAllocation: {
        (params: ILastTraderAllocationParams): Promise<BigNumber>;
    };
    lockOffer: {
        (params: ILockOfferParams): Promise<TransactionReceipt>;
        call: (params: ILockOfferParams) => Promise<void>;
    };
    offerAllowlistIpfsCid: {
        (params: IOfferAllowlistIpfsCidParams): Promise<string>;
    };
    offerMerkleRoot: {
        (params: IOfferMerkleRootParams): Promise<string>;
    };
    offers: {
        (params: IOffersParams): Promise<{
            provider: string;
            locked: boolean;
            allowAll: boolean;
            amount: BigNumber;
            receiving: BigNumber;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
        }>;
    };
    prepaidFeeBalance: {
        (params: IPrepaidFeeBalanceParams): Promise<BigNumber>;
    };
    protocolFeeBalance0: {
        (): Promise<BigNumber>;
    };
    protocolFeeBalance1: {
        (): Promise<BigNumber>;
    };
    providerOfferIndex: {
        (params: IProviderOfferIndexParams): Promise<BigNumber>;
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
            feeOut: BigNumber;
        }>;
    };
    removeAllLiquidity1D: {
        (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidity1DParams) => Promise<{
            totalAmount: BigNumber;
            totalReceiving: BigNumber;
            totalRemainingFee: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    };
    restrictedLiquidityProvider: {
        (): Promise<string>;
    };
    scaleDirection: {
        (): Promise<boolean>;
    };
    scaler: {
        (): Promise<BigNumber>;
    };
    setApprovedTraderByMerkleProof: {
        (params: ISetApprovedTraderByMerkleProofParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovedTraderByMerkleProofParams) => Promise<void>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setMerkleRoot: {
        (params: ISetMerkleRootParams): Promise<TransactionReceipt>;
        call: (params: ISetMerkleRootParams) => Promise<void>;
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
    traderAllocation: {
        (params: ITraderAllocationParams): Promise<BigNumber>;
    };
    traderOffer: {
        (params: ITraderOfferParams): Promise<BigNumber>;
    };
    whitelistFactory: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_RestrictedPair4 {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        amount: BigNumber;
        newAmountBalance: BigNumber;
        feeIn: BigNumber;
        newFeeBalance: BigNumber;
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
    interface MerkleRootEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        merkleRoot: string;
        ipfsCid: string;
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
        feeOut: BigNumber;
        newAmountBalance: BigNumber;
        newReceivingBalance: BigNumber;
        newFeeBalance: BigNumber;
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
