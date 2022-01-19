define('@openswap/sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// bin/OpenSwap.json
var require_OpenSwap = __commonJS({
  "bin/OpenSwap.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_minter", type: "address" }, { internalType: "address", name: "initSupplyTo", type: "address" }, { internalType: "uint256", name: "initSupply", type: "uint256" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "cap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "subtractedValue", type: "uint256" }], name: "decreaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "addedValue", type: "uint256" }], name: "increaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "minter", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/amm/OSWAP_ERC20.json
var require_OSWAP_ERC20 = __commonJS({
  "bin/amm/OSWAP_ERC20.json"(exports, module2) {
    module2.exports = { abi: [{ anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "EIP712_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "NAME_HASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "PERMIT_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "VERSION_HASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "nonces", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/amm/OSWAP_Factory.json
var require_OSWAP_Factory = __commonJS({
  "bin/amm/OSWAP_Factory.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_pairCreator", type: "address" }, { internalType: "uint256", name: "_tradeFee", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "newSize", type: "uint256" }], name: "PairCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value1", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value2", type: "bytes32" }], name: "ParamSet2", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "allPairs", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allPairsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "getPair", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "pairCreator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeParams", outputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFeeTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_tradeFee", type: "uint256" }], name: "setTradeFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "tradeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/amm/OSWAP_Pair.json
var require_OSWAP_Pair = __commonJS({
  "bin/amm/OSWAP_Pair.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" }, { indexed: true, internalType: "address", name: "to", type: "address" }], name: "Burn", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" }], name: "Mint", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }], name: "ProtocolFeeSet", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "sender", type: "address" }, { indexed: false, internalType: "uint256", name: "amount0In", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount1In", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" }, { indexed: true, internalType: "address", name: "to", type: "address" }], name: "Swap", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint112", name: "reserve0", type: "uint112" }, { indexed: false, internalType: "uint112", name: "reserve1", type: "uint112" }], name: "Sync", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "tradeFee", type: "uint256" }], name: "TradeFeeSet", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "EIP712_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "MINIMUM_LIQUIDITY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "NAME_HASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "PERMIT_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "VERSION_HASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "burn", outputs: [{ internalType: "uint256", name: "amount0", type: "uint256" }, { internalType: "uint256", name: "amount1", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenOut", type: "address" }, { internalType: "uint256", name: "amountOut", type: "uint256" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "uint256", name: "amountIn", type: "uint256" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getReserves", outputs: [{ internalType: "uint112", name: "_reserve0", type: "uint112" }, { internalType: "uint112", name: "_reserve1", type: "uint112" }, { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "kLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "nonces", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "price0CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "price1CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }], name: "skim", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount0Out", type: "uint256" }, { internalType: "uint256", name: "amount1Out", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "tradeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "updateFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "updateProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/amm/OSWAP_PairCreator.json
var require_OSWAP_PairCreator = __commonJS({
  "bin/amm/OSWAP_PairCreator.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/amm/OSWAP_Router.json
var require_OSWAP_Router = __commonJS({
  "bin/amm/OSWAP_Router.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "uint256", name: "amountADesired", type: "uint256" }, { internalType: "uint256", name: "amountBDesired", type: "uint256" }, { internalType: "uint256", name: "amountAMin", type: "uint256" }, { internalType: "uint256", name: "amountBMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidity", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }, { internalType: "uint256", name: "liquidity", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "amountTokenDesired", type: "uint256" }, { internalType: "uint256", name: "amountTokenMin", type: "uint256" }, { internalType: "uint256", name: "amountETHMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidityETH", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }, { internalType: "uint256", name: "liquidity", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "tokenOut", type: "address" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "tokenOut", type: "address" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }], name: "getAmountsIn", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }], name: "getAmountsOut", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "getReserves", outputs: [{ internalType: "uint256", name: "reserveA", type: "uint256" }, { internalType: "uint256", name: "reserveB", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "reserveA", type: "uint256" }, { internalType: "uint256", name: "reserveB", type: "uint256" }], name: "quote", outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "pure", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountAMin", type: "uint256" }, { internalType: "uint256", name: "amountBMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidity", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountTokenMin", type: "uint256" }, { internalType: "uint256", name: "amountETHMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidityETH", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountTokenMin", type: "uint256" }, { internalType: "uint256", name: "amountETHMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidityETHSupportingFeeOnTransferTokens", outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountTokenMin", type: "uint256" }, { internalType: "uint256", name: "amountETHMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool", name: "approveMax", type: "bool" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "removeLiquidityETHWithPermit", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountTokenMin", type: "uint256" }, { internalType: "uint256", name: "amountETHMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool", name: "approveMax", type: "bool" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "uint256", name: "liquidity", type: "uint256" }, { internalType: "uint256", name: "amountAMin", type: "uint256" }, { internalType: "uint256", name: "amountBMin", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool", name: "approveMax", type: "bool" }, { internalType: "uint8", name: "v", type: "uint8" }, { internalType: "bytes32", name: "r", type: "bytes32" }, { internalType: "bytes32", name: "s", type: "bytes32" }], name: "removeLiquidityWithPermit", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapETHForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactETHForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactETHForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactTokensForETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactTokensForETHSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactTokensForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapExactTokensForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapTokensForExactETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "swapTokensForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/amm/OSWAP_VotingExecutor1.json
var require_OSWAP_VotingExecutor1 = __commonJS({
  "bin/amm/OSWAP_VotingExecutor1.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/commons/OSWAP_FactoryBase.json
var require_OSWAP_FactoryBase = __commonJS({
  "bin/commons/OSWAP_FactoryBase.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_pairCreator", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "newSize", type: "uint256" }], name: "PairCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "allPairs", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allPairsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "getPair", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "pairCreator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/commons/OSWAP_PausableFactory.json
var require_OSWAP_PausableFactory = __commonJS({
  "bin/commons/OSWAP_PausableFactory.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/commons/OSWAP_PausablePair.json
var require_OSWAP_PausablePair = __commonJS({
  "bin/commons/OSWAP_PausablePair.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/gov/OAXDEX_Administrator.json
var require_OAXDEX_Administrator = __commonJS({
  "bin/gov/OAXDEX_Administrator.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "admin", type: "address" }], name: "AddAdmin", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "admin", type: "address" }], name: "RemoveAdmin", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "maxAdmin", type: "uint256" }], name: "SetMaxAdmin", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "admin", type: "address" }, { indexed: true, internalType: "address", name: "factory", type: "address" }, { indexed: false, internalType: "bool", name: "YorN", type: "bool" }], name: "VotedFactoryRestart", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "admin", type: "address" }, { indexed: true, internalType: "address", name: "factory", type: "address" }, { indexed: false, internalType: "bool", name: "YorN", type: "bool" }], name: "VotedFactoryShutdown", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "admin", type: "address" }, { indexed: true, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "bool", name: "YorN", type: "bool" }], name: "VotedPairRestart", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "admin", type: "address" }, { indexed: true, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "bool", name: "YorN", type: "bool" }], name: "VotedPairShutdown", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "admin", type: "address" }, { indexed: true, internalType: "address", name: "votingContract", type: "address" }, { indexed: false, internalType: "bool", name: "YorN", type: "bool" }], name: "VotedVeto", type: "event" }, { inputs: [{ internalType: "address", name: "_admin", type: "address" }], name: "addAdmin", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "admins", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "adminsIdx", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allAdmins", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }], name: "executeFactoryRestart", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }], name: "executeFactoryShutdown", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }, { internalType: "address", name: "pair", type: "address" }], name: "executePairRestart", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }, { internalType: "address", name: "pair", type: "address" }], name: "executePairShutdown", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "votingContract", type: "address" }], name: "executeVetoVoting", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }, { internalType: "bool", name: "YorN", type: "bool" }], name: "factoryRestart", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "factoryRestartVote", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }, { internalType: "bool", name: "YorN", type: "bool" }], name: "factoryShutdown", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "factoryShutdownVote", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }], name: "getFactoryRestartVote", outputs: [{ internalType: "bool[]", name: "votes", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "factory", type: "address" }], name: "getFactoryShutdownVote", outputs: [{ internalType: "bool[]", name: "votes", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }], name: "getPairRestartVote", outputs: [{ internalType: "bool[]", name: "votes", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }], name: "getPairShutdownVote", outputs: [{ internalType: "bool[]", name: "votes", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "votingContract", type: "address" }], name: "getVetoVotingVote", outputs: [{ internalType: "bool[]", name: "votes", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "maxAdmin", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "YorN", type: "bool" }], name: "pairRestart", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "pairRestartVote", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "YorN", type: "bool" }], name: "pairShutdown", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "pairShutdownVote", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_admin", type: "address" }], name: "removeAdmin", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_maxAdmin", type: "uint256" }], name: "setMaxAdmin", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "votingContract", type: "address" }, { internalType: "bool", name: "YorN", type: "bool" }], name: "vetoVoting", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "vetoVotingVote", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/gov/OAXDEX_Governance.json
var require_OAXDEX_Governance = __commonJS({
  "bin/gov/OAXDEX_Governance.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_oaxToken", type: "address" }, { internalType: "bytes32[]", name: "_names", type: "bytes32[]" }, { internalType: "uint256[]", name: "_minExeDelay", type: "uint256[]" }, { internalType: "uint256[]", name: "_minVoteDuration", type: "uint256[]" }, { internalType: "uint256[]", name: "_maxVoteDuration", type: "uint256[]" }, { internalType: "uint256[]", name: "_minOaxTokenToCreateVote", type: "uint256[]" }, { internalType: "uint256[]", name: "_minQuorum", type: "uint256[]" }, { internalType: "uint256", name: "_minStakePeriod", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "uint256", name: "minExeDelay", type: "uint256" }, { indexed: false, internalType: "uint256", name: "minVoteDuration", type: "uint256" }, { indexed: false, internalType: "uint256", name: "maxVoteDuration", type: "uint256" }, { indexed: false, internalType: "uint256", name: "minOaxTokenToCreateVote", type: "uint256" }, { indexed: false, internalType: "uint256", name: "minQuorum", type: "uint256" }], name: "AddVotingConfig", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "vote", type: "address" }], name: "Executed", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "poll", type: "address" }], name: "NewPoll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "vote", type: "address" }], name: "NewVote", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value1", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value2", type: "bytes32" }], name: "ParamSet2", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: true, internalType: "address", name: "poll", type: "address" }, { indexed: false, internalType: "uint256", name: "option", type: "uint256" }], name: "Poll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "configName", type: "bytes32" }, { indexed: true, internalType: "bytes32", name: "paramName", type: "bytes32" }, { indexed: false, internalType: "uint256", name: "minExeDelay", type: "uint256" }], name: "SetVotingConfig", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Stake", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Unstake", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "vote", type: "address" }], name: "Veto", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "account", type: "address" }, { indexed: true, internalType: "address", name: "vote", type: "address" }, { indexed: false, internalType: "uint256", name: "option", type: "uint256" }], name: "Vote", type: "event" }, { inputs: [{ internalType: "bytes32", name: "name", type: "bytes32" }, { internalType: "uint256", name: "minExeDelay", type: "uint256" }, { internalType: "uint256", name: "minVoteDuration", type: "uint256" }, { internalType: "uint256", name: "maxVoteDuration", type: "uint256" }, { internalType: "uint256", name: "minOaxTokenToCreateVote", type: "uint256" }, { internalType: "uint256", name: "minQuorum", type: "uint256" }], name: "addVotingConfig", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "admin", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allVotings", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "vote", type: "address" }], name: "closeVote", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "executed", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "freezedStake", outputs: [{ internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "timestamp", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getNewVoteId", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getVotingConfigProfiles", outputs: [{ internalType: "bytes32[]", name: "profiles", type: "bytes32[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getVotingCount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "name", type: "bytes32" }], name: "getVotingParams", outputs: [{ internalType: "uint256", name: "_minExeDelay", type: "uint256" }, { internalType: "uint256", name: "_minVoteDuration", type: "uint256" }, { internalType: "uint256", name: "_maxVoteDuration", type: "uint256" }, { internalType: "uint256", name: "_minOaxTokenToCreateVote", type: "uint256" }, { internalType: "uint256", name: "_minQuorum", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "count", type: "uint256" }], name: "getVotings", outputs: [{ internalType: "address[]", name: "_votings", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_admin", type: "address" }], name: "initAdmin", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address[]", name: "_votingExecutor", type: "address[]" }], name: "initVotingExecutor", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "votingContract", type: "address" }], name: "isVotingContract", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isVotingExecutor", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minStakePeriod", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "vote", type: "address" }, { internalType: "bool", name: "isExecutiveVote", type: "bool" }], name: "newVote", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "oaxToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_admin", type: "address" }], name: "setAdmin", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minStakePeriod", type: "uint256" }], name: "setMinStakePeriod", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "configName", type: "bytes32" }, { internalType: "bytes32", name: "paramName", type: "bytes32" }, { internalType: "uint256", name: "paramValue", type: "uint256" }], name: "setVotingConfig", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_votingExecutor", type: "address" }, { internalType: "bool", name: "_bool", type: "bool" }], name: "setVotingExecutor", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_votingRegister", type: "address" }], name: "setVotingRegister", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "value", type: "uint256" }], name: "stake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "stakeOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalStake", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "unlockStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "value", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "voting", type: "address" }], name: "veto", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "voteCount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "poll", type: "bool" }, { internalType: "address", name: "account", type: "address" }, { internalType: "uint256", name: "option", type: "uint256" }], name: "voted", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "votingConfigProfiles", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "votingConfigProfilesLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], name: "votingConfigs", outputs: [{ internalType: "uint256", name: "minExeDelay", type: "uint256" }, { internalType: "uint256", name: "minVoteDuration", type: "uint256" }, { internalType: "uint256", name: "maxVoteDuration", type: "uint256" }, { internalType: "uint256", name: "minOaxTokenToCreateVote", type: "uint256" }, { internalType: "uint256", name: "minQuorum", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "votingExecutor", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "votingExecutorInv", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "votingExecutorLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "votingIdx", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "votingRegister", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "votings", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/gov/OAXDEX_VotingContract.json
var require_OAXDEX_VotingContract = __commonJS({
  "bin/gov/OAXDEX_VotingContract.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "governance_", type: "address" }, { internalType: "address", name: "executor_", type: "address" }, { internalType: "uint256", name: "id_", type: "uint256" }, { internalType: "bytes32", name: "name_", type: "bytes32" }, { internalType: "bytes32[]", name: "options_", type: "bytes32[]" }, { internalType: "uint256", name: "quorum_", type: "uint256" }, { internalType: "uint256", name: "threshold_", type: "uint256" }, { internalType: "uint256", name: "voteEndTime_", type: "uint256" }, { internalType: "uint256", name: "executeDelay_", type: "uint256" }, { internalType: "bytes32[]", name: "executeParam_", type: "bytes32[]" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_executeParam", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_options", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_optionsWeight", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "accountVoteOption", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "accountVoteWeight", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "executeDelay", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "executeParam", outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "executed", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "executor", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getParams", outputs: [{ internalType: "address", name: "executor_", type: "address" }, { internalType: "uint256", name: "id_", type: "uint256" }, { internalType: "bytes32", name: "name_", type: "bytes32" }, { internalType: "bytes32[]", name: "options_", type: "bytes32[]" }, { internalType: "uint256", name: "voteStartTime_", type: "uint256" }, { internalType: "uint256", name: "voteEndTime_", type: "uint256" }, { internalType: "uint256", name: "executeDelay_", type: "uint256" }, { internalType: "bool[2]", name: "status_", type: "bool[2]" }, { internalType: "uint256[]", name: "optionsWeight_", type: "uint256[]" }, { internalType: "uint256[3]", name: "quorum_", type: "uint256[3]" }, { internalType: "bytes32[]", name: "executeParam_", type: "bytes32[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "id", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [], name: "options", outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "optionsCount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "optionsWeight", outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "quorum", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "threshold", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalVoteWeight", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalWeight", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "updateWeight", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "veto", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "vetoed", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "option", type: "uint256" }], name: "vote", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "voteEndTime", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "voteStartTime", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/gov/OAXDEX_VotingExecutor.json
var require_OAXDEX_VotingExecutor = __commonJS({
  "bin/gov/OAXDEX_VotingExecutor.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_admin", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "admin", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/gov/OAXDEX_VotingRegistry.json
var require_OAXDEX_VotingRegistry = __commonJS({
  "bin/gov/OAXDEX_VotingRegistry.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "executor", type: "address" }, { internalType: "bytes32", name: "name", type: "bytes32" }, { internalType: "bytes32[]", name: "options", type: "bytes32[]" }, { internalType: "uint256", name: "quorum", type: "uint256" }, { internalType: "uint256", name: "threshold", type: "uint256" }, { internalType: "uint256", name: "voteEndTime", type: "uint256" }, { internalType: "uint256", name: "executeDelay", type: "uint256" }, { internalType: "bytes32[]", name: "executeParam", type: "bytes32[]" }], name: "newVote", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/libraries/ERC20.json
var require_ERC20 = __commonJS({
  "bin/libraries/ERC20.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "name_", type: "string" }, { internalType: "string", name: "symbol_", type: "string" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: false, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "subtractedValue", type: "uint256" }], name: "decreaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "addedValue", type: "uint256" }], name: "increaseAllowance", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "sender", type: "address" }, { internalType: "address", name: "recipient", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/oracle/OSWAP_CertiKSecurityOracle.json
var require_OSWAP_CertiKSecurityOracle = __commonJS({
  "bin/oracle/OSWAP_CertiKSecurityOracle.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_oracleAddress", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "address", name: "oracle", type: "address" }], name: "getSecurityScore", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleAddress", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/oracle/OSWAP_OracleFactory.json
var require_OSWAP_OracleFactory = __commonJS({
  "bin/oracle/OSWAP_OracleFactory.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_pairCreator", type: "address" }, { internalType: "uint256", name: "_tradeFee", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "uint256", name: "_feePerDelegator", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "oracle", type: "address" }], name: "OracleAdded", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "oracle", type: "address" }, { indexed: false, internalType: "uint256", name: "score", type: "uint256" }], name: "OracleScores", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "newSize", type: "uint256" }], name: "PairCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value1", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value2", type: "bytes32" }], name: "ParamSet2", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: false, internalType: "bool", name: "allow", type: "bool" }], name: "Whitelisted", type: "event" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "oracle", type: "address" }], name: "addOldOracleToNewPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "allPairs", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allPairsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allWhiteListed", outputs: [{ internalType: "address[]", name: "list", type: "address[]" }, { internalType: "bool[]", name: "allowed", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "checkAndGetOracle", outputs: [{ internalType: "address", name: "oracle", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "checkAndGetOracleSwapParams", outputs: [{ internalType: "address", name: "oracle_", type: "address" }, { internalType: "uint256", name: "tradeFee_", type: "uint256" }, { internalType: "uint256", name: "protocolFee_", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "feePerDelegator", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "getPair", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isOracle", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isWhitelisted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "minLotSize", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minOracleScore", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "oracleScores", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "oracles", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "pairCreator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "securityScoreOracle", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "_feePerDelegator", type: "uint256" }], name: "setFeePerDelegator", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "token", type: "address" }, { internalType: "uint256", name: "_minLotSize", type: "uint256" }], name: "setMinLotSize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "oracle", type: "address" }], name: "setOracle", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_oracleRouter", type: "address" }, { internalType: "address", name: "_oracleLiquidityProvider", type: "address" }], name: "setOracleLiquidityProvider", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFeeTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_securityScoreOracle", type: "address" }, { internalType: "uint256", name: "_minOracleScore", type: "uint256" }], name: "setSecurityScoreOracle", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_tradeFee", type: "uint256" }], name: "setTradeFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_who", type: "address" }, { internalType: "bool", name: "_allow", type: "bool" }], name: "setWhiteList", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "tradeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "oracle", type: "address" }], name: "updateOracleScore", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "whitelisted", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "whitelistedInv", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "whitelistedLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/oracle/OSWAP_OracleLiquidityProvider.json
var require_OSWAP_OracleLiquidityProvider = __commonJS({
  "bin/oracle/OSWAP_OracleLiquidityProvider.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidity", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountAIn", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidityETH", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidityETH", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidityETH", outputs: [], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/oracle/OSWAP_OraclePair.json
var require_OSWAP_OraclePair = __commonJS({
  "bin/oracle/OSWAP_OraclePair.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "staked", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newStakeBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }, { indexed: false, internalType: "bool", name: "enable", type: "bool" }], name: "AddLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "delegator", type: "address" }, { indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }], name: "DelegatorPauseOffer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "delegator", type: "address" }, { indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }], name: "DelegatorResumeOffer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: false, internalType: "uint256", name: "index", type: "uint256" }], name: "NewProvider", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "unstake", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "reserveOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newStakeBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReserveBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }, { indexed: false, internalType: "bool", name: "enable", type: "bool" }], name: "RemoveLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReserveBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }], name: "Replenish", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: false, internalType: "address", name: "delegator", type: "address" }], name: "SetDelegator", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "price", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "tradeFee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }], name: "Swap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newCounterReserveBalance", type: "uint256" }], name: "SwappedOneProvider", type: "event" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }], name: "addLiquidity", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "delegator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "feeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "_afterIndex", type: "uint256" }], name: "findPosition", outputs: [{ internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "nextIndex", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }], name: "first", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenOut", type: "address" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getLastBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "getProviderOffer", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "reserve", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "end", type: "uint256" }], name: "getQueue", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "uint256[]", name: "amount", type: "uint256[]" }, { internalType: "uint256[]", name: "staked", type: "uint256[]" }, { internalType: "uint256[]", name: "expire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "from", type: "uint256" }, { internalType: "uint256", name: "count", type: "uint256" }], name: "getQueueFromIndex", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "uint256[]", name: "amount", type: "uint256[]" }, { internalType: "uint256[]", name: "staked", type: "uint256[]" }, { internalType: "uint256[]", name: "expire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastGovBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken0Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken1Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }], name: "offers", outputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "reserve", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }, { internalType: "bool", name: "isActive", type: "bool" }, { internalType: "bool", name: "enabled", type: "bool" }, { internalType: "uint256", name: "prev", type: "uint256" }, { internalType: "uint256", name: "next", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "pauseOffer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "protocolFeeBalance0", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "providerOfferIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "startingIndex", type: "uint256" }, { internalType: "uint256", name: "limit", type: "uint256" }], name: "purgeExpire", outputs: [{ internalType: "uint256", name: "purge", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }], name: "queueSize", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "redeemProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amount0", type: "uint256" }, { internalType: "uint256", name: "amount1", type: "uint256" }, { internalType: "uint256", name: "staked", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "enable", type: "bool" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], name: "replenish", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "afterIndex", type: "uint256" }], name: "resumeOffer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "scaleDirection", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaler", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_delegator", type: "address" }, { internalType: "uint256", name: "fee", type: "uint256" }], name: "setDelegator", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_replenish", type: "bool" }], name: "setPrivateReplenish", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount0Out", type: "uint256" }, { internalType: "uint256", name: "amount1Out", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/oracle/OSWAP_OraclePairCreator.json
var require_OSWAP_OraclePairCreator = __commonJS({
  "bin/oracle/OSWAP_OraclePairCreator.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/oracle/OSWAP_VotingExecutor2.json
var require_OSWAP_VotingExecutor2 = __commonJS({
  "bin/oracle/OSWAP_VotingExecutor2.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/range/OSWAP_RangeFactory.json
var require_OSWAP_RangeFactory = __commonJS({
  "bin/range/OSWAP_RangeFactory.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_oracleFactory", type: "address" }, { internalType: "address", name: "_pairCreator", type: "address" }, { internalType: "uint256", name: "_tradeFee", type: "uint256" }, { internalType: "uint256[]", name: "_stakeAmount", type: "uint256[]" }, { internalType: "uint256[]", name: "_liquidityProviderShare", type: "uint256[]" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "newSize", type: "uint256" }], name: "PairCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value1", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value2", type: "bytes32" }], name: "ParamSet2", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "allPairs", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allPairsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "checkAndGetSwapParams", outputs: [{ internalType: "uint256", name: "_tradeFee", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "getAllLiquidityProviderShare", outputs: [{ internalType: "uint256[]", name: "_stakeAmount", type: "uint256[]" }, { internalType: "uint256[]", name: "_liquidityProviderShare", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getCreateAddresses", outputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_rangeLiquidityProvider", type: "address" }, { internalType: "address", name: "_oracleFactory", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "stake", type: "uint256" }], name: "getLiquidityProviderShare", outputs: [{ internalType: "uint256", name: "_liquidityProviderShare", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "getPair", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "liquidityProviderShare", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "pairCreator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "rangeLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256[]", name: "_stakeAmount", type: "uint256[]" }, { internalType: "uint256[]", name: "_liquidityProviderShare", type: "uint256[]" }], name: "setLiquidityProviderShare", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFeeTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_rangeLiquidityProvider", type: "address" }], name: "setRangeLiquidityProvider", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_tradeFee", type: "uint256" }], name: "setTradeFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "stakeAmount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "tradeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/range/OSWAP_RangeLiquidityProvider.json
