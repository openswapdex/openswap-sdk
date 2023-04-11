export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},
{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60c060405234801561001057600080fd5b5060405161137c38038061137c8339818101604052608081101561003357600080fd5b50805160208201516040830151606090930151919290916001600160a01b038416158015906100735750826001600160a01b0316846001600160a01b0316105b6100b8576040805162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015290519081900360640190fd5b60008054606086811b6001600160601b03199081166080529086901b1660a052336001600160a01b031991821617166001600160a01b039384161781556001919091559281169291169061123590610147903980610411528061050752806106355280610aa75280610bd25250806103ba52806104d65280610576528061098d5280610b1952506112356000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063d21220a71161005b578063d21220a714610277578063ddca3f431461027f578063fff6cae914610287576100be565b80638da5cb5b14610236578063ca706bcf1461023e576100be565b80630dfe1681116100a75780630dfe16811461019d578063632db21c146101ce57806369fe0e2d14610219576100be565b8063022c0d9f146100c35780630902f1ac1461015e575b600080fd5b61015c600480360360808110156100d957600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561011d57600080fd5b82018360208201111561012f57600080fd5b8035906020019184600183028401116401000000008311171561015157600080fd5b50909250905061028f565b005b61016661095b565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b6101a561098b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610207600480360360408110156101e457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109af565b60408051918252519081900360200190f35b61015c6004803603602081101561022f57600080fd5b50356109f3565b6101a5610a7e565b6102076004803603604081101561025457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a9a565b6101a5610aa5565b610207610ac9565b61015c610acf565b600085118061029e5750600084115b61030957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b6002546dffffffffffffffffffffffffffff168510801561034d57506002546e01000000000000000000000000000090046dffffffffffffffffffffffffffff1684105b6103b857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f494e53554646494349454e545f4c495155494449545900000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561046057507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b6104cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f494e56414c49445f544f00000000000000000000000000000000000000000000604482015290519081900360640190fd5b84156104fc576104fc7f00000000000000000000000000000000000000000000000000000000000000008487610c74565b831561052d5761052d7f00000000000000000000000000000000000000000000000000000000000000008486610c74565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b1580156105bd57600080fd5b505afa1580156105d1573d6000803e3d6000fd5b505050506040513d60208110156105e757600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b15801561067b57600080fd5b505afa15801561068f573d6000803e3d6000fd5b505050506040513d60208110156106a557600080fd5b50516002549091506000906dffffffffffffffffffffffffffff1688900383116106d05760006106e9565b6002546dffffffffffffffffffffffffffff1688900383035b6002549091506000906e01000000000000000000000000000090046dffffffffffffffffffffffffffff16889003831161072457600061074f565b6002546e01000000000000000000000000000090046dffffffffffffffffffffffffffff1688900383035b905060008211806107605750600081115b6107cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6107d481610e81565b89111561084257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e73756666696369656e7420416d6f756e7420300000000000000000000000604482015290519081900360640190fd5b61084b82610e81565b8811156108b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e73756666696369656e7420416d6f756e7420300000000000000000000000604482015290519081900360640190fd5b6002546108ef90859085906dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416610e9f565b60408051838152602081018390528082018b9052606081018a9052905173ffffffffffffffffffffffffffffffffffffffff89169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a3505050505050505050565b6002546dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166000909192565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006109ea60016109de6001546109d2620186a087610ff990919063ffffffff16565b9063ffffffff61106c16565b9063ffffffff6110ae16565b90505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a7957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e6572000000000000000000000000000000000000604482015290519081900360640190fd5b600155565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60006109ea82610e81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051610c729173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015610b6057600080fd5b505afa158015610b74573d6000803e3d6000fd5b505050506040513d6020811015610b8a57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b158015610c1857600080fd5b505afa158015610c2c573d6000803e3d6000fd5b505050506040513d6020811015610c4257600080fd5b50516002546dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416610e9f565b565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b60208310610d7a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610d3d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ddc576040519150601f19603f3d011682016040523d82523d6000602084013e610de1565b606091505b5091509150818015610e0f575080511580610e0f5750808060200190516020811015610e0c57600080fd5b50515b610e7a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b60006109ed620186a06109d260015485610ff990919063ffffffff16565b6dffffffffffffffffffffffffffff8411801590610ecb57506dffffffffffffffffffffffffffff8311155b610f3657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4f564552464c4f57000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600280547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff868116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008683168102919091179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a150505050565b600082611008575060006109ed565b8282028284828161101557fe5b04146109ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806111df6021913960400191505060405180910390fd5b60006109ea83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611122565b6000828201838110156109ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081836111c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561118d578181015183820152602001611175565b50505050905090810190601f1680156111ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816111d457fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122061eaf9e241272b487e68023817ee97d19d6143b3d01d9f677ebbcef98449ad4064736f6c634300060b0033"
}