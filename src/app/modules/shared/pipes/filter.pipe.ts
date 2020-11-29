import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../../dashboard/interfaces/course.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: ICourse[], search: string): ICourse[] {

    if (!search.trim()) {
      return courses;
    }
    let filteredCourse =  courses.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))

    if (filteredCourse.length === 0) {
      return courses;
    }
    return filteredCourse;
  }
}
