export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_ammFactory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_oracleFactory",
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
            "inputs": [],
            "name": "ammFactory",
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
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "getLatestPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oracleFactory",
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
                },
                {
                    "internalType": "bool[]",
                    "name": "useOracle",
                    "type": "bool[]"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
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
    "bytecode": "60e060405234801561001057600080fd5b5060405162004ccb38038062004ccb8339818101604052606081101561003557600080fd5b50805160208201516040909201516001600160601b0319606092831b811660805292821b831660a052901b1660c05260805160601c60a05160601c60c05160601c614bcd620000fe6000398061012f52806112d8528061145252806114e75280611cb55280611ee35280611fc9528061272552806128cb52806129fe5280612b565280612bd75280612f115280612fbc528061357e52806136f5528061378a5250806134c45280613a7b5280613cc852806141ea5250806134e85280613a555250614bcd6000f3fe6080604052600436106101125760003560e01c80636e20a8ac116100a5578063c4f1be6111610074578063dacda92f11610059578063dacda92f14610fc3578063eef56c7614610fd8578063f39db2c614611115576101bd565b8063c4f1be6114610e86578063c7f7fb9014610fae576101bd565b80636e20a8ac14610a6d5780638e933c4c14610bbc578063ad5c464814610cf9578063b890b39714610d37576101bd565b8063495e4348116100e1578063495e43481461071557806350ab4df6146107ca5780635594e318146108745780636b1c9d50146109c3576101bd565b806311308430146101c257806323f2f4d31461034f578063315deba61461049e5780633feeb15a146105c6576101bd565b366101bd573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b6102ff600480360360c08110156101d857600080fd5b813591908101906040810160208201356401000000008111156101fa57600080fd5b82018360208201111561020c57600080fd5b8035906020019184602083028401116401000000008311171561022e57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561026e57600080fd5b82018360208201111561028057600080fd5b803590602001918460208302840111640100000000831117156102a257600080fd5b9193909290916020810190356401000000008111156102c057600080fd5b8201836020820111156102d257600080fd5b803590602001918460018302840111640100000000831117156102f457600080fd5b509092509050611264565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561033b578181015183820152602001610323565b505050509050019250505060405180910390f35b34801561035b57600080fd5b506102ff600480360360e081101561037257600080fd5b81359160208101359181019060608101604082013564010000000081111561039957600080fd5b8201836020820111156103ab57600080fd5b803590602001918460208302840111640100000000831117156103cd57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561040d57600080fd5b82018360208201111561041f57600080fd5b8035906020019184602083028401116401000000008311171561044157600080fd5b91939092909160208101903564010000000081111561045f57600080fd5b82018360208201111561047157600080fd5b8035906020019184600183028401116401000000008311171561049357600080fd5b5090925090506116c6565b3480156104aa57600080fd5b506102ff600480360360808110156104c157600080fd5b813591908101906040810160208201356401000000008111156104e357600080fd5b8201836020820111156104f557600080fd5b8035906020019184602083028401116401000000008311171561051757600080fd5b91939092909160208101903564010000000081111561053557600080fd5b82018360208201111561054757600080fd5b8035906020019184602083028401116401000000008311171561056957600080fd5b91939092909160208101903564010000000081111561058757600080fd5b82018360208201111561059957600080fd5b803590602001918460018302840111640100000000831117156105bb57600080fd5b50909250905061189a565b3480156105d257600080fd5b506101bb600480360360e08110156105e957600080fd5b81359160208101359181019060608101604082013564010000000081111561061057600080fd5b82018360208201111561062257600080fd5b8035906020019184602083028401116401000000008311171561064457600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561068457600080fd5b82018360208201111561069657600080fd5b803590602001918460208302840111640100000000831117156106b857600080fd5b9193909290916020810190356401000000008111156106d657600080fd5b8201836020820111156106e857600080fd5b8035906020019184600183028401116401000000008311171561070a57600080fd5b509092509050611c2e565b34801561072157600080fd5b506107b86004803603606081101561073857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561077957600080fd5b82018360208201111561078b57600080fd5b803590602001918460018302840111640100000000831117156107ad57600080fd5b50909250905061206a565b60408051918252519081900360200190f35b3480156107d657600080fd5b506107b8600480360360808110156107ed57600080fd5b81359173ffffffffffffffffffffffffffffffffffffffff60208201358116926040830135909116919081019060808101606082013564010000000081111561083557600080fd5b82018360208201111561084757600080fd5b8035906020019184600183028401116401000000008311171561086957600080fd5b509092509050612170565b34801561088057600080fd5b506101bb600480360360e081101561089757600080fd5b8135916020810135918101906060810160408201356401000000008111156108be57600080fd5b8201836020820111156108d057600080fd5b803590602001918460208302840111640100000000831117156108f257600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561093257600080fd5b82018360208201111561094457600080fd5b8035906020019184602083028401116401000000008311171561096657600080fd5b91939092909160208101903564010000000081111561098457600080fd5b82018360208201111561099657600080fd5b803590602001918460018302840111640100000000831117156109b857600080fd5b509092509050612236565b3480156109cf57600080fd5b506107b8600480360360808110156109e657600080fd5b81359173ffffffffffffffffffffffffffffffffffffffff602082013581169260408301359091169190810190608081016060820135640100000000811115610a2e57600080fd5b820183602082011115610a4057600080fd5b80359060200191846001830284011164010000000083111715610a6257600080fd5b5090925090506125d6565b348015610a7957600080fd5b506102ff600480360360e0811015610a9057600080fd5b813591602081013591810190606081016040820135640100000000811115610ab757600080fd5b820183602082011115610ac957600080fd5b80359060200191846020830284011164010000000083111715610aeb57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610b2b57600080fd5b820183602082011115610b3d57600080fd5b80359060200191846020830284011164010000000083111715610b5f57600080fd5b919390929091602081019035640100000000811115610b7d57600080fd5b820183602082011115610b8f57600080fd5b80359060200191846001830284011164010000000083111715610bb157600080fd5b50909250905061269c565b6101bb600480360360c0811015610bd257600080fd5b81359190810190604081016020820135640100000000811115610bf457600080fd5b820183602082011115610c0657600080fd5b80359060200191846020830284011164010000000083111715610c2857600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610c6857600080fd5b820183602082011115610c7a57600080fd5b80359060200191846020830284011164010000000083111715610c9c57600080fd5b919390929091602081019035640100000000811115610cba57600080fd5b820183602082011115610ccc57600080fd5b80359060200191846001830284011164010000000083111715610cee57600080fd5b50909250905061298c565b348015610d0557600080fd5b50610d0e612f0f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b348015610d4357600080fd5b506102ff600480360360e0811015610d5a57600080fd5b813591602081013591810190606081016040820135640100000000811115610d8157600080fd5b820183602082011115610d9357600080fd5b80359060200191846020830284011164010000000083111715610db557600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610df557600080fd5b820183602082011115610e0757600080fd5b80359060200191846020830284011164010000000083111715610e2957600080fd5b919390929091602081019035640100000000811115610e4757600080fd5b820183602082011115610e5957600080fd5b80359060200191846001830284011164010000000083111715610e7b57600080fd5b509092509050612f33565b348015610e9257600080fd5b506102ff60048036036080811015610ea957600080fd5b81359190810190604081016020820135640100000000811115610ecb57600080fd5b820183602082011115610edd57600080fd5b80359060200191846020830284011164010000000083111715610eff57600080fd5b919390929091602081019035640100000000811115610f1d57600080fd5b820183602082011115610f2f57600080fd5b80359060200191846020830284011164010000000083111715610f5157600080fd5b919390929091602081019035640100000000811115610f6f57600080fd5b820183602082011115610f8157600080fd5b80359060200191846001830284011164010000000083111715610fa357600080fd5b50909250905061313d565b348015610fba57600080fd5b50610d0e6134c2565b348015610fcf57600080fd5b50610d0e6134e6565b6102ff600480360360c0811015610fee57600080fd5b8135919081019060408101602082013564010000000081111561101057600080fd5b82018360208201111561102257600080fd5b8035906020019184602083028401116401000000008311171561104457600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561108457600080fd5b82018360208201111561109657600080fd5b803590602001918460208302840111640100000000831117156110b857600080fd5b9193909290916020810190356401000000008111156110d657600080fd5b8201836020820111156110e857600080fd5b8035906020019184600183028401116401000000008311171561110a57600080fd5b50909250905061350a565b34801561112157600080fd5b506102ff600480360360e081101561113857600080fd5b81359160208101359181019060608101604082013564010000000081111561115f57600080fd5b82018360208201111561117157600080fd5b8035906020019184602083028401116401000000008311171561119357600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335169260208101359291906060810190604001356401000000008111156111d357600080fd5b8201836020820111156111e557600080fd5b8035906020019184602083028401116401000000008311171561120757600080fd5b91939092909160208101903564010000000081111561122557600080fd5b82018360208201111561123757600080fd5b8035906020019184600183028401116401000000008311171561125957600080fd5b509092509050613935565b606085428110156112d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168a8a600081811061131a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6113c8348b8b8989898961189a565b91508a826001845103815181106113db57fe5b6020026020010151101561145057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061149957fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156114cc57600080fd5b505af11580156114e0573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6115938c8c600081811061153157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168d8d600181811061155b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600081811061158557fe5b905060200201351515613a3b565b846000815181106115a057fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561161157600080fd5b505af1158015611625573d6000803e3d6000fd5b505050506040513d602081101561163b57600080fd5b50516116a857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b6116b8828b8b8b8a8a8a8a613c67565b509998505050505050505050565b6060854281101561173857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6117478c8b8b8989898961189a565b91508a8260018451038151811061175a57fe5b602002602001015110156117cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b61187b8a8a60008181106117df57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336118618d8d600081811061180d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168e8e600181811061183757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600081811061158557fe5b8560008151811061186e57fe5b6020026020010151613fb9565b61188b828b8b8b8a8a8a8a613c67565b509a9950505050505050505050565b6060600286101561190c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8601841461199c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f4f5241434c45000000000000000000000000000000000000604482015290519081900360640190fd5b8567ffffffffffffffff811180156119b357600080fd5b506040519080825280602002602001820160405280156119dd578160200160208202803683370190505b50905087816000815181106119ee57fe5b60200260200101818152505060005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8701811015611c2257858582818110611a3357fe5b90506020020135611b8d57611a9d888883818110611a4d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16898984600101818110611a7957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166000613a3b565b73ffffffffffffffffffffffffffffffffffffffff1663ca706bcf898984818110611ac457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16848481518110611aed57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611b5c57600080fd5b505afa158015611b70573d6000803e3d6000fd5b505050506040513d6020811015611b8657600080fd5b5051611c00565b611c00828281518110611b9c57fe5b6020026020010151898984818110611bb057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a85600101818110611bdc57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168787612170565b828260010181518110611c0f57fe5b60209081029190910101526001016119fd565b50979650505050505050565b8442811015611c9e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001689897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611d0357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611da257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6002881015611e1257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b611e5689896000818110611e2257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611e508c8c600081811061153157fe5b8e613fb9565b611e9a898930888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061418992505050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015611f2a57600080fd5b505afa158015611f3e573d6000803e3d6000fd5b505050506040513d6020811015611f5457600080fd5b505190508a811015611fc757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561203a57600080fd5b505af115801561204e573d6000803e3d6000fd5b5050505061205c88826147aa565b505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8085169086161061209486866001613a3b565b73ffffffffffffffffffffffffffffffffffffffff1663d519f64d8286866040518463ffffffff1660e01b81526004018084151515158152602001806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b15801561213a57600080fd5b505afa15801561214e573d6000803e3d6000fd5b505050506040513d602081101561216457600080fd5b50519695505050505050565b600061217e85856001613a3b565b73ffffffffffffffffffffffffffffffffffffffff16633b19103b868886866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b15801561213a57600080fd5b84428110156122a657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600288101561231657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b61232689896000818110611e2257fe5b600089897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061235657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156123ef57600080fd5b505afa158015612403573d6000803e3d6000fd5b505050506040513d602081101561241957600080fd5b5051604080516020601f8701819004810282018101909252858152919250612465918c918c918c918b918b918b908b908190840183828082843760009201919091525061418992505050565b8a612569828c8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061249857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561253157600080fd5b505afa158015612545573d6000803e3d6000fd5b505050506040513d602081101561255b57600080fd5b50519063ffffffff6148e716565b101561205c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b60006125e485856001613a3b565b73ffffffffffffffffffffffffffffffffffffffff1663685639a9858886866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b15801561213a57600080fd5b6060854281101561270e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168a8a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061277357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461281257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6128218c8b8b8989898961189a565b91508a8260018451038151811061283457fe5b602002602001015110156128a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b6128b98a8a60008181106117df57fe5b6128c9828b8b308a8a8a8a613c67565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d8360018551038151811061291557fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561295357600080fd5b505af1158015612967573d6000803e3d6000fd5b5050505061188b888360018551038151811061297f57fe5b60200260200101516147aa565b84428110156129fc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1689896000818110612a4057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612adf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6002881015612b4f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612bbc57600080fd5b505af1158015612bd0573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612c218c8c600081811061153157fe5b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612c8b57600080fd5b505af1158015612c9f573d6000803e3d6000fd5b505050506040513d6020811015612cb557600080fd5b5051612d2257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b50600089897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612d5357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612dec57600080fd5b505afa158015612e00573d6000803e3d6000fd5b505050506040513d6020811015612e1657600080fd5b5051604080516020601f8701819004810282018101909252858152919250612e62918c918c918c918b918b918b908b908190840183828082843760009201919091525061418992505050565b8a612e95828c8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061249857fe5b1015612f0257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b5050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608542811015612fa557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168a8a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061300a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146130a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b6130b88c8b8b8989898961313d565b91508a826000815181106130c857fe5b602002602001015111156128a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b606060028610156131af57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8601841461323f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f4f5241434c45000000000000000000000000000000000000604482015290519081900360640190fd5b8567ffffffffffffffff8111801561325657600080fd5b50604051908082528060200260200182016040528015613280578160200160208202803683370190505b509050878160018351038151811061329457fe5b60209081029190910101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86015b8015611c22578585600183038181106132d857fe5b9050602002013561340e5761331e8888600184038181106132f557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16898984818110611a7957fe5b73ffffffffffffffffffffffffffffffffffffffff1663632db21c89898481811061334557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1684848151811061336e57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156133dd57600080fd5b505afa1580156133f1573d6000803e3d6000fd5b505050506040513d602081101561340757600080fd5b5051613481565b61348182828151811061341d57fe5b602002602001015189896001850381811061343457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a8581811061345d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1687876125d6565b82600183038151811061349057fe5b60209081029190910101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016132c3565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060854281101561357c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168a8a60008181106135c057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461365f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b61366e8b8b8b8989898961313d565b9150348260008151811061367e57fe5b602002602001015111156136f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061373c57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b15801561376f57600080fd5b505af1158015613783573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6137d48c8c600081811061153157fe5b846000815181106137e157fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561385257600080fd5b505af1158015613866573d6000803e3d6000fd5b505050506040513d602081101561387c57600080fd5b50516138e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b6138f9828b8b8b8a8a8a8a613c67565b8160008151811061390657fe5b60200260200101513411156116b8576116b8338360008151811061392657fe5b602002602001015134036147aa565b606085428110156139a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6139b68c8b8b8989898961313d565b91508a826000815181106139c657fe5b602002602001015111156117cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4558434553534956455f494e5055545f414d4f554e5400000000000000000000604482015290519081900360640190fd5b6000806000613a4a8686614930565b9150915083613a79577f0000000000000000000000000000000000000000000000000000000000000000613a9b565b7f00000000000000000000000000000000000000000000000000000000000000005b60408051606085811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009081166020808501919091529186901b166034830152825180830360280181526048909201909252805191012085613b32576040518060400160405280602081526020017f5c193265bc1f16117085a454b86f04b786de5c40d54a45dc24869043eb75f155815250613b69565b6040518060400160405280602081526020017ff16ce672144451d138eed853d57e4616c66cace4e953a121899bbd6e5643ca038152505b60405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182805190602001908083835b60208310613c1c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613bdf565b6001836020036101000a03801982511681845116808217855250505050505090500193505050506040516020818303038152906040528051906020012060001c925050509392505050565b3233148015613c7c5750613c7a33614a99565b155b80613d3d5750604080517f3af32abf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691633af32abf9160248083019260209291908290030181600087803b158015613d1057600080fd5b505af1158015613d24573d6000803e3d6000fd5b505050506040513d6020811015613d3a57600080fd5b50515b613d4657600080fd5b60005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8701811015613fae57600080898984818110613d8257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a85600101818110613dae57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff169150915060008b8460010181518110613de057fe5b60200260200101519050600080613df78585614930565b5090508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614613e3557826000613e39565b6000835b9093509150600090507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe8c018610613e71578a613eb0565b613eb0848e8e89600201818110613e8457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168c8c8a60010181811061158557fe5b9050613ec385858c8c8a81811061158557fe5b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f8484848c8c6040518663ffffffff1660e01b8152600401808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015613f8557600080fd5b505af1158015613f99573d6000803e3d6000fd5b505060019097019650613d4995505050505050565b505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061409757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161405a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146140f9576040519150601f19603f3d011682016040523d82523d6000602084013e6140fe565b606091505b509150915081801561412c57508051158061412c575080806020019051602081101561412957600080fd5b50515b614181576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180614b746024913960400191505060405180910390fd5b505050505050565b323314801561419e575061419c33614a99565b155b8061425f5750604080517f3af32abf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691633af32abf9160248083019260209291908290030181600087803b15801561423257600080fd5b505af1158015614246573d6000803e3d6000fd5b505050506040513d602081101561425c57600080fd5b50515b61426857600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff850182146142f857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f4f5241434c45000000000000000000000000000000000000604482015290519081900360640190fd5b60005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86018110156147a157600087878360010181811061433657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690506000806000808b8b8781811061436757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16905060006143928287614930565b50905073ffffffffffffffffffffffffffffffffffffffff828116908216146143c283888d8d8c81811061158557fe5b955060008060008873ffffffffffffffffffffffffffffffffffffffff16633c6d5c726040518163ffffffff1660e01b8152600401604080518083038186803b15801561440e57600080fd5b505afa158015614422573d6000803e3d6000fd5b505050506040513d604081101561443857600080fd5b5080516020909101519092509050600084614454578183614457565b82825b5090506144db818873ffffffffffffffffffffffffffffffffffffffff166370a082318d6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561253157600080fd5b9350508873ffffffffffffffffffffffffffffffffffffffff16633b19103b87858f6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015614581578181015183820152602001614569565b50505050905090810190601f1680156145ae5780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b1580156145cd57600080fd5b505afa1580156145e1573d6000803e3d6000fd5b505050506040513d60208110156145f757600080fd5b5051975083925061460d91505057846000614611565b6000855b90955093506000925050507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe8b01861061464b578961468a565b61468a858d8d8960020181811061465e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b8a60010181811061158557fe5b6040517f022c0d9f000000000000000000000000000000000000000000000000000000008152600481018581526024820185905273ffffffffffffffffffffffffffffffffffffffff80841660448401526080606484019081528b5160848501528b519495509088169363022c0d9f938893889388938f9360a40190602085019080838360005b83811015614729578181015183820152602001614711565b50505050905090810190601f1680156147565780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561477857600080fd5b505af115801561478c573d6000803e3d6000fd5b5050600190970196506142fb95505050505050565b50505050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061482157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016147e4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614883576040519150601f19603f3d011682016040523d82523d6000602084013e614888565b606091505b50509050806148e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180614b516023913960400191505060405180910390fd5b505050565b600061492983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614a9f565b9392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156149ce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610614a08578284614a0b565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216614a9257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b9250929050565b3b151590565b60008184841115614b48576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015614b0d578181015183820152602001614af5565b50505050905090810190601f168015614b3a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe5472616e7366657248656c7065723a204554485f5452414e534645525f4641494c45445472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a2646970667358221220e21d07a9114e7644a715104ad01e48b41129c11ba1b6ac7cae6372d50fbbc21e64736f6c634300060b0033"
}