import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse } from '../modules/dashboard/interfaces/course.interface';
import { DataLoaderService } from './data-loader.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[];

  constructor(
    private httpClient: HttpClient,
    private _dataLoaderService: DataLoaderService
  ) { }

  public getList(start = 0, count = 3, textFragment = ''): Observable<ICourse[]> {
    this._dataLoaderService.showDataLoader();
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
    this._dataLoaderService.showDataLoader();
    return this.httpClient.post('http://localhost:3004/courses', course)
      .pipe(
        map((course: ICourse) => {
          return course;
        })
      )
  }

  public getCourseById(id: string): Observable<ICourse> {
    this._dataLoaderService.showDataLoader();
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
    this._dataLoaderService.showDataLoader();
    let courseFiltered = this.courses.filter(course => course.id.toString() !== id);
    this.courses = courseFiltered.concat({...course});
  }

  public removeCourse(id: string): Observable<void> {
    this._dataLoaderService.showDataLoader();
    return this.httpClient.delete<void>(`http://localhost:3004/courses/${id}`)
  }

}
