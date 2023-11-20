// src/app/metamask-connect/metamask-connect.component.ts

import { Component, NgZone } from '@angular/core';
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styles: [],
})
export class SignComponent {
  signer: any;
  constructor (public signService: SignService) { }

  async logSigner () {
    const signer = await this.signService.getSigner()
    this.signer = await signer
    console.log(signer)
  }
}