import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OraclePair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): {
        provider: string;
        direction: boolean;
        staked: BigNumber;
        amount: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        expire: BigNumber;
        enable: boolean;
    }[];
    parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): {
        delegator: string;
        provider: string;
        direction: boolean;
    }[];
    parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): {
        delegator: string;
        provider: string;
        direction: boolean;
    }[];
    parseNewProviderEvent(receipt: TransactionReceipt): {
        provider: string;
        index: BigNumber;
    }[];
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): {
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
    }[];
    parseReplenishEvent(receipt: TransactionReceipt): {
        provider: string;
        direction: boolean;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        expire: BigNumber;
    }[];
    parseSetDelegatorEvent(receipt: TransactionReceipt): {
        provider: string;
        delegator: string;
    }[];
    parseSwapEvent(receipt: TransactionReceipt): {
        to: string;
        direction: boolean;
        price: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
    }[];
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): {
        provider: string;
        direction: boolean;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newCounterReserveBalance: BigNumber;
    }[];
    addLiquidity(params: {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<TransactionReceipt>;
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
    getBalances(): Promise<[BigNumber, BigNumber, BigNumber]>;
    getLastBalances(): Promise<[BigNumber, BigNumber]>;
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
    pauseOffer(params: {
        provider: string;
        direction: boolean;
    }): Promise<TransactionReceipt>;
    protocolFeeBalance0(): Promise<BigNumber>;
    protocolFeeBalance1(): Promise<BigNumber>;
    providerOfferIndex(param1: string): Promise<BigNumber>;
    purgeExpire(params: {
        direction: boolean;
        startingIndex: number | BigNumber;
        limit: number | BigNumber;
    }): Promise<TransactionReceipt>;
    queueSize(param1: boolean): Promise<BigNumber>;
    redeemProtocolFee(): Promise<TransactionReceipt>;
    removeAllLiquidity(provider: string): Promise<TransactionReceipt>;
    removeLiquidity(params: {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }): Promise<TransactionReceipt>;
    replenish(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<TransactionReceipt>;
    resumeOffer(params: {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
    }): Promise<TransactionReceipt>;
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setDelegator(params: {
        delegator: string;
        fee: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setPrivateReplenish(replenish: boolean): Promise<TransactionReceipt>;
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
}
