import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RestrictedLiquidityProvider2.json";

export interface IDeployParams {factory:string;WETH:string}
export interface IAddLiquidityETHWithFeeParams {param:(number|BigNumber)[];feeIn:number|BigNumber}
export interface IAddLiquidityWithFeeParams {param:(number|BigNumber)[];feeIn:number|BigNumber}
export interface IRemoveAllLiquidityParams {tokenA:string;tokenB:string;to:string;pairIndex:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveAllLiquidityETHParams {tokenA:string;to:string;pairIndex:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;removingTokenA:boolean;to:string;pairIndex:number|BigNumber;offerIndex:number|BigNumber;amountOut:number|BigNumber;receivingOut:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveLiquidityETHParams {tokenA:string;removingTokenA:boolean;to:string;pairIndex:number|BigNumber;offerIndex:number|BigNumber;amountOut:number|BigNumber;receivingOut:number|BigNumber;deadline:number|BigNumber}
export class OSWAP_RestrictedLiquidityProvider2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.factory,params.WETH]);
    }
    WETH: {
        (): Promise<string>;
    }
    addLiquidityETHWithFee: {
        (params: IAddLiquidityETHWithFeeParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHWithFeeParams,_value:number|BigNumber) => Promise<{pair:string,_offerIndex:BigNumber}>;
    }
    addLiquidityWithFee: {
        (params: IAddLiquidityWithFeeParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityWithFeeParams) => Promise<{pair:string,_offerIndex:BigNumber}>;
    }
    configStore: {
        (): Promise<string>;
    }
    factory: {
        (): Promise<string>;
    }
    govToken: {
        (): Promise<string>;
    }
    removeAllLiquidity: {
        (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeAllLiquidityETH: {
        (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityETHParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    }
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams) => Promise<void>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let addLiquidityETHWithFeeParams = (params: IAddLiquidityETHWithFeeParams) => [Utils.toString(params.param),Utils.toString(params.feeIn)];
        let addLiquidityETHWithFee_send = async (params: IAddLiquidityETHWithFeeParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityETHWithFee',addLiquidityETHWithFeeParams(params), {value:_value});
            return result;
        }
        let addLiquidityETHWithFee_call = async (params: IAddLiquidityETHWithFeeParams,_value:number|BigNumber): Promise<{pair:string,_offerIndex:BigNumber}> => {
            let result = await this.call('addLiquidityETHWithFee',addLiquidityETHWithFeeParams(params), {value:_value});
            return {
                pair: result.pair,
                _offerIndex: new BigNumber(result._offerIndex)
            };
        }
        this.addLiquidityETHWithFee = Object.assign(addLiquidityETHWithFee_send, {
            call:addLiquidityETHWithFee_call
        });
        let addLiquidityWithFeeParams = (params: IAddLiquidityWithFeeParams) => [Utils.toString(params.param),Utils.toString(params.feeIn)];
        let addLiquidityWithFee_send = async (params: IAddLiquidityWithFeeParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityWithFee',addLiquidityWithFeeParams(params));
            return result;
        }
        let addLiquidityWithFee_call = async (params: IAddLiquidityWithFeeParams): Promise<{pair:string,_offerIndex:BigNumber}> => {
            let result = await this.call('addLiquidityWithFee',addLiquidityWithFeeParams(params));
            return {
                pair: result.pair,
                _offerIndex: new BigNumber(result._offerIndex)
            };
        }
        this.addLiquidityWithFee = Object.assign(addLiquidityWithFee_send, {
            call:addLiquidityWithFee_call
        });
        let removeAllLiquidityParams = (params: IRemoveAllLiquidityParams) => [params.tokenA,params.tokenB,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)];
        let removeAllLiquidity_send = async (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidity',removeAllLiquidityParams(params));
            return result;
        }
        let removeAllLiquidity_call = async (params: IRemoveAllLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeAllLiquidity',removeAllLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call:removeAllLiquidity_call
        });
        let removeAllLiquidityETHParams = (params: IRemoveAllLiquidityETHParams) => [params.tokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)];
        let removeAllLiquidityETH_send = async (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidityETH',removeAllLiquidityETHParams(params));
            return result;
        }
        let removeAllLiquidityETH_call = async (params: IRemoveAllLiquidityETHParams): Promise<{amountToken:BigNumber,amountETH:BigNumber}> => {
            let result = await this.call('removeAllLiquidityETH',removeAllLiquidityETHParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH)
            };
        }
        this.removeAllLiquidityETH = Object.assign(removeAllLiquidityETH_send, {
            call:removeAllLiquidityETH_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<void> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return;
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityETHParams = (params: IRemoveLiquidityETHParams) => [params.tokenA,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityETH',removeLiquidityETHParams(params));
            return result;
        }
        let removeLiquidityETH_call = async (params: IRemoveLiquidityETHParams): Promise<void> => {
            let result = await this.call('removeLiquidityETH',removeLiquidityETHParams(params));
            return;
        }
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call:removeLiquidityETH_call
        });
    }
}