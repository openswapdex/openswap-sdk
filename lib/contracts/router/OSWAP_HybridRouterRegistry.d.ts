import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouterRegistry extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): {
        pair: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }[];
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {
        previousOwner: string;
        newOwner: string;
    }[];
    parsePairRegisterEvent(receipt: TransactionReceipt): {
        factory: string;
        pair: string;
        token0: string;
        token1: string;
    }[];
    parseProtocolRegisterEvent(receipt: TransactionReceipt): {
        factory: string;
        name: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }[];
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
        fee: number[] | BigNumber[];
        feeBase: number[] | BigNumber[];
        typeCode: number[] | BigNumber[];
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
        index: number[] | BigNumber[];
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
        pairIndex: number[] | BigNumber[];
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
