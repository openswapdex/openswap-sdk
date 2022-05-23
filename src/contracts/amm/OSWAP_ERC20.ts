import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_ERC20.json";

export class OSWAP_ERC20 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): OSWAP_ERC20.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): OSWAP_ERC20.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    async EIP712_TYPEHASH(): Promise<string>{
        let result = await this.call('EIP712_TYPEHASH');
        return result;
    }
    async NAME_HASH(): Promise<string>{
        let result = await this.call('NAME_HASH');
        return result;
    }
    async PERMIT_TYPEHASH(): Promise<string>{
        let result = await this.call('PERMIT_TYPEHASH');
        return result;
    }
    async VERSION_HASH(): Promise<string>{
        let result = await this.call('VERSION_HASH');
        return result;
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.call('allowance',[params.param1,params.param2]);
        return new BigNumber(result);
    }
    async approve_send(params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('approve',[params.spender,Utils.toString(params.value)]);
        return result;
    }
    async approve_call(params:{spender:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('approve',[params.spender,Utils.toString(params.value)]);
        return result;
    }
    approve: {
        (params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{spender:string,value:number|BigNumber}) => Promise<boolean>;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.call('balanceOf',[param1]);
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async nonces(param1:string): Promise<BigNumber>{
        let result = await this.call('nonces',[param1]);
        return new BigNumber(result);
    }
    async permit_send(params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.send('permit',[params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return result;
    }
    async permit_call(params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<void>{
        let result = await this.call('permit',[params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return;
    }
    permit: {
        (params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>;
        call: (params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}) => Promise<void>;
    }
    async symbol(): Promise<string>{
        let result = await this.call('symbol');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.call('totalSupply');
        return new BigNumber(result);
    }
    async transfer_send(params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transfer',[params.to,Utils.toString(params.value)]);
        return result;
    }
    async transfer_call(params:{to:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transfer',[params.to,Utils.toString(params.value)]);
        return result;
    }
    transfer: {
        (params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{to:string,value:number|BigNumber}) => Promise<boolean>;
    }
    async transferFrom_send(params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transferFrom',[params.from,params.to,Utils.toString(params.value)]);
        return result;
    }
    async transferFrom_call(params:{from:string,to:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transferFrom',[params.from,params.to,Utils.toString(params.value)]);
        return result;
    }
    transferFrom: {
        (params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,value:number|BigNumber}) => Promise<boolean>;
    }
    private assign(){
        this.approve = Object.assign(this.approve_send, {call:this.approve_call});
        this.permit = Object.assign(this.permit_send, {call:this.permit_call});
        this.transfer = Object.assign(this.transfer_send, {call:this.transfer_call});
        this.transferFrom = Object.assign(this.transferFrom_send, {call:this.transferFrom_call});
    }
}
export module OSWAP_ERC20{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}