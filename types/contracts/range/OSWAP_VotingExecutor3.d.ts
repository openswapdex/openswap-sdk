import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_VotingExecutor3 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        factory: string;
        hybridRegistry: string;
    }): Promise<string>;
    execute(params: string[]): Promise<TransactionReceipt>;
    factory(): Promise<string>;
    governance(): Promise<string>;
    hybridRegistry(): Promise<string>;
}
