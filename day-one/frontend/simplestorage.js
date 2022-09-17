import { ethers } from "./ethers.js";
import "https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js";

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
const signer = provider.getSigner();

const simpleStorageContractaddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const simpleStorageContractabi = [
  {
    inputs: [],
    name: "data",
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
    inputs: [
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Contract = new ethers.Contract(
  simpleStorageContractaddress,
  simpleStorageContractabi,
  provider
);

const add = await signer.getAddress();
console.log(Contract);
