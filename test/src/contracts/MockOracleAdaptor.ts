import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockOracleAdaptor.json");

export class MockOracleAdaptor extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{weth:string,decimals:number|BigNumber,tokens:string[],prices:number[]|BigNumber[]}): Promise<string>{        	
        return this._deploy(params.weth,Utils.toString(params.decimals),params.tokens,Utils.toString(params.prices));
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,param3:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.param3);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,param5:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.param5);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        }
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.from,params.to);
        return result;
    }
    async setPrice(params:{token0:string,token1:string,price0:number|BigNumber,price1:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setPrice',params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1));
        return result;
    }
    async weth(): Promise<string>{
        let result = await this.methods('weth');
        return result;
    }
}