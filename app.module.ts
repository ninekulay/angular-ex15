import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Excersie15Component } from './excersie15/excersie15.component';

@NgModule({
  declarations: [
    AppComponent,
    Excersie15Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
