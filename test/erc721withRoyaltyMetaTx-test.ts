/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  // eslint-disable-next-line
  ERC721WithRoyaltyMetaTx__factory,
  ERC721WithRoyaltyMetaTx,
  // eslint-disable-next-line
  MinimalForwarder__factory,
  MinimalForwarder,
} from '../typechain';

import { sign } from './utils/MetaTransaction';

describe('ERC721RoyaltyMetaTx', () => {
  let contract: ERC721WithRoyaltyMetaTx;
  let forwarder: MinimalForwarder;
  let signers: any;

  beforeEach(async () => {
    const [deployer, user] = await ethers.getSigners();
    signers = { deployer, user };
    const MinimalForwarderFactory = await ethers.getContractFactory(
      'MinimalForwarder',
      deployer
    );
    const minimalForwarder = await MinimalForwarderFactory.deploy();
    const ERC721WithRoyaltyMetaTxFactory = await ethers.getContractFactory(
      'ERC721WithRoyaltyMetaTx',
      deployer
    );

    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';

    const erc721WithRoyaltyMetaTx = await ERC721WithRoyaltyMetaTxFactory.deploy(
      name,
      symbol,
      baseTokenURI,
      minimalForwarder.address
    );
    contract = new ERC721WithRoyaltyMetaTx__factory(deployer).attach(
      erc721WithRoyaltyMetaTx.address
    );
    forwarder = new MinimalForwarder__factory(deployer).attach(
      minimalForwarder.address
    );
  });

  describe('Forwarder', async () => {
    it('trusted forwarder', async () => {
      expect(await contract.isTrustedForwarder(forwarder.address)).to.be.equal(
        true
      );
    });
  });

  describe('Transfer', async () => {
    beforeEach(async () => {
      await contract.mint(signers.user.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.user.address);
    });
    it('successful', async () => {
      // get balances
      const beforeUserBalance = await signers.user.getBalance();
      const beforeDeployerBalance = await signers.deployer.getBalance();

      // encodeFunctionData
      const data = contract.interface.encodeFunctionData('transferFrom', [
        signers.user.address,
        signers.deployer.address,
        1,
      ]);
      const [request, signature] = await sign(
        signers.user.address,
        signers.user.address,
        0,
        data,
        forwarder,
        contract
      );
      await forwarder.execute(request, signature);

      // get balances
      const afterUserBalance = await signers.user.getBalance();
      const afterDeployerBalance = await signers.deployer.getBalance();

      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
      expect(afterUserBalance).to.be.equal(beforeUserBalance);
      expect(afterDeployerBalance).to.be.below(beforeDeployerBalance);
    });
    it('invalid signer', async () => {
      // encodeFunctionData
      const data = contract.interface.encodeFunctionData('transferFrom', [
        signers.user.address,
        signers.deployer.address,
        1,
      ]);
      const [request, signature] = await sign(
        signers.user.address,
        // invalid signer
        signers.deployer.address,
        0,
        data,
        forwarder,
        contract
      );
      await expect(forwarder.execute(request, signature)).to.revertedWith(
        'MinimalForwarder: signature does not match request'
      );
    });
  });

  describe('Burn', async () => {
    beforeEach(async () => {
      await contract.mint(signers.user.address, 'hogehoge');
      expect(await contract.balanceOf(signers.user.address)).to.be.equal(1);
    });
    it('successful', async () => {
      // get balances
      const beforeUserBalance = await signers.user.getBalance();
      const beforeDeployerBalance = await signers.deployer.getBalance();

      // encodeFunctionData
      const data = contract.interface.encodeFunctionData('burn', [1]);
      const [request, signature] = await sign(
        signers.user.address,
        signers.user.address,
        0,
        data,
        forwarder,
        contract
      );
      await forwarder.execute(request, signature);

      // get balances
      const afterUserBalance = await signers.user.getBalance();
      const afterDeployerBalance = await signers.deployer.getBalance();

      expect(afterUserBalance).to.be.equal(beforeUserBalance);
      expect(afterDeployerBalance).to.be.below(beforeDeployerBalance);

      await expect(contract.ownerOf(1)).to.revertedWith(
        'ERC721: owner query for nonexistent token'
      );
    });
    it('invalid signer', async () => {
      const data = contract.interface.encodeFunctionData('burn', [1]);
      // encodeFunctionData
      const [request, signature] = await sign(
        signers.user.address,
        // invalid signer
        signers.deployer.address,
        0,
        data,
        forwarder,
        contract
      );
      await expect(forwarder.execute(request, signature)).to.revertedWith(
        'MinimalForwarder: signature does not match request'
      );
    });
  });
});
