/**
 * Created by MarvineBamba on 2017/08/13.
 */
import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any, term: any, params: Array<string>): any {
    if (term === undefined) { return items; }

    return items.filter(function(item) {
      if (Array.isArray(params) &&  params.length > 0) {
        for (let i = 0; i < params.length; i++) {
          const property = params[i];
          if (  item[property] === undefined) { throw PropertyException(property); }
          if (item[property] === null) { continue; }
          if (perform_search(item[property]) === true) { return true; }
        }
      }else {
        for (const property in item) {
          if (item[property] === null) { continue; }
          if (perform_search(item[property]) === true) { return true; }
        }
      }
      return false;
    });

    function perform_search(item) {
      return (function(i) {
        const _item = i.toString().toLowerCase().replace(/[^\u0000-\u007E]/g, '');
        let _term = term.toString().toLowerCase();

        if (_term[_term.length - 1] === ' ') {
          _term = _term.substring(0, _term.length - 1);
        }

        if (_item.includes(_term)) {
          return true;
        }
      })(item);
    }

    function PropertyException(property_name) {
      return 'Search Filter Pipe Error - Property name ' + property_name + ' does not exist in the object';
    }
  }
}
