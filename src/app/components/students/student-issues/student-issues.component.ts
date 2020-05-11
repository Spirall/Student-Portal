import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MaterializeAction, toast } from 'angular2-materialize';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { issue_img_upload_server } from '../../../shared/constants/constants';
import { Base64Service } from '../../../shared/services/base64.service';
import { DataService } from '../../../shared/services/data.services';
import { IStudentData, IStudentIsssueData } from '../student-interfaces/student.interface';

@Component({
  selector: 'app-student-issues',
  templateUrl: './student-issues.component.html',
  styleUrls: ['./student-issues.component.scss']
})
export class StudentIssuesComponent implements OnInit {
    student_data: IStudentData;
    is_issues_loading: boolean = true;
    is_submittingIssue: boolean = false;
    issue_img: any;
    my_issues: Array<IStudentIsssueData> = [];
    modal_issue_data: IStudentIsssueData;
    issue_src: string = issue_img_upload_server;
    issue_text: string;
    si_admin_reply: string;
    open_issue_modalActions = new EventEmitter<string|MaterializeAction>();
    @ViewChild('NewIssueImage') NewIssueImage;
    @ViewChild('NewIssueImageCopy') NewIssueImageCopy;

    constructor(
      private base64_service: Base64Service,
      private data_service: DataService,
      private local_storage: LocalStorageService ) {
    }

    ngOnInit() {
        this.student_data = this.local_storage.getLocalStorageObject('student_data');
        this.fetch_ResidencesDataFrom_API();
    }

// <editor-fold description="fetch student issue data from the API server">
    fetch_ResidencesDataFrom_API() {
      const data_sent = { 'appl_no': this.student_data.appl_data.appl_id };
        this.data_service.dataPost('student/get-issue', data_sent)
        .subscribe( (response: any) => {
            if (response.req === 'found') {
                this.updateCurrentData(response.data);
            }else {
                console.log(response);
                toast('An Error happened, please contact the admin of the website', 4000);
            }
        },
        (err: any) => {
            this.is_issues_loading = false;
            console.log(err);
            toast('An Error happened, please contact the admin of the website', 4000);
        },
        () => { this.is_issues_loading = false; });
    }
// </editor-fold>


// <editor-fold description="View Issue modal">
    openViewIssueRoomModal( issue: IStudentIsssueData ) {
        this.modal_issue_data = issue;
        this.si_admin_reply = (issue.si_admin_reply) ? issue.si_admin_reply : 'No replied yet';
        this.open_issue_modalActions.emit({action: 'modal', params: ['open']});
    }
// </editor-fold>


// <editor-fold Description="get Base64 file when file image changed">
    async fileImgChanged (fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            const resRoomImage_base64 = (fileInput.target.files[0])
                ? await this.base64_service.ConvertToBase64(fileInput.target.files[0]) : null;
            this.issue_img = resRoomImage_base64;
        }else {
            this.issue_img = null;
        }
        return;
    }
// </editor-fold>


// <editor-fold Description="Save Issue">
    saveIssue() {
        if (this.issue_text && this.issue_img) {
            this.is_submittingIssue = true;
            const d = new Date();
            const time_stamp = d.getFullYear() + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
            const data_sent = {
                'issue_text': this.issue_text,
                'issue_img': this.issue_img,
                'appl_no': this.student_data.appl_data.appl_id,
                'time_stamp': time_stamp,
            };
            const data_sent_2 = {
                'request': 'upload', 'sub-request': 'issue-img', 'time_stamp': time_stamp,
                'base64-file': this.issue_img, 'appl_no': this.student_data.appl_data.appl_id
            };
            const nodeApi = this.data_service.dataPost(`student/add-issue`, data_sent);
            const phpApi =  this.data_service.dataPHPFilePost( data_sent_2 );

            Observable.forkJoin([nodeApi, phpApi ])
                .subscribe( (response: any) => {
                        if (response[0].req === 'found' && response[1].req === 'successful') {
                            toast('Issue added with success', 4000,  'rounded');
                            this.updateCurrentData(response[0].data);
                            this.clearInput();
                        }else {
                            console.log(response);
                            toast('An error happened while editing data, please contact the dev admin', 4000);
                        }
                    },
                    (err: any) => {
                        this.is_submittingIssue = false;
                        console.log(err);
                        toast('An error happened while inserting data, please contact the dev admin', 4000);
                    },
                    () => {  this.is_submittingIssue = false; });
        }else {
            toast('Please make sure the image and the message are not empty ', 4000);
        }
    }
// </editor-fold>

// <editor-fold descr="Update residence page data">
    clearInput() {
        this.issue_text = '';
        this.issue_img = '';
        this.NewIssueImage.nativeElement.files = null;
        this.NewIssueImageCopy.nativeElement.value = null;
    }
// </editor-fold>

// <editor-fold descr="Update residence page data">
    updateCurrentData(data) {
        this.my_issues = data;
    }
// </editor-fold>
}
