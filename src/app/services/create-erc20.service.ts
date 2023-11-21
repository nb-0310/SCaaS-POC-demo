import { Injectable } from '@angular/core';
import { ERC20ContractParams } from '../Types';
import { ERC20Options } from '@openzeppelin/wizard/dist/erc20';
import { erc20 } from '@openzeppelin/wizard';
import { exec } from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class CreateErc20Service {
  erc20Options: ERC20ContractParams = {
    name: '',
    symbol: '',
    premint: '',
    mintable: false,
    burnable: false,
    pausable: false,
    access: '',
    upgradeable: '',
  };

  constructor() {}

  setParams(params: ERC20ContractParams) {
    this.erc20Options = params;
    this.compileContract(this.generateContract());
  }

  generateTransferFunction(): string {
    return `
      function transfer(address to, uint256 amount) public {
          _transfer(msg.sender, to, amount);
      }`;
  }

  generateContract(): string {
    const params: ERC20ContractParams = {
      name: 'ExampleToken',
      symbol: 'ETK',
      mintable: true,
      burnable: true,
      pausable: true,
      premint: '1000000',
      access: 'ownable',
      upgradeable: 'uups',
    };

    const contract: string = erc20.print(params as ERC20Options);

    const lastCurlyBraceIndex: number = contract.lastIndexOf('}');
    const modifiedContract: string =
      contract.slice(0, lastCurlyBraceIndex) +
      this.generateTransferFunction() +
      '\n' +
      contract.slice(lastCurlyBraceIndex);

    const finalContract: string = modifiedContract.replace(
      '/// @custom:oz-upgrades-unsafe-allow constructor',
      ''
    );

    return finalContract;
  }

  compileContract(
    contractSource: string
  ): Promise<{ abi: any; bytecode: string }> {
    return new Promise((resolve, reject) => {
      const scriptPath = 'path-to-your-hardhat-script/compile-contract.js';

      // Use shell-escape to ensure that the contract source is properly quoted in case it contains spaces or special characters
      const escapedContractSource = JSON.stringify(contractSource).replace(
        /'/g,
        "'\\''"
      );

      exec(
        `npx hardhat run ${scriptPath} '${escapedContractSource}'`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(stderr);
            reject(error);
          } else {
            const result = stdout
              .split('\n')
              .filter(
                (line) =>
                  line.startsWith('ABI:') || line.startsWith('Bytecode:')
              );
            const abi = JSON.parse(result[0].replace('ABI:', '').trim());
            const bytecode = result[1].replace('Bytecode:', '').trim();

            resolve({ abi, bytecode });
          }
        }
      );
    });
  }
}
