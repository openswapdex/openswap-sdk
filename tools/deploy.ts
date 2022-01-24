
import {Utils, Wallet} from "@ijstech/eth-wallet";
import {deploy, deployRestrictedPairOracle, deployOracleContracts} from "../src";
import * as Config from '../data/config';

const rpcUrl = Config.rpcUrl;
const deployerAddress = Config.deployer.address;
const privateKey = Config.deployer.privateKey;
const protocolFeeTo = Config.deployer.address;
const deploymentConfig = Config.deploymentConfig;

async function deployOracle() {
    let wallet = new Wallet(rpcUrl, {
        address: deployerAddress, 
        privateKey
    })   
    let accounts = await wallet.accounts;
    wallet.defaultAccount = accounts[0];
    let result = await deployRestrictedPairOracle(wallet);
    console.log('result', result);
}

async function deployPeggedQueue() {
    let wallet = new Wallet(rpcUrl, {
        address: deployerAddress, 
        privateKey
    })   
    let accounts = await wallet.accounts;
    wallet.defaultAccount = accounts[0];
    let result = await deployOracleContracts(wallet, {
        governance: deploymentConfig.governance,
        feePerDelegator: Utils.toDecimals(100),
        protocolFee: 10000,
        protocolFeeTo,
        tradeFee: 100
    }, {
        weth: deploymentConfig.weth,
        factory: deploymentConfig.ammFactory,
    });
    console.log('result', result);
}

async function deployAll() {
    let wallet = new Wallet(rpcUrl, {
        address: deployerAddress, 
        privateKey
    })   
    let accounts = await wallet.accounts;
    wallet.defaultAccount = accounts[0];
    let result = await deploy(wallet, {
        govTokenOptions:{
            initSupply: Utils.toDecimals(80000000000),
            initSupplyTo: accounts[0],
            minter: accounts[0],
            totalSupply: Utils.toDecimals(5000000000000)
        },
        govOptions: {
            minStakePeriod: 1,
            tradeFee: 0.2,
            protocolFee: 0,
            protocolFeeTo,
            profiles: {
                name: ['poll','vote','addOldOracleToNewPair'],
                minExeDelay: [1,1,1],
                minVoteDuration: [0,0,0],
                maxVoteDuration: [1209600,1209600,1209600], 
                minGovTokenToCreateVote: [Utils.toDecimals(100000),Utils.toDecimals(100000),Utils.toDecimals(100000)],
                minQuorum: [Utils.toDecimals(0),Utils.toDecimals(10000000),Utils.toDecimals(100)]
            }
        },
        tokens: {
            weth: deploymentConfig.weth
        },
        amm: {
            protocolFee: 0,
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
            stakeAmount: [Utils.toDecimals(3500),Utils.toDecimals(5000),Utils.toDecimals(7500),Utils.toDecimals(10000)],
            liquidityProviderShare: [10000,25000,50000,90000],
            protocolFeeTo,
            tradeFee: 100
        },
        restricted: {
            protocolFee: 10000,
            protocolFeeTo,
            tradeFee: 100
        }
    });
}

// deployAll();
// deployOracle();
// deployPeggedQueue();