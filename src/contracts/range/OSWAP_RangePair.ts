import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/range/OSWAP_RangePair.json");

export class OSWAP_RangePair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[]{
        let events = this.parseEvents(receipt, "AddLiquidity");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                direction: result.direction,
                staked: new BigNumber(result.staked),
                amount: new BigNumber(result.amount),
                newStakeBalance: new BigNumber(result.newStakeBalance),
                newAmountBalance: new BigNumber(result.newAmountBalance),
                lowerLimit: new BigNumber(result.lowerLimit),
                upperLimit: new BigNumber(result.upperLimit),
                startDate: new BigNumber(result.startDate),
                expire: new BigNumber(result.expire)
            };
        });
    }
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[]{
        let events = this.parseEvents(receipt, "NewProvider");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                index: new BigNumber(result.index)
            };
        });
    }
    parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[]{
        let events = this.parseEvents(receipt, "RemoveAllLiquidity");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                unstake: new BigNumber(result.unstake),
                amount0Out: new BigNumber(result.amount0Out),
                amount1Out: new BigNumber(result.amount1Out)
            };
        });
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[]{
        let events = this.parseEvents(receipt, "RemoveLiquidity");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                direction: result.direction,
                unstake: new BigNumber(result.unstake),
                amountOut: new BigNumber(result.amountOut),
                reserveOut: new BigNumber(result.reserveOut),
                newStakeBalance: new BigNumber(result.newStakeBalance),
                newAmountBalance: new BigNumber(result.newAmountBalance),
                newReserveBalance: new BigNumber(result.newReserveBalance),
                lowerLimit: new BigNumber(result.lowerLimit),
                upperLimit: new BigNumber(result.upperLimit),
                startDate: new BigNumber(result.startDate),
                expire: new BigNumber(result.expire)
            };
        });
    }
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[]{
        let events = this.parseEvents(receipt, "Replenish");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                direction: result.direction,
                amountIn: new BigNumber(result.amountIn),
                newAmountBalance: new BigNumber(result.newAmountBalance),
                newReserveBalance: new BigNumber(result.newReserveBalance)
            };
        });
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[]{
        let events = this.parseEvents(receipt, "Swap");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                to: result.to,
                direction: result.direction,
                price: new BigNumber(result.price),
                amountIn: new BigNumber(result.amountIn),
                amountOut: new BigNumber(result.amountOut),
                tradeFee: new BigNumber(result.tradeFee),
                protocolFee: new BigNumber(result.protocolFee)
            };
        });
    }
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[]{
        let events = this.parseEvents(receipt, "SwappedOneProvider");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                direction: result.direction,
                amountOut: new BigNumber(result.amountOut),
                amountIn: new BigNumber(result.amountIn),
                newAmountBalance: new BigNumber(result.newAmountBalance),
                newCounterReserveBalance: new BigNumber(result.newCounterReserveBalance)
            };
        });
    }
    parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[]{
        let events = this.parseEvents(receipt, "UpdateProviderOffer");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                provider: result.provider,
                direction: result.direction,
                replenish: new BigNumber(result.replenish),
                newAmountBalance: new BigNumber(result.newAmountBalance),
                newReserveBalance: new BigNumber(result.newReserveBalance),
                lowerLimit: new BigNumber(result.lowerLimit),
                upperLimit: new BigNumber(result.upperLimit),
                startDate: new BigNumber(result.startDate),
                expire: new BigNumber(result.expire),
                privateReplenish: result.privateReplenish
            };
        });
    }
    async addLiquidity(params:{provider:string,direction:boolean,staked:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addLiquidity',params.provider,params.direction,Utils.toString(params.staked),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire));
        return result;
    }
    async counter(): Promise<BigNumber>{
        let result = await this.methods('counter');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.tokenOut,Utils.toString(params.amountOut),params.data);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber,data:string}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,Utils.toString(params.amountIn),params.data);
        return new BigNumber(result);
    }
    async getBalances(): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>{
        let result = await this.methods('getBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1]),
            param3: new BigNumber(result[2])
        };
    }
    async getLastBalances(): Promise<{param1:BigNumber,param2:BigNumber}>{
        let result = await this.methods('getLastBalances');
        return {
            param1: new BigNumber(result[0]),
            param2: new BigNumber(result[1])
        };
    }
    async getLatestPrice(params:{direction:boolean,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.direction,params.payload);
        return new BigNumber(result);
    }
    async getOffers(params:{direction:boolean,start:number|BigNumber,end:number|BigNumber}): Promise<{provider:string[],amountAndReserve:BigNumber[],lowerLimitAndUpperLimit:BigNumber[],startDateAndExpire:BigNumber[],privateReplenish:boolean[]}>{
        let result = await this.methods('getOffers',params.direction,Utils.toString(params.start),Utils.toString(params.end));
        return {
            provider: result.provider,
            amountAndReserve: result.amountAndReserve.map(e=>new BigNumber(e)),
            lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map(e=>new BigNumber(e)),
            startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e)),
            privateReplenish: result.privateReplenish
        };
    }
    async getProviderOffer(params:{provider:string,direction:boolean}): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.methods('getProviderOffer',params.provider,params.direction);
        return {
            index: new BigNumber(result.index),
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
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
    async offers(params:{param1:boolean,param2:number|BigNumber}): Promise<{provider:string,amount:BigNumber,reserve:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}>{
        let result = await this.methods('offers',params.param1,Utils.toString(params.param2));
        return {
            provider: result.provider,
            amount: new BigNumber(result.amount),
            reserve: new BigNumber(result.reserve),
            lowerLimit: new BigNumber(result.lowerLimit),
            upperLimit: new BigNumber(result.upperLimit),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            privateReplenish: result.privateReplenish
        };
    }
    async oracleFactory(): Promise<string>{
        let result = await this.methods('oracleFactory');
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
    async providerStaking(param1:string): Promise<BigNumber>{
        let result = await this.methods('providerStaking',param1);
        return new BigNumber(result);
    }
    async rangeLiquidityProvider(): Promise<string>{
        let result = await this.methods('rangeLiquidityProvider');
        return result;
    }
    async redeemProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('redeemProtocolFee');
        return result;
    }
    async removeAllLiquidity(provider:string): Promise<TransactionReceipt>{
        let result = await this.methods('removeAllLiquidity',provider);
        return result;
    }
    async removeLiquidity(params:{provider:string,direction:boolean,unstake:number|BigNumber,amountOut:number|BigNumber,reserveOut:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('removeLiquidity',params.provider,params.direction,Utils.toString(params.unstake),Utils.toString(params.amountOut),Utils.toString(params.reserveOut),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire));
        return result;
    }
    async replenish(params:{provider:string,direction:boolean,amountIn:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('replenish',params.provider,params.direction,Utils.toString(params.amountIn));
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
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
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
    async updateProviderOffer(params:{provider:string,direction:boolean,replenishAmount:number|BigNumber,lowerLimit:number|BigNumber,upperLimit:number|BigNumber,startDate:number|BigNumber,expire:number|BigNumber,privateReplenish:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('updateProviderOffer',params.provider,params.direction,Utils.toString(params.replenishAmount),Utils.toString(params.lowerLimit),Utils.toString(params.upperLimit),Utils.toString(params.startDate),Utils.toString(params.expire),params.privateReplenish);
        return result;
    }
}
export module OSWAP_RangePair{
    export interface AddLiquidityEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,direction:boolean,staked:BigNumber,amount:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber}
    export interface NewProviderEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,index:BigNumber}
    export interface RemoveAllLiquidityEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,unstake:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber}
    export interface RemoveLiquidityEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,direction:boolean,unstake:BigNumber,amountOut:BigNumber,reserveOut:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber}
    export interface ReplenishEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,direction:boolean,amountIn:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber}
    export interface SwapEvent {_eventName:string,_address:string,_transactionHash:string,to:string,direction:boolean,price:BigNumber,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber}
    export interface SwappedOneProviderEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,direction:boolean,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newCounterReserveBalance:BigNumber}
    export interface UpdateProviderOfferEvent {_eventName:string,_address:string,_transactionHash:string,provider:string,direction:boolean,replenish:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,lowerLimit:BigNumber,upperLimit:BigNumber,startDate:BigNumber,expire:BigNumber,privateReplenish:boolean}
}