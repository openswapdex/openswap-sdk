import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class Address extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}
