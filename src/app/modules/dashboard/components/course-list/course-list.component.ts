import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';
import * as courseList from '../../../../mocks/courses.json';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';

@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {

  public courses: ICourse[];
  @Input() searchValue: string;

  constructor(
    private filter: FilterPipe
  ) { }

  ngOnInit(): void {
    this.courses = (courseList as any).default
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue.currentValue) {
      this.courses = this.filter.transform(this.courses, changes.searchValue.currentValue)
    } else {
      this.courses = (courseList as any).default
    }
    console.log("changes.searchValue",changes.searchValue);
  }

  deleteCourse(id: string) {
    console.log('Delete event emitted with id: ', id);
  }

  editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }
}
