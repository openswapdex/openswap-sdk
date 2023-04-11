// import 'mocha';
// import assert from 'assert';
// import { Contracts, Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
// import { deploy, initHybridRouterRegistry, IDeploymentResult, toDeploymentContracts, IDeploymentContracts } from '../src';
// import { TestERC20, EvilAmmPair, EvilAmmFactory, WETH9, MockV3Aggregator } from './src/contracts';
// import {print, assertEqual, getProvider, toWeiInv} from './helper';
// import {stakeToVote, newVote, voteToPass}  from './oswapHelper';

// let accounts: string[];

// let weth: WETH9;
// let token1: TestERC20;
// let token2: TestERC20;
// let chainlink1: Contract;
// let chainlink2: Contract;
// let oracle: Contract;

// let direction: boolean;

// let price1: BigNumber;
// let price2: BigNumber;


// let wallet = new Wallet(getProvider());

// describe('test', function() {
//     before(async function() {
//         accounts = await wallet.accounts;
//         weth = new WETH9(wallet);
//         let wethAddr = await weth.deploy();
        
        
//         token1 = new TestERC20(wallet);
//         await token1.deploy({symbol: "token1", name: "token1", initialSupply: 0, cap: 0, decimals: 18});
//         token2 = new TestERC20(wallet);
//         await token2.deploy({symbol: "token2", name: "token2", initialSupply: 0, cap: 0, decimals: 18});


//         let chainlink1 = new MockV3Aggregator(wallet);
//         price1 = toWeiInv((300).toString());
//         await chainlink1.deploy({description:"Chainlink1", decimals:18, initialAnswer:price1});

//         let chainlink2 = new MockV3Aggregator(wallet);
//         price2 = toWeiInv((500).toString());
//         await chainlink2.deploy({description:"Chainlink2", decimals:18, initialAnswer:price2});

//         // let OSWAP_OracleChainlinkTestnet = await ethers.getContractFactory('OSWAP_OracleChainlinkGeneric');
//         oracle = await OSWAP_OracleChainlinkTestnet(wallet);
//         await oracle.deploy(weth.address, [token1.address, token2.address], [chainlink1.address, chainlink2.address]);
//         await oracle.deployed();
//     });

//     describe('weth-token', function() {
//         before(async function() {
//             direction = BigNumber.from(weth.address.toLowerCase()).lt(token2.address.toLowerCase());
//         });
//         describe('changing amm price', function() {
//             it('', async function() {
//                 let result = await oracle.getRatio(weth.address, token2.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//                 result = await oracle.getRatio(weth.address, token1.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//                 result = await oracle.getRatio(token2.address, weth.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//                 result = await oracle.getRatio(token1.address, weth.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//                 result = await oracle.getRatio(token1.address, token2.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//                 result = await oracle.getRatio(token2.address, token1.address, 0, 0, "0x");
//                 // print(result);
//                 print(result.numerator.mul("1000000000000000000").div(result.denominator));
//             });
//         });

//     });

// });
