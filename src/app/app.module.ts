import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mysvg1Component } from './components/mysvg-1/mysvg-1.component';

@NgModule({
  declarations: [
    AppComponent,
    Mysvg1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
