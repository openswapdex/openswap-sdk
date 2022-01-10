import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_FactoryBase extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairCreatedEvent[];
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairShutdownedEvent[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.ShutdownedEvent[];
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
