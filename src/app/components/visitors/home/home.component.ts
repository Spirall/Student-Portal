import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { toast } from 'angular2-materialize';
import { DataService } from '../../../shared/services/data.services';
import { IArticle } from '../../../shared/interfaces/other.interface';
import { article_img_upload_server } from '../../../shared/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  article_loading: boolean = true;
  article_src: string = article_img_upload_server;
  articles_data: Array<IArticle>;

  sliderNavActions = new EventEmitter<string|MaterializeAction>();
  sliderOptions: Array<object> = [{fullWidth : true, height: 660 , interval: 10000}];
  sliderImgArr: Array<{img: string, descr: string}> = [
    {'img': './assets/img/sliders_imgs/saratoga_village_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus'},
    {'img': './assets/img/sliders_imgs/saratoga_village2_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus'},
    {'img': './assets/img/sliders_imgs/saratoga_village3_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus'},
    {'img': './assets/img/sliders_imgs/saratoga_village4_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus'},
    {'img': './assets/img/sliders_imgs/hector_pieterson1_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus'},
    {'img': './assets/img/sliders_imgs/hector_pieterson2_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus'},
    {'img': './assets/img/sliders_imgs/hector_pieterson3_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus'},
    {'img': './assets/img/sliders_imgs/hector_pieterson4_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus'},
    {'img': './assets/img/sliders_imgs/apk1.jpg', 'descr': 'APK Campus'},
    {'img': './assets/img/sliders_imgs/apk2.jpg', 'descr': 'APK Campus'}
  ];

  articleSliderNavActions = new EventEmitter<string|MaterializeAction>();
  articleSliderOptions: Array<object> = [{fullWidth : true, height: '350' , interval: 1000000, indicators : false}];


  constructor( private data_service: DataService ) { }

  ngOnInit() {
      this.fetch_homeData_API();
  }


    // <editor-fold descr="fetch residences data from the API server">
    fetch_homeData_API() {
      this.data_service.dataGet('get-pub-stories')
      .subscribe( (response: any) => {
            if (response.req === 'successful') {
              this.articles_data = response.data;
              // console.log(this.articles_data);
            }else {
                console.log(response);
                toast('An Error happened, please contact the admin of the website', 4000);
            }
      },
      (err: any) => {
          this.article_loading = false;
          console.log(err);
          toast('An Error happened, please contact the admin of the website', 4000);
      },
      () => { this.article_loading = false; });
    }
// </editor-fold>

  slide(direction: string ) {
    this.sliderNavActions.emit({action: 'slider' , params: ['pause']});
    this.sliderNavActions.emit({action: 'slider' , params: [direction]});
  }

  storySlide(direction: string ) {
    this.articleSliderNavActions.emit({action: 'slider' , params: ['pause']});
    this.articleSliderNavActions.emit({action: 'slider' , params: [direction]});
  }

}
