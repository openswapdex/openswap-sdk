import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedFactory.json";

export interface IDeployParams {governance:string;whitelistFactory:string;pairCreator:string;configStore:string;tradeFee:number|BigNumber;protocolFee:number|BigNumber;protocolFeeTo:string}
export interface IAddOldOracleToNewPairParams {tokenA:string;tokenB:string;oracle:string}
export interface ICheckAndGetOracleParams {tokenA:string;tokenB:string}
export interface ICheckAndGetOracleSwapParamsParams {tokenA:string;tokenB:string}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string;param3:number|BigNumber}
export interface IOraclesParams {param1:string;param2:string}
export interface IPairLengthParams {tokenA:string;tokenB:string}
export interface ISetLiveForPairParams {pair:string;live:boolean}
export interface ISetOracleParams {tokenA:string;tokenB:string;oracle:string}
export class OSWAP_RestrictedFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.whitelistFactory,params.pairCreator,params.configStore,this.wallet.utils.toString(params.tradeFee),this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo]);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[]{
        return this.parseEvents(receipt, "OracleAdded").map(e=>this.decodeOracleAddedEvent(e));
    }
    decodeOracleAddedEvent(event: Event): OSWAP_RestrictedFactory.OracleAddedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            oracle: result.oracle,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RestrictedFactory.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_RestrictedFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newPairSize: new BigNumber(result.newPairSize),
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_RestrictedFactory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_RestrictedFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_RestrictedFactory.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_RestrictedFactory.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_RestrictedFactory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_RestrictedFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    addOldOracleToNewPair: {
        (params: IAddOldOracleToNewPairParams): Promise<TransactionReceipt>;
        call: (params: IAddOldOracleToNewPairParams) => Promise<void>;
    }
    allPairs: {
        (param1:number|BigNumber): Promise<string>;
    }
    allPairsLength: {
        (): Promise<BigNumber>;
    }
    checkAndGetOracle: {
        (params: ICheckAndGetOracleParams): Promise<string>;
    }
    checkAndGetOracleSwapParams: {
        (params: ICheckAndGetOracleSwapParamsParams): Promise<{oracle_:string,tradeFee_:BigNumber,protocolFee_:BigNumber}>;
    }
    configStore: {
        (): Promise<string>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    getCreateAddresses: {
        (): Promise<{_governance:string,_whitelistFactory:string,_restrictedLiquidityProvider:string,_configStore:string}>;
    }
    getPair: {
        (params: IGetPairParams): Promise<string>;
    }
    governance: {
        (): Promise<string>;
    }
    init: {
        (restrictedLiquidityProvider:string): Promise<TransactionReceipt>;
        call: (restrictedLiquidityProvider:string) => Promise<void>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    isOracle: {
        (param1:string): Promise<boolean>;
    }
    isPair: {
        (pair:string): Promise<boolean>;
    }
    oracles: {
        (params: IOraclesParams): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    pairCreator: {
        (): Promise<string>;
    }
    pairIdx: {
        (param1:string): Promise<BigNumber>;
    }
    pairLength: {
        (params: IPairLengthParams): Promise<BigNumber>;
    }
    protocolFee: {
        (): Promise<BigNumber>;
    }
    protocolFeeTo: {
        (): Promise<string>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    restrictedLiquidityProvider: {
        (): Promise<string>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    }
    setOracle: {
        (params: ISetOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams) => Promise<void>;
    }
    setProtocolFee: {
        (protocolFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee:number|BigNumber) => Promise<void>;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    tradeFee: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    whitelistFactory: {
        (): Promise<string>;
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
        let checkAndGetOracleParams = (params: ICheckAndGetOracleParams) => [params.tokenA,params.tokenB];
        let checkAndGetOracle_call = async (params: ICheckAndGetOracleParams): Promise<string> => {
            let result = await this.call('checkAndGetOracle',checkAndGetOracleParams(params));
            return result;
        }
        this.checkAndGetOracle = checkAndGetOracle_call
        let checkAndGetOracleSwapParamsParams = (params: ICheckAndGetOracleSwapParamsParams) => [params.tokenA,params.tokenB];
        let checkAndGetOracleSwapParams_call = async (params: ICheckAndGetOracleSwapParamsParams): Promise<{oracle_:string,tradeFee_:BigNumber,protocolFee_:BigNumber}> => {
            let result = await this.call('checkAndGetOracleSwapParams',checkAndGetOracleSwapParamsParams(params));
            return {
                oracle_: result.oracle_,
                tradeFee_: new BigNumber(result.tradeFee_),
                protocolFee_: new BigNumber(result.protocolFee_)
            };
        }
        this.checkAndGetOracleSwapParams = checkAndGetOracleSwapParams_call
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let getCreateAddresses_call = async (): Promise<{_governance:string,_whitelistFactory:string,_restrictedLiquidityProvider:string,_configStore:string}> => {
            let result = await this.call('getCreateAddresses');
            return {
                _governance: result._governance,
                _whitelistFactory: result._whitelistFactory,
                _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
                _configStore: result._configStore
            };
        }
        this.getCreateAddresses = getCreateAddresses_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
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
        let isOracle_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isOracle',[param1]);
            return result;
        }
        this.isOracle = isOracle_call
        let isPair_call = async (pair:string): Promise<boolean> => {
            let result = await this.call('isPair',[pair]);
            return result;
        }
        this.isPair = isPair_call
        let oraclesParams = (params: IOraclesParams) => [params.param1,params.param2];
        let oracles_call = async (params: IOraclesParams): Promise<string> => {
            let result = await this.call('oracles',oraclesParams(params));
            return result;
        }
        this.oracles = oracles_call
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
        let pairIdx_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('pairIdx',[param1]);
            return new BigNumber(result);
        }
        this.pairIdx = pairIdx_call
        let pairLengthParams = (params: IPairLengthParams) => [params.tokenA,params.tokenB];
        let pairLength_call = async (params: IPairLengthParams): Promise<BigNumber> => {
            let result = await this.call('pairLength',pairLengthParams(params));
            return new BigNumber(result);
        }
        this.pairLength = pairLength_call
        let protocolFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFee');
            return new BigNumber(result);
        }
        this.protocolFee = protocolFee_call
        let protocolFeeTo_call = async (): Promise<string> => {
            let result = await this.call('protocolFeeTo');
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let restrictedLiquidityProvider_call = async (): Promise<string> => {
            let result = await this.call('restrictedLiquidityProvider');
            return result;
        }
        this.restrictedLiquidityProvider = restrictedLiquidityProvider_call
        let tradeFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('tradeFee');
            return new BigNumber(result);
        }
        this.tradeFee = tradeFee_call
        let whitelistFactory_call = async (): Promise<string> => {
            let result = await this.call('whitelistFactory');
            return result;
        }
        this.whitelistFactory = whitelistFactory_call
        let addOldOracleToNewPairParams = (params: IAddOldOracleToNewPairParams) => [params.tokenA,params.tokenB,params.oracle];
        let addOldOracleToNewPair_send = async (params: IAddOldOracleToNewPairParams): Promise<TransactionReceipt> => {
            let result = await this.send('addOldOracleToNewPair',addOldOracleToNewPairParams(params));
            return result;
        }
        let addOldOracleToNewPair_call = async (params: IAddOldOracleToNewPairParams): Promise<void> => {
            let result = await this.call('addOldOracleToNewPair',addOldOracleToNewPairParams(params));
            return;
        }
        this.addOldOracleToNewPair = Object.assign(addOldOracleToNewPair_send, {
            call:addOldOracleToNewPair_call
        });
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
        let init_send = async (restrictedLiquidityProvider:string): Promise<TransactionReceipt> => {
            let result = await this.send('init',[restrictedLiquidityProvider]);
            return result;
        }
        let init_call = async (restrictedLiquidityProvider:string): Promise<void> => {
            let result = await this.call('init',[restrictedLiquidityProvider]);
            return;
        }
        this.init = Object.assign(init_send, {
            call:init_call
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
        let setOracleParams = (params: ISetOracleParams) => [params.tokenA,params.tokenB,params.oracle];
        let setOracle_send = async (params: ISetOracleParams): Promise<TransactionReceipt> => {
            let result = await this.send('setOracle',setOracleParams(params));
            return result;
        }
        let setOracle_call = async (params: ISetOracleParams): Promise<void> => {
            let result = await this.call('setOracle',setOracleParams(params));
            return;
        }
        this.setOracle = Object.assign(setOracle_send, {
            call:setOracle_call
        });
        let setProtocolFee_send = async (protocolFee:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFee',[this.wallet.utils.toString(protocolFee)]);
            return result;
        }
        let setProtocolFee_call = async (protocolFee:number|BigNumber): Promise<void> => {
            let result = await this.call('setProtocolFee',[this.wallet.utils.toString(protocolFee)]);
            return;
        }
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call:setProtocolFee_call
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
export module OSWAP_RestrictedFactory{
    export interface OracleAddedEvent {token0:string,token1:string,oracle:string,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newPairSize:BigNumber,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
}