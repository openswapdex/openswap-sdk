import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangeLiquidityProvider.json";

export class OSWAP_RangeLiquidityProvider extends Contract{
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
    async addLiquidity(params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,amountIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.tokenA,params.tokenB,params.addingTokenA,this.utils.toString(params.staked),this.utils.toString(params.amountIn),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,amountAIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETH',params.tokenA,params.addingTokenA,this.utils.toString(params.staked),this.utils.toString(params.amountAIn),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline),_value);
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
    async removeAllLiquidity(params:{tokenA:string,tokenB:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',params.tokenA,params.tokenB,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async removeAllLiquidityETH(params:{tokenA:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidityETH',params.tokenA,params.to,this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidity(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.tokenA,params.tokenB,params.removingTokenA,params.to,this.utils.toString(params.unstake),this.utils.toString(params.amountOut),this.utils.toString(params.reserveOut),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETH',params.tokenA,params.removingTokenA,params.to,this.utils.toString(params.unstake),this.utils.toString(params.amountOut),this.utils.toString(params.reserveOut),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),this.utils.toString(params.deadline));
        return result;
    }
    async updateProviderOffer(params:{tokenA:string,tokenB:string,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('updateProviderOffer',params.tokenA,params.tokenB,this.utils.toString(params.replenishAmount),this.utils.toString(params.lowerLimit),this.utils.toString(params.upperLimit),this.utils.toString(params.startDate),this.utils.toString(params.expire),params.privateReplenish,this.utils.toString(params.deadline));
        return result;
    }
}