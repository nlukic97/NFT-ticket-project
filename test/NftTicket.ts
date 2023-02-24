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
  
  it('tokenURI method should return the same string no matter the tokenId',async function(){
    // mingint three NFT's to Alice (tokenId's of 0, 1, and 2)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)

    // getting URI's for minted tokens
    const nftUri0 = await this.ticket.tokenURI(0)
    const nftUri1 = await this.ticket.tokenURI(1)
    const nftUri2 = await this.ticket.tokenURI(2)

    expect(nftUri0).to.be.equal(nftUri1).and.to.be.equal(nftUri2)

  })
});
