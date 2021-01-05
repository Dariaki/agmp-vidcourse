import { Injectable } from '@angular/core';
import { ICourse } from '../modules/dashboard/interfaces/course.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public getList(start = 0, count = 3, textFragment = ''): Promise<ICourse[]> {
    return this.httpClient.get<ICourse[]>('http://localhost:3004/courses', {
      params: new HttpParams()
        .set('start', `${start}`)
        .set('count', `${count}`)
        .set('sort', 'date')
        .set('textFragment', textFragment)
    })
    .toPromise()
    .then((courses: ICourse[]) => {
      this.courses = courses;
      return this.courses;
    })
  }

  public createCourse(course: ICourse): Promise<ICourse> {
    return this.httpClient.post('http://localhost:3004/courses', course)
      .toPromise()
      .then((course: ICourse) => {
        return course;
      })
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => course.id.toString() === id);
  }

  public getCourseTitle(id: string): string {
    let course =  this.courses.find(course => course.id.toString() === id);
    return course.name;
  }

  public updateCourse(id: string, course: ICourse): void {
    let courseFiltered = this.courses.filter(course => course.id.toString() !== id);
    this.courses = courseFiltered.concat({...course});
  }

  public removeCourse(id: string): Promise<void> {
    return this.httpClient.delete<void>(`http://localhost:3004/courses/${id}`)
      .toPromise()
  }

}
