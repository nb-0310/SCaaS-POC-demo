import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';
import { CreateScComponent } from './components/create-sc/create-sc.component';
import { CreateErc20Component } from './components/create-erc20/create-erc20.component';

const routes: Routes = [
  { path: '', component: SignComponent },
  { path: 'create-sc', component: CreateScComponent },
  { path: 'create-sc/create-erc20', component: CreateErc20Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
