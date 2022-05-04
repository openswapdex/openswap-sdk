import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouterRegistry extends Contract {
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
    customPairs(param1: string): Promise<{
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }>;
    execute_send(params: string[]): Promise<TransactionReceipt>;
    execute_call(params: string[]): Promise<void>;
    execute: {
        (params: string[]): Promise<TransactionReceipt>;
        call: (params: string[]) => Promise<void>;
    };
    getFee(pairAddress: string): Promise<{
        fee: BigNumber;
        feeBase: BigNumber;
    }>;
    getPairTokens(pairAddress: string[]): Promise<{
        token0: string[];
        token1: string[];
    }>;
    getTypeCode(pairAddress: string): Promise<BigNumber>;
    governance(): Promise<string>;
    init_send(params: {
        name: string[];
        factory: string[];
        fee: (number | BigNumber)[];
        feeBase: (number | BigNumber)[];
        typeCode: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    init_call(params: {
        name: string[];
        factory: string[];
        fee: (number | BigNumber)[];
        feeBase: (number | BigNumber)[];
        typeCode: (number | BigNumber)[];
    }): Promise<void>;
    init: {
        (params: {
            name: string[];
            factory: string[];
            fee: (number | BigNumber)[];
            feeBase: (number | BigNumber)[];
            typeCode: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            name: string[];
            factory: string[];
            fee: (number | BigNumber)[];
            feeBase: (number | BigNumber)[];
            typeCode: (number | BigNumber)[];
        }) => Promise<void>;
    };
    owner(): Promise<string>;
    pairs(param1: string): Promise<{
        factory: string;
        token0: string;
        token1: string;
    }>;
    protocolList(param1: number | BigNumber): Promise<string>;
    protocolListLength(): Promise<BigNumber>;
    protocols(param1: string): Promise<{
        name: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
    }>;
    registerPair_send(params: {
        token0: string;
        token1: string;
        pairAddress: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPair_call(params: {
        token0: string;
        token1: string;
        pairAddress: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<void>;
    registerPair: {
        (params: {
            token0: string;
            token1: string;
            pairAddress: string;
            fee: number | BigNumber;
            feeBase: number | BigNumber;
            typeCode: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token0: string;
            token1: string;
            pairAddress: string;
            fee: number | BigNumber;
            feeBase: number | BigNumber;
            typeCode: number | BigNumber;
        }) => Promise<void>;
    };
    registerPairByAddress_send(params: {
        factory: string;
        pairAddress: string;
    }): Promise<TransactionReceipt>;
    registerPairByAddress_call(params: {
        factory: string;
        pairAddress: string;
    }): Promise<void>;
    registerPairByAddress: {
        (params: {
            factory: string;
            pairAddress: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            pairAddress: string;
        }) => Promise<void>;
    };
    registerPairByIndex_send(params: {
        factory: string;
        index: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPairByIndex_call(params: {
        factory: string;
        index: number | BigNumber;
    }): Promise<void>;
    registerPairByIndex: {
        (params: {
            factory: string;
            index: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            index: number | BigNumber;
        }) => Promise<void>;
    };
    registerPairByTokens_send(params: {
        factory: string;
        token0: string;
        token1: string;
    }): Promise<TransactionReceipt>;
    registerPairByTokens_call(params: {
        factory: string;
        token0: string;
        token1: string;
    }): Promise<void>;
    registerPairByTokens: {
        (params: {
            factory: string;
            token0: string;
            token1: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            token0: string;
            token1: string;
        }) => Promise<void>;
    };
    registerPairByTokensV3_send(params: {
        factory: string;
        token0: string;
        token1: string;
        pairIndex: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerPairByTokensV3_call(params: {
        factory: string;
        token0: string;
        token1: string;
        pairIndex: number | BigNumber;
    }): Promise<void>;
    registerPairByTokensV3: {
        (params: {
            factory: string;
            token0: string;
            token1: string;
            pairIndex: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            token0: string;
            token1: string;
            pairIndex: number | BigNumber;
        }) => Promise<void>;
    };
    registerPairsByAddress_send(params: {
        factory: string;
        pairAddress: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByAddress_call(params: {
        factory: string;
        pairAddress: string[];
    }): Promise<void>;
    registerPairsByAddress: {
        (params: {
            factory: string;
            pairAddress: string[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            pairAddress: string[];
        }) => Promise<void>;
    };
    registerPairsByAddress2_send(params: {
        factory: string[];
        pairAddress: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByAddress2_call(params: {
        factory: string[];
        pairAddress: string[];
    }): Promise<void>;
    registerPairsByAddress2: {
        (params: {
            factory: string[];
            pairAddress: string[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string[];
            pairAddress: string[];
        }) => Promise<void>;
    };
    registerPairsByIndex_send(params: {
        factory: string;
        index: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    registerPairsByIndex_call(params: {
        factory: string;
        index: (number | BigNumber)[];
    }): Promise<void>;
    registerPairsByIndex: {
        (params: {
            factory: string;
            index: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            index: (number | BigNumber)[];
        }) => Promise<void>;
    };
    registerPairsByTokens_send(params: {
        factory: string;
        token0: string[];
        token1: string[];
    }): Promise<TransactionReceipt>;
    registerPairsByTokens_call(params: {
        factory: string;
        token0: string[];
        token1: string[];
    }): Promise<void>;
    registerPairsByTokens: {
        (params: {
            factory: string;
            token0: string[];
            token1: string[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            token0: string[];
            token1: string[];
        }) => Promise<void>;
    };
    registerPairsByTokensV3_send(params: {
        factory: string;
        token0: string[];
        token1: string[];
        pairIndex: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    registerPairsByTokensV3_call(params: {
        factory: string;
        token0: string[];
        token1: string[];
        pairIndex: (number | BigNumber)[];
    }): Promise<void>;
    registerPairsByTokensV3: {
        (params: {
            factory: string;
            token0: string[];
            token1: string[];
            pairIndex: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            factory: string;
            token0: string[];
            token1: string[];
            pairIndex: (number | BigNumber)[];
        }) => Promise<void>;
    };
    registerProtocol_send(params: {
        name: string;
        factory: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<TransactionReceipt>;
    registerProtocol_call(params: {
        name: string;
        factory: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }): Promise<void>;
    registerProtocol: {
        (params: {
            name: string;
            factory: string;
            fee: number | BigNumber;
            feeBase: number | BigNumber;
            typeCode: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            name: string;
            factory: string;
            fee: number | BigNumber;
            feeBase: number | BigNumber;
            typeCode: number | BigNumber;
        }) => Promise<void>;
    };
    renounceOwnership_send(): Promise<TransactionReceipt>;
    renounceOwnership_call(): Promise<void>;
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_HybridRouterRegistry {
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
