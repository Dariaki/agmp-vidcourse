import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


export class LoginFormModel {

  //
  // Public properties
  public get userDataForm(): FormGroup {
    return this._userDataForm;
  }

  public get userLoginControl(): AbstractControl {
    return this._userDataForm.get('login')
  }

  public get userLogin(): string {
    return this._userDataForm.get('login').value
  }

  public set userLogin(val: string) {
    this._userDataForm.get('login').setValue(val);
  }

  public get userPassword(): string {
    return this._userDataForm.get('password').value
  }

  public set userPassword(val: string) {
    this._userDataForm.get('password').setValue(val);
  }

  public resetForm(): void {
    this.userDataForm.reset();
  }

  //
  // Private properties
  private readonly _userDataForm: FormGroup; // field is assigned only in constructor and can be made readonly

  //
  // Constructor
  constructor() {
    this._userDataForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('') // if we provide [Validators.required], control @Self will be invalid
    })
  }

}
