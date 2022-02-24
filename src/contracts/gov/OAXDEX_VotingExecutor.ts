import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_VotingExecutor.json");

export class OAXDEX_VotingExecutor extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,admin:string}): Promise<string>{
        return this._deploy(params.governance,params.admin);
    }
    async admin(): Promise<string>{
        let result = await this.methods('admin');
        return result;
    }
    async execute(params:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('execute',Utils.stringToBytes32(params));
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
}