import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
}
export interface IGetAmountInParams {
    tokenOut: string;
    amountOut: number | BigNumber;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IPermitParams {
    owner: string;
    spender: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class OSWAP_Pair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OSWAP_Pair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[];
    decodeBurnEvent(event: Event): OSWAP_Pair.BurnEvent;
    parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[];
    decodeMintEvent(event: Event): OSWAP_Pair.MintEvent;
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[];
    decodeProtocolFeeSetEvent(event: Event): OSWAP_Pair.ProtocolFeeSetEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_Pair.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[];
    decodeSyncEvent(event: Event): OSWAP_Pair.SyncEvent;
    parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[];
    decodeTradeFeeSetEvent(event: Event): OSWAP_Pair.TradeFeeSetEvent;
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[];
    decodeTransferEvent(event: Event): OSWAP_Pair.TransferEvent;
    EIP712_TYPEHASH: {
        (): Promise<string>;
    };
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    };
    NAME_HASH: {
        (): Promise<string>;
    };
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    };
    VERSION_HASH: {
        (): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string): Promise<BigNumber>;
    };
    burn: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getReserves: {
        (): Promise<{
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
    };
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    };
    isLive: {
        (): Promise<boolean>;
    };
    kLast: {
        (): Promise<BigNumber>;
    };
    mint: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    nonces: {
        (param1: string): Promise<BigNumber>;
    };
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    };
    price0CumulativeLast: {
        (): Promise<BigNumber>;
    };
    price1CumulativeLast: {
        (): Promise<BigNumber>;
    };
    protocolFee: {
        (): Promise<BigNumber>;
    };
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    skim: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    };
    symbol: {
        (): Promise<string>;
    };
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0: {
        (): Promise<string>;
    };
    token1: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    tradeFee: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    updateFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    updateProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_Pair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface ProtocolFeeSetEvent {
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface SyncEvent {
        reserve0: BigNumber;
        reserve1: BigNumber;
        _event: Event;
    }
    interface TradeFeeSetEvent {
        tradeFee: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
