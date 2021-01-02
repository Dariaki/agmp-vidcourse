import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'agmp-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.scss']
})
export class LoadmoreComponent implements OnInit {

  @Output() loadCourses = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    this.loadCourses.emit();
  }
}
