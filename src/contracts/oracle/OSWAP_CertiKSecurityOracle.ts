import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_CertiKSecurityOracle.json";

export class OSWAP_CertiKSecurityOracle extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(oracleAddress:string): Promise<string>{
        return this.__deploy([oracleAddress]);
    }
    getSecurityScore: {
        (oracle:string): Promise<BigNumber>;
    }
    oracleAddress: {
        (): Promise<string>;
    }
    private assign(){
        let getSecurityScore_call = async (oracle:string): Promise<BigNumber> => {
            let result = await this.call('getSecurityScore',[oracle]);
            return new BigNumber(result);
        }
        this.getSecurityScore = getSecurityScore_call
        let oracleAddress_call = async (): Promise<string> => {
            let result = await this.call('oracleAddress');
            return result;
        }
        this.oracleAddress = oracleAddress_call
    }
}