import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { SearchFilterPipe } from './pipes/search-filter.pipes';
import { DataService } from './services/data.services';
import { LocalStorageService } from './services/local_storage';
import { SectionStorageService } from './services/session_storage';
import { UrlService } from './services/url_encode';
import { Base64Service } from './services/base64.service';
import { GroupResidence } from './services/res.service';
import { LocationService } from './services/location.services';
import { GoogleAutoCompleteDirective } from './directives/google_autoComplete';

import { PreloaderCircleComponent } from './preloaders/preloader-circle/preloader.component';
import { PreloaderIntermediateComponent } from './preloaders/preloader-indeterminate/preloader.component';


@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBARqJNCwiLgUSw3R0leTAd2RxVEEQBZU',
      libraries: ['places']
    }),
    CKEditorModule
  ],
  declarations: [
      SearchFilterPipe, PreloaderCircleComponent, PreloaderIntermediateComponent, GoogleAutoCompleteDirective
  ],
  exports: [
    AgmCoreModule,
    NgxChartsModule,
    SearchFilterPipe,
    PreloaderCircleComponent,
    PreloaderIntermediateComponent,
    GoogleAutoCompleteDirective,
    CKEditorModule
  ],
  providers: [ DataService,  LocalStorageService, SectionStorageService, UrlService, Base64Service, GroupResidence, LocationService ]
})
export class ShareModule { }
