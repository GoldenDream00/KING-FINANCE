/* eslint-disable no-console */

import { ethers } from 'ethers';
import contracts from './contracts.json';
import { erc20ABI } from 'wagmi'

let signer: any = null;
let provider: any = null;

let Staking: any = null;

let StakingWithSigner: any = null;
let currencyContract: any = null;

export const initializeWeb3 = async (provider_: any, signer_: any) => {
    currencyContract = new ethers.Contract(contracts.King.address, erc20ABI, signer_);
    StakingWithSigner = new ethers.Contract(contracts.King.staking, contracts.King.abi, signer_);
    Staking = new ethers.Contract(contracts.King.staking, contracts.King.abi, provider_);

    provider =  provider_;
    signer =  signer_;
    console.log({ provider, signer });
};

export const approve = async () => {
    if(signer !== null && signer !== undefined) {
        const max_allow = '115792089237316195423570985008687907853269984665640564039457584007913129639934'
        const tx =  await currencyContract.approve(contracts.King.staking, max_allow);
        await tx.wait();
    }
}

export const isApproved = async (address: string | undefined) => {
    if(signer !== null && signer !== undefined) {
        console.log({ signer })
        const _allownace = await currencyContract.allowance(address, contracts.King.staking);
        const allowance = _allownace.toString();
        const isAllow = allowance > '100000000000';
        return isAllow
    }
}

export const tokenDeposit = async (amount: number) => {
    const tx = await StakingWithSigner.deposit((amount * (10 ** 9)).toString());
    await tx.wait();
}

export const compound = async () => {
    const tx = await StakingWithSigner.compound();
    await tx.wait();
}

export const withdraw = async (amount: number) => {
    const tx = await StakingWithSigner.withdraw((amount * (10 ** 9)).toString());
    await tx.wait();
}

export const getFreeData = async () => {
    const freeData = [];
    const rpc = "https://bsc-testnet.public.blastapi.io";
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const StakingContract = new ethers.Contract(contracts.King.staking, contracts.King.abi, provider);
    const _totalUserRewards = await StakingContract.totalUsersRewards();
    const totalUserRewards = parseFloat(ethers.utils.formatUnits(_totalUserRewards.toString(), 9)).toFixed(4);
    const _totalLocked = await StakingContract.totalUsersStake();
    const totalLocked = parseFloat(ethers.utils.formatUnits(_totalLocked.toString(), 9)).toFixed(4);
    freeData.push(totalUserRewards, totalLocked);
    return freeData;
}

export const getUserData = async (address: string | undefined) => {
    const userData:any = [];
    if(Staking !== null) {
        const userInfos = await Staking.userInfo(address);
        console.log({ Staking, userInfos })
        const deposit = parseFloat(ethers.utils.formatUnits(userInfos[0].toString(), 9)).toFixed(4);
        const lockTime = (parseInt(userInfos[2])).toString();
        
        const _rewardDebt = ethers.utils.formatUnits(userInfos[1], 9)
        const __rewardDebt = parseInt(_rewardDebt) / 10000;
        const rewardDebt = __rewardDebt.toFixed(4).toString()

        const isApprove = await isApproved(address);
        const kingBalance = await getKingBalance(address);
        
        userData.push(deposit, lockTime, rewardDebt, isApprove, kingBalance);
        return userData;
    }
}

export const getKingBalance = async(address: string | undefined) => {
     if(signer !== null && signer !== undefined) {
        console.log({ signer })
        const _kingBalance = await currencyContract.balanceOf(address);
        const kingBalance = parseFloat(ethers.utils.formatUnits(_kingBalance.toString(), 9)).toFixed(2);
        return kingBalance
     }
}