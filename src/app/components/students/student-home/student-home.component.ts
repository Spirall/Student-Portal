import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { MaterializeAction, toast } from 'angular2-materialize';
import { LocationService } from '../../../shared/services/location.services';
import { DataService } from '../../../shared/services/data.services';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subject } from 'rxjs/Subject';
import { IUserLocation } from '../../../shared/interfaces/other.interface';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit, OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();
    is_downloading: boolean = false;
    emergency_loading: boolean = false;
    user_data: any;
    emergency_timer: number = 0;
    emergency_timer_observable;
    emergency_modalActions = new EventEmitter<string|MaterializeAction>();

    constructor(
      private data_service: DataService,
      private local_storage: LocalStorageService,
      private location_service: LocationService ) { }

    ngOnInit() {
        const student_user = this.local_storage.getLocalStorageObject('student_data');
        console.log(student_user);
        this.user_data = {
          'first_name': student_user.appl_data.app_stFname,
          'last_name': student_user.appl_data.app_stLname,
          'st_no': student_user.appl_data.app_stNo,
          'st_id': student_user.appl_data.app_stID,
          'acc_no': student_user.appl_data.app_resID,
          'cellno': student_user.appl_data.app_stCellno,
          'email': student_user.appl_data.app_stEmail,
          'room_id': student_user.st_data.room_id,
          'rs_start_date': student_user.st_data.rs_start_date,
          'st_lat':  -26.185960,
          'st_long':  28.005071
        };
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.data_service.disconnectSocket();
    }

// <editor-fold description="Download Proof of residence">
    downloadProofReg() {
        this.is_downloading = true;
        this.data_service.dataGet('student/download-proof-res', this.user_data)
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

    openEmergencyModal() {
        this.emergency_modalActions.emit({action: 'modal' , params: ['open']});
        this.emergency_timer = 5;
        this.emergency_timer_observable = IntervalObservable.create(1000)
        .takeUntil(this.ngUnsubscribe)
        .subscribe( n => {
            this.emergency_timer--;
            if (this.emergency_timer === 0) {
                this.sendEmergency();
                this.emergency_timer_observable.unsubscribe();
            }
        });
    }
    sendEmergency() {
        this.getStudentLocation()
        .then( (coord: IUserLocation) => {
            this.user_data['st_lat'] = coord.latitude;
            this.user_data['st_long'] = coord.longitude;
            this.sendEmergencyToApi();
            this.onEmergencyAcknowledge();
        })
        .catch( ( error ) => {
            this.sendEmergencyToApi();
            this.onEmergencyAcknowledge();
        });
    }
    sendEmergencyToApi() {
        this.data_service.connectSocket();
        this.emergency_loading = true;
        this.data_service.sendSocketData('student_emergency', this.user_data);
        this.emergency_timer_observable.unsubscribe();
    }
    onEmergencyAcknowledge() {
     const emerg_acknow_obs =  this.data_service.getSocketData('emergency_acknowledge')
        .takeUntil(this.ngUnsubscribe)
        .subscribe( ( value ) => {
                this.emergency_modalActions.emit({action: 'modal' , params: ['close']});
                this.emergency_loading = false;
                toast('Your emergency has been acknowledge, you will be contacted shortly', 3000, 'rounded');
                emerg_acknow_obs.unsubscribe();
        },
        (err: any) => {
            console.log(err);
            emerg_acknow_obs.unsubscribe();
        },
        () => { });
    }
    cancelEmergency() {
        this.emergency_timer_observable.unsubscribe();
        this.emergency_modalActions.emit({action: 'modal' , params: ['close']});
    }

    getStudentLocation() {
        return new Promise (
            (resolve, reject) => {
                this.location_service.getUserLocation()
                .then((coordinates: IUserLocation) => {
                    resolve(coordinates);
                })
                .catch((error) => {
                    reject(error);
                    // toast('Could not get not get your current location, used of http instead of https', 4000);
                });
        });
    }
}
