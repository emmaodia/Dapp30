import { ethers } from "./ethers.js";
import "https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js";

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
const signer = provider.getSigner();

const simpleStorageContractaddress =
  "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const simpleStorageContractabi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getGreeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Contract = new ethers.Contract(
  simpleStorageContractaddress,
  simpleStorageContractabi,
  signer
);

const add = await signer.getAddress();
console.log(Contract);
// console.log(add);

function doSomething() {
  const $setData = document.getElementById("setData");
  const $data = document.getElementById("data");

  $setData.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = e.target.elements[0].value;
    console.log(data);
    Contract.set(data);
    getData();
  });

  const getData = () => {
    Contract.data().then((result) => {
      $data.innerHTML = result;
    });
  };
}
addEventListener("DOMContentLoaded", doSomething());
