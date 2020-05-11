import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './admin-login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginHeaderComponent } from './admin-login/login-header/login-header.component';
import { AdminResidencesComponent } from './admin-residences/admin-residences.component';
import { AdminSingleResComponent } from './admin-residences/admin-single-res/admin-single-res.component';
import { AdminApplicationsComponent } from './admin-applications/admin-applications.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminSingleArticleComponent } from './admin-articles/admin-single-article/admin-single-article.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminBusesComponent } from './admin-buses/admin-buses.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminIssuesComponent } from './admin-issues/admin-issues.component';


const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'residences',
        children: [
          { path: '', component: AdminResidencesComponent },
          { path: ':res_name', component: AdminSingleResComponent }
        ]
      },
      {
        path: 'applications',
        children: [
          { path: '', component: AdminApplicationsComponent }
        ]
      },
      {
        path: 'articles',
        children: [
            {path: '', component: AdminArticlesComponent},
            {path: ':article_name', component: AdminSingleArticleComponent}
        ]
      },
      {
        path: 'messages',
        component: AdminMessagesComponent,
        children: [ {path: ':msg_id', component: AdminHomeComponent} ]
      },
      {
        path: 'buses',
        component: AdminBusesComponent
      },
      {
        path: 'issues',
        component: AdminIssuesComponent,
        children: [ {path: ':issue_no', component: AdminHomeComponent} ]
      },
      {
        path: 'account',
        component: AdminAccountComponent,
      }
    ]
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: ':out',
        component: LoginComponent,
      }
    ]
  }
];

export const adminRouting: any = {
  routes: routes,
  components: [
    AdminComponent,
    LoginComponent,
    AdminHomeComponent,
    LoginHeaderComponent,
    AdminResidencesComponent,
    AdminSingleResComponent,
    AdminApplicationsComponent,
    AdminArticlesComponent,
    AdminSingleArticleComponent,
    AdminMessagesComponent,
    AdminBusesComponent,
    AdminIssuesComponent,
    AdminAccountComponent
  ]
};
