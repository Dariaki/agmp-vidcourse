import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../dashboard/interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[], prop: string): ICourse[] {

    if (!prop.trim()) {
      return courses;
    }
    return [...courses].sort((a, b) => (a[prop] > b[prop]) ? 1 : -1)
  }

}
