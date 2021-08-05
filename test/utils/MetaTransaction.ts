import { ethers } from 'hardhat';
import { ERC721WithRoyaltyMetaTx, MinimalForwarder } from '../../typechain';

export type Message = {
  from: string;
  to: string;
  value: number;
  gas: number;
  nonce: number;
  data: string;
};

const EIP712DomainType = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
];

const ForwardRequestType = [
  { name: 'from', type: 'address' },
  { name: 'to', type: 'address' },
  { name: 'value', type: 'uint256' },
  { name: 'gas', type: 'uint256' },
  { name: 'nonce', type: 'uint256' },
  { name: 'data', type: 'bytes' },
];

// https://eips.ethereum.org/EIPS/eip-712
export function createTypedData(
  chainId: number,
  ForwarderAddress: string,
  message: Message
) {
  const TypedData = {
    primaryType: 'ForwardRequest' as const,
    types: {
      EIP712Domain: EIP712DomainType,
      ForwardRequest: ForwardRequestType,
    },
    domain: {
      // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/MinimalForwarder.sol
      name: 'MinimalForwarder',
      version: '0.0.1',
      chainId,
      verifyingContract: ForwarderAddress,
    },
    message,
  };
  return TypedData;
}

export async function sign(
  from: string,
  signer: string,
  value: number,
  data: string,
  forwarder: MinimalForwarder,
  contract: ERC721WithRoyaltyMetaTx
) {
  const request = {
    from,
    to: contract.address,
    value,
    gas: 1e6,
    nonce: (await forwarder.getNonce(signer)).toNumber(),
    data,
  };
  const { chainId } = await ethers.provider.getNetwork();
  const TypedData = createTypedData(chainId, forwarder.address, request);
  // sign
  const signature = await ethers.provider.send('eth_signTypedData_v4', [
    signer,
    TypedData,
  ]);

  return [request, signature];
}
