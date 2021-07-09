/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ERC721Royalities,
  ERC721RoyalitiesInterface,
} from '../ERC721Royalities';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_tokenURI',
        type: 'string',
      },
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620035ca380380620035ca833981810160405281019062000037919062000197565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b50505050506200033b565b8280546200008390620002a7565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c62000136846200023e565b6200020a565b9050828152602081018484840111156200015557600080fd5b6200016284828562000271565b509392505050565b600082601f8301126200017c57600080fd5b81516200018e84826020860162000125565b91505092915050565b60008060408385031215620001ab57600080fd5b600083015167ffffffffffffffff811115620001c657600080fd5b620001d4858286016200016a565b925050602083015167ffffffffffffffff811115620001f257600080fd5b62000200858286016200016a565b9150509250929050565b6000604051905081810181811067ffffffffffffffff821117156200023457620002336200030c565b5b8060405250919050565b600067ffffffffffffffff8211156200025c576200025b6200030c565b5b601f19601f8301169050602081019050919050565b60005b838110156200029157808201518184015260208101905062000274565b83811115620002a1576000848401525b50505050565b60006002820490506001821680620002c057607f821691505b60208210811415620002d757620002d6620002dd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61327f806200034b6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a2578063a22cb46511610071578063a22cb465146102de578063b88d4fde146102fa578063c87b56dd14610316578063d0def52114610346578063e985e9c5146103765761010b565b80634f6ccce7146102305780636352211e1461026057806370a082311461029057806395d89b41146102c05761010b565b806318160ddd116100de57806318160ddd146101aa57806323b872dd146101c85780632f745c59146101e457806342842e0e146102145761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190612307565b6103a6565b6040516101379190612b97565b60405180910390f35b610148610420565b6040516101559190612bb2565b60405180910390f35b61017860048036038101906101739190612359565b6104b2565b6040516101859190612b30565b60405180910390f35b6101a860048036038101906101a391906122cb565b610537565b005b6101b261064f565b6040516101bf9190612e14565b60405180910390f35b6101e260048036038101906101dd9190612171565b61065c565b005b6101fe60048036038101906101f991906122cb565b6106bc565b60405161020b9190612e14565b60405180910390f35b61022e60048036038101906102299190612171565b610761565b005b61024a60048036038101906102459190612359565b610781565b6040516102579190612e14565b60405180910390f35b61027a60048036038101906102759190612359565b610818565b6040516102879190612b30565b60405180910390f35b6102aa60048036038101906102a5919061210c565b6108ca565b6040516102b79190612e14565b60405180910390f35b6102c8610982565b6040516102d59190612bb2565b60405180910390f35b6102f860048036038101906102f3919061223b565b610a14565b005b610314600480360381019061030f91906121c0565b610b95565b005b610330600480360381019061032b9190612359565b610bf7565b60405161033d9190612bb2565b60405180910390f35b610360600480360381019061035b9190612277565b610d49565b60405161036d9190612e14565b60405180910390f35b610390600480360381019061038b9190612135565b610d81565b60405161039d9190612b97565b60405180910390f35b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610419575061041882610e15565b5b9050919050565b60606000805461042f90613074565b80601f016020809104026020016040519081016040528092919081815260200182805461045b90613074565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b5050505050905090565b60006104bd82610ef7565b6104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f390612d54565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061054282610818565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105aa90612db4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105d2610f63565b73ffffffffffffffffffffffffffffffffffffffff1614806106015750610600816105fb610f63565b610d81565b5b610640576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063790612c94565b60405180910390fd5b61064a8383610f6b565b505050565b6000600880549050905090565b61066d610667610f63565b82611024565b6106ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a390612dd4565b60405180910390fd5b6106b7838383611102565b505050565b60006106c7836108ca565b8210610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff90612bd4565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61077c83838360405180602001604052806000815250610b95565b505050565b600061078b61064f565b82106107cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c390612df4565b60405180910390fd5b60088281548110610806577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b890612cd4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561093b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093290612cb4565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461099190613074565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd90613074565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b5050505050905090565b610a1c610f63565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8190612c54565b60405180910390fd5b8060056000610a97610f63565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610b44610f63565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b899190612b97565b60405180910390a35050565b610ba6610ba0610f63565b83611024565b610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc90612dd4565b60405180910390fd5b610bf18484848461135e565b50505050565b6060610c0282610ef7565b610c41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3890612d34565b60405180910390fd5b6000600b60008481526020019081526020016000208054610c6190613074565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8d90613074565b8015610cda5780601f10610caf57610100808354040283529160200191610cda565b820191906000526020600020905b815481529060010190602001808311610cbd57829003601f168201915b505050505090506000610ceb6113ba565b9050600081511415610d01578192505050610d44565b600082511115610d36578082604051602001610d1e929190612b0c565b60405160208183030381529060405292505050610d44565b610d3f846113d1565b925050505b919050565b6000610d55600a611478565b6000610d61600a61148e565b9050610d6d848261149c565b610d77818461166a565b8091505092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ee057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ef05750610eef826116de565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fde83610818565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061102f82610ef7565b61106e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106590612c74565b60405180910390fd5b600061107983610818565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110e857508373ffffffffffffffffffffffffffffffffffffffff166110d0846104b2565b73ffffffffffffffffffffffffffffffffffffffff16145b806110f957506110f88185610d81565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661112282610818565b73ffffffffffffffffffffffffffffffffffffffff1614611178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116f90612d74565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111df90612c34565b60405180910390fd5b6111f3838383611748565b6111fe600082610f6b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461124e9190612f8a565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112a59190612f03565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611369848484611102565b6113758484848461185c565b6113b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ab90612bf4565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606113dc82610ef7565b61141b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141290612d94565b60405180910390fd5b60006114256113ba565b905060008151116114455760405180602001604052806000815250611470565b8061144f846119f3565b604051602001611460929190612b0c565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561150c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150390612d14565b60405180910390fd5b61151581610ef7565b15611555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154c90612c14565b60405180910390fd5b61156160008383611748565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115b19190612f03565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61167382610ef7565b6116b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a990612cf4565b60405180910390fd5b80600b600084815260200190815260200160002090805190602001906116d9929190611f30565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611753838383611ba0565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156117965761179181611ba5565b6117d5565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146117d4576117d38382611bee565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118185761181381611d5b565b611857565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611856576118558282611e9e565b5b5b505050565b600061187d8473ffffffffffffffffffffffffffffffffffffffff16611f1d565b156119e6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118a6610f63565b8786866040518563ffffffff1660e01b81526004016118c89493929190612b4b565b602060405180830381600087803b1580156118e257600080fd5b505af192505050801561191357506040513d601f19601f820116820180604052508101906119109190612330565b60015b611996573d8060008114611943576040519150601f19603f3d011682016040523d82523d6000602084013e611948565b606091505b5060008151141561198e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198590612bf4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119eb565b600190505b949350505050565b60606000821415611a3b576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611b9b565b600082905060005b60008214611a6d578080611a56906130a6565b915050600a82611a669190612f59565b9150611a43565b60008167ffffffffffffffff811115611aaf577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611ae15781602001600182028036833780820191505090505b5090505b60008514611b9457600182611afa9190612f8a565b9150600a85611b0991906130ef565b6030611b159190612f03565b60f81b818381518110611b51577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b8d9190612f59565b9450611ae5565b8093505050505b919050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611bfb846108ca565b611c059190612f8a565b9050600060076000848152602001908152602001600020549050818114611cea576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611d6f9190612f8a565b9050600060096000848152602001908152602001600020549050600060088381548110611dc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110611e0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480611e82577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611ea9836108ca565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600080823b905060008111915050919050565b828054611f3c90613074565b90600052602060002090601f016020900481019282611f5e5760008555611fa5565b82601f10611f7757805160ff1916838001178555611fa5565b82800160010185558215611fa5579182015b82811115611fa4578251825591602001919060010190611f89565b5b509050611fb29190611fb6565b5090565b5b80821115611fcf576000816000905550600101611fb7565b5090565b6000611fe6611fe184612e60565b612e2f565b905082815260208101848484011115611ffe57600080fd5b612009848285613032565b509392505050565b600061202461201f84612e90565b612e2f565b90508281526020810184848401111561203c57600080fd5b612047848285613032565b509392505050565b60008135905061205e816131ed565b92915050565b60008135905061207381613204565b92915050565b6000813590506120888161321b565b92915050565b60008151905061209d8161321b565b92915050565b600082601f8301126120b457600080fd5b81356120c4848260208601611fd3565b91505092915050565b600082601f8301126120de57600080fd5b81356120ee848260208601612011565b91505092915050565b60008135905061210681613232565b92915050565b60006020828403121561211e57600080fd5b600061212c8482850161204f565b91505092915050565b6000806040838503121561214857600080fd5b60006121568582860161204f565b92505060206121678582860161204f565b9150509250929050565b60008060006060848603121561218657600080fd5b60006121948682870161204f565b93505060206121a58682870161204f565b92505060406121b6868287016120f7565b9150509250925092565b600080600080608085870312156121d657600080fd5b60006121e48782880161204f565b94505060206121f58782880161204f565b9350506040612206878288016120f7565b925050606085013567ffffffffffffffff81111561222357600080fd5b61222f878288016120a3565b91505092959194509250565b6000806040838503121561224e57600080fd5b600061225c8582860161204f565b925050602061226d85828601612064565b9150509250929050565b6000806040838503121561228a57600080fd5b60006122988582860161204f565b925050602083013567ffffffffffffffff8111156122b557600080fd5b6122c1858286016120cd565b9150509250929050565b600080604083850312156122de57600080fd5b60006122ec8582860161204f565b92505060206122fd858286016120f7565b9150509250929050565b60006020828403121561231957600080fd5b600061232784828501612079565b91505092915050565b60006020828403121561234257600080fd5b60006123508482850161208e565b91505092915050565b60006020828403121561236b57600080fd5b6000612379848285016120f7565b91505092915050565b61238b81612fbe565b82525050565b61239a81612fd0565b82525050565b60006123ab82612ec0565b6123b58185612ed6565b93506123c5818560208601613041565b6123ce816131dc565b840191505092915050565b60006123e482612ecb565b6123ee8185612ee7565b93506123fe818560208601613041565b612407816131dc565b840191505092915050565b600061241d82612ecb565b6124278185612ef8565b9350612437818560208601613041565b80840191505092915050565b6000612450602b83612ee7565b91507f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008301527f74206f6620626f756e64730000000000000000000000000000000000000000006020830152604082019050919050565b60006124b6603283612ee7565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061251c601c83612ee7565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b600061255c602483612ee7565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006125c2601983612ee7565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000612602602c83612ee7565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000612668603883612ee7565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b60006126ce602a83612ee7565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b6000612734602983612ee7565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061279a602e83612ee7565b91507f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008301527f6578697374656e7420746f6b656e0000000000000000000000000000000000006020830152604082019050919050565b6000612800602083612ee7565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000612840603183612ee7565b91507f45524337323155524953746f726167653a2055524920717565727920666f722060008301527f6e6f6e6578697374656e7420746f6b656e0000000000000000000000000000006020830152604082019050919050565b60006128a6602c83612ee7565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b600061290c602983612ee7565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000612972602f83612ee7565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b60006129d8602183612ee7565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612a3e603183612ee7565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b6000612aa4602c83612ee7565b91507f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008301527f7574206f6620626f756e647300000000000000000000000000000000000000006020830152604082019050919050565b612b0681613028565b82525050565b6000612b188285612412565b9150612b248284612412565b91508190509392505050565b6000602082019050612b456000830184612382565b92915050565b6000608082019050612b606000830187612382565b612b6d6020830186612382565b612b7a6040830185612afd565b8181036060830152612b8c81846123a0565b905095945050505050565b6000602082019050612bac6000830184612391565b92915050565b60006020820190508181036000830152612bcc81846123d9565b905092915050565b60006020820190508181036000830152612bed81612443565b9050919050565b60006020820190508181036000830152612c0d816124a9565b9050919050565b60006020820190508181036000830152612c2d8161250f565b9050919050565b60006020820190508181036000830152612c4d8161254f565b9050919050565b60006020820190508181036000830152612c6d816125b5565b9050919050565b60006020820190508181036000830152612c8d816125f5565b9050919050565b60006020820190508181036000830152612cad8161265b565b9050919050565b60006020820190508181036000830152612ccd816126c1565b9050919050565b60006020820190508181036000830152612ced81612727565b9050919050565b60006020820190508181036000830152612d0d8161278d565b9050919050565b60006020820190508181036000830152612d2d816127f3565b9050919050565b60006020820190508181036000830152612d4d81612833565b9050919050565b60006020820190508181036000830152612d6d81612899565b9050919050565b60006020820190508181036000830152612d8d816128ff565b9050919050565b60006020820190508181036000830152612dad81612965565b9050919050565b60006020820190508181036000830152612dcd816129cb565b9050919050565b60006020820190508181036000830152612ded81612a31565b9050919050565b60006020820190508181036000830152612e0d81612a97565b9050919050565b6000602082019050612e296000830184612afd565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612e5657612e556131ad565b5b8060405250919050565b600067ffffffffffffffff821115612e7b57612e7a6131ad565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115612eab57612eaa6131ad565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612f0e82613028565b9150612f1983613028565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612f4e57612f4d613120565b5b828201905092915050565b6000612f6482613028565b9150612f6f83613028565b925082612f7f57612f7e61314f565b5b828204905092915050565b6000612f9582613028565b9150612fa083613028565b925082821015612fb357612fb2613120565b5b828203905092915050565b6000612fc982613008565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561305f578082015181840152602081019050613044565b8381111561306e576000848401525b50505050565b6000600282049050600182168061308c57607f821691505b602082108114156130a05761309f61317e565b5b50919050565b60006130b182613028565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156130e4576130e3613120565b5b600182019050919050565b60006130fa82613028565b915061310583613028565b9250826131155761311461314f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6131f681612fbe565b811461320157600080fd5b50565b61320d81612fd0565b811461321857600080fd5b50565b61322481612fdc565b811461322f57600080fd5b50565b61323b81613028565b811461324657600080fd5b5056fea264697066735822122009eb9eef91e09d090a506325506a16701f4215d427a1feae4630bb9afec93ae864736f6c63430008000033';

export class ERC721Royalities__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Royalities> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721Royalities>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721Royalities {
    return super.attach(address) as ERC721Royalities;
  }
  connect(signer: Signer): ERC721Royalities__factory {
    return super.connect(signer) as ERC721Royalities__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RoyalitiesInterface {
    return new utils.Interface(_abi) as ERC721RoyalitiesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Royalities {
    return new Contract(address, _abi, signerOrProvider) as ERC721Royalities;
  }
}
