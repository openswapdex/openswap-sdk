import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RangeLiquidityProvider.json";

export class OSWAP_RangeLiquidityProvider extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{factory:string,WETH:string}): Promise<string>{
        return this.__deploy([params.factory,params.WETH]);
    }
    async WETH(): Promise<string>{
        let result = await this.call('WETH');
        return result;
    }
    async addLiquidity_send(params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,amountIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.tokenA,params.tokenB,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.amountIn),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,amountIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('addLiquidity',[params.tokenA,params.tokenB,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.amountIn),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return new BigNumber(result);
    }
    addLiquidity: {
        (params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,amountIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,addingTokenA:boolean,staked:number|BigNumber,amountIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}) => Promise<BigNumber>;
    }
    async addLiquidityETH_send(params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,amountAIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidityETH',[params.tokenA,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.amountAIn),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async addLiquidityETH_call(params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,amountAIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('addLiquidityETH',[params.tokenA,params.addingTokenA,Utils.toString(params.staked),Utils.toString(params.amountAIn),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)], {value:_value});
        return new BigNumber(result);
    }
    addLiquidityETH: {
        (params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,amountAIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,addingTokenA:boolean,staked:number|BigNumber,amountAIn:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber) => Promise<BigNumber>;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async govToken(): Promise<string>{
        let result = await this.call('govToken');
        return result;
    }
    async removeAllLiquidity_send(params:{tokenA:string,tokenB:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidity',[params.tokenA,params.tokenB,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidity_call(params:{tokenA:string,tokenB:string,to:string,deadline:number|BigNumber}): Promise<{amountA:BigNumber,amountB:BigNumber}>{
        let result = await this.call('removeAllLiquidity',[params.tokenA,params.tokenB,params.to,Utils.toString(params.deadline)]);
        return {
            amountA: new BigNumber(result.amountA),
            amountB: new BigNumber(result.amountB)
        };
    }
    removeAllLiquidity: {
        (params:{tokenA:string,tokenB:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,to:string,deadline:number|BigNumber}) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    async removeAllLiquidityETH_send(params:{tokenA:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidityETH',[params.tokenA,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidityETH_call(params:{tokenA:string,to:string,deadline:number|BigNumber}): Promise<{amountToken:BigNumber,amountETH:BigNumber}>{
        let result = await this.call('removeAllLiquidityETH',[params.tokenA,params.to,Utils.toString(params.deadline)]);
        return {
            amountToken: new BigNumber(result.amountToken),
            amountETH: new BigNumber(result.amountETH)
        };
    }
    removeAllLiquidityETH: {
        (params:{tokenA:string,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,to:string,deadline:number|BigNumber}) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    async removeLiquidity_send(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidity',[params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return;
    }
    removeLiquidity: {
        (params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}) => Promise<void>;
    }
    async removeLiquidityETH_send(params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETH',[params.tokenA,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidityETH',[params.tokenA,params.removingTokenA,params.to,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return;
    }
    removeLiquidityETH: {
        (params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,removingTokenA:boolean,to:string,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}) => Promise<void>;
    }
    async updateProviderOffer_send(params:{tokenA:string,tokenB:string,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('updateProviderOffer',[params.tokenA,params.tokenB,Utils.toString(params.replenishAmount),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),params.privateReplenish,Utils.toString(params.deadline)]);
        return result;
    }
    async updateProviderOffer_call(params:{tokenA:string,tokenB:string,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('updateProviderOffer',[params.tokenA,params.tokenB,Utils.toString(params.replenishAmount),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),params.privateReplenish,Utils.toString(params.deadline)]);
        return;
    }
    updateProviderOffer: {
        (params:{tokenA:string,tokenB:string,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean,deadline:number|BigNumber}) => Promise<void>;
    }
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, {call:this.addLiquidityETH_call});
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, {call:this.removeAllLiquidity_call});
        this.removeAllLiquidityETH = Object.assign(this.removeAllLiquidityETH_send, {call:this.removeAllLiquidityETH_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, {call:this.removeLiquidityETH_call});
        this.updateProviderOffer = Object.assign(this.updateProviderOffer_send, {call:this.updateProviderOffer_call});
    }
}