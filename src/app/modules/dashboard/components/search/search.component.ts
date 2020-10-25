import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string

  constructor() { }

  ngOnInit(): void {
    this.searchValue = ""
  }

  search() {
    console.log('Search Value: ', this.searchValue);
  }
}
