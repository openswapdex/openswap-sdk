import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
import {ERC20DelayFixedSupply} from "./src/contracts";

const {expect, use} = require("chai");
use(require('chai-bignumber')(BigNumber));

const Ganache = require("ganache");

let _provider = Ganache.provider();
let _wallet = new Wallet(_provider);

let accounts: string[];

let token:ERC20DelayFixedSupply; 

describe('OpenSwap', async () => {
    before('deploy', async () => {
        accounts = await _wallet.accounts;
        _wallet.defaultAccount = accounts[0];
        token = new ERC20DelayFixedSupply(_wallet);
        await token.deploy({minter:accounts[1],name:"ERC20DelayFixedSupply",symbol:"ONCE"});
    });
    it('non minter can\'t mint', async () => {
        try {
            await token.mint({to:accounts[2], amount:Utils.toDecimals(1000)});
            throw new Error("Exception not thrown");
        } catch(e) {
            if (!e.message.includes("Not from minter")) {
                throw e;
            }
        }
    });
    it('minter can mint', async () => {
        _wallet.defaultAccount = accounts[1];
        await token.mint({to:accounts[2], amount:Utils.toDecimals(1000)});
        let balance = await token.balanceOf(accounts[2]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(1000));
    });
    it('can\'t mint more', async () => {
        try {
            await token.mint({to:accounts[2], amount:Utils.toDecimals(1000)});
            throw new Error("Exception not thrown");
        } catch(e) {
            if (!e.message.includes("Already minted")) {
                throw e;
            }
        }
    });
    it('can transfer', async () => {
        _wallet.defaultAccount = accounts[2];
        await token.transfer({recipient:accounts[3], amount:Utils.toDecimals(300)});
        let balance = await token.balanceOf(accounts[2]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(700));
        balance = await token.balanceOf(accounts[3]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(300));
    });
    it('can transfer from', async () => {
        _wallet.defaultAccount = accounts[3];
        await token.approve({spender:accounts[4], amount:Utils.toDecimals(200)});

        _wallet.defaultAccount = accounts[4];
        await token.transferFrom({sender:accounts[3], recipient:accounts[5], amount:Utils.toDecimals(100)});
        let balance = await token.balanceOf(accounts[3]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(200));
        balance = await token.balanceOf(accounts[4]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(0));
        balance = await token.balanceOf(accounts[5]);
        expect(balance).to.be.a.bignumber.that.equals(Utils.toDecimals(100));
    });
});
