import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/range/OSWAP_VotingExecutor3.json");

export class OSWAP_VotingExecutor3 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,factory:string,hybridRegistry:string}): Promise<string>{        	
        return this._deploy(params.governance,params.factory,params.hybridRegistry);
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',params);
        return result;
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async hybridRegistry(): Promise<string>{
        let result = await this.methods('hybridRegistry');
        return result;
    }
}