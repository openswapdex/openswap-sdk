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
        return this.parseEvents(receipt, "Approval");
    }
    parseDepositEvent(receipt: TransactionReceipt): {dst:string,wad:BigNumber}[]{
        return this.parseEvents(receipt, "Deposit");
    }
    parseTransferEvent(receipt: TransactionReceipt): {src:string,dst:string,wad:BigNumber}[]{
        return this.parseEvents(receipt, "Transfer");
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): {src:string,wad:BigNumber}[]{
        return this.parseEvents(receipt, "Withdrawal");
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
        let result = await this.methods('withdraw',wad);
        return result;
    }
}