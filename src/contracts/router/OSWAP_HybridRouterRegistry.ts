import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_HybridRouterRegistry.json";

export class OSWAP_HybridRouterRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[]{
        return this.parseEvents(receipt, "CustomPairRegister").map(e=>this.decodeCustomPairRegisterEvent(e));
    }
    decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent{
        let result = event.data;
        return {
            pair: result.pair,
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[]{
        return this.parseEvents(receipt, "PairRegister").map(e=>this.decodePairRegisterEvent(e));
    }
    decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent{
        let result = event.data;
        return {
            factory: result.factory,
            pair: result.pair,
            token0: result.token0,
            token1: result.token1,
            _event: event
        };
    }
    parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[]{
        return this.parseEvents(receipt, "ProtocolRegister").map(e=>this.decodeProtocolRegisterEvent(e));
    }
    decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent{
        let result = event.data;
        return {
            factory: result.factory,
            name: result.name,
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode),
            _event: event
        };
    }
    async customPairs(param1:string): Promise<{fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>{
        let result = await this.call('customPairs',[param1]);
        return {
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode)
        };
    }
    async execute_send(params:string[]): Promise<TransactionReceipt>{
        let result = await this.send('execute',[Utils.stringToBytes32(params)]);
        return result;
    }
    async execute_call(params:string[]): Promise<void>{
        let result = await this.call('execute',[Utils.stringToBytes32(params)]);
        return;
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    async getFee(pairAddress:string): Promise<{fee:BigNumber,feeBase:BigNumber}>{
        let result = await this.call('getFee',[pairAddress]);
        return {
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase)
        };
    }
    async getPairTokens(pairAddress:string[]): Promise<{token0:string[],token1:string[]}>{
        let result = await this.call('getPairTokens',[pairAddress]);
        return {
            token0: result.token0,
            token1: result.token1
        };
    }
    async getTypeCode(pairAddress:string): Promise<BigNumber>{
        let result = await this.call('getTypeCode',[pairAddress]);
        return new BigNumber(result);
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async init_send(params:{name:string[],factory:string[],fee:(number|BigNumber)[],feeBase:(number|BigNumber)[],typeCode:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('init',[Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return result;
    }
    async init_call(params:{name:string[],factory:string[],fee:(number|BigNumber)[],feeBase:(number|BigNumber)[],typeCode:(number|BigNumber)[]}): Promise<void>{
        let result = await this.call('init',[Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return;
    }
    init: {
        (params:{name:string[],factory:string[],fee:(number|BigNumber)[],feeBase:(number|BigNumber)[],typeCode:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{name:string[],factory:string[],fee:(number|BigNumber)[],feeBase:(number|BigNumber)[],typeCode:(number|BigNumber)[]}) => Promise<void>;
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async pairs(param1:string): Promise<{factory:string,token0:string,token1:string}>{
        let result = await this.call('pairs',[param1]);
        return {
            factory: result.factory,
            token0: result.token0,
            token1: result.token1
        };
    }
    async protocolList(param1:number|BigNumber): Promise<string>{
        let result = await this.call('protocolList',[Utils.toString(param1)]);
        return result;
    }
    async protocolListLength(): Promise<BigNumber>{
        let result = await this.call('protocolListLength');
        return new BigNumber(result);
    }
    async protocols(param1:string): Promise<{name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>{
        let result = await this.call('protocols',[param1]);
        return {
            name: result.name,
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode)
        };
    }
    async registerPair_send(params:{token0:string,token1:string,pairAddress:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('registerPair',[params.token0,params.token1,params.pairAddress,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return result;
    }
    async registerPair_call(params:{token0:string,token1:string,pairAddress:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<void>{
        let result = await this.call('registerPair',[params.token0,params.token1,params.pairAddress,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return;
    }
    registerPair: {
        (params:{token0:string,token1:string,pairAddress:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,pairAddress:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}) => Promise<void>;
    }
    async registerPairByAddress_send(params:{factory:string,pairAddress:string}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairByAddress',[params.factory,params.pairAddress]);
        return result;
    }
    async registerPairByAddress_call(params:{factory:string,pairAddress:string}): Promise<void>{
        let result = await this.call('registerPairByAddress',[params.factory,params.pairAddress]);
        return;
    }
    registerPairByAddress: {
        (params:{factory:string,pairAddress:string}): Promise<TransactionReceipt>;
        call: (params:{factory:string,pairAddress:string}) => Promise<void>;
    }
    async registerPairByIndex_send(params:{factory:string,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairByIndex',[params.factory,Utils.toString(params.index)]);
        return result;
    }
    async registerPairByIndex_call(params:{factory:string,index:number|BigNumber}): Promise<void>{
        let result = await this.call('registerPairByIndex',[params.factory,Utils.toString(params.index)]);
        return;
    }
    registerPairByIndex: {
        (params:{factory:string,index:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{factory:string,index:number|BigNumber}) => Promise<void>;
    }
    async registerPairByTokens_send(params:{factory:string,token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairByTokens',[params.factory,params.token0,params.token1]);
        return result;
    }
    async registerPairByTokens_call(params:{factory:string,token0:string,token1:string}): Promise<void>{
        let result = await this.call('registerPairByTokens',[params.factory,params.token0,params.token1]);
        return;
    }
    registerPairByTokens: {
        (params:{factory:string,token0:string,token1:string}): Promise<TransactionReceipt>;
        call: (params:{factory:string,token0:string,token1:string}) => Promise<void>;
    }
    async registerPairByTokensV3_send(params:{factory:string,token0:string,token1:string,pairIndex:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairByTokensV3',[params.factory,params.token0,params.token1,Utils.toString(params.pairIndex)]);
        return result;
    }
    async registerPairByTokensV3_call(params:{factory:string,token0:string,token1:string,pairIndex:number|BigNumber}): Promise<void>{
        let result = await this.call('registerPairByTokensV3',[params.factory,params.token0,params.token1,Utils.toString(params.pairIndex)]);
        return;
    }
    registerPairByTokensV3: {
        (params:{factory:string,token0:string,token1:string,pairIndex:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{factory:string,token0:string,token1:string,pairIndex:number|BigNumber}) => Promise<void>;
    }
    async registerPairsByAddress_send(params:{factory:string,pairAddress:string[]}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairsByAddress',[params.factory,params.pairAddress]);
        return result;
    }
    async registerPairsByAddress_call(params:{factory:string,pairAddress:string[]}): Promise<void>{
        let result = await this.call('registerPairsByAddress',[params.factory,params.pairAddress]);
        return;
    }
    registerPairsByAddress: {
        (params:{factory:string,pairAddress:string[]}): Promise<TransactionReceipt>;
        call: (params:{factory:string,pairAddress:string[]}) => Promise<void>;
    }
    async registerPairsByAddress2_send(params:{factory:string[],pairAddress:string[]}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairsByAddress2',[params.factory,params.pairAddress]);
        return result;
    }
    async registerPairsByAddress2_call(params:{factory:string[],pairAddress:string[]}): Promise<void>{
        let result = await this.call('registerPairsByAddress2',[params.factory,params.pairAddress]);
        return;
    }
    registerPairsByAddress2: {
        (params:{factory:string[],pairAddress:string[]}): Promise<TransactionReceipt>;
        call: (params:{factory:string[],pairAddress:string[]}) => Promise<void>;
    }
    async registerPairsByIndex_send(params:{factory:string,index:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairsByIndex',[params.factory,Utils.toString(params.index)]);
        return result;
    }
    async registerPairsByIndex_call(params:{factory:string,index:(number|BigNumber)[]}): Promise<void>{
        let result = await this.call('registerPairsByIndex',[params.factory,Utils.toString(params.index)]);
        return;
    }
    registerPairsByIndex: {
        (params:{factory:string,index:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{factory:string,index:(number|BigNumber)[]}) => Promise<void>;
    }
    async registerPairsByTokens_send(params:{factory:string,token0:string[],token1:string[]}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairsByTokens',[params.factory,params.token0,params.token1]);
        return result;
    }
    async registerPairsByTokens_call(params:{factory:string,token0:string[],token1:string[]}): Promise<void>{
        let result = await this.call('registerPairsByTokens',[params.factory,params.token0,params.token1]);
        return;
    }
    registerPairsByTokens: {
        (params:{factory:string,token0:string[],token1:string[]}): Promise<TransactionReceipt>;
        call: (params:{factory:string,token0:string[],token1:string[]}) => Promise<void>;
    }
    async registerPairsByTokensV3_send(params:{factory:string,token0:string[],token1:string[],pairIndex:(number|BigNumber)[]}): Promise<TransactionReceipt>{
        let result = await this.send('registerPairsByTokensV3',[params.factory,params.token0,params.token1,Utils.toString(params.pairIndex)]);
        return result;
    }
    async registerPairsByTokensV3_call(params:{factory:string,token0:string[],token1:string[],pairIndex:(number|BigNumber)[]}): Promise<void>{
        let result = await this.call('registerPairsByTokensV3',[params.factory,params.token0,params.token1,Utils.toString(params.pairIndex)]);
        return;
    }
    registerPairsByTokensV3: {
        (params:{factory:string,token0:string[],token1:string[],pairIndex:(number|BigNumber)[]}): Promise<TransactionReceipt>;
        call: (params:{factory:string,token0:string[],token1:string[],pairIndex:(number|BigNumber)[]}) => Promise<void>;
    }
    async registerProtocol_send(params:{name:string,factory:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('registerProtocol',[Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return result;
    }
    async registerProtocol_call(params:{name:string,factory:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<void>{
        let result = await this.call('registerProtocol',[Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode)]);
        return;
    }
    registerProtocol: {
        (params:{name:string,factory:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{name:string,factory:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}) => Promise<void>;
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
    private assign(){
        this.execute = Object.assign(this.execute_send, {call:this.execute_call});
        this.init = Object.assign(this.init_send, {call:this.init_call});
        this.registerPair = Object.assign(this.registerPair_send, {call:this.registerPair_call});
        this.registerPairByAddress = Object.assign(this.registerPairByAddress_send, {call:this.registerPairByAddress_call});
        this.registerPairByIndex = Object.assign(this.registerPairByIndex_send, {call:this.registerPairByIndex_call});
        this.registerPairByTokens = Object.assign(this.registerPairByTokens_send, {call:this.registerPairByTokens_call});
        this.registerPairByTokensV3 = Object.assign(this.registerPairByTokensV3_send, {call:this.registerPairByTokensV3_call});
        this.registerPairsByAddress = Object.assign(this.registerPairsByAddress_send, {call:this.registerPairsByAddress_call});
        this.registerPairsByAddress2 = Object.assign(this.registerPairsByAddress2_send, {call:this.registerPairsByAddress2_call});
        this.registerPairsByIndex = Object.assign(this.registerPairsByIndex_send, {call:this.registerPairsByIndex_call});
        this.registerPairsByTokens = Object.assign(this.registerPairsByTokens_send, {call:this.registerPairsByTokens_call});
        this.registerPairsByTokensV3 = Object.assign(this.registerPairsByTokensV3_send, {call:this.registerPairsByTokensV3_call});
        this.registerProtocol = Object.assign(this.registerProtocol_send, {call:this.registerProtocol_call});
        this.renounceOwnership = Object.assign(this.renounceOwnership_send, {call:this.renounceOwnership_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
    }
}
export module OSWAP_HybridRouterRegistry{
    export interface CustomPairRegisterEvent {pair:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairRegisterEvent {factory:string,pair:string,token0:string,token1:string,_event:Event}
    export interface ProtocolRegisterEvent {factory:string,name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber,_event:Event}
}