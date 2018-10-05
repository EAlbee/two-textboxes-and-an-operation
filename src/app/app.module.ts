import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { TwoTextBoxesAndADropDownComponent } from './two-text-boxes-and-adrop-down/two-text-boxes-and-adrop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    TwoTextBoxesAndADropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
