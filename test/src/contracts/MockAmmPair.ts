import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MockAmmPair.json";
export interface IDeployParams {token0:string;token1:string}
export interface ISetReservesParams {reserve0:number|BigNumber;reserve1:number|BigNumber}
export class MockAmmPair extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.token0,params.token1], options);
    }
    parseSyncEvent(receipt: TransactionReceipt): MockAmmPair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): MockAmmPair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    __blockTimestampLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    __reserve0: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    __reserve1: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getReserves: {
        (options?: TransactionOptions): Promise<{reserve0:BigNumber,reserve1:BigNumber,blockTimestampLast:BigNumber}>;
    }
    setReserves: {
        (params: ISetReservesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetReservesParams, options?: TransactionOptions) => Promise<void>;
    }
    token0: {
        (options?: TransactionOptions): Promise<string>;
    }
    token1: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let __blockTimestampLast_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('__blockTimestampLast',[],options);
            return new BigNumber(result);
        }
        this.__blockTimestampLast = __blockTimestampLast_call
        let __reserve0_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('__reserve0',[],options);
            return new BigNumber(result);
        }
        this.__reserve0 = __reserve0_call
        let __reserve1_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('__reserve1',[],options);
            return new BigNumber(result);
        }
        this.__reserve1 = __reserve1_call
        let getReserves_call = async (options?: TransactionOptions): Promise<{reserve0:BigNumber,reserve1:BigNumber,blockTimestampLast:BigNumber}> => {
            let result = await this.call('getReserves',[],options);
            return {
                reserve0: new BigNumber(result.reserve0),
                reserve1: new BigNumber(result.reserve1),
                blockTimestampLast: new BigNumber(result.blockTimestampLast)
            };
        }
        this.getReserves = getReserves_call
        let token0_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token0',[],options);
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token1',[],options);
            return result;
        }
        this.token1 = token1_call
        let setReservesParams = (params: ISetReservesParams) => [this.wallet.utils.toString(params.reserve0),this.wallet.utils.toString(params.reserve1)];
        let setReserves_send = async (params: ISetReservesParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setReserves',setReservesParams(params),options);
            return result;
        }
        let setReserves_call = async (params: ISetReservesParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setReserves',setReservesParams(params),options);
            return;
        }
        this.setReserves = Object.assign(setReserves_send, {
            call:setReserves_call
        });
    }
}
export module MockAmmPair{
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
}