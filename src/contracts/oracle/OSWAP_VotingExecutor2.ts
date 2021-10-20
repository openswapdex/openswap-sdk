import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_VotingExecutor2.json");

export class OSWAP_VotingExecutor2 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(factory:string): Promise<string>{        	
        return this._deploy(factory);
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
}