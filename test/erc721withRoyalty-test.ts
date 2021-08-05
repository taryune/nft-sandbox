/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  // eslint-disable-next-line
  ERC721WithRoyalty__factory,
  ERC721WithRoyalty,
} from '../typechain';

describe('ERC721Royalty', () => {
  let contract: ERC721WithRoyalty;
  let signers: any;

  beforeEach(async () => {
    const [deployer, user] = await ethers.getSigners();
    signers = { deployer, user };
    const ERC721WithRoyaltyFactory = await ethers.getContractFactory(
      'ERC721WithRoyalty',
      deployer
    );

    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';

    const erc721WithRoyalty = await ERC721WithRoyaltyFactory.deploy(
      name,
      symbol,
      baseTokenURI
    );
    contract = new ERC721WithRoyalty__factory(deployer).attach(
      erc721WithRoyalty.address
    );
  });

  describe('Mint', async () => {
    it('successful', async () => {
      await contract.mint(signers.deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
      expect(await contract.tokenURI(1)).to.be.equal('hogehoge');
      expect(await contract.balanceOf(signers.deployer.address)).to.be.eq(1);
    });
    it('must have minter role', async () => {
      await expect(
        contract.connect(signers.user).mint(signers.user.address, 'fugafuga')
      ).to.revertedWith('ERC721WithRoyalty: must have minter role to mint');
    });
  });

  describe('Transfer', async () => {
    beforeEach(async () => {
      await contract.mint(signers.deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
    });
    it('deployer to user', async () => {
      await contract.transferFrom(
        signers.deployer.address,
        signers.user.address,
        1
      );
      expect(await contract.ownerOf(1)).to.be.equal(signers.user.address);
    });

    it('transfer of token that is not own', async () => {
      await expect(
        contract.transferFrom(signers.user.address, signers.deployer.address, 1)
      ).to.revertedWith('ERC721: transfer of token that is not own');
    });
  });

  describe('Burn', async () => {
    beforeEach(async () => {
      await contract.mint(signers.deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
    });
    it('successful', async () => {
      await contract.burn(1);
      expect(await contract.balanceOf(signers.deployer.address)).to.be.equal(0);
      await expect(contract.ownerOf(1)).to.revertedWith(
        'ERC721: owner query for nonexistent token'
      );
    });
    it('transfer and burn', async () => {
      await contract.transferFrom(
        signers.deployer.address,
        signers.user.address,
        1
      );
      expect(await contract.balanceOf(signers.user.address)).to.be.equal(1);
      await contract.connect(signers.user).burn(1);
      await expect(contract.ownerOf(1)).to.revertedWith(
        'ERC721: owner query for nonexistent token'
      );
    });

    it('caller is not owner', async () => {
      await expect(contract.connect(signers.user).burn(1)).to.revertedWith(
        'ERC721Burnable: caller is not owner nor approved'
      );
    });
  });

  describe('Royalty', async () => {
    beforeEach(async () => {
      await contract.mint(signers.deployer.address, 'hogehoge');
    });
    it('successful', async () => {
      // 50.00%
      await contract.setTokenRoyalty(1, signers.deployer.address, 5000);
      const info = await contract.royaltyInfo(1, 10);
      expect(info[0]).to.be.equal(signers.deployer.address);
      // 10 * 5000 / 10000 = 5
      expect(info[1].toNumber()).to.be.equal(5);
    });
    it('must have minter role', async () => {
      await expect(
        contract
          .connect(signers.user)
          .setTokenRoyalty(1, signers.user.address, 5000)
      ).to.revertedWith(
        'ERC721WithRoyalty: must have minter role to set royalty'
      );
    });
    it('too high', async () => {
      await expect(
        // 100.01%
        contract.setTokenRoyalty(1, signers.deployer.address, 10001)
      ).to.revertedWith('ERC2981: too high');
    });
    it('invalid token id', async () => {
      await expect(
        contract.setTokenRoyalty(2, signers.deployer.address, 5000)
      ).to.revertedWith('ERC721WithRoyalty: invalid token id');
    });
  });
  describe('Pause', async () => {
    it('successful', async () => {
      await contract.pause();
      await expect(
        contract.mint(signers.deployer.address, 'hoge')
      ).to.revertedWith('ERC721Pausable: token transfer while paused');
    });
    it('must have pauser role', async () => {
      await expect(contract.connect(signers.user).pause()).to.revertedWith(
        'ERC721WithRoyalty: must have pauser role to pause'
      );
    });
  });
  describe('Unpause', async () => {
    beforeEach(async () => {
      await contract.pause();
    });
    it('successful', async () => {
      await contract.unpause();
      await contract.mint(signers.deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
    });
    it('must have pauser role', async () => {
      await expect(contract.connect(signers.user).unpause()).to.revertedWith(
        'ERC721WithRoyalty: must have pauser role to unpause'
      );
    });
  });
});
