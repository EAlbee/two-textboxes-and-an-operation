import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { AburnsStringSurgeryComponent } from './aburns-string-surgery/aburns-string-surgery.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    AburnsStringSurgeryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
