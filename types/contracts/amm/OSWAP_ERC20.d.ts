import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_ERC20 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[];
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[];
    EIP712_TYPEHASH(): Promise<string>;
    NAME_HASH(): Promise<string>;
    PERMIT_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    allowance(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(param1: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    name(): Promise<string>;
    nonces(param1: string): Promise<BigNumber>;
    permit(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
export declare module OSWAP_ERC20 {
    interface ApprovalEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        owner: string;
        spender: string;
        value: BigNumber;
    }
    interface TransferEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        from: string;
        to: string;
        value: BigNumber;
    }
}
