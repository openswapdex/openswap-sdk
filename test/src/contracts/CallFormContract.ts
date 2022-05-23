import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./CallFormContract.json";

export class CallFormContract extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{weth:string,factory:string,router:string}): Promise<string>{
        return this.__deploy([params.weth,params.factory,params.router]);
    }
    async callPairToSwap_send(params:{token0:string,token1:string,token0In:number|BigNumber,token1In:number|BigNumber,token0Out:number|BigNumber,token1Out:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('callPairToSwap',[params.token0,params.token1,Utils.toString(params.token0In),Utils.toString(params.token1In),Utils.toString(params.token0Out),Utils.toString(params.token1Out),Utils.stringToBytes(params.data)], {value:_value});
        return result;
    }
    async callPairToSwap_call(params:{token0:string,token1:string,token0In:number|BigNumber,token1In:number|BigNumber,token0Out:number|BigNumber,token1Out:number|BigNumber,data:string},_value:number|BigNumber): Promise<void>{
        let result = await this.call('callPairToSwap',[params.token0,params.token1,Utils.toString(params.token0In),Utils.toString(params.token1In),Utils.toString(params.token0Out),Utils.toString(params.token1Out),Utils.stringToBytes(params.data)], {value:_value});
        return;
    }
    callPairToSwap: {
        (params:{token0:string,token1:string,token0In:number|BigNumber,token1In:number|BigNumber,token0Out:number|BigNumber,token1Out:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,token0In:number|BigNumber,token1In:number|BigNumber,token0Out:number|BigNumber,token1Out:number|BigNumber,data:string},_value:number|BigNumber) => Promise<void>;
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async router(): Promise<string>{
        let result = await this.call('router');
        return result;
    }
    async weth(): Promise<string>{
        let result = await this.call('weth');
        return result;
    }
    private assign(){
        this.callPairToSwap = Object.assign(this.callPairToSwap_send, {call:this.callPairToSwap_call});
    }
}