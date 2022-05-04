import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_Pair.json";

export class OSWAP_Pair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): OSWAP_Pair.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): OSWAP_Pair.BurnEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): OSWAP_Pair.MintEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[]{
        return this.parseEvents(receipt, "ProtocolFeeSet").map(e=>this.decodeProtocolFeeSetEvent(e));
    }
    decodeProtocolFeeSetEvent(event: Event): OSWAP_Pair.ProtocolFeeSetEvent{
        let result = event.data;
        return {
            protocolFee: new BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_Pair.SwapEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new BigNumber(result.amount0In),
            amount1In: new BigNumber(result.amount1In),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): OSWAP_Pair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[]{
        return this.parseEvents(receipt, "TradeFeeSet").map(e=>this.decodeTradeFeeSetEvent(e));
    }
    decodeTradeFeeSetEvent(event: Event): OSWAP_Pair.TradeFeeSetEvent{
        let result = event.data;
        return {
            tradeFee: new BigNumber(result.tradeFee),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): OSWAP_Pair.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    async EIP712_TYPEHASH(): Promise<string>{
        let result = await this.call('EIP712_TYPEHASH');
        return result;
    }
    async MINIMUM_LIQUIDITY(): Promise<BigNumber>{
        let result = await this.call('MINIMUM_LIQUIDITY');
        return new BigNumber(result);
    }
    async NAME_HASH(): Promise<string>{
        let result = await this.call('NAME_HASH');
        return result;
    }
    async PERMIT_TYPEHASH(): Promise<string>{
        let result = await this.call('PERMIT_TYPEHASH');
        return result;
    }
    async VERSION_HASH(): Promise<string>{
        let result = await this.call('VERSION_HASH');
        return result;
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.call('allowance',[params.param1,params.param2]);
        return new BigNumber(result);
    }
    async approve_send(params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('approve',[params.spender,Utils.toString(params.value)]);
        return result;
    }
    async approve_call(params:{spender:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('approve',[params.spender,Utils.toString(params.value)]);
        return result;
    }
    approve: {
        (params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{spender:string,value:number|BigNumber}) => Promise<boolean>;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.call('balanceOf',[param1]);
        return new BigNumber(result);
    }
    async burn_send(to:string): Promise<TransactionReceipt>{
        let result = await this.send('burn',[to]);
        return result;
    }
    async burn_call(to:string): Promise<{amount0:BigNumber,amount1:BigNumber}>{
        let result = await this.call('burn',[to]);
        return {
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1)
        };
    }
    burn: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('getAmountIn',[params.tokenOut,Utils.toString(params.amountOut)]);
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('getAmountOut',[params.tokenIn,Utils.toString(params.amountIn)]);
        return new BigNumber(result);
    }
    async getReserves(): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}>{
        let result = await this.call('getReserves');
        return {
            _reserve0: new BigNumber(result._reserve0),
            _reserve1: new BigNumber(result._reserve1),
            _blockTimestampLast: new BigNumber(result._blockTimestampLast)
        };
    }
    async initialize_send(params:{token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.send('initialize',[params.token0,params.token1]);
        return result;
    }
    async initialize_call(params:{token0:string,token1:string}): Promise<void>{
        let result = await this.call('initialize',[params.token0,params.token1]);
        return;
    }
    initialize: {
        (params:{token0:string,token1:string}): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string}) => Promise<void>;
    }
    async isLive(): Promise<boolean>{
        let result = await this.call('isLive');
        return result;
    }
    async kLast(): Promise<BigNumber>{
        let result = await this.call('kLast');
        return new BigNumber(result);
    }
    async mint_send(to:string): Promise<TransactionReceipt>{
        let result = await this.send('mint',[to]);
        return result;
    }
    async mint_call(to:string): Promise<BigNumber>{
        let result = await this.call('mint',[to]);
        return new BigNumber(result);
    }
    mint: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<BigNumber>;
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async nonces(param1:string): Promise<BigNumber>{
        let result = await this.call('nonces',[param1]);
        return new BigNumber(result);
    }
    async permit_send(params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.send('permit',[params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return result;
    }
    async permit_call(params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<void>{
        let result = await this.call('permit',[params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)]);
        return;
    }
    permit: {
        (params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>;
        call: (params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}) => Promise<void>;
    }
    async price0CumulativeLast(): Promise<BigNumber>{
        let result = await this.call('price0CumulativeLast');
        return new BigNumber(result);
    }
    async price1CumulativeLast(): Promise<BigNumber>{
        let result = await this.call('price1CumulativeLast');
        return new BigNumber(result);
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.call('protocolFee');
        return new BigNumber(result);
    }
    async setLive_send(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.send('setLive',[isLive]);
        return result;
    }
    async setLive_call(isLive:boolean): Promise<void>{
        let result = await this.call('setLive',[isLive]);
        return;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    async skim_send(to:string): Promise<TransactionReceipt>{
        let result = await this.send('skim',[to]);
        return result;
    }
    async skim_call(to:string): Promise<void>{
        let result = await this.call('skim',[to]);
        return;
    }
    skim: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    async swap_send(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data]);
        return result;
    }
    async swap_call(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<void>{
        let result = await this.call('swap',[Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data]);
        return;
    }
    swap: {
        (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>;
        call: (params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}) => Promise<void>;
    }
    async symbol(): Promise<string>{
        let result = await this.call('symbol');
        return result;
    }
    async sync_send(): Promise<TransactionReceipt>{
        let result = await this.send('sync');
        return result;
    }
    async sync_call(): Promise<void>{
        let result = await this.call('sync');
        return;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async token0(): Promise<string>{
        let result = await this.call('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.call('token1');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.call('totalSupply');
        return new BigNumber(result);
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.call('tradeFee');
        return new BigNumber(result);
    }
    async transfer_send(params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transfer',[params.to,Utils.toString(params.value)]);
        return result;
    }
    async transfer_call(params:{to:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transfer',[params.to,Utils.toString(params.value)]);
        return result;
    }
    transfer: {
        (params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{to:string,value:number|BigNumber}) => Promise<boolean>;
    }
    async transferFrom_send(params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transferFrom',[params.from,params.to,Utils.toString(params.value)]);
        return result;
    }
    async transferFrom_call(params:{from:string,to:string,value:number|BigNumber}): Promise<boolean>{
        let result = await this.call('transferFrom',[params.from,params.to,Utils.toString(params.value)]);
        return result;
    }
    transferFrom: {
        (params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,value:number|BigNumber}) => Promise<boolean>;
    }
    async updateFee_send(): Promise<TransactionReceipt>{
        let result = await this.send('updateFee');
        return result;
    }
    async updateFee_call(): Promise<void>{
        let result = await this.call('updateFee');
        return;
    }
    updateFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async updateProtocolFee_send(): Promise<TransactionReceipt>{
        let result = await this.send('updateProtocolFee');
        return result;
    }
    async updateProtocolFee_call(): Promise<void>{
        let result = await this.call('updateProtocolFee');
        return;
    }
    updateProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    private assign(){
        this.approve = Object.assign(this.approve_send, {call:this.approve_call});
        this.burn = Object.assign(this.burn_send, {call:this.burn_call});
        this.initialize = Object.assign(this.initialize_send, {call:this.initialize_call});
        this.mint = Object.assign(this.mint_send, {call:this.mint_call});
        this.permit = Object.assign(this.permit_send, {call:this.permit_call});
        this.setLive = Object.assign(this.setLive_send, {call:this.setLive_call});
        this.skim = Object.assign(this.skim_send, {call:this.skim_call});
        this.swap = Object.assign(this.swap_send, {call:this.swap_call});
        this.sync = Object.assign(this.sync_send, {call:this.sync_call});
        this.transfer = Object.assign(this.transfer_send, {call:this.transfer_call});
        this.transferFrom = Object.assign(this.transferFrom_send, {call:this.transferFrom_call});
        this.updateFee = Object.assign(this.updateFee_send, {call:this.updateFee_call});
        this.updateProtocolFee = Object.assign(this.updateProtocolFee_send, {call:this.updateProtocolFee_call});
    }
}
export module OSWAP_Pair{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface BurnEvent {sender:string,amount0:BigNumber,amount1:BigNumber,to:string,_event:Event}
    export interface MintEvent {sender:string,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface ProtocolFeeSetEvent {protocolFee:BigNumber,_event:Event}
    export interface SwapEvent {sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string,_event:Event}
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
    export interface TradeFeeSetEvent {tradeFee:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}