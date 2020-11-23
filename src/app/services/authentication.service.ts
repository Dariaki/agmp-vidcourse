import { Injectable } from '@angular/core';
import { IUser } from '../modules/shared/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated$ = new BehaviorSubject(false);

  constructor() { }

  public loginUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticated$.next(this.isAuthenticated());
  }

  public logoutUser() {
    localStorage.removeItem('user');
    this.authenticated$.next(this.isAuthenticated());
  }

  public isAuthenticated(): boolean {
    let userInfo = localStorage.getItem('user');
    let userInfoParsed = JSON.parse(userInfo);
    return !!userInfoParsed;

  }

  public getUserInfo() {
    let userInfo = localStorage.getItem('user');
    return JSON.parse(userInfo);
  }
}
