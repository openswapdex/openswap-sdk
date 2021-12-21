import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";
const Ganache = require("ganache-cli");
const {expect, use} = require("chai");

import {OpenSwap as OpenSwapContract} from '../src/contracts';
import {OpenSwap} from '../src';

use(require('chai-bignumber')(BigNumber));

let _provider = Ganache.provider();
let _wallet = new Wallet(_provider);

let accounts: string[];
let oswap: OpenSwap;

const CAP = 1000000000;
const TRANSFER = 1000;

describe('OpenSwap', async () => {
    before('deploy', async () => {
        accounts = await _wallet.accounts;
        _wallet.defaultAccount = accounts[0];
        let _oswap = new OpenSwapContract(_wallet);
        await _oswap.deploy({minter: accounts[1], initSupplyTo: accounts[2], initSupply: Utils.toDecimals(CAP/2), totalSupply: Utils.toDecimals(CAP)});
        oswap = new OpenSwap(_oswap);
    });
   
    it('init', async () => {
        expect(await oswap.cap).to.be.a.bignumber.that.equals(new BigNumber(CAP));
        expect(await oswap.totalSupply).to.be.a.bignumber.that.equals(new BigNumber(CAP/2));
        expect(await oswap.balanceOf(accounts[2])).to.be.a.bignumber.that.equals(new BigNumber(CAP/2));
    });
    it('transfer', async () => {
        _wallet.defaultAccount = accounts[2];
        let event = await oswap.transfer({address: accounts[3], amount: TRANSFER});
        expect(event).to.eql({from:accounts[2], to:accounts[3], value:new BigNumber(TRANSFER)});
        expect(await oswap.balanceOf(accounts[2])).to.be.a.bignumber.that.equals(new BigNumber(CAP/2-TRANSFER));
        expect(await oswap.balanceOf(accounts[3])).to.be.a.bignumber.that.equals(new BigNumber(TRANSFER));
    });
    it('transfer from', async () => {
        _wallet.defaultAccount = accounts[2];
        let event1 = await oswap.approve({spender: accounts[3], amount: TRANSFER});
        expect(event1).to.eql({owner:accounts[2], spender:accounts[3], value:new BigNumber(TRANSFER)});

        _wallet.defaultAccount = accounts[3];
        let event2 = await oswap.transferFrom({sender: accounts[2], recipient: accounts[4], amount: TRANSFER/2});
        expect(event2.transfer).to.eql({from:accounts[2], to:accounts[4], value:new BigNumber(TRANSFER/2)});
        expect(event2.approval).to.eql({owner:accounts[2], spender:accounts[3], value:new BigNumber(TRANSFER/2)});
        expect(await oswap.balanceOf(accounts[2])).to.be.a.bignumber.that.equals(new BigNumber(CAP/2-TRANSFER*1.5));
        expect(await oswap.balanceOf(accounts[3])).to.be.a.bignumber.that.equals(new BigNumber(TRANSFER));
        expect(await oswap.balanceOf(accounts[4])).to.be.a.bignumber.that.equals(new BigNumber(TRANSFER/2));
    });
});