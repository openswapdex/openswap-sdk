import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_RestrictedFactory.json";

export class OSWAP_RestrictedFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{governance:string,whitelistFactory:string,pairCreator:string,configStore:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this.__deploy([params.governance,params.whitelistFactory,params.pairCreator,params.configStore,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),params.protocolFeeTo]);
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
    async addOldOracleToNewPair_send(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.send('addOldOracleToNewPair',[params.tokenA,params.tokenB,params.oracle]);
        return result;
    }
    async addOldOracleToNewPair_call(params:{tokenA:string,tokenB:string,oracle:string}): Promise<void>{
        let result = await this.call('addOldOracleToNewPair',[params.tokenA,params.tokenB,params.oracle]);
        return;
    }
    addOldOracleToNewPair: {
        (params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,oracle:string}) => Promise<void>;
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.call('allPairs',[Utils.toString(param1)]);
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.call('allPairsLength');
        return new BigNumber(result);
    }
    async checkAndGetOracle(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.call('checkAndGetOracle',[params.tokenA,params.tokenB]);
        return result;
    }
    async checkAndGetOracleSwapParams(params:{tokenA:string,tokenB:string}): Promise<{oracle_:string,tradeFee_:BigNumber,protocolFee_:BigNumber}>{
        let result = await this.call('checkAndGetOracleSwapParams',[params.tokenA,params.tokenB]);
        return {
            oracle_: result.oracle_,
            tradeFee_: new BigNumber(result.tradeFee_),
            protocolFee_: new BigNumber(result.protocolFee_)
        };
    }
    async configStore(): Promise<string>{
        let result = await this.call('configStore');
        return result;
    }
    async createPair_send(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.send('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    async createPair_call(params:{tokenA:string,tokenB:string}): Promise<string>{
        let result = await this.call('createPair',[params.tokenA,params.tokenB]);
        return result;
    }
    createPair: {
        (params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string}) => Promise<string>;
    }
    async getCreateAddresses(): Promise<{_governance:string,_whitelistFactory:string,_restrictedLiquidityProvider:string,_configStore:string}>{
        let result = await this.call('getCreateAddresses');
        return {
            _governance: result._governance,
            _whitelistFactory: result._whitelistFactory,
            _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
            _configStore: result._configStore
        };
    }
    async getPair(params:{param1:string,param2:string,param3:number|BigNumber}): Promise<string>{
        let result = await this.call('getPair',[params.param1,params.param2,Utils.toString(params.param3)]);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async init_send(restrictedLiquidityProvider:string): Promise<TransactionReceipt>{
        let result = await this.send('init',[restrictedLiquidityProvider]);
        return result;
    }
    async init_call(restrictedLiquidityProvider:string): Promise<void>{
        let result = await this.call('init',[restrictedLiquidityProvider]);
        return;
    }
    init: {
        (restrictedLiquidityProvider:string): Promise<TransactionReceipt>;
        call: (restrictedLiquidityProvider:string) => Promise<void>;
    }
    async isLive(): Promise<boolean>{
        let result = await this.call('isLive');
        return result;
    }
    async isOracle(param1:string): Promise<boolean>{
        let result = await this.call('isOracle',[param1]);
        return result;
    }
    async isPair(pair:string): Promise<boolean>{
        let result = await this.call('isPair',[pair]);
        return result;
    }
    async oracles(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.call('oracles',[params.param1,params.param2]);
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async pairCreator(): Promise<string>{
        let result = await this.call('pairCreator');
        return result;
    }
    async pairIdx(param1:string): Promise<BigNumber>{
        let result = await this.call('pairIdx',[param1]);
        return new BigNumber(result);
    }
    async pairLength(params:{tokenA:string,tokenB:string}): Promise<BigNumber>{
        let result = await this.call('pairLength',[params.tokenA,params.tokenB]);
        return new BigNumber(result);
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.call('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.call('protocolFeeTo');
        return result;
    }
    async renounceOwnership_send(): Promise<TransactionReceipt>{
        let result = await this.send('renounceOwnership');
        return result;
    }
    async renounceOwnership_call(): Promise<void>{
        let result = await this.call('renounceOwnership');
        return;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async restrictedLiquidityProvider(): Promise<string>{
        let result = await this.call('restrictedLiquidityProvider');
        return result;
    }
    async setLive_send(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.send('setLive',[isLive]);
        return result;
    }
    async setLive_call(isLive:boolean): Promise<void>{
        let result = await this.call('setLive',[isLive]);
        return;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    async setLiveForPair_send(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('setLiveForPair',[params.pair,params.live]);
        return result;
    }
    async setLiveForPair_call(params:{pair:string,live:boolean}): Promise<void>{
        let result = await this.call('setLiveForPair',[params.pair,params.live]);
        return;
    }
    setLiveForPair: {
        (params:{pair:string,live:boolean}): Promise<TransactionReceipt>;
        call: (params:{pair:string,live:boolean}) => Promise<void>;
    }
    async setOracle_send(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.send('setOracle',[params.tokenA,params.tokenB,params.oracle]);
        return result;
    }
    async setOracle_call(params:{tokenA:string,tokenB:string,oracle:string}): Promise<void>{
        let result = await this.call('setOracle',[params.tokenA,params.tokenB,params.oracle]);
        return;
    }
    setOracle: {
        (params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>;
        call: (params:{tokenA:string,tokenB:string,oracle:string}) => Promise<void>;
    }
    async setProtocolFee_send(protocolFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setProtocolFee',[Utils.toString(protocolFee)]);
        return result;
    }
    async setProtocolFee_call(protocolFee:number|BigNumber): Promise<void>{
        let result = await this.call('setProtocolFee',[Utils.toString(protocolFee)]);
        return;
    }
    setProtocolFee: {
        (protocolFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee:number|BigNumber) => Promise<void>;
    }
    async setProtocolFeeTo_send(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.send('setProtocolFeeTo',[protocolFeeTo]);
        return result;
    }
    async setProtocolFeeTo_call(protocolFeeTo:string): Promise<void>{
        let result = await this.call('setProtocolFeeTo',[protocolFeeTo]);
        return;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    async setTradeFee_send(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setTradeFee',[Utils.toString(tradeFee)]);
        return result;
    }
    async setTradeFee_call(tradeFee:number|BigNumber): Promise<void>{
        let result = await this.call('setTradeFee',[Utils.toString(tradeFee)]);
        return;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.call('tradeFee');
        return new BigNumber(result);
    }
    async transferOwnership_send(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.send('transferOwnership',[newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner:string): Promise<void>{
        let result = await this.call('transferOwnership',[newOwner]);
        return;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    async whitelistFactory(): Promise<string>{
        let result = await this.call('whitelistFactory');
        return result;
    }
    private assign(){
        this.addOldOracleToNewPair = Object.assign(this.addOldOracleToNewPair_send, {call:this.addOldOracleToNewPair_call});
        this.createPair = Object.assign(this.createPair_send, {call:this.createPair_call});
        this.init = Object.assign(this.init_send, {call:this.init_call});
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, {call:this.renounceOwnership_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.setLiveForPair = Object.assign(this.setLiveForPair_send, {call:this.setLiveForPair_call});
        this.setOracle = Object.assign(this.setOracle_send, {call:this.setOracle_call});
        this.setProtocolFee = Object.assign(this.setProtocolFee_send, {call:this.setProtocolFee_call});
        this.setProtocolFeeTo = Object.assign(this.setProtocolFeeTo_send, {call:this.setProtocolFeeTo_call});
        this.setTradeFee = Object.assign(this.setTradeFee_send, {call:this.setTradeFee_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
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