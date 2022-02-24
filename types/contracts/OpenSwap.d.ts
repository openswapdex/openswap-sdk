import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OpenSwap extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OpenSwap.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OpenSwap.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): OpenSwap.TransferEvent[];
    decodeTransferEvent(event: Event): OpenSwap.TransferEvent;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(account: string): Promise<BigNumber>;
    cap(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    mint(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    minter(): Promise<string>;
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
export declare module OpenSwap {
    interface ApprovalEvent {
        _event: Event;
        owner: string;
        spender: string;
        value: BigNumber;
    }
    interface TransferEvent {
        _event: Event;
        from: string;
        to: string;
        value: BigNumber;
    }
}
