import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any[], search: string, returnAll: boolean = true): any[] {

    if (!search.trim()) {
      return courses;
    }
    let filteredCourse =  courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase()))

    if (returnAll && filteredCourse.length === 0) {
      return courses;
    }
    return filteredCourse;
  }
}
