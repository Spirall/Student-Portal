import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { IAdminUser } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  user_data: IAdminUser;
  user_profile: string;
  sidenavActions = new EventEmitter<string|MaterializeAction>();
  sidenavParams = [{edge: 'left', draggable: true}];

  constructor(private local_storage: LocalStorageService) { }

  ngOnInit() {
    this.user_data = this.local_storage.getLocalStorageObject('user_data');
    this.user_profile = (this.user_data.admin_img) ? this.user_data.admin_img :
      (this.user_data.admin_gender === 'M') ? '../../../assets/img/default_profile/male_profile.png' :
        '../../../assets/img/default_profile/woman_profile.png';
  }

}
