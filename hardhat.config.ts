import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.8.0', settings: {} }],
  },
};

export default config;
