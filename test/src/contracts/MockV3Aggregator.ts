import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MockV3Aggregator.json";
export interface IDeployParams {description:string;decimals:number|BigNumber;initialAnswer:number|BigNumber}
export interface IUpdateRoundDataParams {roundId:number|BigNumber;answer:number|BigNumber;timestamp:number|BigNumber;startedAt:number|BigNumber}
export class MockV3Aggregator extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.description,this.wallet.utils.toString(params.decimals),this.wallet.utils.toString(params.initialAnswer)], options);
    }
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): MockV3Aggregator.AnswerUpdatedEvent[]{
        return this.parseEvents(receipt, "AnswerUpdated").map(e=>this.decodeAnswerUpdatedEvent(e));
    }
    decodeAnswerUpdatedEvent(event: Event): MockV3Aggregator.AnswerUpdatedEvent{
        let result = event.data;
        return {
            current: new BigNumber(result.current),
            roundId: new BigNumber(result.roundId),
            updatedAt: new BigNumber(result.updatedAt),
            _event: event
        };
    }
    parseNewRoundEvent(receipt: TransactionReceipt): MockV3Aggregator.NewRoundEvent[]{
        return this.parseEvents(receipt, "NewRound").map(e=>this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event: Event): MockV3Aggregator.NewRoundEvent{
        let result = event.data;
        return {
            roundId: new BigNumber(result.roundId),
            startedBy: result.startedBy,
            startedAt: new BigNumber(result.startedAt),
            _event: event
        };
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    description: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAnswer: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    getRoundData: {
        (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    getTimestamp: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    latestAnswer: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    latestRound: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    latestRoundData: {
        (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    latestTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    updateAnswer: {
        (answer:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (answer:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    updateRoundData: {
        (params: IUpdateRoundDataParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateRoundDataParams, options?: TransactionOptions) => Promise<void>;
    }
    version: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let description_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('description',[],options);
            return result;
        }
        this.description = description_call
        let getAnswer_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAnswer',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.getAnswer = getAnswer_call
        let getRoundData_call = async (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('getRoundData',[this.wallet.utils.toString(roundId)],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.getRoundData = getRoundData_call
        let getTimestamp_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getTimestamp',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.getTimestamp = getTimestamp_call
        let latestAnswer_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestAnswer',[],options);
            return new BigNumber(result);
        }
        this.latestAnswer = latestAnswer_call
        let latestRound_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestRound',[],options);
            return new BigNumber(result);
        }
        this.latestRound = latestRound_call
        let latestRoundData_call = async (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('latestRoundData',[],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.latestRoundData = latestRoundData_call
        let latestTimestamp_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestTimestamp',[],options);
            return new BigNumber(result);
        }
        this.latestTimestamp = latestTimestamp_call
        let version_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('version',[],options);
            return new BigNumber(result);
        }
        this.version = version_call
        let updateAnswer_send = async (answer:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateAnswer',[this.wallet.utils.toString(answer)],options);
            return result;
        }
        let updateAnswer_call = async (answer:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateAnswer',[this.wallet.utils.toString(answer)],options);
            return;
        }
        this.updateAnswer = Object.assign(updateAnswer_send, {
            call:updateAnswer_call
        });
        let updateRoundDataParams = (params: IUpdateRoundDataParams) => [this.wallet.utils.toString(params.roundId),this.wallet.utils.toString(params.answer),this.wallet.utils.toString(params.timestamp),this.wallet.utils.toString(params.startedAt)];
        let updateRoundData_send = async (params: IUpdateRoundDataParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateRoundData',updateRoundDataParams(params),options);
            return result;
        }
        let updateRoundData_call = async (params: IUpdateRoundDataParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateRoundData',updateRoundDataParams(params),options);
            return;
        }
        this.updateRoundData = Object.assign(updateRoundData_send, {
            call:updateRoundData_call
        });
    }
}
export module MockV3Aggregator{
    export interface AnswerUpdatedEvent {current:BigNumber,roundId:BigNumber,updatedAt:BigNumber,_event:Event}
    export interface NewRoundEvent {roundId:BigNumber,startedBy:string,startedAt:BigNumber,_event:Event}
}