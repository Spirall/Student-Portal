import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeAction, toast } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/services/data.services';
import { LocalStorageService } from '../../../shared/services/local_storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalAction= new EventEmitter<string|MaterializeAction>();
  admin_form: FormGroup;
  login_loading: boolean = false;
  forgotPwd_loading: boolean = false;
  is_logout: string;
  // modalParams: Array<Object> = [];

  constructor(private _route: Router,
              private act_route: ActivatedRoute,
              private data_service: DataService,
              private fb: FormBuilder,
              private local_storage: LocalStorageService) {}

  ngOnInit() {
    this.admin_form = this.fb.group({
      'admin_email': [ '', Validators.email ],
      'admin_pwd': ['',  Validators.required]
    });
    this.checkIfLogOut();
  }

// <editor-fold Description="On submit login ">
  onSubmitLogin( values: IAdminLogIn, is_valid: boolean ) {
    if (is_valid) {
      this.login_loading = true;
      const admin_email: string = values.admin_email;
      const admin_pwd: string = values.admin_pwd;

      this.data_service.dataPost(`admin/admin-login/${admin_email}`, {'admin_pwd' : admin_pwd} )
      .subscribe( ( response: any ) => {
          this.processAdminLogin(response);
        },
        ( err: any ) => {
          console.log(err);
          toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.login_loading = false; });

    }else {
      toast('Login fields cannot be empty', 4000);
    }
  }
  processAdminLogin(response: any) {
      if ( response.req === 'found' ) {
        this.local_storage.setLocalStorageObject('user_data', response.data);
        this._route.navigate(['ujres-admin'], { preserveQueryParams: false });
      }else if ( response.req === 'not_found' ) {
        toast('Incorrent Admin email or Password', 5000);
      }else {
        console.error(response);
        toast('An Error happened, please contact the dev admin', 4000);
      }
  }
// </editor-fold>

// <editor-fold Description="On Forget Password ">
  openForgetPasswordModal() {
      this.modalAction.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
      this.modalAction.emit({action: 'modal' , params: ['close']});
  }
  onSubmitForgetPwd(email) {
    const forgot_email = email.value;
    if (forgot_email) {
        this.forgotPwd_loading = true;
        this.data_service.dataGet(`admin/reset-pwd`, {'admin_email' : forgot_email} )
        .subscribe( ( response: any ) => {
            if (response.req === 'successful') {
                toast('Your new temporary password has been sent to your email', 4000, 'rounded');
                this.closeModal();
            }else if (response.req === 'not found') {
                toast('This email address was not found', 4000);
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
// </editor-fold>

// <editor-fold Description="Delete login cookie ">
  private checkIfLogOut() {
    this.is_logout = this.act_route.snapshot.params['out'];
    if (this.is_logout) { this.local_storage.deleteAllLocalStorage(); }
  }
// </editor-fold>
}

export interface IAdminLogIn  {
  admin_email:  string;
  admin_pwd: string;
}
