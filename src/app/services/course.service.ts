import { Injectable } from '@angular/core';
import * as courseList from '../mocks/courses.json';
import { ICourse } from '../modules/dashboard/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[];

  constructor() {
    this.courses = (courseList as any).default;
  }

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse(course: ICourse): void {
    this.courses = this.courses.concat({...course});
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(id: string, course: ICourse): void {
    let courseFiltered = this.courses.filter(course => course.id !== id);
    this.courses = courseFiltered.concat({...course});
  }

  public removeCourse(id: string) {
    this.courses = this.courses.filter(course => course.id !== id);
    // console.log(' this.courses. ',  this.courses);
  }
}