var require_OSWAP_RangeLiquidityProvider = __commonJS({
  "bin/range/OSWAP_RangeLiquidityProvider.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidity", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "amountAIn", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidityETH", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidityETH", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidityETH", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "uint256", name: "replenishAmount", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "updateProviderOffer", outputs: [], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/range/OSWAP_RangePair.json
var require_OSWAP_RangePair = __commonJS({
  "bin/range/OSWAP_RangePair.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "staked", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newStakeBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "lowerLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "upperLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "startDate", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }], name: "AddLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: false, internalType: "uint256", name: "index", type: "uint256" }], name: "NewProvider", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: false, internalType: "uint256", name: "unstake", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" }], name: "RemoveAllLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "unstake", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "reserveOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newStakeBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReserveBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "lowerLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "upperLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "startDate", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }], name: "RemoveLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReserveBalance", type: "uint256" }], name: "Replenish", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "price", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "tradeFee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }], name: "Swap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newCounterReserveBalance", type: "uint256" }], name: "SwappedOneProvider", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "replenish", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReserveBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "lowerLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "upperLimit", type: "uint256" }, { indexed: false, internalType: "uint256", name: "startDate", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }, { indexed: false, internalType: "bool", name: "privateReplenish", type: "bool" }], name: "UpdateProviderOffer", type: "event" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], name: "addLiquidity", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenOut", type: "address" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getLastBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "end", type: "uint256" }], name: "getOffers", outputs: [{ internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "uint256[]", name: "amountAndReserve", type: "uint256[]" }, { internalType: "uint256[]", name: "lowerLimitAndUpperLimit", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }, { internalType: "bool[]", name: "privateReplenish", type: "bool[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "getProviderOffer", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }, { internalType: "uint256", name: "staked", type: "uint256" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "reserve", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastGovBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken0Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken1Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }], name: "offers", outputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "reserve", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance0", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "providerOfferIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "providerStaking", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "rangeLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "redeemProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amount0", type: "uint256" }, { internalType: "uint256", name: "amount1", type: "uint256" }, { internalType: "uint256", name: "staked", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "unstake", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "reserveOut", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "amountIn", type: "uint256" }], name: "replenish", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "scaleDirection", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaler", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount0Out", type: "uint256" }, { internalType: "uint256", name: "amount1Out", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "replenishAmount", type: "uint256" }, { internalType: "uint256", name: "lowerLimit", type: "uint256" }, { internalType: "uint256", name: "upperLimit", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "bool", name: "privateReplenish", type: "bool" }], name: "updateProviderOffer", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/range/OSWAP_RangePairCreator.json
var require_OSWAP_RangePairCreator = __commonJS({
  "bin/range/OSWAP_RangePairCreator.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/range/OSWAP_VotingExecutor3.json
var require_OSWAP_VotingExecutor3 = __commonJS({
  "bin/range/OSWAP_VotingExecutor3.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_hybridRegistry", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "hybridRegistry", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/restricted/OSWAP_ConfigStore.json
var require_OSWAP_ConfigStore = __commonJS({
  "bin/restricted/OSWAP_ConfigStore.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], name: "customParam", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "customParamNames", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], name: "customParamNamesIdx", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "customParamNamesLength", outputs: [{ internalType: "uint256", name: "length", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "paramName", type: "bytes32" }, { internalType: "bytes32", name: "paramValue", type: "bytes32" }], name: "setCustomParam", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32[]", name: "paramName", type: "bytes32[]" }, { internalType: "bytes32[]", name: "paramValue", type: "bytes32[]" }], name: "setMultiCustomParam", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/restricted/OSWAP_RestrictedFactory.json
var require_OSWAP_RestrictedFactory = __commonJS({
  "bin/restricted/OSWAP_RestrictedFactory.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_whitelistFactory", type: "address" }, { internalType: "address", name: "_pairCreator", type: "address" }, { internalType: "address", name: "_configStore", type: "address" }, { internalType: "uint256", name: "_tradeFee", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "oracle", type: "address" }], name: "OracleAdded", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "token0", type: "address" }, { indexed: true, internalType: "address", name: "token1", type: "address" }, { indexed: false, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "newPairSize", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newSize", type: "uint256" }], name: "PairCreated", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairRestarted", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }], name: "PairShutdowned", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value", type: "bytes32" }], name: "ParamSet", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value1", type: "bytes32" }, { indexed: false, internalType: "bytes32", name: "value2", type: "bytes32" }], name: "ParamSet2", type: "event" }, { anonymous: false, inputs: [], name: "Restarted", type: "event" }, { anonymous: false, inputs: [], name: "Shutdowned", type: "event" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "oracle", type: "address" }], name: "addOldOracleToNewPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "allPairs", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "allPairsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "checkAndGetOracle", outputs: [{ internalType: "address", name: "oracle", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "checkAndGetOracleSwapParams", outputs: [{ internalType: "address", name: "oracle_", type: "address" }, { internalType: "uint256", name: "tradeFee_", type: "uint256" }, { internalType: "uint256", name: "protocolFee_", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "configStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "getCreateAddresses", outputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_whitelistFactory", type: "address" }, { internalType: "address", name: "_restrictedLiquidityProvider", type: "address" }, { internalType: "address", name: "_configStore", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "getPair", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_restrictedLiquidityProvider", type: "address" }], name: "init", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isOracle", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }], name: "isPair", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "oracles", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "pairCreator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "pairIdx", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "pairLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "restrictedLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "bool", name: "live", type: "bool" }], name: "setLiveForPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "oracle", type: "address" }], name: "setOracle", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFeeTo", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_tradeFee", type: "uint256" }], name: "setTradeFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "tradeFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "whitelistFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/restricted/OSWAP_RestrictedLiquidityProvider.json
var require_OSWAP_RestrictedLiquidityProvider = __commonJS({
  "bin/restricted/OSWAP_RestrictedLiquidityProvider.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidity", outputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "uint256", name: "_offerIndex", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256[11]", name: "param", type: "uint256[11]" }, { internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], name: "addLiquidityAndTrader", outputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "addingTokenA", type: "bool" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "amountAIn", type: "uint256" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "addLiquidityETH", outputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "uint256", name: "_offerIndex", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256[10]", name: "param", type: "uint256[10]" }, { internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], name: "addLiquidityETHAndTrader", outputs: [{ internalType: "address", name: "pair", type: "address" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }], stateMutability: "payable", type: "function" }, { inputs: [], name: "configStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amountA", type: "uint256" }, { internalType: "uint256", name: "amountB", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeAllLiquidityETH", outputs: [{ internalType: "uint256", name: "amountToken", type: "uint256" }, { internalType: "uint256", name: "amountETH", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "receivingOut", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "bool", name: "removingTokenA", type: "bool" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "receivingOut", type: "uint256" }, { internalType: "uint256", name: "deadline", type: "uint256" }], name: "removeLiquidityETH", outputs: [], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/restricted/OSWAP_RestrictedPairOracle.json
var require_OSWAP_RestrictedPairOracle = __commonJS({
  "bin/restricted/OSWAP_RestrictedPairOracle.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WEI", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/restricted/OSWAP_VotingExecutor4.json
var require_OSWAP_VotingExecutor4 = __commonJS({
  "bin/restricted/OSWAP_VotingExecutor4.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }, { internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_configStore", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "configStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/router/OSWAP_HybridRouter.json
var require_OSWAP_HybridRouter = __commonJS({
  "bin/router/OSWAP_HybridRouter.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_oracleFactory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsIn", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsOut", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenA", type: "address" }, { internalType: "address", name: "tokenB", type: "address" }], name: "pairFor", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapETHForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactETHForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }], name: "swapExactETHForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }], name: "swapExactTokensForETHSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }], name: "swapExactTokensForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "uint24[]", name: "fee", type: "uint24[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/router/OSWAP_HybridRouter2.json
var require_OSWAP_HybridRouter2 = __commonJS({
  "bin/router/OSWAP_HybridRouter2.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_registry", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsInEndsWith", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsInStartsWith", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsOutEndsWith", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsOutStartsWith", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenIn", type: "address" }], name: "getPathIn", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenOut", type: "address" }], name: "getPathOut", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "registry", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapETHForExactTokens", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactETHForTokens", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactETHForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForETH", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForETHSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForTokens", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactETH", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "pair", type: "address[]" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactTokens", outputs: [{ internalType: "address[]", name: "path", type: "address[]" }, { internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/router/OSWAP_HybridRouterRegistry.json
var require_OSWAP_HybridRouterRegistry = __commonJS({
  "bin/router/OSWAP_HybridRouterRegistry.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_governance", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "uint256", name: "fee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "feeBase", type: "uint256" }, { indexed: false, internalType: "uint256", name: "typeCode", type: "uint256" }], name: "CustomPairRegister", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }, { indexed: true, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "factory", type: "address" }, { indexed: true, internalType: "address", name: "pair", type: "address" }, { indexed: false, internalType: "address", name: "token0", type: "address" }, { indexed: false, internalType: "address", name: "token1", type: "address" }], name: "PairRegister", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "factory", type: "address" }, { indexed: false, internalType: "bytes32", name: "name", type: "bytes32" }, { indexed: false, internalType: "uint256", name: "fee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "feeBase", type: "uint256" }, { indexed: false, internalType: "uint256", name: "typeCode", type: "uint256" }], name: "ProtocolRegister", type: "event" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "customPairs", outputs: [{ internalType: "uint256", name: "fee", type: "uint256" }, { internalType: "uint256", name: "feeBase", type: "uint256" }, { internalType: "uint256", name: "typeCode", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32[]", name: "params", type: "bytes32[]" }], name: "execute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "pairAddress", type: "address" }], name: "getFee", outputs: [{ internalType: "uint256", name: "fee", type: "uint256" }, { internalType: "uint256", name: "feeBase", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "pairAddress", type: "address[]" }], name: "getPairTokens", outputs: [{ internalType: "address[]", name: "token0", type: "address[]" }, { internalType: "address[]", name: "token1", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "pairAddress", type: "address" }], name: "getTypeCode", outputs: [{ internalType: "uint256", name: "typeCode", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32[]", name: "_name", type: "bytes32[]" }, { internalType: "address[]", name: "_factory", type: "address[]" }, { internalType: "uint256[]", name: "_fee", type: "uint256[]" }, { internalType: "uint256[]", name: "_feeBase", type: "uint256[]" }, { internalType: "uint256[]", name: "_typeCode", type: "uint256[]" }], name: "init", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "pairs", outputs: [{ internalType: "address", name: "factory", type: "address" }, { internalType: "address", name: "token0", type: "address" }, { internalType: "address", name: "token1", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "protocolList", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolListLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "protocols", outputs: [{ internalType: "bytes32", name: "name", type: "bytes32" }, { internalType: "uint256", name: "fee", type: "uint256" }, { internalType: "uint256", name: "feeBase", type: "uint256" }, { internalType: "uint256", name: "typeCode", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "token0", type: "address" }, { internalType: "address", name: "token1", type: "address" }, { internalType: "address", name: "pairAddress", type: "address" }, { internalType: "uint256", name: "fee", type: "uint256" }, { internalType: "uint256", name: "feeBase", type: "uint256" }, { internalType: "uint256", name: "typeCode", type: "uint256" }], name: "registerPair", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "pairAddress", type: "address" }], name: "registerPairByAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "registerPairByIndex", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "registerPairByTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }, { internalType: "uint256", name: "pairIndex", type: "uint256" }], name: "registerPairByTokensV3", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address[]", name: "pairAddress", type: "address[]" }], name: "registerPairsByAddress", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address[]", name: "_factory", type: "address[]" }, { internalType: "address[]", name: "pairAddress", type: "address[]" }], name: "registerPairsByAddress2", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "uint256[]", name: "index", type: "uint256[]" }], name: "registerPairsByIndex", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address[]", name: "_token0", type: "address[]" }, { internalType: "address[]", name: "_token1", type: "address[]" }], name: "registerPairsByTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "address[]", name: "_token0", type: "address[]" }, { internalType: "address[]", name: "_token1", type: "address[]" }, { internalType: "uint256[]", name: "_pairIndex", type: "uint256[]" }], name: "registerPairsByTokensV3", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "_name", type: "bytes32" }, { internalType: "address", name: "_factory", type: "address" }, { internalType: "uint256", name: "_fee", type: "uint256" }, { internalType: "uint256", name: "_feeBase", type: "uint256" }, { internalType: "uint256", name: "_typeCode", type: "uint256" }], name: "registerProtocol", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/router/OSWAP_OracleRouter.json
var require_OSWAP_OracleRouter = __commonJS({
  "bin/router/OSWAP_OracleRouter.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_ammFactory", type: "address" }, { internalType: "address", name: "_oracleFactory", type: "address" }, { internalType: "address", name: "_WETH", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "ammFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsIn", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getAmountsOut", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "address", name: "tokenOut", type: "address" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "oracleFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapETHForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactETHForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactETHForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForETHSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "uint256", name: "amountOutMin", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapExactTokensForTokensSupportingFeeOnTransferTokens", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactETH", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "amountInMax", type: "uint256" }, { internalType: "address[]", name: "path", type: "address[]" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "deadline", type: "uint256" }, { internalType: "bool[]", name: "useOracle", type: "bool[]" }, { internalType: "bytes", name: "data", type: "bytes" }], name: "swapTokensForExactTokens", outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }], stateMutability: "nonpayable", type: "function" }, { stateMutability: "payable", type: "receive" }] };
  }
});

// bin/restricted/OSWAP_RestrictedPair.json
var require_OSWAP_RestrictedPair = __commonJS({
  "bin/restricted/OSWAP_RestrictedPair.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }], name: "AddLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "offerIndex", type: "uint256" }, { indexed: true, internalType: "address", name: "trader", type: "address" }, { indexed: false, internalType: "uint256", name: "allocation", type: "uint256" }], name: "ApprovedTrader", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }], name: "Lock", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "bool", name: "allowAll", type: "bool" }, { indexed: false, internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { indexed: false, internalType: "uint256", name: "startDate", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }], name: "NewProviderOffer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "receivingOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReceivingBalance", type: "uint256" }], name: "RemoveLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "tradeFee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }], name: "Swap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "price", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReceivingBalance", type: "uint256" }], name: "SwappedOneOffer", type: "event" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "addLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], name: "approvedTrader", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "configStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], name: "createOrder", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "feeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getApprovedTrader", outputs: [{ internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }], name: "getApprovedTraderLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getLastBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getOffers", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getProviderOffer", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "getProviderOfferIndexLength", outputs: [{ internalType: "uint256", name: "length", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "trader", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getTraderOffer", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "isApprovedTrader", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastGovBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken0Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken1Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "lockOffer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }], name: "offers", outputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "locked", type: "bool" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "receiving", type: "uint256" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance0", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "providerOfferIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "redeemProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amount0", type: "uint256" }, { internalType: "uint256", name: "amount1", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "removeAllLiquidity1D", outputs: [{ internalType: "uint256", name: "totalAmount", type: "uint256" }, { internalType: "uint256", name: "totalReceiving", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "receivingOut", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "restrictedLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaleDirection", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaler", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "uint256", name: "allocation", type: "uint256" }], name: "setApprovedTrader", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], name: "setMultipleApprovedTraders", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount0Out", type: "uint256" }, { internalType: "uint256", name: "amount1Out", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "swap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "traderAllocation", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "traderOffer", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "whitelistFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/restricted/OSWAP_RestrictedPair2.json
var require_OSWAP_RestrictedPair2 = __commonJS({
  "bin/restricted/OSWAP_RestrictedPair2.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }], name: "AddLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "offerIndex", type: "uint256" }, { indexed: true, internalType: "address", name: "trader", type: "address" }, { indexed: false, internalType: "uint256", name: "allocation", type: "uint256" }], name: "ApprovedTrader", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }], name: "Lock", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "bool", name: "allowAll", type: "bool" }, { indexed: false, internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { indexed: false, internalType: "uint256", name: "startDate", type: "uint256" }, { indexed: false, internalType: "uint256", name: "expire", type: "uint256" }], name: "NewProviderOffer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "receivingOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReceivingBalance", type: "uint256" }], name: "RemoveLiquidity", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "tradeFee", type: "uint256" }, { indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }], name: "Swap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "provider", type: "address" }, { indexed: true, internalType: "bool", name: "direction", type: "bool" }, { indexed: true, internalType: "uint256", name: "index", type: "uint256" }, { indexed: false, internalType: "uint256", name: "price", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountOut", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountIn", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmountBalance", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newReceivingBalance", type: "uint256" }], name: "SwappedOneOffer", type: "event" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "addLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], name: "approvedTrader", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "configStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], name: "createOrder", outputs: [{ internalType: "uint256", name: "index", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "feeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenOut", type: "address" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getAmountIn", outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "tokenIn", type: "address" }, { internalType: "uint256", name: "amountIn", type: "uint256" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getAmountOut", outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getApprovedTrader", outputs: [{ internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }], name: "getApprovedTraderLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "getLastBalances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getOffers", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getProviderOffer", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "getProviderOfferIndexLength", outputs: [{ internalType: "uint256", name: "length", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "trader", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "start", type: "uint256" }, { internalType: "uint256", name: "length", type: "uint256" }], name: "getTraderOffer", outputs: [{ internalType: "uint256[]", name: "index", type: "uint256[]" }, { internalType: "address[]", name: "provider", type: "address[]" }, { internalType: "bool[]", name: "lockedAndAllowAll", type: "bool[]" }, { internalType: "uint256[]", name: "receiving", type: "uint256[]" }, { internalType: "uint256[]", name: "amountAndPrice", type: "uint256[]" }, { internalType: "uint256[]", name: "startDateAndExpire", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [], name: "govToken", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "governance", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_token0", type: "address" }, { internalType: "address", name: "_token1", type: "address" }], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "isApprovedTrader", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isLive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastGovBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken0Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "lastToken1Balance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "lockOffer", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }], name: "offers", outputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "locked", type: "bool" }, { internalType: "bool", name: "allowAll", type: "bool" }, { internalType: "uint256", name: "amount", type: "uint256" }, { internalType: "uint256", name: "receiving", type: "uint256" }, { internalType: "uint256", name: "restrictedPrice", type: "uint256" }, { internalType: "uint256", name: "startDate", type: "uint256" }, { internalType: "uint256", name: "expire", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance0", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "providerOfferIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "redeemProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }], name: "removeAllLiquidity", outputs: [{ internalType: "uint256", name: "amount0", type: "uint256" }, { internalType: "uint256", name: "amount1", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }], name: "removeAllLiquidity1D", outputs: [{ internalType: "uint256", name: "totalAmount", type: "uint256" }, { internalType: "uint256", name: "totalReceiving", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "provider", type: "address" }, { internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "index", type: "uint256" }, { internalType: "uint256", name: "amountOut", type: "uint256" }, { internalType: "uint256", name: "receivingOut", type: "uint256" }], name: "removeLiquidity", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "restrictedLiquidityProvider", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaleDirection", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "scaler", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "uint256", name: "allocation", type: "uint256" }], name: "setApprovedTrader", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "_isLive", type: "bool" }], name: "setLive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "direction", type: "bool" }, { internalType: "uint256", name: "offerIndex", type: "uint256" }, { internalType: "address[]", name: "trader", type: "address[]" }, { internalType: "uint256[]", name: "allocation", type: "uint256[]" }], name: "setMultipleApprovedTraders", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount0Out", type: "uint256" }, { internalType: "uint256", name: "amount1Out", type: "uint256" }, { internalType: "address", name: "to", type: "address" }, { internalType: "address", name: "trader", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "swap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "traderAllocation", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bool", name: "", type: "bool" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "traderOffer", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "whitelistFactory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/restricted/OSWAP_RestrictedPairCreator.json
var require_OSWAP_RestrictedPairCreator = __commonJS({
  "bin/restricted/OSWAP_RestrictedPairCreator.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }], name: "createPair", outputs: [{ internalType: "address", name: "pair", type: "address" }], stateMutability: "nonpayable", type: "function" }] };
  }
});

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports,
  OpenSwap: () => OpenSwap2,
  deploy: () => deploy,
  deployCoreContracts: () => deployCoreContracts,
  deployHybridRouter: () => deployHybridRouter,
  deployOracleContracts: () => deployOracleContracts,
  deployRangeContracts: () => deployRangeContracts,
  deployRestrictedContracts: () => deployRestrictedContracts,
  toDeploymentContracts: () => toDeploymentContracts
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  ERC20: () => ERC20,
  OAXDEX_Administrator: () => OAXDEX_Administrator,
  OAXDEX_Governance: () => OAXDEX_Governance,
  OAXDEX_VotingContract: () => OAXDEX_VotingContract,
  OAXDEX_VotingExecutor: () => OAXDEX_VotingExecutor,
  OAXDEX_VotingRegistry: () => OAXDEX_VotingRegistry,
  OSWAP_CertiKSecurityOracle: () => OSWAP_CertiKSecurityOracle,
  OSWAP_ConfigStore: () => OSWAP_ConfigStore,
  OSWAP_ERC20: () => OSWAP_ERC20,
  OSWAP_Factory: () => OSWAP_Factory,
  OSWAP_FactoryBase: () => OSWAP_FactoryBase,
  OSWAP_HybridRouter: () => OSWAP_HybridRouter,
  OSWAP_HybridRouter2: () => OSWAP_HybridRouter2,
  OSWAP_HybridRouterRegistry: () => OSWAP_HybridRouterRegistry,
  OSWAP_OracleFactory: () => OSWAP_OracleFactory,
  OSWAP_OracleLiquidityProvider: () => OSWAP_OracleLiquidityProvider,
  OSWAP_OraclePair: () => OSWAP_OraclePair,
  OSWAP_OraclePairCreator: () => OSWAP_OraclePairCreator,
  OSWAP_OracleRouter: () => OSWAP_OracleRouter,
  OSWAP_Pair: () => OSWAP_Pair,
  OSWAP_PairCreator: () => OSWAP_PairCreator,
  OSWAP_PausableFactory: () => OSWAP_PausableFactory,
  OSWAP_PausablePair: () => OSWAP_PausablePair,
  OSWAP_RangeFactory: () => OSWAP_RangeFactory,
  OSWAP_RangeLiquidityProvider: () => OSWAP_RangeLiquidityProvider,
  OSWAP_RangePair: () => OSWAP_RangePair,
  OSWAP_RangePairCreator: () => OSWAP_RangePairCreator,
  OSWAP_RestrictedFactory: () => OSWAP_RestrictedFactory,
  OSWAP_RestrictedLiquidityProvider: () => OSWAP_RestrictedLiquidityProvider,
  OSWAP_RestrictedPair: () => OSWAP_RestrictedPair,
  OSWAP_RestrictedPair2: () => OSWAP_RestrictedPair2,
  OSWAP_RestrictedPairCreator: () => OSWAP_RestrictedPairCreator,
  OSWAP_RestrictedPairOracle: () => OSWAP_RestrictedPairOracle,
  OSWAP_Router: () => OSWAP_Router,
  OSWAP_VotingExecutor1: () => OSWAP_VotingExecutor1,
  OSWAP_VotingExecutor2: () => OSWAP_VotingExecutor2,
  OSWAP_VotingExecutor3: () => OSWAP_VotingExecutor3,
  OSWAP_VotingExecutor4: () => OSWAP_VotingExecutor4,
  OpenSwap: () => OpenSwap
});

