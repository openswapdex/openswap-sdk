import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class ERC20 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    balanceOf(account: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<boolean>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<boolean>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
}
