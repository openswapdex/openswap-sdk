import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./EvilAmmPair.json";

export class EvilAmmPair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{token0:string,token1:string}): Promise<string>{
        return this.__deploy([params.token0,params.token1]);
    }
    parseSyncEvent(receipt: TransactionReceipt): EvilAmmPair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): EvilAmmPair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    async __blockTimestampLast(): Promise<BigNumber>{
        let result = await this.call('__blockTimestampLast');
        return new BigNumber(result);
    }
    async __reserve0(): Promise<BigNumber>{
        let result = await this.call('__reserve0');
        return new BigNumber(result);
    }
    async __reserve1(): Promise<BigNumber>{
        let result = await this.call('__reserve1');
        return new BigNumber(result);
    }
    async _owner(): Promise<string>{
        let result = await this.call('_owner');
        return result;
    }
    async getReserves(): Promise<{reserve0:BigNumber,reserve1:BigNumber,blockTimestampLast:BigNumber}>{
        let result = await this.call('getReserves');
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            blockTimestampLast: new BigNumber(result.blockTimestampLast)
        };
    }
    async setOwner_send(owner:string): Promise<TransactionReceipt>{
        let result = await this.send('setOwner',[owner]);
        return result;
    }
    async setOwner_call(owner:string): Promise<void>{
        let result = await this.call('setOwner',[owner]);
        return;
    }
    setOwner: {
        (owner:string): Promise<TransactionReceipt>;
        call: (owner:string) => Promise<void>;
    }
    async setReserves_send(params:{reserve0:number|BigNumber,reserve1:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setReserves',[Utils.toString(params.reserve0),Utils.toString(params.reserve1)]);
        return result;
    }
    async setReserves_call(params:{reserve0:number|BigNumber,reserve1:number|BigNumber}): Promise<void>{
        let result = await this.call('setReserves',[Utils.toString(params.reserve0),Utils.toString(params.reserve1)]);
        return;
    }
    setReserves: {
        (params:{reserve0:number|BigNumber,reserve1:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{reserve0:number|BigNumber,reserve1:number|BigNumber}) => Promise<void>;
    }
    async swap_send(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,Utils.stringToBytes(params.data)]);
        return result;
    }
    async swap_call(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<void>{
        let result = await this.call('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,Utils.stringToBytes(params.data)]);
        return;
    }
    swap: {
        (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>;
        call: (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}) => Promise<void>;
    }
    async token0(): Promise<string>{
        let result = await this.call('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.call('token1');
        return result;
    }
    private assign(){
        this.setOwner = Object.assign(this.setOwner_send, {call:this.setOwner_call});
        this.setReserves = Object.assign(this.setReserves_send, {call:this.setReserves_call});
        this.swap = Object.assign(this.swap_send, {call:this.swap_call});
    }
}
export module EvilAmmPair{
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
}