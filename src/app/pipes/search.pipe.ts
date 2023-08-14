import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: string[], searchTerm: string): any {
    if (!searchTerm) return values;
    if (values && searchTerm) {
      return values.filter((value) => {
        // return value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
}
