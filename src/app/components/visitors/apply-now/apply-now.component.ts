import { Component, OnInit, ViewEncapsulation, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/services/data.services';
import { IFullAddress } from '../../../shared/directives/google_autoComplete';
import { Base64Service } from '../../../shared/services/base64.service';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { IResData } from '../../../shared/interfaces/residence.interface';
import { GroupResidence } from '../../../shared/services/res.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplyNowComponent implements OnInit,  AfterViewInit {
// <editor-fold description="Variable Declarations">
  application_form: FormGroup;
  application_modalActions = new EventEmitter<MaterializeAction>();
  @ViewChild('st_year') st_year;
  @ViewChild('room_type') room_type;
  @ViewChild('res_id') res_id;
  @ViewChild('st_proof_of_Res') st_proof_of_Res;
  @ViewChild('st_proof_of_Res_copy') st_proof_of_Res_copy;

  @ViewChild('select_disable_1') select_disable_1;
  @ViewChild('select_disable_2') select_disable_2;
  @ViewChild('select_disable_3') select_disable_3;

  full_addressObj: IFullAddress;
  residences_data: IResData;
  residences_loading: boolean = true;
  grouped_res: Object;
  is_submitting: boolean = false;
// </editor-fold>

  constructor (
    private _activated_route: ActivatedRoute,
    private data_service: DataService,
    private fb: FormBuilder,
    private base64_service: Base64Service,
    private session_storage: SectionStorageService,
    private grouped_res_service: GroupResidence) {}

  ngOnInit() {
    this.application_form = this.fb.group({
      'fname':        [ '', Validators.required ],
      'lname':        [ '', Validators.required ],
      'id_passport':  [ '', Validators.required ],
      'st_no':        [ '', Validators.required ],
      'st_cel':       [ '', Validators.required ],
      'st_email':     [ '', Validators.email ],
      'st_year':      [ '', Validators.required ],
      'st_gender':    [ '', Validators.required ],
      'res_name':     ['',  Validators.required],
      'room_type':    ['',  Validators.required],
      'st_addr':      ['',  Validators.required]
    });
    this.fetch_ResidencesDataFrom_LocalStorage();
    if (!this._activated_route.snapshot.params['room_type']) {
      this.fetch_ResidencesDataFrom_API();
    }
  }

  ngAfterViewInit() {
    this.checkResidenceParams();
  }

// <editor-fold description="fetch residences data from the API server">
  fetch_ResidencesDataFrom_LocalStorage() {
    const res_local = this.session_storage.getSessionStorageObject('residences_data');
    if ( res_local ) {
      this.updateCurrentData(res_local);
    }
  }
// </editor-fold>

// <editor-fold description="fetch residences data from the API server">
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

// <editor-fold description="On Student year has changed">
  stYearHasChanged( year_value ) {
      year_value = parseInt(year_value, 10);
      if (year_value === 1 ) {
        this.select_disable_2.nativeElement.disabled = true;
        this.select_disable_3.nativeElement.disabled = true;
      }else if (year_value === 2) {
        this.select_disable_2.nativeElement.disabled = false;
        this.select_disable_3.nativeElement.disabled = true;
      }else if (year_value === 3) {
        this.select_disable_2.nativeElement.disabled = false;
        this.select_disable_3.nativeElement.disabled = true;
      }else if (year_value === 4) {
        this.select_disable_2.nativeElement.disabled = false;
        this.select_disable_3.nativeElement.disabled = false;
      }else if (year_value === 5) {
        this.select_disable_2.nativeElement.disabled = false;
        this.select_disable_3.nativeElement.disabled = false;
      }
  }
// </editor-fold>

// <editor-fold description="On Student gender changed">
  genderChanged( gender ) {
    if (gender) {
      this.updateCurrentData(this.residences_data);
      // if (!this._activated_route.snapshot.params['room_type']) {
        this.grouped_res = this.grouped_res_service.updateGenderResidence(this.grouped_res, gender);
      // }
    }
  }
// </editor-fold>

// <editor-fold description="On Event Full Address AutoComplete">
  callFullAddress(event) {
    this.full_addressObj = event;
    this.application_form.controls['st_addr'].setValue(
      this.full_addressObj.street_number + ' '
      + this.full_addressObj.route   + ' '
      + this.full_addressObj.sublocality_level_1   + ' '
      + this.full_addressObj.locality   + ' '
      + this.full_addressObj.administrative_area_level_1   + ' '
      + this.full_addressObj.postal_code   + ' '
      + this.full_addressObj.country
    );
  }
// </editor-fold>

// <editor-fold description="On Submit Application">
  async onSubmitApplication(values, _form) {
    this.session_storage.setSessionStorageObject('my_data', values);
    const new_st_proof = this.st_proof_of_Res.nativeElement;
    if ( this.validate_input(_form, new_st_proof.files[0]) ) {

      this.is_submitting = true;
      const st_proof = (new_st_proof.files[0]) ? await this.base64_service.ConvertToBase64(new_st_proof.files[0]) : null;
      values['proof_reg'] = st_proof;
      values['st_addr_2'] = this.full_addressObj;

      this.data_service.dataPost('student-application', values)
        .subscribe( ( response: any ) => {
          if (response.req === 'successful') {
            // <editor-fold description="Upload proof of registration file to apache server">
             const data_sent = {
                'request': 'upload', 'sub-request': 'proof-registration',
                'base64-file': values['proof_reg'], 'st_no': values['st_no']
              };
              this.data_service.dataPHPFilePost( data_sent )
                  .subscribe( ( response_2: any ) => {
                      if (response_2.req === 'successful') {
                          // console.log(response_2);
                          new_st_proof.files = null;
                          this.st_proof_of_Res_copy.nativeElement.value = null;
                          this.application_modalActions.emit({ action: 'modal' , params: ['open'] });
                          this.application_form.reset();
                      }else {
                          console.log(response_2);
                          toast('An Error happened, please contact the dev admin', 4000);
                          this.is_submitting = false;
                      }
                  },
                  (err: any) => {
                      console.log(err);
                      toast('An Error happened, please contact the dev admin', 4000);
                      this.is_submitting = false;
                 },
                () => { this.is_submitting = false; });
            // </editor-fold>
          }else {
            console.log(response);
            toast('An Error happened, please contact the dev admin', 4000);
          }
        },
        (err: any) => {
          console.log(err);
          toast('An Error happened, please contact the dev admin', 4000);
          this.is_submitting = false;
        },
        () => { /*this.is_submitting = false;*/ });
    }
  }
// </editor-fold>

// <editor-fold description="Validate Input">
  validate_input(_form, proof_reg): boolean {
    let is_valid: boolean = true;
    const controls = _form.controls;
    if (controls.fname.invalid) {
      toast('First name cannot be empty or less than 3 character', 3000);
      is_valid = false;
    }else if (controls.lname.invalid) {
      toast('Last Name cannot be empty or less than 3 character', 3000);
      is_valid = false;
    }else if (controls.id_passport.invalid) {
      toast('ID/Passport should be between 9 and 20 characters', 3000);
      is_valid = false;
    }else if (controls.st_no.invalid) {
      toast('Your student number should be between 6 to 10 numeric characters', 3000);
      is_valid = false;
    }else if (controls.st_cel.invalid) {
      toast('Cell number should be between 10 to 15 numeric characters', 3000);
      is_valid = false;
    }else if (controls.st_email.invalid) {
      toast('Email address is incorrect', 3000);
      is_valid = false;
    }else if (controls.st_gender.invalid) {
      toast('Your gender cannot be empty', 3000);
      is_valid = false;
    }else if (controls.st_year.invalid) {
      toast('Your University year cannot be empty', 3000);
      is_valid = false;
    }else if (controls.room_type.invalid) {
      toast('Room type cannot be empty, or make sure you have selected the correct year', 3000);
      is_valid = false;
    }else if (controls.res_name.invalid) {
      toast('Residence name cannot be empty', 3000);
      is_valid = false;
    }else if (controls.st_addr.invalid) {
      toast('Your address cannot be empty', 3000);
      is_valid = false;
    }else if (!proof_reg) {
      toast('Please attach your proof of registration', 3000);
      is_valid = false;
    }
    return is_valid;
  }
// </editor-fold>

// <editor-fold description="Grouped Residence to campus">
  group_residence(res) {
    this.grouped_res = this.grouped_res_service.groupResidence(res);
  }
// </editor-fold>

// <editor-fold description="Update residence page data">
  updateCurrentData(data) {
    this.residences_data = data;
    this.session_storage.setSessionStorageObject('residences_data', this.residences_data);
    this.residences_loading = false;
    this.group_residence(this.residences_data);
  }
// </editor-fold>

// <editor-fold description="Check application page parameters">
  checkResidenceParams() {
    const res_no = this._activated_route.snapshot.params['res_no'];
    const room_type = this._activated_route.snapshot.params['room_type'];
    if (res_no && room_type && this.res_id) {
      this.res_id.nativeElement.value = res_no;
      this.room_type.nativeElement.value = room_type;
    }
  }
// </editor-fold>
}
