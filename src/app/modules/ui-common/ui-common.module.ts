import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPosterComponent } from './video-poster/video-poster.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    VideoPosterComponent
  ],
  exports: [
    HeaderComponent,
    VideoPosterComponent
  ]
})
export class UICommonModule { }
