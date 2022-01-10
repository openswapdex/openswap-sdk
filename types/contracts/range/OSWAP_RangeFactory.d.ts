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
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[];
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[];
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[];
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[];
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[];
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
export declare module OSWAP_RangeFactory {
    interface OwnershipTransferredEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        previousOwner: string;
        newOwner: string;
    }
    interface PairCreatedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }
    interface PairRestartedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        pair: string;
    }
    interface PairShutdownedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        pair: string;
    }
    interface ParamSetEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        name: string;
        value: string;
    }
    interface ParamSet2Event {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        name: string;
        value1: string;
        value2: string;
    }
    interface RestartedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
    }
    interface ShutdownedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
    }
}
