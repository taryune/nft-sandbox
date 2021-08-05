//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/metatx/MinimalForwarder.sol';

import './ERC721WithRoyaltyMetaTx.sol';

contract Hokusai is ERC721WithRoyaltyMetaTx {
    address private _payee;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        MinimalForwarder fowarder,
        address payee
    ) ERC721WithRoyaltyMetaTx(name, symbol, baseTokenURI, fowarder) {
        _payee = payee;
    }

    function _payCommission() public payable returns (uint256) {
        uint256 commission = 0;
        if (msg.value > 0) {
            commission = SafeMath.mul(msg.value, SafeMath.div(100, 50));
            payable(_payee).transfer(commission);
        }
        return commission;
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
