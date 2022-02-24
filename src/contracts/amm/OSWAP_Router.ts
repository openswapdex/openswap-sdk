import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/amm/OSWAP_Router.json");

export class OSWAP_Router extends Contract{
    constructor(wallet: Wallet, address?: string){
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
        let result = await this.methods('addLiquidity',params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETH',params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),_value);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params:{amountOut:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',Utils.toString(params.amountOut),params.tokenIn,params.tokenOut);
        return new BigNumber(result);
    }
    async getAmountOut(params:{amountIn:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',Utils.toString(params.amountIn),params.tokenIn,params.tokenOut);
        return new BigNumber(result);
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsIn',Utils.toString(params.amountOut),params.path);
        return result;
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.methods('getAmountsOut',Utils.toString(params.amountIn),params.path);
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
        let result = await this.methods('quote',Utils.toString(params.amountA),Utils.toString(params.reserveA),Utils.toString(params.reserveB));
        return new BigNumber(result);
    }
    async removeLiquidity(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETH',params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHSupportingFeeOnTransferTokens',params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETHWithPermit(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHWithPermit',params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s));
        return result;
    }
    async removeLiquidityWithPermit(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityWithPermit',params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s));
        return result;
    }
    async swapETHForExactTokens(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapETHForExactTokens',Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactETHForTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactETHForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),_value);
        return result;
    }
    async swapExactTokensForETH(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETH',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForETHSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapExactTokensForTokensSupportingFeeOnTransferTokens',Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactETH(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactETH',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
    async swapTokensForExactTokens(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('swapTokensForExactTokens',Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline));
        return result;
    }
}