// src/contracts/OpenSwap.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));
var Bin = require_OpenSwap();
var OpenSwap = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin.abi, Bin.bytecode);
  }
  deploy(params) {
    return this._deploy(params.minter, params.initSupplyTo, import_eth_wallet.Utils.toString(params.initSupply), import_eth_wallet.Utils.toString(params.totalSupply));
  }
  parseApprovalEvent(receipt) {
    let events = this.parseEvents(receipt, "Approval");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        owner: result.owner,
        spender: result.spender,
        value: new import_eth_wallet.BigNumber(result.value)
      };
    });
  }
  parseTransferEvent(receipt) {
    let events = this.parseEvents(receipt, "Transfer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        from: result.from,
        to: result.to,
        value: new import_eth_wallet.BigNumber(result.value)
      };
    });
  }
  async allowance(params) {
    let result = await this.methods("allowance", params.owner, params.spender);
    return new import_eth_wallet.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.spender, import_eth_wallet.Utils.toString(params.amount));
    return result;
  }
  async balanceOf(account) {
    let result = await this.methods("balanceOf", account);
    return new import_eth_wallet.BigNumber(result);
  }
  async cap() {
    let result = await this.methods("cap");
    return new import_eth_wallet.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet.BigNumber(result);
  }
  async decreaseAllowance(params) {
    let result = await this.methods("decreaseAllowance", params.spender, import_eth_wallet.Utils.toString(params.subtractedValue));
    return result;
  }
  async increaseAllowance(params) {
    let result = await this.methods("increaseAllowance", params.spender, import_eth_wallet.Utils.toString(params.addedValue));
    return result;
  }
  async mint(params) {
    let result = await this.methods("mint", params.account, import_eth_wallet.Utils.toString(params.amount));
    return result;
  }
  async minter() {
    let result = await this.methods("minter");
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet.BigNumber(result);
  }
  async transfer(params) {
    let result = await this.methods("transfer", params.recipient, import_eth_wallet.Utils.toString(params.amount));
    return result;
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.sender, params.recipient, import_eth_wallet.Utils.toString(params.amount));
    return result;
  }
};

// src/contracts/amm/OSWAP_ERC20.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));
var Bin2 = require_OSWAP_ERC20();
var OSWAP_ERC20 = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin2.abi, Bin2.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseApprovalEvent(receipt) {
    let events = this.parseEvents(receipt, "Approval");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        owner: result.owner,
        spender: result.spender,
        value: new import_eth_wallet2.BigNumber(result.value)
      };
    });
  }
  parseTransferEvent(receipt) {
    let events = this.parseEvents(receipt, "Transfer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        from: result.from,
        to: result.to,
        value: new import_eth_wallet2.BigNumber(result.value)
      };
    });
  }
  async EIP712_TYPEHASH() {
    let result = await this.methods("EIP712_TYPEHASH");
    return result;
  }
  async NAME_HASH() {
    let result = await this.methods("NAME_HASH");
    return result;
  }
  async PERMIT_TYPEHASH() {
    let result = await this.methods("PERMIT_TYPEHASH");
    return result;
  }
  async VERSION_HASH() {
    let result = await this.methods("VERSION_HASH");
    return result;
  }
  async allowance(params) {
    let result = await this.methods("allowance", params.param1, params.param2);
    return new import_eth_wallet2.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.spender, import_eth_wallet2.Utils.toString(params.value));
    return result;
  }
  async balanceOf(param1) {
    let result = await this.methods("balanceOf", param1);
    return new import_eth_wallet2.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet2.BigNumber(result);
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async nonces(param1) {
    let result = await this.methods("nonces", param1);
    return new import_eth_wallet2.BigNumber(result);
  }
  async permit(params) {
    let result = await this.methods("permit", params.owner, params.spender, import_eth_wallet2.Utils.toString(params.value), import_eth_wallet2.Utils.toString(params.deadline), import_eth_wallet2.Utils.toString(params.v), import_eth_wallet2.Utils.stringToBytes32(params.r), import_eth_wallet2.Utils.stringToBytes32(params.s));
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet2.BigNumber(result);
  }
  async transfer(params) {
    let result = await this.methods("transfer", params.to, import_eth_wallet2.Utils.toString(params.value));
    return result;
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet2.Utils.toString(params.value));
    return result;
  }
};

// src/contracts/amm/OSWAP_Factory.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));
var Bin3 = require_OSWAP_Factory();
var OSWAP_Factory = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin3.abi, Bin3.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.pairCreator, import_eth_wallet3.Utils.toString(params.tradeFee), import_eth_wallet3.Utils.toString(params.protocolFee), params.protocolFeeTo);
  }
  parsePairCreatedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairCreated");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        pair: result.pair,
        newSize: new import_eth_wallet3.BigNumber(result.newSize)
      };
    });
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  parseParamSet2Event(receipt) {
    let events = this.parseEvents(receipt, "ParamSet2");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value1: result.value1,
        value2: result.value2
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  async allPairs(param1) {
    let result = await this.methods("allPairs", import_eth_wallet3.Utils.toString(param1));
    return result;
  }
  async allPairsLength() {
    let result = await this.methods("allPairsLength");
    return new import_eth_wallet3.BigNumber(result);
  }
  async createPair(params) {
    let result = await this.methods("createPair", params.tokenA, params.tokenB);
    return result;
  }
  async getPair(params) {
    let result = await this.methods("getPair", params.param1, params.param2);
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async pairCreator() {
    let result = await this.methods("pairCreator");
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet3.BigNumber(result);
  }
  async protocolFeeParams() {
    let result = await this.methods("protocolFeeParams");
    return {
      _protocolFee: new import_eth_wallet3.BigNumber(result._protocolFee),
      _protocolFeeTo: result._protocolFeeTo
    };
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
  async setProtocolFee(protocolFee) {
    let result = await this.methods("setProtocolFee", import_eth_wallet3.Utils.toString(protocolFee));
    return result;
  }
  async setProtocolFeeTo(protocolFeeTo) {
    let result = await this.methods("setProtocolFeeTo", protocolFeeTo);
    return result;
  }
  async setTradeFee(tradeFee) {
    let result = await this.methods("setTradeFee", import_eth_wallet3.Utils.toString(tradeFee));
    return result;
  }
  async tradeFee() {
    let result = await this.methods("tradeFee");
    return new import_eth_wallet3.BigNumber(result);
  }
};

// src/contracts/amm/OSWAP_Pair.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));
var Bin4 = require_OSWAP_Pair();
var OSWAP_Pair = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin4.abi, Bin4.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseApprovalEvent(receipt) {
    let events = this.parseEvents(receipt, "Approval");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        owner: result.owner,
        spender: result.spender,
        value: new import_eth_wallet4.BigNumber(result.value)
      };
    });
  }
  parseBurnEvent(receipt) {
    let events = this.parseEvents(receipt, "Burn");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        sender: result.sender,
        amount0: new import_eth_wallet4.BigNumber(result.amount0),
        amount1: new import_eth_wallet4.BigNumber(result.amount1),
        to: result.to
      };
    });
  }
  parseMintEvent(receipt) {
    let events = this.parseEvents(receipt, "Mint");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        sender: result.sender,
        amount0: new import_eth_wallet4.BigNumber(result.amount0),
        amount1: new import_eth_wallet4.BigNumber(result.amount1)
      };
    });
  }
  parseProtocolFeeSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ProtocolFeeSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        protocolFee: new import_eth_wallet4.BigNumber(result.protocolFee)
      };
    });
  }
  parseSwapEvent(receipt) {
    let events = this.parseEvents(receipt, "Swap");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        sender: result.sender,
        amount0In: new import_eth_wallet4.BigNumber(result.amount0In),
        amount1In: new import_eth_wallet4.BigNumber(result.amount1In),
        amount0Out: new import_eth_wallet4.BigNumber(result.amount0Out),
        amount1Out: new import_eth_wallet4.BigNumber(result.amount1Out),
        to: result.to
      };
    });
  }
  parseSyncEvent(receipt) {
    let events = this.parseEvents(receipt, "Sync");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        reserve0: new import_eth_wallet4.BigNumber(result.reserve0),
        reserve1: new import_eth_wallet4.BigNumber(result.reserve1)
      };
    });
  }
  parseTradeFeeSetEvent(receipt) {
    let events = this.parseEvents(receipt, "TradeFeeSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        tradeFee: new import_eth_wallet4.BigNumber(result.tradeFee)
      };
    });
  }
  parseTransferEvent(receipt) {
    let events = this.parseEvents(receipt, "Transfer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        from: result.from,
        to: result.to,
        value: new import_eth_wallet4.BigNumber(result.value)
      };
    });
  }
  async EIP712_TYPEHASH() {
    let result = await this.methods("EIP712_TYPEHASH");
    return result;
  }
  async MINIMUM_LIQUIDITY() {
    let result = await this.methods("MINIMUM_LIQUIDITY");
    return new import_eth_wallet4.BigNumber(result);
  }
  async NAME_HASH() {
    let result = await this.methods("NAME_HASH");
    return result;
  }
  async PERMIT_TYPEHASH() {
    let result = await this.methods("PERMIT_TYPEHASH");
    return result;
  }
  async VERSION_HASH() {
    let result = await this.methods("VERSION_HASH");
    return result;
  }
  async allowance(params) {
    let result = await this.methods("allowance", params.param1, params.param2);
    return new import_eth_wallet4.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.spender, import_eth_wallet4.Utils.toString(params.value));
    return result;
  }
  async balanceOf(param1) {
    let result = await this.methods("balanceOf", param1);
    return new import_eth_wallet4.BigNumber(result);
  }
  async burn(to) {
    let result = await this.methods("burn", to);
    return result;
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet4.BigNumber(result);
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", params.tokenOut, import_eth_wallet4.Utils.toString(params.amountOut));
    return new import_eth_wallet4.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", params.tokenIn, import_eth_wallet4.Utils.toString(params.amountIn));
    return new import_eth_wallet4.BigNumber(result);
  }
  async getReserves() {
    let result = await this.methods("getReserves");
    return {
      _reserve0: new import_eth_wallet4.BigNumber(result._reserve0),
      _reserve1: new import_eth_wallet4.BigNumber(result._reserve1),
      _blockTimestampLast: new import_eth_wallet4.BigNumber(result._blockTimestampLast)
    };
  }
  async initialize(params) {
    let result = await this.methods("initialize", params.token0, params.token1);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async kLast() {
    let result = await this.methods("kLast");
    return new import_eth_wallet4.BigNumber(result);
  }
  async mint(to) {
    let result = await this.methods("mint", to);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async nonces(param1) {
    let result = await this.methods("nonces", param1);
    return new import_eth_wallet4.BigNumber(result);
  }
  async permit(params) {
    let result = await this.methods("permit", params.owner, params.spender, import_eth_wallet4.Utils.toString(params.value), import_eth_wallet4.Utils.toString(params.deadline), import_eth_wallet4.Utils.toString(params.v), import_eth_wallet4.Utils.stringToBytes32(params.r), import_eth_wallet4.Utils.stringToBytes32(params.s));
    return result;
  }
  async price0CumulativeLast() {
    let result = await this.methods("price0CumulativeLast");
    return new import_eth_wallet4.BigNumber(result);
  }
  async price1CumulativeLast() {
    let result = await this.methods("price1CumulativeLast");
    return new import_eth_wallet4.BigNumber(result);
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet4.BigNumber(result);
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async skim(to) {
    let result = await this.methods("skim", to);
    return result;
  }
  async swap(params) {
    let result = await this.methods("swap", import_eth_wallet4.Utils.toString(params.amount0Out), import_eth_wallet4.Utils.toString(params.amount1Out), params.to, params.data);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async sync() {
    let result = await this.methods("sync");
    return result;
  }
  async token0() {
    let result = await this.methods("token0");
    return result;
  }
  async token1() {
    let result = await this.methods("token1");
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet4.BigNumber(result);
  }
  async tradeFee() {
    let result = await this.methods("tradeFee");
    return new import_eth_wallet4.BigNumber(result);
  }
  async transfer(params) {
    let result = await this.methods("transfer", params.to, import_eth_wallet4.Utils.toString(params.value));
    return result;
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet4.Utils.toString(params.value));
    return result;
  }
  async updateFee() {
    let result = await this.methods("updateFee");
    return result;
  }
  async updateProtocolFee() {
    let result = await this.methods("updateProtocolFee");
    return result;
  }
};

// src/contracts/amm/OSWAP_PairCreator.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));
var Bin5 = require_OSWAP_PairCreator();
var OSWAP_PairCreator = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin5.abi, Bin5.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async createPair(salt) {
    let result = await this.methods("createPair", import_eth_wallet5.Utils.stringToBytes32(salt));
    return result;
  }
};

// src/contracts/amm/OSWAP_Router.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));
var Bin6 = require_OSWAP_Router();
var OSWAP_Router = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin6.abi, Bin6.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.tokenA, params.tokenB, import_eth_wallet6.Utils.toString(params.amountADesired), import_eth_wallet6.Utils.toString(params.amountBDesired), import_eth_wallet6.Utils.toString(params.amountAMin), import_eth_wallet6.Utils.toString(params.amountBMin), params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async addLiquidityETH(params, _value) {
    let result = await this.methods("addLiquidityETH", params.token, import_eth_wallet6.Utils.toString(params.amountTokenDesired), import_eth_wallet6.Utils.toString(params.amountTokenMin), import_eth_wallet6.Utils.toString(params.amountETHMin), params.to, import_eth_wallet6.Utils.toString(params.deadline), _value);
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", import_eth_wallet6.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut);
    return new import_eth_wallet6.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", import_eth_wallet6.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut);
    return new import_eth_wallet6.BigNumber(result);
  }
  async getAmountsIn(params) {
    let result = await this.methods("getAmountsIn", import_eth_wallet6.Utils.toString(params.amountOut), params.path);
    return result;
  }
  async getAmountsOut(params) {
    let result = await this.methods("getAmountsOut", import_eth_wallet6.Utils.toString(params.amountIn), params.path);
    return result;
  }
  async getReserves(params) {
    let result = await this.methods("getReserves", params.tokenA, params.tokenB);
    return {
      reserveA: new import_eth_wallet6.BigNumber(result.reserveA),
      reserveB: new import_eth_wallet6.BigNumber(result.reserveB)
    };
  }
  async quote(params) {
    let result = await this.methods("quote", import_eth_wallet6.Utils.toString(params.amountA), import_eth_wallet6.Utils.toString(params.reserveA), import_eth_wallet6.Utils.toString(params.reserveB));
    return new import_eth_wallet6.BigNumber(result);
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.tokenA, params.tokenB, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountAMin), import_eth_wallet6.Utils.toString(params.amountBMin), params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETH(params) {
    let result = await this.methods("removeLiquidityETH", params.token, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountTokenMin), import_eth_wallet6.Utils.toString(params.amountETHMin), params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETHSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("removeLiquidityETHSupportingFeeOnTransferTokens", params.token, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountTokenMin), import_eth_wallet6.Utils.toString(params.amountETHMin), params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETHWithPermit(params) {
    let result = await this.methods("removeLiquidityETHWithPermit", params.token, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountTokenMin), import_eth_wallet6.Utils.toString(params.amountETHMin), params.to, import_eth_wallet6.Utils.toString(params.deadline), params.approveMax, import_eth_wallet6.Utils.toString(params.v), import_eth_wallet6.Utils.stringToBytes32(params.r), import_eth_wallet6.Utils.stringToBytes32(params.s));
    return result;
  }
  async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", params.token, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountTokenMin), import_eth_wallet6.Utils.toString(params.amountETHMin), params.to, import_eth_wallet6.Utils.toString(params.deadline), params.approveMax, import_eth_wallet6.Utils.toString(params.v), import_eth_wallet6.Utils.stringToBytes32(params.r), import_eth_wallet6.Utils.stringToBytes32(params.s));
    return result;
  }
  async removeLiquidityWithPermit(params) {
    let result = await this.methods("removeLiquidityWithPermit", params.tokenA, params.tokenB, import_eth_wallet6.Utils.toString(params.liquidity), import_eth_wallet6.Utils.toString(params.amountAMin), import_eth_wallet6.Utils.toString(params.amountBMin), params.to, import_eth_wallet6.Utils.toString(params.deadline), params.approveMax, import_eth_wallet6.Utils.toString(params.v), import_eth_wallet6.Utils.stringToBytes32(params.r), import_eth_wallet6.Utils.stringToBytes32(params.s));
    return result;
  }
  async swapETHForExactTokens(params, _value) {
    let result = await this.methods("swapETHForExactTokens", import_eth_wallet6.Utils.toString(params.amountOut), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline), _value);
    return result;
  }
  async swapExactETHForTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokens", import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline), _value);
    return result;
  }
  async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokensSupportingFeeOnTransferTokens", import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline), _value);
    return result;
  }
  async swapExactTokensForETH(params) {
    let result = await this.methods("swapExactTokensForETH", import_eth_wallet6.Utils.toString(params.amountIn), import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForETHSupportingFeeOnTransferTokens", import_eth_wallet6.Utils.toString(params.amountIn), import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async swapExactTokensForTokens(params) {
    let result = await this.methods("swapExactTokensForTokens", import_eth_wallet6.Utils.toString(params.amountIn), import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForTokensSupportingFeeOnTransferTokens", import_eth_wallet6.Utils.toString(params.amountIn), import_eth_wallet6.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async swapTokensForExactETH(params) {
    let result = await this.methods("swapTokensForExactETH", import_eth_wallet6.Utils.toString(params.amountOut), import_eth_wallet6.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
  async swapTokensForExactTokens(params) {
    let result = await this.methods("swapTokensForExactTokens", import_eth_wallet6.Utils.toString(params.amountOut), import_eth_wallet6.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet6.Utils.toString(params.deadline));
    return result;
  }
};

// src/contracts/amm/OSWAP_VotingExecutor1.ts
var import_eth_wallet7 = __toModule(require("@ijstech/eth-wallet"));
var Bin7 = require_OSWAP_VotingExecutor1();
var OSWAP_VotingExecutor1 = class extends import_eth_wallet7.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin7.abi, Bin7.bytecode);
  }
  deploy(factory) {
    return this._deploy(factory);
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet7.Utils.stringToBytes32(params));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
};

// src/contracts/commons/OSWAP_FactoryBase.ts
var import_eth_wallet8 = __toModule(require("@ijstech/eth-wallet"));
var Bin8 = require_OSWAP_FactoryBase();
var OSWAP_FactoryBase = class extends import_eth_wallet8.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin8.abi, Bin8.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.pairCreator);
  }
  parsePairCreatedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairCreated");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        pair: result.pair,
        newSize: new import_eth_wallet8.BigNumber(result.newSize)
      };
    });
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  async allPairs(param1) {
    let result = await this.methods("allPairs", import_eth_wallet8.Utils.toString(param1));
    return result;
  }
  async allPairsLength() {
    let result = await this.methods("allPairsLength");
    return new import_eth_wallet8.BigNumber(result);
  }
  async createPair(params) {
    let result = await this.methods("createPair", params.tokenA, params.tokenB);
    return result;
  }
  async getPair(params) {
    let result = await this.methods("getPair", params.param1, params.param2);
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async pairCreator() {
    let result = await this.methods("pairCreator");
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
};

// src/contracts/commons/OSWAP_PausableFactory.ts
var import_eth_wallet9 = __toModule(require("@ijstech/eth-wallet"));
var Bin9 = require_OSWAP_PausableFactory();
var OSWAP_PausableFactory = class extends import_eth_wallet9.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin9.abi, Bin9.bytecode);
  }
  deploy(governance) {
    return this._deploy(governance);
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
};

// src/contracts/commons/OSWAP_PausablePair.ts
var import_eth_wallet10 = __toModule(require("@ijstech/eth-wallet"));
var Bin10 = require_OSWAP_PausablePair();
var OSWAP_PausablePair = class extends import_eth_wallet10.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin10.abi, Bin10.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
};

// src/contracts/gov/OAXDEX_Administrator.ts
var import_eth_wallet11 = __toModule(require("@ijstech/eth-wallet"));
var Bin11 = require_OAXDEX_Administrator();
var OAXDEX_Administrator = class extends import_eth_wallet11.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin11.abi, Bin11.bytecode);
  }
  deploy(governance) {
    return this._deploy(governance);
  }
  parseAddAdminEvent(receipt) {
    let events = this.parseEvents(receipt, "AddAdmin");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin
      };
    });
  }
  parseRemoveAdminEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveAdmin");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin
      };
    });
  }
  parseSetMaxAdminEvent(receipt) {
    let events = this.parseEvents(receipt, "SetMaxAdmin");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        maxAdmin: new import_eth_wallet11.BigNumber(result.maxAdmin)
      };
    });
  }
  parseVotedFactoryRestartEvent(receipt) {
    let events = this.parseEvents(receipt, "VotedFactoryRestart");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin,
        factory: result.factory,
        YorN: result.YorN
      };
    });
  }
  parseVotedFactoryShutdownEvent(receipt) {
    let events = this.parseEvents(receipt, "VotedFactoryShutdown");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin,
        factory: result.factory,
        YorN: result.YorN
      };
    });
  }
  parseVotedPairRestartEvent(receipt) {
    let events = this.parseEvents(receipt, "VotedPairRestart");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin,
        pair: result.pair,
        YorN: result.YorN
      };
    });
  }
  parseVotedPairShutdownEvent(receipt) {
    let events = this.parseEvents(receipt, "VotedPairShutdown");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin,
        pair: result.pair,
        YorN: result.YorN
      };
    });
  }
  parseVotedVetoEvent(receipt) {
    let events = this.parseEvents(receipt, "VotedVeto");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        admin: result.admin,
        votingContract: result.votingContract,
        YorN: result.YorN
      };
    });
  }
  async addAdmin(admin) {
    let result = await this.methods("addAdmin", admin);
    return result;
  }
  async admins(param1) {
    let result = await this.methods("admins", import_eth_wallet11.Utils.toString(param1));
    return result;
  }
  async adminsIdx(param1) {
    let result = await this.methods("adminsIdx", param1);
    return new import_eth_wallet11.BigNumber(result);
  }
  async allAdmins() {
    let result = await this.methods("allAdmins");
    return result;
  }
  async executeFactoryRestart(factory) {
    let result = await this.methods("executeFactoryRestart", factory);
    return result;
  }
  async executeFactoryShutdown(factory) {
    let result = await this.methods("executeFactoryShutdown", factory);
    return result;
  }
  async executePairRestart(params) {
    let result = await this.methods("executePairRestart", params.factory, params.pair);
    return result;
  }
  async executePairShutdown(params) {
    let result = await this.methods("executePairShutdown", params.factory, params.pair);
    return result;
  }
  async executeVetoVoting(votingContract) {
    let result = await this.methods("executeVetoVoting", votingContract);
    return result;
  }
  async factoryRestart(params) {
    let result = await this.methods("factoryRestart", params.factory, params.YorN);
    return result;
  }
  async factoryRestartVote(params) {
    let result = await this.methods("factoryRestartVote", params.param1, params.param2);
    return result;
  }
  async factoryShutdown(params) {
    let result = await this.methods("factoryShutdown", params.factory, params.YorN);
    return result;
  }
  async factoryShutdownVote(params) {
    let result = await this.methods("factoryShutdownVote", params.param1, params.param2);
    return result;
  }
  async getFactoryRestartVote(factory) {
    let result = await this.methods("getFactoryRestartVote", factory);
    return result;
  }
  async getFactoryShutdownVote(factory) {
    let result = await this.methods("getFactoryShutdownVote", factory);
    return result;
  }
  async getPairRestartVote(pair) {
    let result = await this.methods("getPairRestartVote", pair);
    return result;
  }
  async getPairShutdownVote(pair) {
    let result = await this.methods("getPairShutdownVote", pair);
    return result;
  }
  async getVetoVotingVote(votingContract) {
    let result = await this.methods("getVetoVotingVote", votingContract);
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async maxAdmin() {
    let result = await this.methods("maxAdmin");
    return new import_eth_wallet11.BigNumber(result);
  }
  async pairRestart(params) {
    let result = await this.methods("pairRestart", params.pair, params.YorN);
    return result;
  }
  async pairRestartVote(params) {
    let result = await this.methods("pairRestartVote", params.param1, params.param2);
    return result;
  }
  async pairShutdown(params) {
    let result = await this.methods("pairShutdown", params.pair, params.YorN);
    return result;
  }
  async pairShutdownVote(params) {
    let result = await this.methods("pairShutdownVote", params.param1, params.param2);
    return result;
  }
  async removeAdmin(admin) {
    let result = await this.methods("removeAdmin", admin);
    return result;
  }
  async setMaxAdmin(maxAdmin) {
    let result = await this.methods("setMaxAdmin", import_eth_wallet11.Utils.toString(maxAdmin));
    return result;
  }
  async vetoVoting(params) {
    let result = await this.methods("vetoVoting", params.votingContract, params.YorN);
    return result;
  }
  async vetoVotingVote(params) {
    let result = await this.methods("vetoVotingVote", params.param1, params.param2);
    return result;
  }
};

