const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("Advanced Storage", () => {
  it("It should stored data", async () => {
    const Contract = await ethers.getContractFactory("AdvancedStorage");
    const contract = await Contract.deploy();
    // console.log(contract);
    await contract.add(1);
    const result = await contract.get(0);
    console.log(result);
    expect(result).equal(1);
  });

  it("It should return stored data", async () => {
    const Contract = await ethers.getContractFactory("AdvancedStorage");
    const contract = await Contract.deploy();

    await contract.add(1);

    const result = contract.ids(0);

    assert(result, 1);
  });

  it("It should return all the stored items on the array", async () => {
    const Contract = await ethers.getContractFactory("AdvancedStorage");
    const contract = await Contract.deploy();

    await contract.add(1);
    await contract.add(1);
    await contract.add(1);
    await contract.add(1);
    await contract.add(1);

    const result = await contract.getAll();
    console.log(result);
    console.log(result.length);
    expect(result.length).equal(5);
  });
});
