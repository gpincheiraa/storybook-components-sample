import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICommonModule } from './modules/ui-common/ui-common.module';

@NgModule({
//   declarations: [
//     AppComponent
//   ],
  imports: [
    BrowserModule,
    UICommonModule
  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule { }