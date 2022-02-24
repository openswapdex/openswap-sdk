import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_FactoryBase extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_FactoryBase.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_FactoryBase.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_FactoryBase.PairShutdownedEvent;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_FactoryBase.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_FactoryBase.ShutdownedEvent;
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
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
}
export declare module OSWAP_FactoryBase {
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
        _event: Event;
    }
    interface PairRestartedEvent {
        pair: string;
        _event: Event;
    }
    interface PairShutdownedEvent {
        pair: string;
        _event: Event;
    }
    interface RestartedEvent {
    }
    interface ShutdownedEvent {
    }
}
