import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class ERC20 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): {
        owner: string;
        spender: string;
        value: BigNumber;
    }[];
    parseTransferEvent(receipt: TransactionReceipt): {
        from: string;
        to: string;
        value: BigNumber;
    }[];
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(account: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
