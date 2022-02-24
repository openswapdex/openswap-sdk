import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/router/OSWAP_HybridRouter2.json");

export class OSWAP_HybridRouter2 extends Contract{
    constructor(wallet: Wallet, address?: string){
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
        let result = await this.methods('getAmountsInEndsWith',Utils.toString(params.amountOut),params.pair,params.tokenOut,params.data);
        return result;
    }
    async getAmountsInStartsWith(params:{amountOut:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsInStartsWith',Utils.toString(params.amountOut),params.pair,params.tokenIn,params.data);
        return result;
    }
    async getAmountsOutEndsWith(params:{amountIn:number|BigNumber,pair:string[],tokenOut:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOutEndsWith',Utils.toString(params.amountIn),params.pair,params.tokenOut,params.data);
        return result;
    }
    async getAmountsOutStartsWith(params:{amountIn:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOutStartsWith',Utils.toString(params.amountIn),params.pair,params.tokenIn,params.data);
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
        let result = await this.methods('swapETHForExactTokens',Utils.toString(params.amountOut),params.pair,params.to,Utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data,_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.tokenOut,params.to,Utils.toString(params.deadline),params.data);
        return result;
    }
}