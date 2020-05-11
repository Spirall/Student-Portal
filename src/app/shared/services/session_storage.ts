/*  Created by Marvine Bamba on 2017/08/13. */

import { Injectable } from '@angular/core';

@Injectable()
export class SectionStorageService {


  constructor() { }

  setSessionStorageItem( key: string , value: string) {
        sessionStorage.setItem( key, value );
  }

  getSessionStorageItem( value: string, default_value?: string ): any {
    return sessionStorage.getItem(value) || default_value;
  }


  setSessionStorageObject( key: string , value: any) {
    sessionStorage.setItem( key, JSON.stringify( value ));
  }

  getSessionStorageObject( key: string , default_value?: string): any {
    return JSON.parse( sessionStorage.getItem( key ) ) || default_value;
  }

  deleteSessionStorage( key: string ) {
    sessionStorage.removeItem( key );
  }

  deleteAllSessionStorage() {
    sessionStorage.clear();
  }
}
