import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    factory: string;
    configStore: string;
}
export declare class OSWAP_VotingExecutor4 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    configStore: {
        (): Promise<string>;
    };
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