// src/contracts/gov/OAXDEX_Governance.ts
var import_eth_wallet12 = __toModule(require("@ijstech/eth-wallet"));
var Bin12 = require_OAXDEX_Governance();
var OAXDEX_Governance = class extends import_eth_wallet12.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin12.abi, Bin12.bytecode);
  }
  deploy(params) {
    return this._deploy(params.oaxToken, import_eth_wallet12.Utils.stringToBytes32(params.names), import_eth_wallet12.Utils.toString(params.minExeDelay), import_eth_wallet12.Utils.toString(params.minVoteDuration), import_eth_wallet12.Utils.toString(params.maxVoteDuration), import_eth_wallet12.Utils.toString(params.minOaxTokenToCreateVote), import_eth_wallet12.Utils.toString(params.minQuorum), import_eth_wallet12.Utils.toString(params.minStakePeriod));
  }
  parseAddVotingConfigEvent(receipt) {
    let events = this.parseEvents(receipt, "AddVotingConfig");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        minExeDelay: new import_eth_wallet12.BigNumber(result.minExeDelay),
        minVoteDuration: new import_eth_wallet12.BigNumber(result.minVoteDuration),
        maxVoteDuration: new import_eth_wallet12.BigNumber(result.maxVoteDuration),
        minOaxTokenToCreateVote: new import_eth_wallet12.BigNumber(result.minOaxTokenToCreateVote),
        minQuorum: new import_eth_wallet12.BigNumber(result.minQuorum)
      };
    });
  }
  parseExecutedEvent(receipt) {
    let events = this.parseEvents(receipt, "Executed");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        vote: result.vote
      };
    });
  }
  parseNewPollEvent(receipt) {
    let events = this.parseEvents(receipt, "NewPoll");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        poll: result.poll
      };
    });
  }
  parseNewVoteEvent(receipt) {
    let events = this.parseEvents(receipt, "NewVote");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        vote: result.vote
      };
    });
  }
  parseOwnershipTransferredEvent(receipt) {
    let events = this.parseEvents(receipt, "OwnershipTransferred");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        previousOwner: result.previousOwner,
        newOwner: result.newOwner
      };
    });
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  parseParamSet2Event(receipt) {
    let events = this.parseEvents(receipt, "ParamSet2");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value1: result.value1,
        value2: result.value2
      };
    });
  }
  parsePollEvent(receipt) {
    let events = this.parseEvents(receipt, "Poll");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        account: result.account,
        poll: result.poll,
        option: new import_eth_wallet12.BigNumber(result.option)
      };
    });
  }
  parseSetVotingConfigEvent(receipt) {
    let events = this.parseEvents(receipt, "SetVotingConfig");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        configName: result.configName,
        paramName: result.paramName,
        minExeDelay: new import_eth_wallet12.BigNumber(result.minExeDelay)
      };
    });
  }
  parseStakeEvent(receipt) {
    let events = this.parseEvents(receipt, "Stake");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        who: result.who,
        value: new import_eth_wallet12.BigNumber(result.value)
      };
    });
  }
  parseUnstakeEvent(receipt) {
    let events = this.parseEvents(receipt, "Unstake");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        who: result.who,
        value: new import_eth_wallet12.BigNumber(result.value)
      };
    });
  }
  parseVetoEvent(receipt) {
    let events = this.parseEvents(receipt, "Veto");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        vote: result.vote
      };
    });
  }
  parseVoteEvent(receipt) {
    let events = this.parseEvents(receipt, "Vote");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        account: result.account,
        vote: result.vote,
        option: new import_eth_wallet12.BigNumber(result.option)
      };
    });
  }
  async addVotingConfig(params) {
    let result = await this.methods("addVotingConfig", import_eth_wallet12.Utils.stringToBytes32(params.name), import_eth_wallet12.Utils.toString(params.minExeDelay), import_eth_wallet12.Utils.toString(params.minVoteDuration), import_eth_wallet12.Utils.toString(params.maxVoteDuration), import_eth_wallet12.Utils.toString(params.minOaxTokenToCreateVote), import_eth_wallet12.Utils.toString(params.minQuorum));
    return result;
  }
  async admin() {
    let result = await this.methods("admin");
    return result;
  }
  async allVotings() {
    let result = await this.methods("allVotings");
    return result;
  }
  async closeVote(vote) {
    let result = await this.methods("closeVote", vote);
    return result;
  }
  async executed() {
    let result = await this.methods("executed");
    return result;
  }
  async freezedStake(param1) {
    let result = await this.methods("freezedStake", param1);
    return {
      amount: new import_eth_wallet12.BigNumber(result.amount),
      timestamp: new import_eth_wallet12.BigNumber(result.timestamp)
    };
  }
  async getNewVoteId() {
    let result = await this.methods("getNewVoteId");
    return result;
  }
  async getVotingConfigProfiles(params) {
    let result = await this.methods("getVotingConfigProfiles", import_eth_wallet12.Utils.toString(params.start), import_eth_wallet12.Utils.toString(params.length));
    return result;
  }
  async getVotingCount() {
    let result = await this.methods("getVotingCount");
    return new import_eth_wallet12.BigNumber(result);
  }
  async getVotingParams(name) {
    let result = await this.methods("getVotingParams", import_eth_wallet12.Utils.stringToBytes32(name));
    return {
      _minExeDelay: new import_eth_wallet12.BigNumber(result._minExeDelay),
      _minVoteDuration: new import_eth_wallet12.BigNumber(result._minVoteDuration),
      _maxVoteDuration: new import_eth_wallet12.BigNumber(result._maxVoteDuration),
      _minOaxTokenToCreateVote: new import_eth_wallet12.BigNumber(result._minOaxTokenToCreateVote),
      _minQuorum: new import_eth_wallet12.BigNumber(result._minQuorum)
    };
  }
  async getVotings(params) {
    let result = await this.methods("getVotings", import_eth_wallet12.Utils.toString(params.start), import_eth_wallet12.Utils.toString(params.count));
    return result;
  }
  async initAdmin(admin) {
    let result = await this.methods("initAdmin", admin);
    return result;
  }
  async initVotingExecutor(votingExecutor) {
    let result = await this.methods("initVotingExecutor", votingExecutor);
    return result;
  }
  async isVotingContract(votingContract) {
    let result = await this.methods("isVotingContract", votingContract);
    return result;
  }
  async isVotingExecutor(param1) {
    let result = await this.methods("isVotingExecutor", param1);
    return result;
  }
  async minStakePeriod() {
    let result = await this.methods("minStakePeriod");
    return new import_eth_wallet12.BigNumber(result);
  }
  async newVote(params) {
    let result = await this.methods("newVote", params.vote, params.isExecutiveVote);
    return result;
  }
  async oaxToken() {
    let result = await this.methods("oaxToken");
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async renounceOwnership() {
    let result = await this.methods("renounceOwnership");
    return result;
  }
  async setAdmin(admin) {
    let result = await this.methods("setAdmin", admin);
    return result;
  }
  async setMinStakePeriod(minStakePeriod) {
    let result = await this.methods("setMinStakePeriod", import_eth_wallet12.Utils.toString(minStakePeriod));
    return result;
  }
  async setVotingConfig(params) {
    let result = await this.methods("setVotingConfig", import_eth_wallet12.Utils.stringToBytes32(params.configName), import_eth_wallet12.Utils.stringToBytes32(params.paramName), import_eth_wallet12.Utils.toString(params.paramValue));
    return result;
  }
  async setVotingExecutor(params) {
    let result = await this.methods("setVotingExecutor", params.votingExecutor, params.bool);
    return result;
  }
  async setVotingRegister(votingRegister) {
    let result = await this.methods("setVotingRegister", votingRegister);
    return result;
  }
  async stake(value) {
    let result = await this.methods("stake", import_eth_wallet12.Utils.toString(value));
    return result;
  }
  async stakeOf(param1) {
    let result = await this.methods("stakeOf", param1);
    return new import_eth_wallet12.BigNumber(result);
  }
  async totalStake() {
    let result = await this.methods("totalStake");
    return new import_eth_wallet12.BigNumber(result);
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async unlockStake() {
    let result = await this.methods("unlockStake");
    return result;
  }
  async unstake(value) {
    let result = await this.methods("unstake", import_eth_wallet12.Utils.toString(value));
    return result;
  }
  async veto(voting) {
    let result = await this.methods("veto", voting);
    return result;
  }
  async voteCount() {
    let result = await this.methods("voteCount");
    return new import_eth_wallet12.BigNumber(result);
  }
  async voted(params) {
    let result = await this.methods("voted", params.poll, params.account, import_eth_wallet12.Utils.toString(params.option));
    return result;
  }
  async votingConfigProfiles(param1) {
    let result = await this.methods("votingConfigProfiles", import_eth_wallet12.Utils.toString(param1));
    return result;
  }
  async votingConfigProfilesLength() {
    let result = await this.methods("votingConfigProfilesLength");
    return new import_eth_wallet12.BigNumber(result);
  }
  async votingConfigs(param1) {
    let result = await this.methods("votingConfigs", import_eth_wallet12.Utils.stringToBytes32(param1));
    return {
      minExeDelay: new import_eth_wallet12.BigNumber(result.minExeDelay),
      minVoteDuration: new import_eth_wallet12.BigNumber(result.minVoteDuration),
      maxVoteDuration: new import_eth_wallet12.BigNumber(result.maxVoteDuration),
      minOaxTokenToCreateVote: new import_eth_wallet12.BigNumber(result.minOaxTokenToCreateVote),
      minQuorum: new import_eth_wallet12.BigNumber(result.minQuorum)
    };
  }
  async votingExecutor(param1) {
    let result = await this.methods("votingExecutor", import_eth_wallet12.Utils.toString(param1));
    return result;
  }
  async votingExecutorInv(param1) {
    let result = await this.methods("votingExecutorInv", param1);
    return new import_eth_wallet12.BigNumber(result);
  }
  async votingExecutorLength() {
    let result = await this.methods("votingExecutorLength");
    return new import_eth_wallet12.BigNumber(result);
  }
  async votingIdx(param1) {
    let result = await this.methods("votingIdx", param1);
    return new import_eth_wallet12.BigNumber(result);
  }
  async votingRegister() {
    let result = await this.methods("votingRegister");
    return result;
  }
  async votings(param1) {
    let result = await this.methods("votings", import_eth_wallet12.Utils.toString(param1));
    return result;
  }
};

// src/contracts/gov/OAXDEX_VotingContract.ts
var import_eth_wallet13 = __toModule(require("@ijstech/eth-wallet"));
var Bin13 = require_OAXDEX_VotingContract();
var OAXDEX_VotingContract = class extends import_eth_wallet13.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin13.abi, Bin13.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.executor, import_eth_wallet13.Utils.toString(params.id), import_eth_wallet13.Utils.stringToBytes32(params.name), import_eth_wallet13.Utils.stringToBytes32(params.options), import_eth_wallet13.Utils.toString(params.quorum), import_eth_wallet13.Utils.toString(params.threshold), import_eth_wallet13.Utils.toString(params.voteEndTime), import_eth_wallet13.Utils.toString(params.executeDelay), import_eth_wallet13.Utils.stringToBytes32(params.executeParam));
  }
  async _executeParam(param1) {
    let result = await this.methods("_executeParam", import_eth_wallet13.Utils.toString(param1));
    return result;
  }
  async _options(param1) {
    let result = await this.methods("_options", import_eth_wallet13.Utils.toString(param1));
    return result;
  }
  async _optionsWeight(param1) {
    let result = await this.methods("_optionsWeight", import_eth_wallet13.Utils.toString(param1));
    return new import_eth_wallet13.BigNumber(result);
  }
  async accountVoteOption(param1) {
    let result = await this.methods("accountVoteOption", param1);
    return new import_eth_wallet13.BigNumber(result);
  }
  async accountVoteWeight(param1) {
    let result = await this.methods("accountVoteWeight", param1);
    return new import_eth_wallet13.BigNumber(result);
  }
  async execute() {
    let result = await this.methods("execute");
    return result;
  }
  async executeDelay() {
    let result = await this.methods("executeDelay");
    return new import_eth_wallet13.BigNumber(result);
  }
  async executeParam() {
    let result = await this.methods("executeParam");
    return result;
  }
  async executed() {
    let result = await this.methods("executed");
    return result;
  }
  async executor() {
    let result = await this.methods("executor");
    return result;
  }
  async getParams() {
    let result = await this.methods("getParams");
    return {
      executor_: result.executor_,
      id_: new import_eth_wallet13.BigNumber(result.id_),
      name_: result.name_,
      options_: result.options_,
      voteStartTime_: new import_eth_wallet13.BigNumber(result.voteStartTime_),
      voteEndTime_: new import_eth_wallet13.BigNumber(result.voteEndTime_),
      executeDelay_: new import_eth_wallet13.BigNumber(result.executeDelay_),
      status_: result.status_,
      optionsWeight_: result.optionsWeight_.map((e) => new import_eth_wallet13.BigNumber(e)),
      quorum_: result.quorum_.map((e) => new import_eth_wallet13.BigNumber(e)),
      executeParam_: result.executeParam_
    };
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async id() {
    let result = await this.methods("id");
    return new import_eth_wallet13.BigNumber(result);
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async options() {
    let result = await this.methods("options");
    return result;
  }
  async optionsCount() {
    let result = await this.methods("optionsCount");
    return new import_eth_wallet13.BigNumber(result);
  }
  async optionsWeight() {
    let result = await this.methods("optionsWeight");
    return result;
  }
  async quorum() {
    let result = await this.methods("quorum");
    return new import_eth_wallet13.BigNumber(result);
  }
  async threshold() {
    let result = await this.methods("threshold");
    return new import_eth_wallet13.BigNumber(result);
  }
  async totalVoteWeight() {
    let result = await this.methods("totalVoteWeight");
    return new import_eth_wallet13.BigNumber(result);
  }
  async totalWeight() {
    let result = await this.methods("totalWeight");
    return new import_eth_wallet13.BigNumber(result);
  }
  async updateWeight(account) {
    let result = await this.methods("updateWeight", account);
    return result;
  }
  async veto() {
    let result = await this.methods("veto");
    return result;
  }
  async vetoed() {
    let result = await this.methods("vetoed");
    return result;
  }
  async vote(option) {
    let result = await this.methods("vote", import_eth_wallet13.Utils.toString(option));
    return result;
  }
  async voteEndTime() {
    let result = await this.methods("voteEndTime");
    return new import_eth_wallet13.BigNumber(result);
  }
  async voteStartTime() {
    let result = await this.methods("voteStartTime");
    return new import_eth_wallet13.BigNumber(result);
  }
};

// src/contracts/gov/OAXDEX_VotingExecutor.ts
var import_eth_wallet14 = __toModule(require("@ijstech/eth-wallet"));
var Bin14 = require_OAXDEX_VotingExecutor();
var OAXDEX_VotingExecutor = class extends import_eth_wallet14.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin14.abi, Bin14.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.admin);
  }
  async admin() {
    let result = await this.methods("admin");
    return result;
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet14.Utils.stringToBytes32(params));
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
};

// src/contracts/gov/OAXDEX_VotingRegistry.ts
var import_eth_wallet15 = __toModule(require("@ijstech/eth-wallet"));
var Bin15 = require_OAXDEX_VotingRegistry();
var OAXDEX_VotingRegistry = class extends import_eth_wallet15.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin15.abi, Bin15.bytecode);
  }
  deploy(governance) {
    return this._deploy(governance);
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async newVote(params) {
    let result = await this.methods("newVote", params.executor, import_eth_wallet15.Utils.stringToBytes32(params.name), import_eth_wallet15.Utils.stringToBytes32(params.options), import_eth_wallet15.Utils.toString(params.quorum), import_eth_wallet15.Utils.toString(params.threshold), import_eth_wallet15.Utils.toString(params.voteEndTime), import_eth_wallet15.Utils.toString(params.executeDelay), import_eth_wallet15.Utils.stringToBytes32(params.executeParam));
    return result;
  }
};

// src/contracts/libraries/ERC20.ts
var import_eth_wallet16 = __toModule(require("@ijstech/eth-wallet"));
var Bin16 = require_ERC20();
var ERC20 = class extends import_eth_wallet16.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin16.abi, Bin16.bytecode);
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol);
  }
  parseApprovalEvent(receipt) {
    let events = this.parseEvents(receipt, "Approval");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        owner: result.owner,
        spender: result.spender,
        value: new import_eth_wallet16.BigNumber(result.value)
      };
    });
  }
  parseTransferEvent(receipt) {
    let events = this.parseEvents(receipt, "Transfer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        from: result.from,
        to: result.to,
        value: new import_eth_wallet16.BigNumber(result.value)
      };
    });
  }
  async allowance(params) {
    let result = await this.methods("allowance", params.owner, params.spender);
    return new import_eth_wallet16.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.spender, import_eth_wallet16.Utils.toString(params.amount));
    return result;
  }
  async balanceOf(account) {
    let result = await this.methods("balanceOf", account);
    return new import_eth_wallet16.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet16.BigNumber(result);
  }
  async decreaseAllowance(params) {
    let result = await this.methods("decreaseAllowance", params.spender, import_eth_wallet16.Utils.toString(params.subtractedValue));
    return result;
  }
  async increaseAllowance(params) {
    let result = await this.methods("increaseAllowance", params.spender, import_eth_wallet16.Utils.toString(params.addedValue));
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet16.BigNumber(result);
  }
  async transfer(params) {
    let result = await this.methods("transfer", params.recipient, import_eth_wallet16.Utils.toString(params.amount));
    return result;
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.sender, params.recipient, import_eth_wallet16.Utils.toString(params.amount));
    return result;
  }
};

// src/contracts/oracle/OSWAP_CertiKSecurityOracle.ts
var import_eth_wallet17 = __toModule(require("@ijstech/eth-wallet"));
var Bin17 = require_OSWAP_CertiKSecurityOracle();
var OSWAP_CertiKSecurityOracle = class extends import_eth_wallet17.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin17.abi, Bin17.bytecode);
  }
  deploy(oracleAddress) {
    return this._deploy(oracleAddress);
  }
  async getSecurityScore(oracle) {
    let result = await this.methods("getSecurityScore", oracle);
    return new import_eth_wallet17.BigNumber(result);
  }
  async oracleAddress() {
    let result = await this.methods("oracleAddress");
    return result;
  }
};

