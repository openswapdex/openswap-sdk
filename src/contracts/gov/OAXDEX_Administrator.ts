import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OAXDEX_Administrator.json";

export class OAXDEX_Administrator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string): Promise<string>{
        return this.__deploy([governance]);
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
    async addAdmin_send(admin:string): Promise<TransactionReceipt>{
        let result = await this.send('addAdmin',[admin]);
        return result;
    }
    async addAdmin_call(admin:string): Promise<void>{
        let result = await this.call('addAdmin',[admin]);
        return;
    }
    addAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    async admins(param1:number|BigNumber): Promise<string>{
        let result = await this.call('admins',[Utils.toString(param1)]);
        return result;
    }
    async adminsIdx(param1:string): Promise<BigNumber>{
        let result = await this.call('adminsIdx',[param1]);
        return new BigNumber(result);
    }
    async allAdmins(): Promise<string[]>{
        let result = await this.call('allAdmins');
        return result;
    }
    async executeFactoryRestart_send(factory:string): Promise<TransactionReceipt>{
        let result = await this.send('executeFactoryRestart',[factory]);
        return result;
    }
    async executeFactoryRestart_call(factory:string): Promise<void>{
        let result = await this.call('executeFactoryRestart',[factory]);
        return;
    }
    executeFactoryRestart: {
        (factory:string): Promise<TransactionReceipt>;
        call: (factory:string) => Promise<void>;
    }
    async executeFactoryShutdown_send(factory:string): Promise<TransactionReceipt>{
        let result = await this.send('executeFactoryShutdown',[factory]);
        return result;
    }
    async executeFactoryShutdown_call(factory:string): Promise<void>{
        let result = await this.call('executeFactoryShutdown',[factory]);
        return;
    }
    executeFactoryShutdown: {
        (factory:string): Promise<TransactionReceipt>;
        call: (factory:string) => Promise<void>;
    }
    async executePairRestart_send(params:{factory:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.send('executePairRestart',[params.factory,params.pair]);
        return result;
    }
    async executePairRestart_call(params:{factory:string,pair:string}): Promise<void>{
        let result = await this.call('executePairRestart',[params.factory,params.pair]);
        return;
    }
    executePairRestart: {
        (params:{factory:string,pair:string}): Promise<TransactionReceipt>;
        call: (params:{factory:string,pair:string}) => Promise<void>;
    }
    async executePairShutdown_send(params:{factory:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.send('executePairShutdown',[params.factory,params.pair]);
        return result;
    }
    async executePairShutdown_call(params:{factory:string,pair:string}): Promise<void>{
        let result = await this.call('executePairShutdown',[params.factory,params.pair]);
        return;
    }
    executePairShutdown: {
        (params:{factory:string,pair:string}): Promise<TransactionReceipt>;
        call: (params:{factory:string,pair:string}) => Promise<void>;
    }
    async executeVetoVoting_send(votingContract:string): Promise<TransactionReceipt>{
        let result = await this.send('executeVetoVoting',[votingContract]);
        return result;
    }
    async executeVetoVoting_call(votingContract:string): Promise<void>{
        let result = await this.call('executeVetoVoting',[votingContract]);
        return;
    }
    executeVetoVoting: {
        (votingContract:string): Promise<TransactionReceipt>;
        call: (votingContract:string) => Promise<void>;
    }
    async factoryRestart_send(params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('factoryRestart',[params.factory,params.YorN]);
        return result;
    }
    async factoryRestart_call(params:{factory:string,YorN:boolean}): Promise<void>{
        let result = await this.call('factoryRestart',[params.factory,params.YorN]);
        return;
    }
    factoryRestart: {
        (params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>;
        call: (params:{factory:string,YorN:boolean}) => Promise<void>;
    }
    async factoryRestartVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('factoryRestartVote',[params.param1,params.param2]);
        return result;
    }
    async factoryShutdown_send(params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('factoryShutdown',[params.factory,params.YorN]);
        return result;
    }
    async factoryShutdown_call(params:{factory:string,YorN:boolean}): Promise<void>{
        let result = await this.call('factoryShutdown',[params.factory,params.YorN]);
        return;
    }
    factoryShutdown: {
        (params:{factory:string,YorN:boolean}): Promise<TransactionReceipt>;
        call: (params:{factory:string,YorN:boolean}) => Promise<void>;
    }
    async factoryShutdownVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('factoryShutdownVote',[params.param1,params.param2]);
        return result;
    }
    async getFactoryRestartVote(factory:string): Promise<boolean[]>{
        let result = await this.call('getFactoryRestartVote',[factory]);
        return result;
    }
    async getFactoryShutdownVote(factory:string): Promise<boolean[]>{
        let result = await this.call('getFactoryShutdownVote',[factory]);
        return result;
    }
    async getPairRestartVote(pair:string): Promise<boolean[]>{
        let result = await this.call('getPairRestartVote',[pair]);
        return result;
    }
    async getPairShutdownVote(pair:string): Promise<boolean[]>{
        let result = await this.call('getPairShutdownVote',[pair]);
        return result;
    }
    async getVetoVotingVote(votingContract:string): Promise<boolean[]>{
        let result = await this.call('getVetoVotingVote',[votingContract]);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.call('governance');
        return result;
    }
    async maxAdmin(): Promise<BigNumber>{
        let result = await this.call('maxAdmin');
        return new BigNumber(result);
    }
    async pairRestart_send(params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('pairRestart',[params.pair,params.YorN]);
        return result;
    }
    async pairRestart_call(params:{pair:string,YorN:boolean}): Promise<void>{
        let result = await this.call('pairRestart',[params.pair,params.YorN]);
        return;
    }
    pairRestart: {
        (params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>;
        call: (params:{pair:string,YorN:boolean}) => Promise<void>;
    }
    async pairRestartVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('pairRestartVote',[params.param1,params.param2]);
        return result;
    }
    async pairShutdown_send(params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('pairShutdown',[params.pair,params.YorN]);
        return result;
    }
    async pairShutdown_call(params:{pair:string,YorN:boolean}): Promise<void>{
        let result = await this.call('pairShutdown',[params.pair,params.YorN]);
        return;
    }
    pairShutdown: {
        (params:{pair:string,YorN:boolean}): Promise<TransactionReceipt>;
        call: (params:{pair:string,YorN:boolean}) => Promise<void>;
    }
    async pairShutdownVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('pairShutdownVote',[params.param1,params.param2]);
        return result;
    }
    async removeAdmin_send(admin:string): Promise<TransactionReceipt>{
        let result = await this.send('removeAdmin',[admin]);
        return result;
    }
    async removeAdmin_call(admin:string): Promise<void>{
        let result = await this.call('removeAdmin',[admin]);
        return;
    }
    removeAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    async setMaxAdmin_send(maxAdmin:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setMaxAdmin',[Utils.toString(maxAdmin)]);
        return result;
    }
    async setMaxAdmin_call(maxAdmin:number|BigNumber): Promise<void>{
        let result = await this.call('setMaxAdmin',[Utils.toString(maxAdmin)]);
        return;
    }
    setMaxAdmin: {
        (maxAdmin:number|BigNumber): Promise<TransactionReceipt>;
        call: (maxAdmin:number|BigNumber) => Promise<void>;
    }
    async vetoVoting_send(params:{votingContract:string,YorN:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('vetoVoting',[params.votingContract,params.YorN]);
        return result;
    }
    async vetoVoting_call(params:{votingContract:string,YorN:boolean}): Promise<void>{
        let result = await this.call('vetoVoting',[params.votingContract,params.YorN]);
        return;
    }
    vetoVoting: {
        (params:{votingContract:string,YorN:boolean}): Promise<TransactionReceipt>;
        call: (params:{votingContract:string,YorN:boolean}) => Promise<void>;
    }
    async vetoVotingVote(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('vetoVotingVote',[params.param1,params.param2]);
        return result;
    }
    private assign(){
        this.addAdmin = Object.assign(this.addAdmin_send, {call:this.addAdmin_call});
        this.executeFactoryRestart = Object.assign(this.executeFactoryRestart_send, {call:this.executeFactoryRestart_call});
        this.executeFactoryShutdown = Object.assign(this.executeFactoryShutdown_send, {call:this.executeFactoryShutdown_call});
        this.executePairRestart = Object.assign(this.executePairRestart_send, {call:this.executePairRestart_call});
        this.executePairShutdown = Object.assign(this.executePairShutdown_send, {call:this.executePairShutdown_call});
        this.executeVetoVoting = Object.assign(this.executeVetoVoting_send, {call:this.executeVetoVoting_call});
        this.factoryRestart = Object.assign(this.factoryRestart_send, {call:this.factoryRestart_call});
        this.factoryShutdown = Object.assign(this.factoryShutdown_send, {call:this.factoryShutdown_call});
        this.pairRestart = Object.assign(this.pairRestart_send, {call:this.pairRestart_call});
        this.pairShutdown = Object.assign(this.pairShutdown_send, {call:this.pairShutdown_call});
        this.removeAdmin = Object.assign(this.removeAdmin_send, {call:this.removeAdmin_call});
        this.setMaxAdmin = Object.assign(this.setMaxAdmin_send, {call:this.setMaxAdmin_call});
        this.vetoVoting = Object.assign(this.vetoVoting_send, {call:this.vetoVoting_call});
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