const hre = require("hardhat");

async function main() {
  const Lawyer = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const Beneficiary = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
  const fromNow = 10;

  const Contract = await hre.ethers.getContractFactory("Deed");
  const contract = await Contract.deploy(Lawyer, Beneficiary, fromNow);

  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
