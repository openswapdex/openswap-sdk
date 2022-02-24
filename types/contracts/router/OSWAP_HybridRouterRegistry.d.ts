import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouterRegistry extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[];
    decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent;
    parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[];
    decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent;
    parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[];
    decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent;
    customPairs(param1: string): Promise<{
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }>;
    execute(params: string[]): Promise<TransactionReceipt>;
    getFee(pairAddress: string): Promise<{
        fee: BigNumber;
        feeBase: BigNumber;
    }>;
    getPairTokens(pairAddress: string[]): Promise<{
        token0: string[];
        token1: string[];
    }>;
    getTypeCode(pairAddress: string): Promise<BigNumber>;
    governance(): Promise<string>;
    init(params: {
        name: string[];
        factory: string[];
        fee: (number | BigNumber)[];
        feeBase: (number | BigNumber)[];
        typeCode: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    owner(): Promise<string>;
    pairs(param1: string): Promise<{
        factory: string;
        token0: string;
        token1: string;
    }>;
    protocolList(param1: number | BigNumber): Promise<string>;
    protocolListLength(): Promise<BigNumber>;
    protocols(param1: string): Promise<{
        name: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }>;
    registerPair(params: {
        token0: string;
        token1: string;
        pairAddress: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPairByAddress(params: {
        factory: string;
        pairAddress: string;
    }): Promise<TransactionReceipt>;
    registerPairByIndex(params: {
        factory: string;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPairByTokens(params: {
        factory: string;
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    registerPairByTokensV3(params: {
        factory: string;
        token0: string;
        token1: string;
        pairIndex: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPairsByAddress(params: {
        factory: string;
        pairAddress: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByAddress2(params: {
        factory: string[];
        pairAddress: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByIndex(params: {
        factory: string;
        index: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    registerPairsByTokens(params: {
        factory: string;
        token0: string[];
        token1: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByTokensV3(params: {
        factory: string;
        token0: string[];
        token1: string[];
        pairIndex: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    registerProtocol(params: {
        name: string;
        factory: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<TransactionReceipt>;
    renounceOwnership(): Promise<TransactionReceipt>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
}
export declare module OSWAP_HybridRouterRegistry {
    interface CustomPairRegisterEvent {
        pair: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairRegisterEvent {
        factory: string;
        pair: string;
        token0: string;
        token1: string;
        _event: Event;
    }
    interface ProtocolRegisterEvent {
        factory: string;
        name: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
        _event: Event;
    }
}
