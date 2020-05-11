import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { IAdminUser } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  user_data: IAdminUser;
  user_profile: string;

  constructor(private local_storage: LocalStorageService ) { }

  ngOnInit() {
    this.user_data = this.local_storage.getLocalStorageObject('user_data');
    this.user_profile = (this.user_data.admin_img) ? this.user_data.admin_img :
    (this.user_data.admin_gender === 'M') ? '../../../assets/img/default_profile/male_profile.png' :
    '../../../assets/img/default_profile/woman_profile.png';
  }



}
