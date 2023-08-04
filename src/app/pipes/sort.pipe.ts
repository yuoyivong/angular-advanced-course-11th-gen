import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from '../model/subject';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Subject[]): Subject[] {
    console.log('Value : ', value);
    const sortedSubject = value.sort((a, b) =>
      a?.subjectName.localeCompare(b.subjectName)
    );
    return sortedSubject;
  }
}
