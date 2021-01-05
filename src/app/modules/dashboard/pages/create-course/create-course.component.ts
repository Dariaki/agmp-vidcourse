import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '../../interfaces/course.interface';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'agmp-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  public courseData: ICourse;

  constructor(
    private courseService: CourseService,
    private router: Router
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
    this.courseService.createCourse({...this.courseData})
      .then(() => {
        this.clearData();
        this.router.navigate(['/courses'])
      })
  }
}
