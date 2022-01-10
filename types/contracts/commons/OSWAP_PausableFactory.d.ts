import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_PausableFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
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
