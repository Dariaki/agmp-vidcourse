import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAuthorsList, ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';
import { DataLoaderService } from '../../../../services/data-loader.service';
import { CourseState } from '../../../shared/interfaces/states/course.state';
import { CreateCourseModel } from './create-course.model';
import * as CourseActions from '../../../../store/actions/courses.actions';

@Component({
  selector: 'agmp-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  public courseData: ICourse;
  public model: CreateCourseModel;
  public authors: IAuthorsList[];

  constructor(
    private _courseService: CourseService,
    private router: Router,
    private _dataLoaderService: DataLoaderService,
    private store: Store<CourseState>
  ) {
    this.model = new CreateCourseModel();
  }

  public ngOnInit(): void {
    this.fetchAuthors();
  }

  public fetchAuthors() {
    this._dataLoaderService.showDataLoader();
    this._courseService.getAuthors().subscribe(authorsList => {
      this.authors = authorsList;
      this._dataLoaderService.hideDataLoader();
    })
  }

  public createCourse() {
    this.model.setForm();
    this._dataLoaderService.showDataLoader();
    this._courseService.createCourse(this.model.createCourseForm.value).subscribe(() => {
        this.store.dispatch(new CourseActions.CreateCourse({...this.courseData}))
        this._dataLoaderService.hideDataLoader();
        this.model.resetForm();
        this.router.navigate(['/courses'])
      })
  }

}
