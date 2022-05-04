import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_Router extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        factory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    addLiquidity_send(params: {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    addLiquidity: {
        (params: {
            tokenA: string;
            tokenB: string;
            amountADesired: number | BigNumber;
            amountBDesired: number | BigNumber;
            amountAMin: number | BigNumber;
            amountBMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            amountADesired: number | BigNumber;
            amountBDesired: number | BigNumber;
            amountAMin: number | BigNumber;
            amountBMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    addLiquidityETH_send(params: {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    addLiquidityETH_call(params: {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
        liquidity: BigNumber;
    }>;
    addLiquidityETH: {
        (params: {
            token: string;
            amountTokenDesired: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            amountTokenDesired: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    factory(): Promise<string>;
    getAmountIn(params: {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }): Promise<BigNumber>;
    getAmountOut(params: {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }): Promise<BigNumber>;
    getAmountsIn(params: {
        amountOut: number | BigNumber;
        path: string[];
    }): Promise<BigNumber[]>;
    getAmountsOut(params: {
        amountIn: number | BigNumber;
        path: string[];
    }): Promise<BigNumber[]>;
    getReserves(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<{
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    quote(params: {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }): Promise<BigNumber>;
    removeLiquidity_send(params: {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeLiquidity: {
        (params: {
            tokenA: string;
            tokenB: string;
            liquidity: number | BigNumber;
            amountAMin: number | BigNumber;
            amountBMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            liquidity: number | BigNumber;
            amountAMin: number | BigNumber;
            amountBMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeLiquidityETH_send(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETH_call(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
    }>;
    removeLiquidityETH: {
        (params: {
            token: string;
            liquidity: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            liquidity: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHSupportingFeeOnTransferTokens_send(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidityETHSupportingFeeOnTransferTokens_call(params: {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }): Promise<BigNumber>;
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params: {
            token: string;
            liquidity: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            liquidity: number | BigNumber;
            amountTokenMin: number | BigNumber;
            amountETHMin: number | BigNumber;
            to: string;
            deadline: number | BigNumber;
        }) => Promise<BigNumber>;
    };
    removeLiquidityETHWithPermit_send(params: {
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
    }): Promise<TransactionReceipt>;
    removeLiquidityETHWithPermit_call(params: {
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
    }): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
    }>;
    removeLiquidityETHWithPermit: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send(params: {
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
    }): Promise<TransactionReceipt>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call(params: {
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
    }): Promise<BigNumber>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit_send(params: {
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
    }): Promise<TransactionReceipt>;
    removeLiquidityWithPermit_call(params: {
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
    }): Promise<{
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeLiquidityWithPermit: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swapETHForExactTokens_send(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapETHForExactTokens_call(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<BigNumber[]>;
    swapETHForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens_send(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens_call(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<BigNumber[]>;
    swapExactETHForTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens_send(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens_call(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<void>;
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETH_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<BigNumber[]>;
    swapExactTokensForETH: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<void>;
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<void>;
    };
    swapExactTokensForTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<BigNumber[]>;
    swapExactTokensForTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<void>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<void>;
    };
    swapTokensForExactETH_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<BigNumber[]>;
    swapTokensForExactETH: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }): Promise<BigNumber[]>;
    swapTokensForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
        }) => Promise<BigNumber[]>;
    };
    private assign;
}
