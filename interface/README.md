# NFT ticket project interface
The interface for the NFT Ticket minting page for the Web3 Forever event.

## Setup

Open a terminal window in the folder "interface" and run the following commands:

```
npm install
```
```
cp .env.example .env
```

Next, set the following variables in the .env file:

```md
REACT_APP_INFURA_API_KEY= <infura_api_key>
REACT_APP_PROJECT_ID= <wallet_connect_project_id>

REACT_APP_CONTRACT_ADDRESS=<address_of_deployed_contract>
```
`Please note:` The address of the contract must be on the avalanche mainnet under the current configuration. If you would like to use a different chain, open the file ./src/wagmi.js to make the necessary updates.

-----

After this, you may run:

```
npm run start
```
