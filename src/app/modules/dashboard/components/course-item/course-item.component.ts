import {Component, Input, OnInit} from '@angular/core';
import { ICourse } from "../../interfaces/course.interface";

@Component({
  selector: 'agmp-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;

  constructor() { }

  ngOnInit(): void {
  }

}
