import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_HybridRouter.json";

export class OSWAP_HybridRouter extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{oracleFactory:string,WETH:string}): Promise<string>{
        return this._deploy(params.oracleFactory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[],pair:string[],fee:(number|BigNumber)[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsIn',this.utils.toString(params.amountOut),params.path,params.pair,this.utils.toString(params.fee),params.data);
        return result;
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[],pair:string[],fee:(number|BigNumber)[],data:string}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOut',this.utils.toString(params.amountIn),params.path,params.pair,this.utils.toString(params.fee),params.data);
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
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',this.utils.toString(params.amountOut),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data,_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data,_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[]},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee));
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee));
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data);
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,pair:string[],fee:(number|BigNumber)[],data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.path,params.to,this.utils.toString(params.deadline),params.pair,this.utils.toString(params.fee),params.data);
        return result;
    }
}