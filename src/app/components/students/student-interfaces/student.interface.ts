export interface IStudentData {
    appl_data: IApplData;
    st_data: IResStudentData;
}

export interface IApplData {
    app_dateTime: Date;
    app_proofReg: string;
    app_resID: number;
    app_roomTypeID: number;
    app_stAddress: string;
    app_stAddress_2: any ;
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
}

export interface IResStudentData {
    appl_no: number;
    room_id: number;
    rs_no: number;
    rs_password: string;
    rs_start_date: Date;
    rs_end_date: Date;
}

export interface IStudentIsssueData {
    si_admin_reply: string;
    si_appl_no: number;
    si_dateTime: Date;
    si_description: string;
    si_image: string;
    si_no: number;
    si_status: number;
}




