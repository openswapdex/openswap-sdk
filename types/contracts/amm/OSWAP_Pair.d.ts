import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    EIP712_TYPEHASH(): Promise<string>;
    MINIMUM_LIQUIDITY(): Promise<BigNumber>;
    NAME_HASH(): Promise<string>;
    PERMIT_TYPEHASH(): Promise<string>;
    VERSION_HASH(): Promise<string>;
    allowance(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
    approve_send(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        spender: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    approve: {
        (params: {
            spender: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    balanceOf(param1: string): Promise<BigNumber>;
    burn_send(to: string): Promise<TransactionReceipt>;
    burn_call(to: string): Promise<{
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    burn: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
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
    initialize_send(params: {
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    initialize_call(params: {
        token0: string;
        token1: string;
    }): Promise<void>;
    initialize: {
        (params: {
            token0: string;
            token1: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token0: string;
            token1: string;
        }) => Promise<void>;
    };
    isLive(): Promise<boolean>;
    kLast(): Promise<BigNumber>;
    mint_send(to: string): Promise<TransactionReceipt>;
    mint_call(to: string): Promise<BigNumber>;
    mint: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<BigNumber>;
    };
    name(): Promise<string>;
    nonces(param1: string): Promise<BigNumber>;
    permit_send(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<TransactionReceipt>;
    permit_call(params: {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }): Promise<void>;
    permit: {
        (params: {
            owner: string;
            spender: string;
            value: number | BigNumber;
            deadline: number | BigNumber;
            v: number | BigNumber;
            r: string;
            s: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            owner: string;
            spender: string;
            value: number | BigNumber;
            deadline: number | BigNumber;
            v: number | BigNumber;
            r: string;
            s: string;
        }) => Promise<void>;
    };
    price0CumulativeLast(): Promise<BigNumber>;
    price1CumulativeLast(): Promise<BigNumber>;
    protocolFee(): Promise<BigNumber>;
    setLive_send(isLive: boolean): Promise<TransactionReceipt>;
    setLive_call(isLive: boolean): Promise<void>;
    setLive: {
        (isLive: boolean): Promise<TransactionReceipt>;
        call: (isLive: boolean) => Promise<void>;
    };
    skim_send(to: string): Promise<TransactionReceipt>;
    skim_call(to: string): Promise<void>;
    skim: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    swap_send(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<TransactionReceipt>;
    swap_call(params: {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }): Promise<void>;
    swap: {
        (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amount0Out: number | BigNumber;
            amount1Out: number | BigNumber;
            to: string;
            data: string;
        }) => Promise<void>;
    };
    symbol(): Promise<string>;
    sync_send(): Promise<TransactionReceipt>;
    sync_call(): Promise<void>;
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0(): Promise<string>;
    token1(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    tradeFee(): Promise<BigNumber>;
    transfer_send(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transfer_call(params: {
        to: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    transfer: {
        (params: {
            to: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            to: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    transferFrom_send(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        from: string;
        to: string;
        value: number | BigNumber;
    }): Promise<boolean>;
    transferFrom: {
        (params: {
            from: string;
            to: string;
            value: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            value: number | BigNumber;
        }) => Promise<boolean>;
    };
    updateFee_send(): Promise<TransactionReceipt>;
    updateFee_call(): Promise<void>;
    updateFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    updateProtocolFee_send(): Promise<TransactionReceipt>;
    updateProtocolFee_call(): Promise<void>;
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
