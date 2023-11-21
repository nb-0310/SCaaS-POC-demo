import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { CreateScComponent } from './components/create-sc/create-sc.component';
import { CreateErc20Component } from './components/create-erc20/create-erc20.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    CreateScComponent,
    CreateErc20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
