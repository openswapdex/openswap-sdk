import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./MockOracleAdaptor3.json";

export class MockOracleAdaptor3 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{weth:string,decimals:number|BigNumber,tokens:string[],prices:(number|BigNumber)[]}): Promise<string>{
        return this.__deploy([params.weth,Utils.toString(params.decimals),params.tokens,Utils.toString(params.prices)]);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,param3:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.from,params.to,Utils.stringToBytes(params.param3)]);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),Utils.stringToBytes(params.param5)]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.from,params.to]);
        return result;
    }
    async setPrice_send(params:{token:string,price:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setPrice',[params.token,Utils.toString(params.price)]);
        return result;
    }
    async setPrice_call(params:{token:string,price:number|BigNumber}): Promise<void>{
        let result = await this.call('setPrice',[params.token,Utils.toString(params.price)]);
        return;
    }
    setPrice: {
        (params:{token:string,price:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{token:string,price:number|BigNumber}) => Promise<void>;
    }
    async weth(): Promise<string>{
        let result = await this.call('weth');
        return result;
    }
    private assign(){
        this.setPrice = Object.assign(this.setPrice_send, {call:this.setPrice_call});
    }
}