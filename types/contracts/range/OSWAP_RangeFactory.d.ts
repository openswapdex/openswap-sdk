import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RangeFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        oracleFactory: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        stakeAmount: number[] | BigNumber[];
        liquidityProviderShare: number[] | BigNumber[];
        protocolFeeTo: string;
    }): Promise<string>;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {
        previousOwner: string;
        newOwner: string;
    }[];
    parsePairCreatedEvent(receipt: TransactionReceipt): {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }[];
    parsePairRestartedEvent(receipt: TransactionReceipt): string[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): string[];
    parseParamSetEvent(receipt: TransactionReceipt): {
        name: string;
        value: string;
    }[];
    parseParamSet2Event(receipt: TransactionReceipt): {
        name: string;
        value1: string;
        value2: string;
    }[];
    parseRestartedEvent(receipt: TransactionReceipt): any[];
    parseShutdownedEvent(receipt: TransactionReceipt): any[];
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
    checkAndGetSwapParams(): Promise<BigNumber>;
    createPair(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    getAllLiquidityProviderShare(): Promise<{
        _stakeAmount: BigNumber[];
        _liquidityProviderShare: BigNumber[];
    }>;
    getCreateAddresses(): Promise<{
        _governance: string;
        _rangeLiquidityProvider: string;
        _oracleFactory: string;
    }>;
    getLiquidityProviderShare(stake: number | BigNumber): Promise<BigNumber>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    liquidityProviderShare(param1: number | BigNumber): Promise<BigNumber>;
    oracleFactory(): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    protocolFeeTo(): Promise<string>;
    rangeLiquidityProvider(): Promise<string>;
    renounceOwnership(): Promise<TransactionReceipt>;
    setLiquidityProviderShare(params: {
        stakeAmount: number[] | BigNumber[];
        liquidityProviderShare: number[] | BigNumber[];
    }): Promise<TransactionReceipt>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setProtocolFeeTo(protocolFeeTo: string): Promise<TransactionReceipt>;
    setRangeLiquidityProvider(rangeLiquidityProvider: string): Promise<TransactionReceipt>;
    setTradeFee(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    stakeAmount(param1: number | BigNumber): Promise<BigNumber>;
    tradeFee(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
}
