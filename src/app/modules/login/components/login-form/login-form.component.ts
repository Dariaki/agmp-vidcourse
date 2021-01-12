import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../../../shared/interfaces/user.interface';
import { AuthenticationService } from '../../../../services/authentication.service';
import { DataLoaderService } from '../../../../services/data-loader.service';

@Component({
  selector: 'agmp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public userData: ILogin;

  constructor(
    private authenticationService: AuthenticationService,
    private _dataLoaderService: DataLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearData();
  }

  public clearData() {
    this.userData = {
      login: '',
      password: ''
    }
  }

  public submitLoginInfo() {
    // should return promise
    this.authenticationService.loginUser({
      ...this.userData
    }).subscribe(() => {
      setTimeout(() => {
        this._dataLoaderService.hideDataLoader();
        this.clearData();
        this.router.navigate(['/courses'])
      }, 200)
    })
  }
}
