/*  Created by Marvine Bamba on 2017/08/13. */
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class DataService {
    baseUrl: string = 'https://uj-residence.herokuapp.com/';
    // baseUrl: string = 'http://localhost:5000/';
    uploadUrl: string = 'http://ujres-api.marvinebamba.com/php-api/';
    private socket;

    constructor(private http: Http) { }
// <editor-fold description='HTTP REQUEST'>
    dataGet(route?: string , dataObject?: any): Observable< any > {
      const requestOptions = new RequestOptions();
      requestOptions.params = dataObject;
      return this.http.get(this.baseUrl + route, requestOptions )
        .map((res: Response) => {
          return res.json();
        })
        .catch(this.handleError);
    }
    dataPost(route?: string , dataObject?: any): Observable< any > {
      return this.http.post(this.baseUrl + route, JSON.stringify( dataObject ), this.getPutHeaders() )
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
    }

    dataPHPFilePost(dataObject: any): Observable< any > {
        return this.http.post( this.uploadUrl, dataObject, this.getPutHeaders_2() )
        .map((res: Response) => {
            return res.json();
        })
        .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
    private getPutHeaders() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
    private getPutHeaders_2() { // For php api use
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return new RequestOptions({ headers: headers});
    }
// </editor-fold>

// <editor-fold description='SOCKET REQUEST'>
    sendSocketData(route: string , message: any) {
        this.socket.emit(route, message);
    }
    getSocketData( route: string ): Observable< any > {
        return new Observable( observer => {
            this.socket.on(route, (data) => {
                observer.next(data);
            });
            return () => {
                this.disconnectSocket();
            };
        });
    }
    connectSocket() {
        this.socket = io(this.baseUrl);
    }
    disconnectSocket() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
// </editor-fold>
}

// dataGetCoordinate(): Observable< any > {
// return this.http.post('https://www.googleapis.com/geolocation/v1
// /geolocate?key=AIzaSyBBARqJNCwiLgUSw3R0leTAd2RxVEEQBZU', this.getPutHeaders() )
//         .map((res: any) => {
//             return res.json();
//         })
//         .catch(this.handleError);
// }
