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
  campus_name?: string;
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