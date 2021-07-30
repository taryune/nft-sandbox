/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';

import {
  // eslint-disable-next-line
  ERC721WithRoyalitiesMetaTx__factory,
  ERC721WithRoyalitiesMetaTx,
} from '../typechain';

describe('ERC721RoyalitiesMetaTx', () => {
  let contractAddress: string;
  let contract: ERC721WithRoyalitiesMetaTx;

  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory(
      'ERC721WithRoyalitiesMetaTx'
    );
    const [deployer] = await ethers.getSigners();
    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';
    const trustedFowarder = deployer.address;
    const erc721WithRoyalitiesMetaTx = await ContractFactory.deploy(
      name,
      symbol,
      baseTokenURI,
      trustedFowarder
    );
    await erc721WithRoyalitiesMetaTx.deployed();
    contractAddress = erc721WithRoyalitiesMetaTx.address;
    contract = new ERC721WithRoyalitiesMetaTx__factory(deployer).attach(
      contractAddress
    );
  });

  describe('Mint', async () => {
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
      expect(await contract.tokenURI(1)).to.be.equal('hogehoge');
      expect(await contract.balanceOf(deployer.address)).to.be.eq(1);
    });
    it('must have minter role', async () => {
      const [, user] = await ethers.getSigners();
      await expect(
        contract.connect(user).mint(user.address, 'fugafuga')
      ).to.revertedWith('ERC721WithRoyalities: must have minter role to mint');
    });
  });

  describe('Transfer', async () => {
    beforeEach(async () => {
      const [deployer] = await ethers.getSigners();
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
    });
    it('successful', async () => {
      const [deployer, user] = await ethers.getSigners();
      await contract.transferFrom(deployer.address, user.address, 1);
      expect(await contract.ownerOf(1)).to.be.equal(user.address);
    });

    it('transfer of token that is not own', async () => {
      const [deployer, user] = await ethers.getSigners();
      await expect(
        contract.transferFrom(user.address, deployer.address, 1)
      ).to.revertedWith('ERC721: transfer of token that is not own');
    });
  });

  describe('Burn', async () => {
    beforeEach(async () => {
      const [deployer] = await ethers.getSigners();
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
    });
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      await contract.burn(1);
      expect(await contract.balanceOf(deployer.address)).to.be.equal(0);
      await expect(contract.ownerOf(1)).to.revertedWith(
        'ERC721: owner query for nonexistent token'
      );
    });
    it('transfer and burn', async () => {
      const [deployer, user] = await ethers.getSigners();
      await contract.transferFrom(deployer.address, user.address, 1);
      expect(await contract.balanceOf(user.address)).to.be.equal(1);
      await contract.connect(user).burn(1);
      await expect(contract.ownerOf(1)).to.revertedWith(
        'ERC721: owner query for nonexistent token'
      );
    });

    it('caller is not owner', async () => {
      const [, user] = await ethers.getSigners();
      await expect(contract.connect(user).burn(1)).to.revertedWith(
        'ERC721Burnable: caller is not owner nor approved'
      );
    });
  });

  describe('Royalty', async () => {
    beforeEach(async () => {
      const [deployer] = await ethers.getSigners();
      await contract.mint(deployer.address, 'hogehoge');
    });
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      // 50.00%
      await contract.setTokenRoyalty(1, deployer.address, 5000);
      const info = await contract.royaltyInfo(1, 10);
      expect(info[0]).to.be.equal(deployer.address);
      // 10 * 5000 / 10000 = 5
      expect(info[1].toNumber()).to.be.equal(5);
    });
    it('must have minter role', async () => {
      const [, user] = await ethers.getSigners();
      await expect(
        contract.connect(user).setTokenRoyalty(1, user.address, 5000)
      ).to.revertedWith(
        'ERC721WithRoyalities: must have minter role to set royalty'
      );
    });
    it('too high', async () => {
      const [deployer] = await ethers.getSigners();
      await expect(
        // 100.01%
        contract.setTokenRoyalty(1, deployer.address, 10001)
      ).to.revertedWith('ERC2981Royalties: too high');
    });
    it('invalid token id', async () => {
      const [deployer] = await ethers.getSigners();
      await expect(
        contract.setTokenRoyalty(2, deployer.address, 5000)
      ).to.revertedWith('ERC721WithRoyalities: invalid token id');
    });
  });
  describe('Pause', async () => {
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      await contract.pause();
      await expect(contract.mint(deployer.address, 'hoge')).to.revertedWith(
        'ERC721Pausable: token transfer while paused'
      );
    });
    it('must have pauser role', async () => {
      const [, user] = await ethers.getSigners();
      await expect(contract.connect(user).pause()).to.revertedWith(
        'ERC721WithRoyalities: must have pauser role to pause'
      );
    });
  });
  describe('Unpause', async () => {
    beforeEach(async () => {
      await contract.pause();
    });
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      await contract.unpause();
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
    });
    it('must have pauser role', async () => {
      const [, user] = await ethers.getSigners();
      await expect(contract.connect(user).unpause()).to.revertedWith(
        'ERC721WithRoyalities: must have pauser role to unpause'
      );
    });
  });
});
