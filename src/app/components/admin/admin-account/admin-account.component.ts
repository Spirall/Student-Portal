import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { DataService } from '../../../shared/services/data.services';
import { MaterializeAction, toast } from 'angular2-materialize';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { IAdminUser, INewAdminUser } from '../admin-interfaces/admin.interface';


@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit {

    account_loading: boolean  = true;
    is_updatingMyDetails: boolean  = false;
    is_updatingOtherAdminDetails: boolean  = false;
    is_deliting: boolean  = false;
    add_admin_modalActions = new EventEmitter<string|MaterializeAction>();
    delete_admin_modalActions = new EventEmitter<string|MaterializeAction>();
    editing_admin_modalActions = new EventEmitter<string|MaterializeAction>();
    admins_data: Array<IAdminUser> = [];
    my_data: IAdminUser;
    deleting_adminData: IAdminUser;
    new_admin_form: FormGroup;
    edit_admin_form: FormGroup;
    new_pwd = { new_pwd_1: '', new_pwd_2: '' };
    @ViewChild('Gender') new_admin_gender;

    constructor(
        private data_service: DataService,
        private local_storage: LocalStorageService,
        private fb: FormBuilder ) { }

    ngOnInit() {
        this.my_data = this.local_storage.getLocalStorageObject('user_data');
        this.fetch_adminHomeData();
        this.new_admin_form = this.fb.group({
            admin_email: [ '', Validators.email ],
            admin_level: [ 0,  Validators.required],
            admin_fname: ['',  Validators.required],
            admin_lname: ['',  Validators.required],
            admin_cellno: ['',  Validators.required],
            new_pwd_1: ['',  Validators.required],
            new_pwd_2: ['',  Validators.required],
        });
        this.edit_admin_form = this.fb.group({
            admin_id: [ '', Validators.required ],
            admin_email: [ '', Validators.email ],
            admin_level: [ 0,  Validators.required],
            admin_fname: ['',  Validators.required],
            admin_lname: ['',  Validators.required],
            admin_cellno: ['',  Validators.required],
            admin_gender: ['',  Validators.required],
            new_pwd_1: [''],
            new_pwd_2: [''],
        });
    }
// <editor-fold description="Fetch page data">
    fetch_adminHomeData() {
      const data_sent = { 'admin_id': this.my_data.admin_id };
      this.data_service.dataGet(`admin/get-admins-data`, data_sent)
        .subscribe( (response: IAPIResponse1) => {
                if (response.req === 'found') {
                    // console.log(response.data);
                    this.updateCurrentData(response.data);
                }else {
                    console.error(response);
                    toast('An Error happened, please contact the dev admin', 4000);
                }
        },
        (err: any) => {
            this.account_loading = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.account_loading = false; });
    }
// </editor-fold>

// <editor-fold description="Other Admin Modal">
    saveMyDetails(my_data, new_pwd) {
        if ( my_data.admin_fname && my_data.admin_lname
            && my_data.admin_email && my_data.admin_cellno ) {
            if ( new_pwd.new_pwd_1.trim() === new_pwd.new_pwd_2.trim() ) {
                this.is_updatingMyDetails = true;
                const data_sent = {
                    'admin_id': this.my_data.admin_id,
                    'fname': my_data.admin_fname,
                    'lname': my_data.admin_lname,
                    'gender': my_data.admin_gender,
                    'email': my_data.admin_email,
                    'pwd': new_pwd.new_pwd_1,
                    'cellNo': my_data.admin_cellno
                };
                this.data_service.dataGet(`admin/update-my-admin-data`, data_sent)
                .subscribe( (response: IAPIResponse1) => {
                        if (response.req === 'found') {
                            this.updateCurrentData(response.data);
                            toast(`The update was done with success`, 4000, 'rounded');
                            new_pwd.new_pwd_1 = '';
                            new_pwd.new_pwd_2 = '';
                        }else {
                            console.error(response);
                            toast('An Error happened, please contact the dev admin', 4000);
                        }
                },
                (err: any) => {
                    this.is_updatingMyDetails = false;
                    console.log(err);
                    toast('An Error happened, please contact the dev admin', 4000);
                },
                () => { this.is_updatingMyDetails = false; });
            }else {
                toast('Please make sure that both password match', 4000);
            }
        }else {
            toast('Please make sure all required fields are valid', 4000);
        }
    }
// </editor-fold>

// <editor-fold description="Other Admin Modal">
    openEditAdminModal(admin_data) {
        this.edit_admin_form.patchValue(admin_data);
        this.editing_admin_modalActions.emit({action: 'modal' , params: ['open']});
    }
    submitEditOtherAdmin(values, is_valid) {
        if (is_valid) {
            if (values.new_pwd_1 === values.new_pwd_2) {
                this.is_updatingOtherAdminDetails = true;
                const data_sent = {
                    'admin_id': this.my_data.admin_id,
                    'adminToUpdate_id': values.admin_id,
                    'fname': values.admin_fname,
                    'lname': values.admin_lname,
                    'gender': values.admin_gender,
                    'email': values.admin_email,
                    'pwd': values.new_pwd_1,
                    'cellNo': values.admin_cellno,
                    'admin_level': values.admin_level,
                };
                this.data_service.dataGet(`admin/update-other-admins-data`, data_sent)
                .subscribe( (response: IAPIResponse1) => {
                        if (response.req === 'found') {
                            this.updateCurrentData(response.data);
                            toast(`Administrator ${values.admin_fname} was updated with success`, 4000, 'rounded');
                            this.editing_admin_modalActions.emit({action: 'modal' , params: ['close']});
                        }else {
                            console.error(response);
                            toast('An Error happened, please contact the dev admin', 4000);
                        }
                    },
                    (err: any) => {
                        this.is_updatingOtherAdminDetails = false;
                        console.log(err);
                        toast('An Error happened, please contact the dev admin', 4000);
                    },
                    () => { this.is_updatingOtherAdminDetails = false; });
            }else {
                toast('Please make sure that both password match', 4000);
            }
        }else {
            toast('Please make sure all the fields are valid', 4000);
        }
    }
// </editor-fold>

// <editor-fold description="Delete Other Admin Modal">
    openDeleteAdmin(admin_data) {
        this.deleting_adminData = admin_data;
        this.delete_admin_modalActions.emit({action: 'modal' , params: ['open']});
    }
    deleteAdminData(admin_data) {
        this.is_deliting = true;
        const data_sent = { 'admin_id': this.my_data.admin_id, 'adminToDelete_id': admin_data.admin_id };
        this.data_service.dataGet('admin/delete-admin', data_sent)
        .subscribe( (response: IAPIResponse1) => {
            if (response.req === 'found') {
                // console.log(response.data);
                this.updateCurrentData(response.data);
                toast(`Administrator ${admin_data.admin_fname} was deleted with success`, 4000, 'rounded');
                this.delete_admin_modalActions.emit({action: 'modal' , params: ['close']});
            }else {
                console.error(response);
                toast('An Error happened, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.is_deliting = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.is_deliting = false; });
    }
// </editor-fold>

// <editor-fold description="Add Other Admin Modal">
    openAddOtherAdminModal() {
      this.add_admin_modalActions.emit({action: 'modal' , params: ['open']});
      this.new_admin_form.reset({'admin_level': '0' });
    }
    submitNewOtherAdmin(values, is_valid) {
        if (is_valid) {
            if (values.new_pwd_1 === values.new_pwd_2) {
                this.is_updatingOtherAdminDetails = true;
                const new_admin_gender = this.new_admin_gender.nativeElement.value;
                const data_sent = {
                    'admin_id': this.my_data.admin_id,
                    'fname': values.admin_fname,
                    'lname': values.admin_lname,
                    'gender': new_admin_gender,
                    'email': values.admin_email,
                    'pwd': values.new_pwd_1,
                    'cellNo': values.admin_cellno,
                    'admin_level': values.admin_level,
                };
                this.data_service.dataGet(`admin/add-admins-data`, data_sent)
                .subscribe( (response: IAPIResponse1) => {
                    if (response.req === 'found') {
                        this.updateCurrentData(response.data);
                        toast(`Administrator ${values.admin_fname} was added with success`, 4000, 'rounded');
                        this.add_admin_modalActions.emit({action: 'modal' , params: ['close']});
                    }else {
                        console.error(response);
                        toast('An Error happened, please contact the dev admin', 4000);
                    }
                },
                (err: any) => {
                    this.is_updatingOtherAdminDetails = false;
                    console.log(err);
                    toast('An Error happened, please contact the dev admin', 4000);
                },
                () => { this.is_updatingOtherAdminDetails = false; });
            }else {
                toast('Please make sure that both password match', 4000);
            }
        }else {
            toast('Please make sure all the fields are valid', 4000);
        }
    }
// </editor-fold>

// <editor-fold description="Update to message page">
    updateCurrentData(data) {
      this.admins_data = data.other_admins;
      this.my_data = data.my_details;
    }
// </editor-fold>
}
