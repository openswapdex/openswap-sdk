import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export declare class OSWAP_PausablePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    factory: {
        (): Promise<string>;
    };
    isLive: {
        (): Promise<boolean>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    private assign;
}
