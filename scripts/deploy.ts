import { ethers } from 'hardhat';

async function main() {
  const ERC721Royalities = await ethers.getContractFactory('ERC721Royalities');
  const name = 'Nameko';
  const symbol = 'NMK';
  const baseTokenURI = '';
  const erc721Royalities = await ERC721Royalities.deploy(
    name,
    symbol,
    baseTokenURI
  );
  await erc721Royalities.deployed();
  console.log('deployed to:', erc721Royalities.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
