// hardhat/scripts/compile-contract.js
const fs = require('fs');
const path = require('path');
const { ethers } = require('hardhat');

async function main() {
  const contractSource = process.argv[2];

  if (!contractSource) {
    console.error('Contract source code not provided.');
    process.exit(1);
  }

  const compiledContract = await ethers.getContractFactory('YourContract', contractSource);

  const abi = compiledContract.interface.format('json');
  const bytecode = compiledContract.bytecode;

  console.log('ABI:', abi);
  console.log('Bytecode:', bytecode);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
