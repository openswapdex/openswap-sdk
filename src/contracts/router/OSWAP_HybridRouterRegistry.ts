import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_HybridRouterRegistry.json";

export interface IInitParams {name:string[];factory:string[];fee:(number|BigNumber)[];feeBase:(number|BigNumber)[];typeCode:(number|BigNumber)[]}
export interface IRegisterPairParams {token0:string;token1:string;pairAddress:string;fee:number|BigNumber;feeBase:number|BigNumber;typeCode:number|BigNumber}
export interface IRegisterPairByAddressParams {factory:string;pairAddress:string}
export interface IRegisterPairByIndexParams {factory:string;index:number|BigNumber}
export interface IRegisterPairByTokensParams {factory:string;token0:string;token1:string}
export interface IRegisterPairByTokensV3Params {factory:string;token0:string;token1:string;pairIndex:number|BigNumber}
export interface IRegisterPairsByAddressParams {factory:string;pairAddress:string[]}
export interface IRegisterPairsByAddress2Params {factory:string[];pairAddress:string[]}
export interface IRegisterPairsByIndexParams {factory:string;index:(number|BigNumber)[]}
export interface IRegisterPairsByTokensParams {factory:string;token0:string[];token1:string[]}
export interface IRegisterPairsByTokensV3Params {factory:string;token0:string[];token1:string[];pairIndex:(number|BigNumber)[]}
export interface IRegisterProtocolParams {name:string;factory:string;fee:number|BigNumber;feeBase:number|BigNumber;typeCode:number|BigNumber}
export class OSWAP_HybridRouterRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
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
    customPairs: {
        (param1:string): Promise<{fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>;
    }
    execute: {
        (params:string[]): Promise<TransactionReceipt>;
        call: (params:string[]) => Promise<void>;
    }
    getFee: {
        (pairAddress:string): Promise<{fee:BigNumber,feeBase:BigNumber}>;
    }
    getPairTokens: {
        (pairAddress:string[]): Promise<{token0:string[],token1:string[]}>;
    }
    getTypeCode: {
        (pairAddress:string): Promise<BigNumber>;
    }
    governance: {
        (): Promise<string>;
    }
    init: {
        (params: IInitParams): Promise<TransactionReceipt>;
        call: (params: IInitParams) => Promise<void>;
    }
    owner: {
        (): Promise<string>;
    }
    pairs: {
        (param1:string): Promise<{factory:string,token0:string,token1:string}>;
    }
    protocolList: {
        (param1:number|BigNumber): Promise<string>;
    }
    protocolListLength: {
        (): Promise<BigNumber>;
    }
    protocols: {
        (param1:string): Promise<{name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>;
    }
    registerPair: {
        (params: IRegisterPairParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairParams) => Promise<void>;
    }
    registerPairByAddress: {
        (params: IRegisterPairByAddressParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByAddressParams) => Promise<void>;
    }
    registerPairByIndex: {
        (params: IRegisterPairByIndexParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByIndexParams) => Promise<void>;
    }
    registerPairByTokens: {
        (params: IRegisterPairByTokensParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensParams) => Promise<void>;
    }
    registerPairByTokensV3: {
        (params: IRegisterPairByTokensV3Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensV3Params) => Promise<void>;
    }
    registerPairsByAddress: {
        (params: IRegisterPairsByAddressParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddressParams) => Promise<void>;
    }
    registerPairsByAddress2: {
        (params: IRegisterPairsByAddress2Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddress2Params) => Promise<void>;
    }
    registerPairsByIndex: {
        (params: IRegisterPairsByIndexParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByIndexParams) => Promise<void>;
    }
    registerPairsByTokens: {
        (params: IRegisterPairsByTokensParams): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensParams) => Promise<void>;
    }
    registerPairsByTokensV3: {
        (params: IRegisterPairsByTokensV3Params): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensV3Params) => Promise<void>;
    }
    registerProtocol: {
        (params: IRegisterProtocolParams): Promise<TransactionReceipt>;
        call: (params: IRegisterProtocolParams) => Promise<void>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        let customPairs_call = async (param1:string): Promise<{fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}> => {
            let result = await this.call('customPairs',[param1]);
            return {
                fee: new BigNumber(result.fee),
                feeBase: new BigNumber(result.feeBase),
                typeCode: new BigNumber(result.typeCode)
            };
        }
        this.customPairs = customPairs_call
        let getFee_call = async (pairAddress:string): Promise<{fee:BigNumber,feeBase:BigNumber}> => {
            let result = await this.call('getFee',[pairAddress]);
            return {
                fee: new BigNumber(result.fee),
                feeBase: new BigNumber(result.feeBase)
            };
        }
        this.getFee = getFee_call
        let getPairTokens_call = async (pairAddress:string[]): Promise<{token0:string[],token1:string[]}> => {
            let result = await this.call('getPairTokens',[pairAddress]);
            return {
                token0: result.token0,
                token1: result.token1
            };
        }
        this.getPairTokens = getPairTokens_call
        let getTypeCode_call = async (pairAddress:string): Promise<BigNumber> => {
            let result = await this.call('getTypeCode',[pairAddress]);
            return new BigNumber(result);
        }
        this.getTypeCode = getTypeCode_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let pairs_call = async (param1:string): Promise<{factory:string,token0:string,token1:string}> => {
            let result = await this.call('pairs',[param1]);
            return {
                factory: result.factory,
                token0: result.token0,
                token1: result.token1
            };
        }
        this.pairs = pairs_call
        let protocolList_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('protocolList',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.protocolList = protocolList_call
        let protocolListLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolListLength');
            return new BigNumber(result);
        }
        this.protocolListLength = protocolListLength_call
        let protocols_call = async (param1:string): Promise<{name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}> => {
            let result = await this.call('protocols',[param1]);
            return {
                name: result.name,
                fee: new BigNumber(result.fee),
                feeBase: new BigNumber(result.feeBase),
                typeCode: new BigNumber(result.typeCode)
            };
        }
        this.protocols = protocols_call
        let execute_send = async (params:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('execute',[this.wallet.utils.stringToBytes32(params)]);
            return result;
        }
        let execute_call = async (params:string[]): Promise<void> => {
            let result = await this.call('execute',[this.wallet.utils.stringToBytes32(params)]);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
        let initParams = (params: IInitParams) => [this.wallet.utils.stringToBytes32(params.name),params.factory,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.feeBase),this.wallet.utils.toString(params.typeCode)];
        let init_send = async (params: IInitParams): Promise<TransactionReceipt> => {
            let result = await this.send('init',initParams(params));
            return result;
        }
        let init_call = async (params: IInitParams): Promise<void> => {
            let result = await this.call('init',initParams(params));
            return;
        }
        this.init = Object.assign(init_send, {
            call:init_call
        });
        let registerPairParams = (params: IRegisterPairParams) => [params.token0,params.token1,params.pairAddress,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.feeBase),this.wallet.utils.toString(params.typeCode)];
        let registerPair_send = async (params: IRegisterPairParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPair',registerPairParams(params));
            return result;
        }
        let registerPair_call = async (params: IRegisterPairParams): Promise<void> => {
            let result = await this.call('registerPair',registerPairParams(params));
            return;
        }
        this.registerPair = Object.assign(registerPair_send, {
            call:registerPair_call
        });
        let registerPairByAddressParams = (params: IRegisterPairByAddressParams) => [params.factory,params.pairAddress];
        let registerPairByAddress_send = async (params: IRegisterPairByAddressParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairByAddress',registerPairByAddressParams(params));
            return result;
        }
        let registerPairByAddress_call = async (params: IRegisterPairByAddressParams): Promise<void> => {
            let result = await this.call('registerPairByAddress',registerPairByAddressParams(params));
            return;
        }
        this.registerPairByAddress = Object.assign(registerPairByAddress_send, {
            call:registerPairByAddress_call
        });
        let registerPairByIndexParams = (params: IRegisterPairByIndexParams) => [params.factory,this.wallet.utils.toString(params.index)];
        let registerPairByIndex_send = async (params: IRegisterPairByIndexParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairByIndex',registerPairByIndexParams(params));
            return result;
        }
        let registerPairByIndex_call = async (params: IRegisterPairByIndexParams): Promise<void> => {
            let result = await this.call('registerPairByIndex',registerPairByIndexParams(params));
            return;
        }
        this.registerPairByIndex = Object.assign(registerPairByIndex_send, {
            call:registerPairByIndex_call
        });
        let registerPairByTokensParams = (params: IRegisterPairByTokensParams) => [params.factory,params.token0,params.token1];
        let registerPairByTokens_send = async (params: IRegisterPairByTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairByTokens',registerPairByTokensParams(params));
            return result;
        }
        let registerPairByTokens_call = async (params: IRegisterPairByTokensParams): Promise<void> => {
            let result = await this.call('registerPairByTokens',registerPairByTokensParams(params));
            return;
        }
        this.registerPairByTokens = Object.assign(registerPairByTokens_send, {
            call:registerPairByTokens_call
        });
        let registerPairByTokensV3Params = (params: IRegisterPairByTokensV3Params) => [params.factory,params.token0,params.token1,this.wallet.utils.toString(params.pairIndex)];
        let registerPairByTokensV3_send = async (params: IRegisterPairByTokensV3Params): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairByTokensV3',registerPairByTokensV3Params(params));
            return result;
        }
        let registerPairByTokensV3_call = async (params: IRegisterPairByTokensV3Params): Promise<void> => {
            let result = await this.call('registerPairByTokensV3',registerPairByTokensV3Params(params));
            return;
        }
        this.registerPairByTokensV3 = Object.assign(registerPairByTokensV3_send, {
            call:registerPairByTokensV3_call
        });
        let registerPairsByAddressParams = (params: IRegisterPairsByAddressParams) => [params.factory,params.pairAddress];
        let registerPairsByAddress_send = async (params: IRegisterPairsByAddressParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairsByAddress',registerPairsByAddressParams(params));
            return result;
        }
        let registerPairsByAddress_call = async (params: IRegisterPairsByAddressParams): Promise<void> => {
            let result = await this.call('registerPairsByAddress',registerPairsByAddressParams(params));
            return;
        }
        this.registerPairsByAddress = Object.assign(registerPairsByAddress_send, {
            call:registerPairsByAddress_call
        });
        let registerPairsByAddress2Params = (params: IRegisterPairsByAddress2Params) => [params.factory,params.pairAddress];
        let registerPairsByAddress2_send = async (params: IRegisterPairsByAddress2Params): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairsByAddress2',registerPairsByAddress2Params(params));
            return result;
        }
        let registerPairsByAddress2_call = async (params: IRegisterPairsByAddress2Params): Promise<void> => {
            let result = await this.call('registerPairsByAddress2',registerPairsByAddress2Params(params));
            return;
        }
        this.registerPairsByAddress2 = Object.assign(registerPairsByAddress2_send, {
            call:registerPairsByAddress2_call
        });
        let registerPairsByIndexParams = (params: IRegisterPairsByIndexParams) => [params.factory,this.wallet.utils.toString(params.index)];
        let registerPairsByIndex_send = async (params: IRegisterPairsByIndexParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairsByIndex',registerPairsByIndexParams(params));
            return result;
        }
        let registerPairsByIndex_call = async (params: IRegisterPairsByIndexParams): Promise<void> => {
            let result = await this.call('registerPairsByIndex',registerPairsByIndexParams(params));
            return;
        }
        this.registerPairsByIndex = Object.assign(registerPairsByIndex_send, {
            call:registerPairsByIndex_call
        });
        let registerPairsByTokensParams = (params: IRegisterPairsByTokensParams) => [params.factory,params.token0,params.token1];
        let registerPairsByTokens_send = async (params: IRegisterPairsByTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairsByTokens',registerPairsByTokensParams(params));
            return result;
        }
        let registerPairsByTokens_call = async (params: IRegisterPairsByTokensParams): Promise<void> => {
            let result = await this.call('registerPairsByTokens',registerPairsByTokensParams(params));
            return;
        }
        this.registerPairsByTokens = Object.assign(registerPairsByTokens_send, {
            call:registerPairsByTokens_call
        });
        let registerPairsByTokensV3Params = (params: IRegisterPairsByTokensV3Params) => [params.factory,params.token0,params.token1,this.wallet.utils.toString(params.pairIndex)];
        let registerPairsByTokensV3_send = async (params: IRegisterPairsByTokensV3Params): Promise<TransactionReceipt> => {
            let result = await this.send('registerPairsByTokensV3',registerPairsByTokensV3Params(params));
            return result;
        }
        let registerPairsByTokensV3_call = async (params: IRegisterPairsByTokensV3Params): Promise<void> => {
            let result = await this.call('registerPairsByTokensV3',registerPairsByTokensV3Params(params));
            return;
        }
        this.registerPairsByTokensV3 = Object.assign(registerPairsByTokensV3_send, {
            call:registerPairsByTokensV3_call
        });
        let registerProtocolParams = (params: IRegisterProtocolParams) => [this.wallet.utils.stringToBytes32(params.name),params.factory,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.feeBase),this.wallet.utils.toString(params.typeCode)];
        let registerProtocol_send = async (params: IRegisterProtocolParams): Promise<TransactionReceipt> => {
            let result = await this.send('registerProtocol',registerProtocolParams(params));
            return result;
        }
        let registerProtocol_call = async (params: IRegisterProtocolParams): Promise<void> => {
            let result = await this.call('registerProtocol',registerProtocolParams(params));
            return;
        }
        this.registerProtocol = Object.assign(registerProtocol_send, {
            call:registerProtocol_call
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
export module OSWAP_HybridRouterRegistry{
    export interface CustomPairRegisterEvent {pair:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface PairRegisterEvent {factory:string,pair:string,token0:string,token1:string,_event:Event}
    export interface ProtocolRegisterEvent {factory:string,name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber,_event:Event}
}