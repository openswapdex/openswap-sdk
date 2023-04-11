import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./StablePair.json";
export interface IDeployParams {token0:string;token1:string;owner:string;fee:number|BigNumber}
export interface IGetAmountInParams {param1:string;amountOut:number|BigNumber}
export interface IGetAmountOutParams {param1:string;amountIn:number|BigNumber}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;param4:string}
export class StablePair extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.token0,params.token1,params.owner,this.wallet.utils.toString(params.fee)], options);
    }
    parseSwapEvent(receipt: TransactionReceipt): StablePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): StablePair.SwapEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new BigNumber(result.amount0In),
            amount1In: new BigNumber(result.amount1In),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): StablePair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): StablePair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    fee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getReserves: {
        (options?: TransactionOptions): Promise<{reserve0:BigNumber,reserve1:BigNumber,param3:BigNumber}>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    setFee: {
        (fee:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (fee:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    }
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    token0: {
        (options?: TransactionOptions): Promise<string>;
    }
    token1: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let fee_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('fee',[],options);
            return new BigNumber(result);
        }
        this.fee = fee_call
        let getAmountInParams = (params: IGetAmountInParams) => [params.param1,this.wallet.utils.toString(params.amountOut)];
        let getAmountIn_call = async (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [params.param1,this.wallet.utils.toString(params.amountIn)];
        let getAmountOut_call = async (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getReserves_call = async (options?: TransactionOptions): Promise<{reserve0:BigNumber,reserve1:BigNumber,param3:BigNumber}> => {
            let result = await this.call('getReserves',[],options);
            return {
                reserve0: new BigNumber(result._reserve0),
                reserve1: new BigNumber(result._reserve1),
                param3: new BigNumber(result[2])
            };
        }
        this.getReserves = getReserves_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
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
        let setFee_send = async (fee:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFee',[this.wallet.utils.toString(fee)],options);
            return result;
        }
        let setFee_call = async (fee:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFee',[this.wallet.utils.toString(fee)],options);
            return;
        }
        this.setFee = Object.assign(setFee_send, {
            call:setFee_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.toString(params.amount0Out),this.wallet.utils.toString(params.amount1Out),params.to,this.wallet.utils.stringToBytes(params.param4)];
        let swap_send = async (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params),options);
            return result;
        }
        let swap_call = async (params: ISwapParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swap',swapParams(params),options);
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sync',[],options);
            return result;
        }
        let sync_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('sync',[],options);
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
        });
    }
}
export module StablePair{
    export interface SwapEvent {sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string,_event:Event}
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
}