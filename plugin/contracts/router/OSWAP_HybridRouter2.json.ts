export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_registry",
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
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "pair",
                    "type": "address[]"
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
            "name": "getAmountsInEndsWith",
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
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "getAmountsInStartsWith",
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
                    "name": "pair",
                    "type": "address[]"
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
            "name": "getAmountsOutEndsWith",
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
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "getAmountsOutStartsWith",
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
                    "internalType": "address[]",
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
                }
            ],
            "name": "getPathIn",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
                }
            ],
            "name": "getPathOut",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "registry",
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
                    "name": "pair",
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapETHForExactTokens",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
                    "name": "pair",
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapExactETHForTokens",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
                    "name": "pair",
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
                    "name": "pair",
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapExactTokensForETH",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
                    "name": "pair",
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
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapExactTokensForTokens",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenIn",
                    "type": "address"
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
                    "name": "pair",
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapTokensForExactETH",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
                    "name": "pair",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "tokenOut",
                    "type": "address"
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
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swapTokensForExactTokens",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
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
    "bytecode": "60c06040523480156200001157600080fd5b5060405162005f9538038062005f95833981810160405260408110156200003757600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c615ea4620000f16000398061012f5280611155528061118252806112035280611b455280611c7a528061211752806121d152806127b8528061286552806128fa5280612b775280612ca15280612d715280612e7e5280612f4c5280612fe15250806117ab5280611e4d528061238252806133285280613ae55280615019528061558a5250615ea46000f3fe6080604052600436106101125760003560e01c8063aec5c92c116100a5578063e76c597511610074578063ed3b11ce11610059578063ed3b11ce14610de6578063eed476ea14610ed1578063f5181b7514610fc1576101bd565b8063e76c597514610bfe578063ed16c0b414610ce9576101bd565b8063aec5c92c14610877578063b132b5e114610967578063b66bd67c14610a64578063c1385f2414610af7576101bd565b80638164890f116100e15780638164890f146105cb5780638af13937146106d2578063ac8d3879146107cf578063ad5c464814610862576101bd565b8063127afa49146101c2578063274b96a51461030257806365d9e64b146103ed5780637b1039991461058d576101bd565b366101bd573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b3480156101ce57600080fd5b506102b2600480360360808110156101e557600080fd5b8135919081019060408101602082013564010000000081111561020757600080fd5b82018360208201111561021957600080fd5b8035906020019184602083028401116401000000008311171561023b57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335169260408101906020013564010000000081111561027357600080fd5b82018360208201111561028557600080fd5b803590602001918460018302840111640100000000831117156102a757600080fd5b5090925090506110b1565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102ee5781810151838201526020016102d6565b505050509050019250505060405180910390f35b6101bb600480360360a081101561031857600080fd5b8135919081019060408101602082013564010000000081111561033a57600080fd5b82018360208201111561034c57600080fd5b8035906020019184602083028401116401000000008311171561036e57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335169260208101359291906060810190604001356401000000008111156103ae57600080fd5b8201836020820111156103c057600080fd5b803590602001918460018302840111640100000000831117156103e257600080fd5b5090925090506110dc565b3480156103f957600080fd5b506104f4600480360360e081101561041057600080fd5b81359160208101359181019060608101604082013564010000000081111561043757600080fd5b82018360208201111561044957600080fd5b8035906020019184602083028401116401000000008311171561046b57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833581169360208101359091169260408201359290916080810190606001356401000000008111156104b557600080fd5b8201836020820111156104c757600080fd5b803590602001918460018302840111640100000000831117156104e957600080fd5b5090925090506115d5565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610538578181015183820152602001610520565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561057757818101518382015260200161055f565b5050505090500194505050505060405180910390f35b34801561059957600080fd5b506105a26117a9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156105d757600080fd5b506101bb600480360360e08110156105ee57600080fd5b81359160208101359181019060608101604082013564010000000081111561061557600080fd5b82018360208201111561062757600080fd5b8035906020019184602083028401116401000000008311171561064957600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335811693602081013590911692604082013592909160808101906060013564010000000081111561069357600080fd5b8201836020820111156106a557600080fd5b803590602001918460018302840111640100000000831117156106c757600080fd5b5090925090506117cd565b3480156106de57600080fd5b506104f4600480360360c08110156106f557600080fd5b81359160208101359181019060608101604082013564010000000081111561071c57600080fd5b82018360208201111561072e57600080fd5b8035906020019184602083028401116401000000008311171561075057600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692602081013592919060608101906040013564010000000081111561079057600080fd5b8201836020820111156107a257600080fd5b803590602001918460018302840111640100000000831117156107c457600080fd5b509092509050611acb565b3480156107db57600080fd5b506102b2600480360360408110156107f257600080fd5b81019060208101813564010000000081111561080d57600080fd5b82018360208201111561081f57600080fd5b8035906020019184602083028401116401000000008311171561084157600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16611d4a565b34801561086e57600080fd5b506105a2612115565b34801561088357600080fd5b506102b26004803603608081101561089a57600080fd5b813591908101906040810160208201356401000000008111156108bc57600080fd5b8201836020820111156108ce57600080fd5b803590602001918460208302840111640100000000831117156108f057600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335169260408101906020013564010000000081111561092857600080fd5b82018360208201111561093a57600080fd5b8035906020019184600183028401116401000000008311171561095c57600080fd5b509092509050612139565b34801561097357600080fd5b506104f4600480360360c081101561098a57600080fd5b8135916020810135918101906060810160408201356401000000008111156109b157600080fd5b8201836020820111156109c357600080fd5b803590602001918460208302840111640100000000831117156109e557600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610a2557600080fd5b820183602082011115610a3757600080fd5b80359060200191846001830284011164010000000083111715610a5957600080fd5b509092509050612157565b348015610a7057600080fd5b506102b260048036036040811015610a8757600080fd5b810190602081018135640100000000811115610aa257600080fd5b820183602082011115610ab457600080fd5b80359060200191846020830284011164010000000083111715610ad657600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff1661227c565b348015610b0357600080fd5b506104f4600480360360e0811015610b1a57600080fd5b813591602081013591810190606081016040820135640100000000811115610b4157600080fd5b820183602082011115610b5357600080fd5b80359060200191846020830284011164010000000083111715610b7557600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83358116936020810135909116926040820135929091608081019060600135640100000000811115610bbf57600080fd5b820183602082011115610bd157600080fd5b80359060200191846001830284011164010000000083111715610bf357600080fd5b509092509050612639565b6104f4600480360360a0811015610c1457600080fd5b81359190810190604081016020820135640100000000811115610c3657600080fd5b820183602082011115610c4857600080fd5b80359060200191846020830284011164010000000083111715610c6a57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610caa57600080fd5b820183602082011115610cbc57600080fd5b80359060200191846001830284011164010000000083111715610cde57600080fd5b50909250905061273e565b348015610cf557600080fd5b506101bb600480360360c0811015610d0c57600080fd5b813591602081013591810190606081016040820135640100000000811115610d3357600080fd5b820183602082011115610d4557600080fd5b80359060200191846020830284011164010000000083111715610d6757600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610da757600080fd5b820183602082011115610db957600080fd5b80359060200191846001830284011164010000000083111715610ddb57600080fd5b509092509050612afe565b6104f4600480360360a0811015610dfc57600080fd5b81359190810190604081016020820135640100000000811115610e1e57600080fd5b820183602082011115610e3057600080fd5b80359060200191846020830284011164010000000083111715610e5257600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff833516926020810135929190606081019060400135640100000000811115610e9257600080fd5b820183602082011115610ea457600080fd5b80359060200191846001830284011164010000000083111715610ec657600080fd5b509092509050612e04565b348015610edd57600080fd5b506102b260048036036080811015610ef457600080fd5b81359190810190604081016020820135640100000000811115610f1657600080fd5b820183602082011115610f2857600080fd5b80359060200191846020830284011164010000000083111715610f4a57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff83351692604081019060200135640100000000811115610f8257600080fd5b820183602082011115610f9457600080fd5b80359060200191846001830284011164010000000083111715610fb657600080fd5b50909250905061319b565b348015610fcd57600080fd5b506102b260048036036080811015610fe457600080fd5b8135919081019060408101602082013564010000000081111561100657600080fd5b82018360208201111561101857600080fd5b8035906020019184602083028401116401000000008311171561103a57600080fd5b9193909273ffffffffffffffffffffffffffffffffffffffff8335169260408101906020013564010000000081111561107257600080fd5b82018360208201111561108457600080fd5b803590602001918460018302840111640100000000831117156110a657600080fd5b5090925090506131a9565b6060806110bf878787611d4a565b90506110cf8882898988886131b7565b5098975050505050505050565b824281101561114c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b606061117988887f0000000000000000000000000000000000000000000000000000000000000000611d4a565b905060003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111e857600080fd5b505af11580156111fc573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8a8a600081811061124a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156112d157600080fd5b505af11580156112e5573d6000803e3d6000fd5b505050506040513d60208110156112fb57600080fd5b505161136857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b60008260018451038151811061137a57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156113fe57600080fd5b505afa158015611412573d6000803e3d6000fd5b505050506040513d602081101561142857600080fd5b50516040805160208c810282810182019093528c82529293506114a09286928c92918f918f9182919085019084908082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061383092505050565b8a61157182856001875103815181106114b557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561153957600080fd5b505afa15801561154d573d6000803e3d6000fd5b505050506040513d602081101561156357600080fd5b50519063ffffffff61445e16565b10156115c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b5050505050505050505050565b606080844281101561164857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6116538a8a8a611d4a565b925060606116658d858d8d8a8a6131b7565b815191945091508c9084907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190811061169c57fe5b602002602001015110156116fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b6117588460008151811061170b57fe5b6020026020010151338d8d600081811061172157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168660008151811061174b57fe5b60200260200101516144a9565b61179983858a8e8e80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250614671915050565b5050995099975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b824281101561183d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b606061184a898989611d4a565b90506118958160008151811061185c57fe5b6020026020010151338b8b600081811061187257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168e6144a9565b6000816001835103815181106118a757fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561192b57600080fd5b505afa15801561193f573d6000803e3d6000fd5b505050506040513d602081101561195557600080fd5b50516040805160208c810282810182019093528c82529293506119cd9285928b92918f918f9182919085019084908082843760009201919091525050604080516020601f8d018190048102820181019092528b815292508b91508a908190840183828082843760009201919091525061383092505050565b8a611a6682846001865103815181106119e257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561153957600080fd5b1015611abd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b505050505050505050505050565b6060808442811015611b3e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b611b6989897f000000000000000000000000000000000000000000000000000000000000000061227c565b92506060611b7b8c858c8c8a8a6131b7565b815191945091508b9084907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101908110611bb257fe5b60200260200101511015611c11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b611c3784600081518110611c2157fe5b6020026020010151338c8c600081811061172157fe5b611c788385308d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250614671915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d84600186510381518110611cc457fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611d0257600080fd5b505af1158015611d16573d6000803e3d6000fd5b50505050611d3b8884600186510381518110611d2e57fe5b6020026020010151614be9565b50509850989650505050505050565b60608280611db957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b8060010167ffffffffffffffff81118015611dd357600080fd5b50604051908082528060200260200182016040528015611dfd578160200160208202803683370190505b5091508282600081518110611e0e57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506060807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631f2a1a2b88886040518363ffffffff1660e01b815260040180806020018281038252848482818152602001925060200280828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b158015611eeb57600080fd5b505afa158015611eff573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040908152811015611f4657600080fd5b8101908080516040519392919084640100000000821115611f6657600080fd5b908301906020820185811115611f7b57600080fd5b8251866020820283011164010000000082111715611f9857600080fd5b82525081516020918201928201910280838360005b83811015611fc5578181015183820152602001611fad565b5050505090500160405260200180516040519392919084640100000000821115611fee57600080fd5b90830190602082018581111561200357600080fd5b825186602082028301116401000000008211171561202057600080fd5b82525081516020918201928201910280838360005b8381101561204d578181015183820152602001612035565b505050509050016040525050509150915060008090505b8381101561210a5761209d83828151811061207b57fe5b602002602001015183838151811061208f57fe5b602002602001015188614d26565b8582600101815181106120ac57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508481600101815181106120f557fe5b60209081029190910101519550600101612064565b505050509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608061214787878761227c565b90506110cf888289898888614eb1565b60608084428110156121ca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6121f589897f000000000000000000000000000000000000000000000000000000000000000061227c565b925060606122078c858c8c8a8a614eb1565b80925081945050508a8360008151811061221d57fe5b60200260200101511115611c11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180615e046024913960400191505060405180910390fd5b606082806122eb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e56414c49445f504154480000000000000000000000000000000000000000604482015290519081900360640190fd5b8060010167ffffffffffffffff8111801561230557600080fd5b5060405190808252806020026020018201604052801561232f578160200160208202803683370190505b509150828260018451038151811061234357fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506060807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631f2a1a2b88886040518363ffffffff1660e01b815260040180806020018281038252848482818152602001925060200280828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b15801561242057600080fd5b505afa158015612434573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604090815281101561247b57600080fd5b810190808051604051939291908464010000000082111561249b57600080fd5b9083019060208201858111156124b057600080fd5b82518660208202830111640100000000821117156124cd57600080fd5b82525081516020918201928201910280838360005b838110156124fa5781810151838201526020016124e2565b505050509050016040526020018051604051939291908464010000000082111561252357600080fd5b90830190602082018581111561253857600080fd5b825186602082028301116401000000008211171561255557600080fd5b82525081516020918201928201910280838360005b8381101561258257818101518382015260200161256a565b505050509050016040525050509150915060006001840390505b8381101561210a576125b383828151811061207b57fe5b8582815181106125bf57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084818151811061260557fe5b602090810291909101015195507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161259c565b60608084428110156126ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6126b78a8a8a61227c565b925060606126c98d858d8d8a8a614eb1565b80925081945050508b836000815181106126df57fe5b602002602001015111156116fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180615e046024913960400191505060405180910390fd5b60608084428110156127b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6127dc89897f0000000000000000000000000000000000000000000000000000000000000000611d4a565b925060606127ee8b858c8c8a8a614eb1565b8092508194505050348360008151811061280457fe5b60200260200101511115612863576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180615e046024913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0846000815181106128ac57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156128df57600080fd5b505af11580156128f3573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8b8b600081811061294157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168560008151811061296b57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156129dc57600080fd5b505af11580156129f0573d6000803e3d6000fd5b505050506040513d6020811015612a0657600080fd5b5051612a7357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b612ab483858a8d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250614671915050565b82600081518110612ac157fe5b6020026020010151341115612af057612af03384600081518110612ae157fe5b60200260200101513403614be9565b505097509795505050505050565b8242811015612b6e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6060612b9b88887f000000000000000000000000000000000000000000000000000000000000000061227c565b9050612be681600081518110612bad57fe5b6020026020010151338a8a6000818110612bc357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168d6144a9565b612c5881308a8a8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525061383092505050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015612ce857600080fd5b505afa158015612cfc573d6000803e3d6000fd5b505050506040513d6020811015612d1257600080fd5b5051905089811015612d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015612de257600080fd5b505af1158015612df6573d6000803e3d6000fd5b505050506115c88782614be9565b6060808442811015612e7757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b612ea289897f0000000000000000000000000000000000000000000000000000000000000000611d4a565b92506060612eb434858c8c8a8a6131b7565b815191945091508b9084907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101908110612eeb57fe5b60200260200101511015612f4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db084600081518110612f9357fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612fc657600080fd5b505af1158015612fda573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8b8b600081811061302857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168560008151811061305257fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156130c357600080fd5b505af11580156130d7573d6000803e3d6000fd5b505050506040513d60208110156130ed57600080fd5b505161315a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b612af083858a8d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250614671915050565b606080612147878787611d4a565b6060806110bf87878761227c565b606080865167ffffffffffffffff811180156131d257600080fd5b506040519080825280602002602001820160405280156131fc578160200160208202803683370190505b5091508467ffffffffffffffff8111801561321657600080fd5b5060405190808252806020026020018201604052801561324a57816020015b60608152602001906001900390816132355790505b509050878260008151811061325b57fe5b6020026020010181815250506000805b60018951038110156138235760006132aa89898481811061328857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615586565b905080600114806132bb5750806004145b156134695760008061331f8b8b868181106132d257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168d86815181106132fb57fe5b60200260200101518e876001018151811061331257fe5b60200260200101516156d2565b915091506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b88c91488e8e8981811061336e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604080518083038186803b1580156133ea57600080fd5b505afa1580156133fe573d6000803e3d6000fd5b505050506040513d604081101561341457600080fd5b5080516020909101518a519193509150613445908a908890811061343457fe5b6020026020010151858585856157b0565b89876001018151811061345457fe5b6020026020010181815250505050505061381a565b60606134ac88888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506158fe915050565b90945090506002821415613645578989848181106134c657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b19103b8c858151811061350a57fe5b602002602001015188868151811061351e57fe5b6020026020010151846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156135ab578181015183820152602001613593565b50505050905090810190601f1680156135d85780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b1580156135f757600080fd5b505afa15801561360b573d6000803e3d6000fd5b505050506040513d602081101561362157600080fd5b5051865187906001860190811061363457fe5b602002602001018181525050613800565b89898481811061365157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166372ca73728c858151811061369557fe5b60200260200101518886815181106136a957fe5b602002602001015133856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015613769578181015183820152602001613751565b50505050905090810190601f1680156137965780820380516001836020036101000a031916815260200191505b509550505050505060206040518083038186803b1580156137b657600080fd5b505afa1580156137ca573d6000803e3d6000fd5b505050506040513d60208110156137e057600080fd5b505186518790600186019081106137f357fe5b6020026020010181815250505b8085848151811061380d57fe5b6020026020010181905250505b5060010161326b565b5050965096945050505050565b6000805b60018651038110156144565761387386828151811061384f57fe5b602002602001015187836001018151811061386657fe5b6020026020010151615981565b5050600086826001018151811061388657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168783815181106138b057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1610905060008783815181106138df57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a0823187858151811061390e57fe5b60200260200101516040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561397657600080fd5b505afa15801561398a573d6000803e3d6000fd5b505050506040513d60208110156139a057600080fd5b5051865190915060009081906139c9908990879081106139bc57fe5b6020026020010151615586565b9050600060028b510386106139de57896139f6565b8886600101815181106139ed57fe5b60200260200101515b90508160011480613a075750816004145b15613e1c576000898781518110613a1a57fe5b602002602001015190506000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613a6d57600080fd5b505afa158015613a81573d6000803e3d6000fd5b505050506040513d6060811015613a9757600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905060008089613ac6578284613ac9565b83835b9092509050613ade898363ffffffff61445e16565b98506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b88c9148886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604080518083038186803b158015613b7f57600080fd5b505afa158015613b93573d6000803e3d6000fd5b505050506040513d6040811015613ba957600080fd5b5080516020909101519092509050613bc48b858585856157b0565b99505050505050505060008086613bdd57846000613be1565b6000855b915091508360041415613cad578a8881518110613bfa57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16636d9a640a8383866040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b158015613c9057600080fd5b505af1158015613ca4573d6000803e3d6000fd5b50505050613e15565b8a8881518110613cb957fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663022c0d9f838386600067ffffffffffffffff81118015613cf757600080fd5b506040519080825280601f01601f191660200182016040528015613d22576020820181803683370190505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015613dad578181015183820152602001613d95565b50505050905090810190601f168015613dda5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015613dfc57600080fd5b505af1158015613e10573d6000803e3d6000fd5b505050505b5050614445565b6060613e2889896158fe565b80925081995050506000808b8981518110613e3f57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16633c6d5c726040518163ffffffff1660e01b8152600401604080518083038186803b158015613e8b57600080fd5b505afa158015613e9f573d6000803e3d6000fd5b505050506040513d6040811015613eb557600080fd5b5080516020909101519092509050613ee088613ed15781613ed3565b825b889063ffffffff61445e16565b9650505082600214156141665760008a8881518110613efb57fe5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff16633b19103b8e8a81518110613f2d57fe5b602002602001015188856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015613fbb578181015183820152602001613fa3565b50505050905090810190601f168015613fe85780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b15801561400757600080fd5b505afa15801561401b573d6000803e3d6000fd5b505050506040513d602081101561403157600080fd5b505194506000808861404557866000614049565b6000875b915091508273ffffffffffffffffffffffffffffffffffffffff1663022c0d9f838388886040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156140f75781810151838201526020016140df565b50505050905090810190601f1680156141245780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561414657600080fd5b505af115801561415a573d6000803e3d6000fd5b50505050505050614443565b60008a888151811061417457fe5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff166372ca73728e8a815181106141a657fe5b60200260200101518833866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561426757818101518382015260200161424f565b50505050905090810190601f1680156142945780820380516001836020036101000a031916815260200191505b509550505050505060206040518083038186803b1580156142b457600080fd5b505afa1580156142c8573d6000803e3d6000fd5b505050506040513d60208110156142de57600080fd5b50519450600080886142f2578660006142f6565b6000875b915091508273ffffffffffffffffffffffffffffffffffffffff1663d7dc4e4383838833896040518663ffffffff1660e01b8152600401808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156143d75781810151838201526020016143bf565b50505050905090810190601f1680156144045780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561442757600080fd5b505af115801561443b573d6000803e3d6000fd5b505050505050505b505b505060019093019250613834915050565b505050505050565b60006144a083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615aea565b90505b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061458757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161454a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146145e9576040519150601f19603f3d011682016040523d82523d6000602084013e6145ee565b606091505b509150915081801561461c57508051158061461c575080806020019051602081101561461957600080fd5b50515b614456576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180615e4b6024913960400191505060405180910390fd5b60005b600185510381101561445657600080600087848151811061469157fe5b60200260200101518885600101815181106146a857fe5b60200260200101519150915060006146c08383615981565b5090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16149350505050600087836001018151811061470857fe5b602002602001015190506000808361472257826000614726565b6000835b91509150600060028a5103861061473d5788614755565b87866001018151811061474c57fe5b60200260200101515b905060006147688988815181106139bc57fe5b905080600114156148df5788878151811061477f57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663022c0d9f858585600067ffffffffffffffff811180156147bd57600080fd5b506040519080825280601f01601f1916602001820160405280156147e8576020820181803683370190505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561487357818101518382015260200161485b565b50505050905090810190601f1680156148a05780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156148c257600080fd5b505af11580156148d6573d6000803e3d6000fd5b50505050614bd7565b80600214156149b7578887815181106148f457fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663022c0d9f8585858c8c8151811061492657fe5b60200260200101516040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360008381101561487357818101518382015260200161485b565b8060031415614b13578887815181106149cc57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663d7dc4e43858585338d8d815181106149ff57fe5b60200260200101516040518663ffffffff1660e01b8152600401808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015614ac3578181015183820152602001614aab565b50505050905090810190601f168015614af05780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b1580156148c257600080fd5b8060041415614bd757888781518110614b2857fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16636d9a640a8585856040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b158015614bbe57600080fd5b505af1158015614bd2573d6000803e3d6000fd5b505050505b50506001909401935061467492505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310614c6057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101614c23565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614cc2576040519150601f19603f3d011682016040523d82523d6000602084013e614cc7565b606091505b5050905080614d21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180615e286023913960400191505060405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff841615801590614d62575073ffffffffffffffffffffffffffffffffffffffff831615155b614dcd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f504149525f4e4f545f444546494e454400000000000000000000000000000000604482015290519081900360640190fd5b8173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415614e08575081614eaa565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415614e43575082614eaa565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f504149525f4e4f545f4d41544348000000000000000000000000000000000000604482015290519081900360640190fd5b9392505050565b606080865167ffffffffffffffff81118015614ecc57600080fd5b50604051908082528060200260200182016040528015614ef6578160200160208202803683370190505b5091508467ffffffffffffffff81118015614f1057600080fd5b50604051908082528060200260200182016040528015614f4457816020015b6060815260200190600190039081614f2f5790505b5090508782600184510381518110614f5857fe5b602090810291909101015286516000907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b8015613823576000614fa589896001850381811061328857fe5b90508060011480614fb65750806004145b1561515d576000806150108b8b60018703818110614fd057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168d6001870381518110614ffc57fe5b60200260200101518e878151811061331257fe5b915091506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b88c91488e8e60018a0381811061506257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604080518083038186803b1580156150de57600080fd5b505afa1580156150f2573d6000803e3d6000fd5b505050506040513d604081101561510857600080fd5b5080516020909101518a519193509150615139908a908890811061512857fe5b602002602001015185858585615b9b565b89600188038151811061514857fe5b6020026020010181815250505050505061555e565b60606151a088888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506158fe915050565b9094509050600282141561535b578989600185038181106151bd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663685639a98c858151811061520157fe5b602002602001015188868151811061521557fe5b6020026020010151846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156152a257818101518382015260200161528a565b50505050905090810190601f1680156152cf5780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b1580156152ee57600080fd5b505afa158015615302573d6000803e3d6000fd5b505050506040513d602081101561531857600080fd5b5051865187907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff860190811061534a57fe5b602002602001018181525050615541565b81600314156155415789896001850381811061537357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ea5dbbc48c85815181106153b757fe5b60200260200101518886815181106153cb57fe5b602002602001015133856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561548b578181015183820152602001615473565b50505050905090810190601f1680156154b85780820380516001836020036101000a031916815260200191505b509550505050505060206040518083038186803b1580156154d857600080fd5b505afa1580156154ec573d6000803e3d6000fd5b505050506040513d602081101561550257600080fd5b5051865187907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff860190811061553457fe5b6020026020010181815250505b8085600185038151811061555157fe5b6020026020010181905250505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01614f8b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638d8a7c8a836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561562557600080fd5b505afa158015615639573d6000803e3d6000fd5b505050506040513d602081101561564f57600080fd5b5051905080158015906156625750600581105b6156cd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f504149525f4e4f545f524547434f4e495a454400000000000000000000000000604482015290519081900360640190fd5b919050565b60008060006156e18585615981565b5090506000808773ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561572d57600080fd5b505afa158015615741573d6000803e3d6000fd5b505050506040513d606081101561575757600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff8781169084161461579e5780826157a1565b81815b90999098509650505050505050565b600080861161582057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6000851180156158305750600084115b61589b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b60006158ad878563ffffffff615cd316565b905060006158c1828763ffffffff615cd316565b905060006158e5836158d98a8863ffffffff615cd316565b9063ffffffff615d4616565b90508082816158f057fe5b049998505050505050505050565b6000606083516020840193508084148185101715615979578385015181818601111561592957600080fd5b604051602082018101604052818152818601945080935060208101905060208688010160005b8381101561596757818101518382015260200161594f565b50602083038082015181840152505050505b509250929050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415615a1f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610615a59578284615a5c565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216615ae357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b9250929050565b60008184841115615b93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015615b58578181015183820152602001615b40565b50505050905090810190601f168015615b855780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000808611615bf5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180615dbb6028913960400191505060405180910390fd5b600085118015615c055750600084115b615c7057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b6000615c9283615c86888a63ffffffff615cd316565b9063ffffffff615cd316565b90506000615caa85615c86888b63ffffffff61445e16565b9050615cc76001828481615cba57fe5b049063ffffffff615d4616565b98975050505050505050565b600082615ce2575060006144a3565b82820282848281615cef57fe5b04146144a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180615de36021913960400191505060405180910390fd5b6000828201838110156144a057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fdfe487962726964526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e54536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77487962726964526f757465723a204558434553534956455f494e5055545f414d4f554e545472616e7366657248656c7065723a204554485f5452414e534645525f4641494c45445472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a264697066735822122049ad434f1bd48dff0560ac85a16b51dd5b7dc0fb93b0690414ee3debe205695a64736f6c634300060b0033"
}