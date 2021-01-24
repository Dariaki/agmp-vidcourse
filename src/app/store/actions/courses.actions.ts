import { Action } from '@ngrx/store';
import { ICourse } from '../../modules/dashboard/interfaces/course.interface';

export enum CourseActionTypes {
  GET_COURSE = '[COURSE] Get',
  CREATE_COURSE = '[COURSE] Create',
  REMOVE_COURSE = '[COURSE] Remove',
  GET_COURSES = '[COURSES] Get',
  GET_INITIAL_COURSES = '[COURSES] Get Initial'
}

export class GetCourse implements Action {
  readonly type = CourseActionTypes.GET_COURSE

  // courseId
  constructor(public payload: string) {}
}

export class CreateCourse implements Action {
  readonly type = CourseActionTypes.CREATE_COURSE

  // ICourse
  constructor(public payload: ICourse) {}
}

export class RemoveCourse implements Action {
  readonly type = CourseActionTypes.REMOVE_COURSE

  // courseId
  constructor(public payload: string) {}
}

export class GetInitialCourses implements Action {
  readonly type = CourseActionTypes.GET_INITIAL_COURSES

  constructor(public payload: ICourse[]) {}
}

export class GetCourses implements Action {
  readonly type = CourseActionTypes.GET_COURSES

  constructor() {}
}

export type Actions = GetCourse | CreateCourse | RemoveCourse | GetCourses | GetInitialCourses;
