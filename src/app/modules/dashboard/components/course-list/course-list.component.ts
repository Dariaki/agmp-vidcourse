import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';
import * as courseList from '../../../../mocks/courses.json';

@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];

  constructor() { }

  ngOnInit(): void {
    this.courses = (courseList as any).default
  }

  deleteCourse(id: string) {
    console.log('Delete event emitted with id: ', id);
  }

  editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }
}
