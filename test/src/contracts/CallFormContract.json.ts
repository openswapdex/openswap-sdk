export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_weth","type":"address"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"uint256","name":"token0In","type":"uint256"},{"internalType":"uint256","name":"token1In","type":"uint256"},{"internalType":"uint256","name":"token0Out","type":"uint256"},{"internalType":"uint256","name":"token1Out","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"callPairToSwap","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b506040516108a63803806108a68339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b03199182161790915560018054948416948216949094179093556002805492909116919092161790556108178061008f6000396000f3fe60806040526004361061003f5760003560e01c80633fc8cef3146100445780639ddd658314610082578063c45a015514610132578063f887ea4014610147575b600080fd5b34801561005057600080fd5b5061005961015c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610130600480360360e081101561009857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359160808201359160a08101359181019060e0810160c08201356401000000008111156100f157600080fd5b82018360208201111561010357600080fd5b8035906020019184600183028401116401000000008311171561012557600080fd5b509092509050610178565b005b34801561013e57600080fd5b506100596107a9565b34801561015357600080fd5b506100596107c5565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b8673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161061021257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e636f727265637420746f6b656e206f726465720000000000000000000000604482015290519081900360640190fd5b600154604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b811660048301528a811660248301529151600093929092169163e6a4390591604480820192602092909190829003018186803b15801561029157600080fd5b505afa1580156102a5573d6000803e3d6000fd5b505050506040513d60208110156102bb57600080fd5b5051905086156104c15760005473ffffffffffffffffffffffffffffffffffffffff8a8116911614156104155760008054604080517fd0e30db0000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263d0e30db0928b92600480820193929182900301818588803b15801561035357600080fd5b505af1158015610367573d6000803e3d6000fd5b5050604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018d90529151918e16945063a9059cbb935060448082019350602092918290030181600087803b1580156103e357600080fd5b505af11580156103f7573d6000803e3d6000fd5b505050506040513d602081101561040d57600080fd5b506104c19050565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152604482018a90529151918b16916323b872dd916064808201926020929091908290030181600087803b15801561049457600080fd5b505af11580156104a8573d6000803e3d6000fd5b505050506040513d60208110156104be57600080fd5b50505b85156106c35760005473ffffffffffffffffffffffffffffffffffffffff898116911614156106175760008054604080517fd0e30db0000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263d0e30db0928a92600480820193929182900301818588803b15801561055557600080fd5b505af1158015610569573d6000803e3d6000fd5b5050604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018c90529151918d16945063a9059cbb935060448082019350602092918290030181600087803b1580156105e557600080fd5b505af11580156105f9573d6000803e3d6000fd5b505050506040513d602081101561060f57600080fd5b506106c39050565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152604482018990529151918a16916323b872dd916064808201926020929091908290030181600087803b15801561069657600080fd5b505af11580156106aa573d6000803e3d6000fd5b505050506040513d60208110156106c057600080fd5b50505b8073ffffffffffffffffffffffffffffffffffffffff1663022c0d9f86863387876040518663ffffffff1660e01b8152600401808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561078657600080fd5b505af115801561079a573d6000803e3d6000fd5b50505050505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff168156fea264697066735822122012265ec742522faa513b61404fa37ba7a1384250e6e991b0a717304bd286251d64736f6c634300060b0033"
}