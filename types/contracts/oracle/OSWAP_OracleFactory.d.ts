import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        feePerDelegator: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
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
    allWhiteListed(): Promise<{
        list: string[];
        allowed: boolean[];
    }>;
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
    feePerDelegator(): Promise<BigNumber>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    isOracle(param1: string): Promise<boolean>;
    isWhitelisted(param1: string): Promise<boolean>;
    minLotSize(param1: string): Promise<BigNumber>;
    minOracleScore(): Promise<BigNumber>;
    oracleLiquidityProvider(): Promise<string>;
    oracleScores(param1: string): Promise<BigNumber>;
    oracles(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    renounceOwnership_send(): Promise<TransactionReceipt>;
    renounceOwnership_call(): Promise<void>;
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    securityScoreOracle(): Promise<string>;
    setFeePerDelegator_send(feePerDelegator: number | BigNumber): Promise<TransactionReceipt>;
    setFeePerDelegator_call(feePerDelegator: number | BigNumber): Promise<void>;
    setFeePerDelegator: {
        (feePerDelegator: number | BigNumber): Promise<TransactionReceipt>;
        call: (feePerDelegator: number | BigNumber) => Promise<void>;
    };
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
    setMinLotSize_send(params: {
        token: string;
        minLotSize: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setMinLotSize_call(params: {
        token: string;
        minLotSize: number | BigNumber;
    }): Promise<void>;
    setMinLotSize: {
        (params: {
            token: string;
            minLotSize: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            minLotSize: number | BigNumber;
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
    setOracleLiquidityProvider_send(params: {
        oracleRouter: string;
        oracleLiquidityProvider: string;
    }): Promise<TransactionReceipt>;
    setOracleLiquidityProvider_call(params: {
        oracleRouter: string;
        oracleLiquidityProvider: string;
    }): Promise<void>;
    setOracleLiquidityProvider: {
        (params: {
            oracleRouter: string;
            oracleLiquidityProvider: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            oracleRouter: string;
            oracleLiquidityProvider: string;
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
    setSecurityScoreOracle_send(params: {
        securityScoreOracle: string;
        minOracleScore: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setSecurityScoreOracle_call(params: {
        securityScoreOracle: string;
        minOracleScore: number | BigNumber;
    }): Promise<void>;
    setSecurityScoreOracle: {
        (params: {
            securityScoreOracle: string;
            minOracleScore: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            securityScoreOracle: string;
            minOracleScore: number | BigNumber;
        }) => Promise<void>;
    };
    setTradeFee_send(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    setTradeFee_call(tradeFee: number | BigNumber): Promise<void>;
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    setWhiteList_send(params: {
        who: string;
        allow: boolean;
    }): Promise<TransactionReceipt>;
    setWhiteList_call(params: {
        who: string;
        allow: boolean;
    }): Promise<void>;
    setWhiteList: {
        (params: {
            who: string;
            allow: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            who: string;
            allow: boolean;
        }) => Promise<void>;
    };
    tradeFee(): Promise<BigNumber>;
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    updateOracleScore_send(oracle: string): Promise<TransactionReceipt>;
    updateOracleScore_call(oracle: string): Promise<void>;
    updateOracleScore: {
        (oracle: string): Promise<TransactionReceipt>;
        call: (oracle: string) => Promise<void>;
    };
    whitelisted(param1: number | BigNumber): Promise<string>;
    whitelistedInv(param1: string): Promise<BigNumber>;
    whitelistedLength(): Promise<BigNumber>;
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
