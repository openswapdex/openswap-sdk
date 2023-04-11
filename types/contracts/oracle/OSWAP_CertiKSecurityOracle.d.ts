import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_CertiKSecurityOracle extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(oracleAddress: string, options?: TransactionOptions): Promise<string>;
    getSecurityScore: {
        (oracle: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    oracleAddress: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
