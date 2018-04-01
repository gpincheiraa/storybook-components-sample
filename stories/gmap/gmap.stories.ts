import { storiesOf, addDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GMapsService } from '../../src/app/modules/google-maps/services/google-maps.service';
import { GmapComponent } from '../../src/app/modules/google-maps/gmap/gmap.component';

const storeAdressess = [
    {
        address: 'Gotthardstrasse 49, 6490 Andermatt, Switzerland',
        lat: 46.6346003, lng: 8.59666029999994
    },
    {
        address: 'Via Alpsu 107, 7188 Tujetsch, Switzerland',
        lat: 46.67926360000001, lng: 8.769313600000032
    },
    {
        address: 'Seestrasse 66, 9326 Horn, Switzerland',
        lat: 47.4958432, lng: 9.463729100000023
    },
    {
        address: 'Hafen West, 9326 Horn, Switzerland',
        lat: 47.5130868, lng: 9.43947890000004
    },
    {
        address: 'Bürgermeister-Trupp-Straße 59, 67069 Ludwigshafen am Rhein, Germany',
        lat: 49.52035, lng: 8.412849999999935
    },
    {
        address:  'Mainzer Str. 2, 67547 Worms, Germany',
        lat: 49.6347899, lng: 8.364679799999976
    },
    {
        address: 'Langgasse 35, 55283 Nierstein, Germany',
        lat: 49.87483290000001, lng: 8.336952900000028
    },
    {
        address: 'Alt-Niederkassel 75, 40547 Düsseldorf, Germany',
        lat: 51.2407201, lng: 6.752005000000054
    },
    {
        address: '33, Kuhstraße, 47051 Duisburg, Germany',
        lat: 51.4331295, lng: 6.762369199999966
    },
    {
        address: 'Gustav-Sander-Platz 1, 47119 Duisburg, Germany',
        lat: 51.4511367, lng: 6.731634999999983
    },
    {
        address: 'Dammstraße 1D, 47119 Duisburg, Germany',
        lat: 51.4572595, lng: 6.726988099999971
    },
    {
        address: '47119, Deichstraße, 47119 Duisburg, Germany',
        lat: 51.4638285, lng: 6.725720000000024
    },
    {
        address: 'Holzmarkt 6, 47495 Rheinberg, Germany',
        lat: 51.54517, lng: 6.602219999999988
    },
    {
        address: '55, Rheinstraße, 47495 Rheinberg, Germany',
        lat: 51.5478227, lng: 6.601067599999965
    },
    {
        address: 'Xantener Str. 47, 47495 Rheinberg, Germany',
        lat: 51.5509665, lng: 6.596625000000017
    },
    {
        address: 'Berkastraße 14, 47495 Rheinberg, Germany',
        lat: 51.5698911, lng: 6.585897899999964
    },
    {
        address: 'Dammstraße, 47495 Rheinberg, Germany',
        lat: 51.5904712, lng: 6.5839487000000645
    },
    {
        address: 'Markt 20, 47546 Kalkar, Germany',
        lat: 51.7387607, lng: 6.292967500000032
    },
    {
        address: 'Dorfstraße 6, 47546 Kalkar, Germany',
        lat: 51.77061, lng: 6.288364000000001
    },
    {
        address: 'Stationsplein 10, 6811 KG Arnhem, Netherlands',
        lat: 51.9832644, lng: 5.901547199999982
    }
];

storiesOf('GmapComponent component', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                CommonModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDuJqxX0rgvwpmQ4Z4dxJjxQKzBSpIq7OU',
                    libraries: [ 'places' ]
                }),
                FormsModule,
                ReactiveFormsModule
              ],
              providers: [
                GMapsService
              ]
        })
    )
	.add('GmapComponent', () => ({
		component: GmapComponent,
		props: {
            addresses: storeAdressess
        }
	}));