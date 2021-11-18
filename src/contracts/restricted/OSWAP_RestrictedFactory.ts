import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/restricted/OSWAP_RestrictedFactory.json");

export class OSWAP_RestrictedFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,whitelistFactory:string,pairCreator:string,configStore:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{        	
        return this._deploy(params.governance,params.whitelistFactory,params.pairCreator,params.configStore,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): {token0:string,token1:string,oracle:string}[]{
        return this.parseEvents(receipt, "OracleAdded");
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {previousOwner:string,newOwner:string}[]{
        return this.parseEvents(receipt, "OwnershipTransferred");
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): {token0:string,token1:string,pair:string,newPairSize:BigNumber,newSize:BigNumber}[]{
        return this.parseEvents(receipt, "PairCreated");
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): {pair:string}[]{
        return this.parseEvents(receipt, "PairRestarted");
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): {pair:string}[]{
        return this.parseEvents(receipt, "PairShutdowned");
    }
    parseParamSetEvent(receipt: TransactionReceipt): {name:string,value:string}[]{
        return this.parseEvents(receipt, "ParamSet");
    }
    parseParamSet2Event(receipt: TransactionReceipt): {name:string,value1:string,value2:string}[]{
        return this.parseEvents(receipt, "ParamSet2");
    }
    parseRestartedEvent(receipt: TransactionReceipt): any{
        return this.parseEvents(receipt, "Restarted");
    }
    parseShutdownedEvent(receipt: TransactionReceipt): any{
        return this.parseEvents(receipt, "Shutdowned");
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
        }
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
        }
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