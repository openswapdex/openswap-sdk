import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_Router.json";

export class OSWAP_Router extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{factory:string,WETH:string}): Promise<string>{
        return this._deploy(params.factory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.methods('WETH');
        return result;
    }
    async addLiquidity(params:{tokenA:string,tokenB:string,amountADesired:number|BigNumber,amountBDesired:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.tokenA,params.tokenB,this.utils.toString(params.amountADesired),this.utils.toString(params.amountBDesired),this.utils.toString(params.amountAMin),this.utils.toString(params.amountBMin),params.to,this.utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETH',params.token,this.utils.toString(params.amountTokenDesired),this.utils.toString(params.amountTokenMin),this.utils.toString(params.amountETHMin),params.to,this.utils.toString(params.deadline),_value);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params:{amountOut:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',this.utils.toString(params.amountOut),params.tokenIn,params.tokenOut);
        return new BigNumber(result);
    }
    async getAmountOut(params:{amountIn:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',this.utils.toString(params.amountIn),params.tokenIn,params.tokenOut);
        return new BigNumber(result);
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsIn',this.utils.toString(params.amountOut),params.path);
        return result;
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOut',this.utils.toString(params.amountIn),params.path);
        return result;
    }
    async getReserves(params:{tokenA:string,tokenB:string}): Promise<{reserveA:BigNumber,reserveB:BigNumber}>{
        let result = await this.methods('getReserves',params.tokenA,params.tokenB);
        return {
            reserveA: new BigNumber(result.reserveA),
            reserveB: new BigNumber(result.reserveB)
        };
    }
    async quote(params:{amountA:number|BigNumber,reserveA:number|BigNumber,reserveB:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('quote',this.utils.toString(params.amountA),this.utils.toString(params.reserveA),this.utils.toString(params.reserveB));
        return new BigNumber(result);
    }
    async removeLiquidity(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.tokenA,params.tokenB,this.utils.toString(params.liquidity),this.utils.toString(params.amountAMin),this.utils.toString(params.amountBMin),params.to,this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETH',params.token,this.utils.toString(params.liquidity),this.utils.toString(params.amountTokenMin),this.utils.toString(params.amountETHMin),params.to,this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHSupportingFeeOnTransferTokens',params.token,this.utils.toString(params.liquidity),this.utils.toString(params.amountTokenMin),this.utils.toString(params.amountETHMin),params.to,this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHWithPermit(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHWithPermit',params.token,this.utils.toString(params.liquidity),this.utils.toString(params.amountTokenMin),this.utils.toString(params.amountETHMin),params.to,this.utils.toString(params.deadline),params.approveMax,this.utils.toString(params.v),this.utils.stringToBytes32(params.r),this.utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',params.token,this.utils.toString(params.liquidity),this.utils.toString(params.amountTokenMin),this.utils.toString(params.amountETHMin),params.to,this.utils.toString(params.deadline),params.approveMax,this.utils.toString(params.v),this.utils.stringToBytes32(params.r),this.utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityWithPermit(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityWithPermit',params.tokenA,params.tokenB,this.utils.toString(params.liquidity),this.utils.toString(params.amountAMin),this.utils.toString(params.amountBMin),params.to,this.utils.toString(params.deadline),params.approveMax,this.utils.toString(params.v),this.utils.stringToBytes32(params.r),this.utils.stringToBytes32(params.s));
        return result;
    }
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',this.utils.toString(params.amountOut),params.path,params.to,this.utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',this.utils.toString(params.amountIn),this.utils.toString(params.amountOutMin),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',this.utils.toString(params.amountOut),this.utils.toString(params.amountInMax),params.path,params.to,this.utils.toString(params.deadline));
        return result;
    }
}