import { Routes } from '@angular/router';

import { StudentComponent } from './student.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentBusComponent } from './student-bus/student-bus.component';
import { StudentArticlesComponent } from './student-articles/student-articles.component';
import { StudentChatComponent } from './student-chat/student-chat.component';
import { StudentIssuesComponent } from './student-issues/student-issues.component';


const routes: Routes = [
  { path: '', component: StudentComponent,
    children: [
        {
            path: '',
            component: StudentHomeComponent,
        },
        {
            path: 'issues',
            component: StudentIssuesComponent,
        },
        {
            path: 'track-bus',
            component: StudentBusComponent,
        },
        {
            path: 'chat-room',
            component: StudentChatComponent,
        },
        {
            path: 'articles-news',
            component: StudentArticlesComponent,
        },
        {   path: '**',
            pathMatch: 'full',
            redirectTo: '',
        },
    ]
  }
];

export const studentRouting: any = {
  routes: routes,
  components: [
      StudentComponent,
      StudentNavbarComponent,
      StudentHomeComponent,
      StudentBusComponent,
      StudentArticlesComponent,
      StudentChatComponent,
      StudentIssuesComponent,
  ]
};
