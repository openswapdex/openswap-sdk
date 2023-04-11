import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./EvilAmmFactory.json";
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetPairParams {token0:string;token1:string;pair:string}
export class EvilAmmFactory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
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
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    }
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    }
    setPair: {
        (params: ISetPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetPairParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params),options);
            return result;
        }
        this.getPair = getPair_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params),options);
            return result;
        }
        let createPair_call = async (params: ICreatePairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params),options);
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let setPairParams = (params: ISetPairParams) => [params.token0,params.token1,params.pair];
        let setPair_send = async (params: ISetPairParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setPair',setPairParams(params),options);
            return result;
        }
        let setPair_call = async (params: ISetPairParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setPair',setPairParams(params),options);
            return;
        }
        this.setPair = Object.assign(setPair_send, {
            call:setPair_call
        });
    }
}
export module EvilAmmFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
}