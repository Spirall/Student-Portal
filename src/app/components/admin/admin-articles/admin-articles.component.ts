import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeAction, toast } from 'angular2-materialize';
import { article_img_upload_server } from '../../../shared/constants/constants';
import { SectionStorageService } from '../../../shared/services/session_storage';
import { UrlService } from '../../../shared/services/url_encode';
import { DataService } from '../../../shared/services/data.services';
import { IArticle } from '../../../shared/interfaces/other.interface';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
    article_loading: boolean  = true;
    is_deletingArticle: boolean  = false;
    article_data: Array<IArticle>;
    delete_article: IArticle;
    search_art: string;
    img_src: string = article_img_upload_server;
    delete_article_modalActions =  new EventEmitter<string|MaterializeAction>();

    constructor(
        private _route: Router,
        private _active_route: ActivatedRoute,
        private data_service: DataService,
        private session_storage: SectionStorageService,
        private url_service: UrlService) { }

    ngOnInit() {
        this.session_storage.deleteSessionStorage('article_update' );
        this.fetch_articleData();
    }

// <editor-fold description="Fetch page data">
    fetch_articleData() {
      this.data_service.dataGet(`admin/get-article`)
      .subscribe((response) => {
              if (response.req === 'found') {
                  this.updateCurrentData(response.data);
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

// <editor-fold description="Delete Article section">
    openDeleteArticleModal(art) {
        this.delete_article_modalActions.emit({action: 'modal' , params: ['open']});
        this.delete_article = art;
    }
    deleteArtData(art) {
        this.is_deletingArticle = true;
        const data_sent = {
            'article_no': art.article_no
        };
        const data_sent_2 = {
            'request': 'delete-upload', 'sub-request': 'del-article-img',
            'file_name': art.article_img
        };
        const nodeApi = this.data_service.dataGet(`admin/delete-article`, data_sent);
        const phpApi =  this.data_service.dataPHPFilePost( data_sent_2 );
        Observable.forkJoin([nodeApi, phpApi])
        .subscribe( (response: any) => {
            if (response[0].req === 'found' && response[1].req === 'successful') {
                this.updateCurrentData(response[0].data);
                this.delete_article_modalActions.emit({action: 'modal' , params: ['close']});
                toast('The Article was deleted with success', 4000, 'rounded');
            }else {
                console.log(response);
                toast('An error happened while deleting article, please contact the dev admin', 4000);
            }
        },
        (err: any) => {
            this.is_deletingArticle = false;
            console.log(err);
            toast('An error happened while deleting article, please contact the dev admin', 4000);
        },
        () => {  this.is_deletingArticle = false; });
    }
// </editor-fold>

// <editor-fold description="Go to article">
    goToArticle(art: IArticle) {
        const res_slug = this.encodeUrl( art.article_title );
        this.session_storage.setSessionStorageObject('article_update' , art);
        this._route.navigate(['./', res_slug], { preserveQueryParams: false, relativeTo: this._active_route }) ;
    }
    // Encode residence name to url format
    encodeUrl(url: string) {
        return this.url_service.urlEncode(url);
    }
// </editor-fold>

// <editor-fold Description="Update Page Data">
    updateCurrentData(data) {
        this.article_data = data;
    }
// </editor-fold>
}
