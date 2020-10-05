import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'agmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('AGMP VidCourses App');
    meta.addTags([
      {name: 'keywords', content: 'angular, video courses, education, programming'},
      {name: 'description', content: 'Angular application for video courses'},
    ]);
  }

}
