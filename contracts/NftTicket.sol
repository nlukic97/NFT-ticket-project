// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftTicket is ERC721, Ownable {
    using Counters for Counters.Counter;

    uint256 public constant mintingPrice = 1 ether * 0.001;
    Counters.Counter private tokenId;
    uint256 private highestTokenId;

    constructor(string memory _name, string memory _symbol, uint256 _maxTokenAmount) ERC721(_name,_symbol) {
        // For _maxTokenAmount of 5000, the highest tokenId will be 4999
        highestTokenId = _maxTokenAmount - 1;
    }

    event FundsWithdrawn();
    event TicketMinted(address receiver, uint256 nftId);

    error NoMoreTicketsLeft();
    error InsufficientTokenAmount();

    modifier limitTokenAmount() {
        if(tokenId.current() > highestTokenId) revert NoMoreTicketsLeft();
        _;
    }

    /// @notice Returns the url link to the json metadata.
    /// @dev Overriding method to return same url for all NFT's
    function tokenURI(uint256 _tokenId) public view override returns(string memory){
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");
        return "https://bafkreigir6ghsggfh6nnqbhccmuornvbogtpapgfek6oyu4hzpru6fnmje.ipfs.nftstorage.link"; // or should it be this: ipfs://bafkreigir6ghsggfh6nnqbhccmuornvbogtpapgfek6oyu4hzpru6fnmje
    }

    /// @notice Mints an NFT to a wallet address
    /// @dev Applies the limitTokenAmount modifier
    function mint() external payable limitTokenAmount {
        if(msg.value != (mintingPrice)) revert InsufficientTokenAmount();

        uint256 currentId = tokenId.current();
        _mint(msg.sender, currentId);

        emit TicketMinted(msg.sender,currentId);
        tokenId.increment(); // for next tokenId
    }

    /// @notice Withdraws all fdepoisted funds to the wallet of the function caller.
    /// Callable only by the contract owner.
    function withdraw() external onlyOwner {
        if(address(this).balance == 0) revert("No funds to withdraw");

        (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
        if(!success) revert('Unable to withdraw funds');

        emit FundsWithdrawn();
    }
}
