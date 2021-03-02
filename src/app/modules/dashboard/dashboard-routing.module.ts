import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from './pages/course/course.component';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';
import { AuthorizationGuard } from '../../services/guards/authorization.guard';
import { CourseResolver } from '../../services/resolvers/course.resolver';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [AuthorizationGuard],
    data: {
      breadcrumbs: 'courses'
    },
    children: [
      {
        path: '',
        component: ViewCoursesComponent,
        data: {
          breadcrumbs: null
        }
      },
      {
        path: 'create',
        component: CreateCourseComponent,
      },
      {
        path: ':id',
        component: CourseComponent,
        data: {
          breadcrumbs: ':id'
        },
        resolve: {
          courseData: CourseResolver
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
