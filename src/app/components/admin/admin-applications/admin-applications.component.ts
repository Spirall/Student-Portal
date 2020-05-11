import { Component, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterializeAction, toast } from 'angular2-materialize';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { DataService } from '../../../shared/services/data.services';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { proof_registration_upload_server } from '../../../shared/constants/constants';
import {  IApplicationsPageData, IApplicationData } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.scss']
})
export class AdminApplicationsComponent implements OnInit {
  application_loading: boolean  = true;
  applic_type: string;
  res_no: string;
  search_application: string;
  application_data: IApplicationsPageData;
  application_data_copy: IApplicationsPageData;
  show_application_modalActions = new EventEmitter<string|MaterializeAction>();
  application_response_modalActions = new EventEmitter<string|MaterializeAction>();
  is_UpdatingApplication: boolean = false;
  is_sendingUnavailableEmail: boolean = false;
  st: IApplicationData;
  application_sent_type: string;
  application_room_notFound: boolean = false;
  pdf_link: string;
  new_room_no: string;

  constructor (
      private data_service: DataService,
      private session_storage: SectionStorageService,
      public sanitizer: DomSanitizer ) { }

  ngOnInit() {
     this.fetch_adminResidencesFromSession();
     this.fetch_adminResidencesData();
  }

// <editor-fold description="fetch page data from server">
    fetch_adminResidencesData() {
        this.data_service.dataGet(`admin/admin-get-application`)
        .subscribe( (response: IAPIResponse1) => {
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
            () => { this.application_loading = false; });
    }
// </editor-fold>

// <editor-fold description="fetch page data from session storage">
    fetch_adminResidencesFromSession() {
        const res_local = this.session_storage.getSessionStorageObject('admin-application');
        if ( res_local ) {
            this.application_data = this.application_data_copy = res_local;
            this.application_loading = false;
        }
    }
// </editor-fold>

// <editor-fold description="Load application status">
    loadStatus(status) {
      if (status === 0) {
          return 'Pending';
      }else if (status === 1) {
          return 'Accepted';
      }else if (status === 2) {
          return 'Rejected';
      }
      return null;
    }
// </editor-fold>

    showApplication(application) {
        this.show_application_modalActions.emit({action: 'modal' , params: ['open']});
        this.st = application;
        this.st['proof_ext'] = this.getProofExtention(application.app_proofReg);
        if (this.st['proof_ext'] === 'pdf') {
            this.st['proof_link'] = this.sanitizer.bypassSecurityTrustResourceUrl(proof_registration_upload_server + application.app_proofReg);
            this.pdf_link = proof_registration_upload_server + application.app_proofReg;
        }else {
            this.st['proof_link'] = proof_registration_upload_server + application.app_proofReg;
        }
    }

// <editor-fold description="Load student current studying year">
    loadStudentYear( year ) {
        if (parseInt(year, 10)  === 1) {
            return '1st / 2nd Year';
        }else if (parseInt(year, 10) === 2) {
            return '3rd / 4th Year';
        }else if (parseInt(year, 10) === 3) {
            return 'Honors';
        }else if (parseInt(year, 10) === 4) {
            return 'Master';
        }else if (parseInt(year, 10) === 5) {
            return 'Doctorate';
        }
        return null;
    }
// </editor-fold>

// <editor-fold description="On update application">
    updateApplication(values, request) {
        const data_sent = {
            'appl_id': values.appl_id,
            'room_type_id': values.r_type_id,
            'acc_id': values.acc_id,
            'req_option': request,
            'st_email': values.app_stEmail,
            'res_name': values.acc_name,
            'room_type': values.r_type_name,
            'st_fullName': values.full_name,
        };
        this.is_UpdatingApplication = true;
        this.application_sent_type = request;
        this.application_room_notFound = false;
        this.data_service.dataGet(`admin/admin-update-application`, data_sent)
        .subscribe( (response: IAPIResponse1) => {
            if (response.req === 'found') {
                this.updateCurrentData(response.data);
                this.new_room_no = response.application_room_no;
                this.show_application_modalActions.emit({action: 'modal' , params: ['close']});
                this.application_response_modalActions.emit({action: 'modal' , params: ['open']});
            }else if (response.req === 'no available room') {
                this.show_application_modalActions.emit({action: 'modal' , params: ['close']});
                this.application_response_modalActions.emit({action: 'modal' , params: ['open']});
                this.application_sent_type = null;
                this.application_room_notFound = true;
            }else {
                console.log(response);
                toast('An Error happened, please contact the dev admin', 4000);
                this.is_UpdatingApplication = false;
            }
        },
        (err: any) => {
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
            this.is_UpdatingApplication = false;
        },
        () => { this.is_UpdatingApplication = false; });
    }
// </editor-fold>

// <editor-fold description="On send unavailable room email">
    sendUnavailableEmail(values) {
        const data_sent = {
            'appl_id': values.appl_id,
            'st_email': values.app_stEmail,
            'res_name': values.acc_name,
            'room_type': values.r_type_name,
            'st_fullName': values.full_name,
        };
        this.is_sendingUnavailableEmail = true;
        // accommodation full
        this.data_service.dataGet(`admin/admin-application-accom-full`, data_sent)
            .subscribe( (response: IAPIResponse1) => {
                    if (response.req === 'found') {
                        this.updateCurrentData(response.data);
                        this.application_response_modalActions.emit({action: 'modal' , params: ['close']});
                        toast('Email sent with success', 4000, 'rounded');
                    }else {
                        console.log(response);
                        toast('An Error happened, please contact the dev admin', 4000);
                    }
                },
                (err: any) => {
                    console.log(err);
                    toast('An Error happened, please contact the dev admin', 4000);
                    this.is_sendingUnavailableEmail = false;
                },
                () => { this.is_sendingUnavailableEmail = false; });
    }
// </editor-fold>


// <editor-fold description="Update to residence page">
    updateCurrentData(data) {
        this.application_data  = data;
        this.application_data_copy  = Object.assign({}, this.application_data );
        this.session_storage.setSessionStorageObject('admin-application', this.application_data);
    }
// </editor-fold>

    getProofExtention(proof) {
        const result = proof.split('.');
        const result_legth = result.length;
        return result[result_legth - 1];
    }
}
