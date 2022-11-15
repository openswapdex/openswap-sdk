import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface ISetCustomParamParams {
    paramName: string;
    paramValue: string;
}
export interface ISetMultiCustomParamParams {
    paramName: string[];
    paramValue: string[];
}
export declare class OSWAP_ConfigStore extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
    customParam: {
        (param1: string): Promise<string>;
    };
    customParamNames: {
        (param1: number | BigNumber): Promise<string>;
    };
    customParamNamesIdx: {
        (param1: string): Promise<BigNumber>;
    };
    customParamNamesLength: {
        (): Promise<BigNumber>;
    };
    governance: {
        (): Promise<string>;
    };
    setCustomParam: {
        (params: ISetCustomParamParams): Promise<TransactionReceipt>;
        call: (params: ISetCustomParamParams) => Promise<void>;
    };
    setMultiCustomParam: {
        (params: ISetMultiCustomParamParams): Promise<TransactionReceipt>;
        call: (params: ISetMultiCustomParamParams) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_ConfigStore {
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
}
