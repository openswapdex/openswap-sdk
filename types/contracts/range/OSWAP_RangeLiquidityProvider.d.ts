import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RangeLiquidityProvider extends Contract {
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
        staked: number | BigNumber;
        amountIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addLiquidity_call(params: {
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
    }): Promise<BigNumber>;
    addLiquidity: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<BigNumber>;
    };
    addLiquidityETH_send(params: {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountAIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<TransactionReceipt>;
    addLiquidityETH_call(params: {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountAIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }, _value: number | BigNumber): Promise<BigNumber>;
    addLiquidityETH: {
        (params: {
            tokenA: string;
            addingTokenA: boolean;
            staked: number | BigNumber;
            amountAIn: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            deadline: number | BigNumber;
        }, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            addingTokenA: boolean;
            staked: number | BigNumber;
            amountAIn: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            deadline: number | BigNumber;
        }, _value: number | BigNumber) => Promise<BigNumber>;
    };
    factory(): Promise<string>;
    govToken(): Promise<string>;
    removeAllLiquidity_send(params: {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeAllLiquidity_call(params: {
        tokenA: string;
        tokenB: string;
        to: string;
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
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            to: string;
            deadline: number | BigNumber;
        }) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeAllLiquidityETH_send(params: {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeAllLiquidityETH_call(params: {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }): Promise<{
        amountToken: BigNumber;
        amountETH: BigNumber;
    }>;
    removeAllLiquidityETH: {
        (params: {
            tokenA: string;
            to: string;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            to: string;
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
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    removeLiquidity_call(params: {
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
    }): Promise<void>;
    removeLiquidity: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<void>;
    };
    removeLiquidityETH_send(params: {
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
    }): Promise<TransactionReceipt>;
    removeLiquidityETH_call(params: {
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
    }): Promise<void>;
    removeLiquidityETH: {
        (params: {
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
        }): Promise<TransactionReceipt>;
        call: (params: {
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
        }) => Promise<void>;
    };
    updateProviderOffer_send(params: {
        tokenA: string;
        tokenB: string;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
        deadline: number | BigNumber;
    }): Promise<TransactionReceipt>;
    updateProviderOffer_call(params: {
        tokenA: string;
        tokenB: string;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
        deadline: number | BigNumber;
    }): Promise<void>;
    updateProviderOffer: {
        (params: {
            tokenA: string;
            tokenB: string;
            replenishAmount: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            privateReplenish: boolean;
            deadline: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenA: string;
            tokenB: string;
            replenishAmount: number | BigNumber;
            lowerLimit: number | BigNumber;
            upperLimit: number | BigNumber;
            startDate: number | BigNumber;
            expire: number | BigNumber;
            privateReplenish: boolean;
            deadline: number | BigNumber;
        }) => Promise<void>;
    };
    private assign;
}
