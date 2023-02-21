import { ethers } from "hardhat";

async function main() {
  const maxTokenAmount = 5000;

  const NftTicketFactory = await ethers.getContractFactory("NftTicket");
    const Ticket = await NftTicketFactory.deploy('Ticket',"TKT", maxTokenAmount);
    await Ticket.deployed()

  console.log(`NFT ticket contract deployed to ${Ticket.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
