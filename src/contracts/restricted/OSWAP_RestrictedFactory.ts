import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/restricted/OSWAP_RestrictedFactory.json");

export class OSWAP_RestrictedFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,whitelistFactory:string,pairCreator:string,configStore:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this._deploy(params.governance,params.whitelistFactory,params.pairCreator,params.configStore,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[]{
        let events = this.parseEvents(receipt, "OracleAdded");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                token0: result.token0,
                token1: result.token1,
                oracle: result.oracle
            };
        });
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[]{
        let events = this.parseEvents(receipt, "OwnershipTransferred");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                previousOwner: result.previousOwner,
                newOwner: result.newOwner
            };
        });
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[]{
        let events = this.parseEvents(receipt, "PairCreated");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                token0: result.token0,
                token1: result.token1,
                pair: result.pair,
                newPairSize: new BigNumber(result.newPairSize),
                newSize: new BigNumber(result.newSize)
            };
        });
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[]{
        let events = this.parseEvents(receipt, "PairRestarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                pair: result.pair
            };
        });
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[]{
        let events = this.parseEvents(receipt, "PairShutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                pair: result.pair
            };
        });
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[]{
        let events = this.parseEvents(receipt, "ParamSet");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                name: result.name,
                value: result.value
            };
        });
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[]{
        let events = this.parseEvents(receipt, "ParamSet2");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                name: result.name,
                value1: result.value1,
                value2: result.value2
            };
        });
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[]{
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[]{
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    async addOldOracleToNewPair(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.methods('addOldOracleToNewPair',params.tokenA,params.tokenB,params.oracle);
        return result;
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',Utils.toString(param1));
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
        let result = await this.methods('getPair',params.param1,params.param2,Utils.toString(params.param3));
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
        let result = await this.methods('setProtocolFee',Utils.toString(protocolFee));
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFeeTo',protocolFeeTo);
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',Utils.toString(tradeFee));
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
    export interface OracleAddedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,oracle:string}
    export interface OwnershipTransferredEvent {_eventName:string,_address:string,_transactionHash:string,previousOwner:string,newOwner:string}
    export interface PairCreatedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,pair:string,newPairSize:BigNumber,newSize:BigNumber}
    export interface PairRestartedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface PairShutdownedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface ParamSetEvent {_eventName:string,_address:string,_transactionHash:string,name:string,value:string}
    export interface ParamSet2Event {_eventName:string,_address:string,_transactionHash:string,name:string,value1:string,value2:string}
    export interface RestartedEvent {_eventName:string,_address:string,_transactionHash:string}
    export interface ShutdownedEvent {_eventName:string,_address:string,_transactionHash:string}
}