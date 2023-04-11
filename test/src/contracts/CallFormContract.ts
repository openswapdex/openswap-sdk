import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./CallFormContract.json";
export interface IDeployParams {weth:string;factory:string;router:string}
export interface ICallPairToSwapParams {token0:string;token1:string;token0In:number|BigNumber;token1In:number|BigNumber;token0Out:number|BigNumber;token1Out:number|BigNumber;data:string}
export class CallFormContract extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.weth,params.factory,params.router], options);
    }
    callPairToSwap: {
        (params: ICallPairToSwapParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICallPairToSwapParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    router: {
        (options?: TransactionOptions): Promise<string>;
    }
    weth: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let router_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('router',[],options);
            return result;
        }
        this.router = router_call
        let weth_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('weth',[],options);
            return result;
        }
        this.weth = weth_call
        let callPairToSwapParams = (params: ICallPairToSwapParams) => [params.token0,params.token1,this.wallet.utils.toString(params.token0In),this.wallet.utils.toString(params.token1In),this.wallet.utils.toString(params.token0Out),this.wallet.utils.toString(params.token1Out),this.wallet.utils.stringToBytes(params.data)];
        let callPairToSwap_send = async (params: ICallPairToSwapParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('callPairToSwap',callPairToSwapParams(params),options);
            return result;
        }
        let callPairToSwap_call = async (params: ICallPairToSwapParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('callPairToSwap',callPairToSwapParams(params),options);
            return;
        }
        this.callPairToSwap = Object.assign(callPairToSwap_send, {
            call:callPairToSwap_call
        });
    }
}