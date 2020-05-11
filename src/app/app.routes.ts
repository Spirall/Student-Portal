import { RouterModule, Routes } from '@angular/router';
import { IRouting } from './shared/interfaces/routes.interface';

import { HomeComponent } from './components/visitors/home/home.component';
import { AccommodationComponent } from './components/visitors/accommodations/accommodation.component';
import { SingleAccommodationComponent } from './components/visitors/accommodations/single-accommodation/single-accommodation.component';
import { ResidentStudentComponent } from './components/visitors/resident-student/resident-student.component';
import { ContactUsComponent } from './components/visitors/contact-us/contact-us.component';
import { ApplyNowComponent } from './components/visitors/apply-now/apply-now.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accommodations',
    children : [
      { path: '', component: AccommodationComponent},
      { path: ':res_name', component: SingleAccommodationComponent}
    ]
  },
  { path: 'resident-student', component: ResidentStudentComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'apply-now', component: ApplyNowComponent },
  { path: 'apply-now/:res_no/:room_type', component: ApplyNowComponent },
  { path: 'ujres-admin', loadChildren : './components/admin/admin.module#AdminModule' },
  { path: 'ujres-student', loadChildren : './components/students/student.module#StudentModule' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const appRouting: any = {
  routes: routes,
  components: [
    HomeComponent,
    AccommodationComponent,
    SingleAccommodationComponent,
    ResidentStudentComponent,
    ContactUsComponent,
    ApplyNowComponent ]
};
