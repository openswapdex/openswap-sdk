import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/oracle/OSWAP_OraclePairCreator.json");

export class OSWAP_OraclePairCreator extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    async createPair(salt:string): Promise<string>{
        let result = await this.methods('createPair',salt);
        return result;
    }
}