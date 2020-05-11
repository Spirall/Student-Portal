import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { ShareModule } from '../../shared/share.module';
import { adminRouting } from './admin.routes';
import { SideMenuComponent } from './admin-side-menu/side-menu.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';




@NgModule({
  declarations: [
    adminRouting.components,
    SideMenuComponent,
    AdminNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( adminRouting.routes ),
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
})

export class AdminModule { }
