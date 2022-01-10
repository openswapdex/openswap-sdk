import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_Factory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[];
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[];
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[];
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[];
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
    createPair(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    pairCreator(): Promise<string>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeParams(): Promise<{
        _protocolFee: BigNumber;
        _protocolFeeTo: string;
    }>;
    protocolFeeTo(): Promise<string>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setProtocolFee(protocolFee: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFeeTo(protocolFeeTo: string): Promise<TransactionReceipt>;
    setTradeFee(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    tradeFee(): Promise<BigNumber>;
}
export declare module OSWAP_Factory {
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
