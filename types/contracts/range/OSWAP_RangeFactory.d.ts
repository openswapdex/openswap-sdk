import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    oracleFactory: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    stakeAmount: (number | BigNumber)[];
    liquidityProviderShare: (number | BigNumber)[];
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
export interface ISetLiquidityProviderShareParams {
    stakeAmount: (number | BigNumber)[];
    liquidityProviderShare: (number | BigNumber)[];
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_RangeFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent;
    allPairs: {
        (param1: number | BigNumber): Promise<string>;
    };
    allPairsLength: {
        (): Promise<BigNumber>;
    };
    checkAndGetSwapParams: {
        (): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    getAllLiquidityProviderShare: {
        (): Promise<{
            _stakeAmount: BigNumber[];
            _liquidityProviderShare: BigNumber[];
        }>;
    };
    getCreateAddresses: {
        (): Promise<{
            _governance: string;
            _rangeLiquidityProvider: string;
            _oracleFactory: string;
        }>;
    };
    getLiquidityProviderShare: {
        (stake: number | BigNumber): Promise<BigNumber>;
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
    liquidityProviderShare: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    oracleFactory: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    pairCreator: {
        (): Promise<string>;
    };
    protocolFeeTo: {
        (): Promise<string>;
    };
    rangeLiquidityProvider: {
        (): Promise<string>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setLiquidityProviderShare: {
        (params: ISetLiquidityProviderShareParams): Promise<TransactionReceipt>;
        call: (params: ISetLiquidityProviderShareParams) => Promise<void>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string) => Promise<void>;
    };
    setRangeLiquidityProvider: {
        (rangeLiquidityProvider: string): Promise<TransactionReceipt>;
        call: (rangeLiquidityProvider: string) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    stakeAmount: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    tradeFee: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_RangeFactory {
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
}
