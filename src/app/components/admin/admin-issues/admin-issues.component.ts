import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { DataService } from '../../../shared/services/data.services';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { issue_img_upload_server } from '../../../shared/constants/constants';
import { IStudentIssueData } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-admin-issues',
  templateUrl: './admin-issues.component.html',
  styleUrls: ['./admin-issues.component.scss']
})
export class AdminIssuesComponent implements OnInit {
  issue_loading: boolean  = true;
  is_sendingResponse: boolean  = false;
  issue_type: string;
  reply_messageText: string;
  issues_data: Array<IStudentIssueData> = [];
  show_issue_modalActions = new EventEmitter<string|MaterializeAction>();
  clicked_issue: IStudentIssueData;
  img_root: string = issue_img_upload_server;

  constructor(private data_service: DataService) { }

  ngOnInit() {
    this.fetch_adminResidencesData();
  }

// <editor-fold description="fetch Issues data from server">
    fetch_adminResidencesData() {
        this.data_service.dataGet(`admin/admin-get-student-issues`)
        .subscribe( (response: IAPIResponse1) => {
                if (response.req === 'found') {
                    this.updateCurrentData(response.data);
                }else {
                    console.log(response);
                    toast('An Error happened, please contact the dev admin', 4000);
                }
            },
            (err: any) => {
                console.log(err);
                toast('An Error happened, please contact the dev admin', 4000);
                this.issue_loading = false;
            },
            () => { this.issue_loading = false; });
    }
// </editor-fold>

// <editor-fold description="fetch Issues data from server">
  openMobile(issue_data) {
    this.clicked_issue = issue_data;
    this.show_issue_modalActions.emit({ action: 'modal' , params: ['open'] });
    this.reply_messageText = (issue_data.si_admin_reply) ? issue_data.si_admin_reply : null;
  }
  issueFixed(issue_data) {
      if (this.reply_messageText) {
          this.is_sendingResponse = true;
          const data_sent = {
              'issue_no': issue_data.si_no,
              'st_fullName': issue_data.app_stFname + ' ' + issue_data.app_stLname,
              'st_cellno': issue_data.app_stCellno,
              'admin_reply': this.reply_messageText
          };
          this.data_service.dataGet(`admin/admin-update-issue`, data_sent)
          .subscribe( (response: IAPIResponse1) => {
              if (response.req === 'found') {
                  this.updateCurrentData(response.data);
                  toast(`The fixed report has been sent with success`, 4000, 'rounded');
                  this.show_issue_modalActions.emit({action: 'modal' , params: ['close']});
              }else {
                  console.log(response);
                  toast('An Error happened, please contact the dev admin', 4000);
              }
          },
          (err: any) => {
              console.log(err);
              toast('An Error happened, please contact the dev admin', 4000);
              this.is_sendingResponse = false;
          },
          () => { this.is_sendingResponse = false; });
      }else {
          toast('Please fill in a fixed report message', 4000);
      }
  }
// </editor-fold>

// <editor-fold description="Update to issue page">
    updateCurrentData(data) {
      this.issues_data = data;
    }
// </editor-fold>
}
