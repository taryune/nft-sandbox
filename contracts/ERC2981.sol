// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/introspection/ERC165.sol';

import './interfaces/IERC2981.sol';

// @dev This is a contract used to add ERC2981 support to ERC721 and 1155
abstract contract ERC2981 is ERC165, IERC2981 {
    struct Royalty {
        address receiver;
        uint256 value;
    }

    mapping(uint256 => Royalty) internal _royalties;

    // @inheritdoc	ERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC2981)
        returns (bool)
    {
        return interfaceId == type(IERC2981).interfaceId;
    }

    /**
     * @dev Sets token royalties
     * @param id the token id fir which we register the royalties
     * @param receiver receiver of the royalties
     * @param value percentage (using 2 decimals - 10000 = 100, 0 = 0)
     */
    function _setTokenRoyalty(
        uint256 id,
        address receiver,
        uint256 value
    ) internal {
        require(value <= 10000, 'ERC2981: too high');

        _royalties[id] = Royalty(receiver, value);
    }

    // @inheritdoc	IERC2981
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        Royalty memory royalty = _royalties[tokenId];
        return (royalty.receiver, (salePrice * royalty.value) / 10000);
    }
}
