//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/AccessControlEnumerable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Context.sol';

import './ERC2981Royalties.sol';

contract ERC721WithRoyalities is
    Context,
    AccessControlEnumerable,
    ERC721Enumerable,
    ERC721Burnable,
    ERC721Pausable,
    ERC721URIStorage,
    ERC2981Royalties
{
    using Strings for uint256;
    using Counters for Counters.Counter;

    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
    bytes32 public constant PAUSER_ROLE = keccak256('PAUSER_ROLE');

    Counters.Counter private _tokenIdTracker;

    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
        _setupRole(PAUSER_ROLE, _msgSender());
    }

    function mint(address to, string memory _tokenURI)
        external
        returns (uint256)
    {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            'ERC721WithRoyalities: must have minter role to mint'
        );
        _tokenIdTracker.increment();
        _safeMint(to, _tokenIdTracker.current());
        _setTokenURI(_tokenIdTracker.current(), _tokenURI);
        return _tokenIdTracker.current();
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function setTokenRoyalty(
        uint256 tokenId,
        address recipient,
        uint256 value
    ) external {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            'ERC721WithRoyalities: must have minter role to set royalty'
        );
        require(
            tokenId <= _tokenIdTracker.current(),
            'ERC721WithRoyalities: invalid token id'
        );
        _setTokenRoyalty(tokenId, recipient, value);
    }

    function pause() public virtual {
        require(
            hasRole(PAUSER_ROLE, _msgSender()),
            'ERC721WithRoyalities: must have pauser role to pause'
        );
        _pause();
    }

    function unpause() public virtual {
        require(
            hasRole(PAUSER_ROLE, _msgSender()),
            'ERC721WithRoyalities: must have pauser role to unpause'
        );
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721, ERC721Enumerable, ERC721Pausable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(
            AccessControlEnumerable,
            ERC721,
            ERC721Enumerable,
            ERC2981Royalties
        )
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
