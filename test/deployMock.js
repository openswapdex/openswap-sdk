"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eth_wallet_1 = require("@ijstech/eth-wallet");
const MockOracleAdaptor_1 = require("./src/contracts/MockOracleAdaptor");
const MockAmmFactory_1 = require("./src/contracts/MockAmmFactory");
const web3_1 = __importDefault(require("web3"));
async function main() {
    let rpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    let provider = new web3_1.default.providers.HttpProvider(rpcUrl);
    let _wallet = new eth_wallet_1.Wallet(provider, { address: "0x2Ce2eaa52c49C66f07366689b41bD21c70ae1059", privateKey: "0x13354D7DAE86425992037BF4D4D73181D58E97A516EA1F268D4DD518B45B8A5E" });
    let price = 1 / 400;
    const oracle = new MockOracleAdaptor_1.MockOracleAdaptor(_wallet);
    await oracle.deploy({ weth: "0xae13d989dac2f0debff460ac112a837c89baa7cd", decimals: 18, tokens: [], prices: [] });
    console.log("oracle address " + oracle.address);
    let ammFactory = new MockAmmFactory_1.MockAmmFactory(_wallet);
    let ammFactoryAddress = await ammFactory.deploy();
    console.log("amm factory " + ammFactoryAddress);
}
main();
