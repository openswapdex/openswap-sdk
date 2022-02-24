import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/gov/OAXDEX_Administrator.json");

export class OAXDEX_Administrator extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[]{
        return this.parseEvents(receipt, "AddAdmin").map(e=>this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent{
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[]{
        return this.parseEvents(receipt, "RemoveAdmin").map(e=>this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent{
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[]{
        return this.parseEvents(receipt, "SetMaxAdmin").map(e=>this.decodeSetMaxAdminEvent(e));
    }
    decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent{
        let result = event.data;
        return {
            maxAdmin: new BigNumber(result.maxAdmin),
            _event: event
        };
    }
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[]{
        return this.parseEvents(receipt, "VotedFactoryRestart").map(e=>this.decodeVotedFactoryRestartEvent(e));
    }
    decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent{
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[]{
        return this.parseEvents(receipt, "VotedFactoryShutdown").map(e=>this.decodeVotedFactoryShutdownEvent(e));
    }
    decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent{
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[]{
        return this.parseEvents(receipt, "VotedPairRestart").map(e=>this.decodeVotedPairRestartEvent(e));
    }
    decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent{
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[]{
        return this.parseEvents(receipt, "VotedPairShutdown").map(e=>this.decodeVotedPairShutdownEvent(e));
    }
    decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent{
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[]{
        return this.parseEvents(receipt, "VotedVeto").map(e=>this.decodeVotedVetoEvent(e));
    }
    decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent{
        let result = event.data;
        return {
            admin: result.admin,
            votingContract: result.votingContract,
            YorN: result.YorN,
            _event: event
        };
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
    export interface AddAdminEvent {admin:string,_event:Event}
    export interface RemoveAdminEvent {admin:string,_event:Event}
    export interface SetMaxAdminEvent {maxAdmin:BigNumber,_event:Event}
    export interface VotedFactoryRestartEvent {admin:string,factory:string,YorN:boolean,_event:Event}
    export interface VotedFactoryShutdownEvent {admin:string,factory:string,YorN:boolean,_event:Event}
    export interface VotedPairRestartEvent {admin:string,pair:string,YorN:boolean,_event:Event}
    export interface VotedPairShutdownEvent {admin:string,pair:string,YorN:boolean,_event:Event}
    export interface VotedVetoEvent {admin:string,votingContract:string,YorN:boolean,_event:Event}
}