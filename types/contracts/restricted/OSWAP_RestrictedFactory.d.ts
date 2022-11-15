import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    whitelistFactory: string;
    pairCreator: string;
    configStore: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
}
export interface IAddOldOracleToNewPairParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export interface ICheckAndGetOracleParams {
    tokenA: string;
    tokenB: string;
}
export interface ICheckAndGetOracleSwapParamsParams {
    tokenA: string;
    tokenB: string;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
}
export interface IOraclesParams {
    param1: string;
    param2: string;
}
export interface IPairLengthParams {
    tokenA: string;
    tokenB: string;
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export interface ISetOracleParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export declare class OSWAP_RestrictedFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[];
    decodeOracleAddedEvent(event: Event): OSWAP_RestrictedFactory.OracleAddedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RestrictedFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_RestrictedFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_RestrictedFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_RestrictedFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_RestrictedFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_RestrictedFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_RestrictedFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_RestrictedFactory.ShutdownedEvent;
    addOldOracleToNewPair: {
        (params: IAddOldOracleToNewPairParams): Promise<TransactionReceipt>;
        call: (params: IAddOldOracleToNewPairParams) => Promise<void>;
    };
    allPairs: {
        (param1: number | BigNumber): Promise<string>;
    };
    allPairsLength: {
        (): Promise<BigNumber>;
    };
    checkAndGetOracle: {
        (params: ICheckAndGetOracleParams): Promise<string>;
    };
    checkAndGetOracleSwapParams: {
        (params: ICheckAndGetOracleSwapParamsParams): Promise<{
            oracle_: string;
            tradeFee_: BigNumber;
            protocolFee_: BigNumber;
        }>;
    };
    configStore: {
        (): Promise<string>;
    };
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    getCreateAddresses: {
        (): Promise<{
            _governance: string;
            _whitelistFactory: string;
            _restrictedLiquidityProvider: string;
            _configStore: string;
        }>;
    };
    getPair: {
        (params: IGetPairParams): Promise<string>;
    };
    governance: {
        (): Promise<string>;
    };
    init: {
        (restrictedLiquidityProvider: string): Promise<TransactionReceipt>;
        call: (restrictedLiquidityProvider: string) => Promise<void>;
    };
    isLive: {
        (): Promise<boolean>;
    };
    isOracle: {
        (param1: string): Promise<boolean>;
    };
    isPair: {
        (pair: string): Promise<boolean>;
    };
    oracles: {
        (params: IOraclesParams): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    pairCreator: {
        (): Promise<string>;
    };
    pairIdx: {
        (param1: string): Promise<BigNumber>;
    };
    pairLength: {
        (params: IPairLengthParams): Promise<BigNumber>;
    };
    protocolFee: {
        (): Promise<BigNumber>;
    };
    protocolFeeTo: {
        (): Promise<string>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    restrictedLiquidityProvider: {
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
    setOracle: {
        (params: ISetOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams) => Promise<void>;
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
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    whitelistFactory: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_RestrictedFactory {
    interface OracleAddedEvent {
        token0: string;
        token1: string;
        oracle: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        newPairSize: BigNumber;
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
