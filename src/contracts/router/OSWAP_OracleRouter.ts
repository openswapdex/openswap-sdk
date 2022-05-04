import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleRouter.json";

export class OSWAP_OracleRouter extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{ammFactory:string,oracleFactory:string,WETH:string}): Promise<string>{
        return this._deploy(params.ammFactory,params.oracleFactory,params.WETH);
    }
    async WETH(): Promise<string>{
        let result = await this.call('WETH');
        return result;
    }
    async ammFactory(): Promise<string>{
        let result = await this.call('ammFactory');
        return result;
    }
    async getAmountIn(params:{amountOut:number|BigNumber,tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.call('getAmountIn',[Utils.toString(params.amountOut),params.tokenIn,params.tokenOut,params.data]);
        return new BigNumber(result);
    }
    async getAmountOut(params:{amountIn:number|BigNumber,tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.call('getAmountOut',[Utils.toString(params.amountIn),params.tokenIn,params.tokenOut,params.data]);
        return new BigNumber(result);
    }
    async getAmountsIn(params:{amountOut:number|BigNumber,path:string[],useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsIn',[Utils.toString(params.amountOut),params.path,params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getAmountsOut(params:{amountIn:number|BigNumber,path:string[],useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('getAmountsOut',[Utils.toString(params.amountIn),params.path,params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    async getLatestPrice(params:{tokenIn:string,tokenOut:string,data:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.tokenIn,params.tokenOut,params.data]);
        return new BigNumber(result);
    }
    async oracleFactory(): Promise<string>{
        let result = await this.call('oracleFactory');
        return result;
    }
    async swapETHForExactTokens_send(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapETHForExactTokens',[Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return result;
    }
    async swapETHForExactTokens_call(params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<BigNumber[]>{
        let result = await this.call('swapETHForExactTokens',[Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return result.map(e=>new BigNumber(e));
    }
    swapETHForExactTokens: {
        (params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    async swapExactETHForTokens_send(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return result;
    }
    async swapExactETHForTokens_call(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<BigNumber[]>{
        let result = await this.call('swapExactETHForTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return result.map(e=>new BigNumber(e));
    }
    swapExactETHForTokens: {
        (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_send(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return result;
    }
    async swapExactETHForTokensSupportingFeeOnTransferTokens_call(params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<void>{
        let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data], {value:_value});
        return;
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string},_value:number|BigNumber) => Promise<void>;
    }
    async swapExactTokensForETH_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapExactTokensForETH_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('swapExactTokensForETH',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    swapExactTokensForETH: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<BigNumber[]>;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapExactTokensForETHSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<void>{
        let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return;
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<void>;
    }
    async swapExactTokensForTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapExactTokensForTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('swapExactTokensForTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    swapExactTokensForTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<BigNumber[]>;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<void>{
        let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',[Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountIn:number|BigNumber,amountOutMin:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<void>;
    }
    async swapTokensForExactETH_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapTokensForExactETH_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('swapTokensForExactETH',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    swapTokensForExactETH: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<BigNumber[]>;
    }
    async swapTokensForExactTokens_send(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result;
    }
    async swapTokensForExactTokens_call(params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<BigNumber[]>{
        let result = await this.call('swapTokensForExactTokens',[Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline),params.useOracle,params.data]);
        return result.map(e=>new BigNumber(e));
    }
    swapTokensForExactTokens: {
        (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}): Promise<TransactionReceipt>;
        call: (params:{amountOut:number|BigNumber,amountInMax:number|BigNumber,path:string[],to:string,deadline:number|BigNumber,useOracle:boolean[],data:string}) => Promise<BigNumber[]>;
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