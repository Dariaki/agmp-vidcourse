import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';
import { DataLoaderService } from '../../../../services/data-loader.service';

@Component({
  selector: 'agmp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  currentRoute: string
  course: ICourse;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _dataLoaderService: DataLoaderService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this._dataLoaderService.showDataLoader();
    this.route.params.subscribe(path =>
      this.courseService.getCourseById(path.id).subscribe(course => {

        console.log('courses before', course)
        if (!course.wow) {
          course = { ...course, wow: 'Poop'}
        }
        console.log('courses after', course)

        this.course = course;
        this._dataLoaderService.hideDataLoader();
      })
    )
  }

}
