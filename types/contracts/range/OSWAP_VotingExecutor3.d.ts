import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    factory: string;
    hybridRegistry: string;
}
export declare class OSWAP_VotingExecutor3 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
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
    hybridRegistry: {
        (): Promise<string>;
    };
    private assign;
}
