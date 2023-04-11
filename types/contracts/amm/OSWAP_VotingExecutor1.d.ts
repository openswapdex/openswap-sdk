import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_VotingExecutor1 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(factory: string, options?: TransactionOptions): Promise<string>;
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
