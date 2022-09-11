import { ethers } from "./ethers.js";
import "https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js";

const simpleContractaddress = "0x720972A3FaC15A973A4fB15B3B34561Ee12132D1";
const simpleContractabi = [];
const simpleContractcontract = new ethers.Contract(
  simpleContractaddress,
  simpleContractabi
);

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
const signer = provider.getSigner();

const add = await signer.getAddress();
// console.log(add);
// console.log(signer);

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
  helloContractabi,
  provider
);

const helloHere = async () => {
  const result = await helloContract;
  const check = await result.hello();
  return check;
};

const result = helloHere();

console.log(simpleContractcontract, helloContract, result);
console.log(helloContract.hello());
console.log(result);
console.log(helloContract.address);

function checkHello() {
  console.log("here");
  helloContract.hello().then((result) => {
    document.getElementById("hello").innerHTML = result;
    console.log(result);
  });
}

addEventListener("DOMContentLoaded", checkHello());

// function verify() {
//   console.log("DOM fully loaded and parsed");
// }

// addEventListener("DOMContentLoaded", verify());

// addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });

// onDOMContentLoaded = (event) => {
//   console.log("DOM fully loaded and parsed");
// };
