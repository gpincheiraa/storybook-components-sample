import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICommonModule } from './modules/ui-common/ui-common.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UICommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
