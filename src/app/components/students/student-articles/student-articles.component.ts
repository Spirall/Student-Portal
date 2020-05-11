import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../../shared/services/data.services';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { MaterializeAction, toast } from 'angular2-materialize';
import { IArticle } from '../../../shared/interfaces/other.interface';
import { article_img_upload_server } from '../../../shared/constants/constants';

@Component({
  selector: 'app-student-articles',
  templateUrl: './student-articles.component.html',
  styleUrls: ['./student-articles.component.scss']
})
export class StudentArticlesComponent implements OnInit {
  article_loading: boolean = true;
  search_art: string;
  article_data: Array<IArticle>;
  img_src: string = article_img_upload_server;
  read_article_modalActions = new EventEmitter<string|MaterializeAction>();
  article_read: IArticle;


  constructor(private data_service: DataService,
              private session_storage: SectionStorageService) { }

  ngOnInit() {
      this.fetch_articleData();
  }

// <editor-fold description="Fetch page data">
    fetch_articleData() {
        this.data_service.dataGet(`admin/get-article`)
        .subscribe((response) => {
                if (response.req === 'found') {
                    this.article_data = response.data;
                    // this.updateCurrentData(response.data);
                }else {
                    console.error(response);
                    toast('An Error happened, please contact the dev admin', 4000);
                }
        },
        (err: any) => {
            this.article_loading = false;
            console.log(err);
            toast('An Error happened, please contact the dev admin', 4000);
        },
        () => { this.article_loading = false; });
    }
// </editor-fold>

    openArticle(art) {
        this.article_read = art;
        this.read_article_modalActions.emit({action: 'modal', params: ['open']});
    }

}
