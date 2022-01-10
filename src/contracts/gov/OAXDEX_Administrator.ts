import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_Administrator.json");

export class OAXDEX_Administrator extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[]{
        let events = this.parseEvents(receipt, "AddAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin
            };
        });
    }
    parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[]{
        let events = this.parseEvents(receipt, "RemoveAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin
            };
        });
    }
    parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[]{
        let events = this.parseEvents(receipt, "SetMaxAdmin");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                maxAdmin: new BigNumber(result.maxAdmin)
            };
        });
    }
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[]{
        let events = this.parseEvents(receipt, "VotedFactoryRestart");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                factory: result.factory,
                YorN: result.YorN
            };
        });
    }
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[]{
        let events = this.parseEvents(receipt, "VotedFactoryShutdown");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                factory: result.factory,
                YorN: result.YorN
            };
        });
    }
    parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[]{
        let events = this.parseEvents(receipt, "VotedPairRestart");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                pair: result.pair,
                YorN: result.YorN
            };
        });
    }
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[]{
        let events = this.parseEvents(receipt, "VotedPairShutdown");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                pair: result.pair,
                YorN: result.YorN
            };
        });
    }
    parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[]{
        let events = this.parseEvents(receipt, "VotedVeto");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                admin: result.admin,
                votingContract: result.votingContract,
                YorN: result.YorN
            };
        });
    }
    async addAdmin(admin:string): Promise<TransactionReceipt>{
        let result = await this.methods('addAdmin',admin);
        return result;
    }
    async admins(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('admins',Utils.toString(param1));
        return result;
    }
    async adminsIdx(param1:string): Promise<BigNumber>{
        let result = await this.methods('adminsIdx',param1);
        return new BigNumber(result);
    }
    async allAdmins(): Promise<string[]>{
        let result = await this.methods('allAdmins');
        return result;
    }
    async executeFactoryRestart(factory:string): Promise<TransactionReceipt>{
        let result = await this.methods('executeFactoryRestart',factory);
        return result;
    }
    async executeFactoryShutdown(factory:string): Promise<TransactionReceipt>{
        let result = await this.methods('executeFactoryShutdown',factory);
        return result;
    }
    async executePairRestart(params:{factory:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.methods('executePairRestart',params.factory,params.pair);
        return result;
    }
    async executePairShutdown(params:{factory:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.methods('executePairShutdown',params.factory,params.pair);
        return result;
    }
    async executeVetoVoting(votingContract:string): Promise<TransactionReceipt>{
        let result = await this.methods('executeVetoVoting',votingContract);
        return result;
    }
    async factoryRestart(params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('factoryRestart',params.factory,params.YorN);
        return result;
    }
    async factoryRestartVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('factoryRestartVote',params.param1,params.param2);
        return result;
    }
    async factoryShutdown(params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('factoryShutdown',params.factory,params.YorN);
        return result;
    }
    async factoryShutdownVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('factoryShutdownVote',params.param1,params.param2);
        return result;
    }
    async getFactoryRestartVote(factory:string): Promise<boolean[]>{
        let result = await this.methods('getFactoryRestartVote',factory);
        return result;
    }
    async getFactoryShutdownVote(factory:string): Promise<boolean[]>{
        let result = await this.methods('getFactoryShutdownVote',factory);
        return result;
    }
    async getPairRestartVote(pair:string): Promise<boolean[]>{
        let result = await this.methods('getPairRestartVote',pair);
        return result;
    }
    async getPairShutdownVote(pair:string): Promise<boolean[]>{
        let result = await this.methods('getPairShutdownVote',pair);
        return result;
    }
    async getVetoVotingVote(votingContract:string): Promise<boolean[]>{
        let result = await this.methods('getVetoVotingVote',votingContract);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async maxAdmin(): Promise<BigNumber>{
        let result = await this.methods('maxAdmin');
        return new BigNumber(result);
    }
    async pairRestart(params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('pairRestart',params.pair,params.YorN);
        return result;
    }
    async pairRestartVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('pairRestartVote',params.param1,params.param2);
        return result;
    }
    async pairShutdown(params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('pairShutdown',params.pair,params.YorN);
        return result;
    }
    async pairShutdownVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('pairShutdownVote',params.param1,params.param2);
        return result;
    }
    async removeAdmin(admin:string): Promise<TransactionReceipt>{
        let result = await this.methods('removeAdmin',admin);
        return result;
    }
    async setMaxAdmin(maxAdmin:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setMaxAdmin',Utils.toString(maxAdmin));
        return result;
    }
    async vetoVoting(params:{votingContract:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('vetoVoting',params.votingContract,params.YorN);
        return result;
    }
    async vetoVotingVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('vetoVotingVote',params.param1,params.param2);
        return result;
    }
}
export module OAXDEX_Administrator{
    export interface AddAdminEvent {_eventName:string,_address:string,_transactionHash:string,admin:string}
    export interface RemoveAdminEvent {_eventName:string,_address:string,_transactionHash:string,admin:string}
    export interface SetMaxAdminEvent {_eventName:string,_address:string,_transactionHash:string,maxAdmin:BigNumber}
    export interface VotedFactoryRestartEvent {_eventName:string,_address:string,_transactionHash:string,admin:string,factory:string,YorN:boolean}
    export interface VotedFactoryShutdownEvent {_eventName:string,_address:string,_transactionHash:string,admin:string,factory:string,YorN:boolean}
    export interface VotedPairRestartEvent {_eventName:string,_address:string,_transactionHash:string,admin:string,pair:string,YorN:boolean}
    export interface VotedPairShutdownEvent {_eventName:string,_address:string,_transactionHash:string,admin:string,pair:string,YorN:boolean}
    export interface VotedVetoEvent {_eventName:string,_address:string,_transactionHash:string,admin:string,votingContract:string,YorN:boolean}
}