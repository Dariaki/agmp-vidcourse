import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'agmp-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimePickerComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TimePickerComponent,
      multi: true,
    },
  ]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor, Validator {

  public outputValue: string;
  public inputValue: string;

  @Input() required: boolean;
  @Input() label: string;
  @Input() name: string
  @Input() placeholder: string

  private _forbiddenSymbols: string[];

  constructor() {
    this._forbiddenSymbols = [ 'e', '+', '-', '.'];

  }

  ngOnInit(): void {
  }

  writeValue(obj: any) {
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
      if (this.required && !this.outputValue) {
        return { required: { message: `${this.label} must be provided`} }
      } else {
        return null;
      }
  }

  onChange(val) {}

  onTouched() {}

  onInputChange(value) {
    this.onChange(value);
    this.outputValue = value;

  }

  checkKeyInputValue(key) {
    let isInputForbidden = this._forbiddenSymbols.some(symbol => symbol === key);
    if (isInputForbidden) {
      return false;
    }
  }
}