// src/contracts/oracle/OSWAP_OracleFactory.ts
var import_eth_wallet18 = __toModule(require("@ijstech/eth-wallet"));
var Bin18 = require_OSWAP_OracleFactory();
var OSWAP_OracleFactory = class extends import_eth_wallet18.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin18.abi, Bin18.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.pairCreator, import_eth_wallet18.Utils.toString(params.tradeFee), import_eth_wallet18.Utils.toString(params.protocolFee), import_eth_wallet18.Utils.toString(params.feePerDelegator), params.protocolFeeTo);
  }
  parseOracleAddedEvent(receipt) {
    let events = this.parseEvents(receipt, "OracleAdded");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        oracle: result.oracle
      };
    });
  }
  parseOracleScoresEvent(receipt) {
    let events = this.parseEvents(receipt, "OracleScores");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        oracle: result.oracle,
        score: new import_eth_wallet18.BigNumber(result.score)
      };
    });
  }
  parseOwnershipTransferredEvent(receipt) {
    let events = this.parseEvents(receipt, "OwnershipTransferred");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        previousOwner: result.previousOwner,
        newOwner: result.newOwner
      };
    });
  }
  parsePairCreatedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairCreated");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        pair: result.pair,
        newSize: new import_eth_wallet18.BigNumber(result.newSize)
      };
    });
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  parseParamSet2Event(receipt) {
    let events = this.parseEvents(receipt, "ParamSet2");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value1: result.value1,
        value2: result.value2
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseWhitelistedEvent(receipt) {
    let events = this.parseEvents(receipt, "Whitelisted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        who: result.who,
        allow: result.allow
      };
    });
  }
  async addOldOracleToNewPair(params) {
    let result = await this.methods("addOldOracleToNewPair", params.tokenA, params.tokenB, params.oracle);
    return result;
  }
  async allPairs(param1) {
    let result = await this.methods("allPairs", import_eth_wallet18.Utils.toString(param1));
    return result;
  }
  async allPairsLength() {
    let result = await this.methods("allPairsLength");
    return new import_eth_wallet18.BigNumber(result);
  }
  async allWhiteListed() {
    let result = await this.methods("allWhiteListed");
    return {
      list: result.list,
      allowed: result.allowed
    };
  }
  async checkAndGetOracle(params) {
    let result = await this.methods("checkAndGetOracle", params.tokenA, params.tokenB);
    return result;
  }
  async checkAndGetOracleSwapParams(params) {
    let result = await this.methods("checkAndGetOracleSwapParams", params.tokenA, params.tokenB);
    return {
      oracle_: result.oracle_,
      tradeFee_: new import_eth_wallet18.BigNumber(result.tradeFee_),
      protocolFee_: new import_eth_wallet18.BigNumber(result.protocolFee_)
    };
  }
  async createPair(params) {
    let result = await this.methods("createPair", params.tokenA, params.tokenB);
    return result;
  }
  async feePerDelegator() {
    let result = await this.methods("feePerDelegator");
    return new import_eth_wallet18.BigNumber(result);
  }
  async getPair(params) {
    let result = await this.methods("getPair", params.param1, params.param2);
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async isOracle(param1) {
    let result = await this.methods("isOracle", param1);
    return result;
  }
  async isWhitelisted(param1) {
    let result = await this.methods("isWhitelisted", param1);
    return result;
  }
  async minLotSize(param1) {
    let result = await this.methods("minLotSize", param1);
    return new import_eth_wallet18.BigNumber(result);
  }
  async minOracleScore() {
    let result = await this.methods("minOracleScore");
    return new import_eth_wallet18.BigNumber(result);
  }
  async oracleLiquidityProvider() {
    let result = await this.methods("oracleLiquidityProvider");
    return result;
  }
  async oracleScores(param1) {
    let result = await this.methods("oracleScores", param1);
    return new import_eth_wallet18.BigNumber(result);
  }
  async oracles(params) {
    let result = await this.methods("oracles", params.param1, params.param2);
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async pairCreator() {
    let result = await this.methods("pairCreator");
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet18.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async renounceOwnership() {
    let result = await this.methods("renounceOwnership");
    return result;
  }
  async securityScoreOracle() {
    let result = await this.methods("securityScoreOracle");
    return result;
  }
  async setFeePerDelegator(feePerDelegator) {
    let result = await this.methods("setFeePerDelegator", import_eth_wallet18.Utils.toString(feePerDelegator));
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
  async setMinLotSize(params) {
    let result = await this.methods("setMinLotSize", params.token, import_eth_wallet18.Utils.toString(params.minLotSize));
    return result;
  }
  async setOracle(params) {
    let result = await this.methods("setOracle", params.tokenA, params.tokenB, params.oracle);
    return result;
  }
  async setOracleLiquidityProvider(params) {
    let result = await this.methods("setOracleLiquidityProvider", params.oracleRouter, params.oracleLiquidityProvider);
    return result;
  }
  async setProtocolFee(protocolFee) {
    let result = await this.methods("setProtocolFee", import_eth_wallet18.Utils.toString(protocolFee));
    return result;
  }
  async setProtocolFeeTo(protocolFeeTo) {
    let result = await this.methods("setProtocolFeeTo", protocolFeeTo);
    return result;
  }
  async setSecurityScoreOracle(params) {
    let result = await this.methods("setSecurityScoreOracle", params.securityScoreOracle, import_eth_wallet18.Utils.toString(params.minOracleScore));
    return result;
  }
  async setTradeFee(tradeFee) {
    let result = await this.methods("setTradeFee", import_eth_wallet18.Utils.toString(tradeFee));
    return result;
  }
  async setWhiteList(params) {
    let result = await this.methods("setWhiteList", params.who, params.allow);
    return result;
  }
  async tradeFee() {
    let result = await this.methods("tradeFee");
    return new import_eth_wallet18.BigNumber(result);
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async updateOracleScore(oracle) {
    let result = await this.methods("updateOracleScore", oracle);
    return result;
  }
  async whitelisted(param1) {
    let result = await this.methods("whitelisted", import_eth_wallet18.Utils.toString(param1));
    return result;
  }
  async whitelistedInv(param1) {
    let result = await this.methods("whitelistedInv", param1);
    return new import_eth_wallet18.BigNumber(result);
  }
  async whitelistedLength() {
    let result = await this.methods("whitelistedLength");
    return new import_eth_wallet18.BigNumber(result);
  }
};

// src/contracts/oracle/OSWAP_OracleLiquidityProvider.ts
var import_eth_wallet19 = __toModule(require("@ijstech/eth-wallet"));
var Bin19 = require_OSWAP_OracleLiquidityProvider();
var OSWAP_OracleLiquidityProvider = class extends import_eth_wallet19.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin19.abi, Bin19.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.tokenA, params.tokenB, params.addingTokenA, import_eth_wallet19.Utils.toString(params.staked), import_eth_wallet19.Utils.toString(params.afterIndex), import_eth_wallet19.Utils.toString(params.amountIn), import_eth_wallet19.Utils.toString(params.expire), params.enable, import_eth_wallet19.Utils.toString(params.deadline));
    return result;
  }
  async addLiquidityETH(params, _value) {
    let result = await this.methods("addLiquidityETH", params.tokenA, params.addingTokenA, import_eth_wallet19.Utils.toString(params.staked), import_eth_wallet19.Utils.toString(params.afterIndex), import_eth_wallet19.Utils.toString(params.amountAIn), import_eth_wallet19.Utils.toString(params.expire), params.enable, import_eth_wallet19.Utils.toString(params.deadline), _value);
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async removeAllLiquidity(params) {
    let result = await this.methods("removeAllLiquidity", params.tokenA, params.tokenB, params.to, import_eth_wallet19.Utils.toString(params.deadline));
    return result;
  }
  async removeAllLiquidityETH(params) {
    let result = await this.methods("removeAllLiquidityETH", params.tokenA, params.to, import_eth_wallet19.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.tokenA, params.tokenB, params.removingTokenA, params.to, import_eth_wallet19.Utils.toString(params.unstake), import_eth_wallet19.Utils.toString(params.afterIndex), import_eth_wallet19.Utils.toString(params.amountOut), import_eth_wallet19.Utils.toString(params.reserveOut), import_eth_wallet19.Utils.toString(params.expire), params.enable, import_eth_wallet19.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETH(params) {
    let result = await this.methods("removeLiquidityETH", params.tokenA, params.removingTokenA, params.to, import_eth_wallet19.Utils.toString(params.unstake), import_eth_wallet19.Utils.toString(params.afterIndex), import_eth_wallet19.Utils.toString(params.amountOut), import_eth_wallet19.Utils.toString(params.reserveOut), import_eth_wallet19.Utils.toString(params.expire), params.enable, import_eth_wallet19.Utils.toString(params.deadline));
    return result;
  }
};

// src/contracts/oracle/OSWAP_OraclePair.ts
var import_eth_wallet20 = __toModule(require("@ijstech/eth-wallet"));
var Bin20 = require_OSWAP_OraclePair();
var OSWAP_OraclePair = class extends import_eth_wallet20.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin20.abi, Bin20.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseAddLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "AddLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        staked: new import_eth_wallet20.BigNumber(result.staked),
        amount: new import_eth_wallet20.BigNumber(result.amount),
        newStakeBalance: new import_eth_wallet20.BigNumber(result.newStakeBalance),
        newAmountBalance: new import_eth_wallet20.BigNumber(result.newAmountBalance),
        expire: new import_eth_wallet20.BigNumber(result.expire),
        enable: result.enable
      };
    });
  }
  parseDelegatorPauseOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "DelegatorPauseOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        delegator: result.delegator,
        provider: result.provider,
        direction: result.direction
      };
    });
  }
  parseDelegatorResumeOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "DelegatorResumeOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        delegator: result.delegator,
        provider: result.provider,
        direction: result.direction
      };
    });
  }
  parseNewProviderEvent(receipt) {
    let events = this.parseEvents(receipt, "NewProvider");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        index: new import_eth_wallet20.BigNumber(result.index)
      };
    });
  }
  parseRemoveLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        unstake: new import_eth_wallet20.BigNumber(result.unstake),
        amountOut: new import_eth_wallet20.BigNumber(result.amountOut),
        reserveOut: new import_eth_wallet20.BigNumber(result.reserveOut),
        newStakeBalance: new import_eth_wallet20.BigNumber(result.newStakeBalance),
        newAmountBalance: new import_eth_wallet20.BigNumber(result.newAmountBalance),
        newReserveBalance: new import_eth_wallet20.BigNumber(result.newReserveBalance),
        expire: new import_eth_wallet20.BigNumber(result.expire),
        enable: result.enable
      };
    });
  }
  parseReplenishEvent(receipt) {
    let events = this.parseEvents(receipt, "Replenish");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        amountIn: new import_eth_wallet20.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet20.BigNumber(result.newAmountBalance),
        newReserveBalance: new import_eth_wallet20.BigNumber(result.newReserveBalance),
        expire: new import_eth_wallet20.BigNumber(result.expire)
      };
    });
  }
  parseSetDelegatorEvent(receipt) {
    let events = this.parseEvents(receipt, "SetDelegator");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        delegator: result.delegator
      };
    });
  }
  parseSwapEvent(receipt) {
    let events = this.parseEvents(receipt, "Swap");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        to: result.to,
        direction: result.direction,
        price: new import_eth_wallet20.BigNumber(result.price),
        amountIn: new import_eth_wallet20.BigNumber(result.amountIn),
        amountOut: new import_eth_wallet20.BigNumber(result.amountOut),
        tradeFee: new import_eth_wallet20.BigNumber(result.tradeFee),
        protocolFee: new import_eth_wallet20.BigNumber(result.protocolFee)
      };
    });
  }
  parseSwappedOneProviderEvent(receipt) {
    let events = this.parseEvents(receipt, "SwappedOneProvider");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        amountOut: new import_eth_wallet20.BigNumber(result.amountOut),
        amountIn: new import_eth_wallet20.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet20.BigNumber(result.newAmountBalance),
        newCounterReserveBalance: new import_eth_wallet20.BigNumber(result.newCounterReserveBalance)
      };
    });
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.provider, params.direction, import_eth_wallet20.Utils.toString(params.staked), import_eth_wallet20.Utils.toString(params.afterIndex), import_eth_wallet20.Utils.toString(params.expire), params.enable);
    return result;
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet20.BigNumber(result);
  }
  async delegator(param1) {
    let result = await this.methods("delegator", param1);
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async feeBalance() {
    let result = await this.methods("feeBalance");
    return new import_eth_wallet20.BigNumber(result);
  }
  async findPosition(params) {
    let result = await this.methods("findPosition", params.direction, import_eth_wallet20.Utils.toString(params.staked), import_eth_wallet20.Utils.toString(params.afterIndex));
    return {
      afterIndex: new import_eth_wallet20.BigNumber(result.afterIndex),
      nextIndex: new import_eth_wallet20.BigNumber(result.nextIndex)
    };
  }
  async first(param1) {
    let result = await this.methods("first", param1);
    return new import_eth_wallet20.BigNumber(result);
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", params.tokenOut, import_eth_wallet20.Utils.toString(params.amountOut), params.data);
    return new import_eth_wallet20.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", params.tokenIn, import_eth_wallet20.Utils.toString(params.amountIn), params.data);
    return new import_eth_wallet20.BigNumber(result);
  }
  async getBalances() {
    let result = await this.methods("getBalances");
    return {
      param1: new import_eth_wallet20.BigNumber(result[0]),
      param2: new import_eth_wallet20.BigNumber(result[1]),
      param3: new import_eth_wallet20.BigNumber(result[2])
    };
  }
  async getLastBalances() {
    let result = await this.methods("getLastBalances");
    return {
      param1: new import_eth_wallet20.BigNumber(result[0]),
      param2: new import_eth_wallet20.BigNumber(result[1])
    };
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.direction, params.payload);
    return new import_eth_wallet20.BigNumber(result);
  }
  async getProviderOffer(params) {
    let result = await this.methods("getProviderOffer", params.provider, params.direction);
    return {
      index: new import_eth_wallet20.BigNumber(result.index),
      staked: new import_eth_wallet20.BigNumber(result.staked),
      amount: new import_eth_wallet20.BigNumber(result.amount),
      reserve: new import_eth_wallet20.BigNumber(result.reserve),
      expire: new import_eth_wallet20.BigNumber(result.expire),
      privateReplenish: result.privateReplenish
    };
  }
  async getQueue(params) {
    let result = await this.methods("getQueue", params.direction, import_eth_wallet20.Utils.toString(params.start), import_eth_wallet20.Utils.toString(params.end));
    return {
      index: result.index.map((e) => new import_eth_wallet20.BigNumber(e)),
      provider: result.provider,
      amount: result.amount.map((e) => new import_eth_wallet20.BigNumber(e)),
      staked: result.staked.map((e) => new import_eth_wallet20.BigNumber(e)),
      expire: result.expire.map((e) => new import_eth_wallet20.BigNumber(e))
    };
  }
  async getQueueFromIndex(params) {
    let result = await this.methods("getQueueFromIndex", params.direction, import_eth_wallet20.Utils.toString(params.from), import_eth_wallet20.Utils.toString(params.count));
    return {
      index: result.index.map((e) => new import_eth_wallet20.BigNumber(e)),
      provider: result.provider,
      amount: result.amount.map((e) => new import_eth_wallet20.BigNumber(e)),
      staked: result.staked.map((e) => new import_eth_wallet20.BigNumber(e)),
      expire: result.expire.map((e) => new import_eth_wallet20.BigNumber(e))
    };
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async initialize(params) {
    let result = await this.methods("initialize", params.token0, params.token1);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async lastGovBalance() {
    let result = await this.methods("lastGovBalance");
    return new import_eth_wallet20.BigNumber(result);
  }
  async lastToken0Balance() {
    let result = await this.methods("lastToken0Balance");
    return new import_eth_wallet20.BigNumber(result);
  }
  async lastToken1Balance() {
    let result = await this.methods("lastToken1Balance");
    return new import_eth_wallet20.BigNumber(result);
  }
  async offers(params) {
    let result = await this.methods("offers", params.param1, import_eth_wallet20.Utils.toString(params.param2));
    return {
      provider: result.provider,
      staked: new import_eth_wallet20.BigNumber(result.staked),
      amount: new import_eth_wallet20.BigNumber(result.amount),
      reserve: new import_eth_wallet20.BigNumber(result.reserve),
      expire: new import_eth_wallet20.BigNumber(result.expire),
      privateReplenish: result.privateReplenish,
      isActive: result.isActive,
      enabled: result.enabled,
      prev: new import_eth_wallet20.BigNumber(result.prev),
      next: new import_eth_wallet20.BigNumber(result.next)
    };
  }
  async oracleLiquidityProvider() {
    let result = await this.methods("oracleLiquidityProvider");
    return result;
  }
  async pauseOffer(params) {
    let result = await this.methods("pauseOffer", params.provider, params.direction);
    return result;
  }
  async protocolFeeBalance0() {
    let result = await this.methods("protocolFeeBalance0");
    return new import_eth_wallet20.BigNumber(result);
  }
  async protocolFeeBalance1() {
    let result = await this.methods("protocolFeeBalance1");
    return new import_eth_wallet20.BigNumber(result);
  }
  async providerOfferIndex(param1) {
    let result = await this.methods("providerOfferIndex", param1);
    return new import_eth_wallet20.BigNumber(result);
  }
  async purgeExpire(params) {
    let result = await this.methods("purgeExpire", params.direction, import_eth_wallet20.Utils.toString(params.startingIndex), import_eth_wallet20.Utils.toString(params.limit));
    return result;
  }
  async queueSize(param1) {
    let result = await this.methods("queueSize", param1);
    return new import_eth_wallet20.BigNumber(result);
  }
  async redeemProtocolFee() {
    let result = await this.methods("redeemProtocolFee");
    return result;
  }
  async removeAllLiquidity(provider) {
    let result = await this.methods("removeAllLiquidity", provider);
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.provider, params.direction, import_eth_wallet20.Utils.toString(params.unstake), import_eth_wallet20.Utils.toString(params.afterIndex), import_eth_wallet20.Utils.toString(params.amountOut), import_eth_wallet20.Utils.toString(params.reserveOut), import_eth_wallet20.Utils.toString(params.expire), params.enable);
    return result;
  }
  async replenish(params) {
    let result = await this.methods("replenish", params.provider, params.direction, import_eth_wallet20.Utils.toString(params.afterIndex), import_eth_wallet20.Utils.toString(params.amountIn), import_eth_wallet20.Utils.toString(params.expire));
    return result;
  }
  async resumeOffer(params) {
    let result = await this.methods("resumeOffer", params.provider, params.direction, import_eth_wallet20.Utils.toString(params.afterIndex));
    return result;
  }
  async scaleDirection() {
    let result = await this.methods("scaleDirection");
    return result;
  }
  async scaler() {
    let result = await this.methods("scaler");
    return new import_eth_wallet20.BigNumber(result);
  }
  async setDelegator(params) {
    let result = await this.methods("setDelegator", params.delegator, import_eth_wallet20.Utils.toString(params.fee));
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setPrivateReplenish(replenish) {
    let result = await this.methods("setPrivateReplenish", replenish);
    return result;
  }
  async stakeBalance() {
    let result = await this.methods("stakeBalance");
    return new import_eth_wallet20.BigNumber(result);
  }
  async swap(params) {
    let result = await this.methods("swap", import_eth_wallet20.Utils.toString(params.amount0Out), import_eth_wallet20.Utils.toString(params.amount1Out), params.to, params.data);
    return result;
  }
  async sync() {
    let result = await this.methods("sync");
    return result;
  }
  async token0() {
    let result = await this.methods("token0");
    return result;
  }
  async token1() {
    let result = await this.methods("token1");
    return result;
  }
};

// src/contracts/oracle/OSWAP_OraclePairCreator.ts
var import_eth_wallet21 = __toModule(require("@ijstech/eth-wallet"));
var Bin21 = require_OSWAP_OraclePairCreator();
var OSWAP_OraclePairCreator = class extends import_eth_wallet21.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin21.abi, Bin21.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async createPair(salt) {
    let result = await this.methods("createPair", import_eth_wallet21.Utils.stringToBytes32(salt));
    return result;
  }
};

// src/contracts/oracle/OSWAP_VotingExecutor2.ts
var import_eth_wallet22 = __toModule(require("@ijstech/eth-wallet"));
var Bin22 = require_OSWAP_VotingExecutor2();
var OSWAP_VotingExecutor2 = class extends import_eth_wallet22.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin22.abi, Bin22.bytecode);
  }
  deploy(factory) {
    return this._deploy(factory);
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet22.Utils.stringToBytes32(params));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
};

