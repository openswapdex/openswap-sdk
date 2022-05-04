import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OAXDEX_VotingExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        admin: string;
    }): Promise<string>;
    admin(): Promise<string>;
    execute_send(params: string[]): Promise<TransactionReceipt>;
    execute_call(params: string[]): Promise<void>;
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    governance(): Promise<string>;
    private assign;
}
