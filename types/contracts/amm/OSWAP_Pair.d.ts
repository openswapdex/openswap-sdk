import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_Pair extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[];
    parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[];
    parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[];
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[];
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[];
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[];
    parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[];
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[];
    EIP712_TYPEHASH(): Promise<string>;
    MINIMUM_LIQUIDITY(): Promise<BigNumber>;
    NAME_HASH(): Promise<string>;
    PERMIT_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    allowance(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(param1: string): Promise<BigNumber>;
    burn(to: string): Promise<TransactionReceipt>;
    decimals(): Promise<BigNumber>;
    factory(): Promise<string>;
    getAmountIn(params: {
        tokenOut: string;
        amountOut: number | BigNumber;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        tokenIn: string;
        amountIn: number | BigNumber;
    }): Promise<BigNumber>;
    getReserves(): Promise<{
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    initialize(params: {
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    isLive(): Promise<boolean>;
    kLast(): Promise<BigNumber>;
    mint(to: string): Promise<TransactionReceipt>;
    name(): Promise<string>;
    nonces(param1: string): Promise<BigNumber>;
    permit(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    price0CumulativeLast(): Promise<BigNumber>;
    price1CumulativeLast(): Promise<BigNumber>;
    protocolFee(): Promise<BigNumber>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    skim(to: string): Promise<TransactionReceipt>;
    swap(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<TransactionReceipt>;
    symbol(): Promise<string>;
    sync(): Promise<TransactionReceipt>;
    token0(): Promise<string>;
    token1(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    tradeFee(): Promise<BigNumber>;
    transfer(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    updateFee(): Promise<TransactionReceipt>;
    updateProtocolFee(): Promise<TransactionReceipt>;
}
export declare module OSWAP_Pair {
    interface ApprovalEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        owner: string;
        spender: string;
        value: BigNumber;
    }
    interface BurnEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
    }
    interface MintEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
    }
    interface ProtocolFeeSetEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        protocolFee: BigNumber;
    }
    interface SwapEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
    }
    interface SyncEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        reserve0: BigNumber;
        reserve1: BigNumber;
    }
    interface TradeFeeSetEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        tradeFee: BigNumber;
    }
    interface TransferEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        from: string;
        to: string;
        value: BigNumber;
    }
}
