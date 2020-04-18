/*  Created by Marvine Bamba on 2017/08/13. */

import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  constructor() { }

  urlEncode(url: string ): string {
    url = url.trim().toLowerCase();
    url = url.split(' ').join('-');
    url = url.replace(/[^a-zA-Z0-9|-]/g, '');
    return url;
  }
}
