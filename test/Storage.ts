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
    return {owner, otherAccount, storage};
  }

  it('should add data to storage', async() => {
    const uri = 'hhhhhhhh'
    const {owner,otherAccount, storage} = await deployStorageContract()
    const tx = await storage.storeData(uri)
    const transaction = await tx.wait()
    const args = transaction.events![0]
    expect(args.args![0]).to.equal(uri)
  })
  
});