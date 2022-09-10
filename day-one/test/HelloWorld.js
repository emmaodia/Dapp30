const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  it("It Should return 'Hello, World!' ", async function () {
    const Contract = await ethers.getContractFactory("HelloWorld");
    const contract = await Contract.deploy();
    expect(await contract.hello()).equal("Hello, World!");
  });
});
