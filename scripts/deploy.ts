import { ethers } from "hardhat";

async function main() {
  // constructor arguments
  const tokenName = 'Web3 Forever Ticket'
  const tokenSymbol = "W3FT"
  const maxTokenAmount = 5000;

  console.log('deploying NftTicket contract...')
  const NftTicketFactory = await ethers.getContractFactory("NftTicket");
  const Ticket = await NftTicketFactory.deploy(tokenName,tokenSymbol, maxTokenAmount);
  
  console.log('Waiting for deployment confirmation...')
  await Ticket.deployed()

  console.log(`NFT ticket contract deployed to ${Ticket.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
