import { Component, OnInit } from '@angular/core';
import { ICourse } from "../../interfaces/course.interface";

@Component({
  selector: 'agmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses: ICourse[];

  constructor() { }

  ngOnInit(): void {
  }

}
