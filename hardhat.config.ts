import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// import "./tasks/index"

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const mnemonic = process.env.MNEMONIC
if(!mnemonic)  throw new Error('Please set the .env variable MNEMONIC')


const FORK_FUJI = true
const FORK_MAINNET = false

const forkingData = FORK_FUJI ? {
  url: 'https://api.avax-test.network/ext/bc/C/rpc',
} : FORK_MAINNET ? {
  url: 'https://api.avax.network/ext/bc/C/rpc'
} : undefined

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData
    },
    local: {
      url: 'http://localhost:9650/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43112,
      accounts: {
        mnemonic
      }
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    }
  }
}

export default config