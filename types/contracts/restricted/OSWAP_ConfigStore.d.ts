import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_ConfigStore extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
    customParam(param1: string): Promise<string>;
    customParamNames(param1: number | BigNumber): Promise<string>;
    customParamNamesIdx(param1: string): Promise<BigNumber>;
    customParamNamesLength(): Promise<BigNumber>;
    governance(): Promise<string>;
    setCustomParam(params: {
        paramName: string;
        paramValue: string;
    }): Promise<TransactionReceipt>;
    setMultiCustomParam(params: {
        paramName: string[];
        paramValue: string[];
    }): Promise<TransactionReceipt>;
}
export declare module OSWAP_ConfigStore {
    interface ParamSetEvent {
        _event: Event;
        name: string;
        value: string;
    }
}
