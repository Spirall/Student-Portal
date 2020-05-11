import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { ShareModule } from './shared/share.module';
import { MainAuth } from './shared/interceptor/main-auth.interceptor';
import { appRouting } from './app.routes';
import { AppComponent } from './app.component';
import { MainHeaderComponent  } from './components/visitors/main-nav-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    appRouting.components,
    MainHeaderComponent
  ],
  imports: [
    RouterModule.forRoot( appRouting.routes ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterializeModule,
    ShareModule,
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass: MainAuth, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
