import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OAXDEX_VotingExecutor extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        admin: string;
    }): Promise<string>;
    admin(): Promise<string>;
    execute(params: string[]): Promise<TransactionReceipt>;
    governance(): Promise<string>;
}
