export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_pairCreator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tradeFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_protocolFeeTo",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newSize",
                    "type": "uint256"
                }
            ],
            "name": "PairCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "name": "PairRestarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "name": "PairShutdowned",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value",
                    "type": "bytes32"
                }
            ],
            "name": "ParamSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value1",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value2",
                    "type": "bytes32"
                }
            ],
            "name": "ParamSet2",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Restarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Shutdowned",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "createPair",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
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
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "getPair",
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
            "name": "governance",
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
            "name": "pairCreator",
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
            "inputs": [],
            "name": "protocolFeeParams",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_protocolFeeTo",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "protocolFeeTo",
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
                    "name": "pair",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "live",
                    "type": "bool"
                }
            ],
            "name": "setLiveForPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                }
            ],
            "name": "setProtocolFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_protocolFeeTo",
                    "type": "address"
                }
            ],
            "name": "setProtocolFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tradeFee",
                    "type": "uint256"
                }
            ],
            "name": "setTradeFee",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        }
    ],
    "bytecode": "60a060405234801561001057600080fd5b506040516117b73803806117b7833981810160405260a081101561003357600080fd5b508051602082015160408301516060808501516080958601519185901b6001600160601b03191690955260008054600160ff1990911617610100600160a81b0319166101006001600160a01b0386160217905592939192909190620186a08311156100d9576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f54524144455f46454560781b604482015290519081900360640190fd5b620186a0821115610131576040805162461bcd60e51b815260206004820152601460248201527f494e56414c49445f50524f544f434f4c5f464545000000000000000000000000604482015290519081900360640190fd5b60038390556004829055600580546001600160a01b0319166001600160a01b0383161790556040805167747261646546656560c01b8152602081018590528151600080516020611797833981519152929181900390910190a1600454604080516a70726f746f636f6c46656560a81b8152602081019290925280516000805160206117978339815191529281900390910190a1600554604080516c70726f746f636f6c466565546f60981b815260609290921b6001600160601b031916602083015280516000805160206117978339815191529281900390910190a1505050505060805160601c6115456102526000398061036452806105585280610593528061068652806108ad528061109852806112a2528061139552506115456000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b0e21e8a11610097578063e0e6799f11610066578063e0e6799f14610289578063e6a43905146102bc578063ef369252146102f7578063f5ee3348146102ff57610100565b8063b0e21e8a14610222578063b8f7a6651461022a578063c538b5d614610246578063c9c653961461024e57610100565b80635aa6e675116100d35780635aa6e6751461018c5780636883618a14610194578063787dce3d146101cf5780639931e80b146101ec57610100565b806310603023146101055780631e3dd18b1461012457806324bcdfbd1461016a578063574f2ba314610184575b600080fd5b6101226004803603602081101561011b57600080fd5b503561031e565b005b6101416004803603602081101561013a57600080fd5b5035610516565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61017261054a565b60408051918252519081900360200190f35b610172610550565b610141610556565b610122600480360360408110156101aa57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135151561057a565b610122600480360360208110156101e557600080fd5b5035610867565b6101f4610a5f565b6040805192835273ffffffffffffffffffffffffffffffffffffffff90911660208301528051918290030190f35b610172610a7f565b610232610a85565b604080519115158252519081900360200190f35b610141610a8e565b6101416004803603604081101561026457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610aaf565b6101226004803603602081101561029f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611052565b610141600480360360408110156102d257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661123a565b61014161126d565b6101226004803603602081101561031557600080fd5b50351515611289565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156103aa57600080fd5b505afa1580156103be573d6000803e3d6000fd5b505050506040513d60208110156103d457600080fd5b505161044157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a08111156104b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f494e56414c49445f54524144455f464545000000000000000000000000000000604482015290519081900360640190fd5b6003819055604080517f747261646546656500000000000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b6002818154811061052357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60035481565b60025490565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f757600080fd5b505afa15801561060b573d6000803e3d6000fd5b505050506040513d602081101561062157600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614806106f95750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156106cc57600080fd5b505afa1580156106e0573d6000803e3d6000fd5b505050506040513d60208110156106f657600080fd5b50515b61074e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806114ef6021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b1580156107bd57600080fd5b505af11580156107d1573d6000803e3d6000fd5b5050505080156108215760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a2610863565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156108f357600080fd5b505afa158015610907573d6000803e3d6000fd5b505050506040513d602081101561091d57600080fd5b505161098a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a08111156109fc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f494e56414c49445f50524f544f434f4c5f464545000000000000000000000000604482015290519081900360640190fd5b6004819055604080517f70726f746f636f6c46656500000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b60045460055473ffffffffffffffffffffffffffffffffffffffff169091565b60045481565b60005460ff1681565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b4c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610b89578385610b8c565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff8216610c1357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff828116600090815260016020908152604080832085851684529091529020541615610cb457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f504149525f455849535453000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085811b821660208085019190915285821b90921660348401528351602881850301815260488401855280519083012060008054606c80870184905287518088039091018152608c909601875293850180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed25a5a20000000000000000000000000000000000000000000000000000000017815295518551929691959394610100900473ffffffffffffffffffffffffffffffffffffffff169392909182918083835b60208310610dda57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610d9d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610e3a576040519150601f19603f3d011682016040523d82523d6000602084013e610e3f565b606091505b509150915081610eb057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661696c656420746f2063726561746520706169720000000000000000000000604482015290519081900360640190fd5b808060200190516020811015610ec557600080fd5b5051604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152878116602483015291519298509088169163485cc9559160448082019260009290919082900301818387803b158015610f4357600080fd5b505af1158015610f57573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff85811660008181526001602081815260408084208a87168086529083528185208054978e167fffffffffffffffffffffffff0000000000000000000000000000000000000000988916811790915584845282862087875284528286208054891682179055600280549586018155958690527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90940180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a3505050505092915050565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156110de57600080fd5b505afa1580156110f2573d6000803e3d6000fd5b505050506040513d602081101561110857600080fd5b505161117557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790819055604080517f70726f746f636f6c466565546f00000000000000000000000000000000000000815260609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602083015280517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff1625099281900390910190a150565b600160209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b15801561130657600080fd5b505afa15801561131a573d6000803e3d6000fd5b505050506040513d602081101561133057600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614806114085750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156113db57600080fd5b505afa1580156113ef573d6000803e3d6000fd5b505050506040513d602081101561140557600080fd5b50515b61145d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806114ef6021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff16156114c1576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a16114eb565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a15b5056fe4e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67a2646970667358221220b65bb1c5503eb195458001f97127cea236d68ddf7079c341d66628439e012dcc64736f6c634300060b003322ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509"
}