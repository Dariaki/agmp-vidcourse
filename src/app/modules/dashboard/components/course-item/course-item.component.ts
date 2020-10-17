import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ICourse } from "../../interfaces/course.interface";

@Component({
  selector: 'agmp-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() deleteCourseEvent = new EventEmitter<string>();
  @Output() editCourseEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  editCourse(id: string) {
    this.editCourseEvent.emit(id);
  }

  deleteCourse(id: string) {
    this.deleteCourseEvent.emit(id);
  }

}
