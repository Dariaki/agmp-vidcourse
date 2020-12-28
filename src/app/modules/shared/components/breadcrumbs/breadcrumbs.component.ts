import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators'
import {CourseService} from '../../../../services/course.service';


export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'agmp-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: IBreadCrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root));
  }


  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {

    let label;
    let path;

    if (route.routeConfig && route.routeConfig.data) {
       label = route.routeConfig.data.breadcrumb;
    } else {
      label = ''
    }
    path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if(isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = this.courseService.getCourseTitle(route.snapshot.params[paramName]);
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }


}
