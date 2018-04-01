import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GMapsService } from './services/google-maps.service';
import { GmapComponent } from './gmap/gmap.component'

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuJqxX0rgvwpmQ4Z4dxJjxQKzBSpIq7OU',
      libraries: [ 'places' ]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GmapComponent
  ],
  exports: [
    GmapComponent
  ],
  providers: [
    GMapsService
  ]
})
export class GoogleMapsModule { }
