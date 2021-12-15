import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class Math extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}
