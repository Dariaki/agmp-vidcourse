import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';


@Component({
  selector: 'agmp-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TagInputComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TagInputComponent,
      multi: true,
    }
  ]
})
export class TagInputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() required: boolean;
  @Input() optionsList: any[];

  selectedIndex: number;
  chips: { name: string }[];
  inputValue: string;
  showDropdown: boolean;

  @ViewChild('optionsListElement') optionsListElement: ElementRef<HTMLInputElement>
  @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>


  constructor() {
    console.log("optionsList", this.optionsList);
    this.chips = [];
    this.inputValue = '';
    this.showDropdown = false;
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
  }

  writeValue(obj: any) {
    obj = this.chips;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange(event) {}

  onTouched() {}

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('validating')
    if (this.required) {
      if (this.chips.length !== 0) {
        return null;
      } else {
        return { required: true, details: { message: 'At least one author should be selected' } }
      }
    }
    return null;
  }

  createChip(chipValue: string) {
    this.onTouched();
    let chipObject = {
      name: chipValue,
    };
    this.chips.push(chipObject)
    this.onChange(this.chips);
    this.inputValue = ''
    console.log('this.chips', this.chips);
  }

  /**
   * Verifies if input value is not empty and that input matches one of the option.
   * @param value - input value
   * @return boolean
   */
  verifyInputValue(value) {
    let isValueAmongOptions = this.optionsList.some(option => value.trim() === option.name);
    return value && isValueAmongOptions;
  }

  /**
   * OnBlur event. Value check and creation of a new chip.
   * Value should be sent to the control within this event
   */
  onSelectorCompletion() {
    this.onTouched();
    console.log('OnBlur')
    if (this.verifyInputValue(this.inputValue)) {
      this.createChip(this.inputValue);
      this.onChange(this.chips); // responsible for giving authors control a value;
      this.inputValue = '';
    }
  }

  onFocusOut(event) {
    if (this.optionsListElement?.nativeElement != event.relatedTarget) {
      this.showDropdown = false;
      console.log('Can close')
    }
  }

  onInputChange(value: any) {
    this.inputValue = value;
  }

  removeChip(id) {
    this.chips.splice(id, 1);
    this.onChange(this.chips);
  }

  /**
   * If Enter is pressed - repeat onblur actions and prevent page change
   * */
  checkKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('event.key');
      this.inputElement.nativeElement.blur(); // this.onSelectorCompletion(); -- triggers
      this.showDropdown = false;
      return false;
    }
    // TODO : Workaround to make the control react on key events
    // if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    //   this.simulateSelectionWithKeys(event.key);
    // }
  }

  // TODO : Workaround to make the control react on key events
  // [ngClass]="{'selected': i === selectedIndex}"
  // simulateSelectionWithKeys(key) {
  //   if (key === 'ArrowUp'  && this.selectedIndex > 0) {
  //     this.selectedIndex--;
  //   } else if (key === 'ArrowDown' && this.selectedIndex < (this.optionsList.length - 1)) {
  //     this.selectedIndex++;
  //   }
  // }

  // TODO : Workaround to make the control react on key events
  // (mousemove)="highlightOption(i)"
  // highlightOption(optionIndex: number) {
  //   this.selectedIndex = optionIndex;
  // }

  openOptionsDropdown() {
    this.showDropdown = true;
  }

  onOptionSelect(event) {
    this.createChip(event.target.innerText);
    this.showDropdown = false;
  }
}
