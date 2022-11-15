import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedLiquidityProvider4.json";

export interface IDeployParams {factory:string;WETH:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;addingTokenA:boolean;params:(number|BigNumber)[];merkleRoot:string;allowlistIpfsCid:string}
export interface IAddLiquidityETHParams {tokenA:string;addingTokenA:boolean;params:(number|BigNumber)[];merkleRoot:string;allowlistIpfsCid:string}
export interface IRemoveAllLiquidityParams {tokenA:string;tokenB:string;to:string;pairIndex:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveAllLiquidityETHParams {tokenA:string;to:string;pairIndex:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;removingTokenA:boolean;to:string;pairIndex:number|BigNumber;offerIndex:number|BigNumber;amountOut:number|BigNumber;receivingOut:number|BigNumber;feeOut:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveLiquidityETHParams {tokenA:string;removingTokenA:boolean;to:string;pairIndex:number|BigNumber;offerIndex:number|BigNumber;amountOut:number|BigNumber;receivingOut:number|BigNumber;feeOut:number|BigNumber;deadline:number|BigNumber}
export class OSWAP_RestrictedLiquidityProvider4 extends Contract{
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
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{pair:string,_offerIndex:BigNumber}>;
    }
    addLiquidityETH: {
        (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams,_value:number|BigNumber) => Promise<{pair:string,_offerIndex:BigNumber}>;
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
        call: (params: IRemoveAllLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber,feeOut:BigNumber}>;
    }
    removeAllLiquidityETH: {
        (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityETHParams) => Promise<{amountToken:BigNumber,amountETH:BigNumber,feeOut:BigNumber}>;
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
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,params.addingTokenA,this.wallet.utils.toString(params.params),this.wallet.utils.stringToBytes32(params.merkleRoot),params.allowlistIpfsCid];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{pair:string,_offerIndex:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                pair: result.pair,
                _offerIndex: new BigNumber(result._offerIndex)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityETHParams = (params: IAddLiquidityETHParams) => [params.tokenA,params.addingTokenA,this.wallet.utils.toString(params.params),this.wallet.utils.stringToBytes32(params.merkleRoot),params.allowlistIpfsCid];
        let addLiquidityETH_send = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return result;
        }
        let addLiquidityETH_call = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<{pair:string,_offerIndex:BigNumber}> => {
            let result = await this.call('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return {
                pair: result.pair,
                _offerIndex: new BigNumber(result._offerIndex)
            };
        }
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call:addLiquidityETH_call
        });
        let removeAllLiquidityParams = (params: IRemoveAllLiquidityParams) => [params.tokenA,params.tokenB,params.to,this.wallet.utils.toString(params.pairIndex),this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidity_send = async (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidity',removeAllLiquidityParams(params));
            return result;
        }
        let removeAllLiquidity_call = async (params: IRemoveAllLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber,feeOut:BigNumber}> => {
            let result = await this.call('removeAllLiquidity',removeAllLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                feeOut: new BigNumber(result.feeOut)
            };
        }
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call:removeAllLiquidity_call
        });
        let removeAllLiquidityETHParams = (params: IRemoveAllLiquidityETHParams) => [params.tokenA,params.to,this.wallet.utils.toString(params.pairIndex),this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidityETH_send = async (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidityETH',removeAllLiquidityETHParams(params));
            return result;
        }
        let removeAllLiquidityETH_call = async (params: IRemoveAllLiquidityETHParams): Promise<{amountToken:BigNumber,amountETH:BigNumber,feeOut:BigNumber}> => {
            let result = await this.call('removeAllLiquidityETH',removeAllLiquidityETHParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountETH: new BigNumber(result.amountETH),
                feeOut: new BigNumber(result.feeOut)
            };
        }
        this.removeAllLiquidityETH = Object.assign(removeAllLiquidityETH_send, {
            call:removeAllLiquidityETH_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,params.removingTokenA,params.to,this.wallet.utils.toString(params.pairIndex),this.wallet.utils.toString(params.offerIndex),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.receivingOut),this.wallet.utils.toString(params.feeOut),this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params: IRemoveLiquidityETHParams) => [params.tokenA,params.removingTokenA,params.to,this.wallet.utils.toString(params.pairIndex),this.wallet.utils.toString(params.offerIndex),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.receivingOut),this.wallet.utils.toString(params.feeOut),this.wallet.utils.toString(params.deadline)];
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