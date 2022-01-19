import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class SafeMath extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}
export declare module SafeMath {
}
