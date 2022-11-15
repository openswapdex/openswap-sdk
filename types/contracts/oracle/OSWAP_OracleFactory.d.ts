import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
    feePerDelegator: number | BigNumber;
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
}
export interface IOraclesParams {
    param1: string;
    param2: string;
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export interface ISetMinLotSizeParams {
    token: string;
    minLotSize: number | BigNumber;
}
export interface ISetOracleParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export interface ISetOracleLiquidityProviderParams {
    oracleRouter: string;
    oracleLiquidityProvider: string;
}
export interface ISetSecurityScoreOracleParams {
    securityScoreOracle: string;
    minOracleScore: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allow: boolean;
}
export declare class OSWAP_OracleFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[];
    decodeOracleAddedEvent(event: Event): OSWAP_OracleFactory.OracleAddedEvent;
    parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[];
    decodeOracleScoresEvent(event: Event): OSWAP_OracleFactory.OracleScoresEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_OracleFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_OracleFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_OracleFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_OracleFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_OracleFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_OracleFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_OracleFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_OracleFactory.ShutdownedEvent;
    parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[];
    decodeWhitelistedEvent(event: Event): OSWAP_OracleFactory.WhitelistedEvent;
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
    allWhiteListed: {
        (): Promise<{
            list: string[];
            allowed: boolean[];
        }>;
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
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    feePerDelegator: {
        (): Promise<BigNumber>;
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
    isOracle: {
        (param1: string): Promise<boolean>;
    };
    isWhitelisted: {
        (param1: string): Promise<boolean>;
    };
    minLotSize: {
        (param1: string): Promise<BigNumber>;
    };
    minOracleScore: {
        (): Promise<BigNumber>;
    };
    oracleLiquidityProvider: {
        (): Promise<string>;
    };
    oracleScores: {
        (param1: string): Promise<BigNumber>;
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
    securityScoreOracle: {
        (): Promise<string>;
    };
    setFeePerDelegator: {
        (feePerDelegator: number | BigNumber): Promise<TransactionReceipt>;
        call: (feePerDelegator: number | BigNumber) => Promise<void>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    };
    setMinLotSize: {
        (params: ISetMinLotSizeParams): Promise<TransactionReceipt>;
        call: (params: ISetMinLotSizeParams) => Promise<void>;
    };
    setOracle: {
        (params: ISetOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams) => Promise<void>;
    };
    setOracleLiquidityProvider: {
        (params: ISetOracleLiquidityProviderParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleLiquidityProviderParams) => Promise<void>;
    };
    setProtocolFee: {
        (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string) => Promise<void>;
    };
    setSecurityScoreOracle: {
        (params: ISetSecurityScoreOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetSecurityScoreOracleParams) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    setWhiteList: {
        (params: ISetWhiteListParams): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams) => Promise<void>;
    };
    tradeFee: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    updateOracleScore: {
        (oracle: string): Promise<TransactionReceipt>;
        call: (oracle: string) => Promise<void>;
    };
    whitelisted: {
        (param1: number | BigNumber): Promise<string>;
    };
    whitelistedInv: {
        (param1: string): Promise<BigNumber>;
    };
    whitelistedLength: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module OSWAP_OracleFactory {
    interface OracleAddedEvent {
        token0: string;
        token1: string;
        oracle: string;
        _event: Event;
    }
    interface OracleScoresEvent {
        oracle: string;
        score: BigNumber;
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
    interface WhitelistedEvent {
        who: string;
        allow: boolean;
        _event: Event;
    }
}
