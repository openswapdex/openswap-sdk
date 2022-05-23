import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_Router.json";

export class OSWAP_Router extends Contract{
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
    async addLiquidity_send(params:{tokenA:string,tokenB:string,amountADesired:number|BigNumber,amountBDesired:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidity',[params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async addLiquidity_call(params:{tokenA:string,tokenB:string,amountADesired:number|BigNumber,amountBDesired:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>{
        let result = await this.call('addLiquidity',[params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)]);
        return {
            amountA: new BigNumber(result.amountA),
            amountB: new BigNumber(result.amountB),
            liquidity: new BigNumber(result.liquidity)
        };
    }
    addLiquidity: {
        (params:{tokenA:string,tokenB:string,amountADesired:number|BigNumber,amountBDesired:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,amountADesired:number|BigNumber,amountBDesired:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    async addLiquidityETH_send(params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('addLiquidityETH',[params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async addLiquidityETH_call(params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}>{
        let result = await this.call('addLiquidityETH',[params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)], {value:_value});
        return {
            amountToken: new BigNumber(result.amountToken),
            amountETH: new BigNumber(result.amountETH),
            liquidity: new BigNumber(result.liquidity)
        };
    }
    addLiquidityETH: {
        (params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{token:string,amountTokenDesired:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber},_value:number|BigNumber) => Promise<{amountToken:BigNumber,amountETH:BigNumber,liquidity:BigNumber}>;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params:{amountOut:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.call('getAmountIn',[Utils.toString(params.amountOut),params.tokenIn,params.tokenOut]);
        return new BigNumber(result);
    }
    async getAmountOut(params:{amountIn:number|BigNumber,tokenIn:string,tokenOut:string}): Promise<BigNumber>{
        let result = await this.call('getAmountOut',[Utils.toString(params.amountIn),params.tokenIn,params.tokenOut]);
        return new BigNumber(result);
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsIn',[Utils.toString(params.amountOut),params.path]);
        return result.map(e=>new BigNumber(e));
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[]}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsOut',[Utils.toString(params.amountIn),params.path]);
        return result.map(e=>new BigNumber(e));
    }
    async getReserves(params:{tokenA:string,tokenB:string}): Promise<{reserveA:BigNumber,reserveB:BigNumber}>{
        let result = await this.call('getReserves',[params.tokenA,params.tokenB]);
        return {
            reserveA: new BigNumber(result.reserveA),
            reserveB: new BigNumber(result.reserveB)
        };
    }
    async quote(params:{amountA:number|BigNumber,reserveA:number|BigNumber,reserveB:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('quote',[Utils.toString(params.amountA),Utils.toString(params.reserveA),Utils.toString(params.reserveB)]);
        return new BigNumber(result);
    }
    async removeLiquidity_send(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidity',[params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidity_call(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<{amountA:BigNumber,amountB:BigNumber}>{
        let result = await this.call('removeLiquidity',[params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)]);
        return {
            amountA: new BigNumber(result.amountA),
            amountB: new BigNumber(result.amountB)
        };
    }
    removeLiquidity: {
        (params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber}) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    async removeLiquidityETH_send(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETH',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETH_call(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<{amountToken:BigNumber,amountETH:BigNumber}>{
        let result = await this.call('removeLiquidityETH',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)]);
        return {
            amountToken: new BigNumber(result.amountToken),
            amountETH: new BigNumber(result.amountETH)
        };
    }
    removeLiquidityETH: {
        (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens_send(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async removeLiquidityETHSupportingFeeOnTransferTokens_call(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline)]);
        return new BigNumber(result);
    }
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber}) => Promise<BigNumber>;
    }
    async removeLiquidityETHWithPermit_send(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETHWithPermit',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityETHWithPermit_call(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<{amountToken:BigNumber,amountETH:BigNumber}>{
        let result = await this.call('removeLiquidityETHWithPermit',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return {
            amountToken: new BigNumber(result.amountToken),
            amountETH: new BigNumber(result.amountETH)
        };
    }
    removeLiquidityETHWithPermit: {
        (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>;
        call: (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}) => Promise<{amountToken:BigNumber,amountETH:BigNumber}>;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call(params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<BigNumber>{
        let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',[params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountETHMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return new BigNumber(result);
    }
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>;
        call: (params:{token:string,liquidity:number|BigNumber,amountTokenMin:number|BigNumber,amountETHMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}) => Promise<BigNumber>;
    }
    async removeLiquidityWithPermit_send(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.send('removeLiquidityWithPermit',[params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return result;
    }
    async removeLiquidityWithPermit_call(params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<{amountA:BigNumber,amountB:BigNumber}>{
        let result = await this.call('removeLiquidityWithPermit',[params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return {
            amountA: new BigNumber(result.amountA),
            amountB: new BigNumber(result.amountB)
        };
    }
    removeLiquidityWithPermit: {
        (params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,liquidity:number|BigNumber,amountAMin:number|BigNumber,amountBMin:number|BigNumber,to:string,deadline:number|BigNumber,approveMax:boolean,v:number|BigNumber,r:string,s:string}) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    async swapETHForExactTokens_send(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapETHForExactTokens',[Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async swapETHForExactTokens_call(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<BigNumber[]>{
        let result = await this.call('swapETHForExactTokens',[Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return result.map(e=>new BigNumber(e));
    }
    swapETHForExactTokens: {
        (params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    async swapExactETHForTokens_send(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async swapExactETHForTokens_call(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<BigNumber[]>{
        let result = await this.call('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return result.map(e=>new BigNumber(e));
    }
    swapExactETHForTokens: {
        (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<void>{
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)], {value:_value});
        return;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber},_value:number|BigNumber) => Promise<void>;
    }
    async swapExactTokensForETH_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForETH_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<BigNumber[]>{
        let result = await this.call('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result.map(e=>new BigNumber(e));
    }
    swapExactTokensForETH: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<BigNumber[]>;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<void>;
    }
    async swapExactTokensForTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<BigNumber[]>{
        let result = await this.call('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result.map(e=>new BigNumber(e));
    }
    swapExactTokensForTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<BigNumber[]>;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<void>{
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)]);
        return;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<void>;
    }
    async swapTokensForExactETH_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapTokensForExactETH_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<BigNumber[]>{
        let result = await this.call('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)]);
        return result.map(e=>new BigNumber(e));
    }
    swapTokensForExactETH: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<BigNumber[]>;
    }
    async swapTokensForExactTokens_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)]);
        return result;
    }
    async swapTokensForExactTokens_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<BigNumber[]>{
        let result = await this.call('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)]);
        return result.map(e=>new BigNumber(e));
    }
    swapTokensForExactTokens: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber}) => Promise<BigNumber[]>;
    }
    private assign(){
        this.addLiquidity = Object.assign(this.addLiquidity_send, {call:this.addLiquidity_call});
        this.addLiquidityETH = Object.assign(this.addLiquidityETH_send, {call:this.addLiquidityETH_call});
        this.removeLiquidity = Object.assign(this.removeLiquidity_send, {call:this.removeLiquidity_call});
        this.removeLiquidityETH = Object.assign(this.removeLiquidityETH_send, {call:this.removeLiquidityETH_call});
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(this.removeLiquidityETHSupportingFeeOnTransferTokens_send, {call:this.removeLiquidityETHSupportingFeeOnTransferTokens_call});
        this.removeLiquidityETHWithPermit = Object.assign(this.removeLiquidityETHWithPermit_send, {call:this.removeLiquidityETHWithPermit_call});
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {call:this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call});
        this.removeLiquidityWithPermit = Object.assign(this.removeLiquidityWithPermit_send, {call:this.removeLiquidityWithPermit_call});
        this.swapETHForExactTokens = Object.assign(this.swapETHForExactTokens_send, {call:this.swapETHForExactTokens_call});
        this.swapExactETHForTokens = Object.assign(this.swapExactETHForTokens_send, {call:this.swapExactETHForTokens_call});
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(this.swapExactETHForTokensSupportingFeeOnTransferTokens_send, {call:this.swapExactETHForTokensSupportingFeeOnTransferTokens_call});
        this.swapExactTokensForETH = Object.assign(this.swapExactTokensForETH_send, {call:this.swapExactTokensForETH_call});
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(this.swapExactTokensForETHSupportingFeeOnTransferTokens_send, {call:this.swapExactTokensForETHSupportingFeeOnTransferTokens_call});
        this.swapExactTokensForTokens = Object.assign(this.swapExactTokensForTokens_send, {call:this.swapExactTokensForTokens_call});
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(this.swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {call:this.swapExactTokensForTokensSupportingFeeOnTransferTokens_call});
        this.swapTokensForExactETH = Object.assign(this.swapTokensForExactETH_send, {call:this.swapTokensForExactETH_call});
        this.swapTokensForExactTokens = Object.assign(this.swapTokensForExactTokens_send, {call:this.swapTokensForExactTokens_call});
    }
}