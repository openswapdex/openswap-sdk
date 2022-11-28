export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_governance","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bytes32[]","name":"params","type":"bytes32[]"}],"name":"execute","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50604051610a04380380610a048339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b0319918216179091556001805493909216921691909117905561098a8061007a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635aa6e675146100465780638af7c64914610077578063f851a440146100e9575b600080fd5b61004e6100f1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100e76004803603602081101561008d57600080fd5b8101906020810181356401000000008111156100a857600080fd5b8201836020820111156100ba57600080fd5b803590602001918460208302840111640100000000831117156100dc57600080fd5b50909250905061010d565b005b61004e6108c3565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600054604080517fb15866e6000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163b15866e691602480820192602092909190829003018186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b50516101ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806108e06026913960400191505060405180910390fd5b60008282600081811061020e57fe5b90506020020135905060008383600181811061022657fe5b6020029190910135915050600483141561036357817f736574566f74696e67436f6e6669670000000000000000000000000000000000141561030d5760005473ffffffffffffffffffffffffffffffffffffffff1663d9c37086828686600281811061028e57fe5b90506020020135878760038181106102a257fe5b9050602002013560001c6040518463ffffffff1660e01b8152600401808481526020018381526020018281526020019350505050600060405180830381600087803b1580156102f057600080fd5b505af1158015610304573d6000803e3d6000fd5b5050505061035e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061092f6026913960400191505060405180910390fd5b6108bd565b600283141561067257817f7365744d696e5374616b65506572696f6400000000000000000000000000000014156104025760008054604080517f499b86d800000000000000000000000000000000000000000000000000000000815260048101859052905173ffffffffffffffffffffffffffffffffffffffff9092169263499b86d89260248084019382900301818387803b1580156102f057600080fd5b817f7365744d617841646d696e000000000000000000000000000000000000000000141561049d57600154604080517f03cb43e500000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff909216916303cb43e59160248082019260009290919082900301818387803b1580156102f057600080fd5b817f61646441646d696e000000000000000000000000000000000000000000000000141561053b57600154604080517f70480275000000000000000000000000000000000000000000000000000000008152606084901c6004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163704802759160248082019260009290919082900301818387803b1580156102f057600080fd5b817f72656d6f766541646d696e00000000000000000000000000000000000000000014156105d957600154604080517f1785f53c000000000000000000000000000000000000000000000000000000008152606084901c6004820152905173ffffffffffffffffffffffffffffffffffffffff90921691631785f53c9160248082019260009290919082900301818387803b1580156102f057600080fd5b817f73657441646d696e000000000000000000000000000000000000000000000000141561030d5760008054604080517f704b6c02000000000000000000000000000000000000000000000000000000008152606085901c6004820152905173ffffffffffffffffffffffffffffffffffffffff9092169263704b6c029260248084019382900301818387803b1580156102f057600080fd5b600383141561075057817f736574566f74696e674578656375746f72000000000000000000000000000000141561030d5760005473ffffffffffffffffffffffffffffffffffffffff1663788ddbcb606083901c868660028181106106d357fe5b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff909516600486015260209091029290920135151560248401525051604480830192600092919082900301818387803b1580156102f057600080fd5b600783141561086c57817f616464566f74696e67436f6e6669670000000000000000000000000000000000141561030d5760005473ffffffffffffffffffffffffffffffffffffffff166365611e4382868660028181106107ad57fe5b9050602002013560001c878760038181106107c457fe5b9050602002013560001c888860048181106107db57fe5b9050602002013560001c898960058181106107f257fe5b9050602002013560001c8a8a600681811061080957fe5b9050602002013560001c6040518763ffffffff1660e01b8152600401808781526020018681526020018581526020018481526020018381526020018281526020019650505050505050600060405180830381600087803b1580156102f057600080fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806109066029913960400191505060405180910390fd5b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fe4f41584445585f566f74696e674578656375746f723a204e6f742066726f6d20766f74696e674f41584445585f566f74696e674578656375746f723a20496e76616c696420706172616d65746572734f41584445585f566f74696e674578656375746f723a20556e6b6e6f776e20636f6d6d616e64a26469706673582212200b6e51da094c33738daa992040f6e0c1e3ad8d95013c4870f1e01d059134041864736f6c634300060b0033"
}