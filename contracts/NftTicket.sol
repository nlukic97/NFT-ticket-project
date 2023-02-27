// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftTicket is ERC721 {
    using Counters for Counters.Counter;
    
    Counters.Counter private tokenId;
    
    uint256 private highestTokenId;

    constructor(string memory _name, string memory _symbol, uint256 _maxTokenAmount) ERC721(_name,_symbol) {
        // For _maxTokenAmount of 5000, the highest tokenId will be 4999
        highestTokenId = _maxTokenAmount - 1;
    }

    event TicketMinted(address receiver, uint256 nftId);

    error NoMoreTicketsLeft();

    modifier limitTokenAmount() {
        if(tokenId.current() > highestTokenId) revert NoMoreTicketsLeft();
        _;
    }

    /// @notice Returns the url link to the json metadata.
    /// @dev Overriding method to return same url for all NFT's
    function tokenURI(uint256 _tokenId) public view override returns(string memory){
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");
        return "https://bafkreigir6ghsggfh6nnqbhccmuornvbogtpapgfek6oyu4hzpru6fnmje.ipfs.nftstorage.link";
    }

    /// @notice Mints an NFT to a wallet address
    /// @dev Applies the limitTokenAmount modifier
    function mint() external limitTokenAmount {
        uint256 currentId = tokenId.current();
        _mint(msg.sender, currentId);

        emit TicketMinted(msg.sender,currentId);
        tokenId.increment(); // for next tokenId
    }
}
