import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_OracleFactory.json");

export class OSWAP_OracleFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,pairCreator:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,feePerDelegator:number|BigNumber,protocolFeeTo:string}): Promise<string>{        	
        return this._deploy(params.governance,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),Utils.toString(params.feePerDelegator),params.protocolFeeTo);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): {token0:string,token1:string,oracle:string}[]{
        return this.parseEvents(receipt, "OracleAdded");
    }
    parseOracleScoresEvent(receipt: TransactionReceipt): {oracle:string,score:BigNumber}[]{
        return this.parseEvents(receipt, "OracleScores");
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {previousOwner:string,newOwner:string}[]{
        return this.parseEvents(receipt, "OwnershipTransferred");
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): {token0:string,token1:string,pair:string,newSize:BigNumber}[]{
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
    parseWhitelistedEvent(receipt: TransactionReceipt): {who:string,allow:boolean}[]{
        return this.parseEvents(receipt, "Whitelisted");
    }
    async addOldOracleToNewPair(params:{tokenA:string,tokenB:string,oracle:string}): Promise<TransactionReceipt>{
        let result = await this.methods('addOldOracleToNewPair',params.tokenA,params.tokenB,params.oracle);
        return result;
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',param1);
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
        }
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
        let result = await this.methods('setFeePerDelegator',feePerDelegator);
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
        let result = await this.methods('setProtocolFee',protocolFee);
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
        let result = await this.methods('setTradeFee',tradeFee);
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
        let result = await this.methods('whitelisted',param1);
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