// src/contracts/range/OSWAP_RangeFactory.ts
var import_eth_wallet23 = __toModule(require("@ijstech/eth-wallet"));
var Bin23 = require_OSWAP_RangeFactory();
var OSWAP_RangeFactory = class extends import_eth_wallet23.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin23.abi, Bin23.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.oracleFactory, params.pairCreator, import_eth_wallet23.Utils.toString(params.tradeFee), import_eth_wallet23.Utils.toString(params.stakeAmount), import_eth_wallet23.Utils.toString(params.liquidityProviderShare), params.protocolFeeTo);
  }
  parseOwnershipTransferredEvent(receipt) {
    let events = this.parseEvents(receipt, "OwnershipTransferred");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        previousOwner: result.previousOwner,
        newOwner: result.newOwner
      };
    });
  }
  parsePairCreatedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairCreated");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        pair: result.pair,
        newSize: new import_eth_wallet23.BigNumber(result.newSize)
      };
    });
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  parseParamSet2Event(receipt) {
    let events = this.parseEvents(receipt, "ParamSet2");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value1: result.value1,
        value2: result.value2
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  async allPairs(param1) {
    let result = await this.methods("allPairs", import_eth_wallet23.Utils.toString(param1));
    return result;
  }
  async allPairsLength() {
    let result = await this.methods("allPairsLength");
    return new import_eth_wallet23.BigNumber(result);
  }
  async checkAndGetSwapParams() {
    let result = await this.methods("checkAndGetSwapParams");
    return new import_eth_wallet23.BigNumber(result);
  }
  async createPair(params) {
    let result = await this.methods("createPair", params.tokenA, params.tokenB);
    return result;
  }
  async getAllLiquidityProviderShare() {
    let result = await this.methods("getAllLiquidityProviderShare");
    return {
      _stakeAmount: result._stakeAmount.map((e) => new import_eth_wallet23.BigNumber(e)),
      _liquidityProviderShare: result._liquidityProviderShare.map((e) => new import_eth_wallet23.BigNumber(e))
    };
  }
  async getCreateAddresses() {
    let result = await this.methods("getCreateAddresses");
    return {
      _governance: result._governance,
      _rangeLiquidityProvider: result._rangeLiquidityProvider,
      _oracleFactory: result._oracleFactory
    };
  }
  async getLiquidityProviderShare(stake) {
    let result = await this.methods("getLiquidityProviderShare", import_eth_wallet23.Utils.toString(stake));
    return new import_eth_wallet23.BigNumber(result);
  }
  async getPair(params) {
    let result = await this.methods("getPair", params.param1, params.param2);
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async liquidityProviderShare(param1) {
    let result = await this.methods("liquidityProviderShare", import_eth_wallet23.Utils.toString(param1));
    return new import_eth_wallet23.BigNumber(result);
  }
  async oracleFactory() {
    let result = await this.methods("oracleFactory");
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async pairCreator() {
    let result = await this.methods("pairCreator");
    return result;
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async rangeLiquidityProvider() {
    let result = await this.methods("rangeLiquidityProvider");
    return result;
  }
  async renounceOwnership() {
    let result = await this.methods("renounceOwnership");
    return result;
  }
  async setLiquidityProviderShare(params) {
    let result = await this.methods("setLiquidityProviderShare", import_eth_wallet23.Utils.toString(params.stakeAmount), import_eth_wallet23.Utils.toString(params.liquidityProviderShare));
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
  async setProtocolFeeTo(protocolFeeTo) {
    let result = await this.methods("setProtocolFeeTo", protocolFeeTo);
    return result;
  }
  async setRangeLiquidityProvider(rangeLiquidityProvider) {
    let result = await this.methods("setRangeLiquidityProvider", rangeLiquidityProvider);
    return result;
  }
  async setTradeFee(tradeFee) {
    let result = await this.methods("setTradeFee", import_eth_wallet23.Utils.toString(tradeFee));
    return result;
  }
  async stakeAmount(param1) {
    let result = await this.methods("stakeAmount", import_eth_wallet23.Utils.toString(param1));
    return new import_eth_wallet23.BigNumber(result);
  }
  async tradeFee() {
    let result = await this.methods("tradeFee");
    return new import_eth_wallet23.BigNumber(result);
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
};

// src/contracts/range/OSWAP_RangeLiquidityProvider.ts
var import_eth_wallet24 = __toModule(require("@ijstech/eth-wallet"));
var Bin24 = require_OSWAP_RangeLiquidityProvider();
var OSWAP_RangeLiquidityProvider = class extends import_eth_wallet24.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin24.abi, Bin24.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.tokenA, params.tokenB, params.addingTokenA, import_eth_wallet24.Utils.toString(params.staked), import_eth_wallet24.Utils.toString(params.amountIn), import_eth_wallet24.Utils.toString(params.lowerLimit), import_eth_wallet24.Utils.toString(params.upperLimit), import_eth_wallet24.Utils.toString(params.startDate), import_eth_wallet24.Utils.toString(params.expire), import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
  async addLiquidityETH(params, _value) {
    let result = await this.methods("addLiquidityETH", params.tokenA, params.addingTokenA, import_eth_wallet24.Utils.toString(params.staked), import_eth_wallet24.Utils.toString(params.amountAIn), import_eth_wallet24.Utils.toString(params.lowerLimit), import_eth_wallet24.Utils.toString(params.upperLimit), import_eth_wallet24.Utils.toString(params.startDate), import_eth_wallet24.Utils.toString(params.expire), import_eth_wallet24.Utils.toString(params.deadline), _value);
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async removeAllLiquidity(params) {
    let result = await this.methods("removeAllLiquidity", params.tokenA, params.tokenB, params.to, import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
  async removeAllLiquidityETH(params) {
    let result = await this.methods("removeAllLiquidityETH", params.tokenA, params.to, import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.tokenA, params.tokenB, params.removingTokenA, params.to, import_eth_wallet24.Utils.toString(params.unstake), import_eth_wallet24.Utils.toString(params.amountOut), import_eth_wallet24.Utils.toString(params.reserveOut), import_eth_wallet24.Utils.toString(params.lowerLimit), import_eth_wallet24.Utils.toString(params.upperLimit), import_eth_wallet24.Utils.toString(params.startDate), import_eth_wallet24.Utils.toString(params.expire), import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETH(params) {
    let result = await this.methods("removeLiquidityETH", params.tokenA, params.removingTokenA, params.to, import_eth_wallet24.Utils.toString(params.unstake), import_eth_wallet24.Utils.toString(params.amountOut), import_eth_wallet24.Utils.toString(params.reserveOut), import_eth_wallet24.Utils.toString(params.lowerLimit), import_eth_wallet24.Utils.toString(params.upperLimit), import_eth_wallet24.Utils.toString(params.startDate), import_eth_wallet24.Utils.toString(params.expire), import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
  async updateProviderOffer(params) {
    let result = await this.methods("updateProviderOffer", params.tokenA, params.tokenB, import_eth_wallet24.Utils.toString(params.replenishAmount), import_eth_wallet24.Utils.toString(params.lowerLimit), import_eth_wallet24.Utils.toString(params.upperLimit), import_eth_wallet24.Utils.toString(params.startDate), import_eth_wallet24.Utils.toString(params.expire), params.privateReplenish, import_eth_wallet24.Utils.toString(params.deadline));
    return result;
  }
};

// src/contracts/range/OSWAP_RangePair.ts
var import_eth_wallet25 = __toModule(require("@ijstech/eth-wallet"));
var Bin25 = require_OSWAP_RangePair();
var OSWAP_RangePair = class extends import_eth_wallet25.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin25.abi, Bin25.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseAddLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "AddLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        staked: new import_eth_wallet25.BigNumber(result.staked),
        amount: new import_eth_wallet25.BigNumber(result.amount),
        newStakeBalance: new import_eth_wallet25.BigNumber(result.newStakeBalance),
        newAmountBalance: new import_eth_wallet25.BigNumber(result.newAmountBalance),
        lowerLimit: new import_eth_wallet25.BigNumber(result.lowerLimit),
        upperLimit: new import_eth_wallet25.BigNumber(result.upperLimit),
        startDate: new import_eth_wallet25.BigNumber(result.startDate),
        expire: new import_eth_wallet25.BigNumber(result.expire)
      };
    });
  }
  parseNewProviderEvent(receipt) {
    let events = this.parseEvents(receipt, "NewProvider");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        index: new import_eth_wallet25.BigNumber(result.index)
      };
    });
  }
  parseRemoveAllLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveAllLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        unstake: new import_eth_wallet25.BigNumber(result.unstake),
        amount0Out: new import_eth_wallet25.BigNumber(result.amount0Out),
        amount1Out: new import_eth_wallet25.BigNumber(result.amount1Out)
      };
    });
  }
  parseRemoveLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        unstake: new import_eth_wallet25.BigNumber(result.unstake),
        amountOut: new import_eth_wallet25.BigNumber(result.amountOut),
        reserveOut: new import_eth_wallet25.BigNumber(result.reserveOut),
        newStakeBalance: new import_eth_wallet25.BigNumber(result.newStakeBalance),
        newAmountBalance: new import_eth_wallet25.BigNumber(result.newAmountBalance),
        newReserveBalance: new import_eth_wallet25.BigNumber(result.newReserveBalance),
        lowerLimit: new import_eth_wallet25.BigNumber(result.lowerLimit),
        upperLimit: new import_eth_wallet25.BigNumber(result.upperLimit),
        startDate: new import_eth_wallet25.BigNumber(result.startDate),
        expire: new import_eth_wallet25.BigNumber(result.expire)
      };
    });
  }
  parseReplenishEvent(receipt) {
    let events = this.parseEvents(receipt, "Replenish");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        amountIn: new import_eth_wallet25.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet25.BigNumber(result.newAmountBalance),
        newReserveBalance: new import_eth_wallet25.BigNumber(result.newReserveBalance)
      };
    });
  }
  parseSwapEvent(receipt) {
    let events = this.parseEvents(receipt, "Swap");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        to: result.to,
        direction: result.direction,
        price: new import_eth_wallet25.BigNumber(result.price),
        amountIn: new import_eth_wallet25.BigNumber(result.amountIn),
        amountOut: new import_eth_wallet25.BigNumber(result.amountOut),
        tradeFee: new import_eth_wallet25.BigNumber(result.tradeFee),
        protocolFee: new import_eth_wallet25.BigNumber(result.protocolFee)
      };
    });
  }
  parseSwappedOneProviderEvent(receipt) {
    let events = this.parseEvents(receipt, "SwappedOneProvider");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        amountOut: new import_eth_wallet25.BigNumber(result.amountOut),
        amountIn: new import_eth_wallet25.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet25.BigNumber(result.newAmountBalance),
        newCounterReserveBalance: new import_eth_wallet25.BigNumber(result.newCounterReserveBalance)
      };
    });
  }
  parseUpdateProviderOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "UpdateProviderOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        replenish: new import_eth_wallet25.BigNumber(result.replenish),
        newAmountBalance: new import_eth_wallet25.BigNumber(result.newAmountBalance),
        newReserveBalance: new import_eth_wallet25.BigNumber(result.newReserveBalance),
        lowerLimit: new import_eth_wallet25.BigNumber(result.lowerLimit),
        upperLimit: new import_eth_wallet25.BigNumber(result.upperLimit),
        startDate: new import_eth_wallet25.BigNumber(result.startDate),
        expire: new import_eth_wallet25.BigNumber(result.expire),
        privateReplenish: result.privateReplenish
      };
    });
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.provider, params.direction, import_eth_wallet25.Utils.toString(params.staked), import_eth_wallet25.Utils.toString(params.lowerLimit), import_eth_wallet25.Utils.toString(params.upperLimit), import_eth_wallet25.Utils.toString(params.startDate), import_eth_wallet25.Utils.toString(params.expire));
    return result;
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet25.BigNumber(result);
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", params.tokenOut, import_eth_wallet25.Utils.toString(params.amountOut), params.data);
    return new import_eth_wallet25.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", params.tokenIn, import_eth_wallet25.Utils.toString(params.amountIn), params.data);
    return new import_eth_wallet25.BigNumber(result);
  }
  async getBalances() {
    let result = await this.methods("getBalances");
    return {
      param1: new import_eth_wallet25.BigNumber(result[0]),
      param2: new import_eth_wallet25.BigNumber(result[1]),
      param3: new import_eth_wallet25.BigNumber(result[2])
    };
  }
  async getLastBalances() {
    let result = await this.methods("getLastBalances");
    return {
      param1: new import_eth_wallet25.BigNumber(result[0]),
      param2: new import_eth_wallet25.BigNumber(result[1])
    };
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.direction, params.payload);
    return new import_eth_wallet25.BigNumber(result);
  }
  async getOffers(params) {
    let result = await this.methods("getOffers", params.direction, import_eth_wallet25.Utils.toString(params.start), import_eth_wallet25.Utils.toString(params.end));
    return {
      provider: result.provider,
      amountAndReserve: result.amountAndReserve.map((e) => new import_eth_wallet25.BigNumber(e)),
      lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map((e) => new import_eth_wallet25.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet25.BigNumber(e)),
      privateReplenish: result.privateReplenish
    };
  }
  async getProviderOffer(params) {
    let result = await this.methods("getProviderOffer", params.provider, params.direction);
    return {
      index: new import_eth_wallet25.BigNumber(result.index),
      staked: new import_eth_wallet25.BigNumber(result.staked),
      amount: new import_eth_wallet25.BigNumber(result.amount),
      reserve: new import_eth_wallet25.BigNumber(result.reserve),
      lowerLimit: new import_eth_wallet25.BigNumber(result.lowerLimit),
      upperLimit: new import_eth_wallet25.BigNumber(result.upperLimit),
      startDate: new import_eth_wallet25.BigNumber(result.startDate),
      expire: new import_eth_wallet25.BigNumber(result.expire),
      privateReplenish: result.privateReplenish
    };
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async initialize(params) {
    let result = await this.methods("initialize", params.token0, params.token1);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async lastGovBalance() {
    let result = await this.methods("lastGovBalance");
    return new import_eth_wallet25.BigNumber(result);
  }
  async lastToken0Balance() {
    let result = await this.methods("lastToken0Balance");
    return new import_eth_wallet25.BigNumber(result);
  }
  async lastToken1Balance() {
    let result = await this.methods("lastToken1Balance");
    return new import_eth_wallet25.BigNumber(result);
  }
  async offers(params) {
    let result = await this.methods("offers", params.param1, import_eth_wallet25.Utils.toString(params.param2));
    return {
      provider: result.provider,
      amount: new import_eth_wallet25.BigNumber(result.amount),
      reserve: new import_eth_wallet25.BigNumber(result.reserve),
      lowerLimit: new import_eth_wallet25.BigNumber(result.lowerLimit),
      upperLimit: new import_eth_wallet25.BigNumber(result.upperLimit),
      startDate: new import_eth_wallet25.BigNumber(result.startDate),
      expire: new import_eth_wallet25.BigNumber(result.expire),
      privateReplenish: result.privateReplenish
    };
  }
  async oracleFactory() {
    let result = await this.methods("oracleFactory");
    return result;
  }
  async protocolFeeBalance0() {
    let result = await this.methods("protocolFeeBalance0");
    return new import_eth_wallet25.BigNumber(result);
  }
  async protocolFeeBalance1() {
    let result = await this.methods("protocolFeeBalance1");
    return new import_eth_wallet25.BigNumber(result);
  }
  async providerOfferIndex(param1) {
    let result = await this.methods("providerOfferIndex", param1);
    return new import_eth_wallet25.BigNumber(result);
  }
  async providerStaking(param1) {
    let result = await this.methods("providerStaking", param1);
    return new import_eth_wallet25.BigNumber(result);
  }
  async rangeLiquidityProvider() {
    let result = await this.methods("rangeLiquidityProvider");
    return result;
  }
  async redeemProtocolFee() {
    let result = await this.methods("redeemProtocolFee");
    return result;
  }
  async removeAllLiquidity(provider) {
    let result = await this.methods("removeAllLiquidity", provider);
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.provider, params.direction, import_eth_wallet25.Utils.toString(params.unstake), import_eth_wallet25.Utils.toString(params.amountOut), import_eth_wallet25.Utils.toString(params.reserveOut), import_eth_wallet25.Utils.toString(params.lowerLimit), import_eth_wallet25.Utils.toString(params.upperLimit), import_eth_wallet25.Utils.toString(params.startDate), import_eth_wallet25.Utils.toString(params.expire));
    return result;
  }
  async replenish(params) {
    let result = await this.methods("replenish", params.provider, params.direction, import_eth_wallet25.Utils.toString(params.amountIn));
    return result;
  }
  async scaleDirection() {
    let result = await this.methods("scaleDirection");
    return result;
  }
  async scaler() {
    let result = await this.methods("scaler");
    return new import_eth_wallet25.BigNumber(result);
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async stakeBalance() {
    let result = await this.methods("stakeBalance");
    return new import_eth_wallet25.BigNumber(result);
  }
  async swap(params) {
    let result = await this.methods("swap", import_eth_wallet25.Utils.toString(params.amount0Out), import_eth_wallet25.Utils.toString(params.amount1Out), params.to, params.data);
    return result;
  }
  async sync() {
    let result = await this.methods("sync");
    return result;
  }
  async token0() {
    let result = await this.methods("token0");
    return result;
  }
  async token1() {
    let result = await this.methods("token1");
    return result;
  }
  async updateProviderOffer(params) {
    let result = await this.methods("updateProviderOffer", params.provider, params.direction, import_eth_wallet25.Utils.toString(params.replenishAmount), import_eth_wallet25.Utils.toString(params.lowerLimit), import_eth_wallet25.Utils.toString(params.upperLimit), import_eth_wallet25.Utils.toString(params.startDate), import_eth_wallet25.Utils.toString(params.expire), params.privateReplenish);
    return result;
  }
};

// src/contracts/range/OSWAP_RangePairCreator.ts
var import_eth_wallet26 = __toModule(require("@ijstech/eth-wallet"));
var Bin26 = require_OSWAP_RangePairCreator();
var OSWAP_RangePairCreator = class extends import_eth_wallet26.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin26.abi, Bin26.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async createPair(salt) {
    let result = await this.methods("createPair", import_eth_wallet26.Utils.stringToBytes32(salt));
    return result;
  }
};

// src/contracts/range/OSWAP_VotingExecutor3.ts
var import_eth_wallet27 = __toModule(require("@ijstech/eth-wallet"));
var Bin27 = require_OSWAP_VotingExecutor3();
var OSWAP_VotingExecutor3 = class extends import_eth_wallet27.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin27.abi, Bin27.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.factory, params.hybridRegistry);
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet27.Utils.stringToBytes32(params));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async hybridRegistry() {
    let result = await this.methods("hybridRegistry");
    return result;
  }
};

// src/contracts/restricted/OSWAP_ConfigStore.ts
var import_eth_wallet28 = __toModule(require("@ijstech/eth-wallet"));
var Bin28 = require_OSWAP_ConfigStore();
var OSWAP_ConfigStore = class extends import_eth_wallet28.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin28.abi, Bin28.bytecode);
  }
  deploy(governance) {
    return this._deploy(governance);
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  async customParam(param1) {
    let result = await this.methods("customParam", import_eth_wallet28.Utils.stringToBytes32(param1));
    return result;
  }
  async customParamNames(param1) {
    let result = await this.methods("customParamNames", import_eth_wallet28.Utils.toString(param1));
    return result;
  }
  async customParamNamesIdx(param1) {
    let result = await this.methods("customParamNamesIdx", import_eth_wallet28.Utils.stringToBytes32(param1));
    return new import_eth_wallet28.BigNumber(result);
  }
  async customParamNamesLength() {
    let result = await this.methods("customParamNamesLength");
    return new import_eth_wallet28.BigNumber(result);
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async setCustomParam(params) {
    let result = await this.methods("setCustomParam", import_eth_wallet28.Utils.stringToBytes32(params.paramName), import_eth_wallet28.Utils.stringToBytes32(params.paramValue));
    return result;
  }
  async setMultiCustomParam(params) {
    let result = await this.methods("setMultiCustomParam", import_eth_wallet28.Utils.stringToBytes32(params.paramName), import_eth_wallet28.Utils.stringToBytes32(params.paramValue));
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedFactory.ts
var import_eth_wallet29 = __toModule(require("@ijstech/eth-wallet"));
var Bin29 = require_OSWAP_RestrictedFactory();
var OSWAP_RestrictedFactory = class extends import_eth_wallet29.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin29.abi, Bin29.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.whitelistFactory, params.pairCreator, params.configStore, import_eth_wallet29.Utils.toString(params.tradeFee), import_eth_wallet29.Utils.toString(params.protocolFee), params.protocolFeeTo);
  }
  parseOracleAddedEvent(receipt) {
    let events = this.parseEvents(receipt, "OracleAdded");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        oracle: result.oracle
      };
    });
  }
  parseOwnershipTransferredEvent(receipt) {
    let events = this.parseEvents(receipt, "OwnershipTransferred");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        previousOwner: result.previousOwner,
        newOwner: result.newOwner
      };
    });
  }
  parsePairCreatedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairCreated");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        token0: result.token0,
        token1: result.token1,
        pair: result.pair,
        newPairSize: new import_eth_wallet29.BigNumber(result.newPairSize),
        newSize: new import_eth_wallet29.BigNumber(result.newSize)
      };
    });
  }
  parsePairRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRestarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parsePairShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "PairShutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair
      };
    });
  }
  parseParamSetEvent(receipt) {
    let events = this.parseEvents(receipt, "ParamSet");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value: result.value
      };
    });
  }
  parseParamSet2Event(receipt) {
    let events = this.parseEvents(receipt, "ParamSet2");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        name: result.name,
        value1: result.value1,
        value2: result.value2
      };
    });
  }
  parseRestartedEvent(receipt) {
    let events = this.parseEvents(receipt, "Restarted");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  parseShutdownedEvent(receipt) {
    let events = this.parseEvents(receipt, "Shutdowned");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash
      };
    });
  }
  async addOldOracleToNewPair(params) {
    let result = await this.methods("addOldOracleToNewPair", params.tokenA, params.tokenB, params.oracle);
    return result;
  }
  async allPairs(param1) {
    let result = await this.methods("allPairs", import_eth_wallet29.Utils.toString(param1));
    return result;
  }
  async allPairsLength() {
    let result = await this.methods("allPairsLength");
    return new import_eth_wallet29.BigNumber(result);
  }
  async checkAndGetOracle(params) {
    let result = await this.methods("checkAndGetOracle", params.tokenA, params.tokenB);
    return result;
  }
  async checkAndGetOracleSwapParams(params) {
    let result = await this.methods("checkAndGetOracleSwapParams", params.tokenA, params.tokenB);
    return {
      oracle_: result.oracle_,
      tradeFee_: new import_eth_wallet29.BigNumber(result.tradeFee_),
      protocolFee_: new import_eth_wallet29.BigNumber(result.protocolFee_)
    };
  }
  async configStore() {
    let result = await this.methods("configStore");
    return result;
  }
  async createPair(params) {
    let result = await this.methods("createPair", params.tokenA, params.tokenB);
    return result;
  }
  async getCreateAddresses() {
    let result = await this.methods("getCreateAddresses");
    return {
      _governance: result._governance,
      _whitelistFactory: result._whitelistFactory,
      _restrictedLiquidityProvider: result._restrictedLiquidityProvider,
      _configStore: result._configStore
    };
  }
  async getPair(params) {
    let result = await this.methods("getPair", params.param1, params.param2, import_eth_wallet29.Utils.toString(params.param3));
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async init(restrictedLiquidityProvider) {
    let result = await this.methods("init", restrictedLiquidityProvider);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async isOracle(param1) {
    let result = await this.methods("isOracle", param1);
    return result;
  }
  async isPair(pair) {
    let result = await this.methods("isPair", pair);
    return result;
  }
  async oracles(params) {
    let result = await this.methods("oracles", params.param1, params.param2);
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async pairCreator() {
    let result = await this.methods("pairCreator");
    return result;
  }
  async pairIdx(param1) {
    let result = await this.methods("pairIdx", param1);
    return new import_eth_wallet29.BigNumber(result);
  }
  async pairLength(params) {
    let result = await this.methods("pairLength", params.tokenA, params.tokenB);
    return new import_eth_wallet29.BigNumber(result);
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet29.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async renounceOwnership() {
    let result = await this.methods("renounceOwnership");
    return result;
  }
  async restrictedLiquidityProvider() {
    let result = await this.methods("restrictedLiquidityProvider");
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setLiveForPair(params) {
    let result = await this.methods("setLiveForPair", params.pair, params.live);
    return result;
  }
  async setOracle(params) {
    let result = await this.methods("setOracle", params.tokenA, params.tokenB, params.oracle);
    return result;
  }
  async setProtocolFee(protocolFee) {
    let result = await this.methods("setProtocolFee", import_eth_wallet29.Utils.toString(protocolFee));
    return result;
  }
  async setProtocolFeeTo(protocolFeeTo) {
    let result = await this.methods("setProtocolFeeTo", protocolFeeTo);
    return result;
  }
  async setTradeFee(tradeFee) {
    let result = await this.methods("setTradeFee", import_eth_wallet29.Utils.toString(tradeFee));
    return result;
  }
  async tradeFee() {
    let result = await this.methods("tradeFee");
    return new import_eth_wallet29.BigNumber(result);
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async whitelistFactory() {
    let result = await this.methods("whitelistFactory");
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedLiquidityProvider.ts
var import_eth_wallet30 = __toModule(require("@ijstech/eth-wallet"));
var Bin30 = require_OSWAP_RestrictedLiquidityProvider();
var OSWAP_RestrictedLiquidityProvider = class extends import_eth_wallet30.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin30.abi, Bin30.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.tokenA, params.tokenB, params.addingTokenA, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.offerIndex), import_eth_wallet30.Utils.toString(params.amountIn), params.allowAll, import_eth_wallet30.Utils.toString(params.restrictedPrice), import_eth_wallet30.Utils.toString(params.startDate), import_eth_wallet30.Utils.toString(params.expire), import_eth_wallet30.Utils.toString(params.deadline));
    return result;
  }
  async addLiquidityAndTrader(params) {
    let result = await this.methods("addLiquidityAndTrader", import_eth_wallet30.Utils.toString(params.param), params.trader, import_eth_wallet30.Utils.toString(params.allocation));
    return result;
  }
  async addLiquidityETH(params, _value) {
    let result = await this.methods("addLiquidityETH", params.tokenA, params.addingTokenA, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.offerIndex), import_eth_wallet30.Utils.toString(params.amountAIn), params.allowAll, import_eth_wallet30.Utils.toString(params.restrictedPrice), import_eth_wallet30.Utils.toString(params.startDate), import_eth_wallet30.Utils.toString(params.expire), import_eth_wallet30.Utils.toString(params.deadline), _value);
    return result;
  }
  async addLiquidityETHAndTrader(params, _value) {
    let result = await this.methods("addLiquidityETHAndTrader", import_eth_wallet30.Utils.toString(params.param), params.trader, import_eth_wallet30.Utils.toString(params.allocation), _value);
    return result;
  }
  async configStore() {
    let result = await this.methods("configStore");
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async removeAllLiquidity(params) {
    let result = await this.methods("removeAllLiquidity", params.tokenA, params.tokenB, params.to, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.deadline));
    return result;
  }
  async removeAllLiquidityETH(params) {
    let result = await this.methods("removeAllLiquidityETH", params.tokenA, params.to, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.tokenA, params.tokenB, params.removingTokenA, params.to, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.offerIndex), import_eth_wallet30.Utils.toString(params.amountOut), import_eth_wallet30.Utils.toString(params.receivingOut), import_eth_wallet30.Utils.toString(params.deadline));
    return result;
  }
  async removeLiquidityETH(params) {
    let result = await this.methods("removeLiquidityETH", params.tokenA, params.removingTokenA, params.to, import_eth_wallet30.Utils.toString(params.pairIndex), import_eth_wallet30.Utils.toString(params.offerIndex), import_eth_wallet30.Utils.toString(params.amountOut), import_eth_wallet30.Utils.toString(params.receivingOut), import_eth_wallet30.Utils.toString(params.deadline));
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedPairOracle.ts
var import_eth_wallet31 = __toModule(require("@ijstech/eth-wallet"));
var Bin31 = require_OSWAP_RestrictedPairOracle();
var OSWAP_RestrictedPairOracle = class extends import_eth_wallet31.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin31.abi, Bin31.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async WEI() {
    let result = await this.methods("WEI");
    return new import_eth_wallet31.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet31.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet31.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet31.Utils.toString(params.param3), import_eth_wallet31.Utils.toString(params.param4), params.param5, params.payload);
    return {
      numerator: new import_eth_wallet31.BigNumber(result.numerator),
      denominator: new import_eth_wallet31.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
};

// src/contracts/restricted/OSWAP_VotingExecutor4.ts
var import_eth_wallet32 = __toModule(require("@ijstech/eth-wallet"));
var Bin32 = require_OSWAP_VotingExecutor4();
var OSWAP_VotingExecutor4 = class extends import_eth_wallet32.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin32.abi, Bin32.bytecode);
  }
  deploy(params) {
    return this._deploy(params.governance, params.factory, params.configStore);
  }
  async configStore() {
    let result = await this.methods("configStore");
    return result;
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet32.Utils.stringToBytes32(params));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
};

