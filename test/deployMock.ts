
import {Utils, Wallet} from "@ijstech/eth-wallet";
import { MockOracleAdaptor, MockAmmFactory, MockAmmPair, WETH9 } from './src/contracts';
import HttpProvider from "web3-providers-http";
import * as Config from '../data/config';

async function main() {
    let rpcUrl = Config.rpcUrl;
    let provider = new HttpProvider(rpcUrl);
    let _wallet = new Wallet(provider, {
        address: Config.deployer.address,
        privateKey: Config.deployer.privateKey
    });

    // console.log(await new WETH9(_wallet).deploy());

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

// node_modules/.bin/tsc -t es2017 -m commonjs --esModuleInterop --removeComments --declaration test/deployMock.ts
// node test/deployMock.js
// oracle address 0x15D6AE04cF5F48326FF0E32BE0439c219Fbc92fA
// amm factory 0x0d55324BddC41c1D40044221a88134FE19107C6F
