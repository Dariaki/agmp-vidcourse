import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'agmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  $search = new Subject<string>();
  searchValue: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.searchValue = ""

    this.$search
      .pipe(
        filter(value => value.length > 3 || value.length === 0),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.onSearch.emit(value)
      })

  }

  search() {
    this.$search.next(this.searchValue);
    // console.log('Search Value: ', this.searchValue);
  }
}
