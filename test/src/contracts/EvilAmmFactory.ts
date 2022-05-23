import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./EvilAmmFactory.json";

export class EvilAmmFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): EvilAmmFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): EvilAmmFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    async createPair_send(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.send('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    async createPair_call(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.call('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    createPair: {
        (params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string}) => Promise<string>;
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.call('getPair',[params.param1,params.param2]);
        return result;
    }
    async setPair_send(params:{token0:string,token1:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.send('setPair',[params.token0,params.token1,params.pair]);
        return result;
    }
    async setPair_call(params:{token0:string,token1:string,pair:string}): Promise<void>{
        let result = await this.call('setPair',[params.token0,params.token1,params.pair]);
        return;
    }
    setPair: {
        (params:{token0:string,token1:string,pair:string}): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,pair:string}) => Promise<void>;
    }
    private assign(){
        this.createPair = Object.assign(this.createPair_send, {call:this.createPair_call});
        this.setPair = Object.assign(this.setPair_send, {call:this.setPair_call});
    }
}
export module EvilAmmFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
}