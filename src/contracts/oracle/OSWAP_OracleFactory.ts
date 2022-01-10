import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_OracleFactory.json");

export class OSWAP_OracleFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,pairCreator:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,feePerDelegator:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this._deploy(params.governance,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),Utils.toString(params.feePerDelegator),params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[]{
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
    parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[]{
        let events = this.parseEvents(receipt, "OracleScores");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                oracle: result.oracle,
                score: new BigNumber(result.score)
            };
        });
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[]{
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
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[]{
        let events = this.parseEvents(receipt, "PairCreated");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                token0: result.token0,
                token1: result.token1,
                pair: result.pair,
                newSize: new BigNumber(result.newSize)
            };
        });
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[]{
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
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[]{
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
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[]{
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
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[]{
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
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[]{
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[]{
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[]{
        let events = this.parseEvents(receipt, "Whitelisted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                who: result.who,
                allow: result.allow
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
    async allWhiteListed(): Promise<{list:string[],allowed:boolean[]}>{
        let result = await this.methods('allWhiteListed');
        return {
            list: result.list,
            allowed: result.allowed
        };
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
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async feePerDelegator(): Promise<BigNumber>{
        let result = await this.methods('feePerDelegator');
        return new BigNumber(result);
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
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
    async isWhitelisted(param1:string): Promise<boolean>{
        let result = await this.methods('isWhitelisted',param1);
        return result;
    }
    async minLotSize(param1:string): Promise<BigNumber>{
        let result = await this.methods('minLotSize',param1);
        return new BigNumber(result);
    }
    async minOracleScore(): Promise<BigNumber>{
        let result = await this.methods('minOracleScore');
        return new BigNumber(result);
    }
    async oracleLiquidityProvider(): Promise<string>{
        let result = await this.methods('oracleLiquidityProvider');
        return result;
    }
    async oracleScores(param1:string): Promise<BigNumber>{
        let result = await this.methods('oracleScores',param1);
        return new BigNumber(result);
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
    async securityScoreOracle(): Promise<string>{
        let result = await this.methods('securityScoreOracle');
        return result;
    }
    async setFeePerDelegator(feePerDelegator:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setFeePerDelegator',Utils.toString(feePerDelegator));
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
    async setMinLotSize(params:{token:string,minLotSize:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setMinLotSize',params.token,Utils.toString(params.minLotSize));
        return result;
    }
    async setOracle(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setOracle',params.tokenA,params.tokenB,params.oracle);
        return result;
    }
    async setOracleLiquidityProvider(params:{oracleRouter:string,oracleLiquidityProvider:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setOracleLiquidityProvider',params.oracleRouter,params.oracleLiquidityProvider);
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
    async setSecurityScoreOracle(params:{securityScoreOracle:string,minOracleScore:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setSecurityScoreOracle',params.securityScoreOracle,Utils.toString(params.minOracleScore));
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',Utils.toString(tradeFee));
        return result;
    }
    async setWhiteList(params:{who:string,allow:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setWhiteList',params.who,params.allow);
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
    async updateOracleScore(oracle:string): Promise<TransactionReceipt>{
        let result = await this.methods('updateOracleScore',oracle);
        return result;
    }
    async whitelisted(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('whitelisted',Utils.toString(param1));
        return result;
    }
    async whitelistedInv(param1:string): Promise<BigNumber>{
        let result = await this.methods('whitelistedInv',param1);
        return new BigNumber(result);
    }
    async whitelistedLength(): Promise<BigNumber>{
        let result = await this.methods('whitelistedLength');
        return new BigNumber(result);
    }
}
export module OSWAP_OracleFactory{
    export interface OracleAddedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,oracle:string}
    export interface OracleScoresEvent {_eventName:string,_address:string,_transactionHash:string,oracle:string,score:BigNumber}
    export interface OwnershipTransferredEvent {_eventName:string,_address:string,_transactionHash:string,previousOwner:string,newOwner:string}
    export interface PairCreatedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,pair:string,newSize:BigNumber}
    export interface PairRestartedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface PairShutdownedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface ParamSetEvent {_eventName:string,_address:string,_transactionHash:string,name:string,value:string}
    export interface ParamSet2Event {_eventName:string,_address:string,_transactionHash:string,name:string,value1:string,value2:string}
    export interface RestartedEvent {_eventName:string,_address:string,_transactionHash:string}
    export interface ShutdownedEvent {_eventName:string,_address:string,_transactionHash:string}
    export interface WhitelistedEvent {_eventName:string,_address:string,_transactionHash:string,who:string,allow:boolean}
}