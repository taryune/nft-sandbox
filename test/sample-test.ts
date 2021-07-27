/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';

// eslint-disable-next-line
import { ERC721Royalities__factory, ERC721Royalities } from '../typechain';

describe('ERC721Royalities', () => {
  let contractAddress: string;
  let contract: ERC721Royalities;

  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory('ERC721Royalities');
    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';
    const erc721Royalities = await ContractFactory.deploy(
      name,
      symbol,
      baseTokenURI
    );
    await erc721Royalities.deployed();
    contractAddress = erc721Royalities.address;
    const [deployer] = await ethers.getSigners();
    contract = new ERC721Royalities__factory(deployer).attach(contractAddress);
  });

  describe('Mint', async () => {
    it('successful', async () => {
      const [deployer] = await ethers.getSigners();
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
      expect(await contract.tokenURI(1)).to.be.equal('hogehoge');
      expect(await contract.balanceOf(deployer.address)).to.be.eq(1);
    });
    it('no minter role', async () => {
      const [_, user] = await ethers.getSigners();
      await expect(
        contract.connect(user).mint(user.address, 'fugafuga')
      ).to.revertedWith('ERC721Royalities: must have minter role to mint');
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
});
