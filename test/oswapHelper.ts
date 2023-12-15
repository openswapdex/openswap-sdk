import * as OSWAP from "../src";
import { Contract } from "@ijstech/eth-contract";
import {Wallet, Erc20, BigNumber, Utils, TransactionReceipt} from "@ijstech/eth-wallet";


const TIME_FOR_VOTING = 10;
export async function stakeToVote(deployer:string, staker:string, wallet: Wallet, oswap: OSWAP.IDeploymentContracts, toWait?:boolean){
    let votingConfig = (await oswap.governance.votingConfigs(Utils.stringToBytes32("vote") as string));
    let amount = Utils.fromDecimals(BigNumber.max(votingConfig.minOaxTokenToCreateVote, votingConfig.minQuorum));
    wallet.defaultAccount = deployer;
    await oswap.openSwap.mint({address:staker, amount:amount});
    wallet.defaultAccount = staker;
    await oswap.openSwap.approve({spender:oswap.governance.address, amount:amount});
    await oswap.governance.stake(Utils.toDecimals(amount));
    let wait = (await oswap.governance.minStakePeriod()).toNumber() + 1/*networks[mainChainName].blockTime*/;
    if (toWait){
        console.log(`sleep for ${wait}s`);
        await Utils.sleep(wait*1000);
    } else {
        await wallet.setBlockTime(wait);
    }
    await oswap.governance.unlockStake();    
}
export async function newVote(wallet: Wallet, oswap: OSWAP.IDeploymentContracts, executor:Contract, type:string, param:string[]):Promise<OSWAP.Contracts.OAXDEX_VotingContract> {
    let now = <number>(await wallet.web3.eth.getBlock('latest')).timestamp;
    let votingConfig = (await oswap.governance.votingConfigs(Utils.stringToBytes32("vote") as string));
    let quorum = votingConfig.minQuorum;
    let threshold = Utils.toDecimals("0.5");
    let voteEndTime = now + votingConfig.minVoteDuration.toNumber() + TIME_FOR_VOTING;
    let exeDelay = votingConfig.minExeDelay.toNumber();
console.log('executor',executor.address)
    let receipt = await oswap.registry.newVote({
        executor: executor.address,
        name: Utils.stringToBytes32(type) as string,
        options: [Utils.stringToBytes32('Y') as string, Utils.stringToBytes32('N') as string],
        quorum: quorum,
        threshold: threshold,
        voteEndTime: voteEndTime,
        executeDelay: exeDelay,
        executeParam: [Utils.stringToBytes32(type) as string].concat(param)
    });
    let events = oswap.governance.parseNewVoteEvent(receipt)[0];
    let voteAddr = events.vote;
    console.log("voting address " + voteAddr);

    let voting = new OSWAP.Contracts.OAXDEX_VotingContract(wallet, voteAddr);

    return voting;
}
export async function voteToPass(voter: string, wallet: Wallet, oswap: OSWAP.IDeploymentContracts, executor:Contract, type:string, param:string[], toWait?:boolean):Promise<TransactionReceipt> {
    wallet.defaultAccount = voter;
    let voting = await newVote(wallet, oswap, executor, type, param);
    await voting.vote(0);

    let now = <number>(await wallet.web3.eth.getBlock('latest')).timestamp;
    let end = (await voting.voteEndTime()).plus(await voting.executeDelay()).toNumber() + 3/*networks[chain].blockTime*/;
    if (end>now) {
        if (toWait) {
            console.log(`sleep for ${end-now}s`);
            await Utils.sleep((end-now)*1000);
        } else {
            await wallet.setBlockTime((end-now)*1000);
            await wallet.send(wallet.defaultAccount, 0); // mine one block
        }
    }
    return await voting.execute();
}