import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ILogin } from '../../../shared/interfaces/user.interface';
import { LoginFormModel } from './login-form.model';
import { AuthenticationService } from '../../../../services/authentication.service';
import { DataLoaderService } from '../../../../services/data-loader.service';



@Component({
  selector: 'agmp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  //
  // Public properties
  public model: LoginFormModel;

  //
  // Private properties
  private _subscribed: boolean;

  @ViewChild('userName') public userName: ElementRef;

  //
  // Constructor
  constructor(
    private authenticationService: AuthenticationService,
    private _dataLoaderService: DataLoaderService,
    private router: Router
  ) {
    console.log('constructor');
    this.model = new LoginFormModel();

  }

  ngOnInit(): void {
    this._subscribed = true;

    console.log('onInit')
    // on destroy we stop listening for the events;
    // this.model.userLoginControl.statusChanges.pipe(
    //   takeWhile( _ => this._subscribed)
    // ).subscribe( _ => console.log('loginControl.status',this.model.userLoginControl.status));

  }

  ngOnDestroy() {
    this._subscribed = false;
  }


  public submitLoginInfo() {
    // console.log('submitLoginInfo');
    // console.log('LOGIN CONTROL', this.userDataForm.get('login'));
    // console.log('LOGIN CONTROL VALUE', this.userDataForm.get('login').value);

    // TODO: REAL IMPLEMENTATION
    const userData: ILogin = {
      login: this.model.userLogin,
      password: this.model.userPassword,
    }
    // console.log("userLoginControl valid?", this.model.userLoginControl.valid);
    // console.log("password valid?", this.model.userDataForm.get('password').valid);
    //
    // console.log("userLoginControl errors:", this.model.userLoginControl);
    // console.log("userLoginControl errors:", this.model.userLoginControl.errors);

    // console.log('this.userName',this.userName);

    this._dataLoaderService.showDataLoader();
    // should return promise
    this.authenticationService.loginUser(userData).subscribe(() => {
      setTimeout(() => {
        this._dataLoaderService.hideDataLoader();
        this.model.resetForm();
        this.router.navigate(['/courses'])
      }, 200)
    })
  }

}
