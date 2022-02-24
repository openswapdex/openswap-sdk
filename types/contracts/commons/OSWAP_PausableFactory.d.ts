import { Wallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_PausableFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
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
    }
    interface ShutdownedEvent {
    }
}
