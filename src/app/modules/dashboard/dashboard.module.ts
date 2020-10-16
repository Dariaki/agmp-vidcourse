import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourseComponent } from './pages/course/course.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseItemComponent } from "./components/course-item/course-item.component";
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CourseComponent,
    DashboardHeaderComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DashboardModule { }
