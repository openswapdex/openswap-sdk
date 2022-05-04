import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedPairCreator extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    createPair_send(salt: string): Promise<TransactionReceipt>;
    createPair_call(salt: string): Promise<string>;
    createPair: {
        (salt: string): Promise<TransactionReceipt>;
        call: (salt: string) => Promise<string>;
    };
    private assign;
}
