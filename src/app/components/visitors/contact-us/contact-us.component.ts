import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/services/data.services';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

// <editor-fold description="Variable Declarations">
    contact_form: FormGroup;
    is_submitting: boolean = false;
    contact_modalActions = new EventEmitter<MaterializeAction>();
    contact_email: string;
//  </editor-fold>
  constructor(
      private data_service: DataService,
      private fb: FormBuilder ) { }

  ngOnInit() {
      this.contact_form = this.fb.group({
          'email_addr':     [ '', Validators.email ],
          'full_name':      [ '', Validators.required ],
          'msg':    [ '', Validators.required ]
      });
  }

// <editor-fold description="On submit contact us form">
  onSubmitContactFrm(values, _form) {
    if (_form.valid) {
        this.is_submitting = true;
        this.data_service.dataPost( 'contact-us', values )
        .subscribe( ( response: any ) => {
            if (response.req === 'successful') {
              this.contact_email = values.email_addr;
              this.contact_modalActions.emit({ action: 'modal' , params: ['open'] });
                this.contact_form.reset();
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
        () => { this.is_submitting = false; });
    }else {
        toast('Empty value are not allowed', 4000);
    }
  }
//  </editor-fold>
}
