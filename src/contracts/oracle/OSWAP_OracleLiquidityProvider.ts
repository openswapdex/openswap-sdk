import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_OracleLiquidityProvider.json");

export class OSWAP_OracleLiquidityProvider extends Contract{
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
    async addLiquidity(params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber,enable:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.tokenA,params.tokenB,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.afterIndex),Utils.toString(params.amountIn),Utils.toString(params.expire),params.enable,Utils.toString(params.deadline));
        return result;
    }
    async addLiquidityETH(params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,amountAIn:number|BigNumber,expire:number|BigNumber,enable:boolean,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidityETH',params.tokenA,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.afterIndex),Utils.toString(params.amountAIn),Utils.toString(params.expire),params.enable,Utils.toString(params.deadline),_value);
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
        let result = await this.methods('removeAllLiquidity',params.tokenA,params.tokenB,params.to,Utils.toString(params.deadline));
        return result;
    }
    async removeAllLiquidityETH(params:{tokenA:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidityETH',params.tokenA,params.to,Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidity(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.afterIndex),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.expire),params.enable,Utils.toString(params.deadline));
        return result;
    }
    async removeLiquidityETH(params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidityETH',params.tokenA,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.afterIndex),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.expire),params.enable,Utils.toString(params.deadline));
        return result;
    }
}