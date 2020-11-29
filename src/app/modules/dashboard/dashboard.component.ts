import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agmp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchValue: string;
  constructor() { }

  ngOnInit(): void {
  }

  processSearch(search: string) {
    this.searchValue = search;
  }
}
