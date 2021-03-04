import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';
import { DataLoaderService } from '../../../../services/data-loader.service';
import { CourseState } from '../../../shared/interfaces/states/course.state';
import * as CourseActions from '../../../../store/actions/courses.actions';

@Component({
  selector: 'agmp-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  public courseData: ICourse;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private _dataLoaderService: DataLoaderService,
    private store: Store<CourseState>
  ) { }

  ngOnInit(): void {
    this.clearData();
  }

  clearData() {
    this.courseData = {
      id: null,
      name: '',
      length: 0,
      description: '',
      date: '',
      authors: [],
      isTopRated: false
    }
  }

  createCourse() {
    // console.log('Course Data:', this.courseData);
    this.courseData.id = Math.floor(Math.random() * 1001);
    this._dataLoaderService.showDataLoader();
    this.courseService.createCourse({...this.courseData})
      .subscribe(() => {
        this.store.dispatch(new CourseActions.CreateCourse({...this.courseData}))
        this.clearData();
        this.router.navigate(['/courses'])
      })
  }
}
