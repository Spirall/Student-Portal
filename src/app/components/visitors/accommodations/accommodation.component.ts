import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { toast } from 'angular2-materialize';
import { DataService } from '../../../shared/services/data.services';
import { UrlService } from '../../../shared/services/url_encode';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { IResData } from '../../../shared/interfaces/residence.interface';
import { residencesMainImg_upload_server } from '../../../shared/constants/constants';
// import * as res_data from '../../shared/json_data/residence_list.json';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss'],
})
export class AccommodationComponent implements OnInit {
// <editor-fold descr="Variable Declaration">
  residences_data: IResData;
  // residence_list = (<any> res_data).residence_list;
  search_res: string;
  residences_loading: boolean = true;
  res_mainImgUrl = residencesMainImg_upload_server;
// </editor-fold>

  constructor(private data_service: DataService,
              private url_service: UrlService,
              private _route: Router,
              private _active_route: ActivatedRoute,
              private session_storage: SectionStorageService) { }

  ngOnInit() {
    this.fetch_ResidencesDataFrom_LocalStorage();
    this.fetch_ResidencesDataFrom_API();
  }

// <editor-fold descr="fetch residences data from the API server">
  fetch_ResidencesDataFrom_API() {
    this.data_service.dataGet('get-residences')
      .subscribe( (response: any) => {
          if (response.req === 'found') {
            this.updateCurrentData(response.data);
          }else {
            console.log(response);
            toast('An Error happened, please contact the admin of the website', 4000);
          }
        },
        (err: any) => {
          console.log(err);
          toast('An Error happened, please contact the admin of the website', 4000);
        },
        () => { this.residences_loading = false; });
  }
// </editor-fold>

// <editor-fold descr="fetch residences data from the API server">
  fetch_ResidencesDataFrom_LocalStorage() {
    const res_local = this.session_storage.getSessionStorageObject('residences_data');
    if ( res_local ) {
      this.residences_data = res_local;
      this.residences_loading = false;
    }
  }
// </editor-fold>

// <editor-fold descr="Got to residence page">
  gotToResidence( res: IResData ) {
    const res_slug = this.encodeUrl(res.acc_name);
    this.session_storage.setSessionStorageObject(res_slug , res);
    this._route.navigate(['./', res_slug], { preserveQueryParams: false, relativeTo: this._active_route }) ;
  }

  encodeUrl(url: string) {
    return this.url_service.urlEncode(url);
  }
// </editor-fold>

// <editor-fold descr="Update residence page data">
  updateCurrentData(data) {
    this.residences_data = data;
    this.session_storage.setSessionStorageObject('residences_data', this.residences_data);
  }
// </editor-fold>
}
