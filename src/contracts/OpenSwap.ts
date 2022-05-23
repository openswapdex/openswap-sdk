import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OpenSwap.json";

export class OpenSwap extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{minter:string,initSupplyTo:string,initSupply:number|BigNumber,totalSupply:number|BigNumber}): Promise<string>{
        return this.__deploy([params.minter,params.initSupplyTo,Utils.toString(params.initSupply),Utils.toString(params.totalSupply)]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): OpenSwap.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): OpenSwap.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): OpenSwap.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): OpenSwap.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    async allowance(params:{owner:string,spender:string}): Promise<BigNumber>{
        let result = await this.call('allowance',[params.owner,params.spender]);
        return new BigNumber(result);
    }
    async approve_send(params:{spender:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('approve',[params.spender,Utils.toString(params.amount)]);
        return result;
    }
    async approve_call(params:{spender:string,amount:number|BigNumber}): Promise<boolean>{
        let result = await this.call('approve',[params.spender,Utils.toString(params.amount)]);
        return result;
    }
    approve: {
        (params:{spender:string,amount:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{spender:string,amount:number|BigNumber}) => Promise<boolean>;
    }
    async balanceOf(account:string): Promise<BigNumber>{
        let result = await this.call('balanceOf',[account]);
        return new BigNumber(result);
    }
    async cap(): Promise<BigNumber>{
        let result = await this.call('cap');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async decreaseAllowance_send(params:{spender:string,subtractedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('decreaseAllowance',[params.spender,Utils.toString(params.subtractedValue)]);
        return result;
    }
    async decreaseAllowance_call(params:{spender:string,subtractedValue:number|BigNumber}): Promise<boolean>{
        let result = await this.call('decreaseAllowance',[params.spender,Utils.toString(params.subtractedValue)]);
        return result;
    }
    decreaseAllowance: {
        (params:{spender:string,subtractedValue:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{spender:string,subtractedValue:number|BigNumber}) => Promise<boolean>;
    }
    async increaseAllowance_send(params:{spender:string,addedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('increaseAllowance',[params.spender,Utils.toString(params.addedValue)]);
        return result;
    }
    async increaseAllowance_call(params:{spender:string,addedValue:number|BigNumber}): Promise<boolean>{
        let result = await this.call('increaseAllowance',[params.spender,Utils.toString(params.addedValue)]);
        return result;
    }
    increaseAllowance: {
        (params:{spender:string,addedValue:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{spender:string,addedValue:number|BigNumber}) => Promise<boolean>;
    }
    async mint_send(params:{account:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('mint',[params.account,Utils.toString(params.amount)]);
        return result;
    }
    async mint_call(params:{account:string,amount:number|BigNumber}): Promise<void>{
        let result = await this.call('mint',[params.account,Utils.toString(params.amount)]);
        return;
    }
    mint: {
        (params:{account:string,amount:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{account:string,amount:number|BigNumber}) => Promise<void>;
    }
    async minter(): Promise<string>{
        let result = await this.call('minter');
        return result;
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.call('symbol');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.call('totalSupply');
        return new BigNumber(result);
    }
    async transfer_send(params:{recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transfer',[params.recipient,Utils.toString(params.amount)]);
        return result;
    }
    async transfer_call(params:{recipient:string,amount:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transfer',[params.recipient,Utils.toString(params.amount)]);
        return result;
    }
    transfer: {
        (params:{recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{recipient:string,amount:number|BigNumber}) => Promise<boolean>;
    }
    async transferFrom_send(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transferFrom',[params.sender,params.recipient,Utils.toString(params.amount)]);
        return result;
    }
    async transferFrom_call(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transferFrom',[params.sender,params.recipient,Utils.toString(params.amount)]);
        return result;
    }
    transferFrom: {
        (params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{sender:string,recipient:string,amount:number|BigNumber}) => Promise<boolean>;
    }
    private assign(){
        this.approve = Object.assign(this.approve_send, {call:this.approve_call});
        this.decreaseAllowance = Object.assign(this.decreaseAllowance_send, {call:this.decreaseAllowance_call});
        this.increaseAllowance = Object.assign(this.increaseAllowance_send, {call:this.increaseAllowance_call});
        this.mint = Object.assign(this.mint_send, {call:this.mint_call});
        this.transfer = Object.assign(this.transfer_send, {call:this.transfer_call});
        this.transferFrom = Object.assign(this.transferFrom_send, {call:this.transferFrom_call});
    }
}
export module OpenSwap{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}