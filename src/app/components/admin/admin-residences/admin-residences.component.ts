import { Component, OnInit, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeAction, toast } from 'angular2-materialize';
import { DataService } from '../../../shared/services/data.services';
import { UrlService } from '../../../shared/services/url_encode';
import { Base64Service } from '../../../shared/services/base64.service';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { IResData } from '../../../shared/interfaces/residence.interface';
import { residencesMainImg_upload_server } from '../../../shared/constants/constants';
import { INewResData } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-admin-residences',
  templateUrl: './admin-residences.component.html',
  styleUrls: ['./admin-residences.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AdminResidencesComponent implements OnInit {
  residence_loading: boolean  = true;
  is_addingNewRes: boolean = false;
  is_downloading: boolean = false;
  residences_data: Array<IResData>;
  search_res: string;
  add_res_modalActions = new EventEmitter<string|MaterializeAction>();
  delete_res_modalActions = new EventEmitter<string|MaterializeAction>();
  delete_res_no: number;
  delete_res_name: number;
  delete_res_Img: string;
  download_res_modalActions = new EventEmitter<string|MaterializeAction>();
  new_res: INewResData = {}; // for inserting new res data
  res_mainImgUrl = residencesMainImg_upload_server; // root url for rest img
  @ViewChild('CampusID') campus_id;
  @ViewChild('Acc_Type') acc_type;
  @ViewChild('NewResImage') new_res_img;
  @ViewChild('NewResImageNameCopy') new_res_img_copy;
  // Report Variables
  show_descr: string = 'show';
  show_avail: string = 'show';
  show_feature: string = 'show';
  @ViewChild('ResType') res_type;
  @ViewChild('CampusToShow') campusToShow;


  constructor(private data_service: DataService,
              private url_service: UrlService,
              private _route: Router,
              private _active_route: ActivatedRoute,
              private session_storage: SectionStorageService,
              private base64_service: Base64Service) { }

  ngOnInit() {
    this.fetch_adminResidencesFromSession();
    this.fetch_adminResidencesData();
  }

// <editor-fold descr="fetch page data from server">
  fetch_adminResidencesData() {
    this.data_service.dataGet(`admin/admin-residences`)
      .subscribe( (response: any) => {
          if (response.req === 'found') {
            this.updateCurrentData(response.data);
          }else {
            console.log(response);
            toast('An Error happened, please contact the dev admin', 4000);
          }
        },
        (err: any) => {
          console.log(err);
          toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.residence_loading = false; });
  }
// </editor-fold>

// <editor-fold descr="fetch page data from session storage">
  fetch_adminResidencesFromSession() {
    const res_local = this.session_storage.getSessionStorageObject('residences_data');
    if ( res_local ) {
      this.residences_data = res_local;
      this.residence_loading = false;
    }
  }
// </editor-fold>

// <editor-fold descr="Add Residence Section">
  openAddResModal() {
    this.new_res = {};
    this.campus_id.nativeElement.value = 1;
    // this.new_res_img.nativeElement.files = null;
    // this.new_res_img_copy.nativeElement.value = null;
    this.add_res_modalActions.emit({action: 'modal', params: ['open']});
  }
  async submitNewAccommodation() {
    if (this.new_res.acc_name && this.new_res.acc_capacity
        && this.new_res.acc_no_rooms && this.new_res.acc_lat && this.new_res.acc_long) {
        this.is_addingNewRes = true;
        const campus_id = this.campus_id.nativeElement.value;
        const acc_type = this.acc_type.nativeElement.value;
        const new_res_img = this.new_res_img.nativeElement;
        const res_img = (new_res_img.files[0])
        ? await this.base64_service.ConvertToBase64(new_res_img.files[0]) : null;
        const data_sent = {
            'acc_name': this.new_res.acc_name,
            'acc_capacity': this.new_res.acc_capacity,
            'acc_descr': this.new_res.acc_descr,
            'acc_lat': this.new_res.acc_lat,
            'acc_long': this.new_res.acc_long,
            'acc_no_rooms': this.new_res.acc_no_rooms,
            'campus_id': campus_id,
            'res_img': res_img,
            'acc_type': acc_type
        };
        this.data_service.dataPost(`admin/add-residence`, data_sent)
          .subscribe( (response: any) => {
              if (response.req === 'found') {
              // <editor-fold description="Upload residence main image">
                  const data_sent_2 = {
                      'request': 'upload', 'sub-request': 'res-main-img',
                      'base64-file': data_sent['res_img'], 'acc_name': data_sent['acc_name']
                  };
                  this.data_service.dataPHPFilePost( data_sent_2 )
                      .subscribe( ( response_2: any ) => {
                          if (response_2.req === 'successful') {
                              toast(`Residence ${ data_sent.acc_name } has been added with success`, 3000, 'rounded');
                              this.updateCurrentData(response.data);
                              this.add_res_modalActions.emit({action: 'modal' , params: ['close']});
                          }else {
                              console.log(response_2);
                              toast('An Error happened, please contact the dev admin', 4000);
                          }
                      },
                      (err: any) => {
                          console.log(err);
                          toast('An Error happened, please contact the dev admin', 4000);
                          this.is_addingNewRes = false;
                      },
                      () => { this.is_addingNewRes = false; this.search_res = ''; });
                  // </editor-fold>
              }else {
                console.log(response);
                toast('An Error happened, please contact the dev admin', 4000);
              }
            },
            (err: any) => {
              console.log(err);
              toast('An Error happened, please contact the dev admin', 4000);
              this.is_addingNewRes = false;
            },
        () => { /*this.is_addingNewRes = false; this.search_res = ''; */ });
    }else {
      toast('the residence number, capacity, number of rooms and latitude and longitude can not be empty', 4000);
    }
  }
// </editor-fold>

// <editor-fold descr="Delete Residence Section">
  showDeleteResModal(res_id, res_name, acc_img) {
    this.delete_res_no = res_id;
    this.delete_res_name = res_name;
    this.delete_res_Img = acc_img;
    this.delete_res_modalActions.emit({action: 'modal', params: ['open']});
  }
  deleteResData(res_id, res_name, acc_img) {
    this.residence_loading = true;
    this.data_service.dataGet(`admin/delete-residence/${res_id}`)
    .subscribe( (response: any) => {
        if (response.req === 'found') {
        // <editor-fold description="Delete residence main img residence">
            const data_sent_2 = {
                'request': 'delete-upload', 'sub-request': 'del-res-main-img',
                'file_name': acc_img
            };
            this.data_service.dataPHPFilePost( data_sent_2 )
                .subscribe( ( response_2: any ) => {
                        if (response_2.req === 'successful') {
                            toast(`Residence ${res_name} has been deleted with success`, 3000, 'rounded');
                            this.updateCurrentData(response.data);
                            this.delete_res_modalActions.emit({action: 'modal' , params: ['close']});
                        }else {
                            console.log(response_2);
                            toast('An Error happened, please contact the dev admin', 4000);
                        }
                    },
                    (err: any) => {
                        console.log(err);
                        toast('An Error happened, please contact the dev admin', 4000);
                        this.residence_loading = false;
                    },
                    () => { this.residence_loading = false; this.search_res = ''; });
            // </editor-fold>
        }else {
          console.log(response);
          toast('An Error happened, please contact the dev admin', 4000);
        }
      },
      (err: any) => {
        console.log(err);
        toast('An Error happened, please contact the dev admin', 4000);
        this.residence_loading = false;
      },
      () => { /*this.residence_loading = false; this.search_res = '';*/ });
  }
// </editor-fold>


// <editor-fold descr="Download Residences Section">
    showDownloadResModal() {
        this.download_res_modalActions.emit({action: 'modal', params: ['open']});
    }
    downloadResData() {
        const data_sent = {
            'descr': this.show_descr,
            'avail_room': this.show_avail,
            'show_feature': this.show_feature,
            'campus': this.campusToShow.nativeElement.value,
            'res_type': this.res_type.nativeElement.value
        };
        this.is_downloading = true;
        this.data_service.dataGet(`admin/download-residences`, data_sent)
        .subscribe( (response: any) => {
            if (response.req === 'found') {
                const link = document.createElement('a');
                link.href = this.data_service.baseUrl +  response.data;
                document.body.appendChild(link);
                const timeout_id = setTimeout(function() {
                    link.click();
                    document.body.removeChild(link);
                    clearTimeout(timeout_id);
                }, 500);
            }else {
                console.log(response);
                toast('An Error happened, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.is_downloading = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.is_downloading = false; });
    }
// </editor-fold>

// <editor-fold descr="Got to residence page">
  gotToResidence( res: IResData ) {
    const res_slug = this.encodeUrl( res.acc_name );
    this.session_storage.setSessionStorageObject(res_slug , res);
    this._route.navigate(['./', res_slug], { preserveQueryParams: false, relativeTo: this._active_route }) ;
  }
  // Encode residence name to url format
  encodeUrl(url: string) {
    return this.url_service.urlEncode(url);
  }
// </editor-fold>

// <editor-fold descr="Update to residence page">
  updateCurrentData(data) {
    this.residences_data = data;
    this.session_storage.setSessionStorageObject('residences_data', this.residences_data);
  }
// </editor-fold>
}


// console.log(response);
// const link = document.createElement('a');
// const blobb = new Blob([response], {type: 'application/pdf'});
// console.log(blobb);
// const url: any = URL.createObjectURL(blobb);
// link.href = url;
// link.download = 'residence.pdf';
// document.body.appendChild(link);
// setTimeout(function() {
//     link.click();
//     document.body.removeChild(link);
// }, 5);
