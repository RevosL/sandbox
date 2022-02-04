/*
SPDX-License-Identifier: MIT
*/
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MemoryToken is ERC721URIStorage {

    using Counter for Counter.Counter;

    Counters.counter private _tokenIdCounter;


}