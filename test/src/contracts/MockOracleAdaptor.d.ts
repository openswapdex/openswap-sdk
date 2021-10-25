import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class MockOracleAdaptor extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        weth: string;
        decimals: number | BigNumber;
        tokens: string[];
        prices: number[] | BigNumber[];
    }): Promise<string>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        param3: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        from: string;
        to: string;
    }): Promise<boolean>;
    setPrice(params: {
        token0: string;
        token1: string;
        price0: number | BigNumber;
        price1: number | BigNumber;
    }): Promise<TransactionReceipt>;
    weth(): Promise<string>;
}
