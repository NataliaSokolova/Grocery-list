import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
