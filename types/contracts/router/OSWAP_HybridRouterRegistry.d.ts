import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IInitParams {
    name: string[];
    factory: string[];
    fee: (number | BigNumber)[];
    feeBase: (number | BigNumber)[];
    typeCode: (number | BigNumber)[];
}
export interface IRegisterPairParams {
    token0: string;
    token1: string;
    pairAddress: string;
    fee: number | BigNumber;
    feeBase: number | BigNumber;
    typeCode: number | BigNumber;
}
export interface IRegisterPairByAddressParams {
    factory: string;
    pairAddress: string;
}
export interface IRegisterPairByIndexParams {
    factory: string;
    index: number | BigNumber;
}
export interface IRegisterPairByTokensParams {
    factory: string;
    token0: string;
    token1: string;
}
export interface IRegisterPairByTokensV3Params {
    factory: string;
    token0: string;
    token1: string;
    pairIndex: number | BigNumber;
}
export interface IRegisterPairsByAddressParams {
    factory: string;
    pairAddress: string[];
}
export interface IRegisterPairsByAddress2Params {
    factory: string[];
    pairAddress: string[];
}
export interface IRegisterPairsByIndexParams {
    factory: string;
    index: (number | BigNumber)[];
}
export interface IRegisterPairsByTokensParams {
    factory: string;
    token0: string[];
    token1: string[];
}
export interface IRegisterPairsByTokensV3Params {
    factory: string;
    token0: string[];
    token1: string[];
    pairIndex: (number | BigNumber)[];
}
export interface IRegisterProtocolParams {
    name: string;
    factory: string;
    fee: number | BigNumber;
    feeBase: number | BigNumber;
    typeCode: number | BigNumber;
}
export declare class OSWAP_HybridRouterRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[];
    decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent;
    parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[];
    decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent;
    parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[];
    decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent;
    customPairs: {
        (param1: string): Promise<{
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
        }>;
    };
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    getFee: {
        (pairAddress: string): Promise<{
            fee: BigNumber;
            feeBase: BigNumber;
        }>;
    };
    getPairTokens: {
        (pairAddress: string[]): Promise<{
            token0: string[];
            token1: string[];
        }>;
    };
    getTypeCode: {
        (pairAddress: string): Promise<BigNumber>;
    };
    governance: {
        (): Promise<string>;
    };
    init: {
        (params: IInitParams): Promise<TransactionReceipt>;
        call: (params: IInitParams) => Promise<void>;
    };
    owner: {
        (): Promise<string>;
    };
    pairs: {
        (param1: string): Promise<{
            factory: string;
            token0: string;
            token1: string;
        }>;
    };
    protocolList: {
        (param1: number | BigNumber): Promise<string>;
    };
    protocolListLength: {
        (): Promise<BigNumber>;
    };
    protocols: {
        (param1: string): Promise<{
            name: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
        }>;
    };
    registerPair: {
        (params: IRegisterPairParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairParams) => Promise<void>;
    };
    registerPairByAddress: {
        (params: IRegisterPairByAddressParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByAddressParams) => Promise<void>;
    };
    registerPairByIndex: {
        (params: IRegisterPairByIndexParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByIndexParams) => Promise<void>;
    };
    registerPairByTokens: {
        (params: IRegisterPairByTokensParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensParams) => Promise<void>;
    };
    registerPairByTokensV3: {
        (params: IRegisterPairByTokensV3Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensV3Params) => Promise<void>;
    };
    registerPairsByAddress: {
        (params: IRegisterPairsByAddressParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddressParams) => Promise<void>;
    };
    registerPairsByAddress2: {
        (params: IRegisterPairsByAddress2Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddress2Params) => Promise<void>;
    };
    registerPairsByIndex: {
        (params: IRegisterPairsByIndexParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByIndexParams) => Promise<void>;
    };
    registerPairsByTokens: {
        (params: IRegisterPairsByTokensParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensParams) => Promise<void>;
    };
    registerPairsByTokensV3: {
        (params: IRegisterPairsByTokensV3Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensV3Params) => Promise<void>;
    };
    registerProtocol: {
        (params: IRegisterProtocolParams): Promise<TransactionReceipt>;
        call: (params: IRegisterProtocolParams) => Promise<void>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
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
