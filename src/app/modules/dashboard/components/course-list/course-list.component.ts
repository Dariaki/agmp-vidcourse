import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CourseActions from '../../../../store/actions/courses.actions';

import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';
import { DataLoaderService } from '../../../../services/data-loader.service';
import { CourseState } from '../../../shared/interfaces/states/course.state';


@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {

  public courses$: Observable<ICourse[]>
  // public courses: ICourse[] = [];
  public coursesStart = 0;
  public coursesCount = 3;


  @Input() searchValue: string;

  constructor(
    private _courseService: CourseService,
    private _dataLoaderService: DataLoaderService,
    private store: Store<CourseState>
  ) {
    this.courses$ = store.select(store => store.courses);

  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue.currentValue) {
      this._dataLoaderService.showDataLoader();
      this._courseService.getList(this.coursesStart, null, changes.searchValue.currentValue)
        .subscribe((courses: ICourse[]) => {
          if (courses) {
            setTimeout(() => {
              this.store.dispatch(new CourseActions.GetInitialCourses(courses))
              this.courses$.subscribe(_ => {
                // this.courses = courses; no need to assign to a local variable as we can handle with async pipe inside the template
                this._dataLoaderService.hideDataLoader();
              })
            }, 100)
          }
        })
    } else {
      this._dataLoaderService.showDataLoader();
      this._courseService.getList(this.coursesStart, this.coursesCount)
        .subscribe((courses: ICourse[]) => {
          if (courses) {
            this.store.dispatch(new CourseActions.GetInitialCourses(courses))
            this.courses$.subscribe(_ => {
              // this.courses = courses;
              this._dataLoaderService.hideDataLoader();
            })
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
      this._dataLoaderService.showDataLoader();
      this._courseService.removeCourse(id)
        .subscribe(() => {
          // server removed, now we can remove from store
          this.store.dispatch(new CourseActions.RemoveCourse(id))
          // then we update local variable with the actual store data.
          this.courses$.subscribe(_ => {
            // this.courses = courses;
            this._dataLoaderService.hideDataLoader();
          })
        })
    }
  }

  public editCourse(id: string) {
    console.log('Edit event emitted with id: ', id);
  }

  loadCourses() {
    this.coursesCount += 3
    this._dataLoaderService.showDataLoader();
    this._courseService.getList(this.coursesStart, this.coursesCount)
      .subscribe((courses: ICourse[]) => {
        setTimeout(() => {
          this.store.dispatch(new CourseActions.GetInitialCourses(courses))
          this.courses$.subscribe(_ => {
            this._dataLoaderService.hideDataLoader();
          })
        }, 300)
      })
  }
}
