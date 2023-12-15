import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ERC20WithFee.json";
export interface IDeployParams {symbol:string;name:string;initialSupply:number|BigNumber;cap:number|BigNumber;decimals:number|BigNumber;feeTo:string;feeRate:number|BigNumber}
export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {spender:string;value:number|BigNumber}
export interface IBurnParams {account:string;value:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintParams {account:string;value:number|BigNumber}
export interface ISetFeeParams {feeTo:string;feeRate:number|BigNumber}
export interface ITransferParams {to:string;value:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;value:number|BigNumber}
export class ERC20WithFee extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.symbol,params.name,this.wallet.utils.toString(params.initialSupply),this.wallet.utils.toString(params.cap),this.wallet.utils.toString(params.decimals),params.feeTo,this.wallet.utils.toString(params.feeRate)], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ERC20WithFee.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ERC20WithFee.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseAuthEvent(receipt: TransactionReceipt): ERC20WithFee.AuthEvent[]{
        return this.parseEvents(receipt, "Auth").map(e=>this.decodeAuthEvent(e));
    }
    decodeAuthEvent(event: Event): ERC20WithFee.AuthEvent{
        let result = event.data;
        return {
            account: result.account,
            auth: new BigNumber(result.auth),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ERC20WithFee.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ERC20WithFee.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    balanceOf: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
    }
    cap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    deny: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    feeRate: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    owners: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    rely: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    setFee: {
        (params: ISetFeeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetFeeParams, options?: TransactionOptions) => Promise<void>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[param1],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let cap_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('cap',[],options);
            return new BigNumber(result);
        }
        this.cap = cap_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let feeRate_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('feeRate',[],options);
            return new BigNumber(result);
        }
        this.feeRate = feeRate_call
        let feeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('feeTo',[],options);
            return result;
        }
        this.feeTo = feeTo_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let owners_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('owners',[param1],options);
            return new BigNumber(result);
        }
        this.owners = owners_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,this.wallet.utils.toString(params.value)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params),options);
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burnParams = (params: IBurnParams) => [params.account,this.wallet.utils.toString(params.value)];
        let burn_send = async (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',burnParams(params),options);
            return result;
        }
        let burn_call = async (params: IBurnParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('burn',burnParams(params),options);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let deny_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[account],options);
            return result;
        }
        let deny_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[account],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mintParams = (params: IMintParams) => [params.account,this.wallet.utils.toString(params.value)];
        let mint_send = async (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params),options);
            return result;
        }
        let mint_call = async (params: IMintParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('mint',mintParams(params),options);
            return;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let rely_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('rely',[account],options);
            return result;
        }
        let rely_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('rely',[account],options);
            return;
        }
        this.rely = Object.assign(rely_send, {
            call:rely_call
        });
        let setFeeParams = (params: ISetFeeParams) => [params.feeTo,this.wallet.utils.toString(params.feeRate)];
        let setFee_send = async (params: ISetFeeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFee',setFeeParams(params),options);
            return result;
        }
        let setFee_call = async (params: ISetFeeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFee',setFeeParams(params),options);
            return;
        }
        this.setFee = Object.assign(setFee_send, {
            call:setFee_call
        });
        let transferParams = (params: ITransferParams) => [params.to,this.wallet.utils.toString(params.value)];
        let transfer_send = async (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params),options);
            return result;
        }
        let transfer_call = async (params: ITransferParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params),options);
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.value)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
    }
}
export module ERC20WithFee{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface AuthEvent {account:string,auth:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}