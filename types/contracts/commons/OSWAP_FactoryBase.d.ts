import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_FactoryBase extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
    }): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }[];
    parsePairRestartedEvent(receipt: TransactionReceipt): string[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): string[];
    parseRestartedEvent(receipt: TransactionReceipt): any[];
    parseShutdownedEvent(receipt: TransactionReceipt): any[];
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
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
}
