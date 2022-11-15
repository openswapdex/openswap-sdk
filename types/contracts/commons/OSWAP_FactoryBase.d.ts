import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    pairCreator: string;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_FactoryBase extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
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
    allPairs: {
        (param1: number | BigNumber): Promise<string>;
    };
    allPairsLength: {
        (): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    getPair: {
        (params: IGetPairParams): Promise<string>;
    };
    governance: {
        (): Promise<string>;
    };
    isLive: {
        (): Promise<boolean>;
    };
    pairCreator: {
        (): Promise<string>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
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
