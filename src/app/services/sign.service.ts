import { Injectable } from '@angular/core';
import { ethers, Wallet } from 'ethers';

interface CustomWindow extends Window {
  ethereum?: any;
}

@Injectable({
  providedIn: 'root',
})
export class SignService {
  private signer: any;

  constructor() {}

  async connectToWeb3(): Promise<void> {
    try {
      const customWindow = window as CustomWindow;

      if (customWindow.ethereum) {
        // Request account access
        const accounts = await customWindow.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // console.log(accounts);

        const provider = new ethers.providers.Web3Provider(
          customWindow.ethereum
        );

        // Create a signer using the first account's private key
        await provider.send('eth_requestAccounts', []);
        this.signer = provider.getSigner(); // Assign signer to this.signer

      } else {
        console.error('Ethereum provider not detected');
      }
    } catch (error) {
      console.error('Error connecting to Ethereum provider:', error);
    }
  }

  async getSigner(): Promise<any> {
    await this.connectToWeb3();
    return this.signer;
  }
}