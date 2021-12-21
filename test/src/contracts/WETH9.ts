import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/WETH9.json");

export class WETH9 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): {src:string,guy:string,wad:BigNumber}[]{
        let events = this.parseEvents(receipt, "Approval");
        return events.map(result => {
            return {
                src: result.src,
                guy: result.guy,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseDepositEvent(receipt: TransactionReceipt): {dst:string,wad:BigNumber}[]{
        let events = this.parseEvents(receipt, "Deposit");
        return events.map(result => {
            return {
                dst: result.dst,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseTransferEvent(receipt: TransactionReceipt): {src:string,dst:string,wad:BigNumber}[]{
        let events = this.parseEvents(receipt, "Transfer");
        return events.map(result => {
            return {
                src: result.src,
                dst: result.dst,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): {src:string,wad:BigNumber}[]{
        let events = this.parseEvents(receipt, "Withdrawal");
        return events.map(result => {
            return {
                src: result.src,
                wad: new BigNumber(result.wad)
            };
        });
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('allowance',params.param1,params.param2);
        return new BigNumber(result);
    }
    async approve(params:{guy:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.guy,Utils.toString(params.wad));
        return result;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',param1);
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async deposit(_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('deposit',_value);
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
    async transfer(params:{dst:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transfer',params.dst,Utils.toString(params.wad));
        return result;
    }
    async transferFrom(params:{src:string,dst:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.src,params.dst,Utils.toString(params.wad));
        return result;
    }
    async withdraw(wad:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('withdraw',Utils.toString(wad));
        return result;
    }
}