import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public storeAdressess: any[] = [
        {
            name: 'Bäckerei-Konditorei Café Baumann',
            address: 'Gotthardstrasse 49, 6490 Andermatt, Switzerland',
            lat: 46.6346003, lng: 8.59666029999994
        },
        {
            name: 'Café Dulezi - La Conditoria SEDRUN-SWITZERLAND',
            address: 'Via Alpsu 107, 7188 Tujetsch, Switzerland',
            lat: 46.67926360000001, lng: 8.769313600000032
        },
        {
            name: 'Restaurant Traube Horn',
            address: 'Seestrasse 66, 9326 Horn, Switzerland',
            lat: 47.4958432, lng: 9.463729100000023
        },
        {
            name: 'Hafenkiosk Arbon',
            address: '9320 Arbon, Switzerland',
            lat: 47.511077, lng: 9.431976
        },
        {
            name: 'Store',
            address: 'Bürgermeister-Trupp-Straße 59, 67069 Ludwigshafen am Rhein, Germany',
            lat: 49.52035, lng: 8.412849999999935
        },
        {
            name: 'Store',
            address:  'Mainzer Str. 2, 67547 Worms, Germany',
            lat: 49.6347899, lng: 8.364679799999976
        },
        {
            name: 'Store',
            address: 'Langgasse 35, 55283 Nierstein, Germany',
            lat: 49.87483290000001, lng: 8.336952900000028
        },
        {
            name: 'Store',
            address: 'Alt-Niederkassel 75, 40547 Düsseldorf, Germany',
            lat: 51.2407201, lng: 6.752005000000054
        },
        {
            name: 'Store',
            address: '33, Kuhstraße, 47051 Duisburg, Germany',
            lat: 51.4331295, lng: 6.762369199999966
        },
        {
            name: 'Store',
            address: 'Gustav-Sander-Platz 1, 47119 Duisburg, Germany',
            lat: 51.4511367, lng: 6.731634999999983
        },
        {
            name: 'Store',
            address: 'Dammstraße 1D, 47119 Duisburg, Germany',
            lat: 51.4572595, lng: 6.726988099999971
        },
        {
            name: 'Store',
            address: '47119, Deichstraße, 47119 Duisburg, Germany',
            lat: 51.4638285, lng: 6.725720000000024
        },
        {
            name: 'Store',
            address: 'Holzmarkt 6, 47495 Rheinberg, Germany',
            lat: 51.54517, lng: 6.602219999999988
        },
        {
            name: 'Store',
            address: '55, Rheinstraße, 47495 Rheinberg, Germany',
            lat: 51.5478227, lng: 6.601067599999965
        },
        {
            name: 'Store',
            address: 'Xantener Str. 47, 47495 Rheinberg, Germany',
            lat: 51.5509665, lng: 6.596625000000017
        },
        {
            name: 'Store',
            address: 'Berkastraße 14, 47495 Rheinberg, Germany',
            lat: 51.5698911, lng: 6.585897899999964
        },
        {
            name: 'Store',
            address: 'Dammstraße, 47495 Rheinberg, Germany',
            lat: 51.5904712, lng: 6.5839487000000645
        },
        {
            name: 'Store',
            address: 'Markt 20, 47546 Kalkar, Germany',
            lat: 51.7387607, lng: 6.292967500000032
        },
        {
            name: 'Store',
            address: 'Dorfstraße 6, 47546 Kalkar, Germany',
            lat: 51.77061, lng: 6.288364000000001
        },
        {
            name: 'Store',
            address: 'Stationsplein 10, 6811 KG Arnhem, Netherlands',
            lat: 51.9832644, lng: 5.901547199999982
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}
