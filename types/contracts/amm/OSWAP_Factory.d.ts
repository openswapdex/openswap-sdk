import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_Factory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }[];
    parsePairRestartedEvent(receipt: TransactionReceipt): {
        pair: string;
    }[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): {
        pair: string;
    }[];
    parseParamSetEvent(receipt: TransactionReceipt): {
        name: string;
        value: string;
    }[];
    parseParamSet2Event(receipt: TransactionReceipt): {
        name: string;
        value1: string;
        value2: string;
    }[];
    parseRestartedEvent(receipt: TransactionReceipt): any;
    parseShutdownedEvent(receipt: TransactionReceipt): any;
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
    protocolFee(): Promise<BigNumber>;
    protocolFeeParams(): Promise<{
        _protocolFee: BigNumber;
        _protocolFeeTo: string;
    }>;
    protocolFeeTo(): Promise<string>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setProtocolFee(protocolFee: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFeeTo(protocolFeeTo: string): Promise<TransactionReceipt>;
    setTradeFee(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    tradeFee(): Promise<BigNumber>;
}
