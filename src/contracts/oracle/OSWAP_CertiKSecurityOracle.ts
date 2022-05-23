import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_CertiKSecurityOracle.json";

export class OSWAP_CertiKSecurityOracle extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(oracleAddress:string): Promise<string>{
        return this.__deploy([oracleAddress]);
    }
    async getSecurityScore(oracle:string): Promise<BigNumber>{
        let result = await this.call('getSecurityScore',[oracle]);
        return new BigNumber(result);
    }
    async oracleAddress(): Promise<string>{
        let result = await this.call('oracleAddress');
        return result;
    }
    private assign(){
    }
}