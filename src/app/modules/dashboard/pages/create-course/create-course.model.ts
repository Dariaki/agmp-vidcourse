import { FormControl, FormGroup } from '@angular/forms';


export class CreateCourseModel {

  private readonly _createCourseForm: FormGroup;

  get createCourseForm() {
    return this._createCourseForm;
  }

  get createCourseFormValue() {
    return this._createCourseForm.value
  }

  constructor() {
    this._createCourseForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(''),
      length: new FormControl(0),
      description: new FormControl(''),
      date: new FormControl(''),
      authors: new FormControl([]),
      isTopRated: new FormControl(false),
    })
  }

  public setAuthors() {
    return this.createCourseForm.get('authors').value.map(author => ({
      id: Math.floor(Math.random() * 1001),
      name: author.name.split(' ')[0],
      lastName: author.name.split(' ')[1],
    }));
  }

  public setForm() {
    this._createCourseForm.setValue({
      id: Math.floor(Math.random() * 1001),
      name: this._createCourseForm.get('name').value,
      length: this.createCourseForm.get('length').value,
      description: this._createCourseForm.get('description').value,
      date: this.createCourseForm.get('date').value,
      authors: this.setAuthors(),
      isTopRated: this.createCourseForm.get('isTopRated').value,
    })
  }

  public resetForm() {
    this._createCourseForm.reset();
  }
}
