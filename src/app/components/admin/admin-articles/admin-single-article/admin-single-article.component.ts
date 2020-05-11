import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MaterializeAction, toast } from 'angular2-materialize';
import { DataService } from '../../../../shared/services/data.services';
import { SectionStorageService } from '../../../../shared/services/session_storage';
import { Base64Service } from '../../../../shared/services/base64.service';
import { article_img_upload_server } from '../../../../shared/constants/constants';
import { LocalStorageService } from '../../../../shared/services/local_storage';
import { IAdminUser } from '../../admin-interfaces/admin.interface';
import { IArticle } from '../../../../shared/interfaces/other.interface';


@Component({
  selector: 'app-admin-single-article',
  templateUrl: './admin-single-article.component.html',
  styleUrls: ['./admin-single-article.component.scss']
})
export class AdminSingleArticleComponent implements OnInit {
    is_updating: boolean = false;
    article_title: string;
    ckeditorContent: string;
    article_img: any;
    article_type: number = 0;
    @ViewChild('NewArticleImage') NewArticleImage;
    @ViewChild('NewArticleImageCopy') NewArticleImageCopy;
    addedSuccessfully_modalActions = new EventEmitter<string|MaterializeAction>();
    admin_data: IAdminUser;
    // if updating
    res_slug: string = null;
    is_an_update: boolean = false;
    art_update_data: IArticle;
    art_update_exit_img: string;
    article_img_src: string = article_img_upload_server;

    constructor(
        public _activated_route: ActivatedRoute,
        public data_service: DataService,
        public base64_service: Base64Service,
        public local_storage: LocalStorageService,
        public session_storage: SectionStorageService,
        public location: Location ) {
        this.res_slug = this._activated_route.snapshot.params['article_name'];
        const art_data: IArticle = this.session_storage.getSessionStorageObject('article_update');
        if (art_data) {
            this.is_an_update = true;
            this.art_update_data = art_data;
            this.article_title = art_data.article_title;
            this.ckeditorContent = art_data.article_msg;
            this.article_img = this.article_img_src + art_data.article_img;
            this.art_update_exit_img = art_data.article_img;
            this.article_type = art_data.article_is_public;
            // console.log(art_data);
        }
    }

    ngOnInit() {
      this.admin_data = this.local_storage.getLocalStorageObject('user_data');
    }

// <editor-fold Description="get Base64 file when file image changed">
    async fileImgChanged (fileInput: any) {
      if (fileInput.target.files && fileInput.target.files[0]) {
          const resRoomImage_base64 = (fileInput.target.files[0])
              ? await this.base64_service.ConvertToBase64(fileInput.target.files[0]) : null;
          this.article_img = resRoomImage_base64;
      }else {
          this.article_img = null;
      }
    }
// </editor-fold>

// <editor-fold Description="Save Article">
    saveArticle() {
      if (this.article_title.trim()
          && this.article_img
          && this.ckeditorContent.trim()) {
          const d = new Date();
          const time_stamp = d.getFullYear() + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
          this.is_updating = true;

          const data_sent = {
              'article_title': this.article_title,
              'article_img': this.article_img,
              'art_id': 0,
              'article_msg': this.ckeditorContent,
              'time_stamp': time_stamp,
              'is_public': this.article_type,
              'admin_id': this.admin_data.admin_id
          };
          const data_sent_2 = {
              'request': 'upload', 'sub-request': 'article-img', 'time_stamp': time_stamp,
              'base64-file': this.article_img, 'article_title': this.article_title
          };
          const nodeApi = this.data_service.dataPost(`admin/add-article`, data_sent);
          const phpApi =  this.data_service.dataPHPFilePost( data_sent_2 );

          Observable.forkJoin([nodeApi, phpApi ])
          .subscribe( (response: any) => {
                  if (response[0].req === 'successful' && response[1].req === 'successful') {
                      this.addedSuccessfully_modalActions.emit({action: 'modal' , params: ['open']});
                  }else {
                      console.log(response);
                      this.is_updating = false;
                      toast('An error happened while editing data, please contact the dev admin', 4000);
                  }
              },
              (err: any) => {
                  this.is_updating = false;
                  console.log(err);
                  toast('An error happened while inserting data, please contact the dev admin', 4000);
              },
              () => {  this.is_updating = false; });
      }else {
          toast('Please make sure to complete all fields ', 4000);
      }
    }
// </editor-fold>

// <editor-fold Description="Update Article">
    updateArticle() {
        if (this.article_title.trim()
            && this.article_img
            && this.ckeditorContent.trim()) {
            const d = new Date();
            const time_stamp = d.getFullYear() + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
            this.is_updating = true;
            let art_img = this.article_img;
            if (this.UpdateImgHasNotChanged(this.article_img)) {
                art_img = null;
            }
            const data_sent = {
                'article_title': this.article_title,
                'article_img': art_img,
                'art_id': this.art_update_data.article_no,
                'article_msg': this.ckeditorContent,
                'time_stamp': time_stamp,
                'is_public': this.article_type,
                'admin_id': this.admin_data.admin_id
            };
            const data_sent_2 = {
                'request': 'upload', 'sub-request': 'article-update-img',
                'time_stamp': time_stamp,
                'base64-file': art_img,
                'article_title': this.article_title,
                'exist_file': this.art_update_exit_img
            };

            const nodeApi = this.data_service.dataPost(`admin/update-article`, data_sent);
            const phpApi =  this.data_service.dataPHPFilePost( data_sent_2 );

            Observable.forkJoin([nodeApi, phpApi ])
                .subscribe( (response: any) => {
                    if (response[0].req === 'successful' && response[1].req === 'successful') {
                        this.addedSuccessfully_modalActions.emit({action: 'modal' , params: ['open']});
                    }else {
                        console.log(response);
                        this.is_updating = false;
                        toast('An error happened while editing data, please contact the dev admin', 4000);
                    }
                },
                (err: any) => {
                    this.is_updating = false;
                    console.log(err);
                    toast('An error happened while inserting data, please contact the dev admin', 4000);
                },
                () => {  this.is_updating = false; });
        }else {
            toast('Please make sure to complete all fields ', 4000);
        }
    }
// </editor-fold>


    UpdateImgHasNotChanged(img_src): boolean {
        return img_src.includes(this.article_img_src);
    }

    goBack() {
        this.addedSuccessfully_modalActions.emit({action: 'modal' , params: ['close']});
        this.session_storage.deleteSessionStorage('article_update');
        this.location.back();
    }
}
