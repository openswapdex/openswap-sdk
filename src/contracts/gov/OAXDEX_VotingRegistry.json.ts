export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"executor","type":"address"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32[]","name":"options","type":"bytes32[]"},{"internalType":"uint256","name":"quorum","type":"uint256"},{"internalType":"uint256","name":"threshold","type":"uint256"},{"internalType":"uint256","name":"voteEndTime","type":"uint256"},{"internalType":"uint256","name":"executeDelay","type":"uint256"},{"internalType":"bytes32[]","name":"executeParam","type":"bytes32[]"}],"name":"newVote","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b50604051612b1b380380612b1b8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055612ab6806100656000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c80635aa6e675146200003f578063dac642fb1462000072575b600080fd5b6200004962000178565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6200017660048036036101008110156200008b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691602081013591810190606081016040820135640100000000811115620000c957600080fd5b820183602082011115620000dc57600080fd5b80359060200191846020830284011164010000000083111715620000ff57600080fd5b9193909282359260208101359260408201359260608301359260a0810190608001356401000000008111156200013457600080fd5b8201836020820111156200014757600080fd5b803590602001918460208302840111640100000000831117156200016a57600080fd5b50909250905062000194565b005b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600054604080517fa3818b3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8d81166004830152915184151593929092169163a3818b3b91602480820192602092909190829003018186803b1580156200020d57600080fd5b505afa15801562000222573d6000803e3d6000fd5b505050506040513d60208110156200023957600080fd5b505162000292576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018062002a5a6027913960400191505060405180910390fd5b600081620002c1577f706f6c6c00000000000000000000000000000000000000000000000000000000620002d7565b83836000818110620002cf57fe5b905060200201355b905060008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663718fbb79876040518263ffffffff1660e01b81526004018082815260200191505060a06040518083038186803b1580156200035457600080fd5b505afa15801562000369573d6000803e3d6000fd5b505050506040513d60a08110156200038057600080fd5b50805160208083015160408085015160608601516080909601516000805484517f426233600000000000000000000000000000000000000000000000000000000081523360048201529451979d50949b5091995095975094955073ffffffffffffffffffffffffffffffffffffffff90911692634262336092602480840193919291829003018186803b1580156200041757600080fd5b505afa1580156200042c573d6000803e3d6000fd5b505050506040513d60208110156200044357600080fd5b5051905082811015620004a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180620029ce6036913960400191505060405180910390fd5b84620004b58d4263ffffffff620008f516565b10156200050e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018062002a04602e913960400191505060405180910390fd5b83620005218d4263ffffffff620008f516565b11156200057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018062002975602f913960400191505060405180910390fd5b87156200063757818e1015620005dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018062002a326028913960400191505060405180910390fd5b858b101562000637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180620029a4602a913960400191505060405180910390fd5b5050505050505060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663145988986040518163ffffffff1660e01b8152600401602060405180830381600087803b158015620006aa57600080fd5b505af1158015620006bf573d6000803e3d6000fd5b505050506040513d6020811015620006d657600080fd5b505160008054604051929350909173ffffffffffffffffffffffffffffffffffffffff909116908e9084908f908f908f908f908f908f908f908f908f906200071e90620009f5565b808d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a8152602001806020018881526020018781526020018681526020018581526020018060200183810383528b8b82818152602001925060200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169091018481038352858152602090810191508690860280828437600081840152601f19601f8201169050808301925050509e505050505050505050505050505050604051809103906000f0801580156200084f573d6000803e3d6000fd5b5060008054604080517f8210775100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301528815156024830152915194955091169263821077519260448084019391929182900301818387803b158015620008cd57600080fd5b505af1158015620008e2573d6000803e3d6000fd5b5050505050505050505050505050505050565b60006200093983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525062000940565b9392505050565b60008184841115620009ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620009b157818101518382015260200162000997565b50505050905090810190601f168015620009df5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b611f718062000a048339019056fe60806040523480156200001157600080fd5b5060405162001f7138038062001f7183398181016040526101408110156200003857600080fd5b81516020830151604080850151606086015160808701805193519597949692959194919392820192846401000000008211156200007457600080fd5b9083019060208201858111156200008a57600080fd5b8251866020820283011164010000000082111715620000a857600080fd5b82525081516020918201928201910280838360005b83811015620000d7578181015183820152602001620000bd565b505050509190910160408181526020840151908401516060850151608086015160a0909601805193989297919695509192909190846401000000008211156200011f57600080fd5b9083019060208201858111156200013557600080fd5b82518660208202830111640100000000821117156200015357600080fd5b82525081516020918201928201910280838360005b838110156200018257818101518382015260200162000168565b5050505090500160405250505082421115620001d05760405162461bcd60e51b815260040180806020018281038252602481526020018062001f4d6024913960400191505060405180910390fd5b805115620003da57896001600160a01b031663a3818b3b8a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156200022f57600080fd5b505afa15801562000244573d6000803e3d6000fd5b505050506040513d60208110156200025b57600080fd5b5051620002af576040805162461bcd60e51b815260206004820181905260248201527f566f74696e67436f6e74726163743a20496e76616c6964206578656375746f72604482015290519081900360640190fd5b85516002148015620002d9575085600081518110620002ca57fe5b6020026020010151605960f81b145b8015620002fe575085600181518110620002ef57fe5b6020026020010151602760f91b145b62000350576040805162461bcd60e51b815260206004820152601f60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e7300604482015290519081900360640190fd5b670de0b6b3a7640000841115620003995760405162461bcd60e51b815260040180806020018281038252602181526020018062001f2c6021913960400191505060405180910390fd5b60008211620003da5760405162461bcd60e51b815260040180806020018281038252602581526020018062001f076025913960400191505060405180910390fd5b600080546001600160a01b03808d166001600160a01b03199283161792839055600180548d831693169290921790915560408051638b0e9f3f60e01b815290519290911691638b0e9f3f91600480820192602092909190829003018186803b1580156200044657600080fd5b505afa1580156200045b573d6000803e3d6000fd5b505050506040513d60208110156200047257600080fd5b5051600f556002889055600387905585516200049690600490602089019062000530565b506005859055600684905585516001600160401b0381118015620004b957600080fd5b50604051908082528060200260200182016040528015620004e4578160200160208202803683370190505b508051620004fb91600d9160209091019062000530565b50426007556008839055600982905580516200051f90601090602084019062000530565b5050505050505050505050620005a0565b8280548282559060005260206000209081019282156200056e579160200282015b828111156200056e57825182559160200191906001019062000551565b506200057c92915062000580565b5090565b6200059d91905b808211156200057c576000815560010162000587565b90565b61195780620005b06000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80635e615a6b116100f9578063af640d0f11610097578063e5188f5511610071578063e5188f5514610561578063ede20b4614610569578063ef9b78c614610571578063fc8add8114610579576101b9565b8063af640d0f14610549578063b3fff9bf14610551578063c34c08e514610559576101b9565b8063876cdb2f116100d3578063876cdb2f1461051457806396c82e571461051c5780639e6cb42b14610524578063a25457611461052c576101b9565b80635e615a6b146103725780636146195414610504578063769bdea31461050c576101b9565b80631a1dbabb1161016657806331a38c891161014057806331a38c891461030057806342cde4e81461031c578063583b306e146103245780635aa6e67514610341576101b9565b80631a1dbabb146102925780632376a29a1461029a578063281a9bdf146102cd576101b9565b80631703a018116101975780631703a0181461024f57806317e42ec01461025757806318024acc1461028a576101b9565b80630121b93f146101be57806306fdde03146101dd5780631069143a146101f7575b600080fd5b6101db600480360360208110156101d457600080fd5b5035610596565b005b6101e5610a48565b60408051918252519081900360200190f35b6101ff610a4e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561023b578181015183820152602001610223565b505050509050019250505060405180910390f35b6101e5610aa6565b6101db6004803603602081101561026d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610aac565b6101e5610cb2565b6101e5610cb8565b6101e5600480360360208110156102b057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cbe565b6101e5600480360360208110156102e357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cd0565b610308610ce2565b604080519115158252519081900360200190f35b6101e5610ceb565b6101e56004803603602081101561033a57600080fd5b5035610cf1565b610349610d0f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61037a610d2b565b604051808c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a81526020018060200189815260200188815260200187815260200186600260200280838360005b838110156103f65781810151838201526020016103de565b50505092019150506020810185606080838360005b8381101561042357818101518382015260200161040b565b505050509050018060200184810384528c818151815260200191508051906020019060200280838360005b8381101561046657818101518382015260200161044e565b50505050905001848103835287818151815260200191508051906020019060200280838360005b838110156104a557818101518382015260200161048d565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156104e45781810151838201526020016104cc565b505050509050019e50505050505050505050505050505060405180910390f35b6101db610edd565b6101ff611388565b6101e56113de565b6101e56113e4565b6101e56113ea565b6101e56004803603602081101561054257600080fd5b50356113f0565b6101e56113fd565b6101ff611403565b610349611459565b6101e5611475565b61030861147b565b6101db611489565b6101e56004803603602081101561058f57600080fd5b5035611583565b6008544211156105f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061186b6022913960400191505060405180910390fd5b600a54610100900460ff1615610652576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806117ff6023913960400191505060405180910390fd5b600a5460ff16156106ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806117da6025913960400191505060405180910390fd5b600454811061071e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e0000604482015290519081900360640190fd5b60008054601054604080517f65eaf8bc00000000000000000000000000000000000000000000000000000000815291156004830152336024830152604482018590525173ffffffffffffffffffffffffffffffffffffffff909216926365eaf8bc9260648084019382900301818387803b15801561079b57600080fd5b505af11580156107af573d6000803e3d6000fd5b5050336000908152600c6020526040902054915050801561083857336000908152600b6020526040902054600d8054610807918491849081106107ee57fe5b906000526020600020015461159090919063ffffffff16565b600d828154811061081457fe5b600091825260209091200155600e54610833908363ffffffff61159016565b600e55505b60008054604080517f42623360000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691634262336091602480820192602092909190829003018186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d60208110156108d457600080fd5b505190508061092e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118226022913960400191505060405180910390fd5b336000908152600b60209081526040808320869055600c9091529020819055600d805461097a9183918690811061096157fe5b90600052602060002001546115db90919063ffffffff16565b600d848154811061098757fe5b600091825260209091200155600e546109a6908263ffffffff6115db16565b600e55600054604080517f8b0e9f3f000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921691638b0e9f3f91600480820192602092909190829003018186803b158015610a1457600080fd5b505afa158015610a28573d6000803e3d6000fd5b505050506040513d6020811015610a3e57600080fd5b5051600f55505050565b60035481565b60606004805480602002602001604051908101604052809291908181526020018280548015610a9c57602002820191906000526020600020905b815481526020019060010190808311610a88575b5050505050905090565b60055481565b6008544211158015610ac65750600a54610100900460ff16155b8015610ad55750600a5460ff16155b15610caf5760008054604080517f4262336000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152915191909216916342623360916024808301926020929190829003018186803b158015610b4e57600080fd5b505afa158015610b62573d6000803e3d6000fd5b505050506040513d6020811015610b7857600080fd5b505173ffffffffffffffffffffffffffffffffffffffff83166000908152600c60205260409020549091508015801590610bb25750818114155b15610c485773ffffffffffffffffffffffffffffffffffffffff83166000908152600b6020908152604080832054600c909252909120839055600d8054610c11918591610c05918691869081106107ee57fe5b9063ffffffff6115db16565b600d8281548110610c1e57fe5b600091825260209091200155600e54610c43908490610c05908563ffffffff61159016565b600e55505b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1457600080fd5b50565b60075481565b60045490565b600c6020526000908152604090205481565b600b6020526000908152604090205481565b600a5460ff1681565b60065481565b60108181548110610cfe57fe5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080600060606000806000610d3f611773565b6060610d49611791565b600154600254600354600754600854600954604080518082018252600a5460ff80821615158352610100909104161515602080830191909152825160608181018552600554825260065482840152600f548286015260048054865181860281018601909752808752919b73ffffffffffffffffffffffffffffffffffffffff169a9998909790969095909493600d9392601092918a9190830182828015610e0f57602002820191906000526020600020905b815481526020019060010190808311610dfb575b5050505050975082805480602002602001604051908101604052809291908181526020018280548015610e6157602002820191906000526020600020905b815481526020019060010190808311610e4d575b5050505050925080805480602002602001604051908101604052809291908181526020018280548015610eb357602002820191906000526020600020905b815481526020019060010190808311610e9f575b505050505090509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b600954600854610ef29163ffffffff6115db16565b4211610f49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806117b0602a913960400191505060405180910390fd5b600a54610100900460ff1615610faa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806117ff6023913960400191505060405180910390fd5b600a5460ff1615611006576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806117da6025913960400191505060405180910390fd5b60105461105e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061188d6029913960400191505060405180910390fd5b600554600e5410156110d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a2051756f72756d206e6f74206d65740000604482015290519081900360640190fd5b600d6001815481106110df57fe5b9060005260206000200154600d6000815481106110f857fe5b90600052602060002001541161116f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f566f74696e67436f6e74726163743a204d616a6f72697479206e6f74206d6574604482015290519081900360640190fd5b600654600e546111849163ffffffff61164f16565b6111b7670de0b6b3a7640000600d60008154811061119e57fe5b906000526020600020015461164f90919063ffffffff16565b1161120d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806119016021913960400191505060405180910390fd5b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155546040517f8af7c649000000000000000000000000000000000000000000000000000000008152602060048201908152601080546024840181905273ffffffffffffffffffffffffffffffffffffffff90941693638af7c649939192918291604490910190849080156112cd57602002820191906000526020600020905b8154815260200190600101908083116112b9575b505092505050600060405180830381600087803b1580156112ed57600080fd5b505af1158015611301573d6000803e3d6000fd5b505060008054604080517f31a38c89000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921694506331a38c899350600480820193929182900301818387803b15801561136e57600080fd5b505af1158015611382573d6000803e3d6000fd5b50505050565b6060600d805480602002602001604051908101604052809291908181526020018280548015610a9c5760200282019190600052602060002090815481526020019060010190808311610a88575050505050905090565b60095481565b600f5481565b60085481565b60048181548110610cfe57fe5b60025481565b60606010805480602002602001604051908101604052809291908181526020018280548015610a9c5760200282019190600052602060002090815481526020019060010190808311610a88575050505050905090565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600e5481565b600a54610100900460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806118d7602a913960400191505060405180910390fd5b600a5460ff1615611555576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806118446027913960400191505060405180910390fd5b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b600d8181548110610cfe57fe5b60006115d283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116c2565b90505b92915050565b6000828201838110156115d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008261165e575060006115d5565b8282028284828161166b57fe5b04146115d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806118b66021913960400191505060405180910390fd5b6000818484111561176b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611730578181015183820152602001611718565b50505050905090810190601f16801561175d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60405180604001604052806002906020820280368337509192915050565b6040518060600160405280600390602082028036833750919291505056fe566f74696e67436f6e74726163743a20457865637574652064656c6179206e6f74207061737420796574566f74696e67436f6e74726163743a20566f746520616c7265616479206578656375746564566f74696e67436f6e74726163743a20566f746520616c7265616479207665746f6564566f74696e67436f6e74726163743a204e6f74207374616b656420746f20766f74654f41584445585f566f74696e67436f6e74726163743a20416c7265616479206578656375746564566f74696e67436f6e74726163743a20566f746520616c726561647920656e646564566f74696e67436f6e74726163743a204578656375746520706172616d206e6f7420646566696e6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f41584445585f566f74696e67436f6e74726163743a204e6f742066726f6d20476f7665726e616e6365566f74696e67436f6e74726163743a205468726573686f6c64206e6f74206d6574a2646970667358221220ec48fd60d4de6569692a1d7284165ffddb151ee49b007e494df6a019d0bd621764736f6c634300060b0033566f74696e67436f6e74726163743a20496e76616c696420657865637574652064656c6179566f74696e67436f6e74726163743a20496e76616c6964207468726573686f6c64566f74696e67436f6e74726163743a20566f74696e6720616c726561647920656e6465644f41584445585f566f74696e6752656769737472793a206578636565646564206d6178566f74654475726174696f6e4f41584445585f566f74696e6752656769737472793a206d696e45786544656c6179206e6f74206d65744f41584445585f566f74696e6752656769737472793a206d696e4f6178546f6b656e546f437265617465566f7465206e6f74206d65744f41584445585f566f74696e6752656769737472793a206d696e566f74654475726174696f6e206e6f74206d65744f41584445585f566f74696e6752656769737472793a206d696e51756f72756d206e6f74206d65744f41584445585f566f74696e6752656769737472793a20496e76616c6964206578656375746f72a2646970667358221220b68094d083be5b2cda5437b8bf7413f4d9b6a9aa289b5a3794d7a843684cd57464736f6c634300060b0033"
}