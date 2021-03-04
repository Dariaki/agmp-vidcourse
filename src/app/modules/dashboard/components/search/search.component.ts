import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'agmp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchValue: string;
  public searchForm: FormGroup;

  private $search = new Subject<string>();


  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchValue: new FormControl('')
    })

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
    let searchValue = this.searchForm.get('searchValue').value
    this.$search.next(searchValue);
    // console.log('Search Value: ', this.searchValue);
  }
}
