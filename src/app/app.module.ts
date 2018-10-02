import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
