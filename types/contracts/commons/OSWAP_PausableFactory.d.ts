import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_PausableFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent;
    governance: {
        (): Promise<string>;
    };
    isLive: {
        (): Promise<boolean>;
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
export declare module OSWAP_PausableFactory {
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
