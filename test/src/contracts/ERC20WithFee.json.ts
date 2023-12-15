export default {
"abi":[
{"inputs":[{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_feeTo","type":"address"},{"internalType":"uint256","name":"_feeRate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"auth","type":"uint256"}],"name":"Auth","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"feeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"rely","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"},{"internalType":"uint256","name":"_feeRate","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"60a06040523480156200001157600080fd5b5060405162001a2538038062001a25833981810160405260e08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060409081526020820151908201516060830151608084015160a0909401519295509093509190670de0b6b3a76400008111156200020b576040805162461bcd60e51b815260206004820152600b60248201526a496e76616c69642066656560a81b604482015290519081900360640190fd5b6001600160a01b03821662000257576040805162461bcd60e51b815260206004820152600d60248201526c496e76616c696420666565546f60981b604482015290519081900360640190fd5b3360008181526020818152604091829020600190819055825190815291517f881ab8a22f316bf86588be8193257d22bb9209d2b24689ab26fbd3be12b10b059281900390910190a28651620002b49060019060208a01906200033d565b508551620002ca9060029060208901906200033d565b5060039390935560088490553360009081526006602052604090209390935560f81b7fff0000000000000000000000000000000000000000000000000000000000000016608052600480546001600160a01b0319166001600160a01b039093169290921790915560055550620003e29050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200038057805160ff1916838001178555620003b0565b82800160010185558215620003b0579182015b82811115620003b057825182559160200191906001019062000393565b50620003be929150620003c2565b5090565b620003df91905b80821115620003be5760008155600101620003c9565b90565b60805160f81c61162562000400600039806106b852506116256000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806365fae35e116100cd5780639dc29fac11610081578063a9059cbb11610066578063a9059cbb146104b1578063dd62ed3e146104ea578063e55156b5146105255761016c565b80639dc29fac1461043f578063a457c2d7146104785761016c565b806395d89b41116100b257806395d89b41146103fc578063978bbdb9146104045780639c52a7f11461040c5761016c565b806365fae35e1461039657806370a08231146103c95761016c565b806323b872dd11610124578063355274ea11610109578063355274ea1461031a578063395093511461032257806340c10f191461035b5761016c565b806323b872dd146102b9578063313ce567146102fc5761016c565b806306fdde031161015557806306fdde03146101e7578063095ea7b31461026457806318160ddd146102b15761016c565b8063017e7e5814610171578063022914a7146101a2575b600080fd5b61017961055e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101d5600480360360208110156101b857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661057a565b60408051918252519081900360200190f35b6101ef61058c565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610229578181015183820152602001610211565b50505050905090810190601f1680156102565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029d6004803603604081101561027a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610635565b604080519115158252519081900360200190f35b6101d561064c565b61029d600480360360608110156102cf57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610652565b6103046106b6565b6040805160ff9092168252519081900360200190f35b6101d56106da565b61029d6004803603604081101561033857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106e0565b6103946004803603604081101561037157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610729565b005b610394600480360360208110156103ac57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610958565b6101d5600480360360208110156103df57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a37565b6101ef610a49565b6101d5610ac1565b6103946004803603602081101561042257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ac7565b6103946004803603604081101561045557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610c26565b61029d6004803603604081101561048e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610dc0565b61029d600480360360408110156104c757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610e09565b6101d56004803603604081101561050057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610e16565b6103946004803603604081101561053b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610e33565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60006020819052908152604090205481565b600280546040805160206001841615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01909316849004601f8101849004840282018401909252818152929183018282801561062d5780601f106106025761010080835404028352916020019161062d565b820191906000526020600020905b81548152906001019060200180831161061057829003601f168201915b505050505081565b6000610642338484610efc565b5060015b92915050565b60085481565b600061065f848484611043565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600760209081526040808320338085529252909120546106ac9186916106a7908663ffffffff61127d16565b610efc565b5060019392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106429185906106a7908663ffffffff6112c616565b336000908152602081905260409020546001146107a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f546f6b656e3a204e6f6e20617574686f72697a65642061636365737300000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821661082957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60085461083c908263ffffffff6112c616565b6008556003541580610852575060085460035410155b6108bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600660205260409020546108f3908263ffffffff6112c616565b73ffffffffffffffffffffffffffffffffffffffff831660008181526006602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b336000908152602081905260409020546001146109d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f546f6b656e3a204e6f6e20617574686f72697a65642061636365737300000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526020818152604091829020600190819055825190815291517f881ab8a22f316bf86588be8193257d22bb9209d2b24689ab26fbd3be12b10b059281900390910190a250565b60066020526000908152604090205481565b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561062d5780601f106106025761010080835404028352916020019161062d565b60055481565b33600090815260208190526040902054600114610b4557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f546f6b656e3a204e6f6e20617574686f72697a65642061636365737300000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116331415610bca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f417574683a2043616e6e6f742073656c662064656e7900000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081815260408083208390558051928352517f881ab8a22f316bf86588be8193257d22bb9209d2b24689ab26fbd3be12b10b059281900390910190a250565b33600090815260208190526040902054600114610ca457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f546f6b656e3a204e6f6e20617574686f72697a65642061636365737300000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d10576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806115866021913960400191505060405180910390fd5b600854610d23908263ffffffff61127d16565b60085573ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040902054610d5c908263ffffffff61127d16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600660209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106429185906106a7908663ffffffff61127d16565b6000610642338484611043565b600760209081526000928352604080842090915290825290205481565b33600090815260208190526040902054600114610eb157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f546f6b656e3a204e6f6e20617574686f72697a65642061636365737300000000604482015290519081900360640190fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9390931692909217909155600555565b73ffffffffffffffffffffffffffffffffffffffff8316610f68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806115cc6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fd4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806115436022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260076020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166110af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806115a76025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661111b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115206023913960400191505060405180910390fd5b600061114a670de0b6b3a764000061113e6005548561133a90919063ffffffff16565b9063ffffffff6113ad16565b73ffffffffffffffffffffffffffffffffffffffff851660009081526006602052604090205490915081830390611187908463ffffffff61127d16565b73ffffffffffffffffffffffffffffffffffffffff80871660009081526006602052604080822093909355908616815220546111c9908263ffffffff6112c616565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260066020526040808220939093556004549091168152205461120e908363ffffffff6112c616565b60045473ffffffffffffffffffffffffffffffffffffffff908116600090815260066020908152604091829020939093558051848152905187831693928916927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a35050505050565b60006112bf83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506113ef565b9392505050565b6000828201838110156112bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008261134957506000610646565b8282028284828161135657fe5b04146112bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806115656021913960400191505060405180910390fd5b60006112bf83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506114a0565b60008184841115611498576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561145d578181015183820152602001611445565b50505050905090810190601f16801561148a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561145d578181015183820152602001611445565b50600083858161151557fe5b049594505050505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a2646970667358221220a548565c3d3d79602e83f14db8e0df2ea525f2876319aef80d3be70a5a0aab4864736f6c634300060b0033"
}