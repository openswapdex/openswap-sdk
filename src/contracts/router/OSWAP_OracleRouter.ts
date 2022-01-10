import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/router/OSWAP_OracleRouter.json");

export class OSWAP_OracleRouter extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{ammFactory:string,oracleFactory:string,WETH:string}): Promise<string>{
        return this._deploy(params.ammFactory,params.oracleFactory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async ammFactory(): Promise<string>{
        let result = await this.methods('ammFactory');
        return result;
    }
    async getAmountIn(params:{amountOut:number|BigNumber,tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',Utils.toString(params.amountOut),params.tokenIn,params.tokenOut,params.data);
        return new BigNumber(result);
    }
    async getAmountOut(params:{amountIn:number|BigNumber,tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',Utils.toString(params.amountIn),params.tokenIn,params.tokenOut,params.data);
        return new BigNumber(result);
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[],useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsIn',Utils.toString(params.amountOut),params.path,params.useOracle,params.data);
        return result;
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[],useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOut',Utils.toString(params.amountIn),params.path,params.useOracle,params.data);
        return result;
    }
    async getLatestPrice(params:{tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.tokenIn,params.tokenOut,params.data);
        return new BigNumber(result);
    }
    async oracleFactory(): Promise<string>{
        let result = await this.methods('oracleFactory');
        return result;
    }
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data,_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data,_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data,_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data);
        return result;
    }
}