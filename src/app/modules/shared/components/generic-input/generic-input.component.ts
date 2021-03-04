import { Component, Input, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'agmp-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})


export class GenericInputComponent implements OnInit, ControlValueAccessor {

  //
  // Public properties
  public errorMessage: string;

  @Input() type: string
  @Input() label: string;
  @Input() placeholder: string;
  @Input() name: string;
  /* If true textarea is displayed, otherwise - input */
  @Input() extended: boolean;
  @Input() required: boolean;
  @Input() maxLength: number;

  //
  // Constructor
  constructor(@Self() public controlContainer: NgControl) {

    this.controlContainer.valueAccessor = this;

    this.type = 'text';
    this.label = '';
    this.placeholder = '';
    this.name = '';
    this.extended = false;
    this.required = false;
    this.maxLength = null;
  }

  public ngOnInit(): void {
    const control = this.controlContainer.control;
    const validators: ValidatorFn[] = [];

    // console.log('this.controlContainer',this.controlContainer);
    // console.log('this.controlContainer.valid',this.controlContainer.valid);
    // console.log('this.controlContainer.control',this.controlContainer.control);

    if (this.required) {
      // console.log('required:')
      validators.push(Validators.required);
    }
    if (this.maxLength) {
      // console.log('Length:');
      validators.push(Validators.maxLength(this.maxLength));
    }

    this.errorMessage = this._setupErrorMessage(control);

    control.setValidators(validators);

  }

  writeValue(value: any) { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // validate(control: AbstractControl): ValidationErrors | null {
  //   if (this.required) {
  //     return { required: { valid: false, message: 'This filed is required' } };
  //   }
  //   // if (this.maxLength) {
  //   //   return { maxlength: { valid: false, message: 'No more' } };
  //   // }
  //   return null;
  // }

  onChange(event) { }

  onTouched() { }

  public onInputReceived(value: any): void {
      // this.onTouched();
      this.onChange(value);
      this.errorMessage = this._setupErrorMessage(this.controlContainer.control);
  }

  private _setupErrorMessage(control: AbstractControl): string {
    let errorMessage: string;

    if (control.errors?.required) {
      errorMessage =  `${this.label} must be provided`;
    }
    if (control.errors?.maxlength) {
      errorMessage = `No more than ${this.maxLength} characters expected`
    }
    return errorMessage;
  }

}
