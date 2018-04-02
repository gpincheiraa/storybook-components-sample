import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 
import { UICommonModule } from './modules/ui-common/ui-common.module';
import { GoogleMapsModule } from './modules/google-maps/google-maps.module';
import { GmapComponent } from '../../src/app/modules/google-maps/gmap/gmap.component';
import { GMapsService } from '../../src/app/modules/google-maps/services/google-maps.service';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UICommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDuJqxX0rgvwpmQ4Z4dxJjxQKzBSpIq7OU',
            libraries: [ 'places' ]
        }),
        AgmDirectionModule,
        GoogleMapsModule
    ],
    providers: [
        GoogleMapsAPIWrapper,
        GMapsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }