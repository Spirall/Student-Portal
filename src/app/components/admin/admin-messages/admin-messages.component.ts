import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction, toast } from 'angular2-materialize';
import { DataService } from '../../../shared/services/data.services';
import { IAPIResponse1 } from '../../../shared/interfaces/api-response.interface';
import { IMessageData } from '../admin-interfaces/admin.interface';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {
  messages_loading: boolean  = true;
  is_sendingEmail: boolean = false;
  messages: Array<IMessageData>;
  message_type: string;
  reply_messageText: string;
  clicked_message: IMessageData;
  show_message_modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
      private data_service: DataService,
  ) { }

  ngOnInit() {
    this.fetch_adminResidencesData();
  }

// <editor-fold description="fetch Messages data from server">
    fetch_adminResidencesData() {
        this.data_service.dataGet(`admin/admin-get-contactUs-messages`)
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
            this.messages_loading = false;
        },
        () => { this.messages_loading = false; });
    }
// </editor-fold>

// <editor-fold description="Modal to read and send email reply section">
    respondMsg( msg ) {
      this.clicked_message = msg;
      this.reply_messageText = (msg.enq_adminMsg) ? msg.enq_adminMsg : '';
      this.show_message_modalActions.emit({action: 'modal' , params: ['open']});
    }
    responseEmail(msg_detail) {
      if (this.reply_messageText) {
        this.is_sendingEmail = true;
        const data_sent = {
          'enq_id': msg_detail.enq_no,
          'enq_name': msg_detail.enq_fullname,
          'enq_email': msg_detail.enq_email,
          'enq_msg': msg_detail.enq_msg,
          'admin_msg': this.reply_messageText,
        };
        this.data_service.dataGet(`admin/admin-send-contactUs-email`, data_sent)
        .subscribe( (response: IAPIResponse1) => {
                if (response.req === 'found') {
                    this.updateCurrentData(response.data);
                    toast(`Email sent to ${data_sent.enq_name} with success`, 4000, 'rounded');
                    this.show_message_modalActions.emit({action: 'modal' , params: ['close']});
                }else {
                    console.log(response);
                    toast('An Error happened, please contact the dev admin', 4000);
                }
            },
            (err: any) => {
                console.log(err);
                toast('An Error happened, please contact the dev admin', 4000);
                this.is_sendingEmail = false;
            },
            () => { this.is_sendingEmail = false; });
      }else {
          toast('Message can not be empty', 4000);
      }
    }
// </editor-fold>


// <editor-fold description="Update to message page">
    updateCurrentData(data) {
      this.messages = data;
    }
// </editor-fold>
}

