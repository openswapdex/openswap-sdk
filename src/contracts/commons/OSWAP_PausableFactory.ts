import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/commons/OSWAP_PausableFactory.json");

export class OSWAP_PausableFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{        	
        return this._deploy(governance);
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): string[]{
        let events = this.parseEvents(receipt, "PairRestarted");
        return events.map(result => {
            return result[0];
        });
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): string[]{
        let events = this.parseEvents(receipt, "PairShutdowned");
        return events.map(result => {
            return result[0];
        });
    }
    parseRestartedEvent(receipt: TransactionReceipt): any[]{
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return ;;
        });
    }
    parseShutdownedEvent(receipt: TransactionReceipt): any[]{
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return ;;
        });
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