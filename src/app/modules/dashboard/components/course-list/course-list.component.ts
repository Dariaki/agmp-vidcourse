import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {

  public courses: ICourse[] = [];
  public coursesStart = 0;
  public coursesCount = 3;

  @Input() searchValue: string;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getList(this.coursesStart, this.coursesCount)
      .then((courses: ICourse[]) => {
        this.courses = courses;
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue.currentValue) {
      this.courseService.getList(this.coursesStart, null, changes.searchValue.currentValue)
        .then((courses: ICourse[]) => {
          this.courses = courses;
        })
    } else {
      this.courseService.getList(this.coursesStart, this.coursesCount)
        .then((courses: ICourse[]) => {
          this.courses = courses;
        })
    }
    console.log("changes.searchValue", changes.searchValue);
  }

  public displayModal() {
    return confirm('Are you sure you want to delete?');
  }

  public deleteCourse(id: string) {
    let response = this.displayModal()
    if (response) {
      this.courseService.removeCourse(id)
        .then(() => {
          this.courseService.getList()
            .then((courses: ICourse[]) => {
              this.courses = courses;
            })
        })
    }
  }

  public editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }

  loadCourses() {
    this.coursesCount += 3
    this.courseService.getList(this.coursesStart, this.coursesCount)
      .then((courses: ICourse[]) => {
        this.courses = courses;
      })
  }
}
