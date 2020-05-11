import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { toast } from 'angular2-materialize';
import { DataService } from '../../../../shared/services/data.services';
import { IResData } from '../../../../shared/interfaces/residence.interface';
import { SectionStorageService } from '../../../../shared/services/session_storage';
import { GroupResidence } from '../../../../shared/services/res.service';
import { residencesOtherImg_upload_server } from '../../../../shared/constants/constants';


@Component({
  selector: 'app-single-accommodation',
  templateUrl: './single-accommodation.component.html',
  styleUrls: ['./single-accommodation.component.scss']
})
export class SingleAccommodationComponent implements OnInit {
  acc_id: number;
  res_slug: string;
  res_data: IResData;
  sliderOptions: Array<object> = [{ interval: 10000}];
  room_type: Array<{name: string, count: number, no: number}>;
  zoom: number = 16;
  res_img_url = residencesOtherImg_upload_server;
  is_dataLoading = true;

  constructor (
    private _activated_route: ActivatedRoute,
    private _route: Router,
    private session_storage: SectionStorageService,
    private group_room_type: GroupResidence,
    public data_service: DataService) {

    this.res_slug = this._activated_route.snapshot.params['res_name'];
    const res_data = this.session_storage.getSessionStorageObject(this.res_slug);
    if ( !res_data ) {
      this._route.navigate(['../'], { preserveQueryParams: false, relativeTo: this._activated_route }) ;
    }else {
      this.res_data = res_data;
      this.acc_id = this.res_data.acc_id;
      this.room_type = this.group_room(res_data.rooms_data);
      this.fetch_ResidenceRoomsData();
    }
  }

  ngOnInit() {
      // window.scrollTo(0, 0);
  }

// <editor-fold description="Fetch page data from server">
    fetch_ResidenceRoomsData() {
        this.data_service.dataGet(`admin/admin-get-residence-rooms/${this.acc_id}`)
        .subscribe( (response: any) => {
                if (response.req === 'found') {
                    this.res_data = response.data;
                }else {
                    console.log(response);
                    toast('An error happened while fetching new data, please contact the dev admin', 4000);
                }
            },
            (err: any) => {
                console.log(err);
                this.is_dataLoading = false;
                toast('An error happened while fetching new data, please contact the dev admin', 4000);
            },
            () => { this.is_dataLoading = false; });
    }
// </editor-fold>

  group_room(res_rooms): Array<{name: string, count: number, no: number}> {
     return this.group_room_type.groupResRoomType(res_rooms);
  }

}
