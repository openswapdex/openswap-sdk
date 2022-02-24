import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/restricted/OSWAP_VotingExecutor4.json");

export class OSWAP_VotingExecutor4 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,factory:string,configStore:string}): Promise<string>{
        return this._deploy(params.governance,params.factory,params.configStore);
    }
    async configStore(): Promise<string>{
        let result = await this.methods('configStore');
        return result;
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',Utils.stringToBytes32(params));
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
}