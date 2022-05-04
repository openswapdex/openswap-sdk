import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_CertiKSecurityOracle.json";

export class OSWAP_CertiKSecurityOracle extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(oracleAddress:string): Promise<string>{
        return this._deploy(oracleAddress);
    }
    async getSecurityScore(oracle:string): Promise<BigNumber>{
        let result = await this.methods('getSecurityScore',oracle);
        return new BigNumber(result);
    }
    async oracleAddress(): Promise<string>{
        let result = await this.methods('oracleAddress');
        return result;
    }
}