import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OraclePairDelegatorRegistry.json";

export interface IDelegatorsParams {param1:string;param2:number|BigNumber}
export interface IDelegatorsIdxParams {param1:string;param2:string}
export interface IGetProviderDelegatorsParams {provider:string;start:number|BigNumber;length:number|BigNumber}
export interface IIsDelegatorParams {provider:string;delegator:string}
export class OSWAP_OraclePairDelegatorRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseAddDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePairDelegatorRegistry.AddDelegatorEvent[]{
        return this.parseEvents(receipt, "AddDelegator").map(e=>this.decodeAddDelegatorEvent(e));
    }
    decodeAddDelegatorEvent(event: Event): OSWAP_OraclePairDelegatorRegistry.AddDelegatorEvent{
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    parseRemoveDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePairDelegatorRegistry.RemoveDelegatorEvent[]{
        return this.parseEvents(receipt, "RemoveDelegator").map(e=>this.decodeRemoveDelegatorEvent(e));
    }
    decodeRemoveDelegatorEvent(event: Event): OSWAP_OraclePairDelegatorRegistry.RemoveDelegatorEvent{
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    addDelegator: {
        (delegator:string): Promise<TransactionReceipt>;
        call: (delegator:string) => Promise<void>;
    }
    delegators: {
        (params: IDelegatorsParams): Promise<string>;
    }
    delegatorsIdx: {
        (params: IDelegatorsIdxParams): Promise<BigNumber>;
    }
    getDelegatorsLength: {
        (provider:string): Promise<BigNumber>;
    }
    getProviderDelegators: {
        (params: IGetProviderDelegatorsParams): Promise<string[]>;
    }
    isDelegator: {
        (params: IIsDelegatorParams): Promise<boolean>;
    }
    removeDelegator: {
        (delegator:string): Promise<TransactionReceipt>;
        call: (delegator:string) => Promise<void>;
    }
    private assign(){
        let delegatorsParams = (params: IDelegatorsParams) => [params.param1,Utils.toString(params.param2)];
        let delegators_call = async (params: IDelegatorsParams): Promise<string> => {
            let result = await this.call('delegators',delegatorsParams(params));
            return result;
        }
        this.delegators = delegators_call
        let delegatorsIdxParams = (params: IDelegatorsIdxParams) => [params.param1,params.param2];
        let delegatorsIdx_call = async (params: IDelegatorsIdxParams): Promise<BigNumber> => {
            let result = await this.call('delegatorsIdx',delegatorsIdxParams(params));
            return new BigNumber(result);
        }
        this.delegatorsIdx = delegatorsIdx_call
        let getDelegatorsLength_call = async (provider:string): Promise<BigNumber> => {
            let result = await this.call('getDelegatorsLength',[provider]);
            return new BigNumber(result);
        }
        this.getDelegatorsLength = getDelegatorsLength_call
        let getProviderDelegatorsParams = (params: IGetProviderDelegatorsParams) => [params.provider,Utils.toString(params.start),Utils.toString(params.length)];
        let getProviderDelegators_call = async (params: IGetProviderDelegatorsParams): Promise<string[]> => {
            let result = await this.call('getProviderDelegators',getProviderDelegatorsParams(params));
            return result;
        }
        this.getProviderDelegators = getProviderDelegators_call
        let isDelegatorParams = (params: IIsDelegatorParams) => [params.provider,params.delegator];
        let isDelegator_call = async (params: IIsDelegatorParams): Promise<boolean> => {
            let result = await this.call('isDelegator',isDelegatorParams(params));
            return result;
        }
        this.isDelegator = isDelegator_call
        let addDelegator_send = async (delegator:string): Promise<TransactionReceipt> => {
            let result = await this.send('addDelegator',[delegator]);
            return result;
        }
        let addDelegator_call = async (delegator:string): Promise<void> => {
            let result = await this.call('addDelegator',[delegator]);
            return;
        }
        this.addDelegator = Object.assign(addDelegator_send, {
            call:addDelegator_call
        });
        let removeDelegator_send = async (delegator:string): Promise<TransactionReceipt> => {
            let result = await this.send('removeDelegator',[delegator]);
            return result;
        }
        let removeDelegator_call = async (delegator:string): Promise<void> => {
            let result = await this.call('removeDelegator',[delegator]);
            return;
        }
        this.removeDelegator = Object.assign(removeDelegator_send, {
            call:removeDelegator_call
        });
    }
}
export module OSWAP_OraclePairDelegatorRegistry{
    export interface AddDelegatorEvent {provider:string,delegator:string,_event:Event}
    export interface RemoveDelegatorEvent {provider:string,delegator:string,_event:Event}
}