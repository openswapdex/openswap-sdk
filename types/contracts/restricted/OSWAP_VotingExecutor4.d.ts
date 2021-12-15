import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_VotingExecutor4 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        factory: string;
        configStore: string;
    }): Promise<string>;
    configStore(): Promise<string>;
    execute(params: string[]): Promise<TransactionReceipt>;
    factory(): Promise<string>;
    governance(): Promise<string>;
}
