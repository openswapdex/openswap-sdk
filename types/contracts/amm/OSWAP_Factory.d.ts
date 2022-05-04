import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_Factory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_Factory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_Factory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_Factory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_Factory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_Factory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_Factory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_Factory.ShutdownedEvent;
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
    protocolFee(): Promise<BigNumber>;
    protocolFeeParams(): Promise<{
        _protocolFee: BigNumber;
        _protocolFeeTo: string;
    }>;
    protocolFeeTo(): Promise<string>;
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
    setProtocolFee_send(protocolFee: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFee_call(protocolFee: number | BigNumber): Promise<void>;
    setProtocolFee: {
        (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber) => Promise<void>;
    };
    setProtocolFeeTo_send(protocolFeeTo: string): Promise<TransactionReceipt>;
    setProtocolFeeTo_call(protocolFeeTo: string): Promise<void>;
    setProtocolFeeTo: {
        (protocolFeeTo: string): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string) => Promise<void>;
    };
    setTradeFee_send(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    setTradeFee_call(tradeFee: number | BigNumber): Promise<void>;
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    tradeFee(): Promise<BigNumber>;
    private assign;
}
export declare module OSWAP_Factory {
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
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface RestartedEvent {
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
}
