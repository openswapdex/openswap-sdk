import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_OraclePair.json";

export interface IAddLiquidityParams {provider:string;direction:boolean;staked:number|BigNumber;afterIndex:number|BigNumber;expire:number|BigNumber;enable:boolean}
export interface IFindPositionParams {direction:boolean;staked:number|BigNumber;afterIndex:number|BigNumber}
export interface IGetAmountInParams {tokenOut:string;amountOut:number|BigNumber;data:string}
export interface IGetAmountOutParams {tokenIn:string;amountIn:number|BigNumber;data:string}
export interface IGetLatestPriceParams {direction:boolean;payload:string}
export interface IGetProviderOfferParams {provider:string;direction:boolean}
export interface IGetQueueParams {direction:boolean;start:number|BigNumber;end:number|BigNumber}
export interface IGetQueueFromIndexParams {direction:boolean;from:number|BigNumber;count:number|BigNumber}
export interface IInitializeParams {token0:string;token1:string}
export interface IOffersParams {param1:boolean;param2:number|BigNumber}
export interface IPauseOfferParams {provider:string;direction:boolean}
export interface IPurgeExpireParams {direction:boolean;startingIndex:number|BigNumber;limit:number|BigNumber}
export interface IRemoveLiquidityParams {provider:string;direction:boolean;unstake:number|BigNumber;afterIndex:number|BigNumber;amountOut:number|BigNumber;reserveOut:number|BigNumber;expire:number|BigNumber;enable:boolean}
export interface IReplenishParams {provider:string;direction:boolean;afterIndex:number|BigNumber;amountIn:number|BigNumber;expire:number|BigNumber}
export interface IResumeOfferParams {provider:string;direction:boolean;afterIndex:number|BigNumber}
export interface ISetDelegatorParams {delegator:string;fee:number|BigNumber}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;data:string}
export class OSWAP_OraclePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_OraclePair.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            staked: new BigNumber(result.staked),
            amount: new BigNumber(result.amount),
            newStakeBalance: new BigNumber(result.newStakeBalance),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            expire: new BigNumber(result.expire),
            enable: result.enable,
            _event: event
        };
    }
    parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorPauseOfferEvent[]{
        return this.parseEvents(receipt, "DelegatorPauseOffer").map(e=>this.decodeDelegatorPauseOfferEvent(e));
    }
    decodeDelegatorPauseOfferEvent(event: Event): OSWAP_OraclePair.DelegatorPauseOfferEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
            _event: event
        };
    }
    parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorResumeOfferEvent[]{
        return this.parseEvents(receipt, "DelegatorResumeOffer").map(e=>this.decodeDelegatorResumeOfferEvent(e));
    }
    decodeDelegatorResumeOfferEvent(event: Event): OSWAP_OraclePair.DelegatorResumeOfferEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            provider: result.provider,
            direction: result.direction,
            _event: event
        };
    }
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.NewProviderEvent[]{
        return this.parseEvents(receipt, "NewProvider").map(e=>this.decodeNewProviderEvent(e));
    }
    decodeNewProviderEvent(event: Event): OSWAP_OraclePair.NewProviderEvent{
        let result = event.data;
        return {
            provider: result.provider,
            index: new BigNumber(result.index),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_OraclePair.RemoveLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            unstake: new BigNumber(result.unstake),
            amountOut: new BigNumber(result.amountOut),
            reserveOut: new BigNumber(result.reserveOut),
            newStakeBalance: new BigNumber(result.newStakeBalance),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            expire: new BigNumber(result.expire),
            enable: result.enable,
            _event: event
        };
    }
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_OraclePair.ReplenishEvent[]{
        return this.parseEvents(receipt, "Replenish").map(e=>this.decodeReplenishEvent(e));
    }
    decodeReplenishEvent(event: Event): OSWAP_OraclePair.ReplenishEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReserveBalance: new BigNumber(result.newReserveBalance),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseSetDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SetDelegatorEvent[]{
        return this.parseEvents(receipt, "SetDelegator").map(e=>this.decodeSetDelegatorEvent(e));
    }
    decodeSetDelegatorEvent(event: Event): OSWAP_OraclePair.SetDelegatorEvent{
        let result = event.data;
        return {
            provider: result.provider,
            delegator: result.delegator,
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_OraclePair.SwapEvent{
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            price: new BigNumber(result.price),
            amountIn: new BigNumber(result.amountIn),
            amountOut: new BigNumber(result.amountOut),
            tradeFee: new BigNumber(result.tradeFee),
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwappedOneProviderEvent[]{
        return this.parseEvents(receipt, "SwappedOneProvider").map(e=>this.decodeSwappedOneProviderEvent(e));
    }
    decodeSwappedOneProviderEvent(event: Event): OSWAP_OraclePair.SwappedOneProviderEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountOut: new BigNumber(result.amountOut),
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newCounterReserveBalance: new BigNumber(result.newCounterReserveBalance),
            _event: event
        };
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<BigNumber>;
    }
    counter: {
        (): Promise<BigNumber>;
    }
    delegator: {
        (param1:string): Promise<string>;
    }
    factory: {
        (): Promise<string>;
    }
    feeBalance: {
        (): Promise<BigNumber>;
    }
    findPosition: {
        (params: IFindPositionParams): Promise<{afterIndex:BigNumber,nextIndex:BigNumber}>;
    }
    first: {
        (param1:boolean): Promise<BigNumber>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getBalances: {
        (): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>;
    }
    getLastBalances: {
        (): Promise<{param1:BigNumber,param2:BigNumber}>;
    }
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    }
    getProviderOffer: {
        (params: IGetProviderOfferParams): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean}>;
    }
    getQueue: {
        (params: IGetQueueParams): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>;
    }
    getQueueFromIndex: {
        (params: IGetQueueFromIndexParams): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}>;
    }
    govToken: {
        (): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    lastGovBalance: {
        (): Promise<BigNumber>;
    }
    lastToken0Balance: {
        (): Promise<BigNumber>;
    }
    lastToken1Balance: {
        (): Promise<BigNumber>;
    }
    offers: {
        (params: IOffersParams): Promise<{provider:string,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean,isActive:boolean,enabled:boolean,prev:BigNumber,next:BigNumber}>;
    }
    oracleLiquidityProvider: {
        (): Promise<string>;
    }
    pauseOffer: {
        (params: IPauseOfferParams): Promise<TransactionReceipt>;
        call: (params: IPauseOfferParams) => Promise<void>;
    }
    protocolFeeBalance0: {
        (): Promise<BigNumber>;
    }
    protocolFeeBalance1: {
        (): Promise<BigNumber>;
    }
    providerOfferIndex: {
        (param1:string): Promise<BigNumber>;
    }
    purgeExpire: {
        (params: IPurgeExpireParams): Promise<TransactionReceipt>;
        call: (params: IPurgeExpireParams) => Promise<BigNumber>;
    }
    queueSize: {
        (param1:boolean): Promise<BigNumber>;
    }
    redeemProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    removeAllLiquidity: {
        (provider:string): Promise<TransactionReceipt>;
        call: (provider:string) => Promise<{amount0:BigNumber,amount1:BigNumber,staked:BigNumber}>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    }
    replenish: {
        (params: IReplenishParams): Promise<TransactionReceipt>;
        call: (params: IReplenishParams) => Promise<void>;
    }
    resumeOffer: {
        (params: IResumeOfferParams): Promise<TransactionReceipt>;
        call: (params: IResumeOfferParams) => Promise<void>;
    }
    scaleDirection: {
        (): Promise<boolean>;
    }
    scaler: {
        (): Promise<BigNumber>;
    }
    setDelegator: {
        (params: ISetDelegatorParams): Promise<TransactionReceipt>;
        call: (params: ISetDelegatorParams) => Promise<void>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setPrivateReplenish: {
        (replenish:boolean): Promise<TransactionReceipt>;
        call: (replenish:boolean) => Promise<void>;
    }
    stakeBalance: {
        (): Promise<BigNumber>;
    }
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    token0: {
        (): Promise<string>;
    }
    token1: {
        (): Promise<string>;
    }
    private assign(){
        let counter_call = async (): Promise<BigNumber> => {
            let result = await this.call('counter');
            return new BigNumber(result);
        }
        this.counter = counter_call
        let delegator_call = async (param1:string): Promise<string> => {
            let result = await this.call('delegator',[param1]);
            return result;
        }
        this.delegator = delegator_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let feeBalance_call = async (): Promise<BigNumber> => {
            let result = await this.call('feeBalance');
            return new BigNumber(result);
        }
        this.feeBalance = feeBalance_call
        let findPositionParams = (params: IFindPositionParams) => [params.direction,this.wallet.utils.toString(params.staked),this.wallet.utils.toString(params.afterIndex)];
        let findPosition_call = async (params: IFindPositionParams): Promise<{afterIndex:BigNumber,nextIndex:BigNumber}> => {
            let result = await this.call('findPosition',findPositionParams(params));
            return {
                afterIndex: new BigNumber(result.afterIndex),
                nextIndex: new BigNumber(result.nextIndex)
            };
        }
        this.findPosition = findPosition_call
        let first_call = async (param1:boolean): Promise<BigNumber> => {
            let result = await this.call('first',[param1]);
            return new BigNumber(result);
        }
        this.first = first_call
        let getAmountInParams = (params: IGetAmountInParams) => [params.tokenOut,this.wallet.utils.toString(params.amountOut),this.wallet.utils.stringToBytes(params.data)];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [params.tokenIn,this.wallet.utils.toString(params.amountIn),this.wallet.utils.stringToBytes(params.data)];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getBalances_call = async (): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}> => {
            let result = await this.call('getBalances');
            return {
                param1: new BigNumber(result[0]),
                param2: new BigNumber(result[1]),
                param3: new BigNumber(result[2])
            };
        }
        this.getBalances = getBalances_call
        let getLastBalances_call = async (): Promise<{param1:BigNumber,param2:BigNumber}> => {
            let result = await this.call('getLastBalances');
            return {
                param1: new BigNumber(result[0]),
                param2: new BigNumber(result[1])
            };
        }
        this.getLastBalances = getLastBalances_call
        let getLatestPriceParams = (params: IGetLatestPriceParams) => [params.direction,this.wallet.utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params: IGetLatestPriceParams): Promise<BigNumber> => {
            let result = await this.call('getLatestPrice',getLatestPriceParams(params));
            return new BigNumber(result);
        }
        this.getLatestPrice = getLatestPrice_call
        let getProviderOfferParams = (params: IGetProviderOfferParams) => [params.provider,params.direction];
        let getProviderOffer_call = async (params: IGetProviderOfferParams): Promise<{index:BigNumber,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean}> => {
            let result = await this.call('getProviderOffer',getProviderOfferParams(params));
            return {
                index: new BigNumber(result.index),
                staked: new BigNumber(result.staked),
                amount: new BigNumber(result.amount),
                reserve: new BigNumber(result.reserve),
                expire: new BigNumber(result.expire),
                privateReplenish: result.privateReplenish
            };
        }
        this.getProviderOffer = getProviderOffer_call
        let getQueueParams = (params: IGetQueueParams) => [params.direction,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.end)];
        let getQueue_call = async (params: IGetQueueParams): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}> => {
            let result = await this.call('getQueue',getQueueParams(params));
            return {
                index: result.index.map(e=>new BigNumber(e)),
                provider: result.provider,
                amount: result.amount.map(e=>new BigNumber(e)),
                staked: result.staked.map(e=>new BigNumber(e)),
                expire: result.expire.map(e=>new BigNumber(e))
            };
        }
        this.getQueue = getQueue_call
        let getQueueFromIndexParams = (params: IGetQueueFromIndexParams) => [params.direction,this.wallet.utils.toString(params.from),this.wallet.utils.toString(params.count)];
        let getQueueFromIndex_call = async (params: IGetQueueFromIndexParams): Promise<{index:BigNumber[],provider:string[],amount:BigNumber[],staked:BigNumber[],expire:BigNumber[]}> => {
            let result = await this.call('getQueueFromIndex',getQueueFromIndexParams(params));
            return {
                index: result.index.map(e=>new BigNumber(e)),
                provider: result.provider,
                amount: result.amount.map(e=>new BigNumber(e)),
                staked: result.staked.map(e=>new BigNumber(e)),
                expire: result.expire.map(e=>new BigNumber(e))
            };
        }
        this.getQueueFromIndex = getQueueFromIndex_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let isLive_call = async (): Promise<boolean> => {
            let result = await this.call('isLive');
            return result;
        }
        this.isLive = isLive_call
        let lastGovBalance_call = async (): Promise<BigNumber> => {
            let result = await this.call('lastGovBalance');
            return new BigNumber(result);
        }
        this.lastGovBalance = lastGovBalance_call
        let lastToken0Balance_call = async (): Promise<BigNumber> => {
            let result = await this.call('lastToken0Balance');
            return new BigNumber(result);
        }
        this.lastToken0Balance = lastToken0Balance_call
        let lastToken1Balance_call = async (): Promise<BigNumber> => {
            let result = await this.call('lastToken1Balance');
            return new BigNumber(result);
        }
        this.lastToken1Balance = lastToken1Balance_call
        let offersParams = (params: IOffersParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let offers_call = async (params: IOffersParams): Promise<{provider:string,staked:BigNumber,amount:BigNumber,reserve:BigNumber,expire:BigNumber,privateReplenish:boolean,isActive:boolean,enabled:boolean,prev:BigNumber,next:BigNumber}> => {
            let result = await this.call('offers',offersParams(params));
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
            };
        }
        this.offers = offers_call
        let oracleLiquidityProvider_call = async (): Promise<string> => {
            let result = await this.call('oracleLiquidityProvider');
            return result;
        }
        this.oracleLiquidityProvider = oracleLiquidityProvider_call
        let protocolFeeBalance0_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance0');
            return new BigNumber(result);
        }
        this.protocolFeeBalance0 = protocolFeeBalance0_call
        let protocolFeeBalance1_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance1');
            return new BigNumber(result);
        }
        this.protocolFeeBalance1 = protocolFeeBalance1_call
        let providerOfferIndex_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('providerOfferIndex',[param1]);
            return new BigNumber(result);
        }
        this.providerOfferIndex = providerOfferIndex_call
        let queueSize_call = async (param1:boolean): Promise<BigNumber> => {
            let result = await this.call('queueSize',[param1]);
            return new BigNumber(result);
        }
        this.queueSize = queueSize_call
        let scaleDirection_call = async (): Promise<boolean> => {
            let result = await this.call('scaleDirection');
            return result;
        }
        this.scaleDirection = scaleDirection_call
        let scaler_call = async (): Promise<BigNumber> => {
            let result = await this.call('scaler');
            return new BigNumber(result);
        }
        this.scaler = scaler_call
        let stakeBalance_call = async (): Promise<BigNumber> => {
            let result = await this.call('stakeBalance');
            return new BigNumber(result);
        }
        this.stakeBalance = stakeBalance_call
        let token0_call = async (): Promise<string> => {
            let result = await this.call('token0');
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (): Promise<string> => {
            let result = await this.call('token1');
            return result;
        }
        this.token1 = token1_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.provider,params.direction,this.wallet.utils.toString(params.staked),this.wallet.utils.toString(params.afterIndex),this.wallet.utils.toString(params.expire),params.enable];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<BigNumber> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return new BigNumber(result);
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let initializeParams = (params: IInitializeParams) => [params.token0,params.token1];
        let initialize_send = async (params: IInitializeParams): Promise<TransactionReceipt> => {
            let result = await this.send('initialize',initializeParams(params));
            return result;
        }
        let initialize_call = async (params: IInitializeParams): Promise<void> => {
            let result = await this.call('initialize',initializeParams(params));
            return;
        }
        this.initialize = Object.assign(initialize_send, {
            call:initialize_call
        });
        let pauseOfferParams = (params: IPauseOfferParams) => [params.provider,params.direction];
        let pauseOffer_send = async (params: IPauseOfferParams): Promise<TransactionReceipt> => {
            let result = await this.send('pauseOffer',pauseOfferParams(params));
            return result;
        }
        let pauseOffer_call = async (params: IPauseOfferParams): Promise<void> => {
            let result = await this.call('pauseOffer',pauseOfferParams(params));
            return;
        }
        this.pauseOffer = Object.assign(pauseOffer_send, {
            call:pauseOffer_call
        });
        let purgeExpireParams = (params: IPurgeExpireParams) => [params.direction,this.wallet.utils.toString(params.startingIndex),this.wallet.utils.toString(params.limit)];
        let purgeExpire_send = async (params: IPurgeExpireParams): Promise<TransactionReceipt> => {
            let result = await this.send('purgeExpire',purgeExpireParams(params));
            return result;
        }
        let purgeExpire_call = async (params: IPurgeExpireParams): Promise<BigNumber> => {
            let result = await this.call('purgeExpire',purgeExpireParams(params));
            return new BigNumber(result);
        }
        this.purgeExpire = Object.assign(purgeExpire_send, {
            call:purgeExpire_call
        });
        let redeemProtocolFee_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('redeemProtocolFee');
            return result;
        }
        let redeemProtocolFee_call = async (): Promise<void> => {
            let result = await this.call('redeemProtocolFee');
            return;
        }
        this.redeemProtocolFee = Object.assign(redeemProtocolFee_send, {
            call:redeemProtocolFee_call
        });
        let removeAllLiquidity_send = async (provider:string): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidity',[provider]);
            return result;
        }
        let removeAllLiquidity_call = async (provider:string): Promise<{amount0:BigNumber,amount1:BigNumber,staked:BigNumber}> => {
            let result = await this.call('removeAllLiquidity',[provider]);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1),
                staked: new BigNumber(result.staked)
            };
        }
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call:removeAllLiquidity_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.provider,params.direction,this.wallet.utils.toString(params.unstake),this.wallet.utils.toString(params.afterIndex),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.reserveOut),this.wallet.utils.toString(params.expire),params.enable];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<void> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return;
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let replenishParams = (params: IReplenishParams) => [params.provider,params.direction,this.wallet.utils.toString(params.afterIndex),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.expire)];
        let replenish_send = async (params: IReplenishParams): Promise<TransactionReceipt> => {
            let result = await this.send('replenish',replenishParams(params));
            return result;
        }
        let replenish_call = async (params: IReplenishParams): Promise<void> => {
            let result = await this.call('replenish',replenishParams(params));
            return;
        }
        this.replenish = Object.assign(replenish_send, {
            call:replenish_call
        });
        let resumeOfferParams = (params: IResumeOfferParams) => [params.provider,params.direction,this.wallet.utils.toString(params.afterIndex)];
        let resumeOffer_send = async (params: IResumeOfferParams): Promise<TransactionReceipt> => {
            let result = await this.send('resumeOffer',resumeOfferParams(params));
            return result;
        }
        let resumeOffer_call = async (params: IResumeOfferParams): Promise<void> => {
            let result = await this.call('resumeOffer',resumeOfferParams(params));
            return;
        }
        this.resumeOffer = Object.assign(resumeOffer_send, {
            call:resumeOffer_call
        });
        let setDelegatorParams = (params: ISetDelegatorParams) => [params.delegator,this.wallet.utils.toString(params.fee)];
        let setDelegator_send = async (params: ISetDelegatorParams): Promise<TransactionReceipt> => {
            let result = await this.send('setDelegator',setDelegatorParams(params));
            return result;
        }
        let setDelegator_call = async (params: ISetDelegatorParams): Promise<void> => {
            let result = await this.call('setDelegator',setDelegatorParams(params));
            return;
        }
        this.setDelegator = Object.assign(setDelegator_send, {
            call:setDelegator_call
        });
        let setLive_send = async (isLive:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('setLive',[isLive]);
            return result;
        }
        let setLive_call = async (isLive:boolean): Promise<void> => {
            let result = await this.call('setLive',[isLive]);
            return;
        }
        this.setLive = Object.assign(setLive_send, {
            call:setLive_call
        });
        let setPrivateReplenish_send = async (replenish:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('setPrivateReplenish',[replenish]);
            return result;
        }
        let setPrivateReplenish_call = async (replenish:boolean): Promise<void> => {
            let result = await this.call('setPrivateReplenish',[replenish]);
            return;
        }
        this.setPrivateReplenish = Object.assign(setPrivateReplenish_send, {
            call:setPrivateReplenish_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.toString(params.amount0Out),this.wallet.utils.toString(params.amount1Out),params.to,this.wallet.utils.stringToBytes(params.data)];
        let swap_send = async (params: ISwapParams): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params));
            return result;
        }
        let swap_call = async (params: ISwapParams): Promise<void> => {
            let result = await this.call('swap',swapParams(params));
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('sync');
            return result;
        }
        let sync_call = async (): Promise<void> => {
            let result = await this.call('sync');
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
        });
    }
}
export module OSWAP_OraclePair{
    export interface AddLiquidityEvent {provider:string,direction:boolean,staked:BigNumber,amount:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,expire:BigNumber,enable:boolean,_event:Event}
    export interface DelegatorPauseOfferEvent {delegator:string,provider:string,direction:boolean,_event:Event}
    export interface DelegatorResumeOfferEvent {delegator:string,provider:string,direction:boolean,_event:Event}
    export interface NewProviderEvent {provider:string,index:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,direction:boolean,unstake:BigNumber,amountOut:BigNumber,reserveOut:BigNumber,newStakeBalance:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber,enable:boolean,_event:Event}
    export interface ReplenishEvent {provider:string,direction:boolean,amountIn:BigNumber,newAmountBalance:BigNumber,newReserveBalance:BigNumber,expire:BigNumber,_event:Event}
    export interface SetDelegatorEvent {provider:string,delegator:string,_event:Event}
    export interface SwapEvent {to:string,direction:boolean,price:BigNumber,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface SwappedOneProviderEvent {provider:string,direction:boolean,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newCounterReserveBalance:BigNumber,_event:Event}
}