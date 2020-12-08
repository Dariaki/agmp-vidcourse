import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { SearchComponent } from './components/search/search.component';
import { LoadmoreComponent } from './components/loadmore/loadmore.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CourseComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
    LoadmoreComponent,
    CreateCourseComponent,
    ViewCoursesComponent
  ],
  exports: [],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
