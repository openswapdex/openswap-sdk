import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_PausablePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    factory(): Promise<string>;
    isLive(): Promise<boolean>;
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    private assign;
}
