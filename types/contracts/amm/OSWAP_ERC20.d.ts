import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_ERC20 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OSWAP_ERC20.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[];
    decodeTransferEvent(event: Event): OSWAP_ERC20.TransferEvent;
    EIP712_TYPEHASH(): Promise<string>;
    NAME_HASH(): Promise<string>;
    PERMIT_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    allowance(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    approve_send(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    approve: {
        (params: {
            spender: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    balanceOf(param1: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    name(): Promise<string>;
    nonces(param1: string): Promise<BigNumber>;
    permit_send(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    permit_call(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<void>;
    permit: {
        (params: {
            owner: string;
            spender: string;
            value: number | BigNumber;
            deadline: number | BigNumber;
            v: number | BigNumber;
            r: string;
            s: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            owner: string;
            spender: string;
            value: number | BigNumber;
            deadline: number | BigNumber;
            v: number | BigNumber;
            r: string;
            s: string;
        }) => Promise<void>;
    };
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer_send(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transfer_call(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    transfer: {
        (params: {
            to: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            to: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    transferFrom_send(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    transferFrom: {
        (params: {
            from: string;
            to: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    private assign;
}
export declare module OSWAP_ERC20 {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
