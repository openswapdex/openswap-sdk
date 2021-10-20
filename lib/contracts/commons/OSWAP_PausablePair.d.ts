import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_PausablePair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    factory(): Promise<string>;
    isLive(): Promise<boolean>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
}
