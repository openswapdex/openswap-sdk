import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouter2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        registry: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    getAmountsInEndsWith(params: {
        amountOut: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsInStartsWith(params: {
        amountOut: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOutEndsWith(params: {
        amountIn: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOutStartsWith(params: {
        amountIn: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }): Promise<BigNumber[]>;
    getPathIn(params: {
        pair: string[];
        tokenIn: string;
    }): Promise<string[]>;
    getPathOut(params: {
        pair: string[];
        tokenOut: string;
    }): Promise<string[]>;
    registry(): Promise<string>;
    swapETHForExactTokens_send(params: {
        amountOut: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapETHForExactTokens_call(params: {
        amountOut: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapETHForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokens_send(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens_call(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapExactETHForTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens_send(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens_call(params: {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }, _value: number | BigNumber): Promise<void>;
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETH_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapExactTokensForETH: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<void>;
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<void>;
    };
    swapExactTokensForTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapExactTokensForTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            tokenIn: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            tokenIn: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<void>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            tokenIn: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            pair: string[];
            tokenIn: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<void>;
    };
    swapTokensForExactETH_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapTokensForExactETH: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            pair: string[];
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapTokensForExactTokens_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        tokenOut: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        tokenOut: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }): Promise<{
        path: string[];
        amounts: BigNumber[];
    }>;
    swapTokensForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            pair: string[];
            tokenOut: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            pair: string[];
            tokenOut: string;
            to: string;
            deadline: number | BigNumber;
            data: string;
        }) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    private assign;
}
