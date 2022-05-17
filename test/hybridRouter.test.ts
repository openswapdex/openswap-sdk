import 'mocha';
import { Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
import { Contracts, deploy, initHybridRouterRegistry, IDeploymentResult } from '../src';
import * as Ganache from "ganache-cli";
import * as assert from 'assert';
import { TestERC20 } from '../test/src/contracts';

suite('##Contracts', function () {
  this.timeout(40000);
  let provider = Ganache.provider()
  let wallet = new Wallet(provider);
  let accounts: string[];
  let deployer: string;
  let deployedContracts: IDeploymentResult;
  let cakeAddress: string;
  let CakeOswapPair: string;
  const maxAmount = new BigNumber(2).pow(256).minus(1);

  const addLiquidity = async (routerAddress: string, tokenAAddress: string, tokenBAddress: string, amountADesired: string, amountBDesired: string, toAddress: string) => {
    let receipt;
    try {
      const slippageTolerance = 0.5;
      const amountAMin = new BigNumber(amountADesired).times(1 - slippageTolerance / 100).toFixed();
      const amountBMin = new BigNumber(amountBDesired).times(1 - slippageTolerance / 100).toFixed();
      const deadline = Math.floor(Date.now() / 1000 + 30 * 60);
      let router = new Contracts.OSWAP_Router(wallet, routerAddress);
      if (!tokenAAddress || !tokenBAddress) {
        let erc20Token, amountTokenDesired, amountETHDesired, amountTokenMin, amountETHMin;
        if (tokenAAddress) {
          erc20Token = tokenAAddress;
          amountTokenDesired = amountADesired;
          amountETHDesired = amountBDesired;
          amountTokenMin = amountAMin;
          amountETHMin = amountBMin;
        } else {
          erc20Token = tokenBAddress;
          amountTokenDesired = amountBDesired;
          amountETHDesired = amountADesired;
          amountTokenMin = amountBMin;
          amountETHMin = amountAMin;
        }

        receipt = await router.addLiquidityETH({
          token: erc20Token,
          amountTokenDesired: Utils.toDecimals(amountTokenDesired, erc20Token.decimals).dp(0),
          amountTokenMin: Utils.toDecimals(amountTokenMin, erc20Token.decimals).dp(0),
          amountETHMin: Utils.toDecimals(amountETHMin).dp(0),
          to: toAddress,
          deadline
        }, Utils.toDecimals(amountETHDesired).dp(0));
      }
      else {
        receipt = await router.addLiquidity({
          tokenA: tokenAAddress,
          tokenB: tokenBAddress,
          amountADesired: Utils.toDecimals(amountADesired).dp(0),
          amountBDesired: Utils.toDecimals(amountBDesired).dp(0),
          amountAMin: Utils.toDecimals(amountAMin).dp(0),
          amountBMin: Utils.toDecimals(amountBMin).dp(0),
          to: toAddress,
          deadline
        });
      }
    }
    catch (err) {
      console.log('err', err)
    }
    return receipt;
  }
  setup(async function () {
    accounts = await wallet.accounts;
    deployer = accounts[0];
  })
  test('Deploy contracts', async function () {
    console.log('accounts', accounts);
    wallet.defaultAccount = deployer;
    let protocolFeeTo = deployer;
    let result = await deploy(wallet, {
      govTokenOptions: {
        initSupply: Utils.toDecimals(80000000000),
        initSupplyTo: accounts[0],
        minter: accounts[0],
        totalSupply: Utils.toDecimals(5000000000000)
      },
      govOptions: {
        minStakePeriod: 1,
        tradeFee: 0.2,
        protocolFee: 5,
        protocolFeeTo,
        profiles: {
          name: ['poll', 'vote', 'addOldOracleToNewPair'],
          minExeDelay: [1, 1, 1],
          minVoteDuration: [0, 0, 0],
          maxVoteDuration: [2592000, 1209600, 1209600],
          minGovTokenToCreateVote: [Utils.toDecimals(100000), Utils.toDecimals(1000000), Utils.toDecimals(100000)],
          minQuorum: [Utils.toDecimals(0), Utils.toDecimals(20000000), Utils.toDecimals(100)]
        }
      },
      amm: {
        protocolFee: 5000,
        protocolFeeTo,
        tradeFee: 200
      },
      oracle: {
        feePerDelegator: Utils.toDecimals(100),
        protocolFee: 10000,
        protocolFeeTo,
        tradeFee: 100
      },
      range: {
        stakeAmount: [Utils.toDecimals(3500), Utils.toDecimals(5000), Utils.toDecimals(7500), Utils.toDecimals(10000)],
        liquidityProviderShare: [10000, 25000, 50000, 90000],
        protocolFeeTo,
        tradeFee: 100
      },
      restricted: {
        protocolFee: 10000,
        protocolFeeTo,
        tradeFee: 100
      },
      hybridRouter: {
      }
    });
    deployedContracts = result;

    let hybridRouterRegistryConfig = {
      defaultProtocols: [
        {
          protocolType: 'factory',
          name: 'Amm',
          fee: 998000,
          feeBase: 1000000,
          typeCode: 1
        },
        {
          protocolType: 'oracleFactory',
          name: 'Oracle',
          fee: 999000,
          feeBase: 1000000,
          typeCode: 2
        },
        {
          protocolType: 'rangeFactory',
          name: 'Range',
          fee: 999000,
          feeBase: 1000000,
          typeCode: 2
        },
        {
          protocolType: 'restrictedFactory',
          name: 'Restricted',
          fee: 999000,
          feeBase: 1000000,
          typeCode: 3
        }
      ]
    };
    let hybridRouterOptions = {
      registryAddress: result.hybridRouterRegistry,
      name: [],
      factory: [],
      fee: [],
      feeBase: [],
      typeCode: []
    }
    for (let protocol of hybridRouterRegistryConfig.defaultProtocols) {
      let { protocolType, name, fee, feeBase, typeCode } = protocol;
      hybridRouterOptions.factory.push(result[protocolType]);
      hybridRouterOptions.name.push(name);
      hybridRouterOptions.fee.push(fee);
      hybridRouterOptions.feeBase.push(feeBase);
      hybridRouterOptions.typeCode.push(typeCode);
    }
    await initHybridRouterRegistry(wallet, hybridRouterOptions);
  })
  test('Create Pairs', async function () {
    wallet.defaultAccount = deployer;
    let cake = new TestERC20(wallet);
    cakeAddress = await cake.deploy({
      symbol: "CAKE",
      name: "CAKE",
      initialSupply: 0,
      cap: 0,
      decimals: 18,
    });
    await cake.mint({
      account: deployer,
      value: Utils.toDecimals(9999999999999999)
    });
    await cake.approve({
      spender: deployedContracts.router,
      value: maxAmount
    })
    let factory = new Contracts.OSWAP_Factory(wallet, deployedContracts.factory);
    let oswap = new Contracts.ERC20(wallet, deployedContracts.oswap);
    await oswap.approve({
      spender: deployedContracts.router,
      amount: maxAmount
    })
    let receipt = await addLiquidity(deployedContracts.router, cakeAddress, deployedContracts.oswap, '1', '15', deployer);
    let event = factory.parsePairCreatedEvent(receipt)[0];
    CakeOswapPair = event.pair;
  })
  test('Register Pairs to Hybrid Router Registry', async function () {
    let hybridRouterRegistry = new Contracts.OSWAP_HybridRouterRegistry(wallet, deployedContracts.hybridRouterRegistry);
    await hybridRouterRegistry.registerPairByAddress({
      factory: deployedContracts.factory,
      pairAddress: CakeOswapPair
    })
  })
  test('Swap with hybrid router', async function () {
    wallet.defaultAccount = deployer;
    let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, deployedContracts.hybridRouter);
    const deadline = Math.floor(Date.now() / 1000 + 30 * 60);
    let params = {
      amountIn: Utils.toDecimals(1).dp(0),
      amountOutMin: Utils.toDecimals(0).dp(0),
      pair: [CakeOswapPair],
      tokenIn: deployedContracts.oswap,
      to: deployer,
      deadline,
      data: '0x'
    };
    let oswap = new Contracts.ERC20(wallet, deployedContracts.oswap);
    await oswap.approve({
      spender: deployedContracts.hybridRouter,
      amount: maxAmount
    })
    await hybridRouter.swapExactTokensForTokens(params);
  })

})