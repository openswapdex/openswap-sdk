import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_CertiKSecurityOracle extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(oracleAddress: string): Promise<string>;
    getSecurityScore(oracle: string): Promise<BigNumber>;
    oracleAddress(): Promise<string>;
}
