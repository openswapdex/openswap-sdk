import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        whitelistFactory: string;
        pairCreator: string;
        configStore: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
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
    addOldOracleToNewPair_send(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    addOldOracleToNewPair_call(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<void>;
    addOldOracleToNewPair: {
        (params: {
            tokenA: string;
            tokenB: string;
            oracle: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            oracle: string;
        }) => Promise<void>;
    };
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
    checkAndGetOracle(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<string>;
    checkAndGetOracleSwapParams(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<{
        oracle_: string;
        tradeFee_: BigNumber;
        protocolFee_: BigNumber;
    }>;
    configStore(): Promise<string>;
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
    getCreateAddresses(): Promise<{
        _governance: string;
        _whitelistFactory: string;
        _restrictedLiquidityProvider: string;
        _configStore: string;
    }>;
    getPair(params: {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }): Promise<string>;
    governance(): Promise<string>;
    init_send(restrictedLiquidityProvider: string): Promise<TransactionReceipt>;
    init_call(restrictedLiquidityProvider: string): Promise<void>;
    init: {
        (restrictedLiquidityProvider: string): Promise<TransactionReceipt>;
        call: (restrictedLiquidityProvider: string) => Promise<void>;
    };
    isLive(): Promise<boolean>;
    isOracle(param1: string): Promise<boolean>;
    isPair(pair: string): Promise<boolean>;
    oracles(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    pairIdx(param1: string): Promise<BigNumber>;
    pairLength(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<BigNumber>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    renounceOwnership_send(): Promise<TransactionReceipt>;
    renounceOwnership_call(): Promise<void>;
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    restrictedLiquidityProvider(): Promise<string>;
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
    setOracle_send(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    setOracle_call(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<void>;
    setOracle: {
        (params: {
            tokenA: string;
            tokenB: string;
            oracle: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            oracle: string;
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
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    whitelistFactory(): Promise<string>;
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
