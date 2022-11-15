import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export declare class OSWAP_VotingExecutor2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(factory: string): Promise<string>;
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    factory: {
        (): Promise<string>;
    };
    governance: {
        (): Promise<string>;
    };
    private assign;
}
