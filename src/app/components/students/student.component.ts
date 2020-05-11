import { Component , OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.services';
import { LocalStorageService } from '../../shared/services/local_storage';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StudentComponent implements OnInit {

  constructor(private _route: Router,
              private data_service: DataService,
              private local_storage: LocalStorageService) {
    if ( !this.local_storage.getLocalStorageObject('student_data') ) {
          this._route.navigate(['resident-student'], { preserveQueryParams: false });
    }
  }

  ngOnInit() { }

  onDeactivate() {
      window.scrollTo(0, 0);
  }

  onActivate(event) {
      window.scrollTo(0, 0);
  }

}
