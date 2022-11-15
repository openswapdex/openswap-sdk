import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedPair4.json";

export interface IAddLiquidityParams {direction:boolean;index:number|BigNumber;feeIn:number|BigNumber}
export interface IApprovedTraderParams {param1:boolean;param2:number|BigNumber;param3:number|BigNumber}
export interface ICreateOrderParams {provider:string;direction:boolean;allowAll:boolean;restrictedPrice:number|BigNumber;startDate:number|BigNumber;expire:number|BigNumber}
export interface IGetAmountInParams {param1:string;param2:number|BigNumber;param3:string;param4:string}
export interface IGetAmountOutParams {tokenIn:string;amountIn:number|BigNumber;trader:string;param4:string}
export interface IGetApprovedTraderParams {direction:boolean;offerIndex:number|BigNumber;start:number|BigNumber;length:number|BigNumber}
export interface IGetApprovedTraderLengthParams {direction:boolean;offerIndex:number|BigNumber}
export interface IGetOffersParams {direction:boolean;start:number|BigNumber;length:number|BigNumber}
export interface IGetProviderOfferParams {provider:string;direction:boolean;start:number|BigNumber;length:number|BigNumber}
export interface IGetProviderOfferIndexLengthParams {provider:string;direction:boolean}
export interface IGetTraderOfferParams {trader:string;direction:boolean;start:number|BigNumber;length:number|BigNumber}
export interface IInitializeParams {token0:string;token1:string}
export interface IIsApprovedTraderParams {param1:boolean;param2:number|BigNumber;param3:string}
export interface ILastTraderAllocationParams {param1:boolean;param2:number|BigNumber;param3:string}
export interface ILockOfferParams {direction:boolean;index:number|BigNumber}
export interface IOfferAllowlistIpfsCidParams {param1:boolean;param2:number|BigNumber}
export interface IOfferMerkleRootParams {param1:boolean;param2:number|BigNumber}
export interface IOffersParams {param1:boolean;param2:number|BigNumber}
export interface IPrepaidFeeBalanceParams {param1:boolean;param2:number|BigNumber}
export interface IProviderOfferIndexParams {param1:boolean;param2:string;param3:number|BigNumber}
export interface IRemoveAllLiquidity1DParams {provider:string;direction:boolean}
export interface IRemoveLiquidityParams {provider:string;direction:boolean;index:number|BigNumber;amountOut:number|BigNumber;receivingOut:number|BigNumber;feeOut:number|BigNumber}
export interface ISetApprovedTraderByMerkleProofParams {direction:boolean;offerIndex:number|BigNumber;trader:string;allocation:number|BigNumber;proof:string[]}
export interface ISetMerkleRootParams {direction:boolean;index:number|BigNumber;merkleRoot:string;ipfsCid:string}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;trader:string;param5:string}
export interface ITraderAllocationParams {param1:boolean;param2:number|BigNumber;param3:string}
export interface ITraderOfferParams {param1:boolean;param2:string;param3:number|BigNumber}
export class OSWAP_RestrictedPair4 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair4.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            amount: new BigNumber(result.amount),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            feeIn: new BigNumber(result.feeIn),
            newFeeBalance: new BigNumber(result.newFeeBalance),
            _event: event
        };
    }
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.ApprovedTraderEvent[]{
        return this.parseEvents(receipt, "ApprovedTrader").map(e=>this.decodeApprovedTraderEvent(e));
    }
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair4.ApprovedTraderEvent{
        let result = event.data;
        return {
            direction: result.direction,
            offerIndex: new BigNumber(result.offerIndex),
            trader: result.trader,
            allocation: new BigNumber(result.allocation),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): OSWAP_RestrictedPair4.LockEvent{
        let result = event.data;
        return {
            direction: result.direction,
            index: new BigNumber(result.index),
            _event: event
        };
    }
    parseMerkleRootEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.MerkleRootEvent[]{
        return this.parseEvents(receipt, "MerkleRoot").map(e=>this.decodeMerkleRootEvent(e));
    }
    decodeMerkleRootEvent(event: Event): OSWAP_RestrictedPair4.MerkleRootEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            merkleRoot: result.merkleRoot,
            ipfsCid: result.ipfsCid,
            _event: event
        };
    }
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.NewProviderOfferEvent[]{
        return this.parseEvents(receipt, "NewProviderOffer").map(e=>this.decodeNewProviderOfferEvent(e));
    }
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair4.NewProviderOfferEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            allowAll: result.allowAll,
            restrictedPrice: new BigNumber(result.restrictedPrice),
            startDate: new BigNumber(result.startDate),
            expire: new BigNumber(result.expire),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair4.RemoveLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            amountOut: new BigNumber(result.amountOut),
            receivingOut: new BigNumber(result.receivingOut),
            feeOut: new BigNumber(result.feeOut),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReceivingBalance: new BigNumber(result.newReceivingBalance),
            newFeeBalance: new BigNumber(result.newFeeBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair4.SwapEvent{
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            amountIn: new BigNumber(result.amountIn),
            amountOut: new BigNumber(result.amountOut),
            tradeFee: new BigNumber(result.tradeFee),
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwappedOneOfferEvent[]{
        return this.parseEvents(receipt, "SwappedOneOffer").map(e=>this.decodeSwappedOneOfferEvent(e));
    }
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair4.SwappedOneOfferEvent{
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new BigNumber(result.index),
            price: new BigNumber(result.price),
            amountOut: new BigNumber(result.amountOut),
            amountIn: new BigNumber(result.amountIn),
            newAmountBalance: new BigNumber(result.newAmountBalance),
            newReceivingBalance: new BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<void>;
    }
    approvedTrader: {
        (params: IApprovedTraderParams): Promise<string>;
    }
    configStore: {
        (): Promise<string>;
    }
    counter: {
        (param1:boolean): Promise<BigNumber>;
    }
    createOrder: {
        (params: ICreateOrderParams): Promise<TransactionReceipt>;
        call: (params: ICreateOrderParams) => Promise<BigNumber>;
    }
    factory: {
        (): Promise<string>;
    }
    feeBalance: {
        (): Promise<BigNumber>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getApprovedTrader: {
        (params: IGetApprovedTraderParams): Promise<{trader:string[],allocation:BigNumber[]}>;
    }
    getApprovedTraderLength: {
        (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
    }
    getBalances: {
        (): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>;
    }
    getLastBalances: {
        (): Promise<{param1:BigNumber,param2:BigNumber}>;
    }
    getOffers: {
        (params: IGetOffersParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>;
    }
    getProviderOffer: {
        (params: IGetProviderOfferParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>;
    }
    getProviderOfferIndexLength: {
        (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
    }
    getTraderOffer: {
        (params: IGetTraderOfferParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}>;
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
    isApprovedTrader: {
        (params: IIsApprovedTraderParams): Promise<boolean>;
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
    lastTraderAllocation: {
        (params: ILastTraderAllocationParams): Promise<BigNumber>;
    }
    lockOffer: {
        (params: ILockOfferParams): Promise<TransactionReceipt>;
        call: (params: ILockOfferParams) => Promise<void>;
    }
    offerAllowlistIpfsCid: {
        (params: IOfferAllowlistIpfsCidParams): Promise<string>;
    }
    offerMerkleRoot: {
        (params: IOfferMerkleRootParams): Promise<string>;
    }
    offers: {
        (params: IOffersParams): Promise<{provider:string,locked:boolean,allowAll:boolean,amount:BigNumber,receiving:BigNumber,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber}>;
    }
    prepaidFeeBalance: {
        (params: IPrepaidFeeBalanceParams): Promise<BigNumber>;
    }
    protocolFeeBalance0: {
        (): Promise<BigNumber>;
    }
    protocolFeeBalance1: {
        (): Promise<BigNumber>;
    }
    providerOfferIndex: {
        (params: IProviderOfferIndexParams): Promise<BigNumber>;
    }
    redeemProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    removeAllLiquidity: {
        (provider:string): Promise<TransactionReceipt>;
        call: (provider:string) => Promise<{amount0:BigNumber,amount1:BigNumber,feeOut:BigNumber}>;
    }
    removeAllLiquidity1D: {
        (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidity1DParams) => Promise<{totalAmount:BigNumber,totalReceiving:BigNumber,totalRemainingFee:BigNumber}>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<void>;
    }
    restrictedLiquidityProvider: {
        (): Promise<string>;
    }
    scaleDirection: {
        (): Promise<boolean>;
    }
    scaler: {
        (): Promise<BigNumber>;
    }
    setApprovedTraderByMerkleProof: {
        (params: ISetApprovedTraderByMerkleProofParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovedTraderByMerkleProofParams) => Promise<void>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setMerkleRoot: {
        (params: ISetMerkleRootParams): Promise<TransactionReceipt>;
        call: (params: ISetMerkleRootParams) => Promise<void>;
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
    traderAllocation: {
        (params: ITraderAllocationParams): Promise<BigNumber>;
    }
    traderOffer: {
        (params: ITraderOfferParams): Promise<BigNumber>;
    }
    whitelistFactory: {
        (): Promise<string>;
    }
    private assign(){
        let approvedTraderParams = (params: IApprovedTraderParams) => [params.param1,this.wallet.utils.toString(params.param2),this.wallet.utils.toString(params.param3)];
        let approvedTrader_call = async (params: IApprovedTraderParams): Promise<string> => {
            let result = await this.call('approvedTrader',approvedTraderParams(params));
            return result;
        }
        this.approvedTrader = approvedTrader_call
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let counter_call = async (param1:boolean): Promise<BigNumber> => {
            let result = await this.call('counter',[param1]);
            return new BigNumber(result);
        }
        this.counter = counter_call
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
        let getAmountInParams = (params: IGetAmountInParams) => [params.param1,this.wallet.utils.toString(params.param2),params.param3,this.wallet.utils.stringToBytes(params.param4)];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [params.tokenIn,this.wallet.utils.toString(params.amountIn),params.trader,this.wallet.utils.stringToBytes(params.param4)];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getApprovedTraderParams = (params: IGetApprovedTraderParams) => [params.direction,this.wallet.utils.toString(params.offerIndex),this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getApprovedTrader_call = async (params: IGetApprovedTraderParams): Promise<{trader:string[],allocation:BigNumber[]}> => {
            let result = await this.call('getApprovedTrader',getApprovedTraderParams(params));
            return {
                trader: result.trader,
                allocation: result.allocation.map(e=>new BigNumber(e))
            };
        }
        this.getApprovedTrader = getApprovedTrader_call
        let getApprovedTraderLengthParams = (params: IGetApprovedTraderLengthParams) => [params.direction,this.wallet.utils.toString(params.offerIndex)];
        let getApprovedTraderLength_call = async (params: IGetApprovedTraderLengthParams): Promise<BigNumber> => {
            let result = await this.call('getApprovedTraderLength',getApprovedTraderLengthParams(params));
            return new BigNumber(result);
        }
        this.getApprovedTraderLength = getApprovedTraderLength_call
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
        let getOffersParams = (params: IGetOffersParams) => [params.direction,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getOffers_call = async (params: IGetOffersParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}> => {
            let result = await this.call('getOffers',getOffersParams(params));
            return {
                index: result.index.map(e=>new BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e=>new BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
            };
        }
        this.getOffers = getOffers_call
        let getProviderOfferParams = (params: IGetProviderOfferParams) => [params.provider,params.direction,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getProviderOffer_call = async (params: IGetProviderOfferParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}> => {
            let result = await this.call('getProviderOffer',getProviderOfferParams(params));
            return {
                index: result.index.map(e=>new BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e=>new BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
            };
        }
        this.getProviderOffer = getProviderOffer_call
        let getProviderOfferIndexLengthParams = (params: IGetProviderOfferIndexLengthParams) => [params.provider,params.direction];
        let getProviderOfferIndexLength_call = async (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber> => {
            let result = await this.call('getProviderOfferIndexLength',getProviderOfferIndexLengthParams(params));
            return new BigNumber(result);
        }
        this.getProviderOfferIndexLength = getProviderOfferIndexLength_call
        let getTraderOfferParams = (params: IGetTraderOfferParams) => [params.trader,params.direction,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getTraderOffer_call = async (params: IGetTraderOfferParams): Promise<{index:BigNumber[],provider:string[],lockedAndAllowAll:boolean[],receiving:BigNumber[],amountAndPrice:BigNumber[],startDateAndExpire:BigNumber[]}> => {
            let result = await this.call('getTraderOffer',getTraderOfferParams(params));
            return {
                index: result.index.map(e=>new BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e=>new BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e=>new BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e=>new BigNumber(e))
            };
        }
        this.getTraderOffer = getTraderOffer_call
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
        let isApprovedTraderParams = (params: IIsApprovedTraderParams) => [params.param1,this.wallet.utils.toString(params.param2),params.param3];
        let isApprovedTrader_call = async (params: IIsApprovedTraderParams): Promise<boolean> => {
            let result = await this.call('isApprovedTrader',isApprovedTraderParams(params));
            return result;
        }
        this.isApprovedTrader = isApprovedTrader_call
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
        let lastTraderAllocationParams = (params: ILastTraderAllocationParams) => [params.param1,this.wallet.utils.toString(params.param2),params.param3];
        let lastTraderAllocation_call = async (params: ILastTraderAllocationParams): Promise<BigNumber> => {
            let result = await this.call('lastTraderAllocation',lastTraderAllocationParams(params));
            return new BigNumber(result);
        }
        this.lastTraderAllocation = lastTraderAllocation_call
        let offerAllowlistIpfsCidParams = (params: IOfferAllowlistIpfsCidParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let offerAllowlistIpfsCid_call = async (params: IOfferAllowlistIpfsCidParams): Promise<string> => {
            let result = await this.call('offerAllowlistIpfsCid',offerAllowlistIpfsCidParams(params));
            return result;
        }
        this.offerAllowlistIpfsCid = offerAllowlistIpfsCid_call
        let offerMerkleRootParams = (params: IOfferMerkleRootParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let offerMerkleRoot_call = async (params: IOfferMerkleRootParams): Promise<string> => {
            let result = await this.call('offerMerkleRoot',offerMerkleRootParams(params));
            return result;
        }
        this.offerMerkleRoot = offerMerkleRoot_call
        let offersParams = (params: IOffersParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let offers_call = async (params: IOffersParams): Promise<{provider:string,locked:boolean,allowAll:boolean,amount:BigNumber,receiving:BigNumber,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber}> => {
            let result = await this.call('offers',offersParams(params));
            return {
                provider: result.provider,
                locked: result.locked,
                allowAll: result.allowAll,
                amount: new BigNumber(result.amount),
                receiving: new BigNumber(result.receiving),
                restrictedPrice: new BigNumber(result.restrictedPrice),
                startDate: new BigNumber(result.startDate),
                expire: new BigNumber(result.expire)
            };
        }
        this.offers = offers_call
        let prepaidFeeBalanceParams = (params: IPrepaidFeeBalanceParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let prepaidFeeBalance_call = async (params: IPrepaidFeeBalanceParams): Promise<BigNumber> => {
            let result = await this.call('prepaidFeeBalance',prepaidFeeBalanceParams(params));
            return new BigNumber(result);
        }
        this.prepaidFeeBalance = prepaidFeeBalance_call
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
        let providerOfferIndexParams = (params: IProviderOfferIndexParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
        let providerOfferIndex_call = async (params: IProviderOfferIndexParams): Promise<BigNumber> => {
            let result = await this.call('providerOfferIndex',providerOfferIndexParams(params));
            return new BigNumber(result);
        }
        this.providerOfferIndex = providerOfferIndex_call
        let restrictedLiquidityProvider_call = async (): Promise<string> => {
            let result = await this.call('restrictedLiquidityProvider');
            return result;
        }
        this.restrictedLiquidityProvider = restrictedLiquidityProvider_call
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
        let traderAllocationParams = (params: ITraderAllocationParams) => [params.param1,this.wallet.utils.toString(params.param2),params.param3];
        let traderAllocation_call = async (params: ITraderAllocationParams): Promise<BigNumber> => {
            let result = await this.call('traderAllocation',traderAllocationParams(params));
            return new BigNumber(result);
        }
        this.traderAllocation = traderAllocation_call
        let traderOfferParams = (params: ITraderOfferParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
        let traderOffer_call = async (params: ITraderOfferParams): Promise<BigNumber> => {
            let result = await this.call('traderOffer',traderOfferParams(params));
            return new BigNumber(result);
        }
        this.traderOffer = traderOffer_call
        let whitelistFactory_call = async (): Promise<string> => {
            let result = await this.call('whitelistFactory');
            return result;
        }
        this.whitelistFactory = whitelistFactory_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.direction,this.wallet.utils.toString(params.index),this.wallet.utils.toString(params.feeIn)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<void> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return;
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let createOrderParams = (params: ICreateOrderParams) => [params.provider,params.direction,params.allowAll,this.wallet.utils.toString(params.restrictedPrice),this.wallet.utils.toString(params.startDate),this.wallet.utils.toString(params.expire)];
        let createOrder_send = async (params: ICreateOrderParams): Promise<TransactionReceipt> => {
            let result = await this.send('createOrder',createOrderParams(params));
            return result;
        }
        let createOrder_call = async (params: ICreateOrderParams): Promise<BigNumber> => {
            let result = await this.call('createOrder',createOrderParams(params));
            return new BigNumber(result);
        }
        this.createOrder = Object.assign(createOrder_send, {
            call:createOrder_call
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
        let lockOfferParams = (params: ILockOfferParams) => [params.direction,this.wallet.utils.toString(params.index)];
        let lockOffer_send = async (params: ILockOfferParams): Promise<TransactionReceipt> => {
            let result = await this.send('lockOffer',lockOfferParams(params));
            return result;
        }
        let lockOffer_call = async (params: ILockOfferParams): Promise<void> => {
            let result = await this.call('lockOffer',lockOfferParams(params));
            return;
        }
        this.lockOffer = Object.assign(lockOffer_send, {
            call:lockOffer_call
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
        let removeAllLiquidity_call = async (provider:string): Promise<{amount0:BigNumber,amount1:BigNumber,feeOut:BigNumber}> => {
            let result = await this.call('removeAllLiquidity',[provider]);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1),
                feeOut: new BigNumber(result.feeOut)
            };
        }
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call:removeAllLiquidity_call
        });
        let removeAllLiquidity1DParams = (params: IRemoveAllLiquidity1DParams) => [params.provider,params.direction];
        let removeAllLiquidity1D_send = async (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeAllLiquidity1D',removeAllLiquidity1DParams(params));
            return result;
        }
        let removeAllLiquidity1D_call = async (params: IRemoveAllLiquidity1DParams): Promise<{totalAmount:BigNumber,totalReceiving:BigNumber,totalRemainingFee:BigNumber}> => {
            let result = await this.call('removeAllLiquidity1D',removeAllLiquidity1DParams(params));
            return {
                totalAmount: new BigNumber(result.totalAmount),
                totalReceiving: new BigNumber(result.totalReceiving),
                totalRemainingFee: new BigNumber(result.totalRemainingFee)
            };
        }
        this.removeAllLiquidity1D = Object.assign(removeAllLiquidity1D_send, {
            call:removeAllLiquidity1D_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.provider,params.direction,this.wallet.utils.toString(params.index),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.receivingOut),this.wallet.utils.toString(params.feeOut)];
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
        let setApprovedTraderByMerkleProofParams = (params: ISetApprovedTraderByMerkleProofParams) => [params.direction,this.wallet.utils.toString(params.offerIndex),params.trader,this.wallet.utils.toString(params.allocation),this.wallet.utils.stringToBytes32(params.proof)];
        let setApprovedTraderByMerkleProof_send = async (params: ISetApprovedTraderByMerkleProofParams): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovedTraderByMerkleProof',setApprovedTraderByMerkleProofParams(params));
            return result;
        }
        let setApprovedTraderByMerkleProof_call = async (params: ISetApprovedTraderByMerkleProofParams): Promise<void> => {
            let result = await this.call('setApprovedTraderByMerkleProof',setApprovedTraderByMerkleProofParams(params));
            return;
        }
        this.setApprovedTraderByMerkleProof = Object.assign(setApprovedTraderByMerkleProof_send, {
            call:setApprovedTraderByMerkleProof_call
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
        let setMerkleRootParams = (params: ISetMerkleRootParams) => [params.direction,this.wallet.utils.toString(params.index),this.wallet.utils.stringToBytes32(params.merkleRoot),params.ipfsCid];
        let setMerkleRoot_send = async (params: ISetMerkleRootParams): Promise<TransactionReceipt> => {
            let result = await this.send('setMerkleRoot',setMerkleRootParams(params));
            return result;
        }
        let setMerkleRoot_call = async (params: ISetMerkleRootParams): Promise<void> => {
            let result = await this.call('setMerkleRoot',setMerkleRootParams(params));
            return;
        }
        this.setMerkleRoot = Object.assign(setMerkleRoot_send, {
            call:setMerkleRoot_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.toString(params.amount0Out),this.wallet.utils.toString(params.amount1Out),params.to,params.trader,this.wallet.utils.stringToBytes(params.param5)];
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
export module OSWAP_RestrictedPair4{
    export interface AddLiquidityEvent {provider:string,direction:boolean,index:BigNumber,amount:BigNumber,newAmountBalance:BigNumber,feeIn:BigNumber,newFeeBalance:BigNumber,_event:Event}
    export interface ApprovedTraderEvent {direction:boolean,offerIndex:BigNumber,trader:string,allocation:BigNumber,_event:Event}
    export interface LockEvent {direction:boolean,index:BigNumber,_event:Event}
    export interface MerkleRootEvent {provider:string,direction:boolean,index:BigNumber,merkleRoot:string,ipfsCid:string,_event:Event}
    export interface NewProviderOfferEvent {provider:string,direction:boolean,index:BigNumber,allowAll:boolean,restrictedPrice:BigNumber,startDate:BigNumber,expire:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,direction:boolean,index:BigNumber,amountOut:BigNumber,receivingOut:BigNumber,feeOut:BigNumber,newAmountBalance:BigNumber,newReceivingBalance:BigNumber,newFeeBalance:BigNumber,_event:Event}
    export interface SwapEvent {to:string,direction:boolean,amountIn:BigNumber,amountOut:BigNumber,tradeFee:BigNumber,protocolFee:BigNumber,_event:Event}
    export interface SwappedOneOfferEvent {provider:string,direction:boolean,index:BigNumber,price:BigNumber,amountOut:BigNumber,amountIn:BigNumber,newAmountBalance:BigNumber,newReceivingBalance:BigNumber,_event:Event}
}