import { Injectable } from '@angular/core';
import { IResData } from '../interfaces/residence.interface';
import { IRoomData } from '../interfaces/residence.interface';

@Injectable()
export class GroupResidence {

  constructor() { }

  groupResidence( residences: Array<any> ): any {
    const campus = {};
    const first_res = []; const second_res = [];
    const third_res = []; const forth_res = [];
    const campuses = ['APK', 'APB', 'DFC', 'SWC'];
    residences.forEach( ( res_data: IResData ) => {
      if (res_data.campus_name_alias === campuses[0]) {
        first_res.push(res_data);
        campus[campuses[0]] = first_res;
      }else if (res_data.campus_name_alias === campuses[1])  {
        second_res.push(res_data);
        campus[res_data.campus_name_alias] = second_res;
      }else if (res_data.campus_name_alias === campuses[2])  {
        third_res.push(res_data);
        campus[res_data.campus_name_alias] = third_res;
      }else if (res_data.campus_name_alias === campuses[3])  {
        forth_res.push(res_data);
        campus[res_data.campus_name_alias] = forth_res;
      }
    });
    return campus;
  }

  updateGenderResidence( grouped_res: any, gender  ): any {
    const campuses = ['APK', 'APB', 'DFC', 'SWC'];
    campuses.forEach( ( campus ) => {
      if (grouped_res[campus]) {
          const res_data =  grouped_res[campus].slice();
          const new_res_data = [];
          res_data.forEach( ( res ) => {
              if (res.acc_type.toUpperCase() === 'MIXED' || res.acc_type.toUpperCase() === gender.toUpperCase() ) {
                  new_res_data.push(res);
              }
          });
          grouped_res[campus] = new_res_data;
      }
    });
    return grouped_res;
  }

  groupResRoomType( res_rooms: Array<any> ): any {
    let room_type = [];
    let single = 0; let double = 0; let flat = 0;
    res_rooms.forEach( ( room: IRoomData ) => {
      if (room.r_type_id === 1 && room.room_status === 'available' ) {
        single++;
      }else if (room.r_type_id === 2 && room.room_status === 'available')  {
        double++;
      }else if (room.r_type_id === 3 && room.room_status === 'available')  {
        flat++;
      }
    });
    room_type = [
      {'name': 'Single Room', 'count': single, 'no': 1},
      {'name': 'Double Room', 'count': double, 'no': 2},
      {'name': 'Flat', 'count': flat, 'no': 3}
    ];
    return room_type;
  }


  getResAvailability(res_rooms: Array<IRoomData>) {
      let capacity: number = 0;
      let available: number = 0;
      let unavailable: number = 0;
      res_rooms.forEach( ( res ) => {
        if (res.room_status === 'available') {
            available++;
        }else {
            unavailable++;
        }
        if (res.r_type_id === 1) {
            capacity++;
        }else if (res.r_type_id === 2 || res.r_type_id === 3) {
            capacity = capacity + 2;
        }
      });
      return {
        'capacity': capacity,
        'available': available,
        'unavailable': unavailable,
      };
  }
}
