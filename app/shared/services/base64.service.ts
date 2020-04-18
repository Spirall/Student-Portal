/*  Created by Marvine Bamba on 2017/08/13. */

import { Injectable } from '@angular/core';


@Injectable()
export class Base64Service {



  constructor() { }

  ConvertToBase64(file: any) {
    return new Promise( (resolve, reject) => {
        if (!file) { reject(file); }
        const reader = new FileReader();
        reader.onloadend = function() {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
    });
  }
}
