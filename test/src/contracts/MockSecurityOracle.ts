import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MockSecurityOracle.json";
export interface ISetSecurityScoreParams {oracle:string;score:number|BigNumber}
export class MockSecurityOracle extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    getSecurityScore: {
        (oracle:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    oracleAddress: {
        (options?: TransactionOptions): Promise<string>;
    }
    setSecurityScore: {
        (params: ISetSecurityScoreParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetSecurityScoreParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let getSecurityScore_call = async (oracle:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getSecurityScore',[oracle],options);
            return new BigNumber(result);
        }
        this.getSecurityScore = getSecurityScore_call
        let oracleAddress_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('oracleAddress',[],options);
            return result;
        }
        this.oracleAddress = oracleAddress_call
        let setSecurityScoreParams = (params: ISetSecurityScoreParams) => [params.oracle,this.wallet.utils.toString(params.score)];
        let setSecurityScore_send = async (params: ISetSecurityScoreParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setSecurityScore',setSecurityScoreParams(params),options);
            return result;
        }
        let setSecurityScore_call = async (params: ISetSecurityScoreParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setSecurityScore',setSecurityScoreParams(params),options);
            return;
        }
        this.setSecurityScore = Object.assign(setSecurityScore_send, {
            call:setSecurityScore_call
        });
    }
}