import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDelegatorsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IDelegatorsIdxParams {
    param1: string;
    param2: string;
}
export interface IGetProviderDelegatorsParams {
    provider: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IIsDelegatorParams {
    provider: string;
    delegator: string;
}
export declare class OSWAP_OraclePairDelegatorRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAddDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePairDelegatorRegistry.AddDelegatorEvent[];
    decodeAddDelegatorEvent(event: Event): OSWAP_OraclePairDelegatorRegistry.AddDelegatorEvent;
    parseRemoveDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePairDelegatorRegistry.RemoveDelegatorEvent[];
    decodeRemoveDelegatorEvent(event: Event): OSWAP_OraclePairDelegatorRegistry.RemoveDelegatorEvent;
    addDelegator: {
        (delegator: string): Promise<TransactionReceipt>;
        call: (delegator: string) => Promise<void>;
    };
    delegators: {
        (params: IDelegatorsParams): Promise<string>;
    };
    delegatorsIdx: {
        (params: IDelegatorsIdxParams): Promise<BigNumber>;
    };
    getDelegatorsLength: {
        (provider: string): Promise<BigNumber>;
    };
    getProviderDelegators: {
        (params: IGetProviderDelegatorsParams): Promise<string[]>;
    };
    isDelegator: {
        (params: IIsDelegatorParams): Promise<boolean>;
    };
    removeDelegator: {
        (delegator: string): Promise<TransactionReceipt>;
        call: (delegator: string) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_OraclePairDelegatorRegistry {
    interface AddDelegatorEvent {
        provider: string;
        delegator: string;
        _event: Event;
    }
    interface RemoveDelegatorEvent {
        provider: string;
        delegator: string;
        _event: Event;
    }
}
