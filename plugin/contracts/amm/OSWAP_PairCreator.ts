import {IWallet, Contract, TransactionReceipt, BigNumber, Event} from "@ijstech/eth-contract";
import Bin from "./OSWAP_PairCreator.json";

export class OSWAP_PairCreator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    async createPair(salt:string): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',this.utils.stringToBytes32(salt));
        return result;
    }
}