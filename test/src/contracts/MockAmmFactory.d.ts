import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class MockAmmFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }[];
    createPair(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    setPair(params: {
        token0: string;
        token1: string;
        pair: string;
    }): Promise<TransactionReceipt>;
}
