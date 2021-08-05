//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/metatx/MinimalForwarder.sol';
import '@openzeppelin/contracts/access/AccessControlEnumerable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Context.sol';

import './ERC2771Context.sol';
import './ERC721WithRoyalty.sol';

contract ERC721WithRoyaltyMetaTx is Context, ERC721WithRoyalty, ERC2771Context {
    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        MinimalForwarder fowarder
    )
        ERC721WithRoyalty(name, symbol, baseTokenURI)
        ERC2771Context(address(fowarder))
    {}

    function _msgSender()
        internal
        view
        override(Context, ERC2771Context)
        returns (address sender)
    {
        return ERC2771Context._msgSender();
    }

    function _msgData()
        internal
        view
        override(Context, ERC2771Context)
        returns (bytes calldata)
    {
        return ERC2771Context._msgData();
    }
}
