const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleSmartContract", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  // async function contract() {
  //   // Contracts are deployed using the first signer/account by default
  //   const [owner, otherAccount] = await ethers.getSigners();

  //   const SimpleSmartContract = await ethers.getContractFactory(
  //     "SimpleSmartContract"
  //   );
  //   const simpleSmartContract = await SimpleSmartContract.deployed();

  //   return { simpleSmartContract };
  // }

  describe("Deployment", function () {
    it("Should return the deployed Contract Instance", async function () {
      const Contract = await ethers.getContractFactory("SimpleSmartContract");
      const simpleSmartContract = await Contract.deploy();
      console.log(simpleSmartContract.address);
      expect(await simpleSmartContract.address).to.include("0x");
    });
  });
});
