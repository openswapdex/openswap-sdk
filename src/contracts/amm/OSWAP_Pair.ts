import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_Pair.json";

export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {spender:string;value:number|BigNumber}
export interface IGetAmountInParams {tokenOut:string;amountOut:number|BigNumber}
export interface IGetAmountOutParams {tokenIn:string;amountIn:number|BigNumber}
export interface IInitializeParams {token0:string;token1:string}
export interface IPermitParams {owner:string;spender:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;data:string}
export interface ITransferParams {to:string;value:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;value:number|BigNumber}
export class OSWAP_Pair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
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
    EIP712_TYPEHASH: {
        (): Promise<string>;
    }
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    }
    NAME_HASH: {
        (): Promise<string>;
    }
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    }
    VERSION_HASH: {
        (): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (param1:string): Promise<BigNumber>;
    }
    burn: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    factory: {
        (): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getReserves: {
        (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}>;
    }
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    }
    isLive: {
        (): Promise<boolean>;
    }
    kLast: {
        (): Promise<BigNumber>;
    }
    mint: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    nonces: {
        (param1:string): Promise<BigNumber>;
    }
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    }
    price0CumulativeLast: {
        (): Promise<BigNumber>;
    }
    price1CumulativeLast: {
        (): Promise<BigNumber>;
    }
    protocolFee: {
        (): Promise<BigNumber>;
    }
    setLive: {
        (isLive:boolean): Promise<TransactionReceipt>;
        call: (isLive:boolean) => Promise<void>;
    }
    skim: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    }
    symbol: {
        (): Promise<string>;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    token0: {
        (): Promise<string>;
    }
    token1: {
        (): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    tradeFee: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    updateFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    updateProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    private assign(){
        let EIP712_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('EIP712_TYPEHASH');
            return result;
        }
        this.EIP712_TYPEHASH = EIP712_TYPEHASH_call
        let MINIMUM_LIQUIDITY_call = async (): Promise<BigNumber> => {
            let result = await this.call('MINIMUM_LIQUIDITY');
            return new BigNumber(result);
        }
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call
        let NAME_HASH_call = async (): Promise<string> => {
            let result = await this.call('NAME_HASH');
            return result;
        }
        this.NAME_HASH = NAME_HASH_call
        let PERMIT_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('PERMIT_TYPEHASH');
            return result;
        }
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call
        let VERSION_HASH_call = async (): Promise<string> => {
            let result = await this.call('VERSION_HASH');
            return result;
        }
        this.VERSION_HASH = VERSION_HASH_call
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[param1]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [params.tokenOut,this.wallet.utils.toString(params.amountOut)];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [params.tokenIn,this.wallet.utils.toString(params.amountIn)];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getReserves_call = async (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}> => {
            let result = await this.call('getReserves');
            return {
                _reserve0: new BigNumber(result._reserve0),
                _reserve1: new BigNumber(result._reserve1),
                _blockTimestampLast: new BigNumber(result._blockTimestampLast)
            };
        }
        this.getReserves = getReserves_call
        let isLive_call = async (): Promise<boolean> => {
            let result = await this.call('isLive');
            return result;
        }
        this.isLive = isLive_call
        let kLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('kLast');
            return new BigNumber(result);
        }
        this.kLast = kLast_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let nonces_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('nonces',[param1]);
            return new BigNumber(result);
        }
        this.nonces = nonces_call
        let price0CumulativeLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('price0CumulativeLast');
            return new BigNumber(result);
        }
        this.price0CumulativeLast = price0CumulativeLast_call
        let price1CumulativeLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('price1CumulativeLast');
            return new BigNumber(result);
        }
        this.price1CumulativeLast = price1CumulativeLast_call
        let protocolFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFee');
            return new BigNumber(result);
        }
        this.protocolFee = protocolFee_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let token0_call = async (): Promise<string> => {
            let result = await this.call('token0');
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (): Promise<string> => {
            let result = await this.call('token1');
            return result;
        }
        this.token1 = token1_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let tradeFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('tradeFee');
            return new BigNumber(result);
        }
        this.tradeFee = tradeFee_call
        let approveParams = (params: IApproveParams) => [params.spender,this.wallet.utils.toString(params.value)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[to]);
            return result;
        }
        let burn_call = async (to:string): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('burn',[to]);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let initializeParams = (params: IInitializeParams) => [params.token0,params.token1];
        let initialize_send = async (params: IInitializeParams): Promise<TransactionReceipt> => {
            let result = await this.send('initialize',initializeParams(params));
            return result;
        }
        let initialize_call = async (params: IInitializeParams): Promise<void> => {
            let result = await this.call('initialize',initializeParams(params));
            return;
        }
        this.initialize = Object.assign(initialize_send, {
            call:initialize_call
        });
        let mint_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[to]);
            return result;
        }
        let mint_call = async (to:string): Promise<BigNumber> => {
            let result = await this.call('mint',[to]);
            return new BigNumber(result);
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let permitParams = (params: IPermitParams) => [params.owner,params.spender,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let permit_send = async (params: IPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('permit',permitParams(params));
            return result;
        }
        let permit_call = async (params: IPermitParams): Promise<void> => {
            let result = await this.call('permit',permitParams(params));
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let setLive_send = async (isLive:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('setLive',[isLive]);
            return result;
        }
        let setLive_call = async (isLive:boolean): Promise<void> => {
            let result = await this.call('setLive',[isLive]);
            return;
        }
        this.setLive = Object.assign(setLive_send, {
            call:setLive_call
        });
        let skim_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('skim',[to]);
            return result;
        }
        let skim_call = async (to:string): Promise<void> => {
            let result = await this.call('skim',[to]);
            return;
        }
        this.skim = Object.assign(skim_send, {
            call:skim_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.toString(params.amount0Out),this.wallet.utils.toString(params.amount1Out),params.to,this.wallet.utils.stringToBytes(params.data)];
        let swap_send = async (params: ISwapParams): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params));
            return result;
        }
        let swap_call = async (params: ISwapParams): Promise<void> => {
            let result = await this.call('swap',swapParams(params));
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('sync');
            return result;
        }
        let sync_call = async (): Promise<void> => {
            let result = await this.call('sync');
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
        });
        let transferParams = (params: ITransferParams) => [params.to,this.wallet.utils.toString(params.value)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.value)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let updateFee_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateFee');
            return result;
        }
        let updateFee_call = async (): Promise<void> => {
            let result = await this.call('updateFee');
            return;
        }
        this.updateFee = Object.assign(updateFee_send, {
            call:updateFee_call
        });
        let updateProtocolFee_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateProtocolFee');
            return result;
        }
        let updateProtocolFee_call = async (): Promise<void> => {
            let result = await this.call('updateProtocolFee');
            return;
        }
        this.updateProtocolFee = Object.assign(updateProtocolFee_send, {
            call:updateProtocolFee_call
        });
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