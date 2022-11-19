import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/LhltBAHnspBMIgCx1SsxYJqM_rJOeZYe',
      accounts: [`0x${privateKey}`]
    }
  }
};

export default config;
