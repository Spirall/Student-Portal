import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
declare let google: any;

@Directive({ selector: '[googleAutoComplete]' })
export class GoogleAutoCompleteDirective {

  @Output('fullAddressEvent') fullAddressEvent: EventEmitter<IFullAddress> = new EventEmitter();

  componentForm = {
    street_number: 'long_name',
    route: 'long_name',
    locality: 'long_name',
    sublocality_level_1: 'long_name',
    administrative_area_level_1: 'long_name',
    administrative_area_level_2: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
  };
  full_address: Object = {};

  constructor(
    private el: ElementRef,
    private _loader: MapsAPILoader ) {
    this.initAutoComplete();
  }

  initAutoComplete() {
    this._loader.load().then(() => {
        const defaultBounds = new google.maps.LatLngBounds
        (
          new google.maps.LatLng(-26.209493, 28.036435),
          new google.maps.LatLng(-34.659335, 18.648433)
        );
        const options = {
          bounds: defaultBounds,
          types: ['address']
        };
        const autoComplete = new google.maps.places.Autocomplete(this.el.nativeElement, options);
        google.maps.event.addListener(autoComplete, 'place_changed', () => {
        const place = autoComplete.getPlace();
        for (let i = 0; i < place.address_components.length; i++) {
          const addressType = place.address_components[i].types[0];
          if (this.componentForm[addressType]) {
            const val = place.address_components[i][this.componentForm[addressType]];
            this.full_address[addressType] = val;
          }
        }

        this.fullAddressEvent.emit(this.full_address);
      });
      this.geoLocate(autoComplete);
    });
  }

  geoLocate(autoComplete) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const circle = new google.maps.Circle({
          center: locations,
          radius: position.coords.accuracy
        });
        autoComplete.setBounds(circle.getBounds());
      }, function (error) {
         console.log(error);
      });
    }
  }

}

export interface IFullAddress {
  administrative_area_level_1?: string;
  administrative_area_level_2?: string;
  country?: string;
  locality?: string;
  sublocality_level_1?: string;
  postal_code?: number;
  route?: string;
  street_number?: number;
}
