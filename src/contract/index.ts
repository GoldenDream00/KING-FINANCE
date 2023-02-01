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
    signer =  await signer_;
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
        console.log({ signer })
        const _allownace = await currencyContract.allowance(address, contracts.King.staking);
        const allowance = _allownace.toString();
        const isAllow = allowance > '100000000000';
        return isAllow
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

    const _totalLocked = await StakingContract.totalUsersStake();
    const totalLocked = parseFloat(ethers.utils.formatUnits(_totalLocked.toString(), 9)).toFixed(4);

    const _totalUserRewards = await StakingContract.totalUsersRewards();
    const totalUserRewards = parseFloat(ethers.utils.formatUnits(_totalUserRewards.toString(), 9)).toFixed(4);

    // get APY
    const apy = getAPY(totalLocked);
    
    freeData.push(totalLocked, totalUserRewards, apy);
    return freeData;
}

export const getUserData = async (address: string | undefined) => {
    const userData:any = [];
    if(Staking !== null) {
        const userInfos = await Staking.userInfo(address);
        console.log({ Staking, userInfos })
        const deposit = parseFloat(ethers.utils.formatUnits(userInfos[0].toString(), 9)).toFixed(4);
        const lockTime = (parseInt(userInfos[2])).toString();
        
        const _rewardDebt = ethers.utils.formatUnits(await Staking.pendingReward(address), 9)
        const __rewardDebt = parseFloat(_rewardDebt);
        const rewardDebt = __rewardDebt.toFixed(4).toString();

        const isApprove = await isApproved(address);
        const kingBalance = await getKingBalance(address);
        
        userData.push(deposit, lockTime, rewardDebt, isApprove, kingBalance);
        console.log({ userData })
        return userData;
    }
}

export const getKingBalance = async(address: string | undefined) => {
    console.log({ signer })
    const _kingBalance = await currencyContract.balanceOf(address);
    const kingBalance = parseFloat(ethers.utils.formatUnits(_kingBalance.toString(), 9)).toFixed(2);
    return kingBalance
}

const getAPY = (_totalLocked: string) => {
     // APY 
    const totalLocked = parseFloat(_totalLocked);
    // const __totalLocked = await currencyContract.balanceOf(contracts.King.staking);
    // const totalLocked = parseFloat(ethers.utils.formatUnits(__totalLocked.toString(), 9));
    console.log({ totalLocked })

    // const no_of_reward_tokens = 0.3250 * (28800 * 365); 
    // const total_value_of_reward_token = no_of_reward_tokens * totalLocked;
    // const tokenPrice = 0.035;
    // const total_value_of_staked_token = totalLocked * tokenPrice;
    // const apr = ((total_value_of_reward_token / total_value_of_staked_token) * 100);
    // const apyCalc = {
    //     compoundFrequency: 1,
    //     days: 365,
    //     performanceFee: 0.23
    // };
    // const daysAsDecimalOfYear = apyCalc.days / 365;
    // const aprAsDecimal = apr / 100;
    // const timesCompounded = 365 * apyCalc.compoundFrequency;
    // let apyAsDecimal = (apr / 100) * daysAsDecimalOfYear;
    // if (timesCompounded > 0) {
    //     apyAsDecimal = (1 + aprAsDecimal / timesCompounded) ** (timesCompounded * daysAsDecimalOfYear) - 1;

    //     const _apyAs1 = 1 + aprAsDecimal / timesCompounded;
    //     const _apyAs2 = timesCompounded * daysAsDecimalOfYear;
        
    //     console.log({ _apyAs1,  _apyAs2})
    // }
    // if (apyCalc.performanceFee !== 0) {
    //   const performanceFeeAsDecimal = apyCalc.performanceFee / 100;
    //   const takenAsPerformanceFee = apyAsDecimal * performanceFeeAsDecimal;
    //   apyAsDecimal -= takenAsPerformanceFee;
    // }
    
    // return parseFloat((apyAsDecimal * 100).toFixed(2));
    const rewardPerBlock = 0.3250
    const blockPerSecond = 0.33
    const apy = (((rewardPerBlock *blockPerSecond * 86400 * 365) / totalLocked) * 100).toFixed(2)
    return apy;
}