// src/contracts/router/OSWAP_HybridRouter.ts
var import_eth_wallet33 = __toModule(require("@ijstech/eth-wallet"));
var Bin33 = require_OSWAP_HybridRouter();
var OSWAP_HybridRouter = class extends import_eth_wallet33.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin33.abi, Bin33.bytecode);
  }
  deploy(params) {
    return this._deploy(params.oracleFactory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async getAmountsIn(params) {
    let result = await this.methods("getAmountsIn", import_eth_wallet33.Utils.toString(params.amountOut), params.path, params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
  async getAmountsOut(params) {
    let result = await this.methods("getAmountsOut", import_eth_wallet33.Utils.toString(params.amountIn), params.path, params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
  async oracleFactory() {
    let result = await this.methods("oracleFactory");
    return result;
  }
  async pairFor(params) {
    let result = await this.methods("pairFor", params.tokenA, params.tokenB);
    return result;
  }
  async swapETHForExactTokens(params, _value) {
    let result = await this.methods("swapETHForExactTokens", import_eth_wallet33.Utils.toString(params.amountOut), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data, _value);
    return result;
  }
  async swapExactETHForTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokens", import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data, _value);
    return result;
  }
  async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokensSupportingFeeOnTransferTokens", import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), _value);
    return result;
  }
  async swapExactTokensForETH(params) {
    let result = await this.methods("swapExactTokensForETH", import_eth_wallet33.Utils.toString(params.amountIn), import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
  async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForETHSupportingFeeOnTransferTokens", import_eth_wallet33.Utils.toString(params.amountIn), import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee));
    return result;
  }
  async swapExactTokensForTokens(params) {
    let result = await this.methods("swapExactTokensForTokens", import_eth_wallet33.Utils.toString(params.amountIn), import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
  async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForTokensSupportingFeeOnTransferTokens", import_eth_wallet33.Utils.toString(params.amountIn), import_eth_wallet33.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee));
    return result;
  }
  async swapTokensForExactETH(params) {
    let result = await this.methods("swapTokensForExactETH", import_eth_wallet33.Utils.toString(params.amountOut), import_eth_wallet33.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
  async swapTokensForExactTokens(params) {
    let result = await this.methods("swapTokensForExactTokens", import_eth_wallet33.Utils.toString(params.amountOut), import_eth_wallet33.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet33.Utils.toString(params.deadline), params.pair, import_eth_wallet33.Utils.toString(params.fee), params.data);
    return result;
  }
};

// src/contracts/router/OSWAP_HybridRouter2.ts
var import_eth_wallet34 = __toModule(require("@ijstech/eth-wallet"));
var Bin34 = require_OSWAP_HybridRouter2();
var OSWAP_HybridRouter2 = class extends import_eth_wallet34.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin34.abi, Bin34.bytecode);
  }
  deploy(params) {
    return this._deploy(params.registry, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async getAmountsInEndsWith(params) {
    let result = await this.methods("getAmountsInEndsWith", import_eth_wallet34.Utils.toString(params.amountOut), params.pair, params.tokenOut, params.data);
    return result;
  }
  async getAmountsInStartsWith(params) {
    let result = await this.methods("getAmountsInStartsWith", import_eth_wallet34.Utils.toString(params.amountOut), params.pair, params.tokenIn, params.data);
    return result;
  }
  async getAmountsOutEndsWith(params) {
    let result = await this.methods("getAmountsOutEndsWith", import_eth_wallet34.Utils.toString(params.amountIn), params.pair, params.tokenOut, params.data);
    return result;
  }
  async getAmountsOutStartsWith(params) {
    let result = await this.methods("getAmountsOutStartsWith", import_eth_wallet34.Utils.toString(params.amountIn), params.pair, params.tokenIn, params.data);
    return result;
  }
  async getPathIn(params) {
    let result = await this.methods("getPathIn", params.pair, params.tokenIn);
    return result;
  }
  async getPathOut(params) {
    let result = await this.methods("getPathOut", params.pair, params.tokenOut);
    return result;
  }
  async registry() {
    let result = await this.methods("registry");
    return result;
  }
  async swapETHForExactTokens(params, _value) {
    let result = await this.methods("swapETHForExactTokens", import_eth_wallet34.Utils.toString(params.amountOut), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data, _value);
    return result;
  }
  async swapExactETHForTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokens", import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data, _value);
    return result;
  }
  async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokensSupportingFeeOnTransferTokens", import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data, _value);
    return result;
  }
  async swapExactTokensForETH(params) {
    let result = await this.methods("swapExactTokensForETH", import_eth_wallet34.Utils.toString(params.amountIn), import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
  async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForETHSupportingFeeOnTransferTokens", import_eth_wallet34.Utils.toString(params.amountIn), import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
  async swapExactTokensForTokens(params) {
    let result = await this.methods("swapExactTokensForTokens", import_eth_wallet34.Utils.toString(params.amountIn), import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
  async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForTokensSupportingFeeOnTransferTokens", import_eth_wallet34.Utils.toString(params.amountIn), import_eth_wallet34.Utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
  async swapTokensForExactETH(params) {
    let result = await this.methods("swapTokensForExactETH", import_eth_wallet34.Utils.toString(params.amountOut), import_eth_wallet34.Utils.toString(params.amountInMax), params.pair, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
  async swapTokensForExactTokens(params) {
    let result = await this.methods("swapTokensForExactTokens", import_eth_wallet34.Utils.toString(params.amountOut), import_eth_wallet34.Utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, import_eth_wallet34.Utils.toString(params.deadline), params.data);
    return result;
  }
};

// src/contracts/router/OSWAP_HybridRouterRegistry.ts
var import_eth_wallet35 = __toModule(require("@ijstech/eth-wallet"));
var Bin35 = require_OSWAP_HybridRouterRegistry();
var OSWAP_HybridRouterRegistry = class extends import_eth_wallet35.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin35.abi, Bin35.bytecode);
  }
  deploy(governance) {
    return this._deploy(governance);
  }
  parseCustomPairRegisterEvent(receipt) {
    let events = this.parseEvents(receipt, "CustomPairRegister");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        pair: result.pair,
        fee: new import_eth_wallet35.BigNumber(result.fee),
        feeBase: new import_eth_wallet35.BigNumber(result.feeBase),
        typeCode: new import_eth_wallet35.BigNumber(result.typeCode)
      };
    });
  }
  parseOwnershipTransferredEvent(receipt) {
    let events = this.parseEvents(receipt, "OwnershipTransferred");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        previousOwner: result.previousOwner,
        newOwner: result.newOwner
      };
    });
  }
  parsePairRegisterEvent(receipt) {
    let events = this.parseEvents(receipt, "PairRegister");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        factory: result.factory,
        pair: result.pair,
        token0: result.token0,
        token1: result.token1
      };
    });
  }
  parseProtocolRegisterEvent(receipt) {
    let events = this.parseEvents(receipt, "ProtocolRegister");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        factory: result.factory,
        name: result.name,
        fee: new import_eth_wallet35.BigNumber(result.fee),
        feeBase: new import_eth_wallet35.BigNumber(result.feeBase),
        typeCode: new import_eth_wallet35.BigNumber(result.typeCode)
      };
    });
  }
  async customPairs(param1) {
    let result = await this.methods("customPairs", param1);
    return {
      fee: new import_eth_wallet35.BigNumber(result.fee),
      feeBase: new import_eth_wallet35.BigNumber(result.feeBase),
      typeCode: new import_eth_wallet35.BigNumber(result.typeCode)
    };
  }
  async execute(params) {
    let result = await this.methods("execute", import_eth_wallet35.Utils.stringToBytes32(params));
    return result;
  }
  async getFee(pairAddress) {
    let result = await this.methods("getFee", pairAddress);
    return {
      fee: new import_eth_wallet35.BigNumber(result.fee),
      feeBase: new import_eth_wallet35.BigNumber(result.feeBase)
    };
  }
  async getPairTokens(pairAddress) {
    let result = await this.methods("getPairTokens", pairAddress);
    return {
      token0: result.token0,
      token1: result.token1
    };
  }
  async getTypeCode(pairAddress) {
    let result = await this.methods("getTypeCode", pairAddress);
    return new import_eth_wallet35.BigNumber(result);
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async init(params) {
    let result = await this.methods("init", import_eth_wallet35.Utils.stringToBytes32(params.name), params.factory, import_eth_wallet35.Utils.toString(params.fee), import_eth_wallet35.Utils.toString(params.feeBase), import_eth_wallet35.Utils.toString(params.typeCode));
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async pairs(param1) {
    let result = await this.methods("pairs", param1);
    return {
      factory: result.factory,
      token0: result.token0,
      token1: result.token1
    };
  }
  async protocolList(param1) {
    let result = await this.methods("protocolList", import_eth_wallet35.Utils.toString(param1));
    return result;
  }
  async protocolListLength() {
    let result = await this.methods("protocolListLength");
    return new import_eth_wallet35.BigNumber(result);
  }
  async protocols(param1) {
    let result = await this.methods("protocols", param1);
    return {
      name: result.name,
      fee: new import_eth_wallet35.BigNumber(result.fee),
      feeBase: new import_eth_wallet35.BigNumber(result.feeBase),
      typeCode: new import_eth_wallet35.BigNumber(result.typeCode)
    };
  }
  async registerPair(params) {
    let result = await this.methods("registerPair", params.token0, params.token1, params.pairAddress, import_eth_wallet35.Utils.toString(params.fee), import_eth_wallet35.Utils.toString(params.feeBase), import_eth_wallet35.Utils.toString(params.typeCode));
    return result;
  }
  async registerPairByAddress(params) {
    let result = await this.methods("registerPairByAddress", params.factory, params.pairAddress);
    return result;
  }
  async registerPairByIndex(params) {
    let result = await this.methods("registerPairByIndex", params.factory, import_eth_wallet35.Utils.toString(params.index));
    return result;
  }
  async registerPairByTokens(params) {
    let result = await this.methods("registerPairByTokens", params.factory, params.token0, params.token1);
    return result;
  }
  async registerPairByTokensV3(params) {
    let result = await this.methods("registerPairByTokensV3", params.factory, params.token0, params.token1, import_eth_wallet35.Utils.toString(params.pairIndex));
    return result;
  }
  async registerPairsByAddress(params) {
    let result = await this.methods("registerPairsByAddress", params.factory, params.pairAddress);
    return result;
  }
  async registerPairsByAddress2(params) {
    let result = await this.methods("registerPairsByAddress2", params.factory, params.pairAddress);
    return result;
  }
  async registerPairsByIndex(params) {
    let result = await this.methods("registerPairsByIndex", params.factory, import_eth_wallet35.Utils.toString(params.index));
    return result;
  }
  async registerPairsByTokens(params) {
    let result = await this.methods("registerPairsByTokens", params.factory, params.token0, params.token1);
    return result;
  }
  async registerPairsByTokensV3(params) {
    let result = await this.methods("registerPairsByTokensV3", params.factory, params.token0, params.token1, import_eth_wallet35.Utils.toString(params.pairIndex));
    return result;
  }
  async registerProtocol(params) {
    let result = await this.methods("registerProtocol", import_eth_wallet35.Utils.stringToBytes32(params.name), params.factory, import_eth_wallet35.Utils.toString(params.fee), import_eth_wallet35.Utils.toString(params.feeBase), import_eth_wallet35.Utils.toString(params.typeCode));
    return result;
  }
  async renounceOwnership() {
    let result = await this.methods("renounceOwnership");
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
};

// src/contracts/router/OSWAP_OracleRouter.ts
var import_eth_wallet36 = __toModule(require("@ijstech/eth-wallet"));
var Bin36 = require_OSWAP_OracleRouter();
var OSWAP_OracleRouter = class extends import_eth_wallet36.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin36.abi, Bin36.bytecode);
  }
  deploy(params) {
    return this._deploy(params.ammFactory, params.oracleFactory, params.WETH);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async ammFactory() {
    let result = await this.methods("ammFactory");
    return result;
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", import_eth_wallet36.Utils.toString(params.amountOut), params.tokenIn, params.tokenOut, params.data);
    return new import_eth_wallet36.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", import_eth_wallet36.Utils.toString(params.amountIn), params.tokenIn, params.tokenOut, params.data);
    return new import_eth_wallet36.BigNumber(result);
  }
  async getAmountsIn(params) {
    let result = await this.methods("getAmountsIn", import_eth_wallet36.Utils.toString(params.amountOut), params.path, params.useOracle, params.data);
    return result;
  }
  async getAmountsOut(params) {
    let result = await this.methods("getAmountsOut", import_eth_wallet36.Utils.toString(params.amountIn), params.path, params.useOracle, params.data);
    return result;
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.tokenIn, params.tokenOut, params.data);
    return new import_eth_wallet36.BigNumber(result);
  }
  async oracleFactory() {
    let result = await this.methods("oracleFactory");
    return result;
  }
  async swapETHForExactTokens(params, _value) {
    let result = await this.methods("swapETHForExactTokens", import_eth_wallet36.Utils.toString(params.amountOut), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data, _value);
    return result;
  }
  async swapExactETHForTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokens", import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data, _value);
    return result;
  }
  async swapExactETHForTokensSupportingFeeOnTransferTokens(params, _value) {
    let result = await this.methods("swapExactETHForTokensSupportingFeeOnTransferTokens", import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data, _value);
    return result;
  }
  async swapExactTokensForETH(params) {
    let result = await this.methods("swapExactTokensForETH", import_eth_wallet36.Utils.toString(params.amountIn), import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
  async swapExactTokensForETHSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForETHSupportingFeeOnTransferTokens", import_eth_wallet36.Utils.toString(params.amountIn), import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
  async swapExactTokensForTokens(params) {
    let result = await this.methods("swapExactTokensForTokens", import_eth_wallet36.Utils.toString(params.amountIn), import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
  async swapExactTokensForTokensSupportingFeeOnTransferTokens(params) {
    let result = await this.methods("swapExactTokensForTokensSupportingFeeOnTransferTokens", import_eth_wallet36.Utils.toString(params.amountIn), import_eth_wallet36.Utils.toString(params.amountOutMin), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
  async swapTokensForExactETH(params) {
    let result = await this.methods("swapTokensForExactETH", import_eth_wallet36.Utils.toString(params.amountOut), import_eth_wallet36.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
  async swapTokensForExactTokens(params) {
    let result = await this.methods("swapTokensForExactTokens", import_eth_wallet36.Utils.toString(params.amountOut), import_eth_wallet36.Utils.toString(params.amountInMax), params.path, params.to, import_eth_wallet36.Utils.toString(params.deadline), params.useOracle, params.data);
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedPair.ts
var import_eth_wallet37 = __toModule(require("@ijstech/eth-wallet"));
var Bin37 = require_OSWAP_RestrictedPair();
var OSWAP_RestrictedPair = class extends import_eth_wallet37.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin37.abi, Bin37.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseAddLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "AddLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet37.BigNumber(result.index),
        amount: new import_eth_wallet37.BigNumber(result.amount),
        newAmountBalance: new import_eth_wallet37.BigNumber(result.newAmountBalance)
      };
    });
  }
  parseApprovedTraderEvent(receipt) {
    let events = this.parseEvents(receipt, "ApprovedTrader");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        direction: result.direction,
        offerIndex: new import_eth_wallet37.BigNumber(result.offerIndex),
        trader: result.trader,
        allocation: new import_eth_wallet37.BigNumber(result.allocation)
      };
    });
  }
  parseLockEvent(receipt) {
    let events = this.parseEvents(receipt, "Lock");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        direction: result.direction,
        index: new import_eth_wallet37.BigNumber(result.index)
      };
    });
  }
  parseNewProviderOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "NewProviderOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet37.BigNumber(result.index),
        allowAll: result.allowAll,
        restrictedPrice: new import_eth_wallet37.BigNumber(result.restrictedPrice),
        startDate: new import_eth_wallet37.BigNumber(result.startDate),
        expire: new import_eth_wallet37.BigNumber(result.expire)
      };
    });
  }
  parseRemoveLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet37.BigNumber(result.index),
        amountOut: new import_eth_wallet37.BigNumber(result.amountOut),
        receivingOut: new import_eth_wallet37.BigNumber(result.receivingOut),
        newAmountBalance: new import_eth_wallet37.BigNumber(result.newAmountBalance),
        newReceivingBalance: new import_eth_wallet37.BigNumber(result.newReceivingBalance)
      };
    });
  }
  parseSwapEvent(receipt) {
    let events = this.parseEvents(receipt, "Swap");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        to: result.to,
        direction: result.direction,
        amountIn: new import_eth_wallet37.BigNumber(result.amountIn),
        amountOut: new import_eth_wallet37.BigNumber(result.amountOut),
        tradeFee: new import_eth_wallet37.BigNumber(result.tradeFee),
        protocolFee: new import_eth_wallet37.BigNumber(result.protocolFee)
      };
    });
  }
  parseSwappedOneOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "SwappedOneOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet37.BigNumber(result.index),
        price: new import_eth_wallet37.BigNumber(result.price),
        amountOut: new import_eth_wallet37.BigNumber(result.amountOut),
        amountIn: new import_eth_wallet37.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet37.BigNumber(result.newAmountBalance),
        newReceivingBalance: new import_eth_wallet37.BigNumber(result.newReceivingBalance)
      };
    });
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.direction, import_eth_wallet37.Utils.toString(params.index));
    return result;
  }
  async approvedTrader(params) {
    let result = await this.methods("approvedTrader", params.param1, import_eth_wallet37.Utils.toString(params.param2), import_eth_wallet37.Utils.toString(params.param3));
    return result;
  }
  async configStore() {
    let result = await this.methods("configStore");
    return result;
  }
  async counter(param1) {
    let result = await this.methods("counter", param1);
    return new import_eth_wallet37.BigNumber(result);
  }
  async createOrder(params) {
    let result = await this.methods("createOrder", params.provider, params.direction, params.allowAll, import_eth_wallet37.Utils.toString(params.restrictedPrice), import_eth_wallet37.Utils.toString(params.startDate), import_eth_wallet37.Utils.toString(params.expire));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async feeBalance() {
    let result = await this.methods("feeBalance");
    return new import_eth_wallet37.BigNumber(result);
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", params.param1, import_eth_wallet37.Utils.toString(params.param2), params.param3, params.param4);
    return new import_eth_wallet37.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", params.tokenIn, import_eth_wallet37.Utils.toString(params.amountIn), params.trader, params.param4);
    return new import_eth_wallet37.BigNumber(result);
  }
  async getApprovedTrader(params) {
    let result = await this.methods("getApprovedTrader", params.direction, import_eth_wallet37.Utils.toString(params.offerIndex), import_eth_wallet37.Utils.toString(params.start), import_eth_wallet37.Utils.toString(params.length));
    return {
      trader: result.trader,
      allocation: result.allocation.map((e) => new import_eth_wallet37.BigNumber(e))
    };
  }
  async getApprovedTraderLength(params) {
    let result = await this.methods("getApprovedTraderLength", params.direction, import_eth_wallet37.Utils.toString(params.offerIndex));
    return new import_eth_wallet37.BigNumber(result);
  }
  async getBalances() {
    let result = await this.methods("getBalances");
    return {
      param1: new import_eth_wallet37.BigNumber(result[0]),
      param2: new import_eth_wallet37.BigNumber(result[1]),
      param3: new import_eth_wallet37.BigNumber(result[2])
    };
  }
  async getLastBalances() {
    let result = await this.methods("getLastBalances");
    return {
      param1: new import_eth_wallet37.BigNumber(result[0]),
      param2: new import_eth_wallet37.BigNumber(result[1])
    };
  }
  async getOffers(params) {
    let result = await this.methods("getOffers", params.direction, import_eth_wallet37.Utils.toString(params.start), import_eth_wallet37.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet37.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet37.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet37.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet37.BigNumber(e))
    };
  }
  async getProviderOffer(params) {
    let result = await this.methods("getProviderOffer", params.provider, params.direction, import_eth_wallet37.Utils.toString(params.start), import_eth_wallet37.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet37.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet37.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet37.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet37.BigNumber(e))
    };
  }
  async getProviderOfferIndexLength(params) {
    let result = await this.methods("getProviderOfferIndexLength", params.provider, params.direction);
    return new import_eth_wallet37.BigNumber(result);
  }
  async getTraderOffer(params) {
    let result = await this.methods("getTraderOffer", params.trader, params.direction, import_eth_wallet37.Utils.toString(params.start), import_eth_wallet37.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet37.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet37.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet37.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet37.BigNumber(e))
    };
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async initialize(params) {
    let result = await this.methods("initialize", params.token0, params.token1);
    return result;
  }
  async isApprovedTrader(params) {
    let result = await this.methods("isApprovedTrader", params.param1, import_eth_wallet37.Utils.toString(params.param2), params.param3);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async lastGovBalance() {
    let result = await this.methods("lastGovBalance");
    return new import_eth_wallet37.BigNumber(result);
  }
  async lastToken0Balance() {
    let result = await this.methods("lastToken0Balance");
    return new import_eth_wallet37.BigNumber(result);
  }
  async lastToken1Balance() {
    let result = await this.methods("lastToken1Balance");
    return new import_eth_wallet37.BigNumber(result);
  }
  async lockOffer(params) {
    let result = await this.methods("lockOffer", params.direction, import_eth_wallet37.Utils.toString(params.index));
    return result;
  }
  async offers(params) {
    let result = await this.methods("offers", params.param1, import_eth_wallet37.Utils.toString(params.param2));
    return {
      provider: result.provider,
      locked: result.locked,
      allowAll: result.allowAll,
      amount: new import_eth_wallet37.BigNumber(result.amount),
      receiving: new import_eth_wallet37.BigNumber(result.receiving),
      restrictedPrice: new import_eth_wallet37.BigNumber(result.restrictedPrice),
      startDate: new import_eth_wallet37.BigNumber(result.startDate),
      expire: new import_eth_wallet37.BigNumber(result.expire)
    };
  }
  async protocolFeeBalance0() {
    let result = await this.methods("protocolFeeBalance0");
    return new import_eth_wallet37.BigNumber(result);
  }
  async protocolFeeBalance1() {
    let result = await this.methods("protocolFeeBalance1");
    return new import_eth_wallet37.BigNumber(result);
  }
  async providerOfferIndex(params) {
    let result = await this.methods("providerOfferIndex", params.param1, params.param2, import_eth_wallet37.Utils.toString(params.param3));
    return new import_eth_wallet37.BigNumber(result);
  }
  async redeemProtocolFee() {
    let result = await this.methods("redeemProtocolFee");
    return result;
  }
  async removeAllLiquidity(provider) {
    let result = await this.methods("removeAllLiquidity", provider);
    return result;
  }
  async removeAllLiquidity1D(params) {
    let result = await this.methods("removeAllLiquidity1D", params.provider, params.direction);
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.provider, params.direction, import_eth_wallet37.Utils.toString(params.index), import_eth_wallet37.Utils.toString(params.amountOut), import_eth_wallet37.Utils.toString(params.receivingOut));
    return result;
  }
  async restrictedLiquidityProvider() {
    let result = await this.methods("restrictedLiquidityProvider");
    return result;
  }
  async scaleDirection() {
    let result = await this.methods("scaleDirection");
    return result;
  }
  async scaler() {
    let result = await this.methods("scaler");
    return new import_eth_wallet37.BigNumber(result);
  }
  async setApprovedTrader(params) {
    let result = await this.methods("setApprovedTrader", params.direction, import_eth_wallet37.Utils.toString(params.offerIndex), params.trader, import_eth_wallet37.Utils.toString(params.allocation));
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setMultipleApprovedTraders(params) {
    let result = await this.methods("setMultipleApprovedTraders", params.direction, import_eth_wallet37.Utils.toString(params.offerIndex), params.trader, import_eth_wallet37.Utils.toString(params.allocation));
    return result;
  }
  async swap(params) {
    let result = await this.methods("swap", import_eth_wallet37.Utils.toString(params.amount0Out), import_eth_wallet37.Utils.toString(params.amount1Out), params.to, params.trader, params.param5);
    return result;
  }
  async sync() {
    let result = await this.methods("sync");
    return result;
  }
  async token0() {
    let result = await this.methods("token0");
    return result;
  }
  async token1() {
    let result = await this.methods("token1");
    return result;
  }
  async traderAllocation(params) {
    let result = await this.methods("traderAllocation", params.param1, import_eth_wallet37.Utils.toString(params.param2), params.param3);
    return new import_eth_wallet37.BigNumber(result);
  }
  async traderOffer(params) {
    let result = await this.methods("traderOffer", params.param1, params.param2, import_eth_wallet37.Utils.toString(params.param3));
    return new import_eth_wallet37.BigNumber(result);
  }
  async whitelistFactory() {
    let result = await this.methods("whitelistFactory");
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedPair2.ts
var import_eth_wallet38 = __toModule(require("@ijstech/eth-wallet"));
var Bin38 = require_OSWAP_RestrictedPair2();
var OSWAP_RestrictedPair2 = class extends import_eth_wallet38.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin38.abi, Bin38.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  parseAddLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "AddLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet38.BigNumber(result.index),
        amount: new import_eth_wallet38.BigNumber(result.amount),
        newAmountBalance: new import_eth_wallet38.BigNumber(result.newAmountBalance)
      };
    });
  }
  parseApprovedTraderEvent(receipt) {
    let events = this.parseEvents(receipt, "ApprovedTrader");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        direction: result.direction,
        offerIndex: new import_eth_wallet38.BigNumber(result.offerIndex),
        trader: result.trader,
        allocation: new import_eth_wallet38.BigNumber(result.allocation)
      };
    });
  }
  parseLockEvent(receipt) {
    let events = this.parseEvents(receipt, "Lock");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        direction: result.direction,
        index: new import_eth_wallet38.BigNumber(result.index)
      };
    });
  }
  parseNewProviderOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "NewProviderOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet38.BigNumber(result.index),
        allowAll: result.allowAll,
        restrictedPrice: new import_eth_wallet38.BigNumber(result.restrictedPrice),
        startDate: new import_eth_wallet38.BigNumber(result.startDate),
        expire: new import_eth_wallet38.BigNumber(result.expire)
      };
    });
  }
  parseRemoveLiquidityEvent(receipt) {
    let events = this.parseEvents(receipt, "RemoveLiquidity");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet38.BigNumber(result.index),
        amountOut: new import_eth_wallet38.BigNumber(result.amountOut),
        receivingOut: new import_eth_wallet38.BigNumber(result.receivingOut),
        newAmountBalance: new import_eth_wallet38.BigNumber(result.newAmountBalance),
        newReceivingBalance: new import_eth_wallet38.BigNumber(result.newReceivingBalance)
      };
    });
  }
  parseSwapEvent(receipt) {
    let events = this.parseEvents(receipt, "Swap");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        to: result.to,
        direction: result.direction,
        amountIn: new import_eth_wallet38.BigNumber(result.amountIn),
        amountOut: new import_eth_wallet38.BigNumber(result.amountOut),
        tradeFee: new import_eth_wallet38.BigNumber(result.tradeFee),
        protocolFee: new import_eth_wallet38.BigNumber(result.protocolFee)
      };
    });
  }
  parseSwappedOneOfferEvent(receipt) {
    let events = this.parseEvents(receipt, "SwappedOneOffer");
    return events.map((result) => {
      return {
        _eventName: result._eventName,
        _address: result._address,
        _transactionHash: result._transactionHash,
        provider: result.provider,
        direction: result.direction,
        index: new import_eth_wallet38.BigNumber(result.index),
        price: new import_eth_wallet38.BigNumber(result.price),
        amountOut: new import_eth_wallet38.BigNumber(result.amountOut),
        amountIn: new import_eth_wallet38.BigNumber(result.amountIn),
        newAmountBalance: new import_eth_wallet38.BigNumber(result.newAmountBalance),
        newReceivingBalance: new import_eth_wallet38.BigNumber(result.newReceivingBalance)
      };
    });
  }
  async addLiquidity(params) {
    let result = await this.methods("addLiquidity", params.direction, import_eth_wallet38.Utils.toString(params.index));
    return result;
  }
  async approvedTrader(params) {
    let result = await this.methods("approvedTrader", params.param1, import_eth_wallet38.Utils.toString(params.param2), import_eth_wallet38.Utils.toString(params.param3));
    return result;
  }
  async configStore() {
    let result = await this.methods("configStore");
    return result;
  }
  async counter(param1) {
    let result = await this.methods("counter", param1);
    return new import_eth_wallet38.BigNumber(result);
  }
  async createOrder(params) {
    let result = await this.methods("createOrder", params.provider, params.direction, params.allowAll, import_eth_wallet38.Utils.toString(params.restrictedPrice), import_eth_wallet38.Utils.toString(params.startDate), import_eth_wallet38.Utils.toString(params.expire));
    return result;
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async feeBalance() {
    let result = await this.methods("feeBalance");
    return new import_eth_wallet38.BigNumber(result);
  }
  async getAmountIn(params) {
    let result = await this.methods("getAmountIn", params.tokenOut, import_eth_wallet38.Utils.toString(params.amountOut), params.trader, params.param4);
    return new import_eth_wallet38.BigNumber(result);
  }
  async getAmountOut(params) {
    let result = await this.methods("getAmountOut", params.tokenIn, import_eth_wallet38.Utils.toString(params.amountIn), params.trader, params.param4);
    return new import_eth_wallet38.BigNumber(result);
  }
  async getApprovedTrader(params) {
    let result = await this.methods("getApprovedTrader", params.direction, import_eth_wallet38.Utils.toString(params.offerIndex), import_eth_wallet38.Utils.toString(params.start), import_eth_wallet38.Utils.toString(params.length));
    return {
      trader: result.trader,
      allocation: result.allocation.map((e) => new import_eth_wallet38.BigNumber(e))
    };
  }
  async getApprovedTraderLength(params) {
    let result = await this.methods("getApprovedTraderLength", params.direction, import_eth_wallet38.Utils.toString(params.offerIndex));
    return new import_eth_wallet38.BigNumber(result);
  }
  async getBalances() {
    let result = await this.methods("getBalances");
    return {
      param1: new import_eth_wallet38.BigNumber(result[0]),
      param2: new import_eth_wallet38.BigNumber(result[1]),
      param3: new import_eth_wallet38.BigNumber(result[2])
    };
  }
  async getLastBalances() {
    let result = await this.methods("getLastBalances");
    return {
      param1: new import_eth_wallet38.BigNumber(result[0]),
      param2: new import_eth_wallet38.BigNumber(result[1])
    };
  }
  async getOffers(params) {
    let result = await this.methods("getOffers", params.direction, import_eth_wallet38.Utils.toString(params.start), import_eth_wallet38.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet38.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet38.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet38.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet38.BigNumber(e))
    };
  }
  async getProviderOffer(params) {
    let result = await this.methods("getProviderOffer", params.provider, params.direction, import_eth_wallet38.Utils.toString(params.start), import_eth_wallet38.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet38.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet38.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet38.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet38.BigNumber(e))
    };
  }
  async getProviderOfferIndexLength(params) {
    let result = await this.methods("getProviderOfferIndexLength", params.provider, params.direction);
    return new import_eth_wallet38.BigNumber(result);
  }
  async getTraderOffer(params) {
    let result = await this.methods("getTraderOffer", params.trader, params.direction, import_eth_wallet38.Utils.toString(params.start), import_eth_wallet38.Utils.toString(params.length));
    return {
      index: result.index.map((e) => new import_eth_wallet38.BigNumber(e)),
      provider: result.provider,
      lockedAndAllowAll: result.lockedAndAllowAll,
      receiving: result.receiving.map((e) => new import_eth_wallet38.BigNumber(e)),
      amountAndPrice: result.amountAndPrice.map((e) => new import_eth_wallet38.BigNumber(e)),
      startDateAndExpire: result.startDateAndExpire.map((e) => new import_eth_wallet38.BigNumber(e))
    };
  }
  async govToken() {
    let result = await this.methods("govToken");
    return result;
  }
  async governance() {
    let result = await this.methods("governance");
    return result;
  }
  async initialize(params) {
    let result = await this.methods("initialize", params.token0, params.token1);
    return result;
  }
  async isApprovedTrader(params) {
    let result = await this.methods("isApprovedTrader", params.param1, import_eth_wallet38.Utils.toString(params.param2), params.param3);
    return result;
  }
  async isLive() {
    let result = await this.methods("isLive");
    return result;
  }
  async lastGovBalance() {
    let result = await this.methods("lastGovBalance");
    return new import_eth_wallet38.BigNumber(result);
  }
  async lastToken0Balance() {
    let result = await this.methods("lastToken0Balance");
    return new import_eth_wallet38.BigNumber(result);
  }
  async lastToken1Balance() {
    let result = await this.methods("lastToken1Balance");
    return new import_eth_wallet38.BigNumber(result);
  }
  async lockOffer(params) {
    let result = await this.methods("lockOffer", params.direction, import_eth_wallet38.Utils.toString(params.index));
    return result;
  }
  async offers(params) {
    let result = await this.methods("offers", params.param1, import_eth_wallet38.Utils.toString(params.param2));
    return {
      provider: result.provider,
      locked: result.locked,
      allowAll: result.allowAll,
      amount: new import_eth_wallet38.BigNumber(result.amount),
      receiving: new import_eth_wallet38.BigNumber(result.receiving),
      restrictedPrice: new import_eth_wallet38.BigNumber(result.restrictedPrice),
      startDate: new import_eth_wallet38.BigNumber(result.startDate),
      expire: new import_eth_wallet38.BigNumber(result.expire)
    };
  }
  async protocolFeeBalance0() {
    let result = await this.methods("protocolFeeBalance0");
    return new import_eth_wallet38.BigNumber(result);
  }
  async protocolFeeBalance1() {
    let result = await this.methods("protocolFeeBalance1");
    return new import_eth_wallet38.BigNumber(result);
  }
  async providerOfferIndex(params) {
    let result = await this.methods("providerOfferIndex", params.param1, params.param2, import_eth_wallet38.Utils.toString(params.param3));
    return new import_eth_wallet38.BigNumber(result);
  }
  async redeemProtocolFee() {
    let result = await this.methods("redeemProtocolFee");
    return result;
  }
  async removeAllLiquidity(provider) {
    let result = await this.methods("removeAllLiquidity", provider);
    return result;
  }
  async removeAllLiquidity1D(params) {
    let result = await this.methods("removeAllLiquidity1D", params.provider, params.direction);
    return result;
  }
  async removeLiquidity(params) {
    let result = await this.methods("removeLiquidity", params.provider, params.direction, import_eth_wallet38.Utils.toString(params.index), import_eth_wallet38.Utils.toString(params.amountOut), import_eth_wallet38.Utils.toString(params.receivingOut));
    return result;
  }
  async restrictedLiquidityProvider() {
    let result = await this.methods("restrictedLiquidityProvider");
    return result;
  }
  async scaleDirection() {
    let result = await this.methods("scaleDirection");
    return result;
  }
  async scaler() {
    let result = await this.methods("scaler");
    return new import_eth_wallet38.BigNumber(result);
  }
  async setApprovedTrader(params) {
    let result = await this.methods("setApprovedTrader", params.direction, import_eth_wallet38.Utils.toString(params.offerIndex), params.trader, import_eth_wallet38.Utils.toString(params.allocation));
    return result;
  }
  async setLive(isLive) {
    let result = await this.methods("setLive", isLive);
    return result;
  }
  async setMultipleApprovedTraders(params) {
    let result = await this.methods("setMultipleApprovedTraders", params.direction, import_eth_wallet38.Utils.toString(params.offerIndex), params.trader, import_eth_wallet38.Utils.toString(params.allocation));
    return result;
  }
  async swap(params) {
    let result = await this.methods("swap", import_eth_wallet38.Utils.toString(params.amount0Out), import_eth_wallet38.Utils.toString(params.amount1Out), params.to, params.trader, params.param5);
    return result;
  }
  async sync() {
    let result = await this.methods("sync");
    return result;
  }
  async token0() {
    let result = await this.methods("token0");
    return result;
  }
  async token1() {
    let result = await this.methods("token1");
    return result;
  }
  async traderAllocation(params) {
    let result = await this.methods("traderAllocation", params.param1, import_eth_wallet38.Utils.toString(params.param2), params.param3);
    return new import_eth_wallet38.BigNumber(result);
  }
  async traderOffer(params) {
    let result = await this.methods("traderOffer", params.param1, params.param2, import_eth_wallet38.Utils.toString(params.param3));
    return new import_eth_wallet38.BigNumber(result);
  }
  async whitelistFactory() {
    let result = await this.methods("whitelistFactory");
    return result;
  }
};

