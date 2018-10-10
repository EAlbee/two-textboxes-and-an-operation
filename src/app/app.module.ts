import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TjsAddNumbersComponent } from './tjs-add-numbers/tjs-add-numbers.component';
import { TjsNumberAdditionComponent } from './tjs-number-addition/tjs-number-addition.component';
import { TjsNumberAdditionEAComponent } from './tjs-number-addition-ea/tjs-number-addition-ea.component';

@NgModule({
  declarations: [
    AppComponent,
    TjsAddNumbersComponent,
    TjsNumberAdditionComponent,
    TjsNumberAdditionEAComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
