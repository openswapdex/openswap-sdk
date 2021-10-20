import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedPair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    addLiquidity(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approvedTrader(params: {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }): Promise<string>;
    configStore(): Promise<string>;
    counter(param1: boolean): Promise<BigNumber>;
    createOrder(params: {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }): Promise<BigNumber>;
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
        trader: any;
        allocation: BigNumber;
    }>;
    getApprovedTraderLength(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
    }): Promise<BigNumber>;
    getBalances(): Promise<[BigNumber, BigNumber, BigNumber]>;
    getLastBalances(): Promise<[BigNumber, BigNumber]>;
    getOffers(params: {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        index: BigNumber;
        provider: any;
        lockedAndAllowAll: any;
        receiving: BigNumber;
        amountAndPrice: BigNumber;
        startDateAndExpire: BigNumber;
    }>;
    getProviderOffer(params: {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<{
        index: BigNumber;
        provider: any;
        lockedAndAllowAll: any;
        receiving: BigNumber;
        amountAndPrice: BigNumber;
        startDateAndExpire: BigNumber;
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
        index: BigNumber;
        provider: any;
        lockedAndAllowAll: any;
        receiving: BigNumber;
        amountAndPrice: BigNumber;
        startDateAndExpire: BigNumber;
    }>;
    govToken(): Promise<string>;
    governance(): Promise<string>;
    initialize(params: {
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    isApprovedTrader(params: {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }): Promise<boolean>;
    isLive(): Promise<boolean>;
    lastGovBalance(): Promise<BigNumber>;
    lastToken0Balance(): Promise<BigNumber>;
    lastToken1Balance(): Promise<BigNumber>;
    lockOffer(params: {
        direction: boolean;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
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
    redeemProtocolFee(): Promise<TransactionReceipt>;
    removeAllLiquidity(provider: string): Promise<{
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    removeAllLiquidity1D(params: {
        provider: string;
        direction: boolean;
    }): Promise<{
        totalAmount: BigNumber;
        totalReceiving: BigNumber;
    }>;
    removeLiquidity(params: {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }): Promise<TransactionReceipt>;
    restrictedLiquidityProvider(): Promise<string>;
    scaleDirection(): Promise<boolean>;
    scaler(): Promise<BigNumber>;
    setApprovedTrader(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setMultipleApprovedTraders(params: {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: number[] | BigNumber[];
    }): Promise<TransactionReceipt>;
    swap(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }): Promise<TransactionReceipt>;
    sync(): Promise<TransactionReceipt>;
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
}
