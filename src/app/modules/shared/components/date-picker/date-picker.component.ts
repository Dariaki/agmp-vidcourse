import {Component, EventEmitter, Input, OnInit, Output, Self} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  ValidationErrors,
  Validator, ValidatorFn, Validators
} from '@angular/forms';

@Component({
  selector: 'agmp-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  public errorMessage: string;

  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() pattern: string;

  constructor(@Self() public controlContainer: NgControl) {

    this.controlContainer.valueAccessor = this;

    this.required = false;
    this.pattern = null;
    this.errorMessage = '';
  }

  ngOnInit(): void {

    this._setupControlValidators();
    this.errorMessage = this._setupErrorMessage(this.controlContainer.control);
  }

  writeValue(obj: any) {
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange(val) {}

  onTouched() {}

  onInputChange(value) {
    this.onChange(value);
    this.errorMessage = this._setupErrorMessage(this.controlContainer.control);
  }

  private _setupControlValidators() {
    const control = this.controlContainer.control;
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required)
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern))
    }

    control.setValidators(validators);
  }

  private _setupErrorMessage(control: AbstractControl): string {
    let errorMessage: string;

    if (control.errors?.required) {
      errorMessage =  `${this.label} must be provided`;
    }
    if (control.errors?.pattern) {
      errorMessage = `Invalid format, 01/01/2001 expected`
    }
    return errorMessage;
  }

}
