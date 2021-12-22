import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_PausableFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parsePairRestartedEvent(receipt: TransactionReceipt): {
        pair: string;
    }[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): {
        pair: string;
    }[];
    parseRestartedEvent(receipt: TransactionReceipt): any[];
    parseShutdownedEvent(receipt: TransactionReceipt): any[];
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
}
