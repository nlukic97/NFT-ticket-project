import { ethers } from "hardhat";

// constructor arguments
const tokenName = 'Web3 Forever Ticket'
const tokenSymbol = "W3FT"
const maxTokenAmount = 3;

export async function deployNftTicketFixture() {
    const NftTicketFactory = await ethers.getContractFactory("NftTicket");
    const Ticket = await NftTicketFactory.deploy(tokenName, tokenSymbol, maxTokenAmount);
    await Ticket.deployed()
    return { Ticket };
  }