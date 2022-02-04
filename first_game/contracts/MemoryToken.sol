/*
SPDX-License-Identifier: MIT
*/
pragma solidity ^0.8.0;

import "node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract MemoryToken is ERC721URIStorage {

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Memory Token", "MTT") {}

    function mint(address wallet, string memory _tokenURI) public returns(uint256) {

    }
}