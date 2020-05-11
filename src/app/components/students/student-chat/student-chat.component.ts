import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../../../shared/services/local_storage';
import { DataService } from '../../../shared/services/data.services';
import { IStudentData } from '../student-interfaces/student.interface';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.component.html',
  styleUrls: ['./student-chat.component.scss']
})
export class StudentChatComponent implements OnInit, OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();
    @ViewChild('chat_ms_area') chat_ms_area;
    student_data: IStudentData;
    student_data_short;
    online_student = [];
    chat_messages: Array<IMessage> = [];
    chat_text: string = '';

    constructor (
      private local_storage: LocalStorageService,
      private data_service: DataService ) { }

    ngOnInit() {
        this.student_data = this.local_storage.getLocalStorageObject('student_data');
        this.student_data_short = {
            'st_id': this.student_data.appl_data.appl_id,
            'fname': this.student_data.appl_data.app_stFname,
            'lname': this.student_data.appl_data.app_stLname,
            'gender': this.student_data.appl_data.app_stGender
        };
        this.data_service.connectSocket();
        this.initializeChat();
        this.onNewConnection();
        this.getMessage();
    }

    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
      this.data_service.disconnectSocket();
    }

    // *** on New Connection
    initializeChat() {
        this.data_service.sendSocketData('student_connected', this.student_data_short);
    }

    // *** on New Connection
    onNewConnection() {
        this.data_service.getSocketData('new_student_connection')
        .takeUntil(this.ngUnsubscribe)
        .subscribe( ( value ) => {
            // console.log(value);
            this.online_student = [];
            value.users.forEach( (user) => {
                if (parseInt( user.st_id, 10) !== parseInt(this.student_data_short.st_id, 10)) {
                    this.online_student.push(user);
                    // if (value.msg.length > 0) {
                    //     this.chat_messages.push(value.msg);
                    // }
                }
            });
            // console.log(value);
        },
        (err: any) => {
            console.log(err);
        },
        () => { });
    }

    // *** Send Message
    sendMessage() {
      if (this.chat_text.trim()) {
          const message: IMessage = {
              'gender': this.student_data.appl_data.app_stGender,
              'fname': this.student_data.appl_data.app_stFname,
              'lname': this.student_data.appl_data.app_stLname,
              'msg': this.chat_text.trim(),
              'destination': this.student_data.appl_data.appl_id,
          };
          this.chat_messages.push(message);
          this.data_service.sendSocketData('add-message', message);

          this.chat_text = '';
          this.scrollDown();
      }
    }

    // *** Get Message
    getMessage() {
        this.data_service.getSocketData('new_message')
        .takeUntil(this.ngUnsubscribe)
        .subscribe( ( value ) => {
            const msg: IMessage = value.msg;
            // console.log(value);
            if (  msg.destination !== this.student_data_short.st_id) {
                this.chat_messages.push(msg);
                this.scrollDown();
                toast(`New message from ${msg.fname}`, 2000, 'rounded');
            }
        },
        (err: any) => {
            console.log(err);
        },
        () => {  });
    }

    // *** Window Scroll
    scrollDown() {
      const scroll_height = this.chat_ms_area.nativeElement.scrollHeight;
      const scroll_clientHeight = this.chat_ms_area.nativeElement.clientHeight;
      if (scroll_clientHeight !== scroll_height) {
          this.chat_ms_area.nativeElement.scrollTop =  scroll_height - scroll_clientHeight;
      }
    }

    // randomChat() {
    //   const time_out = Observable.timer(1500)
    //     .subscribe(( x ) => {
    //         this.chat_messages.push({
    //             'gender': 'F',
    //             'fname': 'margarita',
    //             'lname': 'margarita',
    //             'msg': 'lol whatever man !',
    //             'destination': 2
    //         });
    //          this.scrollDown();
    //          time_out.unsubscribe();
    //          this.pushFakeOnlineUser();
    //   });
    // }
    //
    // pushFakeOnlineUser() {
    //     if (this.online_student.length === 0) {
    //         this.online_student.push({
    //             'gender': 'F',
    //             'user_name': 'margarita'
    //         });
    //     }
    //     const time_out = Observable.timer(5000)
    //     .subscribe(( x ) => {
    //         this.online_student.pop();
    //         time_out.unsubscribe();
    //     });
    // }
}

export interface IMessage {
    gender: string;
    fname: string;
    lname: string;
    msg: string;
    destination: number;
}
