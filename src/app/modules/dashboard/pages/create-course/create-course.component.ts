import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agmp-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  public courseData;

  constructor() {
    this.courseData = {
      title: '',
      description: '',
      date: '',
      time: ''
    }
  }

  ngOnInit(): void {
  }

  createCourse() {
    console.log('Course Data:', this.courseData);
  }
}
