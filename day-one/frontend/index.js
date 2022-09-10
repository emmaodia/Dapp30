import { ethers } from "./ethers.js";
import "https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js";

const simpleContractaddress = "0x720972A3FaC15A973A4fB15B3B34561Ee12132D1";
const simpleContractabi = [];
const simpleContractcontract = new ethers.Contract(
  simpleContractaddress,
  simpleContractabi
);

const helloContractaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const helloContractabi = [
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const helloContract = new ethers.Contract(
  helloContractaddress,
  helloContractabi
);

const helloHere = async () => {
  const result = await helloContract;
  const check = result.populateTransaction.hello().data;
  return check;
};

const result = helloHere();

console.log(simpleContractcontract, helloContract, result);
console.log(helloContract.address);

document.addEventListener("DOMContentLoaded", () => {
  helloContract.callStatic.hello().then((result) => {
    document.getElementById("hello").innerHTML = result;
  });
});
