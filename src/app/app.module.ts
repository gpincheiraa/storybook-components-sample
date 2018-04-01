import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { UICommonModule } from './modules/ui-common/ui-common.module';
import { GoogleMapsModule } from './modules/google-maps/google-maps.module';
import { GmapComponent } from '../../src/app/modules/google-maps/gmap/gmap.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UICommonModule,
        AgmCoreModule,
        GoogleMapsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }