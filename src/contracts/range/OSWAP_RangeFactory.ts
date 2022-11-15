import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangeFactory.json";

export interface IDeployParams {governance:string;oracleFactory:string;pairCreator:string;tradeFee:number|BigNumber;stakeAmount:(number|BigNumber)[];liquidityProviderShare:(number|BigNumber)[];protocolFeeTo:string}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetLiquidityProviderShareParams {stakeAmount:(number|BigNumber)[];liquidityProviderShare:(number|BigNumber)[]}
export interface ISetLiveForPairParams {pair:string;live:boolean}
export class OSWAP_RangeFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.oracleFactory,params.pairCreator,this.wallet.utils.toString(params.tradeFee),this.wallet.utils.toString(params.stakeAmount),this.wallet.utils.toString(params.liquidityProviderShare),params.protocolFeeTo]);
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber): Promise<string>;
    }
    allPairsLength: {
        (): Promise<BigNumber>;
    }
    checkAndGetSwapParams: {
        (): Promise<BigNumber>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    getAllLiquidityProviderShare: {
        (): Promise<{_stakeAmount:BigNumber[],_liquidityProviderShare:BigNumber[]}>;
    }
    getCreateAddresses: {
        (): Promise<{_governance:string,_rangeLiquidityProvider:string,_oracleFactory:string}>;
    }
    getLiquidityProviderShare: {
        (stake:number|BigNumber): Promise<BigNumber>;
    }
    getPair: {
        (params: IGetPairParams): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    liquidityProviderShare: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    oracleFactory: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    pairCreator: {
        (): Promise<string>;
    }
    protocolFeeTo: {
        (): Promise<string>;
    }
    rangeLiquidityProvider: {
        (): Promise<string>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    setLiquidityProviderShare: {
        (params: ISetLiquidityProviderShareParams): Promise<TransactionReceipt>;
        call: (params: ISetLiquidityProviderShareParams) => Promise<void>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    setRangeLiquidityProvider: {
        (rangeLiquidityProvider:string): Promise<TransactionReceipt>;
        call: (rangeLiquidityProvider:string) => Promise<void>;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    stakeAmount: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    tradeFee: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('allPairs',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('allPairsLength');
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let checkAndGetSwapParams_call = async (): Promise<BigNumber> => {
            let result = await this.call('checkAndGetSwapParams');
            return new BigNumber(result);
        }
        this.checkAndGetSwapParams = checkAndGetSwapParams_call
        let getAllLiquidityProviderShare_call = async (): Promise<{_stakeAmount:BigNumber[],_liquidityProviderShare:BigNumber[]}> => {
            let result = await this.call('getAllLiquidityProviderShare');
            return {
                _stakeAmount: result._stakeAmount.map(e=>new BigNumber(e)),
                _liquidityProviderShare: result._liquidityProviderShare.map(e=>new BigNumber(e))
            };
        }
        this.getAllLiquidityProviderShare = getAllLiquidityProviderShare_call
        let getCreateAddresses_call = async (): Promise<{_governance:string,_rangeLiquidityProvider:string,_oracleFactory:string}> => {
            let result = await this.call('getCreateAddresses');
            return {
                _governance: result._governance,
                _rangeLiquidityProvider: result._rangeLiquidityProvider,
                _oracleFactory: result._oracleFactory
            };
        }
        this.getCreateAddresses = getCreateAddresses_call
        let getLiquidityProviderShare_call = async (stake:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('getLiquidityProviderShare',[this.wallet.utils.toString(stake)]);
            return new BigNumber(result);
        }
        this.getLiquidityProviderShare = getLiquidityProviderShare_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params));
            return result;
        }
        this.getPair = getPair_call
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
        let liquidityProviderShare_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('liquidityProviderShare',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.liquidityProviderShare = liquidityProviderShare_call
        let oracleFactory_call = async (): Promise<string> => {
            let result = await this.call('oracleFactory');
            return result;
        }
        this.oracleFactory = oracleFactory_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let pairCreator_call = async (): Promise<string> => {
            let result = await this.call('pairCreator');
            return result;
        }
        this.pairCreator = pairCreator_call
        let protocolFeeTo_call = async (): Promise<string> => {
            let result = await this.call('protocolFeeTo');
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let rangeLiquidityProvider_call = async (): Promise<string> => {
            let result = await this.call('rangeLiquidityProvider');
            return result;
        }
        this.rangeLiquidityProvider = rangeLiquidityProvider_call
        let stakeAmount_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('stakeAmount',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.stakeAmount = stakeAmount_call
        let tradeFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('tradeFee');
            return new BigNumber(result);
        }
        this.tradeFee = tradeFee_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params));
            return result;
        }
        let createPair_call = async (params: ICreatePairParams): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params));
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let renounceOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership');
            return result;
        }
        let renounceOwnership_call = async (): Promise<void> => {
            let result = await this.call('renounceOwnership');
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let setLiquidityProviderShareParams = (params: ISetLiquidityProviderShareParams) => [this.wallet.utils.toString(params.stakeAmount),this.wallet.utils.toString(params.liquidityProviderShare)];
        let setLiquidityProviderShare_send = async (params: ISetLiquidityProviderShareParams): Promise<TransactionReceipt> => {
            let result = await this.send('setLiquidityProviderShare',setLiquidityProviderShareParams(params));
            return result;
        }
        let setLiquidityProviderShare_call = async (params: ISetLiquidityProviderShareParams): Promise<void> => {
            let result = await this.call('setLiquidityProviderShare',setLiquidityProviderShareParams(params));
            return;
        }
        this.setLiquidityProviderShare = Object.assign(setLiquidityProviderShare_send, {
            call:setLiquidityProviderShare_call
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
        let setLiveForPairParams = (params: ISetLiveForPairParams) => [params.pair,params.live];
        let setLiveForPair_send = async (params: ISetLiveForPairParams): Promise<TransactionReceipt> => {
            let result = await this.send('setLiveForPair',setLiveForPairParams(params));
            return result;
        }
        let setLiveForPair_call = async (params: ISetLiveForPairParams): Promise<void> => {
            let result = await this.call('setLiveForPair',setLiveForPairParams(params));
            return;
        }
        this.setLiveForPair = Object.assign(setLiveForPair_send, {
            call:setLiveForPair_call
        });
        let setProtocolFeeTo_send = async (protocolFeeTo:string): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFeeTo',[protocolFeeTo]);
            return result;
        }
        let setProtocolFeeTo_call = async (protocolFeeTo:string): Promise<void> => {
            let result = await this.call('setProtocolFeeTo',[protocolFeeTo]);
            return;
        }
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call:setProtocolFeeTo_call
        });
        let setRangeLiquidityProvider_send = async (rangeLiquidityProvider:string): Promise<TransactionReceipt> => {
            let result = await this.send('setRangeLiquidityProvider',[rangeLiquidityProvider]);
            return result;
        }
        let setRangeLiquidityProvider_call = async (rangeLiquidityProvider:string): Promise<void> => {
            let result = await this.call('setRangeLiquidityProvider',[rangeLiquidityProvider]);
            return;
        }
        this.setRangeLiquidityProvider = Object.assign(setRangeLiquidityProvider_send, {
            call:setRangeLiquidityProvider_call
        });
        let setTradeFee_send = async (tradeFee:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setTradeFee',[this.wallet.utils.toString(tradeFee)]);
            return result;
        }
        let setTradeFee_call = async (tradeFee:number|BigNumber): Promise<void> => {
            let result = await this.call('setTradeFee',[this.wallet.utils.toString(tradeFee)]);
            return;
        }
        this.setTradeFee = Object.assign(setTradeFee_send, {
            call:setTradeFee_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module OSWAP_RangeFactory{
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}