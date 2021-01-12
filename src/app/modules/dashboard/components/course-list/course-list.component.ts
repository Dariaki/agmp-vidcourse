import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';
import { DataLoaderService } from '../../../../services/data-loader.service';

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
    private _courseService: CourseService,
    private _dataLoaderService: DataLoaderService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue.currentValue) {
      this._courseService.getList(this.coursesStart, null, changes.searchValue.currentValue)
        .subscribe((courses: ICourse[]) => {
          if (courses) {
            setTimeout(() => {
              this.courses = courses;
              this._dataLoaderService.hideDataLoader();
            }, 100)
          }
        })
    } else {
      this._courseService.getList(this.coursesStart, this.coursesCount)
        .subscribe((courses: ICourse[]) => {
          if (courses) {
            setTimeout(() => {
              this.courses = courses;
              this._dataLoaderService.hideDataLoader();
            }, 300)
          }
        })
    }

  }

  public displayModal() {
    return confirm('Are you sure you want to delete?');
  }

  public deleteCourse(id: string) {
    let response = this.displayModal()
    if (response) {
      this._courseService.removeCourse(id)
        .subscribe(() => {
          this._courseService.getList()
            .subscribe((courses: ICourse[]) => {
              setTimeout(() => {
                this.courses = courses;
                this._dataLoaderService.hideDataLoader();
              }, 300)
            })
        })
    }
  }

  public editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }

  loadCourses() {
    this.coursesCount += 3
    this._courseService.getList(this.coursesStart, this.coursesCount)
      .subscribe((courses: ICourse[]) => {
        setTimeout(() => {
          this.courses = courses;
          this._dataLoaderService.hideDataLoader();
        }, 300)
      })
  }
}
