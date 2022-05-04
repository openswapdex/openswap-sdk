export default {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
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
        }
    ],
    "bytecode": "60a060405234801561001057600080fd5b503360601b6080526000805460ff1916600117905560805160601c6101ec6100456000398060bf528060f952506101ec6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063b8f7a66514610046578063c45a015514610062578063f5ee334814610093575b600080fd5b61004e6100b4565b604080519115158252519081900360200190f35b61006a6100bd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b2600480360360208110156100a957600080fd5b503515156100e1565b005b60005460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461018557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905556fea2646970667358221220828e5274fe7ae09a5a1b4f5b24ac82cb919a4048f5ec297e1cff087912435f3f64736f6c634300060b0033"
}