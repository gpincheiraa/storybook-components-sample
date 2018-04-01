import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

declare var google: any;

@Injectable()
export class GMapsService{ 
    private locationAddresses: any[] = [];
    
    constructor() { }
    
    getLatLng(address: string) {
        let geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            // console.log('Getting Address - ', address);
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();                    
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        })
    }
    getLatLngSync(locations) {
        //Figure out how resolve this using Observables
        locations.forEach((location, i) => {
            setTimeout(() => {
                this.getLatLng(location.address)
                    .subscribe((result: any) => this.locationAddresses.push({ address: location.address, lat: result.lat(), lng: result.lng()}));
            }, i*800);
        });
    } 
}