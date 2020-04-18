/*  Created by Marvine Bamba on 2017/08/13. */

import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {


  constructor() { }

  getLocalStorageItem( key: string , default_value?: string): any {
    return localStorage.getItem( key) || default_value;
  }

  setLocalStorageItem( key: string , value: string) {
    localStorage.setItem( key, value);
  }

  getLocalStorageObject( key: string , default_value?: string): any {
    return JSON.parse( localStorage.getItem( key) ) || default_value;
  }

  setLocalStorageObject( key: string , value: any) {
    localStorage.setItem( key, JSON.stringify(value));
  }

  deleteLocalStorage( key: string ) {
    localStorage.removeItem( key );
  }

  deleteAllLocalStorage() {
     localStorage.clear();
  }

}
