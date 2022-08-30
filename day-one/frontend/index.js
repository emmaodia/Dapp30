import { ethers } from "./ethers.js";
import "https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js";

const address = "0x720972A3FaC15A973A4fB15B3B34561Ee12132D1";
const abi = [];
const contract = new ethers.Contract(address, abi);

console.log(contract);
