import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_HybridRouter2.json";

export class OSWAP_HybridRouter2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{registry:string,WETH:string}): Promise<string>{
        return this._deploy(params.registry,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.call('WETH');
        return result;
    }
    async getAmountsInEndsWith(params:{amountOut:number|BigNumber,pair:string[],tokenOut:string,data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsInEndsWith',[Utils.toString(params.amountOut),params.pair,params.tokenOut,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getAmountsInStartsWith(params:{amountOut:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsInStartsWith',[Utils.toString(params.amountOut),params.pair,params.tokenIn,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getAmountsOutEndsWith(params:{amountIn:number|BigNumber,pair:string[],tokenOut:string,data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsOutEndsWith',[Utils.toString(params.amountIn),params.pair,params.tokenOut,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getAmountsOutStartsWith(params:{amountIn:number|BigNumber,pair:string[],tokenIn:string,data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsOutStartsWith',[Utils.toString(params.amountIn),params.pair,params.tokenIn,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getPathIn(params:{pair:string[],tokenIn:string}): Promise<string[]>{
        let result = await this.call('getPathIn',[params.pair,params.tokenIn]);
        return result;
    }
    async getPathOut(params:{pair:string[],tokenOut:string}): Promise<string[]>{
        let result = await this.call('getPathOut',[params.pair,params.tokenOut]);
        return result;
    }
    async registry(): Promise<string>{
        let result = await this.call('registry');
        return result;
    }
    async swapETHForExactTokens_send(params:{amountOut:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapETHForExactTokens',[Utils.toString(params.amountOut),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return result;
    }
    async swapETHForExactTokens_call(params:{amountOut:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapETHForExactTokens',[Utils.toString(params.amountOut),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapETHForExactTokens: {
        (params:{amountOut:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    async swapExactETHForTokens_send(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return result;
    }
    async swapExactETHForTokens_call(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapExactETHForTokens: {
        (params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<void>{
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data], {value:_value});
        return;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string},_value:number|BigNumber) => Promise<void>;
    }
    async swapExactTokensForETH_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapExactTokensForETH_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapExactTokensForETH: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<void>{
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}) => Promise<void>;
    }
    async swapExactTokensForTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapExactTokensForTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapExactTokensForTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<void>{
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.pair,params.tokenIn,params.to,Utils.toString(params.deadline),params.data]);
        return;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,pair:string[],tokenIn:string,to:string,deadline:number|BigNumber,data:string}) => Promise<void>;
    }
    async swapTokensForExactETH_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapTokensForExactETH_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.to,Utils.toString(params.deadline),params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapTokensForExactETH: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],to:string,deadline:number|BigNumber,data:string}) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    async swapTokensForExactTokens_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.tokenOut,params.to,Utils.toString(params.deadline),params.data]);
        return result;
    }
    async swapTokensForExactTokens_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}): Promise<{path:string[],amounts:BigNumber[]}>{
        let result = await this.call('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.pair,params.tokenOut,params.to,Utils.toString(params.deadline),params.data]);
        return {
            path: result.path,
            amounts: result.amounts.map(e=>new BigNumber(e))
        };
    }
    swapTokensForExactTokens: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,pair:string[],tokenOut:string,to:string,deadline:number|BigNumber,data:string}) => Promise<{path:string[],amounts:BigNumber[]}>;
    }
    private assign(){
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