import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class UQ112x112 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}
export declare module UQ112x112 {
}
