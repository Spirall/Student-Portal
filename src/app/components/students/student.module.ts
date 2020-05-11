import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { ShareModule } from '../../shared/share.module';
import { studentRouting } from './student.routes';

@NgModule({
  declarations: [
      studentRouting.components,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( studentRouting.routes ),
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
})

export class StudentModule { }
