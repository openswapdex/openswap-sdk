import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RestrictedLiquidityProvider.json";

export class OSWAP_RestrictedLiquidityProvider extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{factory:string,WETH:string}): Promise<string>{
        return this._deploy(params.factory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.call('WETH');
        return result;
    }
    async addLiquidity_send(params:{tokenA:string,tokenB:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.tokenA,params.tokenB,params.addingTokenA,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountIn),params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params:{tokenA:string,tokenB:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<{pair:string,_offerIndex:BigNumber}>{
        let result = await this.call('addLiquidity',[params.tokenA,params.tokenB,params.addingTokenA,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountIn),params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)]);
        return {
            pair: result.pair,
            _offerIndex: new BigNumber(result._offerIndex)
        };
    }
    addLiquidity: {
        (params:{tokenA:string,tokenB:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber}) => Promise<{pair:string,_offerIndex:BigNumber}>;
    }
    async addLiquidityAndTrader_send(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidityAndTrader',[Utils.toString(params.param),params.trader,Utils.toString(params.allocation)]);
        return result;
    }
    async addLiquidityAndTrader_call(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]}): Promise<{pair:string,offerIndex:BigNumber}>{
        let result = await this.call('addLiquidityAndTrader',[Utils.toString(params.param),params.trader,Utils.toString(params.allocation)]);
        return {
            pair: result.pair,
            offerIndex: new BigNumber(result.offerIndex)
        };
    }
    addLiquidityAndTrader: {
        (params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]}) => Promise<{pair:string,offerIndex:BigNumber}>;
    }
    async addLiquidityETH_send(params:{tokenA:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountAIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidityETH',[params.tokenA,params.addingTokenA,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountAIn),params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async addLiquidityETH_call(params:{tokenA:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountAIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<{pair:string,_offerIndex:BigNumber}>{
        let result = await this.call('addLiquidityETH',[params.tokenA,params.addingTokenA,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountAIn),params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire),Utils.toString(params.deadline)], {value:_value});
        return {
            pair: result.pair,
            _offerIndex: new BigNumber(result._offerIndex)
        };
    }
    addLiquidityETH: {
        (params:{tokenA:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountAIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,addingTokenA:boolean,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountAIn:number|BigNumber,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,deadline:number|BigNumber},_value:number|BigNumber) => Promise<{pair:string,_offerIndex:BigNumber}>;
    }
    async addLiquidityETHAndTrader_send(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidityETHAndTrader',[Utils.toString(params.param),params.trader,Utils.toString(params.allocation)], {value:_value});
        return result;
    }
    async addLiquidityETHAndTrader_call(params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]},_value:number|BigNumber): Promise<{pair:string,offerIndex:BigNumber}>{
        let result = await this.call('addLiquidityETHAndTrader',[Utils.toString(params.param),params.trader,Utils.toString(params.allocation)], {value:_value});
        return {
            pair: result.pair,
            offerIndex: new BigNumber(result.offerIndex)
        };
    }
    addLiquidityETHAndTrader: {
        (params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{param:(number|BigNumber)[],trader:string[],allocation:(number|BigNumber)[]},_value:number|BigNumber) => Promise<{pair:string,offerIndex:BigNumber}>;
    }
    async configStore(): Promise<string>{
        let result = await this.call('configStore');
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async govToken(): Promise<string>{
        let result = await this.call('govToken');
        return result;
    }
    async removeAllLiquidity_send(params:{tokenA:string,tokenB:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidity',[params.tokenA,params.tokenB,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidity_call(params:{tokenA:string,tokenB:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<{amountA:BigNumber,amountB:BigNumber}>{
        let result = await this.call('removeAllLiquidity',[params.tokenA,params.tokenB,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)]);
        return {
            amountA: new BigNumber(result.amountA),
            amountB: new BigNumber(result.amountB)
        };
    }
    removeAllLiquidity: {
        (params:{tokenA:string,tokenB:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    async removeAllLiquidityETH_send(params:{tokenA:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeAllLiquidityETH',[params.tokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)]);
        return result;
    }
    async removeAllLiquidityETH_call(params:{tokenA:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<{amountToken:BigNumber,amountETH:BigNumber}>{
        let result = await this.call('removeAllLiquidityETH',[params.tokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.deadline)]);
        return {
            amountToken: new BigNumber(result.amountToken),
            amountETH: new BigNumber(result.amountETH)
        };
    }
    removeAllLiquidityETH: {
        (params:{tokenA:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,to:string,pairIndex:number|BigNumber,deadline:number|BigNumber}) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    async removeLiquidity_send(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidity',[params.tokenA,params.tokenB,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)]);
        return;
    }
    removeLiquidity: {
        (params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}) => Promise<void>;
    }
    async removeLiquidityETH_send(params:{tokenA:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETH',[params.tokenA,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params:{tokenA:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('removeLiquidityETH',[params.tokenA,params.removingTokenA,params.to,Utils.toString(params.pairIndex),Utils.toString(params.offerIndex),Utils.toString(params.amountOut),Utils.toString(params.receivingOut),Utils.toString(params.deadline)]);
        return;
    }
    removeLiquidityETH: {
        (params:{tokenA:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,removingTokenA:boolean,to:string,pairIndex:number|BigNumber,offerIndex:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber,deadline:number|BigNumber}) => Promise<void>;
    }
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.addLiquidityAndTrader = Object.assign(this.addLiquidityAndTrader_send, {call:this.addLiquidityAndTrader_call});
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, {call:this.addLiquidityETH_call});
        this.addLiquidityETHAndTrader = Object.assign(this.addLiquidityETHAndTrader_send, {call:this.addLiquidityETHAndTrader_call});
        this.removeAllLiquidity = Object.assign(this.removeAllLiquidity_send, {call:this.removeAllLiquidity_call});
        this.removeAllLiquidityETH = Object.assign(this.removeAllLiquidityETH_send, {call:this.removeAllLiquidityETH_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, {call:this.removeLiquidityETH_call});
    }
}