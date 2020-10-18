import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'agmp-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() course: ICourse;
  @Output() deleteCourseEvent = new EventEmitter<string>();
  @Output() editCourseEvent = new EventEmitter<string>();

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges: ", changes);
    console.log("ngOnChanges: ", changes.course.currentValue);
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  editCourse(id: string) {
    this.editCourseEvent.emit(id);
  }

  deleteCourse(id: string) {
    this.deleteCourseEvent.emit(id);
  }

}
