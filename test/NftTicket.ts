import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NftTicket", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  const maxTokenAmount = 5000;

  async function deployOneYearLockFixture() {
    const NftTicketFactory = await ethers.getContractFactory("NftTicket");
    const Ticket = await NftTicketFactory.deploy('Ticket',"TKT", maxTokenAmount);
    await Ticket.deployed()

    return { Ticket };
  }

  this.beforeAll(async function(){
    const [owner, alice, bob] = await ethers.getSigners();
    
    this.signers = {}
    this.signers.owner = owner;
    this.signers.alice = alice;
    this.signers.bob = bob;
  })

  beforeEach(async function(){
    const { Ticket } = await loadFixture(deployOneYearLockFixture)
    this.ticket = Ticket;
  })

  it('should mint 1 nft to Alice\'s address',async function() {
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
  })
});
