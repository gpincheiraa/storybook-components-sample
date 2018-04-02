import { Component, OnInit, Input, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { Observable } from 'rxjs';
import { catchError, debounceTime, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { GMapsService } from '../services/google-maps.service'

declare var google: any;

interface GmapPoint{
    lat: number;
    lng: number;
}
@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
    @ViewChild('search') public searchElementRef: ElementRef;
    @Input() addresses: any[];
    
    public lat:number;
    public lng:number;
    public zoom:number;
    public searchControl: FormControl;
    public zoomControlOptions;
    public searchActive = false;

    //private addressesObservable: Observable<any>;
    private geocodeAddresses: GmapPoint[] = [];
    private latlngBounds: any;
    
    private actualLocation = '6490 Andermatt, Switzerland';
    private actualRoute = null;

    constructor(
        private gMaps: GoogleMapsAPIWrapper,
        private gMapsService: GMapsService, 
        private mapsAPILoader: MapsAPILoader,
        private __zone: NgZone 
    ){}

    // https://www.google.com/maps/d/edit?mid=1JBIxz8pXILky1cjm4bTd72lOi_IpPSgl&ll=51.983419418712515%2C5.8995733994216835&z=18
    ngOnInit(){
        //this.addressesObservable = Observable.from(this.addresses);
        this.searchControl = new FormControl();
        this.searchControl.setValue(this.actualLocation);
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
        this.zoomControlOptions = {
            position: google.maps.ControlPosition.RIGHT_CENTER
        };
        this.findAddress(this.searchControl.value, result => {
            this.__zone.run(() => {
                this.lat = result.lat();
                this.lng = result.lng();
            })
        });
        this.showAllMarkers();
        this.loadGoogleInstances();

    }
    loadGoogleInstances() {
        this.mapsAPILoader.load().then( _ => {
            // Set autocomplete behaviour
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
                this.searchActive = false;
              });
            });
            // Set latlngBounds
            this.latlngBounds = new google.maps.LatLngBounds();
        });
    }
    showRouteToStore(location) {
        this.geocodeAddresses = [ location ];
        this.actualRoute = { 
            origin: { lat: this.lat, lng: this.lng },
            destination: { lat: location.lat, lng: location.lng }
        };
        //this.drawRoute();
        this.searchActive = false;
    }
    drawRoute() {
        // this.__zone.run(() => {
            
        // });
        //this.zoom = 10;
        this.latlngBounds.extend(new google.maps.LatLng(this.actualRoute.origin.lat, this.actualRoute.origin.lng));
        this.latlngBounds.extend(new google.maps.LatLng(this.actualRoute.destination.lat, this.actualRoute.destination.lng));
        
        // this.gMaps.setZoom(this.zoom);
        // this.gMaps.setCenter({ lat: this.actualRoute.destination.lat, lng: this.actualRoute.destination.lng });
        this.gMaps.fitBounds(this.latlngBounds);
        
        this.searchActive = false;
    }
    showAllMarkers() {
        this.addresses.forEach(location => this.geocodeAddresses.push(location));
    }
    onFocusSearch(){
        setTimeout( _ => this.searchActive = true); 
    }
    onCloseSearch(){
        this.searchActive = false;
    }
}
