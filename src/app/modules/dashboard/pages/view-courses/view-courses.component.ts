import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agmp-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {

  public searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  processSearch(search: string) {
    this.searchValue = search;
  }

}
