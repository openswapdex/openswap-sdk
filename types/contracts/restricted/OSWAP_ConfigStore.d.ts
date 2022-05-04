import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_ConfigStore extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string): Promise<string>;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
    customParam(param1: string): Promise<string>;
    customParamNames(param1: number | BigNumber): Promise<string>;
    customParamNamesIdx(param1: string): Promise<BigNumber>;
    customParamNamesLength(): Promise<BigNumber>;
    governance(): Promise<string>;
    setCustomParam_send(params: {
        paramName: string;
        paramValue: string;
    }): Promise<TransactionReceipt>;
    setCustomParam_call(params: {
        paramName: string;
        paramValue: string;
    }): Promise<void>;
    setCustomParam: {
        (params: {
            paramName: string;
            paramValue: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            paramName: string;
            paramValue: string;
        }) => Promise<void>;
    };
    setMultiCustomParam_send(params: {
        paramName: string[];
        paramValue: string[];
    }): Promise<TransactionReceipt>;
    setMultiCustomParam_call(params: {
        paramName: string[];
        paramValue: string[];
    }): Promise<void>;
    setMultiCustomParam: {
        (params: {
            paramName: string[];
            paramValue: string[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            paramName: string[];
            paramValue: string[];
        }) => Promise<void>;
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
