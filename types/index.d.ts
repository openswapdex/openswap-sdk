/// <amd-module name="@openswap/sdk/contracts/OpenSwap.json.ts" />
declare module "@openswap/sdk/contracts/OpenSwap.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@openswap/sdk/contracts/OpenSwap.ts" />
declare module "@openswap/sdk/contracts/OpenSwap.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class OpenSwap extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): OpenSwap.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OpenSwap.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): OpenSwap.TransferEvent[];
        decodeTransferEvent(event: Event): OpenSwap.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        cap: {
            (): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams): Promise<TransactionReceipt>;
            call: (params: IMintParams) => Promise<void>;
        };
        minter: {
            (): Promise<string>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
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
        private assign;
    }
    export module OpenSwap {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_ERC20.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_ERC20.json.ts" {
    const _default_1: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_ERC20.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_ERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
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
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class OSWAP_ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OSWAP_ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): OSWAP_ERC20.TransferEvent;
        EIP712_TYPEHASH: {
            (): Promise<string>;
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
        decimals: {
            (): Promise<BigNumber>;
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
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
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
        private assign;
    }
    export module OSWAP_ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Factory.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Factory.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Factory.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Factory.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_Factory extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_Factory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_Factory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_Factory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_Factory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_Factory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_Factory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_Factory.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber): Promise<string>;
        };
        allPairsLength: {
            (): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams) => Promise<string>;
        };
        getPair: {
            (params: IGetPairParams): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        pairCreator: {
            (): Promise<string>;
        };
        protocolFee: {
            (): Promise<BigNumber>;
        };
        protocolFeeParams: {
            (): Promise<{
                _protocolFee: BigNumber;
                _protocolFeeTo: string;
            }>;
        };
        protocolFeeTo: {
            (): Promise<string>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber) => Promise<void>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string) => Promise<void>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber) => Promise<void>;
        };
        tradeFee: {
            (): Promise<BigNumber>;
        };
        private assign;
    }
    export module OSWAP_Factory {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Pair.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Pair.json.ts" {
    const _default_3: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Pair.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Pair.ts" {
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
    export class OSWAP_Pair extends Contract {
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
    export module OSWAP_Pair {
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
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_PairCreator.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_PairCreator.json.ts" {
    const _default_4: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_PairCreator.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_PairCreator.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_PairCreator extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        createPair: {
            (salt: string): Promise<TransactionReceipt>;
            call: (salt: string) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Router.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Router.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_Router.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_Router.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
    }
    export interface IGetReservesParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IQuoteParams {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHWithPermitParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityWithPermitParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export class OSWAP_Router extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                liquidity: BigNumber;
            }>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                liquidity: BigNumber;
            }>;
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
        getAmountsIn: {
            (params: IGetAmountsInParams): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams): Promise<BigNumber[]>;
        };
        getReserves: {
            (params: IGetReservesParams): Promise<{
                reserveA: BigNumber;
                reserveB: BigNumber;
            }>;
        };
        quote: {
            (params: IQuoteParams): Promise<BigNumber>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidityETHSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
        };
        removeLiquidityETHWithPermit: {
            (params: IRemoveLiquidityETHWithPermitParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
        };
        removeLiquidityWithPermit: {
            (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityWithPermitParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_VotingExecutor1.json.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_VotingExecutor1.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@openswap/sdk/contracts/amm/OSWAP_VotingExecutor1.ts" />
declare module "@openswap/sdk/contracts/amm/OSWAP_VotingExecutor1.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_VotingExecutor1 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(factory: string): Promise<string>;
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        factory: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_FactoryBase.json.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_FactoryBase.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_FactoryBase.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_FactoryBase.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_FactoryBase extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_FactoryBase.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_FactoryBase.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_FactoryBase.PairShutdownedEvent;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_FactoryBase.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_FactoryBase.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber): Promise<string>;
        };
        allPairsLength: {
            (): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams) => Promise<string>;
        };
        getPair: {
            (params: IGetPairParams): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        pairCreator: {
            (): Promise<string>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_FactoryBase {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_PausableFactory.json.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_PausableFactory.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_PausableFactory.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_PausableFactory.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_PausableFactory extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string): Promise<string>;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent;
        governance: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_PausableFactory {
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_PausablePair.json.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_PausablePair.json.ts" {
    const _default_9: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@openswap/sdk/contracts/commons/OSWAP_PausablePair.ts" />
declare module "@openswap/sdk/contracts/commons/OSWAP_PausablePair.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_PausablePair extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        factory: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_Administrator.json.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_Administrator.json.ts" {
    const _default_10: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_10;
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_Administrator.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_Administrator.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IExecutePairRestartParams {
        factory: string;
        pair: string;
    }
    export interface IExecutePairShutdownParams {
        factory: string;
        pair: string;
    }
    export interface IFactoryRestartParams {
        factory: string;
        YorN: boolean;
    }
    export interface IFactoryRestartVoteParams {
        param1: string;
        param2: string;
    }
    export interface IFactoryShutdownParams {
        factory: string;
        YorN: boolean;
    }
    export interface IFactoryShutdownVoteParams {
        param1: string;
        param2: string;
    }
    export interface IPairRestartParams {
        pair: string;
        YorN: boolean;
    }
    export interface IPairRestartVoteParams {
        param1: string;
        param2: string;
    }
    export interface IPairShutdownParams {
        pair: string;
        YorN: boolean;
    }
    export interface IPairShutdownVoteParams {
        param1: string;
        param2: string;
    }
    export interface IVetoVotingParams {
        votingContract: string;
        YorN: boolean;
    }
    export interface IVetoVotingVoteParams {
        param1: string;
        param2: string;
    }
    export class OAXDEX_Administrator extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string): Promise<string>;
        parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[];
        decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent;
        parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[];
        decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent;
        parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[];
        decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent;
        parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[];
        decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent;
        parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[];
        decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent;
        parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[];
        decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent;
        parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[];
        decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent;
        parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[];
        decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent;
        addAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        admins: {
            (param1: number | BigNumber): Promise<string>;
        };
        adminsIdx: {
            (param1: string): Promise<BigNumber>;
        };
        allAdmins: {
            (): Promise<string[]>;
        };
        executeFactoryRestart: {
            (factory: string): Promise<TransactionReceipt>;
            call: (factory: string) => Promise<void>;
        };
        executeFactoryShutdown: {
            (factory: string): Promise<TransactionReceipt>;
            call: (factory: string) => Promise<void>;
        };
        executePairRestart: {
            (params: IExecutePairRestartParams): Promise<TransactionReceipt>;
            call: (params: IExecutePairRestartParams) => Promise<void>;
        };
        executePairShutdown: {
            (params: IExecutePairShutdownParams): Promise<TransactionReceipt>;
            call: (params: IExecutePairShutdownParams) => Promise<void>;
        };
        executeVetoVoting: {
            (votingContract: string): Promise<TransactionReceipt>;
            call: (votingContract: string) => Promise<void>;
        };
        factoryRestart: {
            (params: IFactoryRestartParams): Promise<TransactionReceipt>;
            call: (params: IFactoryRestartParams) => Promise<void>;
        };
        factoryRestartVote: {
            (params: IFactoryRestartVoteParams): Promise<boolean>;
        };
        factoryShutdown: {
            (params: IFactoryShutdownParams): Promise<TransactionReceipt>;
            call: (params: IFactoryShutdownParams) => Promise<void>;
        };
        factoryShutdownVote: {
            (params: IFactoryShutdownVoteParams): Promise<boolean>;
        };
        getFactoryRestartVote: {
            (factory: string): Promise<boolean[]>;
        };
        getFactoryShutdownVote: {
            (factory: string): Promise<boolean[]>;
        };
        getPairRestartVote: {
            (pair: string): Promise<boolean[]>;
        };
        getPairShutdownVote: {
            (pair: string): Promise<boolean[]>;
        };
        getVetoVotingVote: {
            (votingContract: string): Promise<boolean[]>;
        };
        governance: {
            (): Promise<string>;
        };
        maxAdmin: {
            (): Promise<BigNumber>;
        };
        pairRestart: {
            (params: IPairRestartParams): Promise<TransactionReceipt>;
            call: (params: IPairRestartParams) => Promise<void>;
        };
        pairRestartVote: {
            (params: IPairRestartVoteParams): Promise<boolean>;
        };
        pairShutdown: {
            (params: IPairShutdownParams): Promise<TransactionReceipt>;
            call: (params: IPairShutdownParams) => Promise<void>;
        };
        pairShutdownVote: {
            (params: IPairShutdownVoteParams): Promise<boolean>;
        };
        removeAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        setMaxAdmin: {
            (maxAdmin: number | BigNumber): Promise<TransactionReceipt>;
            call: (maxAdmin: number | BigNumber) => Promise<void>;
        };
        vetoVoting: {
            (params: IVetoVotingParams): Promise<TransactionReceipt>;
            call: (params: IVetoVotingParams) => Promise<void>;
        };
        vetoVotingVote: {
            (params: IVetoVotingVoteParams): Promise<boolean>;
        };
        private assign;
    }
    export module OAXDEX_Administrator {
        interface AddAdminEvent {
            admin: string;
            _event: Event;
        }
        interface RemoveAdminEvent {
            admin: string;
            _event: Event;
        }
        interface SetMaxAdminEvent {
            maxAdmin: BigNumber;
            _event: Event;
        }
        interface VotedFactoryRestartEvent {
            admin: string;
            factory: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedFactoryShutdownEvent {
            admin: string;
            factory: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedPairRestartEvent {
            admin: string;
            pair: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedPairShutdownEvent {
            admin: string;
            pair: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedVetoEvent {
            admin: string;
            votingContract: string;
            YorN: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_Governance.json.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_Governance.json.ts" {
    const _default_11: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_11;
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_Governance.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_Governance.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        oaxToken: string;
        votingToken: string;
        names: string[];
        minExeDelay: (number | BigNumber)[];
        minVoteDuration: (number | BigNumber)[];
        maxVoteDuration: (number | BigNumber)[];
        minOaxTokenToCreateVote: (number | BigNumber)[];
        minQuorum: (number | BigNumber)[];
        minStakePeriod: number | BigNumber;
    }
    export interface IAddVotingConfigParams {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }
    export interface IGetVotingConfigProfilesParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetVotingsParams {
        start: number | BigNumber;
        count: number | BigNumber;
    }
    export interface INewVoteParams {
        vote: string;
        isExecutiveVote: boolean;
    }
    export interface ISetVotingConfigParams {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }
    export interface ISetVotingExecutorParams {
        votingExecutor: string;
        bool: boolean;
    }
    export interface IVotedParams {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }
    export class OAXDEX_Governance extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[];
        decodeAddVotingConfigEvent(event: Event): OAXDEX_Governance.AddVotingConfigEvent;
        parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[];
        decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent;
        parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[];
        decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent;
        parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[];
        decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event;
        parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[];
        decodePollEvent(event: Event): OAXDEX_Governance.PollEvent;
        parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[];
        decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent;
        parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[];
        decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent;
        parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[];
        decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent;
        parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[];
        decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent;
        addVotingConfig: {
            (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
            call: (params: IAddVotingConfigParams) => Promise<void>;
        };
        admin: {
            (): Promise<string>;
        };
        allVotings: {
            (): Promise<string[]>;
        };
        closeVote: {
            (vote: string): Promise<TransactionReceipt>;
            call: (vote: string) => Promise<void>;
        };
        executed: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        freezedStake: {
            (param1: string): Promise<{
                amount: BigNumber;
                timestamp: BigNumber;
            }>;
        };
        getNewVoteId: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<BigNumber>;
        };
        getVotingConfigProfiles: {
            (params: IGetVotingConfigProfilesParams): Promise<string[]>;
        };
        getVotingCount: {
            (): Promise<BigNumber>;
        };
        getVotingParams: {
            (name: string): Promise<{
                _minExeDelay: BigNumber;
                _minVoteDuration: BigNumber;
                _maxVoteDuration: BigNumber;
                _minOaxTokenToCreateVote: BigNumber;
                _minQuorum: BigNumber;
            }>;
        };
        getVotings: {
            (params: IGetVotingsParams): Promise<string[]>;
        };
        initAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        initVotingExecutor: {
            (votingExecutor: string[]): Promise<TransactionReceipt>;
            call: (votingExecutor: string[]) => Promise<void>;
        };
        isVotingContract: {
            (votingContract: string): Promise<boolean>;
        };
        isVotingExecutor: {
            (param1: string): Promise<boolean>;
        };
        minStakePeriod: {
            (): Promise<BigNumber>;
        };
        newVote: {
            (params: INewVoteParams): Promise<TransactionReceipt>;
            call: (params: INewVoteParams) => Promise<void>;
        };
        oaxToken: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        renounceOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        setAdmin: {
            (admin: string): Promise<TransactionReceipt>;
            call: (admin: string) => Promise<void>;
        };
        setMinStakePeriod: {
            (minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
            call: (minStakePeriod: number | BigNumber) => Promise<void>;
        };
        setVotingConfig: {
            (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
            call: (params: ISetVotingConfigParams) => Promise<void>;
        };
        setVotingExecutor: {
            (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
            call: (params: ISetVotingExecutorParams) => Promise<void>;
        };
        setVotingRegister: {
            (votingRegister: string): Promise<TransactionReceipt>;
            call: (votingRegister: string) => Promise<void>;
        };
        stake: {
            (value: number | BigNumber): Promise<TransactionReceipt>;
            call: (value: number | BigNumber) => Promise<void>;
        };
        stakeOf: {
            (param1: string): Promise<BigNumber>;
        };
        totalStake: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        unlockStake: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        unstake: {
            (value: number | BigNumber): Promise<TransactionReceipt>;
            call: (value: number | BigNumber) => Promise<void>;
        };
        veto: {
            (voting: string): Promise<TransactionReceipt>;
            call: (voting: string) => Promise<void>;
        };
        voteCount: {
            (): Promise<BigNumber>;
        };
        voted: {
            (params: IVotedParams): Promise<TransactionReceipt>;
            call: (params: IVotedParams) => Promise<void>;
        };
        votingConfigProfiles: {
            (param1: number | BigNumber): Promise<string>;
        };
        votingConfigProfilesLength: {
            (): Promise<BigNumber>;
        };
        votingConfigs: {
            (param1: string): Promise<{
                minExeDelay: BigNumber;
                minVoteDuration: BigNumber;
                maxVoteDuration: BigNumber;
                minOaxTokenToCreateVote: BigNumber;
                minQuorum: BigNumber;
            }>;
        };
        votingExecutor: {
            (param1: number | BigNumber): Promise<string>;
        };
        votingExecutorInv: {
            (param1: string): Promise<BigNumber>;
        };
        votingExecutorLength: {
            (): Promise<BigNumber>;
        };
        votingIdx: {
            (param1: string): Promise<BigNumber>;
        };
        votingRegister: {
            (): Promise<string>;
        };
        votingToken: {
            (): Promise<string>;
        };
        votings: {
            (param1: number | BigNumber): Promise<string>;
        };
        private assign;
    }
    export module OAXDEX_Governance {
        interface AddVotingConfigEvent {
            name: string;
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minOaxTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
            _event: Event;
        }
        interface ExecutedEvent {
            vote: string;
            _event: Event;
        }
        interface NewPollEvent {
            poll: string;
            _event: Event;
        }
        interface NewVoteEvent {
            vote: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface PollEvent {
            account: string;
            poll: string;
            option: BigNumber;
            _event: Event;
        }
        interface SetVotingConfigEvent {
            configName: string;
            paramName: string;
            minExeDelay: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            who: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnstakeEvent {
            who: string;
            value: BigNumber;
            _event: Event;
        }
        interface VetoEvent {
            vote: string;
            _event: Event;
        }
        interface VoteEvent {
            account: string;
            vote: string;
            option: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingContract.json.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingContract.json.ts" {
    const _default_12: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_12;
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingContract.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingContract.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        executor: string;
        id: number | BigNumber;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }
    export class OAXDEX_VotingContract extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        _executeParam: {
            (param1: number | BigNumber): Promise<string>;
        };
        _options: {
            (param1: number | BigNumber): Promise<string>;
        };
        _optionsWeight: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        accountVoteOption: {
            (param1: string): Promise<BigNumber>;
        };
        accountVoteWeight: {
            (param1: string): Promise<BigNumber>;
        };
        execute: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        executeDelay: {
            (): Promise<BigNumber>;
        };
        executeParam: {
            (): Promise<string[]>;
        };
        executed: {
            (): Promise<boolean>;
        };
        executor: {
            (): Promise<string>;
        };
        getParams: {
            (): Promise<{
                executor_: string;
                id_: BigNumber;
                name_: string;
                options_: string[];
                voteStartTime_: BigNumber;
                voteEndTime_: BigNumber;
                executeDelay_: BigNumber;
                status_: boolean[];
                optionsWeight_: BigNumber[];
                quorum_: BigNumber[];
                executeParam_: string[];
            }>;
        };
        governance: {
            (): Promise<string>;
        };
        id: {
            (): Promise<BigNumber>;
        };
        name: {
            (): Promise<string>;
        };
        options: {
            (): Promise<string[]>;
        };
        optionsCount: {
            (): Promise<BigNumber>;
        };
        optionsWeight: {
            (): Promise<BigNumber[]>;
        };
        quorum: {
            (): Promise<BigNumber>;
        };
        threshold: {
            (): Promise<BigNumber>;
        };
        totalVoteWeight: {
            (): Promise<BigNumber>;
        };
        totalWeight: {
            (): Promise<BigNumber>;
        };
        updateWeight: {
            (account: string): Promise<TransactionReceipt>;
            call: (account: string) => Promise<void>;
        };
        veto: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        vetoed: {
            (): Promise<boolean>;
        };
        vote: {
            (option: number | BigNumber): Promise<TransactionReceipt>;
            call: (option: number | BigNumber) => Promise<void>;
        };
        voteEndTime: {
            (): Promise<BigNumber>;
        };
        voteStartTime: {
            (): Promise<BigNumber>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingExecutor.json.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingExecutor.json.ts" {
    const _default_13: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_13;
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingExecutor.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingExecutor.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        admin: string;
    }
    export class OAXDEX_VotingExecutor extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        admin: {
            (): Promise<string>;
        };
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        governance: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingRegistry.json.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingRegistry.json.ts" {
    const _default_14: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_14;
}
/// <amd-module name="@openswap/sdk/contracts/gov/OAXDEX_VotingRegistry.ts" />
declare module "@openswap/sdk/contracts/gov/OAXDEX_VotingRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface INewVoteParams {
        executor: string;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }
    export class OAXDEX_VotingRegistry extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string): Promise<string>;
        governance: {
            (): Promise<string>;
        };
        newVote: {
            (params: INewVoteParams): Promise<TransactionReceipt>;
            call: (params: INewVoteParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/libraries/ERC20.json.ts" />
declare module "@openswap/sdk/contracts/libraries/ERC20.json.ts" {
    const _default_15: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_15;
}
/// <amd-module name="@openswap/sdk/contracts/libraries/ERC20.ts" />
declare module "@openswap/sdk/contracts/libraries/ERC20.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
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
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_CertiKSecurityOracle.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_CertiKSecurityOracle.json.ts" {
    const _default_16: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_16;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_CertiKSecurityOracle.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_CertiKSecurityOracle.ts" {
    import { IWallet, Contract, BigNumber } from "@ijstech/eth-contract";
    export class OSWAP_CertiKSecurityOracle extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(oracleAddress: string): Promise<string>;
        getSecurityScore: {
            (oracle: string): Promise<BigNumber>;
        };
        oracleAddress: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OracleFactory.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OracleFactory.json.ts" {
    const _default_17: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_17;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OracleFactory.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OracleFactory.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        feePerDelegator: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface IAddOldOracleToNewPairParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ICheckAndGetOracleParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICheckAndGetOracleSwapParamsParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface IOraclesParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export interface ISetMinLotSizeParams {
        token: string;
        minLotSize: number | BigNumber;
    }
    export interface ISetOracleParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ISetOracleLiquidityProviderParams {
        oracleRouter: string;
        oracleLiquidityProvider: string;
    }
    export interface ISetSecurityScoreOracleParams {
        securityScoreOracle: string;
        minOracleScore: number | BigNumber;
    }
    export interface ISetWhiteListParams {
        who: string;
        allow: boolean;
    }
    export class OSWAP_OracleFactory extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[];
        decodeOracleAddedEvent(event: Event): OSWAP_OracleFactory.OracleAddedEvent;
        parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[];
        decodeOracleScoresEvent(event: Event): OSWAP_OracleFactory.OracleScoresEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_OracleFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_OracleFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_OracleFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_OracleFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_OracleFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_OracleFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_OracleFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_OracleFactory.ShutdownedEvent;
        parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[];
        decodeWhitelistedEvent(event: Event): OSWAP_OracleFactory.WhitelistedEvent;
        addOldOracleToNewPair: {
            (params: IAddOldOracleToNewPairParams): Promise<TransactionReceipt>;
            call: (params: IAddOldOracleToNewPairParams) => Promise<void>;
        };
        allPairs: {
            (param1: number | BigNumber): Promise<string>;
        };
        allPairsLength: {
            (): Promise<BigNumber>;
        };
        allWhiteListed: {
            (): Promise<{
                list: string[];
                allowed: boolean[];
            }>;
        };
        checkAndGetOracle: {
            (params: ICheckAndGetOracleParams): Promise<string>;
        };
        checkAndGetOracleSwapParams: {
            (params: ICheckAndGetOracleSwapParamsParams): Promise<{
                oracle_: string;
                tradeFee_: BigNumber;
                protocolFee_: BigNumber;
            }>;
        };
        createPair: {
            (params: ICreatePairParams): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams) => Promise<string>;
        };
        feePerDelegator: {
            (): Promise<BigNumber>;
        };
        getPair: {
            (params: IGetPairParams): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        isOracle: {
            (param1: string): Promise<boolean>;
        };
        isWhitelisted: {
            (param1: string): Promise<boolean>;
        };
        minLotSize: {
            (param1: string): Promise<BigNumber>;
        };
        minOracleScore: {
            (): Promise<BigNumber>;
        };
        oracleLiquidityProvider: {
            (): Promise<string>;
        };
        oracleScores: {
            (param1: string): Promise<BigNumber>;
        };
        oracles: {
            (params: IOraclesParams): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        pairCreator: {
            (): Promise<string>;
        };
        protocolFee: {
            (): Promise<BigNumber>;
        };
        protocolFeeTo: {
            (): Promise<string>;
        };
        renounceOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        securityScoreOracle: {
            (): Promise<string>;
        };
        setFeePerDelegator: {
            (feePerDelegator: number | BigNumber): Promise<TransactionReceipt>;
            call: (feePerDelegator: number | BigNumber) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        setMinLotSize: {
            (params: ISetMinLotSizeParams): Promise<TransactionReceipt>;
            call: (params: ISetMinLotSizeParams) => Promise<void>;
        };
        setOracle: {
            (params: ISetOracleParams): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams) => Promise<void>;
        };
        setOracleLiquidityProvider: {
            (params: ISetOracleLiquidityProviderParams): Promise<TransactionReceipt>;
            call: (params: ISetOracleLiquidityProviderParams) => Promise<void>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber) => Promise<void>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string) => Promise<void>;
        };
        setSecurityScoreOracle: {
            (params: ISetSecurityScoreOracleParams): Promise<TransactionReceipt>;
            call: (params: ISetSecurityScoreOracleParams) => Promise<void>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber) => Promise<void>;
        };
        setWhiteList: {
            (params: ISetWhiteListParams): Promise<TransactionReceipt>;
            call: (params: ISetWhiteListParams) => Promise<void>;
        };
        tradeFee: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        updateOracleScore: {
            (oracle: string): Promise<TransactionReceipt>;
            call: (oracle: string) => Promise<void>;
        };
        whitelisted: {
            (param1: number | BigNumber): Promise<string>;
        };
        whitelistedInv: {
            (param1: string): Promise<BigNumber>;
        };
        whitelistedLength: {
            (): Promise<BigNumber>;
        };
        private assign;
    }
    export module OSWAP_OracleFactory {
        interface OracleAddedEvent {
            token0: string;
            token1: string;
            oracle: string;
            _event: Event;
        }
        interface OracleScoresEvent {
            oracle: string;
            score: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
        interface WhitelistedEvent {
            who: string;
            allow: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OracleLiquidityProvider.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OracleLiquidityProvider.json.ts" {
    const _default_18: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_18;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OracleLiquidityProvider.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OracleLiquidityProvider.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export class OSWAP_OracleLiquidityProvider extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<BigNumber>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OraclePair.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OraclePair.json.ts" {
    const _default_19: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_19;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OraclePair.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OraclePair.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }
    export interface IFindPositionParams {
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
    }
    export interface IGetAmountInParams {
        tokenOut: string;
        amountOut: number | BigNumber;
        data: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        data: string;
    }
    export interface IGetLatestPriceParams {
        direction: boolean;
        payload: string;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetQueueParams {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }
    export interface IGetQueueFromIndexParams {
        direction: boolean;
        from: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPauseOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IPurgeExpireParams {
        direction: boolean;
        startingIndex: number | BigNumber;
        limit: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }
    export interface IReplenishParams {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IResumeOfferParams {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
    }
    export interface ISetDelegatorParams {
        delegator: string;
        fee: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export class OSWAP_OraclePair extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_OraclePair.AddLiquidityEvent;
        parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorPauseOfferEvent[];
        decodeDelegatorPauseOfferEvent(event: Event): OSWAP_OraclePair.DelegatorPauseOfferEvent;
        parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorResumeOfferEvent[];
        decodeDelegatorResumeOfferEvent(event: Event): OSWAP_OraclePair.DelegatorResumeOfferEvent;
        parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.NewProviderEvent[];
        decodeNewProviderEvent(event: Event): OSWAP_OraclePair.NewProviderEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_OraclePair.RemoveLiquidityEvent;
        parseReplenishEvent(receipt: TransactionReceipt): OSWAP_OraclePair.ReplenishEvent[];
        decodeReplenishEvent(event: Event): OSWAP_OraclePair.ReplenishEvent;
        parseSetDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SetDelegatorEvent[];
        decodeSetDelegatorEvent(event: Event): OSWAP_OraclePair.SetDelegatorEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_OraclePair.SwapEvent;
        parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwappedOneProviderEvent[];
        decodeSwappedOneProviderEvent(event: Event): OSWAP_OraclePair.SwappedOneProviderEvent;
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<BigNumber>;
        };
        counter: {
            (): Promise<BigNumber>;
        };
        delegator: {
            (param1: string): Promise<string>;
        };
        factory: {
            (): Promise<string>;
        };
        feeBalance: {
            (): Promise<BigNumber>;
        };
        findPosition: {
            (params: IFindPositionParams): Promise<{
                afterIndex: BigNumber;
                nextIndex: BigNumber;
            }>;
        };
        first: {
            (param1: boolean): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams): Promise<BigNumber>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        getQueue: {
            (params: IGetQueueParams): Promise<{
                index: BigNumber[];
                provider: string[];
                amount: BigNumber[];
                staked: BigNumber[];
                expire: BigNumber[];
            }>;
        };
        getQueueFromIndex: {
            (params: IGetQueueFromIndexParams): Promise<{
                index: BigNumber[];
                provider: string[];
                amount: BigNumber[];
                staked: BigNumber[];
                expire: BigNumber[];
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
                isActive: boolean;
                enabled: boolean;
                prev: BigNumber;
                next: BigNumber;
            }>;
        };
        oracleLiquidityProvider: {
            (): Promise<string>;
        };
        pauseOffer: {
            (params: IPauseOfferParams): Promise<TransactionReceipt>;
            call: (params: IPauseOfferParams) => Promise<void>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (param1: string): Promise<BigNumber>;
        };
        purgeExpire: {
            (params: IPurgeExpireParams): Promise<TransactionReceipt>;
            call: (params: IPurgeExpireParams) => Promise<BigNumber>;
        };
        queueSize: {
            (param1: boolean): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        removeAllLiquidity: {
            (provider: string): Promise<TransactionReceipt>;
            call: (provider: string) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                staked: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        replenish: {
            (params: IReplenishParams): Promise<TransactionReceipt>;
            call: (params: IReplenishParams) => Promise<void>;
        };
        resumeOffer: {
            (params: IResumeOfferParams): Promise<TransactionReceipt>;
            call: (params: IResumeOfferParams) => Promise<void>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setDelegator: {
            (params: ISetDelegatorParams): Promise<TransactionReceipt>;
            call: (params: ISetDelegatorParams) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setPrivateReplenish: {
            (replenish: boolean): Promise<TransactionReceipt>;
            call: (replenish: boolean) => Promise<void>;
        };
        stakeBalance: {
            (): Promise<BigNumber>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        private assign;
    }
    export module OSWAP_OraclePair {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            staked: BigNumber;
            amount: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            expire: BigNumber;
            enable: boolean;
            _event: Event;
        }
        interface DelegatorPauseOfferEvent {
            delegator: string;
            provider: string;
            direction: boolean;
            _event: Event;
        }
        interface DelegatorResumeOfferEvent {
            delegator: string;
            provider: string;
            direction: boolean;
            _event: Event;
        }
        interface NewProviderEvent {
            provider: string;
            index: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            unstake: BigNumber;
            amountOut: BigNumber;
            reserveOut: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            expire: BigNumber;
            enable: boolean;
            _event: Event;
        }
        interface ReplenishEvent {
            provider: string;
            direction: boolean;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface SetDelegatorEvent {
            provider: string;
            delegator: string;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            price: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneProviderEvent {
            provider: string;
            direction: boolean;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newCounterReserveBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OraclePairCreator.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OraclePairCreator.json.ts" {
    const _default_20: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_20;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_OraclePairCreator.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_OraclePairCreator.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_OraclePairCreator extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        createPair: {
            (salt: string): Promise<TransactionReceipt>;
            call: (salt: string) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_VotingExecutor2.json.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_VotingExecutor2.json.ts" {
    const _default_21: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_21;
}
/// <amd-module name="@openswap/sdk/contracts/oracle/OSWAP_VotingExecutor2.ts" />
declare module "@openswap/sdk/contracts/oracle/OSWAP_VotingExecutor2.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_VotingExecutor2 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(factory: string): Promise<string>;
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        factory: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangeFactory.json.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangeFactory.json.ts" {
    const _default_22: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_22;
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangeFactory.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangeFactory.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        oracleFactory: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
        protocolFeeTo: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiquidityProviderShareParams {
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_RangeFactory extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber): Promise<string>;
        };
        allPairsLength: {
            (): Promise<BigNumber>;
        };
        checkAndGetSwapParams: {
            (): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams) => Promise<string>;
        };
        getAllLiquidityProviderShare: {
            (): Promise<{
                _stakeAmount: BigNumber[];
                _liquidityProviderShare: BigNumber[];
            }>;
        };
        getCreateAddresses: {
            (): Promise<{
                _governance: string;
                _rangeLiquidityProvider: string;
                _oracleFactory: string;
            }>;
        };
        getLiquidityProviderShare: {
            (stake: number | BigNumber): Promise<BigNumber>;
        };
        getPair: {
            (params: IGetPairParams): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        liquidityProviderShare: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        oracleFactory: {
            (): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        pairCreator: {
            (): Promise<string>;
        };
        protocolFeeTo: {
            (): Promise<string>;
        };
        rangeLiquidityProvider: {
            (): Promise<string>;
        };
        renounceOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        setLiquidityProviderShare: {
            (params: ISetLiquidityProviderShareParams): Promise<TransactionReceipt>;
            call: (params: ISetLiquidityProviderShareParams) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string) => Promise<void>;
        };
        setRangeLiquidityProvider: {
            (rangeLiquidityProvider: string): Promise<TransactionReceipt>;
            call: (rangeLiquidityProvider: string) => Promise<void>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber) => Promise<void>;
        };
        stakeAmount: {
            (param1: number | BigNumber): Promise<BigNumber>;
        };
        tradeFee: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_RangeFactory {
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangeLiquidityProvider.json.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangeLiquidityProvider.json.ts" {
    const _default_23: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_23;
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangeLiquidityProvider.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangeLiquidityProvider.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountAIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IUpdateProviderOfferParams {
        tokenA: string;
        tokenB: string;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
        deadline: number | BigNumber;
    }
    export class OSWAP_RangeLiquidityProvider extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<BigNumber>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<void>;
        };
        updateProviderOffer: {
            (params: IUpdateProviderOfferParams): Promise<TransactionReceipt>;
            call: (params: IUpdateProviderOfferParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangePair.json.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangePair.json.ts" {
    const _default_24: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_24;
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangePair.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangePair.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        tokenOut: string;
        amountOut: number | BigNumber;
        data: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        data: string;
    }
    export interface IGetLatestPriceParams {
        direction: boolean;
        payload: string;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IReplenishParams {
        provider: string;
        direction: boolean;
        amountIn: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export interface IUpdateProviderOfferParams {
        provider: string;
        direction: boolean;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
    }
    export class OSWAP_RangePair extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RangePair.AddLiquidityEvent;
        parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[];
        decodeNewProviderEvent(event: Event): OSWAP_RangePair.NewProviderEvent;
        parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[];
        decodeRemoveAllLiquidityEvent(event: Event): OSWAP_RangePair.RemoveAllLiquidityEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RangePair.RemoveLiquidityEvent;
        parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[];
        decodeReplenishEvent(event: Event): OSWAP_RangePair.ReplenishEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RangePair.SwapEvent;
        parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[];
        decodeSwappedOneProviderEvent(event: Event): OSWAP_RangePair.SwappedOneProviderEvent;
        parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[];
        decodeUpdateProviderOfferEvent(event: Event): OSWAP_RangePair.UpdateProviderOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<BigNumber>;
        };
        counter: {
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
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams): Promise<BigNumber>;
        };
        getOffers: {
            (params: IGetOffersParams): Promise<{
                provider: string[];
                amountAndReserve: BigNumber[];
                lowerLimitAndUpperLimit: BigNumber[];
                startDateAndExpire: BigNumber[];
                privateReplenish: boolean[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                lowerLimit: BigNumber;
                upperLimit: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                amount: BigNumber;
                reserve: BigNumber;
                lowerLimit: BigNumber;
                upperLimit: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        oracleFactory: {
            (): Promise<string>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (param1: string): Promise<BigNumber>;
        };
        providerStaking: {
            (param1: string): Promise<BigNumber>;
        };
        rangeLiquidityProvider: {
            (): Promise<string>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        removeAllLiquidity: {
            (provider: string): Promise<TransactionReceipt>;
            call: (provider: string) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                staked: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        replenish: {
            (params: IReplenishParams): Promise<TransactionReceipt>;
            call: (params: IReplenishParams) => Promise<void>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        stakeBalance: {
            (): Promise<BigNumber>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        updateProviderOffer: {
            (params: IUpdateProviderOfferParams): Promise<TransactionReceipt>;
            call: (params: IUpdateProviderOfferParams) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_RangePair {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            staked: BigNumber;
            amount: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface NewProviderEvent {
            provider: string;
            index: BigNumber;
            _event: Event;
        }
        interface RemoveAllLiquidityEvent {
            provider: string;
            unstake: BigNumber;
            amount0Out: BigNumber;
            amount1Out: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            unstake: BigNumber;
            amountOut: BigNumber;
            reserveOut: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface ReplenishEvent {
            provider: string;
            direction: boolean;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            price: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneProviderEvent {
            provider: string;
            direction: boolean;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newCounterReserveBalance: BigNumber;
            _event: Event;
        }
        interface UpdateProviderOfferEvent {
            provider: string;
            direction: boolean;
            replenish: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangePairCreator.json.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangePairCreator.json.ts" {
    const _default_25: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_25;
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_RangePairCreator.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_RangePairCreator.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_RangePairCreator extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        createPair: {
            (salt: string): Promise<TransactionReceipt>;
            call: (salt: string) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_VotingExecutor3.json.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_VotingExecutor3.json.ts" {
    const _default_26: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_26;
}
/// <amd-module name="@openswap/sdk/contracts/range/OSWAP_VotingExecutor3.ts" />
declare module "@openswap/sdk/contracts/range/OSWAP_VotingExecutor3.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        factory: string;
        hybridRegistry: string;
    }
    export class OSWAP_VotingExecutor3 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        factory: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        hybridRegistry: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_ConfigStore.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_ConfigStore.json.ts" {
    const _default_27: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_27;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_ConfigStore.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_ConfigStore.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface ISetCustomParamParams {
        paramName: string;
        paramValue: string;
    }
    export interface ISetMultiCustomParamParams {
        paramName: string[];
        paramValue: string[];
    }
    export class OSWAP_ConfigStore extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string): Promise<string>;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
        customParam: {
            (param1: string): Promise<string>;
        };
        customParamNames: {
            (param1: number | BigNumber): Promise<string>;
        };
        customParamNamesIdx: {
            (param1: string): Promise<BigNumber>;
        };
        customParamNamesLength: {
            (): Promise<BigNumber>;
        };
        governance: {
            (): Promise<string>;
        };
        setCustomParam: {
            (params: ISetCustomParamParams): Promise<TransactionReceipt>;
            call: (params: ISetCustomParamParams) => Promise<void>;
        };
        setMultiCustomParam: {
            (params: ISetMultiCustomParamParams): Promise<TransactionReceipt>;
            call: (params: ISetMultiCustomParamParams) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_ConfigStore {
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedFactory.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedFactory.json.ts" {
    const _default_28: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_28;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedFactory.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedFactory.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        whitelistFactory: string;
        pairCreator: string;
        configStore: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface IAddOldOracleToNewPairParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ICheckAndGetOracleParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICheckAndGetOracleSwapParamsParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IOraclesParams {
        param1: string;
        param2: string;
    }
    export interface IPairLengthParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export interface ISetOracleParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export class OSWAP_RestrictedFactory extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[];
        decodeOracleAddedEvent(event: Event): OSWAP_RestrictedFactory.OracleAddedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_RestrictedFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_RestrictedFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_RestrictedFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_RestrictedFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_RestrictedFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_RestrictedFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_RestrictedFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_RestrictedFactory.ShutdownedEvent;
        addOldOracleToNewPair: {
            (params: IAddOldOracleToNewPairParams): Promise<TransactionReceipt>;
            call: (params: IAddOldOracleToNewPairParams) => Promise<void>;
        };
        allPairs: {
            (param1: number | BigNumber): Promise<string>;
        };
        allPairsLength: {
            (): Promise<BigNumber>;
        };
        checkAndGetOracle: {
            (params: ICheckAndGetOracleParams): Promise<string>;
        };
        checkAndGetOracleSwapParams: {
            (params: ICheckAndGetOracleSwapParamsParams): Promise<{
                oracle_: string;
                tradeFee_: BigNumber;
                protocolFee_: BigNumber;
            }>;
        };
        configStore: {
            (): Promise<string>;
        };
        createPair: {
            (params: ICreatePairParams): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams) => Promise<string>;
        };
        getCreateAddresses: {
            (): Promise<{
                _governance: string;
                _whitelistFactory: string;
                _restrictedLiquidityProvider: string;
                _configStore: string;
            }>;
        };
        getPair: {
            (params: IGetPairParams): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        init: {
            (restrictedLiquidityProvider: string): Promise<TransactionReceipt>;
            call: (restrictedLiquidityProvider: string) => Promise<void>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        isOracle: {
            (param1: string): Promise<boolean>;
        };
        isPair: {
            (pair: string): Promise<boolean>;
        };
        oracles: {
            (params: IOraclesParams): Promise<string>;
        };
        owner: {
            (): Promise<string>;
        };
        pairCreator: {
            (): Promise<string>;
        };
        pairIdx: {
            (param1: string): Promise<BigNumber>;
        };
        pairLength: {
            (params: IPairLengthParams): Promise<BigNumber>;
        };
        protocolFee: {
            (): Promise<BigNumber>;
        };
        protocolFeeTo: {
            (): Promise<string>;
        };
        renounceOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        restrictedLiquidityProvider: {
            (): Promise<string>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams) => Promise<void>;
        };
        setOracle: {
            (params: ISetOracleParams): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams) => Promise<void>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber) => Promise<void>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string) => Promise<void>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber) => Promise<void>;
        };
        tradeFee: {
            (): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        whitelistFactory: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedFactory {
        interface OracleAddedEvent {
            token0: string;
            token1: string;
            oracle: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newPairSize: BigNumber;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.json.ts" {
    const _default_29: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_29;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider1 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        addLiquidityAndTrader: {
            (params: IAddLiquidityAndTraderParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityAndTraderParams) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        addLiquidityETHAndTrader: {
            (params: IAddLiquidityETHAndTraderParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHAndTraderParams, _value: number | BigNumber) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
        };
        configStore: {
            (): Promise<string>;
        };
        factory: {
            (): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.json.ts" {
    const _default_30: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_30;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDateAndExpire: number | BigNumber;
        feeIn: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDateAndExpire: number | BigNumber;
        feeIn: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider3 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        configStore: {
            (): Promise<string>;
        };
        factory: {
            (): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.json.ts" {
    const _default_31: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_31;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        params: (number | BigNumber)[];
        merkleRoot: string;
        allowlistIpfsCid: string;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        params: (number | BigNumber)[];
        merkleRoot: string;
        allowlistIpfsCid: string;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider4 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, _value: number | BigNumber) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
        };
        configStore: {
            (): Promise<string>;
        };
        factory: {
            (): Promise<string>;
        };
        govToken: {
            (): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair.json.ts" {
    const _default_32: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_32;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair.NewProviderOfferEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair.SwappedOneOfferEvent;
        approvedTrader: {
            (params: IApprovedTraderParams): Promise<string>;
        };
        configStore: {
            (): Promise<string>;
        };
        counter: {
            (param1: boolean): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        feeBalance: {
            (): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
        };
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams): Promise<boolean>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams) => Promise<void>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        restrictedLiquidityProvider: {
            (): Promise<string>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        traderAllocation: {
            (params: ITraderAllocationParams): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams): Promise<BigNumber>;
        };
        whitelistFactory: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair {
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairOracle.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairOracle.json.ts" {
    const _default_33: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_33;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairOracle.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairOracle.ts" {
    import { IWallet, Contract, BigNumber } from "@ijstech/eth-contract";
    export interface IGetLatestPriceParams {
        from: string;
        to: string;
        payload: string;
    }
    export interface IGetRatioParams {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
        payload: string;
    }
    export interface IIsSupportedParams {
        param1: string;
        param2: string;
    }
    export class OSWAP_RestrictedPairOracle extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        WEI: {
            (): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams): Promise<BigNumber>;
        };
        getRatio: {
            (params: IGetRatioParams): Promise<{
                numerator: BigNumber;
                denominator: BigNumber;
            }>;
        };
        isSupported: {
            (params: IIsSupportedParams): Promise<boolean>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_VotingExecutor4.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_VotingExecutor4.json.ts" {
    const _default_34: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_34;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_VotingExecutor4.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_VotingExecutor4.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        factory: string;
        configStore: string;
    }
    export class OSWAP_VotingExecutor4 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        configStore: {
            (): Promise<string>;
        };
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        factory: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouter.json.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouter.json.ts" {
    const _default_35: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_35;
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouter.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouter.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        oracleFactory: string;
        WETH: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface IPairForParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export class OSWAP_HybridRouter extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams): Promise<BigNumber[]>;
        };
        oracleFactory: {
            (): Promise<string>;
        };
        pairFor: {
            (params: IPairForParams): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouterRegistry.json.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouterRegistry.json.ts" {
    const _default_36: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_36;
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouterRegistry.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouterRegistry.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IInitParams {
        name: string[];
        factory: string[];
        fee: (number | BigNumber)[];
        feeBase: (number | BigNumber)[];
        typeCode: (number | BigNumber)[];
    }
    export interface IRegisterPairParams {
        token0: string;
        token1: string;
        pairAddress: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }
    export interface IRegisterPairByAddressParams {
        factory: string;
        pairAddress: string;
    }
    export interface IRegisterPairByIndexParams {
        factory: string;
        index: number | BigNumber;
    }
    export interface IRegisterPairByTokensParams {
        factory: string;
        token0: string;
        token1: string;
    }
    export interface IRegisterPairByTokensV3Params {
        factory: string;
        token0: string;
        token1: string;
        pairIndex: number | BigNumber;
    }
    export interface IRegisterPairsByAddressParams {
        factory: string;
        pairAddress: string[];
    }
    export interface IRegisterPairsByAddress2Params {
        factory: string[];
        pairAddress: string[];
    }
    export interface IRegisterPairsByIndexParams {
        factory: string;
        index: (number | BigNumber)[];
    }
    export interface IRegisterPairsByTokensParams {
        factory: string;
        token0: string[];
        token1: string[];
    }
    export interface IRegisterPairsByTokensV3Params {
        factory: string;
        token0: string[];
        token1: string[];
        pairIndex: (number | BigNumber)[];
    }
    export interface IRegisterProtocolParams {
        name: string;
        factory: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }
    export class OSWAP_HybridRouterRegistry extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string): Promise<string>;
        parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[];
        decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent;
        parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[];
        decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent;
        parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[];
        decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent;
        customPairs: {
            (param1: string): Promise<{
                fee: BigNumber;
                feeBase: BigNumber;
                typeCode: BigNumber;
            }>;
        };
        execute: {
            (params: string[]): Promise<TransactionReceipt>;
            call: (params: string[]) => Promise<void>;
        };
        getFee: {
            (pairAddress: string): Promise<{
                fee: BigNumber;
                feeBase: BigNumber;
            }>;
        };
        getPairTokens: {
            (pairAddress: string[]): Promise<{
                token0: string[];
                token1: string[];
            }>;
        };
        getTypeCode: {
            (pairAddress: string): Promise<BigNumber>;
        };
        governance: {
            (): Promise<string>;
        };
        init: {
            (params: IInitParams): Promise<TransactionReceipt>;
            call: (params: IInitParams) => Promise<void>;
        };
        owner: {
            (): Promise<string>;
        };
        pairs: {
            (param1: string): Promise<{
                factory: string;
                token0: string;
                token1: string;
            }>;
        };
        protocolList: {
            (param1: number | BigNumber): Promise<string>;
        };
        protocolListLength: {
            (): Promise<BigNumber>;
        };
        protocols: {
            (param1: string): Promise<{
                name: string;
                fee: BigNumber;
                feeBase: BigNumber;
                typeCode: BigNumber;
            }>;
        };
        registerPair: {
            (params: IRegisterPairParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairParams) => Promise<void>;
        };
        registerPairByAddress: {
            (params: IRegisterPairByAddressParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByAddressParams) => Promise<void>;
        };
        registerPairByIndex: {
            (params: IRegisterPairByIndexParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByIndexParams) => Promise<void>;
        };
        registerPairByTokens: {
            (params: IRegisterPairByTokensParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByTokensParams) => Promise<void>;
        };
        registerPairByTokensV3: {
            (params: IRegisterPairByTokensV3Params): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByTokensV3Params) => Promise<void>;
        };
        registerPairsByAddress: {
            (params: IRegisterPairsByAddressParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByAddressParams) => Promise<void>;
        };
        registerPairsByAddress2: {
            (params: IRegisterPairsByAddress2Params): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByAddress2Params) => Promise<void>;
        };
        registerPairsByIndex: {
            (params: IRegisterPairsByIndexParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByIndexParams) => Promise<void>;
        };
        registerPairsByTokens: {
            (params: IRegisterPairsByTokensParams): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByTokensParams) => Promise<void>;
        };
        registerPairsByTokensV3: {
            (params: IRegisterPairsByTokensV3Params): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByTokensV3Params) => Promise<void>;
        };
        registerProtocol: {
            (params: IRegisterProtocolParams): Promise<TransactionReceipt>;
            call: (params: IRegisterProtocolParams) => Promise<void>;
        };
        renounceOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string): Promise<TransactionReceipt>;
            call: (newOwner: string) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_HybridRouterRegistry {
        interface CustomPairRegisterEvent {
            pair: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairRegisterEvent {
            factory: string;
            pair: string;
            token0: string;
            token1: string;
            _event: Event;
        }
        interface ProtocolRegisterEvent {
            factory: string;
            name: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_OracleRouter.json.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_OracleRouter.json.ts" {
    const _default_37: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_37;
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_OracleRouter.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_OracleRouter.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        ammFactory: string;
        oracleFactory: string;
        WETH: string;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }
    export interface IGetLatestPriceParams {
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export class OSWAP_OracleRouter extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        ammFactory: {
            (): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams): Promise<BigNumber[]>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams): Promise<BigNumber>;
        };
        oracleFactory: {
            (): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams) => Promise<BigNumber[]>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair1.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair1.json.ts" {
    const _default_38: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_38;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair1.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair1.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }
    export interface ISetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }
    export interface ISetMultipleApprovedTradersParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair1 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair1.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair1.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair1.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair1.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair1.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair1.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair1.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<void>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams): Promise<string>;
        };
        configStore: {
            (): Promise<string>;
        };
        counter: {
            (param1: boolean): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        feeBalance: {
            (): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
        };
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams): Promise<boolean>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams) => Promise<void>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        removeAllLiquidity: {
            (provider: string): Promise<TransactionReceipt>;
            call: (provider: string) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        restrictedLiquidityProvider: {
            (): Promise<string>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setApprovedTrader: {
            (params: ISetApprovedTraderParams): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderParams) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setMultipleApprovedTraders: {
            (params: ISetMultipleApprovedTradersParams): Promise<TransactionReceipt>;
            call: (params: ISetMultipleApprovedTradersParams) => Promise<void>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        traderAllocation: {
            (params: ITraderAllocationParams): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams): Promise<BigNumber>;
        };
        whitelistFactory: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair1 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair3.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair3.json.ts" {
    const _default_39: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_39;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair3.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair3.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
        feeIn: number | BigNumber;
    }
    export interface IAllocationSetParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPrepaidFeeBalanceParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
    }
    export interface ISetApprovedTraderBySignatureParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
        signature: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair3 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair3.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair3.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair3.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair3.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair3.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair3.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair3.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<void>;
        };
        allocationSet: {
            (params: IAllocationSetParams): Promise<boolean>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams): Promise<string>;
        };
        configStore: {
            (): Promise<string>;
        };
        counter: {
            (param1: boolean): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        feeBalance: {
            (): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
        };
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams): Promise<boolean>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams) => Promise<void>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        prepaidFeeBalance: {
            (params: IPrepaidFeeBalanceParams): Promise<BigNumber>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        removeAllLiquidity: {
            (provider: string): Promise<TransactionReceipt>;
            call: (provider: string) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
                totalRemainingFee: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        restrictedLiquidityProvider: {
            (): Promise<string>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setApprovedTraderBySignature: {
            (params: ISetApprovedTraderBySignatureParams): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderBySignatureParams) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        traderAllocation: {
            (params: ITraderAllocationParams): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams): Promise<BigNumber>;
        };
        whitelistFactory: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair3 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            feeIn: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            feeOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair4.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair4.json.ts" {
    const _default_40: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_40;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair4.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair4.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
        feeIn: number | BigNumber;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILastTraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOfferAllowlistIpfsCidParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IOfferMerkleRootParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPrepaidFeeBalanceParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
    }
    export interface ISetApprovedTraderByMerkleProofParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface ISetMerkleRootParams {
        direction: boolean;
        index: number | BigNumber;
        merkleRoot: string;
        ipfsCid: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair4 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair4.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair4.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair4.LockEvent;
        parseMerkleRootEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.MerkleRootEvent[];
        decodeMerkleRootEvent(event: Event): OSWAP_RestrictedPair4.MerkleRootEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair4.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair4.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair4.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair4.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams) => Promise<void>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams): Promise<string>;
        };
        configStore: {
            (): Promise<string>;
        };
        counter: {
            (param1: boolean): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams) => Promise<BigNumber>;
        };
        factory: {
            (): Promise<string>;
        };
        feeBalance: {
            (): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams): Promise<BigNumber>;
        };
        getBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (): Promise<string>;
        };
        governance: {
            (): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams): Promise<TransactionReceipt>;
            call: (params: IInitializeParams) => Promise<void>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams): Promise<boolean>;
        };
        isLive: {
            (): Promise<boolean>;
        };
        lastGovBalance: {
            (): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (): Promise<BigNumber>;
        };
        lastTraderAllocation: {
            (params: ILastTraderAllocationParams): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams) => Promise<void>;
        };
        offerAllowlistIpfsCid: {
            (params: IOfferAllowlistIpfsCidParams): Promise<string>;
        };
        offerMerkleRoot: {
            (params: IOfferMerkleRootParams): Promise<string>;
        };
        offers: {
            (params: IOffersParams): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        prepaidFeeBalance: {
            (params: IPrepaidFeeBalanceParams): Promise<BigNumber>;
        };
        protocolFeeBalance0: {
            (): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        removeAllLiquidity: {
            (provider: string): Promise<TransactionReceipt>;
            call: (provider: string) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                feeOut: BigNumber;
            }>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
                totalRemainingFee: BigNumber;
            }>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams) => Promise<void>;
        };
        restrictedLiquidityProvider: {
            (): Promise<string>;
        };
        scaleDirection: {
            (): Promise<boolean>;
        };
        scaler: {
            (): Promise<BigNumber>;
        };
        setApprovedTraderByMerkleProof: {
            (params: ISetApprovedTraderByMerkleProofParams): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderByMerkleProofParams) => Promise<void>;
        };
        setLive: {
            (isLive: boolean): Promise<TransactionReceipt>;
            call: (isLive: boolean) => Promise<void>;
        };
        setMerkleRoot: {
            (params: ISetMerkleRootParams): Promise<TransactionReceipt>;
            call: (params: ISetMerkleRootParams) => Promise<void>;
        };
        swap: {
            (params: ISwapParams): Promise<TransactionReceipt>;
            call: (params: ISwapParams) => Promise<void>;
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
        traderAllocation: {
            (params: ITraderAllocationParams): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams): Promise<BigNumber>;
        };
        whitelistFactory: {
            (): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair4 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            feeIn: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface MerkleRootEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            merkleRoot: string;
            ipfsCid: string;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            feeOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairCreator.json.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairCreator.json.ts" {
    const _default_41: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_41;
}
/// <amd-module name="@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairCreator.ts" />
declare module "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairCreator.ts" {
    import { IWallet, Contract, TransactionReceipt } from "@ijstech/eth-contract";
    export class OSWAP_RestrictedPairCreator extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        createPair: {
            (salt: string): Promise<TransactionReceipt>;
            call: (salt: string) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouter2.json.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouter2.json.ts" {
    const _default_42: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_42;
}
/// <amd-module name="@openswap/sdk/contracts/router/OSWAP_HybridRouter2.ts" />
declare module "@openswap/sdk/contracts/router/OSWAP_HybridRouter2.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-contract";
    export interface IDeployParams {
        registry: string;
        WETH: string;
    }
    export interface IGetAmountsInEndsWithParams {
        amountOut: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsInStartsWithParams {
        amountOut: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }
    export interface IGetAmountsOutEndsWithParams {
        amountIn: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsOutStartsWithParams {
        amountIn: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }
    export interface IGetPathInParams {
        pair: string[];
        tokenIn: string;
    }
    export interface IGetPathOutParams {
        pair: string[];
        tokenOut: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        tokenOut: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export class OSWAP_HybridRouter2 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        WETH: {
            (): Promise<string>;
        };
        getAmountsInEndsWith: {
            (params: IGetAmountsInEndsWithParams): Promise<BigNumber[]>;
        };
        getAmountsInStartsWith: {
            (params: IGetAmountsInStartsWithParams): Promise<BigNumber[]>;
        };
        getAmountsOutEndsWith: {
            (params: IGetAmountsOutEndsWithParams): Promise<BigNumber[]>;
        };
        getAmountsOutStartsWith: {
            (params: IGetAmountsOutStartsWithParams): Promise<BigNumber[]>;
        };
        getPathIn: {
            (params: IGetPathInParams): Promise<string[]>;
        };
        getPathOut: {
            (params: IGetPathOutParams): Promise<string[]>;
        };
        registry: {
            (): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, _value: number | BigNumber) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, _value: number | BigNumber) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
        };
        private assign;
    }
}
/// <amd-module name="@openswap/sdk/contracts/index.ts" />
declare module "@openswap/sdk/contracts/index.ts" {
    export { OpenSwap } from "@openswap/sdk/contracts/OpenSwap.ts";
    export { OSWAP_ERC20 } from "@openswap/sdk/contracts/amm/OSWAP_ERC20.ts";
    export { OSWAP_Factory } from "@openswap/sdk/contracts/amm/OSWAP_Factory.ts";
    export { OSWAP_Pair } from "@openswap/sdk/contracts/amm/OSWAP_Pair.ts";
    export { OSWAP_PairCreator } from "@openswap/sdk/contracts/amm/OSWAP_PairCreator.ts";
    export { OSWAP_Router } from "@openswap/sdk/contracts/amm/OSWAP_Router.ts";
    export { OSWAP_VotingExecutor1 } from "@openswap/sdk/contracts/amm/OSWAP_VotingExecutor1.ts";
    export { OSWAP_FactoryBase } from "@openswap/sdk/contracts/commons/OSWAP_FactoryBase.ts";
    export { OSWAP_PausableFactory } from "@openswap/sdk/contracts/commons/OSWAP_PausableFactory.ts";
    export { OSWAP_PausablePair } from "@openswap/sdk/contracts/commons/OSWAP_PausablePair.ts";
    export { OAXDEX_Administrator } from "@openswap/sdk/contracts/gov/OAXDEX_Administrator.ts";
    export { OAXDEX_Governance } from "@openswap/sdk/contracts/gov/OAXDEX_Governance.ts";
    export { OAXDEX_VotingContract } from "@openswap/sdk/contracts/gov/OAXDEX_VotingContract.ts";
    export { OAXDEX_VotingExecutor } from "@openswap/sdk/contracts/gov/OAXDEX_VotingExecutor.ts";
    export { OAXDEX_VotingRegistry } from "@openswap/sdk/contracts/gov/OAXDEX_VotingRegistry.ts";
    export { ERC20 } from "@openswap/sdk/contracts/libraries/ERC20.ts";
    export { OSWAP_CertiKSecurityOracle } from "@openswap/sdk/contracts/oracle/OSWAP_CertiKSecurityOracle.ts";
    export { OSWAP_OracleFactory } from "@openswap/sdk/contracts/oracle/OSWAP_OracleFactory.ts";
    export { OSWAP_OracleLiquidityProvider } from "@openswap/sdk/contracts/oracle/OSWAP_OracleLiquidityProvider.ts";
    export { OSWAP_OraclePair } from "@openswap/sdk/contracts/oracle/OSWAP_OraclePair.ts";
    export { OSWAP_OraclePairCreator } from "@openswap/sdk/contracts/oracle/OSWAP_OraclePairCreator.ts";
    export { OSWAP_VotingExecutor2 } from "@openswap/sdk/contracts/oracle/OSWAP_VotingExecutor2.ts";
    export { OSWAP_RangeFactory } from "@openswap/sdk/contracts/range/OSWAP_RangeFactory.ts";
    export { OSWAP_RangeLiquidityProvider } from "@openswap/sdk/contracts/range/OSWAP_RangeLiquidityProvider.ts";
    export { OSWAP_RangePair } from "@openswap/sdk/contracts/range/OSWAP_RangePair.ts";
    export { OSWAP_RangePairCreator } from "@openswap/sdk/contracts/range/OSWAP_RangePairCreator.ts";
    export { OSWAP_VotingExecutor3 } from "@openswap/sdk/contracts/range/OSWAP_VotingExecutor3.ts";
    export { OSWAP_ConfigStore } from "@openswap/sdk/contracts/restricted/OSWAP_ConfigStore.ts";
    export { OSWAP_RestrictedFactory } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedFactory.ts";
    export { OSWAP_RestrictedLiquidityProvider1 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts";
    export { OSWAP_RestrictedLiquidityProvider3 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts";
    export { OSWAP_RestrictedLiquidityProvider4 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts";
    export { OSWAP_RestrictedPair } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair.ts";
    export { OSWAP_RestrictedPairOracle } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairOracle.ts";
    export { OSWAP_VotingExecutor4 } from "@openswap/sdk/contracts/restricted/OSWAP_VotingExecutor4.ts";
    export { OSWAP_HybridRouter } from "@openswap/sdk/contracts/router/OSWAP_HybridRouter.ts";
    export { OSWAP_HybridRouterRegistry } from "@openswap/sdk/contracts/router/OSWAP_HybridRouterRegistry.ts";
    export { OSWAP_OracleRouter } from "@openswap/sdk/contracts/router/OSWAP_OracleRouter.ts";
    export { OSWAP_RestrictedPair1 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair1.ts";
    export { OSWAP_RestrictedPair3 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair3.ts";
    export { OSWAP_RestrictedPair4 } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPair4.ts";
    export { OSWAP_RestrictedPairCreator } from "@openswap/sdk/contracts/restricted/OSWAP_RestrictedPairCreator.ts";
    export { OSWAP_HybridRouter2 } from "@openswap/sdk/contracts/router/OSWAP_HybridRouter2.ts";
}
/// <amd-module name="@openswap/sdk/OpenSwap.ts" />
declare module "@openswap/sdk/OpenSwap.ts" {
    import { Wallet, BigNumber } from "@ijstech/eth-wallet";
    import { OpenSwap as OpenSwapContract } from "@openswap/sdk/contracts/index.ts";
    export class OpenSwap {
        address: string;
        _oswap: OpenSwapContract;
        constructor(wallet: Wallet, address?: string);
        deploy(params: {
            minter: string;
            initSupplyTo: string;
            initSupply: number | BigNumber;
            totalSupply: number | BigNumber;
        }): Promise<string>;
        allowance(params: {
            owner: string;
            spender: string;
        }): Promise<BigNumber>;
        approve(params: {
            spender: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        balanceOf(account: string): Promise<BigNumber>;
        get cap(): Promise<BigNumber>;
        get decimals(): Promise<number>;
        decreaseAllowance(params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        increaseAllowance(params: {
            spender: string;
            addedValue: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        mint(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.TransferEvent>;
        get minter(): Promise<string>;
        get name(): Promise<string>;
        get symbol(): Promise<string>;
        get totalSupply(): Promise<BigNumber>;
        transfer(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.TransferEvent>;
        transferFrom(params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }): Promise<{
            transfer: OpenSwapContract.TransferEvent;
            approval: OpenSwapContract.ApprovalEvent;
        }>;
    }
}
/// <amd-module name="@openswap/sdk/deploy.ts" />
declare module "@openswap/sdk/deploy.ts" {
    import { Wallet, BigNumber } from "@ijstech/eth-wallet";
    import { OSWAP_Factory, OSWAP_PairCreator, OSWAP_Router, OSWAP_VotingExecutor1, OAXDEX_Governance, OAXDEX_VotingExecutor, OAXDEX_Administrator, OAXDEX_VotingRegistry, OSWAP_OraclePairCreator, OSWAP_VotingExecutor2, OSWAP_OracleFactory, OSWAP_OracleLiquidityProvider, OSWAP_OracleRouter, OSWAP_HybridRouterRegistry, OSWAP_HybridRouter2 } from "@openswap/sdk/contracts/index.ts";
    import { OpenSwap } from "@openswap/sdk/OpenSwap.ts";
    export interface ICoreContractsDeploymentResult {
        administrator?: string;
        factory?: string;
        governance?: string;
        oswap?: string;
        votingToken?: string;
        pairCreator?: string;
        router?: string;
        votingRegistry?: string;
        votingExecutor?: string;
        votingExecutor1?: string;
        weth?: string;
    }
    export interface IOracleContractsDeploymentResult {
        oracleFactory?: string;
        oracleLiquidityProvider?: string;
        oraclePairCreator?: string;
        oracleRouter?: string;
        votingExecutor2?: string;
    }
    export interface IRangeContractsDeploymentResult {
        rangeFactory?: string;
        rangeLiquidityProvider?: string;
        rangePairCreator?: string;
        votingExecutor3?: string;
    }
    export interface IRestrictedContractsDeploymentResult {
        restrictedFactory?: string;
        restrictedLiquidityProvider?: string;
        restrictedPairCreator?: string;
        configStore?: string;
        votingExecutor4?: string;
    }
    export interface IHybridRouterDeploymentResult {
        hybridRouter?: string;
        hybridRouterRegistry?: string;
    }
    export interface IDeploymentResult extends ICoreContractsDeploymentResult, IOracleContractsDeploymentResult, IRangeContractsDeploymentResult, IRestrictedContractsDeploymentResult, IHybridRouterDeploymentResult {
    }
    export interface IGovProfile {
        "minExeDelay": number;
        "minVoteDuration": number;
        "maxVoteDuration": number;
        "minGovTokenToCreateVote": number;
        "minQuorum": number;
    }
    export interface IGovOptions {
        minStakePeriod: number;
        tradeFee: number;
        protocolFee: number;
        protocolFeeTo: string;
        profiles: {
            name: string[];
            minExeDelay: number[];
            minVoteDuration: number[];
            maxVoteDuration: number[];
            minGovTokenToCreateVote: number[] | BigNumber[];
            minQuorum: number[] | BigNumber[];
        };
    }
    export const DefaultGovOptions: IGovOptions;
    export interface IGovTokenOptions {
        initSupply: number | BigNumber;
        initSupplyTo: string;
        minter: string;
        totalSupply: number | BigNumber;
    }
    export const DefaultGovTokenOptions: IGovTokenOptions;
    export interface IAmmOptions {
        governance?: string;
        pairCreator?: string;
        protocolFee?: number;
        protocolFeeTo?: string;
        tradeFee?: number;
    }
    export interface IOracleFactoryOptions {
        feePerDelegator?: number | BigNumber;
        governance?: string;
        pairCreator?: string;
        protocolFee?: number | BigNumber;
        protocolFeeTo?: string;
        tradeFee?: number | BigNumber;
    }
    export interface IRangeFactoryOptions {
        governance?: string;
        oracleFactory?: string;
        pairCreator?: string;
        tradeFee?: number | BigNumber;
        stakeAmount?: number[] | BigNumber[];
        liquidityProviderShare?: number[] | BigNumber[];
        protocolFeeTo?: string;
    }
    export interface IRestrictedFactoryOptions {
        governance?: string;
        whitelistFactory?: string;
        pairCreator?: string;
        configStore?: string;
        tradeFee?: number | BigNumber;
        protocolFee?: number | BigNumber;
        protocolFeeTo?: string;
    }
    export interface IHybridRouterOptions {
        registryAddress?: string;
        weth?: string;
        governance?: string;
        name?: string[];
        factory?: string[];
        fee?: number[] | BigNumber[];
        feeBase?: number[] | BigNumber[];
        typeCode?: number[] | BigNumber[];
    }
    export interface IDeployOptions {
        govTokenOptions?: IGovTokenOptions;
        govOptions?: IGovOptions;
        amm?: IAmmOptions;
        oracle?: IOracleFactoryOptions;
        range?: IRangeFactoryOptions;
        restricted?: IRestrictedFactoryOptions;
        hybridRouter?: IHybridRouterOptions;
        tokens?: {
            oswap?: string;
            weth?: string;
            votingToken?: string;
        };
    }
    export interface IDeploymentContracts {
        openSwap: OpenSwap;
        governance: OAXDEX_Governance;
        administrator: OAXDEX_Administrator;
        registry: OAXDEX_VotingRegistry;
        pairCreator: OSWAP_PairCreator;
        factory: OSWAP_Factory;
        oraclePairCreator: OSWAP_OraclePairCreator;
        router: OSWAP_Router;
        oracleFactory: OSWAP_OracleFactory;
        oracleRouter: OSWAP_OracleRouter;
        oracleLiquidityProvider: OSWAP_OracleLiquidityProvider;
        hybridRouterRegistry: OSWAP_HybridRouterRegistry;
        hybridRouter: OSWAP_HybridRouter2;
        executor: OAXDEX_VotingExecutor;
        executor1: OSWAP_VotingExecutor1;
        executor2: OSWAP_VotingExecutor2;
    }
    export function toDeploymentContracts(wallet: Wallet, result: IDeploymentResult): IDeploymentContracts;
    export function deployCoreContracts(wallet: Wallet, options: IDeployOptions): Promise<ICoreContractsDeploymentResult>;
    export function deployOracleContracts(wallet: Wallet, options: IOracleFactoryOptions, coreContractsResult: ICoreContractsDeploymentResult): Promise<IOracleContractsDeploymentResult>;
    export function deployRangeContracts(wallet: Wallet, options: IRangeFactoryOptions, weth: string, hybridRegistry: string): Promise<IRangeContractsDeploymentResult>;
    export function deployRestrictedContracts(wallet: Wallet, options: IRestrictedFactoryOptions, weth: string): Promise<IRestrictedContractsDeploymentResult>;
    export function deployRestrictedPairOracle(wallet: Wallet): Promise<string>;
    export function initHybridRouterRegistry(wallet: Wallet, options: IHybridRouterOptions): Promise<void>;
    export function deployHybridRouter(wallet: Wallet, options: IHybridRouterOptions): Promise<IHybridRouterDeploymentResult>;
    export function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
}
/// <amd-module name="@openswap/sdk" />
declare module "@openswap/sdk" {
    export * as Contracts from "@openswap/sdk/contracts/index.ts";
    export { deploy, deployCoreContracts, deployOracleContracts, deployRangeContracts, deployRestrictedContracts, deployHybridRouter, initHybridRouterRegistry, deployRestrictedPairOracle, IDeploymentResult, IDeploymentContracts, toDeploymentContracts } from "@openswap/sdk/deploy.ts";
    export { OpenSwap } from "@openswap/sdk/OpenSwap.ts";
}
