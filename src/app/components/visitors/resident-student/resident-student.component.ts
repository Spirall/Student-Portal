import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.services';
import { LocalStorageService } from '../../../shared/services/local_storage';

@Component({
  selector: 'app-resident-student',
  templateUrl: './resident-student.component.html',
  styleUrls: ['./resident-student.component.scss']
})
export class ResidentStudentComponent implements OnInit {
  is_loggin: boolean = false;
  forgotPwd_loading: boolean = false;
  modalAction= new EventEmitter<string|MaterializeAction>();
  modalParams = [];

  constructor(
      private _route: Router,
      private data_service: DataService,
      private local_storage: LocalStorageService
  ) { }

  ngOnInit() {
      this.local_storage.deleteLocalStorage('student_data');
  }

// <editor-fold Description="On Forgot Pwd">
  submitLogin(username, pwd) {
    const st_no = username.value;
    const st_pwd = pwd.value;
    if (st_no && st_pwd) {
        this.is_loggin = true;
        const data_sent = {'st_no': st_no, 'st_pwd': st_pwd};
        this.data_service.dataPost('student/student-login', data_sent )
        .subscribe( ( response: any ) => {
                this.processAdminLogin(response);
        },
        ( err: any ) => {
            this.is_loggin = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.is_loggin = false; });
    }else {
        toast('Login fields cannot be empty', 4000);
    }
  }
  processAdminLogin(response: any) {
      if ( response.req === 'found' ) {
          // console.log(response.data);
          this.local_storage.setLocalStorageObject('student_data', response.data);
          this._route.navigate(['ujres-student'], { preserveQueryParams: false });
      }else if ( response.req === 'not_found' ) {
          toast('Incorrent student number or password', 5000);
      }else {
          console.error(response);
          toast('An Error happened, please contact the dev admin', 4000);
      }
  }
// <editor-fold>

// <editor-fold Description="On Forgot Pwd">
  openForgetPasswordModal() {
    this.modalAction.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalAction.emit({action: 'modal' , params: ['close']});
  }
  onSubmitForgetPwd(st_no) {
        const forgot_st_no = st_no.value;
        if (forgot_st_no) {
            this.forgotPwd_loading = true;
            this.data_service.dataGet(`student/reset-pwd`, {'student_no' : forgot_st_no} )
                .subscribe( ( response: any ) => {
                        if (response.req === 'successful') {
                            toast('Your new temporary password has been sent to your email', 4000, 'rounded');
                            this.closeModal();
                        }else if (response.req === 'not found') {
                            toast('This student number was not found', 4000);
                        }else {
                            toast('An Error happened, please contact the dev admin', 4000);
                        }
                    },
                    ( err: any ) => {
                        this.forgotPwd_loading = false;
                        console.log(err);
                        toast('An Error happened, please contact the dev admin', 4000);
                    },
                    () => {  this.forgotPwd_loading = false; });
        }else {
            toast('Empty email not allowed', 4000);
        }
}
// <editor-fold>
}
