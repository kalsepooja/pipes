import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummmeryPipe } from './shared/component/pipes/summery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummmeryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
