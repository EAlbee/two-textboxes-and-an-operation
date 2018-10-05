import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { Lm2IntToHexComponent } from './lm2-int-to-hex/lm2-int-to-hex.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    Lm2IntToHexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
