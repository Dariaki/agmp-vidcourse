import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LoginComponent } from './modules/login/login.component';
import {CreateCourseComponent} from './modules/dashboard/pages/create-course/create-course.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/create',
    component: CreateCourseComponent
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
