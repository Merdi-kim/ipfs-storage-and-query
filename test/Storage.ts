import { expect } from "chai";
import { isAddress } from "ethers/lib/utils";
import { ethers } from "hardhat";

describe("Storage", function () {

  async function deployStorageContract() {
  
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed()
    return {owner, otherAccount, address:storage.address};
  }

  it('should deploy contract and make sure contract address is not empty address', async() => {
    const {owner,otherAccount,address} = await deployStorageContract()
    expect(address).not.equals(ethers.constants.AddressZero)
  })

  
});