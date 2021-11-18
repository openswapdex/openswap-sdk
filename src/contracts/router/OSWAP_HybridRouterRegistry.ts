import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/router/OSWAP_HybridRouterRegistry.json");

export class OSWAP_HybridRouterRegistry extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{        	
        return this._deploy(governance);
    }
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): {pair:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}[]{
        return this.parseEvents(receipt, "CustomPairRegister");
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): {previousOwner:string,newOwner:string}[]{
        return this.parseEvents(receipt, "OwnershipTransferred");
    }
    parsePairRegisterEvent(receipt: TransactionReceipt): {factory:string,pair:string,token0:string,token1:string}[]{
        return this.parseEvents(receipt, "PairRegister");
    }
    parseProtocolRegisterEvent(receipt: TransactionReceipt): {factory:string,name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}[]{
        return this.parseEvents(receipt, "ProtocolRegister");
    }
    async customPairs(param1:string): Promise<{fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>{
        let result = await this.methods('customPairs',param1);
        return {
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode)
        }
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',Utils.stringToBytes32(params));
        return result;
    }
    async getFee(pairAddress:string): Promise<{fee:BigNumber,feeBase:BigNumber}>{
        let result = await this.methods('getFee',pairAddress);
        return {
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase)
        }
    }
    async getPairTokens(pairAddress:string[]): Promise<{token0:string[],token1:string[]}>{
        let result = await this.methods('getPairTokens',pairAddress);
        return {
            token0: result.token0,
            token1: result.token1
        }
    }
    async getTypeCode(pairAddress:string): Promise<BigNumber>{
        let result = await this.methods('getTypeCode',pairAddress);
        return new BigNumber(result);
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async init(params:{name:string[],factory:string[],fee:number[]|BigNumber[],feeBase:number[]|BigNumber[],typeCode:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('init',Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode));
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async pairs(param1:string): Promise<{factory:string,token0:string,token1:string}>{
        let result = await this.methods('pairs',param1);
        return {
            factory: result.factory,
            token0: result.token0,
            token1: result.token1
        }
    }
    async protocolList(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('protocolList',Utils.toString(param1));
        return result;
    }
    async protocolListLength(): Promise<BigNumber>{
        let result = await this.methods('protocolListLength');
        return new BigNumber(result);
    }
    async protocols(param1:string): Promise<{name:string,fee:BigNumber,feeBase:BigNumber,typeCode:BigNumber}>{
        let result = await this.methods('protocols',param1);
        return {
            name: result.name,
            fee: new BigNumber(result.fee),
            feeBase: new BigNumber(result.feeBase),
            typeCode: new BigNumber(result.typeCode)
        }
    }
    async registerPair(params:{token0:string,token1:string,pairAddress:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPair',params.token0,params.token1,params.pairAddress,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode));
        return result;
    }
    async registerPairByAddress(params:{factory:string,pairAddress:string}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairByAddress',params.factory,params.pairAddress);
        return result;
    }
    async registerPairByIndex(params:{factory:string,index:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairByIndex',params.factory,Utils.toString(params.index));
        return result;
    }
    async registerPairByTokens(params:{factory:string,token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairByTokens',params.factory,params.token0,params.token1);
        return result;
    }
    async registerPairByTokensV3(params:{factory:string,token0:string,token1:string,pairIndex:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairByTokensV3',params.factory,params.token0,params.token1,Utils.toString(params.pairIndex));
        return result;
    }
    async registerPairsByAddress(params:{factory:string,pairAddress:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairsByAddress',params.factory,params.pairAddress);
        return result;
    }
    async registerPairsByAddress2(params:{factory:string[],pairAddress:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairsByAddress2',params.factory,params.pairAddress);
        return result;
    }
    async registerPairsByIndex(params:{factory:string,index:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairsByIndex',params.factory,Utils.toString(params.index));
        return result;
    }
    async registerPairsByTokens(params:{factory:string,token0:string[],token1:string[]}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairsByTokens',params.factory,params.token0,params.token1);
        return result;
    }
    async registerPairsByTokensV3(params:{factory:string,token0:string[],token1:string[],pairIndex:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('registerPairsByTokensV3',params.factory,params.token0,params.token1,Utils.toString(params.pairIndex));
        return result;
    }
    async registerProtocol(params:{name:string,factory:string,fee:number|BigNumber,feeBase:number|BigNumber,typeCode:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('registerProtocol',Utils.stringToBytes32(params.name),params.factory,Utils.toString(params.fee),Utils.toString(params.feeBase),Utils.toString(params.typeCode));
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
}