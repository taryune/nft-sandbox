/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';

import {
  // eslint-disable-next-line
  ERC721WithRoyalities__factory,
  ERC721WithRoyalities,
} from '../typechain';

describe('ERC721Royalities', () => {
  let contractAddress: string;
  let contract: ERC721WithRoyalities;

  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory(
      'ERC721WithRoyalities'
    );
    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';
    const erc721WithRoyalities = await ContractFactory.deploy(
      name,
      symbol,
      baseTokenURI
    );
    await erc721WithRoyalities.deployed();
    contractAddress = erc721WithRoyalities.address;
    const [deployer] = await ethers.getSigners();
    contract = new ERC721WithRoyalities__factory(deployer).attach(
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
    });
    it('successful', async () => {
      const [deployer, user] = await ethers.getSigners();
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
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
});
