import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class TransferHelper extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}
export declare module TransferHelper {
}
