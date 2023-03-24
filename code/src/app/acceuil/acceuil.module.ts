import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import {acceuilComponent} from './app.component';

// @ts-ignore
@NgModule({
  declarations: [
    acceuilComponent
  ],
  imports: [
    BrowserModule,
    AcceuilRoutingModule
  ],
  providers: [],
  bootstrap: [acceuilComponent]
})
export class AcceuilModule { }

