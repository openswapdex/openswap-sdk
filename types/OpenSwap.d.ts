import { TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
import { OpenSwap as OpenSwapContract } from "./contracts";
export declare class OpenSwap {
    _oswap: OpenSwapContract;
    constructor(oswap: OpenSwapContract);
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<{
        owner: string;
        spender: string;
        value: BigNumber;
    }>;
    balanceOf(account: string): Promise<BigNumber>;
    get cap(): Promise<BigNumber>;
    get decimals(): Promise<number>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<{
        owner: string;
        spender: string;
        value: BigNumber;
    }>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<{
        owner: string;
        spender: string;
        value: BigNumber;
    }>;
    mint(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<{
        from: string;
        to: string;
        value: BigNumber;
    }>;
    get minter(): Promise<string>;
    get name(): Promise<string>;
    get symbol(): Promise<string>;
    get totalSupply(): Promise<BigNumber>;
    transfer(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<{
        from: string;
        to: string;
        value: BigNumber;
    }>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<{
        transfer: {
            from: string;
            to: string;
            value: BigNumber;
        };
        approval: {
            owner: string;
            spender: string;
            value: BigNumber;
        };
    }>;
    parseApprovalEvent(receipt: TransactionReceipt): void;
    parseTransferEvent(receipt: TransactionReceipt): void;
}
