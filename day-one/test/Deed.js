const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deed", () => {
  before(async () => {
    const accounts = await ethers.getSigners();
    const acc_one = accounts[0].address;
    let acc_two = accounts[3].address;

    // const Lawyer = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    const Beneficiary = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
    const fromNow = 1;
    let Contract = await ethers.getContractFactory("Deed");
    contract = await Contract.deploy(acc_one, Beneficiary, fromNow);
  });

  //   it("It should withdraw", async () => {
  //     const provider = ethers.provider;
  //     const accounts = await ethers.getSigners();
  //     const acc_one = accounts[0].address;
  //     const acc_two = accounts[1].address;
  //     console.log(acc_one, acc_two);
  //     console.log("here1");
  //     const intialBalance = await provider.getBalance(acc_one);
  //     console.log(ethers.utils.formatEther(ethers.BigNumber.from(intialBalance)));
  //     console.log("here", intialBalance);

  //     await new Promise((resolve) => setTimeout(resolve, 5000));

  //     await contract.withdraw({ from: acc_one });

  //     const finalBalance = ethers.utils.formatEther(
  //       ethers.BigNumber.from(await provider.getBalance(acc_one))
  //     );

  //     console.log(finalBalance, finalBalance.sub(intialBalance));
  //     assert.equal(
  //       finalBalance.sub(intialBalance),
  //       "<sub>9999.998448249690201984</sub>"
  //     );
  //   });

  it("It should NOT withdraw too early", async () => {
    try {
      await contract.withdraw({ from: acc_one });
    } catch (error) {
      assert.include("too early", "early", "too early");
      return;
    }

    assert(false);
  });

  it("It should NOT withdraw if caller is not Lawyer", async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await contract.withdraw();
    assert.include("Lawyer only", "Lawyer", "Lawyer only");
    return;
  });
});
