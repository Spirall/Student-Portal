import { Component , OnInit, OnDestroy, EventEmitter, AfterViewChecked } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.services';
import { LocalStorageService } from '../../shared/services/local_storage';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit, OnDestroy, AfterViewChecked {
    ngUnsubscribe: Subject<void> = new Subject<void>();
    student_data: IStudentEmerData;
    emergency_modalActions = new EventEmitter<string|MaterializeAction>();
    alarm_thing;

    constructor(private _route: Router,
                private data_service: DataService,
                private local_storage: LocalStorageService) {

        if ( !this.local_storage.getLocalStorageObject('user_data') ) {
          this._route.navigate(['ujres-admin/login'], { preserveQueryParams: false });
        }
    }

    ngOnInit() {
      this.data_service.connectSocket();
        this.onStudentEmergency();
    }
    ngAfterViewChecked () { }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.data_service.disconnectSocket();
        this.stopAudio();
    }

// *** <edit-fold description='On emergency event'>
    checkIfPreviousEmergency() {
        // const emergency_data = this.local_storage.getLocalStorageObject('user_emergency');
        // if ( emergency_data ) {
        //     this.student_data = emergency_data;
        //     console.log(emergency_data);
        //     this.showEmergencyModal(emergency_data);
        // }
    }
// *** </edit-fold >

// *** <edit-fold description='On emergency event'>
    onStudentEmergency() {
        this.data_service.getSocketData('new_student_emergency')
        .takeUntil(this.ngUnsubscribe)
        .subscribe( ( value: IStudentEmerData ) => {
            this.showEmergencyModal(value);
        },
        (err: any) => {
            console.log(err);
        },
        () => { });
    }
// *** </edit-fold >

// *** <edit-fold description='Show emergency Modal'>
    showEmergencyModal(value: IStudentEmerData) {
        this.student_data = value;
        this.emergency_modalActions.emit({action: 'modal' , params: ['open']});
        this.local_storage.setLocalStorageObject('user_emergency', value);
        this.playAudio();
    }
// *** </edit-fold >

// *** <edit-fold description='acknowledge emergency'>
    isProcessed( st_data ) {
        this.data_service.sendSocketData('st_emergency_acknowledge', {'acknowledge': true } );
        this.emergency_modalActions.emit({action: 'modal' , params: ['close']});
        this.stopAudio();
        toast('The report has been sent to the student', 3000, 'rounded');
        this.local_storage.deleteLocalStorage('user_emergency');
    }
// *** </edit-fold >

// *** <edit-fold description='Play emergency audio'>
    playAudio() {
      this.alarm_thing = new Audio('../../../assets/audio/alarm_mp3.mp3');
        this.alarm_thing.play();
        this.alarm_thing.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    stopAudio() {
        if (this.alarm_thing) {
            this.alarm_thing.pause();
            this.alarm_thing.currentTime = 0;
        }
    }
// *** </edit-fold >

    onDeactivate() {
        window.scrollTo(0, 0);
    }
    onActivate() {
        window.scrollTo(0, 0);
    }
}


export interface IStudentEmerData {
    first_name: string;
    last_name:  string;
    st_no: number;
    st_id:  string;
    acc_no: number;
    acc_name: string;
    cellno: string;
    email: string;
    room_id: number;
    room_no: number;
    rs_start_date: Date;
    st_lat: number;
    st_long: number;
}
