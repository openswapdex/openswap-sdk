import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OpenSwap.json";

export class OpenSwap extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{minter:string,initSupplyTo:string,initSupply:number|BigNumber,totalSupply:number|BigNumber}): Promise<string>{
        return this._deploy(params.minter,params.initSupplyTo,this.utils.toString(params.initSupply),this.utils.toString(params.totalSupply));
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
        let result = await this.methods('allowance',params.owner,params.spender);
        return new BigNumber(result);
    }
    async approve(params:{spender:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.spender,this.utils.toString(params.amount));
        return result;
    }
    async balanceOf(account:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',account);
        return new BigNumber(result);
    }
    async cap(): Promise<BigNumber>{
        let result = await this.methods('cap');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async decreaseAllowance(params:{spender:string,subtractedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('decreaseAllowance',params.spender,this.utils.toString(params.subtractedValue));
        return result;
    }
    async increaseAllowance(params:{spender:string,addedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('increaseAllowance',params.spender,this.utils.toString(params.addedValue));
        return result;
    }
    async mint(params:{account:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('mint',params.account,this.utils.toString(params.amount));
        return result;
    }
    async minter(): Promise<string>{
        let result = await this.methods('minter');
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.methods('symbol');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.methods('totalSupply');
        return new BigNumber(result);
    }
    async transfer(params:{recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transfer',params.recipient,this.utils.toString(params.amount));
        return result;
    }
    async transferFrom(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.sender,params.recipient,this.utils.toString(params.amount));
        return result;
    }
}
export module OpenSwap{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}