/* eslint-env mocha */
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  // eslint-disable-next-line
  Hokusai__factory,
  Hokusai,
  // eslint-disable-next-line
  MinimalForwarder__factory,
  MinimalForwarder,
} from '../typechain';

import { sign } from './utils/MetaTransaction';

describe('Hokusai', () => {
  let contract: Hokusai;
  let forwarder: MinimalForwarder;
  let signers: any;

  beforeEach(async () => {
    const [deployer, user, hokusai] = await ethers.getSigners();
    signers = { deployer, user, hokusai };
    const MinimalForwarderFactory = await ethers.getContractFactory(
      'MinimalForwarder',
      deployer
    );
    const minimalForwarder = await MinimalForwarderFactory.deploy();
    const HokusaiFactory = await ethers.getContractFactory('Hokusai', deployer);

    const name = 'Nameko';
    const symbol = 'NMK';
    const baseTokenURI = 'http://localhost:3000/';

    const erc721WithRoyaltyMetaTx = await HokusaiFactory.deploy(
      name,
      symbol,
      baseTokenURI,
      minimalForwarder.address,
      hokusai.address
    );
    contract = new Hokusai__factory(deployer).attach(
      erc721WithRoyaltyMetaTx.address
    );
    forwarder = new MinimalForwarder__factory(deployer).attach(
      minimalForwarder.address
    );
  });
  describe('Transfer', () => {
    beforeEach(async () => {
      await contract.mint(signers.user.address, 'hogehoge');
      expect(await contract.ownerOf(1)).to.be.equal(signers.user.address);
    });
    it('successful', async () => {
      // get balances
      const beforeUserBalance = await signers.user.getBalance();
      const beforeHokusaiBalance = await signers.hokusai.getBalance();

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
      const afterHokusaiBalance = await signers.hokusai.getBalance();
      console.log(beforeHokusaiBalance);
      console.log(afterHokusaiBalance);

      expect(await contract.ownerOf(1)).to.be.equal(signers.deployer.address);
      expect(afterUserBalance).to.be.below(beforeUserBalance);
      expect(afterHokusaiBalance).to.be.above(beforeHokusaiBalance);
    });
  });
});
