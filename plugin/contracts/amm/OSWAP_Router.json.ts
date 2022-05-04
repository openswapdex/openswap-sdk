export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "WETH",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountADesired",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "factory",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                }
            ],
            "name": "getAmountIn",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                }
            ],
            "name": "getAmountOut",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }
            ],
            "name": "getAmountsIn",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }
            ],
            "name": "getAmountsOut",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "getReserves",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                }
            ],
            "name": "quote",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidityETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "removeLiquidityETHWithPermit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "removeLiquidityWithPermit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapETHForExactTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactETHForTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactTokensForETH",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactTokensForTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapTokensForExactETH",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapTokensForExactTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    "bytecode": "60c060405234801561001057600080fd5b5060405162005387380380620053878339818101604052604081101561003557600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61527562000112600039806101b75280610ee05280610f1b5280611107528061139e52806119245280611adc52806120a9528061222d5280612313528061241a52806125c2528061265752806128d05280612a765280612b4b5280612c505280612d385280612db952806136145280613929528061395e52806139925280613a135280613c2d5280613dd25280613e675250806133b752806143825280614e715280614f5252506152756000f3fe60806040526004361061019a5760003560e01c80638803dbee116100e1578063c45a01551161008a578063ded9382a11610064578063ded9382a14610c74578063e8e3370014610cf4578063f305d71914610d81578063fb3bdb4114610dd4576101e0565b8063c45a015514610b60578063d06ca61f14610b75578063d52bb6f414610c2c576101e0565b8063af2979eb116100bb578063af2979eb14610a03578063b6f9de9514610a63578063baa2abde14610af6576101e0565b80638803dbee146108ea578063ad5c46481461098f578063ad615dec146109cd576101e0565b80634a25d94a116101435780635e1e63251161011d5780635e1e632514610764578063791ac947146107b25780637ff36ab514610857576101e0565b80634a25d94a1461059a5780635b0d59841461063f5780635c11d795146106bf576101e0565b80631f00ca74116101745780631f00ca74146103b35780632195995c1461046a57806338ed1739146104f5576101e0565b806302751cec146101e55780630a9a2b721461025e57806318cbafe5146102be576101e0565b366101e0573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101de57fe5b005b600080fd5b3480156101f157600080fd5b50610245600480360360c081101561020857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a00135610e67565b6040805192835260208301919091528051918290030190f35b34801561026a57600080fd5b506102ac6004803603606081101561028157600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff60208201358116916040013516610fba565b60408051918252519081900360200190f35b3480156102ca57600080fd5b50610363600480360360a08110156102e157600080fd5b81359160208101359181019060608101604082013564010000000081111561030857600080fd5b82018360208201111561031a57600080fd5b8035906020019184602083028401116401000000008311171561033c57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff813516906020013561107e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561039f578181015183820152602001610387565b505050509050019250505060405180910390f35b3480156103bf57600080fd5b50610363600480360360408110156103d657600080fd5b813591908101906040810160208201356401000000008111156103f857600080fd5b82018360208201111561040a57600080fd5b8035906020019184602083028401116401000000008311171561042c57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061146a945050505050565b34801561047657600080fd5b50610245600480360361016081101561048e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff61010082013516906101208101359061014001356115f8565b34801561050157600080fd5b50610363600480360360a081101561051857600080fd5b81359160208101359181019060608101604082013564010000000081111561053f57600080fd5b82018360208201111561055157600080fd5b8035906020019184602083028401116401000000008311171561057357600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611715565b3480156105a657600080fd5b50610363600480360360a08110156105bd57600080fd5b8135916020810135918101906060810160408201356401000000008111156105e457600080fd5b8201836020820111156105f657600080fd5b8035906020019184602083028401116401000000008311171561061857600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff813516906020013561189b565b34801561064b57600080fd5b506102ac600480360361014081101561066357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135611ad3565b3480156106cb57600080fd5b506101de600480360360a08110156106e257600080fd5b81359160208101359181019060608101604082013564010000000081111561070957600080fd5b82018360208201111561071b57600080fd5b8035906020019184602083028401116401000000008311171561073d57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611c04565b34801561077057600080fd5b506102ac6004803603606081101561078757600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff60208201358116916040013516611f92565b3480156107be57600080fd5b506101de600480360360a08110156107d557600080fd5b8135916020810135918101906060810160408201356401000000008111156107fc57600080fd5b82018360208201111561080e57600080fd5b8035906020019184602083028401116401000000008311171561083057600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612022565b6103636004803603608081101561086d57600080fd5b8135919081019060408101602082013564010000000081111561088f57600080fd5b8201836020820111156108a157600080fd5b803590602001918460208302840111640100000000831117156108c357600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356123a6565b3480156108f657600080fd5b50610363600480360360a081101561090d57600080fd5b81359160208101359181019060608101604082013564010000000081111561093457600080fd5b82018360208201111561094657600080fd5b8035906020019184602083028401116401000000008311171561096857600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff813516906020013561279a565b34801561099b57600080fd5b506109a46128ce565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156109d957600080fd5b506102ac600480360360608110156109f057600080fd5b50803590602081013590604001356128f2565b348015610a0f57600080fd5b506102ac600480360360c0811015610a2657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356129fe565b6101de60048036036080811015610a7957600080fd5b81359190810190604081016020820135640100000000811115610a9b57600080fd5b820183602082011115610aad57600080fd5b80359060200191846020830284011164010000000083111715610acf57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612bde565b348015610b0257600080fd5b50610245600480360360e0811015610b1957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c001356130a0565b348015610b6c57600080fd5b506109a46133b5565b348015610b8157600080fd5b5061036360048036036040811015610b9857600080fd5b81359190810190604081016020820135640100000000811115610bba57600080fd5b820183602082011115610bcc57600080fd5b80359060200191846020830284011164010000000083111715610bee57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506133d9945050505050565b348015610c3857600080fd5b5061024560048036036040811015610c4f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516613523565b348015610c8057600080fd5b506102456004803603610140811015610c9857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e08201351690610100810135906101200135613609565b348015610d0057600080fd5b50610d636004803603610100811015610d1857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135613740565b60408051938452602084019290925282820152519081900360600190f35b610d63600480360360c0811015610d9757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356138ae565b61036360048036036080811015610dea57600080fd5b81359190810190604081016020820135640100000000811115610e0c57600080fd5b820183602082011115610e1e57600080fd5b80359060200191846020830284011164010000000083111715610e4057600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135613bb9565b6000808242811015610eda57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610f09897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a6130a0565b9093509150610f19898685613fdc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610f8c57600080fd5b505af1158015610fa0573d6000803e3d6000fd5b50505050610fae85836141b9565b50965096945050505050565b6000610fc683836142f6565b73ffffffffffffffffffffffffffffffffffffffff1663632db21c83866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b15801561104a57600080fd5b505afa15801561105e573d6000803e3d6000fd5b505050506040513d602081101561107457600080fd5b5051949350505050565b606081428110156110f057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061115557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b611231888787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506133d992505050565b9150868260018451038151811061124457fe5b602002602001015110156112b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b61135d868660008181106112c957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611343898960008181106112f757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061132157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166142f6565b8560008151811061135057fe5b60200260200101516143fb565b61139c828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152503092506145cb915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836001855103815181106113e857fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561142657600080fd5b505af115801561143a573d6000803e3d6000fd5b5050505061145f848360018551038151811061145257fe5b60200260200101516141b9565b509695505050505050565b60606002825110156114dd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b815167ffffffffffffffff811180156114f557600080fd5b5060405190808252806020026020018201604052801561151f578160200160208202803683370190505b509050828160018351038151811061153357fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b80156115f1576115b082828151811061157857fe5b602002602001015184600184038151811061158f57fe5b60200260200101518584815181106115a357fe5b6020026020010151610fba565b8260018303815181106115bf57fe5b60209081029190910101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611563565b5092915050565b60008060006116078e8e6142f6565b9050600087611616578c611638565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b1580156116d457600080fd5b505af11580156116e8573d6000803e3d6000fd5b505050506116fb8f8f8f8f8f8f8f6130a0565b809450819550505050509b509b9950505050505050505050565b6060814281101561178757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6117c4888787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506133d992505050565b915086826001845103815181106117d757fe5b6020026020010151101561184c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b61185c868660008181106112c957fe5b61145f828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506145cb915050565b6060814281101561190d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061197257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611a1157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b611a4e8887878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061146a92505050565b91508682600081518110611a5e57fe5b602002602001015111156112b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b600080611b008c7f00000000000000000000000000000000000000000000000000000000000000006142f6565b9050600086611b0f578b611b31565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c48101879052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b158015611bcd57600080fd5b505af1158015611be1573d6000803e3d6000fd5b50505050611bf38d8d8d8d8d8d6129fe565b9d9c50505050505050505050505050565b8042811015611c7457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b611ce285856000818110611c8457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611cdc88886000818110611cb257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168989600181811061132157fe5b8a6143fb565b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611d1257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611dab57600080fd5b505afa158015611dbf573d6000803e3d6000fd5b505050506040513d6020811015611dd557600080fd5b50516040805160208881028281018201909352888252929350611e17929091899189918291850190849080828437600092019190915250889250614810915050565b86611f1b8288887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611e4a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ee357600080fd5b505afa158015611ef7573d6000803e3d6000fd5b505050506040513d6020811015611f0d57600080fd5b50519063ffffffff614bf316565b1015611f8857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b5050505050505050565b6000611f9e83836142f6565b73ffffffffffffffffffffffffffffffffffffffff1663ca706bcf84866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b15801561104a57600080fd5b804281101561209257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106120f757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461219657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6121a685856000818110611c8457fe5b6121e4858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250614810915050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b15801561227457600080fd5b505afa158015612288573d6000803e3d6000fd5b505050506040513d602081101561229e57600080fd5b505190508681101561231157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561238457600080fd5b505af1158015612398573d6000803e3d6000fd5b50505050611f8884826141b9565b6060814281101561241857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168686600081811061245c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124fb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b612538348787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506133d992505050565b9150868260018451038151811061254b57fe5b602002602001015110156125c057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061260957fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b15801561263c57600080fd5b505af1158015612650573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6126a188886000818110611cb257fe5b846000815181106126ae57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561271f57600080fd5b505af1158015612733573d6000803e3d6000fd5b505050506040513d602081101561274957600080fd5b505161275157fe5b612790828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506145cb915050565b5095945050505050565b6060814281101561280c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6128498887878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061146a92505050565b9150868260008151811061285957fe5b6020026020010151111561184c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b600080841161296257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b6000831180156129725750600082115b6129dd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b826129ee858463ffffffff614c3e16565b816129f557fe5b04949350505050565b60008142811015612a7057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b612a9f887f000000000000000000000000000000000000000000000000000000000000000089898930896130a0565b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051919450612b4992508a91879173ffffffffffffffffffffffffffffffffffffffff8416916370a0823191602480820192602092909190829003018186803b158015612b1857600080fd5b505afa158015612b2c573d6000803e3d6000fd5b505050506040513d6020811015612b4257600080fd5b5051613fdc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015612bbc57600080fd5b505af1158015612bd0573d6000803e3d6000fd5b5050505061145f84836141b9565b8042811015612c4e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1685856000818110612c9257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612d3157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612d9e57600080fd5b505af1158015612db2573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612e0388886000818110611cb257fe5b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612e6d57600080fd5b505af1158015612e81573d6000803e3d6000fd5b505050506040513d6020811015612e9757600080fd5b5051612e9f57fe5b600086867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612ecf57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612f6857600080fd5b505afa158015612f7c573d6000803e3d6000fd5b505050506040513d6020811015612f9257600080fd5b50516040805160208981028281018201909352898252929350612fd49290918a918a918291850190849080828437600092019190915250899250614810915050565b87611f1b8289897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061300757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ee357600080fd5b600080824281101561311357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061311f8b8b6142f6565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b1580156131a057600080fd5b505af11580156131b4573d6000803e3d6000fd5b505050506040513d60208110156131ca57600080fd5b5050604080517f89afcb4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b15801561323d57600080fd5b505af1158015613251573d6000803e3d6000fd5b505050506040513d604081101561326757600080fd5b508051602090910151909250905060006132818e8e614cb1565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff16146132be5781836132c1565b82825b90975095508a87101561333557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f494e53554646494349454e545f415f414d4f554e540000000000000000000000604482015290519081900360640190fd5b898610156133a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f494e53554646494349454e545f425f414d4f554e540000000000000000000000604482015290519081900360640190fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b606060028251101561344c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561346457600080fd5b5060405190808252806020026020018201604052801561348e578160200160208202803683370190505b509050828160008151811061349f57fe5b60200260200101818152505060005b60018351038110156115f1576135018282815181106134c957fe5b60200260200101518483815181106134dd57fe5b60200260200101518584600101815181106134f457fe5b6020026020010151611f92565b82826001018151811061351057fe5b60209081029190910101526001016134ae565b60008060006135328585614cb1565b50905060008061354287876142f6565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561358757600080fd5b505afa15801561359b573d6000803e3d6000fd5b505050506040513d60608110156135b157600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff878116908416146135f85780826135fb565b81815b909890975095505050505050565b60008060006136388d7f00000000000000000000000000000000000000000000000000000000000000006142f6565b9050600087613647578c613669565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b15801561370557600080fd5b505af1158015613719573d6000803e3d6000fd5b5050505061372b8e8e8e8e8e8e610e67565b909f909e509c50505050505050505050505050565b600080600083428110156137b557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6137c38c8c8c8c8c8c614e1a565b909450925060006137d48d8d6142f6565b90506137e28d3383886143fb565b6137ee8c3383876143fb565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561386d57600080fd5b505af1158015613881573d6000803e3d6000fd5b505050506040513d602081101561389757600080fd5b5051949d939c50939a509198505050505050505050565b6000806000834281101561392357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6139518a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c614e1a565b909450925060006139828b7f00000000000000000000000000000000000000000000000000000000000000006142f6565b90506139908b3383886143fb565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b1580156139f857600080fd5b505af1158015613a0c573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015613ab857600080fd5b505af1158015613acc573d6000803e3d6000fd5b505050506040513d6020811015613ae257600080fd5b5051613aea57fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015613b6957600080fd5b505af1158015613b7d573d6000803e3d6000fd5b505050506040513d6020811015613b9357600080fd5b5051925034841015613bab57613bab338534036141b9565b505096509650969350505050565b60608142811015613c2b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1686866000818110613c6f57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614613d0e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b613d4b8787878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061146a92505050565b91503482600081518110613d5b57fe5b60200260200101511115613dd057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db083600081518110613e1957fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015613e4c57600080fd5b505af1158015613e60573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb613eb188886000818110611cb257fe5b84600081518110613ebe57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015613f2f57600080fd5b505af1158015613f43573d6000803e3d6000fd5b505050506040513d6020811015613f5957600080fd5b5051613f6157fe5b613fa0828787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506145cb915050565b81600081518110613fad57fe5b6020026020010151341115612790576127903383600081518110613fcd57fe5b602002602001015134036141b9565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b602083106140b257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101614075565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614114576040519150601f19603f3d011682016040523d82523d6000602084013e614119565b606091505b5091509150818015614147575080511580614147575080806020019051602081101561414457600080fd5b50515b6141b257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061423057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016141f3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614292576040519150601f19603f3d011682016040523d82523d6000602084013e614297565b606091505b50509050806142f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806151f96023913960400191505060405180910390fd5b505050565b60008060006143058585614cb1565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401527f000000000000000000000000000000000000000000000000000000000000000090951b166069820152607d8101939093527f5c193265bc1f16117085a454b86f04b786de5c40d54a45dc24869043eb75f155609d808501919091528151808503909101815260bd9093019052815191012095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b602083106144d957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161449c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461453b576040519150601f19603f3d011682016040523d82523d6000602084013e614540565b606091505b509150915081801561456e57508051158061456e575080806020019051602081101561456b57600080fd5b50515b6145c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061521c6024913960400191505060405180910390fd5b505050505050565b60005b600183510381101561480a576000808483815181106145e957fe5b602002602001015185846001018151811061460057fe5b60200260200101519150915060006146188383614cb1565b509050600087856001018151811061462c57fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461467457826000614678565b6000835b91509150600060028a5103881061468f57886146af565b6146af868b8a600201815181106146a257fe5b60200260200101516142f6565b90506146bb87876142f6565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f84848460006040519080825280601f01601f191660200182016040528015614705576020820181803683370190505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015614790578181015183820152602001614778565b50505050905090810190601f1680156147bd5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156147df57600080fd5b505af11580156147f3573d6000803e3d6000fd5b5050600190990198506145ce975050505050505050565b50505050565b60005b60018351038110156142f15760008084838151811061482e57fe5b602002602001015185846001018151811061484557fe5b602002602001015191509150600061485d8383614cb1565b509050600061486c84846142f6565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156148ba57600080fd5b505afa1580156148ce573d6000803e3d6000fd5b505050506040513d60608110156148e457600080fd5b5080516020909101516dffffffffffffffffffffffffffff9182169350169050600073ffffffffffffffffffffffffffffffffffffffff8981169088161461492d578183614930565b82825b5090506149b4818a73ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ee357600080fd5b94508573ffffffffffffffffffffffffffffffffffffffff1663ca706bcf8a876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015614a3b57600080fd5b505afa158015614a4f573d6000803e3d6000fd5b505050506040513d6020811015614a6557600080fd5b50519350600092508291505073ffffffffffffffffffffffffffffffffffffffff88811690871614614a9957826000614a9d565b6000835b91509150600060028c51038a10614ab4578a614ac7565b614ac7888d8c600201815181106146a257fe5b60408051600080825260208201928390527f022c0d9f000000000000000000000000000000000000000000000000000000008352602482018781526044830187905273ffffffffffffffffffffffffffffffffffffffff8086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015614b77578181015183820152602001614b5f565b50505050905090810190601f168015614ba45780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015614bc657600080fd5b505af1158015614bda573d6000803e3d6000fd5b50506001909b019a506148139950505050505050505050565b6000614c3583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615126565b90505b92915050565b600082614c4d57506000614c38565b82820282848281614c5a57fe5b0414614c35576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806151d86021913960400191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415614d4f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610614d89578284614d8c565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216614e1357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b9250929050565b604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b158015614eba57600080fd5b505afa158015614ece573d6000803e3d6000fd5b505050506040513d6020811015614ee457600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161415614fca57604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b158015614f9d57600080fd5b505af1158015614fb1573d6000803e3d6000fd5b505050506040513d6020811015614fc757600080fd5b50505b600080614fd78a8a613523565b91509150816000148015614fe9575080155b15614ff957879350869250615119565b60006150068984846128f2565b9050878111615089578581101561507e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f494e53554646494349454e545f425f414d4f554e540000000000000000000000604482015290519081900360640190fd5b889450925082615117565b60006150968984866128f2565b9050898111156150a257fe5b8781101561511157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f494e53554646494349454e545f415f414d4f554e540000000000000000000000604482015290519081900360640190fd5b94508793505b505b5050965096945050505050565b600081848411156151cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561519457818101518382015260200161517c565b50505050905090810190601f1680156151c15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775472616e7366657248656c7065723a204554485f5452414e534645525f4641494c45445472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a26469706673582212202e345c62402a4fae8100c8496a3f9190380ffc23ef3c1b9c0f8fbf1566e35e2b64736f6c634300060b0033"
}