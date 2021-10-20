import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/range/OSWAP_RangeFactory.json");

export class OSWAP_RangeFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,oracleFactory:string,pairCreator:string,tradeFee:number|BigNumber,stakeAmount:number[]|BigNumber[],liquidityProviderShare:number[]|BigNumber[],protocolFeeTo:string}): Promise<string>{        	
        return this._deploy(params.governance,params.oracleFactory,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare),params.protocolFeeTo);
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',param1);
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.methods('allPairsLength');
        return new BigNumber(result);
    }
    async checkAndGetSwapParams(): Promise<BigNumber>{
        let result = await this.methods('checkAndGetSwapParams');
        return new BigNumber(result);
    }
    async createPair(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async getAllLiquidityProviderShare(): Promise<{_stakeAmount:BigNumber,_liquidityProviderShare:BigNumber}>{
        let result = await this.methods('getAllLiquidityProviderShare');
        return {
            _stakeAmount: new BigNumber(result._stakeAmount),
            _liquidityProviderShare: new BigNumber(result._liquidityProviderShare)
        }
    }
    async getCreateAddresses(): Promise<{_governance:string,_rangeLiquidityProvider:string,_oracleFactory:string}>{
        let result = await this.methods('getCreateAddresses');
        return {
            _governance: result._governance,
            _rangeLiquidityProvider: result._rangeLiquidityProvider,
            _oracleFactory: result._oracleFactory
        }
    }
    async getLiquidityProviderShare(stake:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('getLiquidityProviderShare',stake);
        return new BigNumber(result);
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async liquidityProviderShare(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('liquidityProviderShare',param1);
        return new BigNumber(result);
    }
    async oracleFactory(): Promise<string>{
        let result = await this.methods('oracleFactory');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async pairCreator(): Promise<string>{
        let result = await this.methods('pairCreator');
        return result;
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async setLiquidityProviderShare(params:{stakeAmount:number[]|BigNumber[],liquidityProviderShare:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiquidityProviderShare',Utils.toString(params.stakeAmount),Utils.toString(params.liquidityProviderShare));
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setLiveForPair(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiveForPair',params.pair,params.live);
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFeeTo',protocolFeeTo);
        return result;
    }
    async setRangeLiquidityProvider(rangeLiquidityProvider:string): Promise<TransactionReceipt>{
        let result = await this.methods('setRangeLiquidityProvider',rangeLiquidityProvider);
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',tradeFee);
        return result;
    }
    async stakeAmount(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('stakeAmount',param1);
        return new BigNumber(result);
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.methods('tradeFee');
        return new BigNumber(result);
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
}