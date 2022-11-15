import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_OracleFactory.json";

export interface IDeployParams {governance:string;pairCreator:string;tradeFee:number|BigNumber;protocolFee:number|BigNumber;feePerDelegator:number|BigNumber;protocolFeeTo:string}
export interface IAddOldOracleToNewPairParams {tokenA:string;tokenB:string;oracle:string}
export interface ICheckAndGetOracleParams {tokenA:string;tokenB:string}
export interface ICheckAndGetOracleSwapParamsParams {tokenA:string;tokenB:string}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface IOraclesParams {param1:string;param2:string}
export interface ISetLiveForPairParams {pair:string;live:boolean}
export interface ISetMinLotSizeParams {token:string;minLotSize:number|BigNumber}
export interface ISetOracleParams {tokenA:string;tokenB:string;oracle:string}
export interface ISetOracleLiquidityProviderParams {oracleRouter:string;oracleLiquidityProvider:string}
export interface ISetSecurityScoreOracleParams {securityScoreOracle:string;minOracleScore:number|BigNumber}
export interface ISetWhiteListParams {who:string;allow:boolean}
export class OSWAP_OracleFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.governance,params.pairCreator,this.wallet.utils.toString(params.tradeFee),this.wallet.utils.toString(params.protocolFee),this.wallet.utils.toString(params.feePerDelegator),params.protocolFeeTo]);
    }
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[]{
        return this.parseEvents(receipt, "OracleAdded").map(e=>this.decodeOracleAddedEvent(e));
    }
    decodeOracleAddedEvent(event: Event): OSWAP_OracleFactory.OracleAddedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            oracle: result.oracle,
            _event: event
        };
    }
    parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[]{
        return this.parseEvents(receipt, "OracleScores").map(e=>this.decodeOracleScoresEvent(e));
    }
    decodeOracleScoresEvent(event: Event): OSWAP_OracleFactory.OracleScoresEvent{
        let result = event.data;
        return {
            oracle: result.oracle,
            score: new BigNumber(result.score),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_OracleFactory.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): OSWAP_OracleFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[]{
        return this.parseEvents(receipt, "PairRestarted").map(e=>this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event: Event): OSWAP_OracleFactory.PairRestartedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[]{
        return this.parseEvents(receipt, "PairShutdowned").map(e=>this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event: Event): OSWAP_OracleFactory.PairShutdownedEvent{
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_OracleFactory.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_OracleFactory.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[]{
        return this.parseEvents(receipt, "Restarted").map(e=>this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event: Event): OSWAP_OracleFactory.RestartedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[]{
        return this.parseEvents(receipt, "Shutdowned").map(e=>this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event: Event): OSWAP_OracleFactory.ShutdownedEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[]{
        return this.parseEvents(receipt, "Whitelisted").map(e=>this.decodeWhitelistedEvent(e));
    }
    decodeWhitelistedEvent(event: Event): OSWAP_OracleFactory.WhitelistedEvent{
        let result = event.data;
        return {
            who: result.who,
            allow: result.allow,
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
    allWhiteListed: {
        (): Promise<{list:string[],allowed:boolean[]}>;
    }
    checkAndGetOracle: {
        (params: ICheckAndGetOracleParams): Promise<string>;
    }
    checkAndGetOracleSwapParams: {
        (params: ICheckAndGetOracleSwapParamsParams): Promise<{oracle_:string,tradeFee_:BigNumber,protocolFee_:BigNumber}>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    feePerDelegator: {
        (): Promise<BigNumber>;
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
    isOracle: {
        (param1:string): Promise<boolean>;
    }
    isWhitelisted: {
        (param1:string): Promise<boolean>;
    }
    minLotSize: {
        (param1:string): Promise<BigNumber>;
    }
    minOracleScore: {
        (): Promise<BigNumber>;
    }
    oracleLiquidityProvider: {
        (): Promise<string>;
    }
    oracleScores: {
        (param1:string): Promise<BigNumber>;
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
    securityScoreOracle: {
        (): Promise<string>;
    }
    setFeePerDelegator: {
        (feePerDelegator:number|BigNumber): Promise<TransactionReceipt>;
        call: (feePerDelegator:number|BigNumber) => Promise<void>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    setLiveForPair: {
        (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams) => Promise<void>;
    }
    setMinLotSize: {
        (params: ISetMinLotSizeParams): Promise<TransactionReceipt>;
        call: (params: ISetMinLotSizeParams) => Promise<void>;
    }
    setOracle: {
        (params: ISetOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams) => Promise<void>;
    }
    setOracleLiquidityProvider: {
        (params: ISetOracleLiquidityProviderParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleLiquidityProviderParams) => Promise<void>;
    }
    setProtocolFee: {
        (protocolFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (protocolFee:number|BigNumber) => Promise<void>;
    }
    setProtocolFeeTo: {
        (protocolFeeTo:string): Promise<TransactionReceipt>;
        call: (protocolFeeTo:string) => Promise<void>;
    }
    setSecurityScoreOracle: {
        (params: ISetSecurityScoreOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetSecurityScoreOracleParams) => Promise<void>;
    }
    setTradeFee: {
        (tradeFee:number|BigNumber): Promise<TransactionReceipt>;
        call: (tradeFee:number|BigNumber) => Promise<void>;
    }
    setWhiteList: {
        (params: ISetWhiteListParams): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams) => Promise<void>;
    }
    tradeFee: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    updateOracleScore: {
        (oracle:string): Promise<TransactionReceipt>;
        call: (oracle:string) => Promise<void>;
    }
    whitelisted: {
        (param1:number|BigNumber): Promise<string>;
    }
    whitelistedInv: {
        (param1:string): Promise<BigNumber>;
    }
    whitelistedLength: {
        (): Promise<BigNumber>;
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
        let allWhiteListed_call = async (): Promise<{list:string[],allowed:boolean[]}> => {
            let result = await this.call('allWhiteListed');
            return {
                list: result.list,
                allowed: result.allowed
            };
        }
        this.allWhiteListed = allWhiteListed_call
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
        let feePerDelegator_call = async (): Promise<BigNumber> => {
            let result = await this.call('feePerDelegator');
            return new BigNumber(result);
        }
        this.feePerDelegator = feePerDelegator_call
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
        let isOracle_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isOracle',[param1]);
            return result;
        }
        this.isOracle = isOracle_call
        let isWhitelisted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isWhitelisted',[param1]);
            return result;
        }
        this.isWhitelisted = isWhitelisted_call
        let minLotSize_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('minLotSize',[param1]);
            return new BigNumber(result);
        }
        this.minLotSize = minLotSize_call
        let minOracleScore_call = async (): Promise<BigNumber> => {
            let result = await this.call('minOracleScore');
            return new BigNumber(result);
        }
        this.minOracleScore = minOracleScore_call
        let oracleLiquidityProvider_call = async (): Promise<string> => {
            let result = await this.call('oracleLiquidityProvider');
            return result;
        }
        this.oracleLiquidityProvider = oracleLiquidityProvider_call
        let oracleScores_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('oracleScores',[param1]);
            return new BigNumber(result);
        }
        this.oracleScores = oracleScores_call
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
        let securityScoreOracle_call = async (): Promise<string> => {
            let result = await this.call('securityScoreOracle');
            return result;
        }
        this.securityScoreOracle = securityScoreOracle_call
        let tradeFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('tradeFee');
            return new BigNumber(result);
        }
        this.tradeFee = tradeFee_call
        let whitelisted_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('whitelisted',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.whitelisted = whitelisted_call
        let whitelistedInv_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('whitelistedInv',[param1]);
            return new BigNumber(result);
        }
        this.whitelistedInv = whitelistedInv_call
        let whitelistedLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('whitelistedLength');
            return new BigNumber(result);
        }
        this.whitelistedLength = whitelistedLength_call
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
        let setFeePerDelegator_send = async (feePerDelegator:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setFeePerDelegator',[this.wallet.utils.toString(feePerDelegator)]);
            return result;
        }
        let setFeePerDelegator_call = async (feePerDelegator:number|BigNumber): Promise<void> => {
            let result = await this.call('setFeePerDelegator',[this.wallet.utils.toString(feePerDelegator)]);
            return;
        }
        this.setFeePerDelegator = Object.assign(setFeePerDelegator_send, {
            call:setFeePerDelegator_call
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
        let setMinLotSizeParams = (params: ISetMinLotSizeParams) => [params.token,this.wallet.utils.toString(params.minLotSize)];
        let setMinLotSize_send = async (params: ISetMinLotSizeParams): Promise<TransactionReceipt> => {
            let result = await this.send('setMinLotSize',setMinLotSizeParams(params));
            return result;
        }
        let setMinLotSize_call = async (params: ISetMinLotSizeParams): Promise<void> => {
            let result = await this.call('setMinLotSize',setMinLotSizeParams(params));
            return;
        }
        this.setMinLotSize = Object.assign(setMinLotSize_send, {
            call:setMinLotSize_call
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
        let setOracleLiquidityProviderParams = (params: ISetOracleLiquidityProviderParams) => [params.oracleRouter,params.oracleLiquidityProvider];
        let setOracleLiquidityProvider_send = async (params: ISetOracleLiquidityProviderParams): Promise<TransactionReceipt> => {
            let result = await this.send('setOracleLiquidityProvider',setOracleLiquidityProviderParams(params));
            return result;
        }
        let setOracleLiquidityProvider_call = async (params: ISetOracleLiquidityProviderParams): Promise<void> => {
            let result = await this.call('setOracleLiquidityProvider',setOracleLiquidityProviderParams(params));
            return;
        }
        this.setOracleLiquidityProvider = Object.assign(setOracleLiquidityProvider_send, {
            call:setOracleLiquidityProvider_call
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
        let setSecurityScoreOracleParams = (params: ISetSecurityScoreOracleParams) => [params.securityScoreOracle,this.wallet.utils.toString(params.minOracleScore)];
        let setSecurityScoreOracle_send = async (params: ISetSecurityScoreOracleParams): Promise<TransactionReceipt> => {
            let result = await this.send('setSecurityScoreOracle',setSecurityScoreOracleParams(params));
            return result;
        }
        let setSecurityScoreOracle_call = async (params: ISetSecurityScoreOracleParams): Promise<void> => {
            let result = await this.call('setSecurityScoreOracle',setSecurityScoreOracleParams(params));
            return;
        }
        this.setSecurityScoreOracle = Object.assign(setSecurityScoreOracle_send, {
            call:setSecurityScoreOracle_call
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
        let setWhiteListParams = (params: ISetWhiteListParams) => [params.who,params.allow];
        let setWhiteList_send = async (params: ISetWhiteListParams): Promise<TransactionReceipt> => {
            let result = await this.send('setWhiteList',setWhiteListParams(params));
            return result;
        }
        let setWhiteList_call = async (params: ISetWhiteListParams): Promise<void> => {
            let result = await this.call('setWhiteList',setWhiteListParams(params));
            return;
        }
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call:setWhiteList_call
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
        let updateOracleScore_send = async (oracle:string): Promise<TransactionReceipt> => {
            let result = await this.send('updateOracleScore',[oracle]);
            return result;
        }
        let updateOracleScore_call = async (oracle:string): Promise<void> => {
            let result = await this.call('updateOracleScore',[oracle]);
            return;
        }
        this.updateOracleScore = Object.assign(updateOracleScore_send, {
            call:updateOracleScore_call
        });
    }
}
export module OSWAP_OracleFactory{
    export interface OracleAddedEvent {token0:string,token1:string,oracle:string,_event:Event}
    export interface OracleScoresEvent {oracle:string,score:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,newSize:BigNumber,_event:Event}
    export interface PairRestartedEvent {pair:string,_event:Event}
    export interface PairShutdownedEvent {pair:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RestartedEvent {_event:Event}
    export interface ShutdownedEvent {_event:Event}
    export interface WhitelistedEvent {who:string,allow:boolean,_event:Event}
}