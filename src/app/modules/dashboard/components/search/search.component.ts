import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'agmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchValue = ""
  }

  search() {
    this.onSearch.emit(this.searchValue)
    // console.log('Search Value: ', this.searchValue);
  }
}
