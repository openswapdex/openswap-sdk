import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RangePair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[];
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[];
    parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[];
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[];
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[];
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[];
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[];
    parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[];
    addLiquidity(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
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
    initialize(params: {
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
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
    redeemProtocolFee(): Promise<TransactionReceipt>;
    removeAllLiquidity(provider: string): Promise<TransactionReceipt>;
    removeLiquidity(params: {
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
    replenish(params: {
        provider: string;
        direction: boolean;
        amountIn: number | BigNumber;
    }): Promise<TransactionReceipt>;
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    stakeBalance(): Promise<BigNumber>;
    swap(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<TransactionReceipt>;
    sync(): Promise<TransactionReceipt>;
    token0(): Promise<string>;
    token1(): Promise<string>;
    updateProviderOffer(params: {
        provider: string;
        direction: boolean;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
    }): Promise<TransactionReceipt>;
}
export declare module OSWAP_RangePair {
    interface AddLiquidityEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
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
    }
    interface NewProviderEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        provider: string;
        index: BigNumber;
    }
    interface RemoveAllLiquidityEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        provider: string;
        unstake: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
    }
    interface RemoveLiquidityEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
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
    }
    interface ReplenishEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        provider: string;
        direction: boolean;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
    }
    interface SwapEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        to: string;
        direction: boolean;
        price: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
    }
    interface SwappedOneProviderEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        provider: string;
        direction: boolean;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newCounterReserveBalance: BigNumber;
    }
    interface UpdateProviderOfferEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
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
    }
}
