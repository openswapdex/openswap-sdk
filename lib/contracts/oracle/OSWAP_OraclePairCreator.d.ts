import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class OSWAP_OraclePairCreator extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    createPair(salt: string): Promise<string>;
}
