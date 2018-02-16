import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPosterComponent } from './video-poster/video-poster.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoPosterComponent
  ],
  exports: [
    VideoPosterComponent
  ]
})
export class UICommonModule { }
