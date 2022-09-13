const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Storage", function () {
  it("It Should return stored data ", async function () {
    const Contract = await ethers.getContractFactory("SimpleStorage");
    const contract = await Contract.deploy();
    await contract.set("this");

    const result = contract.data;
    //  const result = contract.get();

    assert(result, "this");
  });
});
