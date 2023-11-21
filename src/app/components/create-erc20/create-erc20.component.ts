import { Component } from '@angular/core';
import { CreateErc20Service } from '../../services/create-erc20.service';

@Component({
  selector: 'app-create-erc20',
  templateUrl: './create-erc20.component.html',
  styleUrls: ['./create-erc20.component.css'],
})
export class CreateErc20Component {

  constructor (public createERC20Service: CreateErc20Service) { }

  erc20Options = {
    name: '',
    symbol: '',
    premint: '',
    mintable: false,
    burnable: false,
    pausable: false,
    access: 'ownable',
    upgradeable: 'uups',
  };

  onSubmit() {
    console.log(this.validateForm())
    if (this.validateForm()) {
      // console.log('Form submitted:', this.erc20Options);
      this.createERC20Service.setParams(this.erc20Options)
      // Add logic to handle form submission (e.g., send data to a service)
    } else {
      // Handle form validation errors
    }
  }

  validateForm(): boolean {
    if (
      (this.erc20Options.mintable || this.erc20Options.pausable) &&
      this.erc20Options.access === ''
    ) {
      // Mintable or pausable requires non-empty access control
      return false;
    }

    if (
      this.erc20Options.upgradeable === 'uups' &&
      this.erc20Options.access === ''
    ) {
      // UUPS upgradeable requires non-empty access control
      return false;
    }

    return true;
  }
}
