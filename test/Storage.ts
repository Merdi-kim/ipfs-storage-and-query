import { expect } from "chai";
import { ethers } from "hardhat";
import {Web3Storage} from 'web3.storage'

describe("Storage", function () {

  async function deployStorageContract() {
  
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed()
    return {owner, otherAccount, storage};
  }

  it('should add data to storage or fail', async() => {
    const storageClient = new Web3Storage({ token: process.env.STORAGE_TOKEN! })
    const obj = { word: 'storage testing' }
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
    const cid = await storageClient.put([new File([blob], 'hello.json')])
    const {owner,otherAccount, storage} = await deployStorageContract()
    const tx = await storage.storeData(cid.trim())
    const transaction = await tx.wait()
    const args = transaction.events![0]
    expect(args.args![0]).to.equal(true)
  })
  
});