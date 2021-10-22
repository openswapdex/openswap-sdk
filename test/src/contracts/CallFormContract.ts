import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/CallFormContract.json");

export class CallFormContract extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{weth:string,factory:string,router:string}): Promise<string>{        	
        return this._deploy(params.weth,params.factory,params.router);
    }
    async callPairToSwap(params:{token0:string,token1:string,token0In:number|BigNumber,token1In:number|BigNumber,token0Out:number|BigNumber,token1Out:number|BigNumber,data:string},_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('callPairToSwap',params.token0,params.token1,Utils.toString(params.token0In),Utils.toString(params.token1In),Utils.toString(params.token0Out),Utils.toString(params.token1Out),params.data,_value);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async router(): Promise<string>{
        let result = await this.methods('router');
        return result;
    }
    async weth(): Promise<string>{
        let result = await this.methods('weth');
        return result;
    }
}