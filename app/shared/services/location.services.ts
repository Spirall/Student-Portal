import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor() { }

  getUserLocation() {
      return new Promise( (resolve, reject) => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function( position ) {
                  resolve(position.coords);
              }, function(error) {
                  console.log(error);
                  reject('not working');
              });
          } else {
              reject('not working 2');
          }
      });
  }
}
