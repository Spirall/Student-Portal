/*  Created by Marvine Bamba on 2017/08/13. */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  // baseUrl: string = 'https://uj-residence.herokuapp.com/';
  baseUrl: string = 'http://localhost:5000/';
  private socket;

  constructor() { }

  send(route: string, message: any) {
      this.socket.emit(route, message);
  }

  get( route: string, data_sent?: any ): Observable< any > {
     return new Observable( observer => {
          this.socket = io(this.baseUrl);
          this.socket.on(route, (data) => {
              observer.next(data);
          });
          return () => {
              this.socket.disconnect();
          };
      });
  }
}
