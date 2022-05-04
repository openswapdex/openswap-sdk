export default {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount0",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount1",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "Burn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount0",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount1",
                    "type": "uint256"
                }
            ],
            "name": "Mint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "protocolFee",
                    "type": "uint256"
                }
            ],
            "name": "ProtocolFeeSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount0In",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount1In",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount0Out",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount1Out",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "Swap",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint112",
                    "name": "reserve0",
                    "type": "uint112"
                },
                {
                    "indexed": false,
                    "internalType": "uint112",
                    "name": "reserve1",
                    "type": "uint112"
                }
            ],
            "name": "Sync",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tradeFee",
                    "type": "uint256"
                }
            ],
            "name": "TradeFeeSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "EIP712_TYPEHASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MINIMUM_LIQUIDITY",
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
            "name": "NAME_HASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "VERSION_HASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "burn",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount0",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount1",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
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
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
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
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
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
            "inputs": [],
            "name": "getReserves",
            "outputs": [
                {
                    "internalType": "uint112",
                    "name": "_reserve0",
                    "type": "uint112"
                },
                {
                    "internalType": "uint112",
                    "name": "_reserve1",
                    "type": "uint112"
                },
                {
                    "internalType": "uint32",
                    "name": "_blockTimestampLast",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isLive",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "kLast",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "mint",
            "outputs": [
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
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "nonces",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
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
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "price0CumulativeLast",
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
            "name": "price1CumulativeLast",
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
            "name": "protocolFee",
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
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_isLive",
                    "type": "bool"
                }
            ],
            "name": "setLive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "skim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount0Out",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount1Out",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sync",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token0",
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
            "name": "token1",
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
            "name": "totalSupply",
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
            "name": "tradeFee",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "updateFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "updateProtocolFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "60a06040526001600c553480156200001657600080fd5b5033606081901b6080526004805460ff19166001178155604080516324bcdfbd60e01b8152905183926324bcdfbd92808201926020929091829003018186803b1580156200006357600080fd5b505afa15801562000078573d6000803e3d6000fd5b505050506040513d60208110156200008f57600080fd5b5051600a55604080516358710f4560e11b815290516001600160a01b0383169163b0e21e8a916004808301926020929190829003018186803b158015620000d557600080fd5b505afa158015620000ea573d6000803e3d6000fd5b505050506040513d60208110156200010157600080fd5b5051600b55600a5460408051918252517f1ce638f7798b6e448ecff4c806c7c01d3fedb23354b03f03994f5161b12bad629181900360200190a1600b5460408051918252517fdb5aafdb29539329e37d4e3ee869bc4031941fd55a5dfc92824fbe34b204e30d9181900360200190a15060805160601c613b55620001b2600039806108855280611389528061147252806118055280611d8a52806125a45280612b96528061351d5250613b556000f3fe608060405234801561001057600080fd5b50600436106102775760003560e01c806370a0823111610160578063b8f7a665116100d8578063d21220a71161008c578063dd62ed3e11610071578063dd62ed3e146107a8578063f5ee3348146107e3578063fff6cae91461080257610277565b8063d21220a714610742578063d505accf1461074a57610277565b8063bc25cf77116100bd578063bc25cf77146106ce578063c45a015514610701578063ca706bcf1461070957610277565b8063b8f7a665146106be578063ba9a7a56146106c657610277565b806389afcb441161012f5780639e4e7318116101145780639e4e731814610675578063a9059cbb1461067d578063b0e21e8a146106b657610277565b806389afcb441461062157806395d89b411461066d57610277565b806370a08231146105ab5780637464fc3d146105de578063758cdcf0146105e65780637ecebe00146105ee57610277565b8063253d2c7d116101f3578063485cc955116101c25780635a3d5493116101a75780635a3d549314610537578063632db21c1461053f5780636a6278421461057857610277565b8063485cc955146104f45780635909c0d51461052f57610277565b8063253d2c7d146104be57806330adf81f146104c6578063313ce567146104ce578063481bdf0d146104ec57610277565b8063095ea7b31161024a57806318160ddd1161022f57806318160ddd1461046b57806323b872dd1461047357806324bcdfbd146104b657610277565b8063095ea7b3146103ed5780630dfe16811461043a57610277565b8063022c0d9f1461027c57806304622c2e1461031757806306fdde03146103315780630902f1ac146103ae575b600080fd5b6103156004803603608081101561029257600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff60408301351691908101906080810160608201356401000000008111156102d657600080fd5b8201836020820111156102e857600080fd5b8035906020019184600183028401116401000000008311171561030a57600080fd5b50909250905061080a565b005b61031f6110a4565b60408051918252519081900360200190f35b6103396110c8565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561037357818101518382015260200161035b565b50505050905090810190601f1680156103a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103b6611101565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b6104266004803603604081101561040357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611156565b604080519115158252519081900360200190f35b61044261116d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61031f61118e565b6104266004803603606081101561048957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135611194565b61031f611273565b61031f611279565b61031f61129d565b6104d66112c1565b6040805160ff9092168252519081900360200190f35b6103156112c6565b6103156004803603604081101561050a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661145a565b61031f611572565b61031f611578565b61031f6004803603604081101561055557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561157e565b61031f6004803603602081101561058e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611788565b61031f600480360360208110156105c157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611cf7565b61031f611d09565b610315611d0f565b61031f6004803603602081101561060457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611e58565b6106546004803603602081101561063757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611e6a565b6040805192835260208301919091528051918290030190f35b610339612324565b61031f61235d565b6104266004803603604081101561069357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135612381565b61031f61238e565b610426612394565b61031f61239d565b610315600480360360208110156106e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166123a3565b6104426125a2565b61031f6004803603604081101561071f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356125c6565b6104426127d5565b610315600480360360e081101561076057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356127f1565b61031f600480360360408110156107be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516612b61565b610315600480360360208110156107f957600080fd5b50351515612b7e565b610315612c53565b600c5460011461087b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156108eb57600080fd5b505af11580156108ff573d6000803e3d6000fd5b505050506040513d602081101561091557600080fd5b505161098257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b60045460ff166109f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5041495220504155534544000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000851180610a025750600084115b610a6d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600080610a78611101565b5091509150816dffffffffffffffffffffffffffff1687108015610aab5750806dffffffffffffffffffffffffffff1686105b610b1657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b600454600554600091829173ffffffffffffffffffffffffffffffffffffffff6101009092048216919081169089168214801590610b8057508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b610beb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f494e56414c49445f544f00000000000000000000000000000000000000000000604482015290519081900360640190fd5b8a15610bfc57610bfc828a8d612e41565b8915610c0d57610c0d818a8c612e41565b8615610cef578873ffffffffffffffffffffffffffffffffffffffff16638a62aac4338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610cd657600080fd5b505af1158015610cea573d6000803e3d6000fd5b505050505b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b158015610d5b57600080fd5b505afa158015610d6f573d6000803e3d6000fd5b505050506040513d6020811015610d8557600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191955073ffffffffffffffffffffffffffffffffffffffff8316916370a0823191602480820192602092909190829003018186803b158015610df757600080fd5b505afa158015610e0b573d6000803e3d6000fd5b505050506040513d6020811015610e2157600080fd5b5051925060009150506dffffffffffffffffffffffffffff85168a90038311610e4b576000610e61565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610e85576000610e9b565b89856dffffffffffffffffffffffffffff160383035b90506000821180610eac5750600081115b610f1757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6000610f50610f31600a548561304e90919063ffffffff16565b610f4487620186a063ffffffff61304e16565b9063ffffffff6130c816565b90506000610f6c610f31600a548561304e90919063ffffffff16565b9050610fa66402540be400610f9a6dffffffffffffffffffffffffffff8b8116908b1663ffffffff61304e16565b9063ffffffff61304e16565b610fb6838363ffffffff61304e16565b101561102357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f4b00000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b50506110318484888861310a565b60408051838152602081018390528082018d9052606081018c9052905173ffffffffffffffffffffffffffffffffffffffff8b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b7fccf0ed8d136d82190c405c1be2cf07fff31d482a66996af4f69b3259174a23ba81565b6040518060400160405280600c81526020017f4f70656e53776170204c5073000000000000000000000000000000000000000081525081565b6006546dffffffffffffffffffffffffffff808216926e0100000000000000000000000000008304909116917c0100000000000000000000000000000000000000000000000000000000900463ffffffff1690565b60006111633384846133c6565b5060015b92915050565b600454610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1461125e5773ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832033845290915290205461122c908363ffffffff6130c816565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b611269848484613435565b5060019392505050565b600a5481565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b600c5460011461133757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c81905580611347611101565b509150915060006113588383613516565b90508015611387576113836dffffffffffffffffffffffffffff84811690841663ffffffff61304e16565b6009555b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b0e21e8a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156113ed57600080fd5b505afa158015611401573d6000803e3d6000fd5b505050506040513d602081101561141757600080fd5b5051600b81905560408051918252517fdb5aafdb29539329e37d4e3ee869bc4031941fd55a5dfc92824fbe34b204e30d9181900360200190a150506001600c5550565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146114fe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600480547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff94851602179055600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b60075481565b60085481565b600080611599600a54620186a06130c890919063ffffffff16565b600554909150600090819073ffffffffffffffffffffffffffffffffffffffff8781169116146115f0576006546dffffffffffffffffffffffffffff6e01000000000000000000000000000082048116911661161a565b6006546dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004165b6dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600085116116ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b6000821180156116bd5750600081115b61172857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b6000611741620186a0610f9a858963ffffffff61304e16565b9050600061175985610f9a858a63ffffffff6130c816565b905061177c6001611770848463ffffffff6136d616565b9063ffffffff61371816565b98975050505050505050565b6000600c546001146117fb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561186b57600080fd5b505af115801561187f573d6000803e3d6000fd5b505050506040513d602081101561189557600080fd5b505161190257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b60045460ff1661197357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5041495220504155534544000000000000000000000000000000000000000000604482015290519081900360640190fd5b60008061197e611101565b50915091506000600460019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611a2457600080fd5b505afa158015611a38573d6000803e3d6000fd5b505050506040513d6020811015611a4e57600080fd5b5051600554604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015611ac757600080fd5b505afa158015611adb573d6000803e3d6000fd5b505050506040513d6020811015611af157600080fd5b505190506000611b17836dffffffffffffffffffffffffffff871663ffffffff6130c816565b90506000611b3b836dffffffffffffffffffffffffffff871663ffffffff6130c816565b90506000611b498787613516565b60005490915080611b8657611b726103e8610f44611b6d878763ffffffff61304e16565b61378c565b9850611b8160006103e86137de565b611be3565b611be06dffffffffffffffffffffffffffff8916611baa868463ffffffff61304e16565b81611bb157fe5b046dffffffffffffffffffffffffffff8916611bd3868563ffffffff61304e16565b81611bda57fe5b0461388e565b98505b60008911611c5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f494e53554646494349454e545f4c49515549444954595f4d494e544544000000604482015290519081900360640190fd5b611c5c8a8a6137de565b611c6886868a8a61310a565b8115611caa57600654611ca6906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041663ffffffff61304e16565b6009555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b60095481565b600c54600114611d8057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166324bcdfbd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611dee57600080fd5b505afa158015611e02573d6000803e3d6000fd5b505050506040513d6020811015611e1857600080fd5b5051600a81905560408051918252517f1ce638f7798b6e448ecff4c806c7c01d3fedb23354b03f03994f5161b12bad629181900360200190a16001600c55565b60036020526000908152604090205481565b600080600c54600114611ede57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c81905580611eee611101565b5030600090815260016020526040812054929450909250611f0f8484613516565b60048054600554604080517f70a0823100000000000000000000000000000000000000000000000000000000815230948101949094525193945073ffffffffffffffffffffffffffffffffffffffff61010090920482169391169160009184916370a08231916024808301926020929190829003018186803b158015611f9457600080fd5b505afa158015611fa8573d6000803e3d6000fd5b505050506040513d6020811015611fbe57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b15801561203257600080fd5b505afa158015612046573d6000803e3d6000fd5b505050506040513d602081101561205c57600080fd5b505160005490915080612075888563ffffffff61304e16565b8161207c57fe5b049a5080612090888463ffffffff61304e16565b8161209757fe5b04995060008b1180156120aa575060008a115b61211557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f494e53554646494349454e545f4c49515549444954595f4255524e4544000000604482015290519081900360640190fd5b61211f30886138a4565b61212a858d8d612e41565b612135848d8c612e41565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8716916370a08231916024808301926020929190829003018186803b1580156121a157600080fd5b505afa1580156121b5573d6000803e3d6000fd5b505050506040513d60208110156121cb57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191945073ffffffffffffffffffffffffffffffffffffffff8616916370a0823191602480820192602092909190829003018186803b15801561223d57600080fd5b505afa158015612251573d6000803e3d6000fd5b505050506040513d602081101561226757600080fd5b5051915061227783838b8b61310a565b85156122b9576006546122b5906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041663ffffffff61304e16565b6009555b604080518c8152602081018c9052815173ffffffffffffffffffffffffffffffffffffffff8f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600881526020017f4f535741502d4c5000000000000000000000000000000000000000000000000081525081565b7fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681565b6000611163338484613435565b600b5481565b60045460ff1681565b6103e881565b600c5460011461241457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c5560048054600554600654604080517f70a0823100000000000000000000000000000000000000000000000000000000815230958101959095525161010090930473ffffffffffffffffffffffffffffffffffffffff908116949216926124f992859287926124f4926dffffffffffffffffffffffffffff9092169185916370a0823191602480820192602092909190829003018186803b1580156124bc57600080fd5b505afa1580156124d0573d6000803e3d6000fd5b505050506040513d60208110156124e657600080fd5b50519063ffffffff6130c816565b612e41565b600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905161259892849287926124f4926e01000000000000000000000000000090046dffffffffffffffffffffffffffff169173ffffffffffffffffffffffffffffffffffffffff8616916370a0823191602480820192602092909190829003018186803b1580156124bc57600080fd5b50506001600c5550565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806125e1600a54620186a06130c890919063ffffffff16565b600454909150600090819073ffffffffffffffffffffffffffffffffffffffff878116610100909204161461263d576006546dffffffffffffffffffffffffffff6e010000000000000000000000000000820481169116612667565b6006546dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004165b6dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150600085116126fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b60008211801561270a5750600081115b61277557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b6000612787868563ffffffff61304e16565b9050600061279b828463ffffffff61304e16565b905060006127b68361177087620186a063ffffffff61304e16565b90506127c8828263ffffffff6136d616565b9998505050505050505050565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b4284101561286057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6020808301919091527fccf0ed8d136d82190c405c1be2cf07fff31d482a66996af4f69b3259174a23ba828401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608301524660808301523060a0808401919091528351808403909101815260c08301845280519082012073ffffffffffffffffffffffffffffffffffffffff8b8116600081815260038552868120805460018082019092557f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0890152610100880193909352928d1661012087015261014086018c90526101608601919091526101808086018b9052865180870390910181526101a0860187528051908501207f19010000000000000000000000000000000000000000000000000000000000006101c08701526101c286018490526101e28087019190915286518087039091018152610202860180885281519186019190912090829052610222860180885281905260ff8a16610242870152610262860189905261028286018890529551929594909391926102a280830193927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08301929081900390910190855afa158015612a64573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590612adf57508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b612b4a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604482015290519081900360640190fd5b612b558a8a8a6133c6565b50505050505050505050565b600260209081526000928352604080842090915290825290205481565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612c2257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b600c54600114612cc457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c5560048054604080517f70a08231000000000000000000000000000000000000000000000000000000008152309381019390935251612e3a9261010090920473ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015612d4357600080fd5b505afa158015612d57573d6000803e3d6000fd5b505050506040513d6020811015612d6d57600080fd5b5051600554604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015612de057600080fd5b505afa158015612df4573d6000803e3d6000fd5b505050506040513d6020811015612e0a57600080fd5b50516006546dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041661310a565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b60208310612f4757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612f0a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612fa9576040519150601f19603f3d011682016040523d82523d6000602084013e612fae565b606091505b5091509150818015612fdc575080511580612fdc5750808060200190516020811015612fd957600080fd5b50515b61304757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b60008261305d57506000611167565b8282028284828161306a57fe5b04146130c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180613aff6021913960400191505060405180910390fd5b9392505050565b60006130c183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613969565b6dffffffffffffffffffffffffffff841180159061313657506dffffffffffffffffffffffffffff8311155b6131a157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4f564552464c4f57000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60065463ffffffff428116917c0100000000000000000000000000000000000000000000000000000000900481168203908116158015906131f157506dffffffffffffffffffffffffffff841615155b801561320c57506dffffffffffffffffffffffffffff831615155b156132bc578063ffffffff1661324f8561322586613a1a565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169063ffffffff613a3e16565b600780547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff811661328f8461322587613a1a565b600880547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b600680547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008883168102919091177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167c010000000000000000000000000000000000000000000000000000000063ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205461346b908263ffffffff6130c816565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602052604080822093909355908416815220546134ad908263ffffffff61371816565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16639931e80b6040518163ffffffff1660e01b8152600401604080518083038186803b15801561358057600080fd5b505afa158015613594573d6000803e3d6000fd5b505050506040513d60408110156135aa57600080fd5b508051602090910151600b5460095473ffffffffffffffffffffffffffffffffffffffff83161580159750939550919350916136b35780156136ae57600061360e611b6d6dffffffffffffffffffffffffffff8a8116908a1663ffffffff61304e16565b9050600061361b8361378c565b9050808211156136ab57600061364d85610f9a61363e868663ffffffff6130c816565b6000549063ffffffff61304e16565b90506000613687613664848863ffffffff61304e16565b61177061367a620186a08a63ffffffff6130c816565b879063ffffffff61304e16565b9050600081838161369457fe5b04905080156136a7576136a788826137de565b5050505b50505b6136bf565b80156136bf5760006009555b8382146136cc57600b8490555b5050505092915050565b60006130c183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613a7f565b6000828201838110156130c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600060038211156137cf575080600160028204015b818110156137c9578091506002818285816137b857fe5b0401816137c157fe5b0490506137a1565b506137d9565b81156137d9575060015b919050565b6000546137f1908263ffffffff61371816565b600090815573ffffffffffffffffffffffffffffffffffffffff8316815260016020526040902054613829908263ffffffff61371816565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081831061389d57816130c1565b5090919050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600160205260409020546138da908263ffffffff6130c816565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081209190915554613914908263ffffffff6130c816565b600090815560408051838152905173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b60008184841115613a12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156139d75781810151838201526020016139bf565b50505050905090810190601f168015613a045780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b60006dffffffffffffffffffffffffffff82167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff841681613a7757fe5b049392505050565b60008183613ae8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156139d75781810151838201526020016139bf565b506000838581613af457fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122092f60c055ef40a7ead5c1cb4dbc7891f02452d5c6fff0eb11e918274c0f012fb64736f6c634300060b0033"
}