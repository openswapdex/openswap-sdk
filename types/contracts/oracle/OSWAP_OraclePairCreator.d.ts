import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export declare class OSWAP_OraclePairCreator extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    createPair: {
        (salt: string): Promise<TransactionReceipt>;
        call: (salt: string) => Promise<string>;
    };
    private assign;
}
