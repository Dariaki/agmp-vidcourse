import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../shared/interfaces/user.interface';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'agmp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public userData: IUser;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.clearData();
  }

  public clearData() {
    this.userData = {
      id: '',
      name: '',
      email: '',
      password: ''
    }
  }

  public submitLoginInfo() {
    this.authenticationService.loginUser({
      ...this.userData,
      id: Math.floor(Math.random() * 10000).toString()
    })
    this.clearData();
    console.log('Logged in successfully');
  }
}
