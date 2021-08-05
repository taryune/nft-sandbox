/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'AccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: 'IAccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: 'AccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: 'IAccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: 'MinimalForwarder',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinimalForwarder__factory>;
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: 'ERC721Burnable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: 'ERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: 'ERC721Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Pausable__factory>;
    getContractFactory(
      name: 'ERC721URIStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: 'IERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'ERC2771Context',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2771Context__factory>;
    getContractFactory(
      name: 'ERC2981',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: 'ERC721WithRoyalty',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721WithRoyalty__factory>;
    getContractFactory(
      name: 'ERC721WithRoyaltyMetaTx',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721WithRoyaltyMetaTx__factory>;
    getContractFactory(
      name: 'Hokusai',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hokusai__factory>;
    getContractFactory(
      name: 'IERC2981',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
