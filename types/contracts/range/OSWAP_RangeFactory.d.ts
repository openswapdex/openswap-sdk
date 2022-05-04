import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_RangeFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        oracleFactory: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
        protocolFeeTo: string;
    }): Promise<string>;
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
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
    checkAndGetSwapParams(): Promise<BigNumber>;
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
    getAllLiquidityProviderShare(): Promise<{
        _stakeAmount: BigNumber[];
        _liquidityProviderShare: BigNumber[];
    }>;
    getCreateAddresses(): Promise<{
        _governance: string;
        _rangeLiquidityProvider: string;
        _oracleFactory: string;
    }>;
    getLiquidityProviderShare(stake: number | BigNumber): Promise<BigNumber>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    liquidityProviderShare(param1: number | BigNumber): Promise<BigNumber>;
    oracleFactory(): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    protocolFeeTo(): Promise<string>;
    rangeLiquidityProvider(): Promise<string>;
    renounceOwnership_send(): Promise<TransactionReceipt>;
    renounceOwnership_call(): Promise<void>;
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setLiquidityProviderShare_send(params: {
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    setLiquidityProviderShare_call(params: {
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
    }): Promise<void>;
    setLiquidityProviderShare: {
        (params: {
            stakeAmount: (number | BigNumber)[];
            liquidityProviderShare: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            stakeAmount: (number | BigNumber)[];
            liquidityProviderShare: (number | BigNumber)[];
        }) => Promise<void>;
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
    setProtocolFeeTo_send(protocolFeeTo: string): Promise<TransactionReceipt>;
    setProtocolFeeTo_call(protocolFeeTo: string): Promise<void>;
    setProtocolFeeTo: {
        (protocolFeeTo: string): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string) => Promise<void>;
    };
    setRangeLiquidityProvider_send(rangeLiquidityProvider: string): Promise<TransactionReceipt>;
    setRangeLiquidityProvider_call(rangeLiquidityProvider: string): Promise<void>;
    setRangeLiquidityProvider: {
        (rangeLiquidityProvider: string): Promise<TransactionReceipt>;
        call: (rangeLiquidityProvider: string) => Promise<void>;
    };
    setTradeFee_send(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    setTradeFee_call(tradeFee: number | BigNumber): Promise<void>;
    setTradeFee: {
        (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber) => Promise<void>;
    };
    stakeAmount(param1: number | BigNumber): Promise<BigNumber>;
    tradeFee(): Promise<BigNumber>;
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
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
