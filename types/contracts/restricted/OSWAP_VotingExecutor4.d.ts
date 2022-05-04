import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class OSWAP_VotingExecutor4 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        governance: string;
        factory: string;
        configStore: string;
    }): Promise<string>;
    configStore(): Promise<string>;
    execute_send(params: string[]): Promise<TransactionReceipt>;
    execute_call(params: string[]): Promise<void>;
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    factory(): Promise<string>;
    governance(): Promise<string>;
    private assign;
}
