import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/restricted/OSWAP_RestrictedPair.json");

export class OSWAP_RestrictedPair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    async addLiquidity(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.direction,Utils.toString(params.index));
        return result;
    }
    async approvedTrader(params:{param1:boolean,param2:number|BigNumber,param3:number|BigNumber}): Promise<string>{
        let result = await this.methods('approvedTrader',params.param1,Utils.toString(params.param2),Utils.toString(params.param3));
        return result;
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async counter(param1:boolean): Promise<BigNumber>{
        let result = await this.methods('counter',param1);
        return new BigNumber(result);
    }
    async createOrder(params:{provider:string,direction:boolean,allowAll:boolean,restrictedPrice:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('createOrder',params.provider,params.direction,params.allowAll,Utils.toString(params.restrictedPrice),Utils.toString(params.startDate),Utils.toString(params.expire));
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async feeBalance(): Promise<BigNumber>{
        let result = await this.methods('feeBalance');
        return new BigNumber(result);
    }
    async getAmountIn(params:{param1:string,param2:number|BigNumber,param3:string,param4:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.param1,Utils.toString(params.param2),params.param3,params.param4);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,trader:string,param4:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,Utils.toString(params.amountIn),params.trader,params.param4);
        return new BigNumber(result);
    }
    async getApprovedTrader(params:{direction:boolean,offerIndex:number|BigNumber,start:number|BigNumber,length:number|BigNumber}): Promise<{trader:any,allocation:BigNumber}>{
        let result = await this.methods('getApprovedTrader',params.direction,Utils.toString(params.offerIndex),Utils.toString(params.start),Utils.toString(params.length));
        return {
            trader: result.trader,
            allocation: new BigNumber(result.allocation)
        }
    }
    async getApprovedTraderLength(params:{direction:boolean,offerIndex:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getApprovedTraderLength',params.direction,Utils.toString(params.offerIndex));
        return new BigNumber(result);
    }
    async getBalances(): Promise<[BigNumber,BigNumber,BigNumber]>{
        let result = await this.methods('getBalances');
        return [
            new BigNumber(result[0]),
            new BigNumber(result[1]),
            new BigNumber(result[2])
        ]
    }
    async getLastBalances(): Promise<[BigNumber,BigNumber]>{
        let result = await this.methods('getLastBalances');
        return [
            new BigNumber(result[0]),
            new BigNumber(result[1])
        ]
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber,provider:any,lockedAndAllowAll:any,receiving:BigNumber,amountAndPrice:BigNumber,startDateAndExpire:BigNumber}>{
        let result = await this.methods('getOffers',params.direction,Utils.toString(params.start),Utils.toString(params.length));
        return {
            index: new BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new BigNumber(result.receiving),
            amountAndPrice: new BigNumber(result.amountAndPrice),
            startDateAndExpire: new BigNumber(result.startDateAndExpire)
        }
    }
    async getProviderOffer(params:{provider:string,direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber,provider:any,lockedAndAllowAll:any,receiving:BigNumber,amountAndPrice:BigNumber,startDateAndExpire:BigNumber}>{
        let result = await this.methods('getProviderOffer',params.provider,params.direction,Utils.toString(params.start),Utils.toString(params.length));
        return {
            index: new BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new BigNumber(result.receiving),
            amountAndPrice: new BigNumber(result.amountAndPrice),
            startDateAndExpire: new BigNumber(result.startDateAndExpire)
        }
    }
    async getProviderOfferIndexLength(params:{provider:string,direction:boolean}): Promise<BigNumber>{
        let result = await this.methods('getProviderOfferIndexLength',params.provider,params.direction);
        return new BigNumber(result);
    }
    async getTraderOffer(params:{trader:string,direction:boolean,start:number|BigNumber,length:number|BigNumber}): Promise<{index:BigNumber,provider:any,lockedAndAllowAll:any,receiving:BigNumber,amountAndPrice:BigNumber,startDateAndExpire:BigNumber}>{
        let result = await this.methods('getTraderOffer',params.trader,params.direction,Utils.toString(params.start),Utils.toString(params.length));
        return {
            index: new BigNumber(result.index),
            provider: result.provider,
            lockedAndAllowAll: result.lockedAndAllowAll,
            receiving: new BigNumber(result.receiving),
            amountAndPrice: new BigNumber(result.amountAndPrice),
            startDateAndExpire: new BigNumber(result.startDateAndExpire)
        }
    }
    async govToken(): Promise<string>{
        let result = await this.methods('govToken');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async initialize(params:{token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.methods('initialize',params.token0,params.token1);
        return result;
    }
    async isApprovedTrader(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<boolean>{
        let result = await this.methods('isApprovedTrader',params.param1,Utils.toString(params.param2),params.param3);
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async lastGovBalance(): Promise<BigNumber>{
        let result = await this.methods('lastGovBalance');
        return new BigNumber(result);
    }
    async lastToken0Balance(): Promise<BigNumber>{
        let result = await this.methods('lastToken0Balance');
        return new BigNumber(result);
    }
    async lastToken1Balance(): Promise<BigNumber>{
        let result = await this.methods('lastToken1Balance');
        return new BigNumber(result);
    }
    async lockOffer(params:{direction:boolean,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('lockOffer',params.direction,Utils.toString(params.index));
        return result;
    }
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,locked:boolean,allowAll:boolean,amount:BigNumber,receiving:BigNumber,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber}>{
        let result = await this.methods('offers',params.param1,Utils.toString(params.param2));
        return {
            provider: result.provider,
            locked: result.locked,
            allowAll: result.allowAll,
            amount: new BigNumber(result.amount),
            receiving: new BigNumber(result.receiving),
            restrictedPrice: new BigNumber(result.restrictedPrice),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire)
        }
    }
    async protocolFeeBalance0(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('providerOfferIndex',params.param1,params.param2,Utils.toString(params.param3));
        return new BigNumber(result);
    }
    async redeemProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider:string): Promise<{amount0:BigNumber,amount1:BigNumber}>{
        let result = await this.methods('removeAllLiquidity',provider);
        return {
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1)
        }
    }
    async removeAllLiquidity1D(params:{provider:string,direction:boolean}): Promise<{totalAmount:BigNumber,totalReceiving:BigNumber}>{
        let result = await this.methods('removeAllLiquidity1D',params.provider,params.direction);
        return {
            totalAmount: new BigNumber(result.totalAmount),
            totalReceiving: new BigNumber(result.totalReceiving)
        }
    }
    async removeLiquidity(params:{provider:string,direction:boolean,index:number|BigNumber,amountOut:number|BigNumber,receivingOut:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.provider,params.direction,Utils.toString(params.index),Utils.toString(params.amountOut),Utils.toString(params.receivingOut));
        return result;
    }
    async restrictedLiquidityProvider(): Promise<string>{
        let result = await this.methods('restrictedLiquidityProvider');
        return result;
    }
    async scaleDirection(): Promise<boolean>{
        let result = await this.methods('scaleDirection');
        return result;
    }
    async scaler(): Promise<BigNumber>{
        let result = await this.methods('scaler');
        return new BigNumber(result);
    }
    async setApprovedTrader(params:{direction:boolean,offerIndex:number|BigNumber,trader:string,allocation:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setApprovedTrader',params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation));
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setMultipleApprovedTraders(params:{direction:boolean,offerIndex:number|BigNumber,trader:string[],allocation:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('setMultipleApprovedTraders',params.direction,Utils.toString(params.offerIndex),params.trader,Utils.toString(params.allocation));
        return result;
    }
    async swap(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,trader:string,param5:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swap',Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.trader,params.param5);
        return result;
    }
    async sync(): Promise<TransactionReceipt>{
        let result = await this.methods('sync');
        return result;
    }
    async token0(): Promise<string>{
        let result = await this.methods('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.methods('token1');
        return result;
    }
    async traderAllocation(params:{param1:boolean,param2:number|BigNumber,param3:string}): Promise<BigNumber>{
        let result = await this.methods('traderAllocation',params.param1,Utils.toString(params.param2),params.param3);
        return new BigNumber(result);
    }
    async traderOffer(params:{param1:boolean,param2:string,param3:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('traderOffer',params.param1,params.param2,Utils.toString(params.param3));
        return new BigNumber(result);
    }
    async whitelistFactory(): Promise<string>{
        let result = await this.methods('whitelistFactory');
        return result;
    }
}