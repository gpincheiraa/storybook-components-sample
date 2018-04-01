import { Component, OnInit, Input, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
import { catchError, debounceTime, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { GMapsService } from '../services/google-maps.service'

declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
    @ViewChild('search') 
    public searchElementRef: ElementRef;
    @Input() addresses: any[];
    public lat:number;
    public lng:number;
    public searchControl: FormControl;
    searchActive = false;

    private addressesObservable: Observable<any>;
    private geocodeAddresses: any[] = [];
    private actualLocation = '6490 Andermatt, Switzerland';

    constructor(
        private gMapsService: GMapsService, 
        private mapsAPILoader: MapsAPILoader,
        private __zone: NgZone 
    ){}

    // https://www.google.com/maps/d/edit?mid=1JBIxz8pXILky1cjm4bTd72lOi_IpPSgl&ll=51.983419418712515%2C5.8995733994216835&z=18
    ngOnInit(){
        this.addressesObservable = Observable.from(this.addresses);
        this.searchControl = new FormControl();
        this.loadPlaces();
    }
    loadPlaces() {
        
    }
    findAddress(address: string, subscriber) {
        return this.gMapsService.getLatLng(address)
            .subscribe(
                subscriber,
                error => console.log(error),
                () => console.log(`Geocoding completed for ${address}`)
            );
    }
    onMapReady(e) {
        this.findAddress(this.actualLocation, result => {
            this.geocodeAddresses.push({ lat: result.lat(), lng: result.lng() });
            this.__zone.run(() => {
                this.lat = result.lat();
                this.lng = result.lng();
            })
        });
        this.showAllMarkers();
        this.loadAutocomplete();
    }
    loadAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
              this.__zone.run(() => {
                //get the place result
                let place = autocomplete.getPlace();
        
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
              });
            });
          });
    }
    showAllMarkers() {
        this.addresses.forEach(({ lat, lng }) => this.geocodeAddresses.push({ lat, lng}));
    }
    onFocusSearch(){
        this.searchActive = true;
    }
    onCloseSearch(){
        this.searchActive = false;
    }
}
