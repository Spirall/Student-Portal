import { Component, OnInit, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeAction, toast } from 'angular2-materialize';
import { DataService } from '../../../../shared/services/data.services';
import { Base64Service } from '../../../../shared/services/base64.service';
import { SectionStorageService } from '../../../../shared/services/session_storage';
import { LocalStorageService } from '../../../../shared/services/local_storage';
import { GroupResidence } from '../../../../shared/services/res.service';
import { residencesOtherImg_upload_server } from '../../../../shared/constants/constants';
import { IResData, INewRoomData, IAdminUser, IRoomStudent } from '../../admin-interfaces/admin.interface';
import * as res_data_features from '../../admin-json_data/res_features_chart.json';

@Component({
  selector: 'app-admin-single-res',
  templateUrl: './admin-single-res.component.html',
  styleUrls: ['./admin-single-res.component.scss'],
  encapsulation: ViewEncapsulation.None
})

// TODO: use real data for chart and chart data
export class AdminSingleResComponent implements OnInit {
// <editor-fold descr="Variable Declarations">
    acc_id: number;
    res_slug: string;
    res_data: IResData;
    search_room: string;
    chart_data: any[];
    view: any[] = [300, 300];
    colorScheme = { domain: ['#5AA454', '#A10A28'] };
    res_capacity: number;
    room_available: number;
    room_taken: number;
    is_updating: boolean = false;
    is_addingNewRoomOrImage: boolean = false;
    is_editingResidence: boolean = false;
    is_updatingRoom: boolean = false;
    is_loadingRoomDetails: boolean = false;
    is_downloading: boolean = false;
    add_room_modalActions = new EventEmitter<string|MaterializeAction>();
    edit_res_modalActions = new EventEmitter<string|MaterializeAction>();
    delete_room_modalActions = new EventEmitter<string|MaterializeAction>();
    add_img_modalActions = new EventEmitter<string|MaterializeAction>();
    delete_img_modalActions = new EventEmitter<string|MaterializeAction>();
    showRoom_modalActions = new EventEmitter<string|MaterializeAction>();
    download_res_modalActions = new EventEmitter<string|MaterializeAction>();
    @ViewChild('RoomType') room_type;
    @ViewChild('CampusID') res_campus_id;
    @ViewChild('ResImage') res_img;
    @ViewChild('NewResImage') new_res_image;
    @ViewChild('NewResImageText') new_res_imageText;
    new_room: INewRoomData = {};
    selected_room: INewRoomData;
    fetched_roomStudents: Array<IRoomStudent>;
    delete_room_no: number = null;
    delete_room_id: number = null;
    delete_img: any = null;
    resFeaturesAutoComplete_data = { data: (<any> res_data_features).residence_features } ;
    ResFeatureChips: Array<{tag: string}> = [];
    chipsActions =  new EventEmitter<string|MaterializeAction>();
    res_imgs_url = residencesOtherImg_upload_server;
    user_data: IAdminUser;
    // Report Download Variables
    @ViewChild('show_descr') show_descr;
    @ViewChild('show_feature') show_feature;
    @ViewChild('show_room') show_room;
    @ViewChild('show_students') show_students;
    show_avail_room: string = 'show';
// </editor-fold>

// <editor-fold description="Constructor and NgOnInit">
  constructor(public _activated_route: ActivatedRoute,
              public _route: Router,
              public session_storage: SectionStorageService,
              public local_storage: LocalStorageService,
              public data_service: DataService,
              public base64_service: Base64Service,
              public grouping_res: GroupResidence ) {

    this.res_slug = this._activated_route.snapshot.params['res_name'];
    this.res_data = this.session_storage.getSessionStorageObject(this.res_slug);
    if (!this.res_data) {
      this._route.navigate(['../'], { preserveQueryParams: false, relativeTo: this._activated_route }) ;
    }else {
      this.chart_data = Object.assign([], this.randomChartData() );
      // this.dummy_available = this.chart_data[0].value;
      // this.dummy_taken = this.chart_data[1].value;
      this.acc_id = this.res_data.acc_id;
      this.fetch_ResidenceRoomsData();
    }
  }
  ngOnInit() {
      this.user_data = this.local_storage.getLocalStorageObject('user_data');
  }
// </editor-fold>

// <editor-fold description="Fetch page data from server">
    fetch_ResidenceRoomsData() {
    this.data_service.dataGet(`admin/admin-get-residence-rooms/${this.acc_id}`)
    .subscribe( (response: any) => {
        if (response.req === 'found') {
          this.updateCurrentData(response.data);
        }else {
          console.log(response);
          toast('An error happened while fetching new data, please contact the dev admin', 4000);
        }
      },
      (err: any) => {
        console.log(err);
        toast('An error happened while fetching new data, please contact the dev admin', 4000);
      },
      () => { });
  }
// </editor-fold>

// <editor-fold description="Save Residence title and Description Section">
    saveTitleAndDescrData() {
    if (this.res_data.acc_name && this.res_data.acc_descr) {
      this.is_updating = true;
      const data_sent = { 'res_name': this.res_data.acc_name, 'res_descr': this.res_data.acc_descr, 'acc_type': this.res_data.acc_type };
      this.data_service.dataPost(`admin/edit-residence/name-and-descr/${this.acc_id}`, data_sent)
        .subscribe( (response: any) => {
            if (response.req === 'successful') {
              toast('Residence name and description updated with success', 3000, 'rounded');
              this.session_storage.setSessionStorageObject(this.res_slug, this.res_data);
            }else {
              console.log(response);
              toast('An error happened while editing data, please contact the dev admin', 4000);
            }
          },
          (err: any) => {
            this.is_updating = false;
            console.log(err);
            toast('An error happened while editing data, please contact the dev admin', 4000);
          },
          () => { this.is_updating = false; });
    }else {
      toast('Both residence name and residence description can not be empty', 4000);
    }
  }
// </editor-fold>

// <editor-fold description="Add New Room Section">
    openAddRoomModal() {
        this.add_room_modalActions.emit({action: 'modal', params: ['open']});
    }
    submitNewRoom() {
    if (this.new_room.room_no && this.new_room.room_price) {
        this.is_addingNewRoomOrImage = true;
        const new_room_type = this.room_type.nativeElement.value;
        const romImgBrowser = null;
        const data_sent = {
          'room_no': this.new_room.room_no,
          'room_price': this.new_room.room_price,
          'room_type': new_room_type,
          'room_img': romImgBrowser,
        };
        this.data_service.dataPost(`admin/add-room/${this.acc_id}`, data_sent)
          .subscribe( (response: any) => {
              if (response.req === 'found') {
                this.updateCurrentData(response.data);
                this.add_room_modalActions.emit({action: 'modal' , params: ['close']});
                toast(`Room number ${ data_sent.room_no } has been added with success`, 3000, 'rounded');
              }else if (response.req === 'exist') {
                toast(`The following room number ${ data_sent.room_no } exist already`, 5000);
              }else {
                console.log(response);
                toast('An error happened while editing data, please contact the dev admin', 4000);
              }
            },
            (err: any) => {
              this.is_addingNewRoomOrImage = false;
              console.log(err);
              toast('An error happened while editing data, please contact the dev admin', 4000);
            },
            () => { this.is_addingNewRoomOrImage = false; });
    }else {
      toast('Empty values not allowed', 3000);
    }
  }
// </editor-fold>

// <editor-fold description="Add Delete Room Section">
    openDeleteRoomModal(delete_room_no, delete_room_id) {
    this.delete_room_no = delete_room_no;
    this.delete_room_id = delete_room_id;
    this.delete_room_modalActions.emit({action: 'modal', params: ['open']});
  }
    deleteRoomData(delete_room_no, delete_room_id) {
    this.is_updating = true;
    this.data_service.dataGet(`admin/delete-room/${this.acc_id}`, {'room_id': delete_room_id})
      .subscribe( (response: any) => {
          if (response.req === 'found') {
            this.delete_room_modalActions.emit({action: 'modal' , params: ['close']});
            toast(`Room number ${ delete_room_no } has been deleted with success`, 3000, 'rounded');
            this.updateCurrentData(response.data);
          }else {
            console.log(response);
            toast('An error happened while deleting data, please contact the dev admin', 4000);
          }
        },
        (err: any) => {
          this.is_updating = false;
          console.log(err);
          toast('An error happened while deleting data, please contact the dev admin', 4000);
        },
        () => { this.is_updating = false; });
  }
// </editor-fold>

// <editor-fold description="Edit Residence Section">
    openEditResidenceModal() {
        this.edit_res_modalActions.emit({action: 'modal', params: ['open']});
        this.processResFeatureData();
      }
    processResFeatureData() {
          const res_feature = this.res_data.res_features;
          this.ResFeatureChips = [];
          res_feature.forEach( (feature_obj) => {
              this.ResFeatureChips.push({'tag': feature_obj.acc_f_name});
          });
      }

// <editor-fold description="Submit Other Residence details to API">
    async submitEditResDetails() {
        if (this.res_data.acc_capacity && this.res_data.acc_no_rooms) {
          this.is_editingResidence = true;
          const res_campus = this.res_campus_id.nativeElement.value;
          const resImgBrowser = this.res_img.nativeElement;
          const resImage_base64 = (resImgBrowser.files[0])
          ? await this.base64_service.ConvertToBase64(resImgBrowser.files[0]) : null;
          const data_sent = {
            'acc_name': this.res_data.acc_name,
            'acc_capacity': this.res_data.acc_capacity,
            'acc_no_rooms': this.res_data.acc_no_rooms,
            'acc_lat': this.res_data.acc_lat,
            'acc_long': this.res_data.acc_long,
            'campus_no': res_campus,
            'resImg': resImage_base64,
            'resFeatures': this.ResFeatureChips,
          };
          this.data_service.dataPost(`admin/edit-residence/other-edit/${this.acc_id}`, data_sent)
            .subscribe( (response: any) => {
                if (response.req === 'found') {
                    // <editor-fold description="Upload residence main image">
                    const data_sent_2 = {
                        'request': 'upload', 'sub-request': 'res-main-img',
                        'base64-file': data_sent['resImg'], 'acc_name': data_sent['acc_name']
                    };
                    this.data_service.dataPHPFilePost( data_sent_2 )
                        .subscribe( ( response_2: any ) => {
                                if (response_2.req === 'successful') {
                                    this.updateCurrentData(response.data);
                                    this.edit_res_modalActions.emit({action: 'modal' , params: ['close']});
                                    toast(`The Residence has been updated with success`, 3000, 'rounded');
                                }else {
                                    console.log(response_2);
                                    toast('An Error happened, please contact the dev admin', 4000);
                                }
                            },
                            (err: any) => {
                                console.log(err);
                                toast('An Error happened, please contact the dev admin', 4000);
                                this.is_editingResidence = false;
                            },
                            () => { this.is_editingResidence = false; });
                    // </editor-fold>
                }else {
                  console.log(response);
                  toast('An error happened while editing data, please contact the dev admin', 4000);
                }
              },
              (err: any) => {
                this.is_editingResidence = false;
                console.log(err);
                toast('An error happened while editing data, please contact the dev admin', 4000);
              },
              () => { /*this.is_editingResidence = false;*/ });
        }else {
          toast('Empty Capacity / Number of rooms not allowed', 3000);
        }
      }
// </editor-fold>

// <editor-fold description="this is used to update residence features while typing them">
    updateResFeature(value, event) {
      if (event === 'add') {
        const index = this.ResFeatureChips.findIndex(i => i.tag === value);
        if (index === -1) {
          this.ResFeatureChips.push({'tag': value});
        }
      }else {
        this.ResFeatureChips.forEach( (feature, i) => {
            if (feature.tag === value) {
              this.ResFeatureChips.splice(i, 1);
            }
        });
      }
    }
// </editor-fold>

// </editor-fold>

// <editor-fold description="Add New Img Section">
    openAddImgModal() {
        this.add_img_modalActions.emit({action: 'modal', params: ['open']});
        this.new_res_image.nativeElement.files = null;
        this.new_res_imageText.nativeElement.value = null;
    }
    async submitNewImg() {
        const resImgBrowser = this.new_res_image.nativeElement;
        if (resImgBrowser.files[0]) {
            this.is_addingNewRoomOrImage = true;
            const d = new Date();
            const img_count = d.getFullYear() + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
            const resRoomImage_base64 = (resImgBrowser.files[0])
                ? await this.base64_service.ConvertToBase64(resImgBrowser.files[0])
                : null;
            const data_sent = {
                'acc_name': this.res_data.acc_name,
                'name_count': img_count,
                'res_img': resRoomImage_base64,
            };
            this.data_service.dataPost(`admin/add-res-img/${this.acc_id}`, data_sent)
                .subscribe( (response: any) => {
                        if (response.req === 'found') {
                         // <editor-fold description="Upload residence other image">
                            const data_sent_2 = {
                                'request': 'upload', 'sub-request': 'res-other-img', 'name_count': img_count,
                                'base64-file': data_sent['res_img'], 'acc_name': data_sent['acc_name']
                            };
                            this.data_service.dataPHPFilePost( data_sent_2 )
                                .subscribe( ( response_2: any ) => {
                                        if (response_2.req === 'successful') {
                                            this.updateCurrentData(response.data);
                                            this.add_img_modalActions.emit({action: 'modal' , params: ['close']});
                                            toast(`The image was added successfully`, 3000, 'rounded');
                                        }else {
                                            console.log(response_2);
                                            toast('An Error happened, please contact the dev admin', 4000);
                                        }
                                    },
                                    (err: any) => {
                                        console.log(err);
                                        toast('An Error happened, please contact the dev admin', 4000);
                                        this.is_addingNewRoomOrImage = false;
                                    },
                                    () => { this.is_addingNewRoomOrImage = false; });
                            // </editor-fold>
                        }else {
                            this.is_addingNewRoomOrImage = false;
                            console.log(response);
                            toast('An error happened while adding image, please contact the dev admin', 4000);
                        }
                    },
                    (err: any) => {
                        this.is_addingNewRoomOrImage = false;
                        console.log(err);
                        toast('An error happened while adding image, please contact the dev admin', 4000);
                    },
                    () => { /*this.is_addingNewRoomOrImage = false;*/ });
        }else {
            toast('Empty image is not allowed', 3000);
        }
    }
// </editor-fold>

// <editor-fold description="Add Delete Room Section">
    openDeleteImgModal(delete_img) {
        this.delete_img = delete_img;
        this.delete_img_modalActions.emit({action: 'modal', params: ['open']});
    }
    deleteResImgData(delete_img) {
        this.is_updating = true;
        this.data_service.dataGet(`admin/delete-res-img/${this.acc_id}`, {'img_id': delete_img.img_id})
            .subscribe( (response: any) => {
                    if (response.req === 'found') {
                    // <editor-fold description="Delete Upload residence other image">
                        const data_sent_2 = {
                            'request': 'delete-upload',
                            'sub-request': 'del-res-other-img',
                            'file_name': delete_img.img_src
                        };
                        this.data_service.dataPHPFilePost( data_sent_2 )
                            .subscribe( ( response_2: any ) => {
                                    if (response_2.req === 'successful') {
                                        this.delete_img_modalActions.emit({action: 'modal' , params: ['close']});
                                        toast(`The image was deleted with success`, 3000, 'rounded');
                                        this.updateCurrentData(response.data);
                                    }else {
                                        console.log(response_2);
                                        toast('An Error happened, please contact the dev admin', 4000);
                                    }
                                },
                                (err: any) => {
                                    console.log(err);
                                    toast('An Error happened, please contact the dev admin', 4000);
                                    this.is_updating = false;
                                },
                                () => { this.is_updating = false; });
                    // </editor-fold>
                    }else {
                        console.log(response);
                        toast('An error happened while deleting data, please contact the dev admin', 4000);
                    }
                },
                (err: any) => {
                    this.is_updating = false;
                    console.log(err);
                    toast('An error happened while deleting data, please contact the dev admin', 4000);
                },
                () => { /*this.is_updating = false;*/ });
    }
// </editor-fold>

// <editor-fold description="Show selected room details">
    openSelectedRoomModal(room) {
        this.showRoom_modalActions.emit({action: 'modal', params: ['open']});
        this.selected_room = room;
        this.fetch_RoomDetailsData(room.room_id);
    }
    fetch_RoomDetailsData(room_id) {
        const data_sent = { 'room_id': room_id };
        this.is_loadingRoomDetails = true;
        this.data_service.dataGet(`admin/admin-get-room-details/${this.acc_id}`, data_sent)
        .subscribe( (response: any) => {
            if (response.req === 'found') {
                this.fetched_roomStudents = response.data;
            }else {
                console.log(response);
                toast('An error happened while fetching new data, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            console.log(err);
            toast('An error happened while fetching new data, please contact the dev admin', 4000);
        },
        () => { this.is_loadingRoomDetails = false; });
    }
    updatedSelectedRoom(student) {
        this.is_updatingRoom = true;
        const data_sent = { 'room_id': student.room_id, 'rs_no': student.rs_no };
        this.data_service.dataGet(`admin/update-room-student-details`, data_sent)
        .subscribe( (response: any) => {
            if (response.req === 'found') {
                this.fetch_RoomDetailsData(student.room_id);
                this.fetch_ResidenceRoomsData();
                toast(`${student.app_stFname + ' ' +  student.app_stLname} has been removed from this room`, 3000, 'rounded');
            }else {
                console.log(response);
                toast('An error happened while editing data, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.is_updatingRoom = false;
            console.log(err);
            toast('An error happened while editing data, please contact the dev admin', 4000);
        },
        () => { this.is_updatingRoom = false; });
    }
// </editor-fold>

// <editor-fold descr="Download Residences Section">
    showDownloadResModal() {
        this.download_res_modalActions.emit({action: 'modal', params: ['open']});
    }
    downloadResData() {
        const data_sent = {
            'acc_id': this.acc_id,
            'descr': this.show_descr.nativeElement.value,
            'show_feature': this.show_feature.nativeElement.value,
            'show_room': this.show_room.nativeElement.value,
            'show_students': this.show_students.nativeElement.value,
            'avail_room': this.show_avail_room,
        };
        this.is_downloading = true;
        this.data_service.dataGet(`admin/download-residence`, data_sent)
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

// <editor-fold description="update current state data when received from server">
    updateCurrentData(data: IResData) {
    this.res_data = data;
    this.session_storage.setSessionStorageObject(this.res_slug, this.res_data);
    const res_analyse = this.grouping_res.getResAvailability(data.rooms_data);
    this.res_capacity = res_analyse.capacity;
    this.room_available = res_analyse.available;
    this.room_taken = res_analyse.unavailable;
    // console.log(data);
  }
// </editor-fold>

// <editor-fold descr="Random chart data>
   randomChartData(): Array<{name: string, value: number }> {
    return [
      { 'name': 'Available', 'value': Math.floor((Math.random() * 500) + 100) },
      { 'name': 'Taken', 'value': Math.floor((Math.random() * 500) + 100) }
    ];
  }
// </editor-fold>
}






















