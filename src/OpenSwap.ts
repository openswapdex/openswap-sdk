import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
import {OpenSwap as OpenSwapContract} from "./contracts";

export class OpenSwap {
    _oswap: OpenSwapContract;
    constructor(oswap:OpenSwapContract){
        this._oswap = oswap;
    }
    async allowance(params:{owner:string,spender:string}): Promise<BigNumber>{
        return Utils.fromDecimals(await this._oswap.allowance(params));
    }
    async approve(params:{spender:string,amount:number|BigNumber}): Promise<{owner: string, spender: string, value: BigNumber}>{
        params.amount = Utils.toDecimals(params.amount);
        let receipt = await this._oswap.approve(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async balanceOf(account:string): Promise<BigNumber>{
        return Utils.fromDecimals(await this._oswap.balanceOf(account));
    }
    get cap(): Promise<BigNumber>{
        return (async ()=>{return Utils.fromDecimals(await this._oswap.cap());})();
    }
    get decimals(): Promise<number>{
        return (async ()=>{return (await this._oswap.decimals()).toNumber();})();
    }
    async decreaseAllowance(params:{spender:string,subtractedValue:number|BigNumber}): Promise<{owner: string, spender: string, value: BigNumber}>{
        params.subtractedValue = Utils.toDecimals(params.subtractedValue);
        let receipt = await this._oswap.decreaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async increaseAllowance(params:{spender:string,addedValue:number|BigNumber}): Promise<{owner: string, spender: string, value: BigNumber}>{
        params.addedValue = Utils.toDecimals(params.addedValue);
        let receipt = await this._oswap.increaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async mint(params:{address:string,amount:number|BigNumber}): Promise<{from: string, to: string, value: BigNumber}>{
        let receipt = await this._oswap.mint({account: params.address, amount: Utils.toDecimals(params.amount)});
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    get minter(): Promise<string>{
        return this._oswap.minter();
    }
    get name(): Promise<string>{
        return this._oswap.name();
    }
    get symbol(): Promise<string>{
        return this._oswap.symbol();
    }
    get totalSupply(): Promise<BigNumber>{
        return (async ()=>{return Utils.fromDecimals(await this._oswap.totalSupply());})();
    }
    async transfer(params:{address:string,amount:number|BigNumber}): Promise<{from: string, to: string, value: BigNumber}>{
        let receipt = await this._oswap.transfer({recipient: params.address, amount: Utils.toDecimals(params.amount)});
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async transferFrom(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<{
        transfer:{from: string, to: string, value: BigNumber},
        approval:{owner: string, spender: string, value: BigNumber}
    }>{
        params.amount = Utils.toDecimals(params.amount);
        let receipt = await this._oswap.transferFrom(params);
        let transfer = this._oswap.parseTransferEvent(receipt)[0];
        transfer.value = Utils.fromDecimals(transfer.value);
        let approval = this._oswap.parseApprovalEvent(receipt)[0];
        approval.value = Utils.fromDecimals(approval.value);
        return {transfer, approval};
    }

    parseApprovalEvent(receipt: TransactionReceipt){
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
    }
    parseTransferEvent(receipt: TransactionReceipt){
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
    }
}