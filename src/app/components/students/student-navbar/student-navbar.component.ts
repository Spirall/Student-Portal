import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { IStudentData } from '../student-interfaces/student.interface';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {
  student_profile: string;
  student_data: IStudentData;
  st_fullname: string;
  sidenavActions = new EventEmitter<string|MaterializeAction>();
  sidenavParams = [{edge: 'left', draggable: true}];

  constructor(private local_storage: LocalStorageService) { }

  ngOnInit() {
    this.student_data = this.local_storage.getLocalStorageObject('student_data');
    if (this.student_data) {
        this.student_profile = (this.student_data.appl_data.app_stGender === 'M') ?
            '../../../assets/img/default_profile/male_profile.png' :
            '../../../assets/img/default_profile/woman_profile.png';
        this.st_fullname = this.student_data.appl_data.app_stFname + ' ' + this.student_data.appl_data.app_stLname;
    }
  }
}
