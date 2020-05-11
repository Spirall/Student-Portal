export interface IAdminUser {
  admin_id: string;
  admin_email: string;
  admin_img?: string;
  admin_level: number;
  admin_fname: string;
  admin_lname?: string;
  admin_cellno: number;
  admin_gender: string;
}

export class INewAdminUser {
    admin_id: string = '';
    admin_email: string = '';
    admin_level?: number = 1;
    admin_fname?: string = '';
    admin_lname?: string = '';
    admin_cellno?: string = '';
    admin_gender?: string = '';
}

export interface IResData {
  acc_id: number;
  acc_name: string;
  acc_descr: string;
  acc_capacity: number;
  acc_img?: string;
  acc_lat?: number;
  acc_long?: number;
  acc_no_rooms: number;
  acc_type: string;
  acc_dateTime: Date;
  acc_campus_id?: number;
  campus_id?: number;
  campus_name?: number;
  campus_lat?: number;
  campus_long?: number;
  campus_name_alias?: string;
  campus_dateTime?: Date;
  rooms_data?: Array<IRoomData>;
  res_features?: Array<IResFeatureData>;
  res_imgs?: Array<IResImgsData>;
}

export interface IRoomData {
  room_id: number;
  room_no: number;
  room_img?: string;
  room_price?: number;
  room_status: string;
  room_no_persons: number;
  room_type_id: string;
  room_accno: number;
  room_dateTime: Date;
  r_type_id: number;
  r_type_name: string;
  r_type_dateTime: Date;
}

export interface IResFeatureData {
  acc_f_id: number;
  acc_f_name: string;
  acc_f_dateTime: Date;
  acc_f_accno: number;
}

export interface IResImgsData {
    img_id: number;
    img_src: string;
    img_acc_id: number;
    img_dateTime: Date;
}

export interface INewRoomData {
  room_no?: number;
  room_price?: number;
  room_type?: number;
  image?: string;
}

export interface INewResData {
  acc_name?: string;
  acc_descr?: string;
  acc_capacity?: number;
  acc_lat?: number;
  acc_long?: number;
  acc_type?: string;
  acc_no_rooms?: number;
}

export interface IHomeData {
    res_data: Array<IResData>;
    appl_count:  number;
    contact_count: number;
    issue_count: number;
    avail_res: Array<IResData>;
}

export interface IApplicationData {
    appl_id: number;
    full_name: string;
    app_stFname:  string;
    app_stLname:  string;
    app_stID:  string;
    app_stNo:  number;
    app_stCellno:  string;
    app_stEmail:  string;
    app_stGender:  string;
    app_stAddress:  string;
    app_stAddress_2:  string;
    app_stYear:  string;
    r_type_id: number;
    r_type_name:  string;
    acc_id:  number;
    acc_name:  string;
    app_proofReg:  string;
    app_status:  number;
    room_id?: number;
    room_no?: string;
    app_dateTime:  Date;
    proof_link?: any;
    proof_ext?: string;
}

export interface IApplicationsPageData {
    applications: Array<IApplicationData>;
    residences:   Array<IResData>;
}

export interface IRoomStudent {
    app_dateTime: Date;
    app_proofReg: string;
    app_resID: number;
    app_roomTypeID: number;
    app_stAddress: string;
    app_stAddress_2?: any;
    app_stCellno: string;
    app_stEmail: string;
    app_stFname: string;
    app_stGender: string;
    app_stID: string;
    app_stLname: string;
    app_stNo: number;
    app_stYear: number;
    app_status: number;
    appl_id: number;
    rs_no: number;
    appl_no: number;
    room_id: number;
    rs_password: string;
    rs_start_date: Date;
    rs_end_date?: any;
}

export interface IMessageData {
    enq_dateTime: Date;
    enq_email: string;
    enq_fullname: string;
    enq_msg: string;
    enq_adminMsg: string;
    enq_no: number;
    enq_status: number;
}

export interface IStudentIssueData {
    acc_campus_id: number;
    acc_descr: string;
    acc_id: number;
    acc_img: string;
    acc_lat: number;
    acc_long: number;
    acc_name: number;
    app_resID: number;
    app_roomTypeID: number;
    app_stAddress: string;
    app_stCellno: string;
    app_stEmail: string;
    app_stFname: string;
    app_stGender: string;
    app_stID: string;
    app_stLname: string;
    app_stNo: number;
    app_stYear: number;
    appl_id: number;
    appl_no: number;
    campus_id: number;
    campus_lat: number;
    campus_long: number;
    campus_name: string;
    campus_name_alias: string;
    room_accno: number;
    room_id: number;
    room_no: number;
    room_no_persons: number;
    room_type_id: number;
    rs_no: number;
    rs_start_date: Date;
    si_appl_no: number;
    si_dateTime: Date;
    si_description: string;
    si_admin_reply: string;
    si_image?: string;
    si_status: number;
    si_no: number;
}
