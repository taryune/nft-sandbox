//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/metatx/MinimalForwarder.sol';

import './ERC721WithRoyalitiesMetaTx.sol';

contract Hokusai is ERC721WithRoyalitiesMetaTx {
    address private _payee;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        MinimalForwarder fowarder,
        address payee
    ) ERC721WithRoyalitiesMetaTx(name, symbol, baseTokenURI, fowarder) {
        _payee = payee;
    }

    function _payCommission() internal {
        if (msg.value > 0) {
            uint256 commission = SafeMath.mul(msg.value, SafeMath.div(100, 50));
            payable(_payee).transfer(commission);
        }
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        _payCommission();
        super.transferFrom(from, to, tokenId);
    }
}
