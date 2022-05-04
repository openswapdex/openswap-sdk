import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedLiquidityProvider extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        factory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    addLiquidity_send(params: {
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
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
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
    }): Promise<{
        pair: string;
        _offerIndex: BigNumber;
    }>;
    addLiquidity: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityAndTrader_send(params: {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    addLiquidityAndTrader_call(params: {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }): Promise<{
        pair: string;
        offerIndex: BigNumber;
    }>;
    addLiquidityAndTrader: {
        (params: {
            param: (number | BigNumber)[];
            trader: string[];
            allocation: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            param: (number | BigNumber)[];
            trader: string[];
            allocation: (number | BigNumber)[];
        }) => Promise<{
            pair: string;
            offerIndex: BigNumber;
        }>;
    };
    addLiquidityETH_send(params: {
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
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    addLiquidityETH_call(params: {
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
    }, _value: number | BigNumber): Promise<{
        pair: string;
        _offerIndex: BigNumber;
    }>;
    addLiquidityETH: {
        (params: {
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
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
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
        }, _value: number | BigNumber) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityETHAndTrader_send(params: {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    addLiquidityETHAndTrader_call(params: {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }, _value: number | BigNumber): Promise<{
        pair: string;
        offerIndex: BigNumber;
    }>;
    addLiquidityETHAndTrader: {
        (params: {
            param: (number | BigNumber)[];
            trader: string[];
            allocation: (number | BigNumber)[];
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            param: (number | BigNumber)[];
            trader: string[];
            allocation: (number | BigNumber)[];
        }, _value: number | BigNumber) => Promise<{
            pair: string;
            offerIndex: BigNumber;
        }>;
    };
    configStore(): Promise<string>;
    factory(): Promise<string>;
    govToken(): Promise<string>;
    removeAllLiquidity_send(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeAllLiquidity_call(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeAllLiquidity: {
        (params: {
            tokenA: string;
            tokenB: string;
            to: string;
            pairIndex: number | BigNumber;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            to: string;
            pairIndex: number | BigNumber;
            deadline: number | BigNumber;
        }) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeAllLiquidityETH_send(params: {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeAllLiquidityETH_call(params: {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
    }>;
    removeAllLiquidityETH: {
        (params: {
            tokenA: string;
            to: string;
            pairIndex: number | BigNumber;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            to: string;
            pairIndex: number | BigNumber;
            deadline: number | BigNumber;
        }) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidity_send(params: {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<void>;
    removeLiquidity: {
        (params: {
            tokenA: string;
            tokenB: string;
            removingTokenA: boolean;
            to: string;
            pairIndex: number | BigNumber;
            offerIndex: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            removingTokenA: boolean;
            to: string;
            pairIndex: number | BigNumber;
            offerIndex: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
            deadline: number | BigNumber;
        }) => Promise<void>;
    };
    removeLiquidityETH_send(params: {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH_call(params: {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<void>;
    removeLiquidityETH: {
        (params: {
            tokenA: string;
            removingTokenA: boolean;
            to: string;
            pairIndex: number | BigNumber;
            offerIndex: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            removingTokenA: boolean;
            to: string;
            pairIndex: number | BigNumber;
            offerIndex: number | BigNumber;
            amountOut: number | BigNumber;
            receivingOut: number | BigNumber;
            deadline: number | BigNumber;
        }) => Promise<void>;
    };
    private assign;
}
