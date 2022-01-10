import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockAmmFactory.json");

export class MockAmmFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): MockAmmFactory.PairCreatedEvent[]{
        let events = this.parseEvents(receipt, "PairCreated");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                token0: result.token0,
                token1: result.token1,
                pair: result.pair,
                newSize: new BigNumber(result.newSize)
            };
        });
    }
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async setPair(params:{token0:string,token1:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setPair',params.token0,params.token1,params.pair);
        return result;
    }
}
export module MockAmmFactory{
    export interface PairCreatedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,pair:string,newSize:BigNumber}
}