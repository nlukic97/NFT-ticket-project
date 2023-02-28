# NFT ticket project smart contracts
The hardhat project for the NFT Ticket minting page for the Web3 Forever event.

Deployment and verified at: https://snowtrace.io/address/0x5a9e0072C10e2917F890DD5b36a1E6c1e8F6D2E2#code 

## Local Setup

Open a terminal window in the root of this project and run the following commands:

```
npm install
```
```
cp .env.example .env
```

Next, set the following variables in the .env file:

```md
MNEMONIC=<your_twelve_word_wallet_mnemonic_should_go_here>
SNOWTRACE_API_KEY=<api_key_from_snowtrace_explorer>
REPORT_GAS=<true or false>
```

Finally, you may run the following commands:
```
npm run compile
```

```
npm run typechain
```

```
npm run test
```