import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../services/course.service';
import { ICourse } from '../../interfaces/course.interface';

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
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(path =>
      this.course = this.courseService.getCourseById(path.id)
    )
  }

}
