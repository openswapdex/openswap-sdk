import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangeLiquidityProvider.json";

export interface IDeployParams {factory:string;WETH:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;addingTokenA:boolean;staked:number|BigNumber;amountIn:number|BigNumber;lowerLimit:number|BigNumber;upperLimit:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber;deadline:number|BigNumber}
export interface IAddLiquidityETHParams {tokenA:string;addingTokenA:boolean;staked:number|BigNumber;amountAIn:number|BigNumber;lowerLimit:number|BigNumber;upperLimit:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveAllLiquidityParams {tokenA:string;tokenB:string;to:string;deadline:number|BigNumber}
export interface IRemoveAllLiquidityETHParams {tokenA:string;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;removingTokenA:boolean;to:string;unstake:number|BigNumber;amountOut:number|BigNumber;reserveOut:number|BigNumber;lowerLimit:number|BigNumber;upperLimit:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber;deadline:number|BigNumber}
export interface IRemoveLiquidityETHParams {tokenA:string;removingTokenA:boolean;to:string;unstake:number|BigNumber;amountOut:number|BigNumber;reserveOut:number|BigNumber;lowerLimit:number|BigNumber;upperLimit:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber;deadline:number|BigNumber}
export interface IUpdateProviderOfferParams {tokenA:string;tokenB:string;replenishAmount:number|BigNumber;lowerLimit:number|BigNumber;upperLimit:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber;privateReplenish:boolean;deadline:number|BigNumber}
export class OSWAP_RangeLiquidityProvider extends Contract{
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
        call: (params: IAddLiquidityParams) => Promise<BigNumber>;
    }
    addLiquidityETH: {
        (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams,_value:number|BigNumber) => Promise<BigNumber>;
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
    updateProviderOffer: {
        (params: IUpdateProviderOfferParams): Promise<TransactionReceipt>;
        call: (params: IUpdateProviderOfferParams) => Promise<void>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
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
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,params.addingTokenA,this.wallet.utils.toString(params.staked),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.lowerLimit),this.wallet.utils.toString(params.upperLimit),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire),this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<BigNumber> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return new BigNumber(result);
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityETHParams = (params: IAddLiquidityETHParams) => [params.tokenA,params.addingTokenA,this.wallet.utils.toString(params.staked),this.wallet.utils.toString(params.amountAIn),this.wallet.utils.toString(params.lowerLimit),this.wallet.utils.toString(params.upperLimit),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire),this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return result;
        }
        let addLiquidityETH_call = async (params: IAddLiquidityETHParams,_value:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('addLiquidityETH',addLiquidityETHParams(params), {value:_value});
            return new BigNumber(result);
        }
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call:addLiquidityETH_call
        });
        let removeAllLiquidityParams = (params: IRemoveAllLiquidityParams) => [params.tokenA,params.tokenB,params.to,this.wallet.utils.toString(params.deadline)];
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
        let removeAllLiquidityETHParams = (params: IRemoveAllLiquidityETHParams) => [params.tokenA,params.to,this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,params.removingTokenA,params.to,this.wallet.utils.toString(params.unstake),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.reserveOut),this.wallet.utils.toString(params.lowerLimit),this.wallet.utils.toString(params.upperLimit),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire),this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params: IRemoveLiquidityETHParams) => [params.tokenA,params.removingTokenA,params.to,this.wallet.utils.toString(params.unstake),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.reserveOut),this.wallet.utils.toString(params.lowerLimit),this.wallet.utils.toString(params.upperLimit),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire),this.wallet.utils.toString(params.deadline)];
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
        let updateProviderOfferParams = (params: IUpdateProviderOfferParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.replenishAmount),this.wallet.utils.toString(params.lowerLimit),this.wallet.utils.toString(params.upperLimit),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire),params.privateReplenish,this.wallet.utils.toString(params.deadline)];
        let updateProviderOffer_send = async (params: IUpdateProviderOfferParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateProviderOffer',updateProviderOfferParams(params));
            return result;
        }
        let updateProviderOffer_call = async (params: IUpdateProviderOfferParams): Promise<void> => {
            let result = await this.call('updateProviderOffer',updateProviderOfferParams(params));
            return;
        }
        this.updateProviderOffer = Object.assign(updateProviderOffer_send, {
            call:updateProviderOffer_call
        });
    }
}