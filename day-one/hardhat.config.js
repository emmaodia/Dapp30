require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ganache");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  // defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      chainId: 5777,
      accounts: [
        // "0x8e4f5d7e40dccfec06a809103e9611197cf30a8349607b33be3ffc0c77740257",
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
  },
};
