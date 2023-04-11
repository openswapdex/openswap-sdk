export default {
"abi":[
{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"int256","name":"_initialAnswer","type":"int256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"int256","name":"_answer","type":"int256"}],"name":"updateAnswer","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"},{"internalType":"int256","name":"_answer","type":"int256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"uint256","name":"_startedAt","type":"uint256"}],"name":"updateRoundData","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b506040516106e13803806106e18339818101604052606081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b5060409081526020828101519290910151855192945092506101039160009186019061016c565b506001805460ff191660ff841617905561011c81610124565b505050610207565b60028190554260038190556004805460010180825560009081526005602090815260408083209590955582548252600681528482208490559154815260079091529190912055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ad57805160ff19168380011785556101da565b828001600101855582156101da579182015b828111156101da5782518255916020019190600101906101bf565b506101e69291506101ea565b5090565b61020491905b808211156101e657600081556001016101f0565b90565b6104cb806102166000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638205bf6a11610081578063b5ab58dc1161005b578063b5ab58dc14610268578063b633620c14610285578063feaf968c146102a2576100d4565b80638205bf6a146101db5780639a6fc8f5146101e3578063a87a20ce1461024b576100d4565b806354fd4d50116100b257806354fd4d501461014e578063668a0f02146101565780637284e4161461015e576100d4565b8063313ce567146100d95780634aa2011f146100f757806350d25bcd14610134575b600080fd5b6100e16102aa565b6040805160ff9092168252519081900360200190f35b6101326004803603608081101561010d57600080fd5b5069ffffffffffffffffffff81351690602081013590604081013590606001356102b3565b005b61013c610300565b60408051918252519081900360200190f35b61013c610306565b61013c61030b565b610166610311565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a0578181015183820152602001610188565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61013c6103bd565b61020c600480360360208110156101f957600080fd5b503569ffffffffffffffffffff166103c3565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6101326004803603602081101561026157600080fd5b50356103fc565b61013c6004803603602081101561027e57600080fd5b5035610444565b61013c6004803603602081101561029b57600080fd5b5035610456565b61020c610468565b60015460ff1681565b69ffffffffffffffffffff90931660048181556002849055600383905560009182526005602090815260408084209590955581548352600681528483209390935554815260079091522055565b60025481565b600081565b60045481565b6000805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156103b55780601f1061038a576101008083540402835291602001916103b5565b820191906000526020600020905b81548152906001019060200180831161039857829003601f168201915b505050505081565b60035481565b69ffffffffffffffffffff8116600090815260056020908152604080832054600783528184205460069093529220549293919290918490565b60028190554260038190556004805460010180825560009081526005602090815260408083209590955582548252600681528482208490559154815260079091529190912055565b60056020526000908152604090205481565b60066020526000908152604090205481565b6004546000818152600560209081526040808320546007835281842054600690935292205483909192939456fea2646970667358221220684c59afe9165f0cbf5e3ab6dab3fe0907e4d8d5f49f19a7f977ba7b5ec2279e64736f6c634300060b0033"
}