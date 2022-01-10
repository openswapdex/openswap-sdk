import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/router/OSWAP_HybridRouter.json");

export class OSWAP_HybridRouter extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{oracleFactory:string,WETH:string}): Promise<string>{
        return this._deploy(params.oracleFactory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[],pair:string[],fee:number[]|BigNumber[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsIn',Utils.toString(params.amountOut),params.path,params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[],pair:string[],fee:number[]|BigNumber[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOut',Utils.toString(params.amountIn),params.path,params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
    async oracleFactory(): Promise<string>{
        let result = await this.methods('oracleFactory');
        return result;
    }
    async pairFor(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.methods('pairFor',params.tokenA,params.tokenB);
        return result;
    }
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data,_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data,_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[]},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee));
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee));
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:number[]|BigNumber[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.pair,Utils.toString(params.fee),params.data);
        return result;
    }
}