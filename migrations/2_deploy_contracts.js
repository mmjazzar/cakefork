
const CakeToken = artifacts.require("CakeToken");
const BnbStaking = artifacts.require("BnbStaking");
const LotteryRewardPool = artifacts.require("LotteryRewardPool");
const MasterChef = artifacts.require("MasterChef");
const SousChef = artifacts.require("SousChef");
const SyrupBar = artifacts.require("SyrupBar");
const Timelock = artifacts.require("Timelock");

// Timelock
const admin = '0x01851c2EB94e44854646D8426B473586035d89D5';
const delay = '28800'

// BnB Stacking
const MockBEP20 = artifacts.require('libs/MockBEP20');
const WBNB = artifacts.require('libs/WBNB');
const cakeTokenAddress = "0x5D09fDC174580709CC8E9Ca8aBE49E01d4cccC38";

// lottery reward
const winner = '0x275f0E9d23FAdf655547CAd4707F34eB37E767e4';
const chefAddress = '0x9Be685f1E01949700111382640A77B3FFE1797b7';
module.exports = async(deployer) =>{
 const rewardToken = await deployer.deploy(CakeToken);
 await deployer.deploy(Timelock,admin,delay);
 const wBNB = await deployer.deploy(WBNB);
 await deployer.deploy(BnbStaking, wBNB.address,
  cakeTokenAddress,
  1000,
  10,
  1010,
  admin,
  wBNB.address);
 const syrap = await deployer.deploy(SyrupBar,cakeTokenAddress);
 const chef = await deployer.deploy(MasterChef,cakeTokenAddress,syrap.address, admin, '100','100');
 await deployer.deploy(LotteryRewardPool,chefAddress, cakeTokenAddress, admin, winner );
 await deployer.deploy(SousChef,syrap.address,'40', '300', '400' );
};
