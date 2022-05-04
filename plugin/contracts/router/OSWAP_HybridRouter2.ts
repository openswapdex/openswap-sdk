import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_HybridRouter2.json";

export class OSWAP_HybridRouter2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{registry:string,WETH:string}): Promise<string>{
        return this._deploy(params.registry,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async getAmountsInEndsWith(params:{amountOut:number|BigNumber,pair:string[],tokenOut:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsInEndsWith',this.utils.toString(params.amountOut),params.pair,params.tokenOut,params.data);
        return result;
    }
    async getAmountsInStartsWith(params:{amountOut:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsInStartsWith',this.utils.toString(params.amountOut),params.pair,params.tokenIn,params.data);
        return result;
    }
    async getAmountsOutEndsWith(params:{amountIn:number|BigNumber,pair:string[],tokenOut:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOutEndsWith',this.utils.toString(params.amountIn),params.pair,params.tokenOut,params.data);
        return result;
    }
    async getAmountsOutStartsWith(params:{amountIn:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOutStartsWith',this.utils.toString(params.amountIn),params.pair,params.tokenIn,params.data);
        return result;
    }
    async getPathIn(params:{pair:string[],tokenIn:string}): Promise<string[]>{
        let result = await this.methods('getPathIn',params.pair,params.tokenIn);
        return result;
    }
    async getPathOut(params:{pair:string[],tokenOut:string}): Promise<string[]>{
        let result = await this.methods('getPathOut',params.pair,params.tokenOut);
        return result;
    }
    async registry(): Promise<string>{
        let result = await this.methods('registry');
        return result;
    }
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',this.utils.toString(params.amountOut),params.pair,params.to,this.utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',this.utils.toString(params.amountOutMin),params.pair,params.to,this.utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountOutMin),params.pair,params.to,this.utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.pair,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.pair,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.pair,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.pair,params.tokenOut,params.to,this.utils.toString(params.deadline),params.data);
        return result;
    }
}