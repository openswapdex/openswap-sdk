import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_VotingExecutor2 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(factory: string): Promise<string>;
    execute(params: string[]): Promise<TransactionReceipt>;
    factory(): Promise<string>;
    governance(): Promise<string>;
}
