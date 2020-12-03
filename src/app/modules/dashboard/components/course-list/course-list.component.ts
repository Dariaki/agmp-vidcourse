import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {

  public courses: ICourse[];
  @Input() searchValue: string;

  constructor(
    private filter: FilterPipe,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courses = this.courseService.getList();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue.currentValue) {
      this.courses = this.filter.transform(this.courses, changes.searchValue.currentValue)
    } else {
      this.courses = this.courseService.getList();
    }
    console.log("changes.searchValue", changes.searchValue);
  }

  public displayModal() {
    return confirm('Are you sure you want to delete?');
  }

  public deleteCourse(id: string) {
    let response = this.displayModal()
    if (response) {
      this.courseService.removeCourse(id);
      this.courses = this.courseService.getList();
    }
  }

  public editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }
}
