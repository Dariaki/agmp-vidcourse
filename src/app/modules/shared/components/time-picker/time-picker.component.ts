import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'agmp-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  @Input() inputModel: number;
  @Output() inputModelChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  processTime() {
    if (this.inputModel) {
      this.inputModelChange.emit(this.inputModel);
    }
  }
}
