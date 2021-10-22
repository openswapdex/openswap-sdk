import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/commons/OSWAP_PausableFactory.json");

export class OSWAP_PausableFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{        	
        return this._deploy(governance);
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): {pair:string}[]{
        return this.parseEvents(receipt, "PairRestarted");
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): {pair:string}[]{
        return this.parseEvents(receipt, "PairShutdowned");
    }
    parseRestartedEvent(receipt: TransactionReceipt): any{
        return this.parseEvents(receipt, "Restarted");
    }
    parseShutdownedEvent(receipt: TransactionReceipt): any{
        return this.parseEvents(receipt, "Shutdowned");
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setLiveForPair(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiveForPair',params.pair,params.live);
        return result;
    }
}