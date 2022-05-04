import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_FactoryBase extends Contract {
    constructor(wallet: IWallet, address?: string);
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
    createPair_send(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    createPair_call(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<string>;
    createPair: {
        (params: {
            tokenA: string;
            tokenB: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
        }) => Promise<string>;
    };
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    pairCreator(): Promise<string>;
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setLiveForPair_send(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setLiveForPair_call(params: {
        pair: string;
        live: boolean;
    }): Promise<void>;
    setLiveForPair: {
        (params: {
            pair: string;
            live: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            pair: string;
            live: boolean;
        }) => Promise<void>;
    };
    private assign;
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
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
}
