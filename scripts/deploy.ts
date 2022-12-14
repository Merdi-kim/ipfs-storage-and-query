import { ethers } from "hardhat";

async function deployContract() {
  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy()
  await storage.deployed()
  console.log(`contract storage deployed to: ${storage.address}`)
}

deployContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


