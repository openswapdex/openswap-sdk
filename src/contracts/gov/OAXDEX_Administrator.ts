import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_Administrator.json";

export interface IExecutePairRestartParams {factory:string;pair:string}
export interface IExecutePairShutdownParams {factory:string;pair:string}
export interface IFactoryRestartParams {factory:string;YorN:boolean}
export interface IFactoryRestartVoteParams {param1:string;param2:string}
export interface IFactoryShutdownParams {factory:string;YorN:boolean}
export interface IFactoryShutdownVoteParams {param1:string;param2:string}
export interface IPairRestartParams {pair:string;YorN:boolean}
export interface IPairRestartVoteParams {param1:string;param2:string}
export interface IPairShutdownParams {pair:string;YorN:boolean}
export interface IPairShutdownVoteParams {param1:string;param2:string}
export interface IVetoVotingParams {votingContract:string;YorN:boolean}
export interface IVetoVotingVoteParams {param1:string;param2:string}
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
    addAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    admins: {
        (param1:number|BigNumber): Promise<string>;
    }
    adminsIdx: {
        (param1:string): Promise<BigNumber>;
    }
    allAdmins: {
        (): Promise<string[]>;
    }
    executeFactoryRestart: {
        (factory:string): Promise<TransactionReceipt>;
        call: (factory:string) => Promise<void>;
    }
    executeFactoryShutdown: {
        (factory:string): Promise<TransactionReceipt>;
        call: (factory:string) => Promise<void>;
    }
    executePairRestart: {
        (params: IExecutePairRestartParams): Promise<TransactionReceipt>;
        call: (params: IExecutePairRestartParams) => Promise<void>;
    }
    executePairShutdown: {
        (params: IExecutePairShutdownParams): Promise<TransactionReceipt>;
        call: (params: IExecutePairShutdownParams) => Promise<void>;
    }
    executeVetoVoting: {
        (votingContract:string): Promise<TransactionReceipt>;
        call: (votingContract:string) => Promise<void>;
    }
    factoryRestart: {
        (params: IFactoryRestartParams): Promise<TransactionReceipt>;
        call: (params: IFactoryRestartParams) => Promise<void>;
    }
    factoryRestartVote: {
        (params: IFactoryRestartVoteParams): Promise<boolean>;
    }
    factoryShutdown: {
        (params: IFactoryShutdownParams): Promise<TransactionReceipt>;
        call: (params: IFactoryShutdownParams) => Promise<void>;
    }
    factoryShutdownVote: {
        (params: IFactoryShutdownVoteParams): Promise<boolean>;
    }
    getFactoryRestartVote: {
        (factory:string): Promise<boolean[]>;
    }
    getFactoryShutdownVote: {
        (factory:string): Promise<boolean[]>;
    }
    getPairRestartVote: {
        (pair:string): Promise<boolean[]>;
    }
    getPairShutdownVote: {
        (pair:string): Promise<boolean[]>;
    }
    getVetoVotingVote: {
        (votingContract:string): Promise<boolean[]>;
    }
    governance: {
        (): Promise<string>;
    }
    maxAdmin: {
        (): Promise<BigNumber>;
    }
    pairRestart: {
        (params: IPairRestartParams): Promise<TransactionReceipt>;
        call: (params: IPairRestartParams) => Promise<void>;
    }
    pairRestartVote: {
        (params: IPairRestartVoteParams): Promise<boolean>;
    }
    pairShutdown: {
        (params: IPairShutdownParams): Promise<TransactionReceipt>;
        call: (params: IPairShutdownParams) => Promise<void>;
    }
    pairShutdownVote: {
        (params: IPairShutdownVoteParams): Promise<boolean>;
    }
    removeAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    setMaxAdmin: {
        (maxAdmin:number|BigNumber): Promise<TransactionReceipt>;
        call: (maxAdmin:number|BigNumber) => Promise<void>;
    }
    vetoVoting: {
        (params: IVetoVotingParams): Promise<TransactionReceipt>;
        call: (params: IVetoVotingParams) => Promise<void>;
    }
    vetoVotingVote: {
        (params: IVetoVotingVoteParams): Promise<boolean>;
    }
    private assign(){
        let admins_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('admins',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.admins = admins_call
        let adminsIdx_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('adminsIdx',[param1]);
            return new BigNumber(result);
        }
        this.adminsIdx = adminsIdx_call
        let allAdmins_call = async (): Promise<string[]> => {
            let result = await this.call('allAdmins');
            return result;
        }
        this.allAdmins = allAdmins_call
        let factoryRestartVoteParams = (params: IFactoryRestartVoteParams) => [params.param1,params.param2];
        let factoryRestartVote_call = async (params: IFactoryRestartVoteParams): Promise<boolean> => {
            let result = await this.call('factoryRestartVote',factoryRestartVoteParams(params));
            return result;
        }
        this.factoryRestartVote = factoryRestartVote_call
        let factoryShutdownVoteParams = (params: IFactoryShutdownVoteParams) => [params.param1,params.param2];
        let factoryShutdownVote_call = async (params: IFactoryShutdownVoteParams): Promise<boolean> => {
            let result = await this.call('factoryShutdownVote',factoryShutdownVoteParams(params));
            return result;
        }
        this.factoryShutdownVote = factoryShutdownVote_call
        let getFactoryRestartVote_call = async (factory:string): Promise<boolean[]> => {
            let result = await this.call('getFactoryRestartVote',[factory]);
            return result;
        }
        this.getFactoryRestartVote = getFactoryRestartVote_call
        let getFactoryShutdownVote_call = async (factory:string): Promise<boolean[]> => {
            let result = await this.call('getFactoryShutdownVote',[factory]);
            return result;
        }
        this.getFactoryShutdownVote = getFactoryShutdownVote_call
        let getPairRestartVote_call = async (pair:string): Promise<boolean[]> => {
            let result = await this.call('getPairRestartVote',[pair]);
            return result;
        }
        this.getPairRestartVote = getPairRestartVote_call
        let getPairShutdownVote_call = async (pair:string): Promise<boolean[]> => {
            let result = await this.call('getPairShutdownVote',[pair]);
            return result;
        }
        this.getPairShutdownVote = getPairShutdownVote_call
        let getVetoVotingVote_call = async (votingContract:string): Promise<boolean[]> => {
            let result = await this.call('getVetoVotingVote',[votingContract]);
            return result;
        }
        this.getVetoVotingVote = getVetoVotingVote_call
        let governance_call = async (): Promise<string> => {
            let result = await this.call('governance');
            return result;
        }
        this.governance = governance_call
        let maxAdmin_call = async (): Promise<BigNumber> => {
            let result = await this.call('maxAdmin');
            return new BigNumber(result);
        }
        this.maxAdmin = maxAdmin_call
        let pairRestartVoteParams = (params: IPairRestartVoteParams) => [params.param1,params.param2];
        let pairRestartVote_call = async (params: IPairRestartVoteParams): Promise<boolean> => {
            let result = await this.call('pairRestartVote',pairRestartVoteParams(params));
            return result;
        }
        this.pairRestartVote = pairRestartVote_call
        let pairShutdownVoteParams = (params: IPairShutdownVoteParams) => [params.param1,params.param2];
        let pairShutdownVote_call = async (params: IPairShutdownVoteParams): Promise<boolean> => {
            let result = await this.call('pairShutdownVote',pairShutdownVoteParams(params));
            return result;
        }
        this.pairShutdownVote = pairShutdownVote_call
        let vetoVotingVoteParams = (params: IVetoVotingVoteParams) => [params.param1,params.param2];
        let vetoVotingVote_call = async (params: IVetoVotingVoteParams): Promise<boolean> => {
            let result = await this.call('vetoVotingVote',vetoVotingVoteParams(params));
            return result;
        }
        this.vetoVotingVote = vetoVotingVote_call
        let addAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('addAdmin',[admin]);
            return result;
        }
        let addAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('addAdmin',[admin]);
            return;
        }
        this.addAdmin = Object.assign(addAdmin_send, {
            call:addAdmin_call
        });
        let executeFactoryRestart_send = async (factory:string): Promise<TransactionReceipt> => {
            let result = await this.send('executeFactoryRestart',[factory]);
            return result;
        }
        let executeFactoryRestart_call = async (factory:string): Promise<void> => {
            let result = await this.call('executeFactoryRestart',[factory]);
            return;
        }
        this.executeFactoryRestart = Object.assign(executeFactoryRestart_send, {
            call:executeFactoryRestart_call
        });
        let executeFactoryShutdown_send = async (factory:string): Promise<TransactionReceipt> => {
            let result = await this.send('executeFactoryShutdown',[factory]);
            return result;
        }
        let executeFactoryShutdown_call = async (factory:string): Promise<void> => {
            let result = await this.call('executeFactoryShutdown',[factory]);
            return;
        }
        this.executeFactoryShutdown = Object.assign(executeFactoryShutdown_send, {
            call:executeFactoryShutdown_call
        });
        let executePairRestartParams = (params: IExecutePairRestartParams) => [params.factory,params.pair];
        let executePairRestart_send = async (params: IExecutePairRestartParams): Promise<TransactionReceipt> => {
            let result = await this.send('executePairRestart',executePairRestartParams(params));
            return result;
        }
        let executePairRestart_call = async (params: IExecutePairRestartParams): Promise<void> => {
            let result = await this.call('executePairRestart',executePairRestartParams(params));
            return;
        }
        this.executePairRestart = Object.assign(executePairRestart_send, {
            call:executePairRestart_call
        });
        let executePairShutdownParams = (params: IExecutePairShutdownParams) => [params.factory,params.pair];
        let executePairShutdown_send = async (params: IExecutePairShutdownParams): Promise<TransactionReceipt> => {
            let result = await this.send('executePairShutdown',executePairShutdownParams(params));
            return result;
        }
        let executePairShutdown_call = async (params: IExecutePairShutdownParams): Promise<void> => {
            let result = await this.call('executePairShutdown',executePairShutdownParams(params));
            return;
        }
        this.executePairShutdown = Object.assign(executePairShutdown_send, {
            call:executePairShutdown_call
        });
        let executeVetoVoting_send = async (votingContract:string): Promise<TransactionReceipt> => {
            let result = await this.send('executeVetoVoting',[votingContract]);
            return result;
        }
        let executeVetoVoting_call = async (votingContract:string): Promise<void> => {
            let result = await this.call('executeVetoVoting',[votingContract]);
            return;
        }
        this.executeVetoVoting = Object.assign(executeVetoVoting_send, {
            call:executeVetoVoting_call
        });
        let factoryRestartParams = (params: IFactoryRestartParams) => [params.factory,params.YorN];
        let factoryRestart_send = async (params: IFactoryRestartParams): Promise<TransactionReceipt> => {
            let result = await this.send('factoryRestart',factoryRestartParams(params));
            return result;
        }
        let factoryRestart_call = async (params: IFactoryRestartParams): Promise<void> => {
            let result = await this.call('factoryRestart',factoryRestartParams(params));
            return;
        }
        this.factoryRestart = Object.assign(factoryRestart_send, {
            call:factoryRestart_call
        });
        let factoryShutdownParams = (params: IFactoryShutdownParams) => [params.factory,params.YorN];
        let factoryShutdown_send = async (params: IFactoryShutdownParams): Promise<TransactionReceipt> => {
            let result = await this.send('factoryShutdown',factoryShutdownParams(params));
            return result;
        }
        let factoryShutdown_call = async (params: IFactoryShutdownParams): Promise<void> => {
            let result = await this.call('factoryShutdown',factoryShutdownParams(params));
            return;
        }
        this.factoryShutdown = Object.assign(factoryShutdown_send, {
            call:factoryShutdown_call
        });
        let pairRestartParams = (params: IPairRestartParams) => [params.pair,params.YorN];
        let pairRestart_send = async (params: IPairRestartParams): Promise<TransactionReceipt> => {
            let result = await this.send('pairRestart',pairRestartParams(params));
            return result;
        }
        let pairRestart_call = async (params: IPairRestartParams): Promise<void> => {
            let result = await this.call('pairRestart',pairRestartParams(params));
            return;
        }
        this.pairRestart = Object.assign(pairRestart_send, {
            call:pairRestart_call
        });
        let pairShutdownParams = (params: IPairShutdownParams) => [params.pair,params.YorN];
        let pairShutdown_send = async (params: IPairShutdownParams): Promise<TransactionReceipt> => {
            let result = await this.send('pairShutdown',pairShutdownParams(params));
            return result;
        }
        let pairShutdown_call = async (params: IPairShutdownParams): Promise<void> => {
            let result = await this.call('pairShutdown',pairShutdownParams(params));
            return;
        }
        this.pairShutdown = Object.assign(pairShutdown_send, {
            call:pairShutdown_call
        });
        let removeAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('removeAdmin',[admin]);
            return result;
        }
        let removeAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('removeAdmin',[admin]);
            return;
        }
        this.removeAdmin = Object.assign(removeAdmin_send, {
            call:removeAdmin_call
        });
        let setMaxAdmin_send = async (maxAdmin:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setMaxAdmin',[this.wallet.utils.toString(maxAdmin)]);
            return result;
        }
        let setMaxAdmin_call = async (maxAdmin:number|BigNumber): Promise<void> => {
            let result = await this.call('setMaxAdmin',[this.wallet.utils.toString(maxAdmin)]);
            return;
        }
        this.setMaxAdmin = Object.assign(setMaxAdmin_send, {
            call:setMaxAdmin_call
        });
        let vetoVotingParams = (params: IVetoVotingParams) => [params.votingContract,params.YorN];
        let vetoVoting_send = async (params: IVetoVotingParams): Promise<TransactionReceipt> => {
            let result = await this.send('vetoVoting',vetoVotingParams(params));
            return result;
        }
        let vetoVoting_call = async (params: IVetoVotingParams): Promise<void> => {
            let result = await this.call('vetoVoting',vetoVotingParams(params));
            return;
        }
        this.vetoVoting = Object.assign(vetoVoting_send, {
            call:vetoVoting_call
        });
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