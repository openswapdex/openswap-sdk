import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedLiquidityProvider.json";

export class OSWAP_RestrictedLiquidityProvider extends Contract{
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
    async addLiquidity(params:{tokenA:string,tokenB:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.tokenA,params.tokenB,params.addingTokenA,this.utils.toString(params.pairIndex),this.utils.toString(params.offerIndex),this.utils.toString(params.amountIn),params.allowAll,this.utils.toString(params.restrictedPrice),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline));
        return result;
    }
    async addLiquidityAndTrader(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityAndTrader',this.utils.toString(params.param),params.trader,this.utils.toString(params.allocation));
        return result;
    }
    async addLiquidityETH(params:{tokenA:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountAIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETH',params.tokenA,params.addingTokenA,this.utils.toString(params.pairIndex),this.utils.toString(params.offerIndex),this.utils.toString(params.amountAIn),params.allowAll,this.utils.toString(params.restrictedPrice),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline),_value);
        return result;
    }
    async addLiquidityETHAndTrader(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETHAndTrader',this.utils.toString(params.param),params.trader,this.utils.toString(params.allocation),_value);
        return result;
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async govToken(): Promise<string>{
        let result = await this.methods('govToken');
        return result;
    }
    async removeAllLiquidity(params:{tokenA:string,tokenB:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',params.tokenA,params.tokenB,params.to,this.utils.toString(params.pairIndex),this.utils.toString(params.deadline));
        return result;
    }
    async removeAllLiquidityETH(params:{tokenA:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidityETH',params.tokenA,params.to,this.utils.toString(params.pairIndex),this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidity(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.tokenA,params.tokenB,params.removingTokenA,params.to,this.utils.toString(params.pairIndex),this.utils.toString(params.offerIndex),this.utils.toString(params.amountOut),this.utils.toString(params.receivingOut),this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params:{tokenA:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETH',params.tokenA,params.removingTokenA,params.to,this.utils.toString(params.pairIndex),this.utils.toString(params.offerIndex),this.utils.toString(params.amountOut),this.utils.toString(params.receivingOut),this.utils.toString(params.deadline));
        return result;
    }
}