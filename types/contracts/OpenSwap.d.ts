import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OpenSwap extends Contract {
    constructor(wallet: IWallet, address?: string);
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
    approve_send(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    approve: {
        (params: {
            spender: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    balanceOf(account: string): Promise<BigNumber>;
    cap(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance_send(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    decreaseAllowance_call(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<boolean>;
    decreaseAllowance: {
        (params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }) => Promise<boolean>;
    };
    increaseAllowance_send(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance_call(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<boolean>;
    increaseAllowance: {
        (params: {
            spender: string;
            addedValue: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            addedValue: number | BigNumber;
        }) => Promise<boolean>;
    };
    mint_send(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    mint_call(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<void>;
    mint: {
        (params: {
            account: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            account: string;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
    minter(): Promise<string>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer_send(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transfer_call(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transfer: {
        (params: {
            recipient: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            recipient: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    transferFrom_send(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transferFrom: {
        (params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    private assign;
}
export declare module OpenSwap {
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
