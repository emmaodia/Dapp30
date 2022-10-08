const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Storage", function () {
  it("It Should return stored data ", async function () {
    const Contract = await ethers.getContractFactory("SimpleStorage");
    const contract = await Contract.deploy();
    await contract.setGreeting("this");

    const result = await contract.getGreeting();
    console.log(result);
    assert.equal(result, "this");
  });
});
