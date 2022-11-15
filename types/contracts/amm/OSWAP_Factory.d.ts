import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
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
export declare class OSWAP_Factory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
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
    protocolFee: {
        (): Promise<BigNumber>;
    };
    protocolFeeParams: {
        (): Promise<{
            _protocolFee: BigNumber;
            _protocolFeeTo: string;
        }>;
    };
    protocolFeeTo: {
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
    setProtocolFee: {
        (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    tradeFee: {
        (): Promise<BigNumber>;
    };
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
