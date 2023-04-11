import 'mocha';
import {Utils, Wallet, BigNumber} from "@ijstech/eth-wallet";

import {OpenSwap} from '../src';
import { assertEqual, getProvider } from './helper';

let _wallet = new Wallet(getProvider());

let accounts: string[];
let oswap: OpenSwap;

const CAP = 1000000000;
const TRANSFER = 1000;

describe('OpenSwap', async () => {
    before('deploy', async () => {
        accounts = await _wallet.accounts;
        _wallet.defaultAccount = accounts[0];
        oswap = new OpenSwap(_wallet);
        await oswap.deploy({minter: accounts[1], initSupplyTo: accounts[2], initSupply: CAP/2, totalSupply: CAP});
    });
   
    it('init', async () => {
        assertEqual(await oswap.cap, new BigNumber(CAP));
        assertEqual(await oswap.totalSupply, new BigNumber(CAP/2));
        assertEqual(await oswap.balanceOf(accounts[2]), new BigNumber(CAP/2));
    });
    it('transfer', async () => {
        _wallet.defaultAccount = accounts[2];
        let event = await oswap.transfer({address: accounts[3], amount: TRANSFER});
        assertEqual(event, {from:accounts[2], to:accounts[3], value:new BigNumber(TRANSFER)}, true);
        assertEqual(await oswap.balanceOf(accounts[2]), new BigNumber(CAP/2-TRANSFER));
        assertEqual(await oswap.balanceOf(accounts[3]), new BigNumber(TRANSFER));
    });
    it('transfer from', async () => {
        _wallet.defaultAccount = accounts[2];
        let event1 = await oswap.approve({spender: accounts[3], amount: TRANSFER});
        assertEqual(event1, {owner:accounts[2], spender:accounts[3], value:new BigNumber(TRANSFER)}, true);

        _wallet.defaultAccount = accounts[3];
        let event2 = await oswap.transferFrom({sender: accounts[2], recipient: accounts[4], amount: TRANSFER/2});
        assertEqual(event2.transfer, {from:accounts[2], to:accounts[4], value:new BigNumber(TRANSFER/2)}, true);
        assertEqual(event2.approval, {owner:accounts[2], spender:accounts[3], value:new BigNumber(TRANSFER/2)}, true);
        assertEqual(await oswap.balanceOf(accounts[2]), new BigNumber(CAP/2-TRANSFER*1.5));
        assertEqual(await oswap.balanceOf(accounts[3]), new BigNumber(TRANSFER));
        assertEqual(await oswap.balanceOf(accounts[4]), new BigNumber(TRANSFER/2));
    });
});