import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

import { DataService } from '../../../shared/services/data.services';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { IHomeData } from '../admin-interfaces/admin.interface';
import { Route_1, Route_2 } from '../admin-json_data/coordinates.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent implements OnInit {
  // TODO: check interface for home_data
  res_name: string;
  home_loading: boolean = true;
  chart_data: any[];
  view: any[] = [300, 300];
  colorScheme = { domain: ['#5AA454', '#A10A28'] };
  lat_default: number = -26.186634;
  lng_default: number = 28.006097;
  lat_1: number = Route_1[0].lat;
  lng_1: number = Route_1[0].long;
  lat_2: number = Route_2[0].lat;
  lng_2: number =  Route_2[0].long;
  zoom: number = 16;
  busIcon = {
    url: '../../../assets/img/bus_location.png',
    scaledSize: { height: 60, width: 60 }
  }
  home_data: IHomeData;
  routeTimer_1;
  routeTimer_2;

  constructor(private _router: Router,
              private data_service: DataService,
              private session_storage: SectionStorageService) { }

  ngOnInit() {
    this.chart_data = Object.assign([], this.randomChartData() );
    this.fetch_adminHomeData();
    this.routeTimer_1 = IntervalObservable.create(1600);
    this.routeTimer_2 = IntervalObservable.create(1000);
  }

  fetch_adminHomeData() {
    this.data_service.dataGet(`admin/admin-home/`)
    .subscribe( (response: IAPIResponse1) => {
      if (response.req === 'found') {
          // console.log(response.data);
        this.home_data = response.data;
        this.processBusRoute();
      }else {
        console.log(response);
        toast('An Error happened, please contact the dev admin', 4000);
      }
    },
    (err: any) => {
      console.log(err);
      toast('An Error happened, please contact the dev admin', 4000);
    },
    () => { this.home_loading = false; });
  }

  residenceHasChanged(value) {
    this.chart_data = this.randomChartData();
  }

  onSelect(event) {
    console.log(event);
  }

  randomChartData(): Array<Object> {
    return [
      { 'name': 'Room Available', 'value': Math.floor((Math.random() * 500) + 100) },
      { 'name': 'Room Taken', 'value': Math.floor((Math.random() * 500) + 100) }
    ];
  }

  processBusRoute() {
    const route1_length = Route_1.length;
    const route2_length = Route_2.length;
    let index_1 = 0, index_2 = 0;
    this.routeTimer_1.subscribe(n => {
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

}