// src/contracts/restricted/OSWAP_RestrictedPairCreator.ts
var import_eth_wallet39 = __toModule(require("@ijstech/eth-wallet"));
var Bin39 = require_OSWAP_RestrictedPairCreator();
var OSWAP_RestrictedPairCreator = class extends import_eth_wallet39.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin39.abi, Bin39.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async createPair(salt) {
    let result = await this.methods("createPair", import_eth_wallet39.Utils.stringToBytes32(salt));
    return result;
  }
};

// src/deploy.ts
var import_eth_wallet41 = __toModule(require("@ijstech/eth-wallet"));

// src/OpenSwap.ts
var import_eth_wallet40 = __toModule(require("@ijstech/eth-wallet"));
var OpenSwap2 = class {
  constructor(wallet, address) {
    this.address = address;
    this._oswap = new OpenSwap(wallet, address);
  }
  async deploy(params) {
    params.initSupply = import_eth_wallet40.Utils.toDecimals(params.initSupply);
    params.totalSupply = import_eth_wallet40.Utils.toDecimals(params.totalSupply);
    this.address = await this._oswap.deploy(params);
    return this.address;
  }
  async allowance(params) {
    return import_eth_wallet40.Utils.fromDecimals(await this._oswap.allowance(params));
  }
  async approve(params) {
    params.amount = import_eth_wallet40.Utils.toDecimals(params.amount);
    let receipt = await this._oswap.approve(params);
    let event = this._oswap.parseApprovalEvent(receipt)[0];
    event.value = import_eth_wallet40.Utils.fromDecimals(event.value);
    return event;
  }
  async balanceOf(account) {
    return import_eth_wallet40.Utils.fromDecimals(await this._oswap.balanceOf(account));
  }
  get cap() {
    return (async () => {
      return import_eth_wallet40.Utils.fromDecimals(await this._oswap.cap());
    })();
  }
  get decimals() {
    return (async () => {
      return (await this._oswap.decimals()).toNumber();
    })();
  }
  async decreaseAllowance(params) {
    params.subtractedValue = import_eth_wallet40.Utils.toDecimals(params.subtractedValue);
    let receipt = await this._oswap.decreaseAllowance(params);
    let event = this._oswap.parseApprovalEvent(receipt)[0];
    event.value = import_eth_wallet40.Utils.fromDecimals(event.value);
    return event;
  }
  async increaseAllowance(params) {
    params.addedValue = import_eth_wallet40.Utils.toDecimals(params.addedValue);
    let receipt = await this._oswap.increaseAllowance(params);
    let event = this._oswap.parseApprovalEvent(receipt)[0];
    event.value = import_eth_wallet40.Utils.fromDecimals(event.value);
    return event;
  }
  async mint(params) {
    let receipt = await this._oswap.mint({ account: params.address, amount: import_eth_wallet40.Utils.toDecimals(params.amount) });
    let event = this._oswap.parseTransferEvent(receipt)[0];
    event.value = import_eth_wallet40.Utils.fromDecimals(event.value);
    return event;
  }
  get minter() {
    return this._oswap.minter();
  }
  get name() {
    return this._oswap.name();
  }
  get symbol() {
    return this._oswap.symbol();
  }
  get totalSupply() {
    return (async () => {
      return import_eth_wallet40.Utils.fromDecimals(await this._oswap.totalSupply());
    })();
  }
  async transfer(params) {
    let receipt = await this._oswap.transfer({ recipient: params.address, amount: import_eth_wallet40.Utils.toDecimals(params.amount) });
    let event = this._oswap.parseTransferEvent(receipt)[0];
    event.value = import_eth_wallet40.Utils.fromDecimals(event.value);
    return event;
  }
  async transferFrom(params) {
    params.amount = import_eth_wallet40.Utils.toDecimals(params.amount);
    let receipt = await this._oswap.transferFrom(params);
    let transfer = this._oswap.parseTransferEvent(receipt)[0];
    transfer.value = import_eth_wallet40.Utils.fromDecimals(transfer.value);
    let approval = this._oswap.parseApprovalEvent(receipt)[0];
    approval.value = import_eth_wallet40.Utils.fromDecimals(approval.value);
    return { transfer, approval };
  }
};

// src/deploy.ts
var DefaultGovOptions = {
  minStakePeriod: 1,
  tradeFee: 0.2,
  protocolFee: 0,
  protocolFeeTo: "",
  profiles: {
    name: ["poll", "vote", "addOldOracleToNewPair"],
    minExeDelay: [1, 1, 1],
    minVoteDuration: [0, 0, 0],
    maxVoteDuration: [1209600, 1209600, 1209600],
    minGovTokenToCreateVote: [import_eth_wallet41.Utils.toDecimals(1e5), import_eth_wallet41.Utils.toDecimals(1e5), import_eth_wallet41.Utils.toDecimals(1e5)],
    minQuorum: [import_eth_wallet41.Utils.toDecimals(0), import_eth_wallet41.Utils.toDecimals(1e7), import_eth_wallet41.Utils.toDecimals(100)]
  }
};
var DefaultGovTokenOptions = {
  initSupply: 0,
  initSupplyTo: "",
  minter: "",
  totalSupply: 1e9
};
function toDeploymentContracts(wallet, result) {
  return {
    openSwap: new OpenSwap2(wallet, result.oswap),
    governance: new OAXDEX_Governance(wallet, result.governance),
    administrator: new OAXDEX_Administrator(wallet, result.administrator),
    registry: new OAXDEX_VotingRegistry(wallet, result.votingRegistry),
    pairCreator: new OSWAP_PairCreator(wallet, result.pairCreator),
    factory: new OSWAP_Factory(wallet, result.factory),
    oraclePairCreator: new OSWAP_OraclePairCreator(wallet, result.oraclePairCreator),
    router: new OSWAP_Router(wallet, result.router),
    oracleFactory: new OSWAP_OracleFactory(wallet, result.oracleFactory),
    oracleRouter: new OSWAP_OracleRouter(wallet, result.oracleRouter),
    oracleLiquidityProvider: new OSWAP_OracleLiquidityProvider(wallet, result.oracleLiquidityProvider),
    hybridRouterRegistry: new OSWAP_HybridRouterRegistry(wallet, result.hybridRouterRegistry),
    hybridRouter: new OSWAP_HybridRouter2(wallet, result.hybridRouter),
    executor: new OAXDEX_VotingExecutor(wallet, result.votingExecutor),
    executor1: new OSWAP_VotingExecutor1(wallet, result.votingExecutor1),
    executor2: new OSWAP_VotingExecutor2(wallet, result.votingExecutor2)
  };
}
async function deployCoreContracts(wallet, options) {
  let result = {};
  if (!options.tokens.oswap) {
    let oswap = new OpenSwap2(wallet);
    result.oswap = await oswap.deploy(options.govTokenOptions);
  } else
    result.oswap = options.tokens.oswap;
  if (options.tokens.weth)
    result.weth = options.tokens.weth;
  let governance = new OAXDEX_Governance(wallet);
  result.governance = await governance.deploy({
    names: options.govOptions.profiles.name,
    maxVoteDuration: options.govOptions.profiles.maxVoteDuration,
    minExeDelay: options.govOptions.profiles.minExeDelay,
    minOaxTokenToCreateVote: options.govOptions.profiles.minGovTokenToCreateVote,
    minQuorum: options.govOptions.profiles.minQuorum,
    minStakePeriod: options.govOptions.minStakePeriod,
    minVoteDuration: options.govOptions.profiles.minVoteDuration,
    oaxToken: result.oswap
  });
  let administrator = new OAXDEX_Administrator(wallet);
  result.administrator = await administrator.deploy(governance.address);
  await governance.initAdmin(result.administrator);
  let votingRegistry = new OAXDEX_VotingRegistry(wallet);
  result.votingRegistry = await votingRegistry.deploy(result.governance);
  await governance.setVotingRegister(result.votingRegistry);
  let pairCreator = new OSWAP_PairCreator(wallet);
  result.pairCreator = await pairCreator.deploy();
  let factory = new OSWAP_Factory(wallet);
  result.factory = await factory.deploy({
    governance: options.amm.governance || result.governance,
    pairCreator: result.pairCreator,
    protocolFee: 0,
    protocolFeeTo: options.amm.protocolFeeTo || import_eth_wallet41.Utils.nullAddress,
    tradeFee: 0
  });
  let router = new OSWAP_Router(wallet);
  result.router = await router.deploy({
    WETH: result.weth,
    factory: result.factory
  });
  let votingExecutor = new OAXDEX_VotingExecutor(wallet);
  result.votingExecutor = await votingExecutor.deploy({
    admin: result.administrator,
    governance: result.governance
  });
  await governance.initVotingExecutor([result.votingExecutor]);
  let votingExecutor1 = new OSWAP_VotingExecutor1(wallet);
  result.votingExecutor1 = await votingExecutor1.deploy(factory.address);
  return result;
}
async function deployOracleContracts(wallet, options, coreContractsResult) {
  let result = {};
  let oraclePairCreator = new OSWAP_OraclePairCreator(wallet);
  result.oraclePairCreator = await oraclePairCreator.deploy();
  let oracleFactory = new OSWAP_OracleFactory(wallet);
  result.oracleFactory = await oracleFactory.deploy({
    feePerDelegator: options.oracle.feePerDelegator || 0,
    governance: options.oracle.governance || coreContractsResult.governance,
    pairCreator: options.oracle.pairCreator || result.oraclePairCreator,
    protocolFee: options.oracle.protocolFee || 0,
    protocolFeeTo: options.oracle.protocolFeeTo || import_eth_wallet41.Utils.nullAddress,
    tradeFee: options.oracle.tradeFee || 0
  });
  let oracleRouter = new OSWAP_OracleRouter(wallet);
  result.oracleRouter = await oracleRouter.deploy({
    WETH: coreContractsResult.weth,
    ammFactory: coreContractsResult.factory,
    oracleFactory: result.oracleFactory
  });
  let oracleLiquidityProvider = new OSWAP_OracleLiquidityProvider(wallet);
  result.oracleLiquidityProvider = await oracleLiquidityProvider.deploy({
    WETH: coreContractsResult.weth,
    factory: result.oracleFactory
  });
  await oracleFactory.setOracleLiquidityProvider({
    oracleLiquidityProvider: result.oracleLiquidityProvider,
    oracleRouter: result.oracleRouter
  });
  let votingExecutor2 = new OSWAP_VotingExecutor2(wallet);
  result.votingExecutor2 = await votingExecutor2.deploy(oracleFactory.address);
  return result;
}
async function deployRangeContracts(wallet, options, weth, hybridRegistry) {
  let result = {};
  let rangePairCreator = new OSWAP_RangePairCreator(wallet);
  result.rangePairCreator = await rangePairCreator.deploy();
  let rangeFactory = new OSWAP_RangeFactory(wallet);
  result.rangeFactory = await rangeFactory.deploy({
    governance: options.governance,
    oracleFactory: options.oracleFactory,
    pairCreator: options.pairCreator || result.rangePairCreator,
    tradeFee: options.tradeFee || 0,
    stakeAmount: options.stakeAmount || [],
    liquidityProviderShare: options.liquidityProviderShare || [],
    protocolFeeTo: options.protocolFeeTo || import_eth_wallet41.Utils.nullAddress
  });
  let rangeLiquidityProvider = new OSWAP_RangeLiquidityProvider(wallet);
  result.rangeLiquidityProvider = await rangeLiquidityProvider.deploy({
    WETH: weth,
    factory: result.rangeFactory
  });
  await rangeFactory.setRangeLiquidityProvider(result.rangeLiquidityProvider);
  let votingExecutor3 = new OSWAP_VotingExecutor3(wallet);
  result.votingExecutor3 = await votingExecutor3.deploy({
    governance: options.governance,
    factory: rangeFactory.address,
    hybridRegistry
  });
  return result;
}
async function deployRestrictedContracts(wallet, options, weth) {
  let result = {};
  if (!options.configStore) {
    let configStore = new OSWAP_ConfigStore(wallet);
    options.configStore = await configStore.deploy(options.governance);
  }
  let restrictedPairCreator = new OSWAP_RestrictedPairCreator(wallet);
  result.restrictedPairCreator = await restrictedPairCreator.deploy();
  let restrictedFactory = new OSWAP_RestrictedFactory(wallet);
  result.restrictedFactory = await restrictedFactory.deploy({
    governance: options.governance,
    whitelistFactory: options.whitelistFactory,
    pairCreator: options.pairCreator || result.restrictedPairCreator,
    tradeFee: options.tradeFee || 0,
    configStore: options.configStore,
    protocolFee: options.protocolFee || 0,
    protocolFeeTo: options.protocolFeeTo || import_eth_wallet41.Utils.nullAddress
  });
  let restrictedLiquidityProvider = new OSWAP_RestrictedLiquidityProvider(wallet);
  result.restrictedLiquidityProvider = await restrictedLiquidityProvider.deploy({
    WETH: weth,
    factory: result.restrictedFactory
  });
  await restrictedFactory.init(result.restrictedLiquidityProvider);
  let votingExecutor4 = new OSWAP_VotingExecutor4(wallet);
  result.votingExecutor4 = await votingExecutor4.deploy({
    governance: options.governance,
    factory: restrictedFactory.address,
    configStore: options.configStore
  });
  return result;
}
async function deployHybridRouter(wallet, coreContractsResult) {
  let result = {};
  let hybridRouterRegistry = new OSWAP_HybridRouterRegistry(wallet);
  result.hybridRouterRegistry = await hybridRouterRegistry.deploy(coreContractsResult.governance);
  let hybridRouter = new OSWAP_HybridRouter2(wallet);
  result.hybridRouter = await hybridRouter.deploy({
    WETH: coreContractsResult.weth,
    registry: result.hybridRouterRegistry
  });
  return result;
}
function deploy(wallet, options) {
  options = options || {};
  if (!options.govOptions)
    options.govOptions = DefaultGovOptions;
  if (!options.govTokenOptions) {
    options.govTokenOptions = DefaultGovTokenOptions;
    options.govTokenOptions.initSupplyTo = wallet.defaultAccount;
    options.govTokenOptions.minter = wallet.defaultAccount;
  }
  if (!options.tokens)
    options.tokens = {};
  if (!options.amm)
    options.amm = {};
  if (!options.oracle)
    options.oracle = {};
  return new Promise(async function(resolve, reject) {
    try {
      let coreContractsResult = await deployCoreContracts(wallet, options);
      let oracleContractsResult = await deployOracleContracts(wallet, options, coreContractsResult);
      let hybridRouterResult = await deployHybridRouter(wallet, coreContractsResult);
      let result = __spreadValues(__spreadValues(__spreadValues({}, coreContractsResult), oracleContractsResult), hybridRouterResult);
      if (options.range) {
        options.range.governance = coreContractsResult.governance;
        options.range.oracleFactory = oracleContractsResult.oracleFactory;
        let rangeContractsResult = await deployRangeContracts(wallet, options.range, coreContractsResult.weth, hybridRouterResult.hybridRouterRegistry);
        result = __spreadValues(__spreadValues({}, result), rangeContractsResult);
      }
      if (options.restricted) {
        options.restricted.governance = coreContractsResult.governance;
        options.restricted.whitelistFactory = oracleContractsResult.oracleFactory;
        let restrictedContractsResult = await deployRestrictedContracts(wallet, options.restricted, coreContractsResult.weth);
        result = __spreadValues(__spreadValues({}, result), restrictedContractsResult);
      }
      console.dir(result);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

})