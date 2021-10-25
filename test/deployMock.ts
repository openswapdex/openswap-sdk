
import {Utils, Wallet} from "@ijstech/eth-wallet";
import { MockOracleAdaptor } from './src/contracts/MockOracleAdaptor';
import { MockAmmFactory } from './src/contracts/MockAmmFactory';
import { MockAmmPair } from './src/contracts/MockAmmPair';
import Web3 from 'web3';

async function main() {
    let rpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    let provider = new Web3.providers.HttpProvider(rpcUrl);
    let _wallet = new Wallet(provider, {address:"0x2Ce2eaa52c49C66f07366689b41bD21c70ae1059",privateKey:"0x13354D7DAE86425992037BF4D4D73181D58E97A516EA1F268D4DD518B45B8A5E"});

    let price = 1/400;
    const oracle = new MockOracleAdaptor(_wallet);
    await oracle.deploy({weth:"0xae13d989dac2f0debff460ac112a837c89baa7cd", decimals:18, tokens:[], prices:[]});
    console.log("oracle address " + oracle.address);

    let ammFactory = new MockAmmFactory(_wallet);
    let ammFactoryAddress = await ammFactory.deploy();
    console.log("amm factory " + ammFactoryAddress);

    // let receipt = await ammFactory.createPair({tokenA:_direction?weth.address:_token.address, tokenB:!_direction?weth.address:_token.address});
    // let ammPairAddress = ammFactory.parsePairCreatedEvent(receipt)[0].pair;
    // let ammPair = new MockAmmPair(_wallet, ammPairAddress);
    // receipt = await ammPair.setReserves({reserve0:Utils.toDecimals(_direction?"1":"400"), reserve1:Utils.toDecimals(!_direction?"1":"400")});
    // console.log(ammPair.parseSyncEvent(receipt));
}
main();
