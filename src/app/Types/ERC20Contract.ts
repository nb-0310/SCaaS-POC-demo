export interface ERC20ContractParams {
  name: string;
  symbol: string;
  premint: string;
  mintable: boolean;
  burnable: boolean;
  pausable: boolean;
  access: string;
  upgradeable: string;
}
