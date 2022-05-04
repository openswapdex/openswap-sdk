import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        oracleFactory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    getAmountsIn(params: {
        amountOut: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    getAmountsOut(params: {
        amountIn: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    oracleFactory(): Promise<string>;
    pairFor(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<string>;
    swapETHForExactTokens_send(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapETHForExactTokens_call(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }, _value: number | BigNumber): Promise<BigNumber[]>;
    swapETHForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens_send(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokens_call(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }, _value: number | BigNumber): Promise<BigNumber[]>;
    swapExactETHForTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens_send(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    swapExactETHForTokensSupportingFeeOnTransferTokens_call(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }, _value: number | BigNumber): Promise<void>;
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForETH_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForETH_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    swapExactTokensForETH: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    swapExactTokensForETHSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }): Promise<void>;
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }) => Promise<void>;
    };
    swapExactTokensForTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    swapExactTokensForTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens_send(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens_call(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }): Promise<void>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountIn: number | BigNumber;
            amountOutMin: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
        }) => Promise<void>;
    };
    swapTokensForExactETH_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    swapTokensForExactETH: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens_send(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<TransactionReceipt>;
    swapTokensForExactTokens_call(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }): Promise<BigNumber[]>;
    swapTokensForExactTokens: {
        (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            amountOut: number | BigNumber;
            amountInMax: number | BigNumber;
            path: string[];
            to: string;
            deadline: number | BigNumber;
            pair: string[];
            fee: (number | BigNumber)[];
            data: string;
        }) => Promise<BigNumber[]>;
    };
    private assign;
}
