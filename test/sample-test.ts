/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';

// eslint-disable-next-line
import { ERC721Royalities__factory } from '../typechain';

describe('ERC721Royalities', () => {
  let contractAddress: string;

  beforeEach(async () => {
    const ERC721Royalities = await ethers.getContractFactory(
      'ERC721Royalities'
    );
    const name = 'Nameko';
    const symbol = 'NMK';
    const erc721Royalities = await ERC721Royalities.deploy(name, symbol);
    await erc721Royalities.deployed();
    contractAddress = erc721Royalities.address;
  });

  describe('Mint', async () => {
    it('mint successful', async () => {
      const [deployer] = await ethers.getSigners();
      const contract = new ERC721Royalities__factory(deployer).attach(
        contractAddress
      );
      await contract.mint(deployer.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(deployer.address);
      expect(await contract.tokenURI(1)).to.be.equal('hogehoge');
      expect(await contract.totalSupply()).to.be.eq(1);
    });
  });
});
