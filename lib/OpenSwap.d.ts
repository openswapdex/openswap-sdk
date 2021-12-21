import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OpenSwap extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
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
    private getBigNumber;
    get cap(): Promise<BigNumber>;
    get decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    mint(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    get minter(): Promise<string>;
    get name(): Promise<string>;
    get symbol(): Promise<string>;
    get totalSupply(): Promise<BigNumber>;
    transfer(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
