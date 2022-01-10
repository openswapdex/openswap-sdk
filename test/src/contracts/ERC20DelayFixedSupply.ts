import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/ERC20DelayFixedSupply.json");

export class ERC20DelayFixedSupply extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{minter:string,name:string,symbol:string}): Promise<string>{        	
        return this._deploy(params.minter,params.name,params.symbol);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ERC20DelayFixedSupply.ApprovalEvent[]{
        let events = this.parseEvents(receipt, "Approval");
        return events.map(result => {
            return {
                owner: result.owner,
                spender: result.spender,
                value: new BigNumber(result.value)
            };
        });
    }
    parseTransferEvent(receipt: TransactionReceipt): ERC20DelayFixedSupply.TransferEvent[]{
        let events = this.parseEvents(receipt, "Transfer");
        return events.map(result => {
            return {
                from: result.from,
                to: result.to,
                value: new BigNumber(result.value)
            };
        });
    }
    async allowance(params:{owner:string,spender:string}): Promise<BigNumber>{
        let result = await this.methods('allowance',params.owner,params.spender);
        return new BigNumber(result);
    }
    async approve(params:{spender:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.spender,Utils.toString(params.amount));
        return result;
    }
    async balanceOf(account:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',account);
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async decreaseAllowance(params:{spender:string,subtractedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('decreaseAllowance',params.spender,Utils.toString(params.subtractedValue));
        return result;
    }
    async increaseAllowance(params:{spender:string,addedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('increaseAllowance',params.spender,Utils.toString(params.addedValue));
        return result;
    }
    async mint(params:{to:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('mint',params.to,Utils.toString(params.amount));
        return result;
    }
    async minted(): Promise<boolean>{
        let result = await this.methods('minted');
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
        let result = await this.methods('transfer',params.recipient,Utils.toString(params.amount));
        return result;
    }
    async transferFrom(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.sender,params.recipient,Utils.toString(params.amount));
        return result;
    }
}
export module ERC20DelayFixedSupply{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber}
    export interface TransferEvent {from:string,to:string,value:BigNumber}
}