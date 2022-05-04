import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RestrictedFactory.json";

export class OSWAP_RestrictedFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,whitelistFactory:string,pairCreator:string,configStore:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this._deploy(params.governance,params.whitelistFactory,params.pairCreator,params.configStore,this.utils.toString(params.tradeFee),this.utils.toString(params.protocolFee),params.protocolFeeTo);
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
    async addOldOracleToNewPair(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.methods('addOldOracleToNewPair',params.tokenA,params.tokenB,params.oracle);
        return result;
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',this.utils.toString(param1));
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.methods('allPairsLength');
        return new BigNumber(result);
    }
    async checkAndGetOracle(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.methods('checkAndGetOracle',params.tokenA,params.tokenB);
        return result;
    }
    async checkAndGetOracleSwapParams(params:{tokenA:string,tokenB:string}): Promise<{oracle_:string,tradeFee_:BigNumber,protocolFee_:BigNumber}>{
        let result = await this.methods('checkAndGetOracleSwapParams',params.tokenA,params.tokenB);
        return {
            oracle_: result.oracle_,
            tradeFee_: new BigNumber(result.tradeFee_),
            protocolFee_: new BigNumber(result.protocolFee_)
        };
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async getCreateAddresses(): Promise<{_governance:string,_whitelistFactory:string,_restrictedLiquidityProvider:string,_configStore:string}>{
        let result = await this.methods('getCreateAddresses');
        return {
            _governance: result._governance,
            _whitelistFactory: result._whitelistFactory,
            _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
            _configStore: result._configStore
        };
    }
    async getPair(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2,this.utils.toString(params.param3));
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async init(restrictedLiquidityProvider:string): Promise<TransactionReceipt>{
        let result = await this.methods('init',restrictedLiquidityProvider);
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async isOracle(param1:string): Promise<boolean>{
        let result = await this.methods('isOracle',param1);
        return result;
    }
    async isPair(pair:string): Promise<boolean>{
        let result = await this.methods('isPair',pair);
        return result;
    }
    async oracles(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('oracles',params.param1,params.param2);
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
    async pairIdx(param1:string): Promise<BigNumber>{
        let result = await this.methods('pairIdx',param1);
        return new BigNumber(result);
    }
    async pairLength(params:{tokenA:string,tokenB:string}): Promise<BigNumber>{
        let result = await this.methods('pairLength',params.tokenA,params.tokenB);
        return new BigNumber(result);
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.methods('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async restrictedLiquidityProvider(): Promise<string>{
        let result = await this.methods('restrictedLiquidityProvider');
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
    async setOracle(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setOracle',params.tokenA,params.tokenB,params.oracle);
        return result;
    }
    async setProtocolFee(protocolFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFee',this.utils.toString(protocolFee));
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFeeTo',protocolFeeTo);
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',this.utils.toString(tradeFee));
        return result;
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.methods('tradeFee');
        return new BigNumber(result);
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
    async whitelistFactory(): Promise<string>{
        let result = await this.methods('whitelistFactory');
        return result;
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
    export interface RestartedEvent {}
    export interface ShutdownedEvent {}
}