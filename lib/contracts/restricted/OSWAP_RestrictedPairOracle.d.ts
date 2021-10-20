import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedPairOracle extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    WEI(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        payload: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
        payload: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
}
