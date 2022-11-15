import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    admin: string;
}
export declare class OAXDEX_VotingExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    admin: {
        (): Promise<string>;
    };
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    governance: {
        (): Promise<string>;
    };
    private assign;
}
