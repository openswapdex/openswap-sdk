import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./StableFactory.json";
export interface ICreatePairParams {tokenA:string;tokenB:string;owner:string;fee:number|BigNumber}
export interface IGetPairParams {param1:string;param2:string;param3:number|BigNumber}
export interface IGetPairsLengthParams {tokenA:string;tokenB:string}
export class StableFactory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): StableFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): StableFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<void>;
    }
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    }
    getPairsLength: {
        (params: IGetPairsLengthParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('allPairs',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allPairsLength',[],options);
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
        let getPair_call = async (params: IGetPairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params),options);
            return result;
        }
        this.getPair = getPair_call
        let getPairsLengthParams = (params: IGetPairsLengthParams) => [params.tokenA,params.tokenB];
        let getPairsLength_call = async (params: IGetPairsLengthParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getPairsLength',getPairsLengthParams(params),options);
            return new BigNumber(result);
        }
        this.getPairsLength = getPairsLength_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB,params.owner,this.wallet.utils.toString(params.fee)];
        let createPair_send = async (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params),options);
            return result;
        }
        let createPair_call = async (params: ICreatePairParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('createPair',createPairParams(params),options);
            return;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
    }
}
export module StableFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
}