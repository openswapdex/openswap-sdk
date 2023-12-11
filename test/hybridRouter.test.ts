import 'mocha';
import assert from 'assert';
import { Utils, Wallet, Erc20, BigNumber } from "@ijstech/eth-wallet";
import { Contracts, deploy, initHybridRouterRegistry, IDeploymentResult, toDeploymentContracts, IDeploymentContracts } from '../src';
import { TestERC20, EvilAmmPair, EvilAmmFactory } from './src/contracts';
import {print, assertEqual, getProvider} from './helper';
import {stakeToVote, newVote, voteToPass}  from './oswapHelper';

describe('##Contracts', function () {
  this.timeout(40000);
  let wallet = new Wallet(getProvider());
  let accounts: string[];
  let deployer: string;
  let deployedContracts: IDeploymentResult;
  let cake: TestERC20;
  let oswap: Contracts.ERC20;
  let CakeOswapPair: string;
  let hybridRouterRegistry: Contracts.OSWAP_HybridRouterRegistry;
  let deployment: IDeploymentContracts;

  const maxAmount = new BigNumber(2).pow(256).minus(1);

  const addLiquidity = async (routerAddress: string, tokenAAddress: string, tokenBAddress: string, amountADesired: string, amountBDesired: string, toAddress: string) => {
    let receipt;
    try {
      const slippageTolerance = 0.5;
      const amountAMin = new BigNumber(amountADesired).times(1 - slippageTolerance / 100).toFixed();
      const amountBMin = new BigNumber(amountBDesired).times(1 - slippageTolerance / 100).toFixed();
      let now = await wallet.getBlockTimestamp();
      const deadline = now + 30 * 60;
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
  before(async function () {
    accounts = await wallet.accounts;
    deployer = accounts[0];
  })
  it('Deploy contracts', async function () {
    console.log('accounts', accounts);
    wallet.defaultAccount = deployer;
    let protocolFeeTo = deployer;
    let result = await deploy(wallet, {
      govTokenOptions: {
        initSupply: Utils.toDecimals(5000),
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
    deployment = toDeploymentContracts(wallet, result);

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
  it('Create Pairs', async function () {
    wallet.defaultAccount = deployer;
    cake = new TestERC20(wallet);
    let cakeAddress = await cake.deploy({
      symbol: "CAKE",
      name: "CAKE",
      initialSupply: 0,
      cap: 0,
      decimals: 18,
    });
    await cake.mint({
      account: deployer,
      value: Utils.toDecimals(8000)
    });
    await cake.approve({
      spender: deployedContracts.router,
      value: maxAmount
    })
    let factory = new Contracts.OSWAP_Factory(wallet, deployedContracts.factory);
    oswap = new Contracts.ERC20(wallet, deployedContracts.oswap);
    await oswap.approve({
      spender: deployedContracts.router,
      amount: maxAmount
    })
    let receipt = await addLiquidity(deployedContracts.router, cakeAddress, deployedContracts.oswap, '1', '15', deployer);
    let cakeBalance = await cake.balanceOf(deployer);
    console.log('cakeBalance', cakeBalance.toFixed());
    let oswapBalance = await oswap.balanceOf(deployer);
    console.log('oswapBalance', oswapBalance.toFixed());
    let event = factory.parsePairCreatedEvent(receipt)[0];
    CakeOswapPair = event.pair;
  })
  it('Register Pairs to Hybrid Router Registry', async function () {
    wallet.defaultAccount = deployer;
    hybridRouterRegistry = new Contracts.OSWAP_HybridRouterRegistry(wallet, deployedContracts.hybridRouterRegistry);
    await hybridRouterRegistry.registerPairByAddress({
      factory: deployedContracts.factory,
      pairAddress: CakeOswapPair
    })
  })
  it('Register an invalid pair to Hybrid Router Registry', async function () {
    wallet.defaultAccount = deployer;
    let fakePair = new EvilAmmPair(wallet);
    let fakePairAddress;
    if (new BigNumber(cake.address.toLowerCase()).lt(new BigNumber(oswap.address.toLowerCase()))) {
      fakePairAddress = await fakePair.deploy({
        token0: cake.address,
        token1: oswap.address
      });
    }
    else {
      fakePairAddress = await fakePair.deploy({
        token0: oswap.address,
        token1: cake.address
      });
    }
    let registerPairFunc = hybridRouterRegistry.registerPairByAddress({
      factory: deployedContracts.factory,
      pairAddress: fakePairAddress
    })
    try {
      await registerPairFunc;
      throw null;
    }
    catch (error) {
      console.log('error', error.message);
      assert.strictEqual(error.message, 'VM Exception while processing transaction: revert invalid pair');
    }
  })
  it('Swap with hybrid router', async function () {
    wallet.defaultAccount = deployer;
    let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, deployedContracts.hybridRouter);
    let now = await wallet.getBlockTimestamp();
    const deadline = now + 30 * 60;
    let params = {
      amountIn: Utils.toDecimals(1).dp(0),
      amountOutMin: Utils.toDecimals(0).dp(0),
      pair: [CakeOswapPair],
      tokenIn: deployedContracts.oswap,
      to: deployer,
      deadline,
      data: '0x'
    };
    await oswap.approve({
      spender: deployedContracts.hybridRouter,
      amount: maxAmount
    })
    await hybridRouter.swapExactTokensForTokens(params);
    let cakeBalance = await cake.balanceOf(deployer);
    console.log('cakeBalance', cakeBalance.toFixed());
    let oswapBalance = await oswap.balanceOf(deployer);
    console.log('oswapBalance', oswapBalance.toFixed());
  })
  it('Try to steal funds by Registering an evil factory to Hybrid Router Registry', async function () {
    wallet.defaultAccount = deployer;
    let evilAmmFactory = new EvilAmmFactory(wallet);
    let evilAmmFactoryAddress = await evilAmmFactory.deploy();

    await stakeToVote(accounts[0], accounts[0], wallet, deployment);

    let params = [
      Utils.stringToBytes32('Evil') as string,
      Utils.addressToBytes32Right(evilAmmFactoryAddress, true),
      Utils.numberToBytes32(997000, true),
      Utils.numberToBytes32(1000000, true),
      Utils.numberToBytes32(1, true)
    ];
    let voting = await voteToPass(deployer, wallet, deployment, deployment.hybridRouterRegistry, "registerProtocol", params);

    let evilRouter = new Contracts.OSWAP_Router(wallet);
    let evilRouterAddress = await evilRouter.deploy({
        WETH: deployedContracts.weth,
        factory: evilAmmFactoryAddress
    });   

    await oswap.approve({
      spender: evilRouterAddress,
      amount: maxAmount
    })
    await cake.approve({
      spender: evilRouterAddress,
      value: maxAmount
    })
    let receipt;
    if (new BigNumber(cake.address.toLowerCase()).lt(new BigNumber(oswap.address.toLowerCase()))) {
      receipt = await evilAmmFactory.createPair({
        tokenA: cake.address,
        tokenB: deployedContracts.oswap
      })
    }
    else {
      receipt = await evilAmmFactory.createPair({
        tokenA: deployedContracts.oswap,
        tokenB: cake.address
      })
    }
    let event = evilAmmFactory.parsePairCreatedEvent(receipt)[0];
    let evilAmmPair = new EvilAmmPair(wallet, event.pair);
    await evilAmmPair.setReserves({
      reserve0: Utils.toDecimals(12),
      reserve1: Utils.toDecimals(18)
    })
    await evilAmmPair.setOwner(deployer);
    await hybridRouterRegistry.registerPairByAddress({
      factory: evilAmmFactoryAddress,
      pairAddress: event.pair
    })

    await oswap.transfer({
      recipient: accounts[1],
      amount: Utils.toDecimals(5000)
    })
    await oswap.transfer({
      recipient: event.pair,
      amount: Utils.toDecimals(5000)
    })
    await cake.transfer({
      to: event.pair,
      value: Utils.toDecimals(2000)
    })

    wallet.defaultAccount = accounts[1];
    let hybridRouter = new Contracts.OSWAP_HybridRouter2(wallet, deployedContracts.hybridRouter);
    let amountsOut = await hybridRouter.getAmountsOutStartsWith({
      amountIn: Utils.toDecimals(1).dp(0),
      pair: [event.pair],
      tokenIn: deployedContracts.oswap,
      data: '0x'
    })
    let now = await wallet.getBlockTimestamp();
    const deadline = now + 30 * 60;
    let swapParams = {
      amountIn: Utils.toDecimals(1).dp(0),
      amountOutMin: amountsOut[amountsOut.length - 1],
      pair: [event.pair],
      tokenIn: deployedContracts.oswap,
      to: accounts[1],
      deadline,
      data: '0x'
    };
    await oswap.approve({
      spender: deployedContracts.hybridRouter,
      amount: maxAmount
    })

    try {
      await hybridRouter.swapExactTokensForTokens(swapParams);
      throw null;
    }
    catch (error) {
      console.log('error', error.message);
      assert.strictEqual(error.message, 'VM Exception while processing transaction: revert HybridRouter: INSUFFICIENT_OUTPUT_AMOUNT');
    }
  })
})