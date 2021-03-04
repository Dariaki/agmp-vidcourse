import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {IAuthor, IAuthorsList, ICourse} from '../modules/dashboard/interfaces/course.interface';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public getList(start = 0, count = 3, textFragment = ''): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>('http://localhost:3004/courses', {
      params: new HttpParams()
        .set('start', `${start}`)
        .set('count', `${count}`)
        .set('sort', 'date')
        .set('textFragment', textFragment)
    })
    .pipe(
      map((courses: ICourse[]) => {
        this.courses = courses;
        return this.courses;
      })
    )
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    return this.httpClient.post('http://localhost:3004/courses', course)
      .pipe(
        map((course: ICourse) => {
          return course;
        })
      )
  }

  public getCourseById(id: string): Observable<ICourse> {
    return new Observable<ICourse>((subscriber) => {
      setTimeout(() => {
        let course = this.courses.find(course => course.id.toString() === id);
        subscriber.next(course);
      }, 500)
    })
  }

  public getCourseTitle(id: string): string {
    let course = this.courses.find(course => course.id.toString() === id);
    return course.name;
  }

  public updateCourse(id: string, course: ICourse): void {
    let courseFiltered = this.courses.filter(course => course.id.toString() !== id);
    this.courses = courseFiltered.concat({...course});
  }

  public removeCourse(id: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3004/courses/${id}`);
  }

  public getAuthors() {
    return this.httpClient.get<IAuthorsList[]>('http://localhost:3004/authors');
  }

}
