import 'mocha';
import {Utils, Wallet} from "@ijstech/eth-wallet";
import {deploy, OSWAP_Factory} from "../src";
import {WETH9} from './contracts/WETH9';
import * as Ganache from "ganache-cli";
import * as assert from 'assert';

suite('##Deploy Contracts to Ganache', function() {
    this.timeout(400000);    
    let provider = Ganache.provider()        
    let wallet = new Wallet(provider);    
    let accounts: string[];
    
    setup(async function(){
        accounts = await wallet.accounts;
        wallet.defaultAccount = accounts[0];
    })
    test('Deploy contracts', async function(){
        let weth = new WETH9(wallet);
        let wethAddr = await weth.deploy();
        let result = await deploy(wallet, {
            govTokenOptions:{
                initSupply: Utils.toDecimals(2000000, 18),
                initSupplyTo: accounts[0],
                minter: accounts[0],
                totalSupply: Utils.toDecimals(1000000000, 18)
            },
            tokens: {
                weth: wethAddr
            }
        });
        let token = wallet.token(result.oswap);
        let balance = await token.balanceOf(accounts[0]);
        assert.strictEqual(balance.eq(2000000), true)
        let minter = await token.minter();        
        assert.strictEqual(minter, accounts[0]);
    })    
})