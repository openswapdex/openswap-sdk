import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class MockAmmPair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        token0: string;
        token1: string;
    }): Promise<string>;
    parseSyncEvent(receipt: TransactionReceipt): {
        reserve0: BigNumber;
        reserve1: BigNumber;
    }[];
    __blockTimestampLast(): Promise<BigNumber>;
    __reserve0(): Promise<BigNumber>;
    __reserve1(): Promise<BigNumber>;
    getReserves(): Promise<{
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: BigNumber;
    }>;
    setReserves(params: {
        reserve0: number | BigNumber;
        reserve1: number | BigNumber;
    }): Promise<TransactionReceipt>;
    token0(): Promise<string>;
    token1(): Promise<string>;
}
