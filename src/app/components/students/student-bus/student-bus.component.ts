import { Component, OnInit, OnDestroy } from '@angular/core';
import { toast } from 'angular2-materialize';
import { Route_1, Route_2 } from '../../../shared/json_data/coordinates.component';
import { DataService } from '../../../shared/services/data.services';
import { LocationService } from '../../../shared/services/location.services';
import { IUserLocation } from '../../../shared/interfaces/other.interface';
import { google_maps_style } from '../student-constants/student.constant';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-student-bus',
  templateUrl: './student-bus.component.html',
  styleUrls: ['./student-bus.component.scss']
})
export class StudentBusComponent implements OnInit, OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();
    is_getting_location: boolean = false;
    coord = { lat: -26.185960, long: 28.005071 };
    zoom: number = 16;
    busIcon = {
        url: '../../../assets/img/bus_location_white.png',
        scaledSize: { height: 60, width: 60 }
    };
    lat_1: number = Route_1[0].lat;
    lng_1: number = Route_1[0].long;
    lat_2: number = Route_2[0].lat;
    lng_2: number =  Route_2[0].long;
    routeTimer_1;
    routeTimer_2;
    google_style = google_maps_style;
    studentIcon = {
        url: '../../../assets/img/student_location_2.png',
        scaledSize: { height: 20, width: 20 }
    };
    st_lat: any =  -26.185960;
    st_lng: number = 28.005071;

    online_drivers: Array<IOnlineDriver>;

    constructor(
        private data_service: DataService,
        private location_service: LocationService ) { }

    ngOnInit() {
      this.routeTimer_1 = IntervalObservable.create(1600);
      this.routeTimer_2 = IntervalObservable.create(1000);
      this.processBusRoute();
      this.getStudentLocation();
      this.data_service.connectSocket();
      this.getOnlineBuses();
    }

    ngOnDestroy() {
        this.data_service.disconnectSocket();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    getStudentLocation() {
      this.is_getting_location = true;
      this.location_service.getUserLocation()
      .then( ( coordinates: IUserLocation ) => {
        this.st_lat = coordinates.latitude;
        this.st_lng = coordinates.longitude;
        this.coord = { lat: this.st_lat, long: this.st_lng  };
        this.is_getting_location = false;
        console.log(coordinates);
      })
      .catch( () => {
          this.is_getting_location = false;
          toast('Could not get not get your current location, used of http instead of https', 4000);
      });
    }

    // *** on New Connection
    getOnlineBuses() {
        this.data_service.sendSocketData('student-bus-on', 'student-bus-on');
        this.data_service.getSocketData('get-driver-cordinate')
        .takeUntil(this.ngUnsubscribe)
        .subscribe( ( drivers: Array<IOnlineDriver> ) => {
                this.online_drivers = drivers;
                console.log(this.online_drivers);
        },
        (err: any) => {
            console.log(err);
        },
        () => { });
    }

// <editor-fold Description="Process Routes">
    processBusRoute() {
        const route1_length = Route_1.length;
        const route2_length = Route_2.length;
        let index_1 = 0, index_2 = 0;
        this.routeTimer_1.subscribe( n => {
            if (index_1 === route1_length) {
                this.lat_1 = Route_1[0].lat;
                this.lng_1 = Route_1[0].long;
                index_1 = 0;
            }else {
                this.lat_1 = Route_1[index_1].lat;
                this.lng_1 = Route_1[index_1].long;
            }
            index_1++;
        });
        this.routeTimer_2.subscribe(n => {
            if (index_2 === route2_length) {
                index_2 = 0;
                this.lat_2 = Route_2[0].lat;
                this.lng_2 =  Route_2[0].long;
            }else {
                this.lat_2 = Route_2[index_2].lat;
                this.lng_2 =  Route_2[index_2].long;
            }
            index_2++;
        });
    }
// </editor-fold>
}


export interface IOnlineDriver {
    id?: string;
    fname?: string;
    lname?: string;
    cell?: string;
    lat?: number;
    long?: number;
}