import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployNftTicketFixture } from "./shared/fixtures";

// hardcoded in smart contract
const defaultTokenURI = "https://bafkreigir6ghsggfh6nnqbhccmuornvbogtpapgfek6oyu4hzpru6fnmje.ipfs.nftstorage.link"

describe("NftTicket", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  const maxTokenAmount = 5000;

  this.beforeAll(async function(){
    const [owner, alice, bob] = await ethers.getSigners();
    
    this.signers = {}
    this.signers.owner = owner;
    this.signers.alice = alice;
    this.signers.bob = bob;
  })

  beforeEach(async function(){
    // dev - this fixture has a limit of 3 for minting NFTs for testing purposes
    const { Ticket } = await loadFixture(deployNftTicketFixture)
    this.ticket = Ticket;
  })

  it('should have correct name and symbol set',async function(){
    // as defined in fixtures.ts
    expect(await this.ticket.name()).to.be.equal('Web3 Forever Ticket')
    expect(await this.ticket.symbol()).to.be.equal('W3FT')
  })  

  it('should mint 1 nft to Alice\'s address',async function() {
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
  })
  
  it('tokenURI method should return the same URI for all tokenIds',async function(){
    // hardcoded in smart contract

    // mingint three NFT's to Alice (tokenId's of 0, 1, and 2)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,1)
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,2)

    // getting URI's for minted tokens
    const nftUri0 = await this.ticket.tokenURI(0)
    const nftUri1 = await this.ticket.tokenURI(1)
    const nftUri2 = await this.ticket.tokenURI(2)

    
    expect(nftUri0).to.be.equal(nftUri1).and.to.be.equal(nftUri2).and.to.be.equal(defaultTokenURI)
  })

  it('should revert retrieving tokenURI for nonexistent token',async function(){
    await expect(this.ticket.tokenURI(0)).to.be.revertedWith("ERC721Metadata: URI query for nonexistent token")
  })

  it('should return correct tokenURI returned for minted token',async function(){
    await expect(this.ticket.connect(this.signers.alice).mint()).to.emit(this.ticket,"TicketMinted").withArgs(this.signers.alice.address,0)
    expect(await this.ticket.tokenURI(0)).to.be.equal(defaultTokenURI)
  })
  
  it('should revert mint exceeding the max token amount',async function(){
    // max amount is set to 3 in our fixtures during deployment
    await this.ticket.connect(this.signers.alice).mint()
    await this.ticket.connect(this.signers.alice).mint()
    await this.ticket.connect(this.signers.alice).mint()

    await expect(this.ticket.mint()).to.be.revertedWithCustomError(this.ticket,"NoMoreTicketsLeft")
  })
});
