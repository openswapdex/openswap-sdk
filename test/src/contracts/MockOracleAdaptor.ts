import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./MockOracleAdaptor.json";

export class MockOracleAdaptor extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{weth:string,decimals:number|BigNumber,tokens:string[],prices:(number|BigNumber)[]}): Promise<string>{
        return this._deploy(params.weth,Utils.toString(params.decimals),params.tokens,Utils.toString(params.prices));
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,param3:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.from,params.to,params.param3]);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.param5]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.from,params.to]);
        return result;
    }
    async setPrice_send(params:{token0:string,token1:string,price0:number|BigNumber,price1:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setPrice',[params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1)]);
        return result;
    }
    async setPrice_call(params:{token0:string,token1:string,price0:number|BigNumber,price1:number|BigNumber}): Promise<void>{
        let result = await this.call('setPrice',[params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1)]);
        return;
    }
    setPrice: {
        (params:{token0:string,token1:string,price0:number|BigNumber,price1:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,price0:number|BigNumber,price1:number|BigNumber}) => Promise<void>;
    }
    async weth(): Promise<string>{
        let result = await this.call('weth');
        return result;
    }
    private assign(){
        this.setPrice = Object.assign(this.setPrice_send, {call:this.setPrice_call});
    }
}