import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_OraclePair.json");

export class OSWAP_OraclePair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): {provider:string,direction:boolean,staked:BigNumber,amount:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,expire:BigNumber,enable:boolean}[]{
        return this.parseEvents(receipt, "AddLiquidity");
    }
    parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): {delegator:string,provider:string,direction:boolean}[]{
        return this.parseEvents(receipt, "DelegatorPauseOffer");
    }
    parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): {delegator:string,provider:string,direction:boolean}[]{
        return this.parseEvents(receipt, "DelegatorResumeOffer");
    }
    parseNewProviderEvent(receipt: TransactionReceipt): {provider:string,index:BigNumber}[]{
        return this.parseEvents(receipt, "NewProvider");
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): {provider:string,direction:boolean,unstake:BigNumber,amountOut:BigNumber,reserveOut:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber,enable:boolean}[]{
        return this.parseEvents(receipt, "RemoveLiquidity");
    }
    parseReplenishEvent(receipt: TransactionReceipt): {provider:string,direction:boolean,amountIn:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber}[]{
        return this.parseEvents(receipt, "Replenish");
    }
    parseSetDelegatorEvent(receipt: TransactionReceipt): {provider:string,delegator:string}[]{
        return this.parseEvents(receipt, "SetDelegator");
    }
    parseSwapEvent(receipt: TransactionReceipt): {to:string,direction:boolean,price:BigNumber,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber}[]{
        return this.parseEvents(receipt, "Swap");
    }
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): {provider:string,direction:boolean,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newCounterReserveBalance:BigNumber}[]{
        return this.parseEvents(receipt, "SwappedOneProvider");
    }
    async addLiquidity(params:{provider:string,direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.afterIndex),Utils.toString(params.expire),params.enable);
        return result;
    }
    async counter(): Promise<BigNumber>{
        let result = await this.methods('counter');
        return new BigNumber(result);
    }
    async delegator(param1:string): Promise<string>{
        let result = await this.methods('delegator',param1);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async feeBalance(): Promise<BigNumber>{
        let result = await this.methods('feeBalance');
        return new BigNumber(result);
    }
    async findPosition(params:{direction:boolean,staked:number|BigNumber,afterIndex:number|BigNumber}): Promise<{afterIndex:BigNumber,nextIndex:BigNumber}>{
        let result = await this.methods('findPosition',params.direction,Utils.toString(params.staked),Utils.toString(params.afterIndex));
        return {
            afterIndex: new BigNumber(result.afterIndex),
            nextIndex: new BigNumber(result.nextIndex)
        }
    }
    async first(param1:boolean): Promise<BigNumber>{
        let result = await this.methods('first',param1);
        return new BigNumber(result);
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.tokenOut,Utils.toString(params.amountOut),params.data);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,Utils.toString(params.amountIn),params.data);
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
    async getLatestPrice(params:{direction:boolean,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.direction,params.payload);
        return new BigNumber(result);
    }
    async getProviderOffer(params:{provider:string,direction:boolean}): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.methods('getProviderOffer',params.provider,params.direction);
        return {
            index: new BigNumber(result.index),
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        }
    }
    async getQueue(params:{direction:boolean,start:number|BigNumber,end:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>{
        let result = await this.methods('getQueue',params.direction,Utils.toString(params.start),Utils.toString(params.end));
        return {
            index: result.index,
            provider: result.provider,
            amount: result.amount,
            staked: result.staked,
            expire: result.expire
        }
    }
    async getQueueFromIndex(params:{direction:boolean,from:number|BigNumber,count:number|BigNumber}): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>{
        let result = await this.methods('getQueueFromIndex',params.direction,Utils.toString(params.from),Utils.toString(params.count));
        return {
            index: result.index,
            provider: result.provider,
            amount: result.amount,
            staked: result.staked,
            expire: result.expire
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
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean,isActive:boolean,enabled:boolean,prev:BigNumber,next:BigNumber}>{
        let result = await this.methods('offers',params.param1,Utils.toString(params.param2));
        return {
            provider: result.provider,
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            isActive: result.isActive,
            enabled: result.enabled,
            prev: new BigNumber(result.prev),
            next: new BigNumber(result.next)
        }
    }
    async oracleLiquidityProvider(): Promise<string>{
        let result = await this.methods('oracleLiquidityProvider');
        return result;
    }
    async pauseOffer(params:{provider:string,direction:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('pauseOffer',params.provider,params.direction);
        return result;
    }
    async protocolFeeBalance0(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance0');
        return new BigNumber(result);
    }
    async protocolFeeBalance1(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance1');
        return new BigNumber(result);
    }
    async providerOfferIndex(param1:string): Promise<BigNumber>{
        let result = await this.methods('providerOfferIndex',param1);
        return new BigNumber(result);
    }
    async purgeExpire(params:{direction:boolean,startingIndex:number|BigNumber,limit:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('purgeExpire',params.direction,Utils.toString(params.startingIndex),Utils.toString(params.limit));
        return result;
    }
    async queueSize(param1:boolean): Promise<BigNumber>{
        let result = await this.methods('queueSize',param1);
        return new BigNumber(result);
    }
    async redeemProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider:string): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',provider);
        return result;
    }
    async removeLiquidity(params:{provider:string,direction:boolean,unstake:number|BigNumber,afterIndex:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,expire:number|BigNumber,enable:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.afterIndex),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.expire),params.enable);
        return result;
    }
    async replenish(params:{provider:string,direction:boolean,afterIndex:number|BigNumber,amountIn:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('replenish',params.provider,params.direction,Utils.toString(params.afterIndex),Utils.toString(params.amountIn),Utils.toString(params.expire));
        return result;
    }
    async resumeOffer(params:{provider:string,direction:boolean,afterIndex:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('resumeOffer',params.provider,params.direction,Utils.toString(params.afterIndex));
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
    async setDelegator(params:{delegator:string,fee:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setDelegator',params.delegator,Utils.toString(params.fee));
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setPrivateReplenish(replenish:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setPrivateReplenish',replenish);
        return result;
    }
    async stakeBalance(): Promise<BigNumber>{
        let result = await this.methods('stakeBalance');
        return new BigNumber(result);
    }
    async swap(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swap',Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data);
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
}